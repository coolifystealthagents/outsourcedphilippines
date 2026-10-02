import fs from 'node:fs';
import crypto from 'node:crypto';
import ts from 'typescript';

const root=new URL('../',import.meta.url);
const source=fs.readFileSync(new URL('app/oct2-research-batch.ts',root),'utf8');
const prior=fs.readFileSync(new URL('app/sep28-research-batch.ts',root),'utf8');
const fleet=fs.readFileSync(new URL('app/fleet-content.ts',root),'utf8');
const manifestPath=new URL('.paperclip/daily-content/2026-10-02/research.json',root);
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
const fail=m=>{throw new Error(m)};
const slugs=[...source.matchAll(/slug:'(philippines-[^']+-research)'/g)].map(m=>m[1]);
if(slugs.length!==5||new Set(slugs).size!==5)fail(`expected exactly 5 unique article slugs, found ${slugs.length}`);
if(manifest.required!==5||manifest.articles.length!==5)fail('manifest must declare exactly 5 articles');
if(manifest.publicationDate!=='2026-10-02'||manifest.timezone!=='UTC')fail('manifest date or timezone mismatch');
if(!fleet.includes('oct2ResearchPosts')||!fleet.includes("'./oct2-research-batch'"))fail('batch is not wired into research inventory');
if(/[—–]/.test(source))fail('October 2 source contains forbidden dash punctuation');
for(const slug of slugs){
 if(prior.includes(`slug:'${slug}'`))fail(`${slug} collides with prior inventory`);
 if(!manifest.articles.some(a=>a.slug===slug))fail(`${slug} missing from manifest`);
}
if(!source.includes("const checked='checked October 2, 2026'")||(source.match(/\$\{checked\}/g)||[]).length<5)fail('source records lack October 2 checked dates');

const compile=code=>ts.transpileModule(code,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const priorModule={exports:{}};
new Function('exports','module',compile(prior))(priorModule.exports,priorModule);
const currentModule={exports:{}};
new Function('exports','module','require',compile(source))(currentModule.exports,currentModule,()=>priorModule.exports);
const rendered=currentModule.exports.oct2ResearchPosts;
if(rendered.length!==5)fail(`rendered count ${rendered.length}`);
const words=text=>text.toLowerCase().match(/[a-z0-9]+/g)??[];
const shingles=text=>{const tokens=words(text),set=new Set();for(let i=0;i<=tokens.length-5;i++)set.add(tokens.slice(i,i+5).join(' '));return set};
const counts=[];
const sets=rendered.map(article=>{
 const count=words(article.body.join(' ')).length;counts.push(count);
 if(count<1200)fail(`${article.slug} has ${count} substantive body words; 1200 required`);
 if(article.published!=='2026-10-02')fail(`${article.slug} publication date mismatch`);
 return shingles(article.body.join(' '));
});
let maxOverlap=0;
for(let i=0;i<sets.length;i++)for(let j=i+1;j<sets.length;j++){
 let intersection=0;for(const shingle of sets[i])if(sets[j].has(shingle))intersection++;
 const score=intersection/new Set([...sets[i],...sets[j]]).size;maxOverlap=Math.max(maxOverlap,score);
 if(score>=0.5)fail(`${slugs[i]} and ${slugs[j]} overlap ${score.toFixed(4)}`);
}
for(const article of manifest.articles){
 const renderedArticle=rendered.find(a=>a.slug===article.slug)??fail(`unrendered manifest slug ${article.slug}`);
 article.contentHash=crypto.createHash('sha256').update(JSON.stringify(renderedArticle)).digest('hex');
}
manifest.validationResult=`pass: exact count, new slugs, source dates, body-only word counts ${counts.join('/')}, maximum pairwise five-word-shingle Jaccard ${maxOverlap.toFixed(4)}`;
fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
console.log(`validated 5 new research articles for 2026-10-02; body words ${counts.join(', ')}; maximum five-word-shingle Jaccard ${maxOverlap.toFixed(4)}`);
