import fs from 'node:fs';
import crypto from 'node:crypto';
import ts from 'typescript';
const root=new URL('../',import.meta.url);
const source=fs.readFileSync(new URL('app/sep28-research-batch.ts',root),'utf8');
const fleet=fs.readFileSync(new URL('app/fleet-content.ts',root),'utf8');
const manifestPath=new URL('.paperclip/daily-content/2026-09-28/research.json',root);
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
const fail=m=>{throw new Error(m)};
const blocks=source.split(/\nbuildArticle\(\{/).slice(1);
if(blocks.length!==5)fail(`expected 5 articles, found ${blocks.length}`);
if(manifest.required!==5||manifest.articles.length!==5)fail('manifest must declare exactly 5 articles');
if(manifest.publicationDate!=='2026-09-28'||manifest.timezone!=='UTC')fail('manifest date or timezone mismatch');
if(!fleet.includes('sep28ResearchPosts')||!fleet.includes("'./sep28-research-batch'"))fail('batch is not wired into research inventory');
const known=fs.readdirSync(new URL('app/',root)).filter(x=>x.endsWith('research-batch.ts')&&x!=='sep28-research-batch.ts').map(x=>fs.readFileSync(new URL(`app/${x}`,root),'utf8')).join('\n');
const slugs=[];
for(const block of blocks){
 const slug=block.match(/slug:'([^']+)'/)?.[1]??fail('missing slug');
 if(!block.includes('checked September 28, 2026'))fail(`${slug} lacks checked source details`);
 if(/[—–]/.test(block))fail(`${slug} contains forbidden dash punctuation`);
 if(known.includes(`slug:'${slug}'`))fail(`${slug} is not new`);
 slugs.push(slug);
}
if(new Set(slugs).size!==5)fail('duplicate slug');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const module={exports:{}};
new Function('exports','module',js)(module.exports,module);
const rendered=module.exports.sep28ResearchPosts;
const words=text=>text.toLowerCase().match(/[a-z0-9]+/g)??[];
const shingles=text=>{const tokens=words(text),set=new Set();for(let i=0;i<=tokens.length-5;i++)set.add(tokens.slice(i,i+5).join(' '));return set};
const sets=rendered.map(article=>{
 const count=words(article.body.join(' ')).length;
 if(count<1200)fail(`${article.slug} has ${count} substantive body words; 1200 required`);
 return shingles(article.body.join(' '));
});
let maxOverlap=0;
for(let i=0;i<sets.length;i++)for(let j=i+1;j<sets.length;j++){
 let intersection=0;
 for(const shingle of sets[i])if(sets[j].has(shingle))intersection++;
 const score=intersection/new Set([...sets[i],...sets[j]]).size;
 maxOverlap=Math.max(maxOverlap,score);
 if(score>=0.5)fail(`${slugs[i]} and ${slugs[j]} have ${score.toFixed(4)} five-word-shingle Jaccard overlap`);
}
for(const article of manifest.articles){
 if(!slugs.includes(article.slug))fail(`manifest-only slug ${article.slug}`);
 const block=blocks.find(x=>x.includes(`slug:'${article.slug}'`));
 article.contentHash=crypto.createHash('sha256').update(block).digest('hex');
}
fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
console.log(`validated 5 new research articles for 2026-09-28; body words ${rendered.map(a=>words(a.body.join(' ')).length).join(', ')}; maximum five-word-shingle Jaccard ${maxOverlap.toFixed(4)}`);
