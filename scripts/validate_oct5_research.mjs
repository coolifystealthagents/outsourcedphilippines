import fs from 'node:fs';
import crypto from 'node:crypto';
import ts from 'typescript';
const root=new URL('../',import.meta.url), batchUrl=new URL('app/oct5-research-batch.ts',root);
const source=fs.readFileSync(batchUrl,'utf8'),fleet=fs.readFileSync(new URL('app/fleet-content.ts',root),'utf8');
const manifestUrl=new URL('.paperclip/daily-content/2026-10-05/research.json',root),manifest=JSON.parse(fs.readFileSync(manifestUrl,'utf8'));
const fail=m=>{throw new Error(m)};
const compile=code=>ts.transpileModule(code,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const mod={exports:{}};new Function('exports','module',compile(source))(mod.exports,mod);const posts=mod.exports.oct5ResearchPosts;
if(posts.length!==5||new Set(posts.map(p=>p.slug)).size!==5)fail('expected exactly five unique Research articles');
if(manifest.required!==5||manifest.articles.length!==5||manifest.publicationDate!=='2026-10-05'||manifest.timezone!=='UTC')fail('manifest contract mismatch');
if(!fleet.includes("'./oct5-research-batch'")||!fleet.includes('oct5ResearchPosts'))fail('October 5 batch is not wired into inventory');
const otherFiles=fs.readdirSync(new URL('app/',root)).filter(f=>/research-batch\.ts$/.test(f)&&f!=='oct5-research-batch.ts');
const prior=otherFiles.map(f=>fs.readFileSync(new URL(`app/${f}`,root),'utf8')).join('\n');
for(const p of posts){if(prior.includes(p.slug))fail(`prior inventory collision: ${p.slug}`);if(p.published!=='2026-10-05')fail(`date mismatch: ${p.slug}`);if(!manifest.articles.some(a=>a.slug===p.slug))fail(`manifest omission: ${p.slug}`)}
const words=t=>t.toLowerCase().match(/[a-z0-9]+/g)??[],shingles=t=>{const a=words(t),s=new Set();for(let i=0;i<=a.length-5;i++)s.add(a.slice(i,i+5).join(' '));return s};
const counts=posts.map(p=>words(p.body.join(' ')).length);counts.forEach((n,i)=>{if(n<1200)fail(`${posts[i].slug}: ${n} body words`)});
const owners=new Map();for(const p of posts)for(const para of p.body){const n=words(para).join(' ');if(owners.has(n))fail(`repeated paragraph: ${p.slug}`);owners.set(n,p.slug)}
const sets=posts.map(p=>shingles(p.body.join(' ')));let max=0;for(let i=0;i<sets.length;i++)for(let j=i+1;j<sets.length;j++){let x=0;for(const s of sets[i])if(sets[j].has(s))x++;max=Math.max(max,x/new Set([...sets[i],...sets[j]]).size)}if(max>=.5)fail(`shingle overlap ${max}`);
const paragraphCounts=posts.map(p=>p.body.length);if(new Set(paragraphCounts).size<3)fail('insufficiently varied article structures');
for(const a of manifest.articles){const p=posts.find(x=>x.slug===a.slug);a.contentHash=crypto.createHash('sha256').update(JSON.stringify(p)).digest('hex')}
manifest.validationResult=`pass: exact count, prior-inventory collision audit, dates, ${paragraphCounts.join('/')} body paragraphs, zero repeated substantive paragraphs, body-only words ${counts.join('/')}, maximum pairwise five-word-shingle Jaccard ${max.toFixed(4)}`;
fs.writeFileSync(manifestUrl,JSON.stringify(manifest,null,2)+'\n');
console.log(`validated October 5 Research: body words ${counts.join(', ')}; max shingle Jaccard ${max.toFixed(4)}`);
