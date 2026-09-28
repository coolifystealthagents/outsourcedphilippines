import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import crypto from 'node:crypto';

const sourcePath='app/blog/sep28-blog-batch.ts';
const source=fs.readFileSync(sourcePath,'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const module={exports:{}};
vm.runInNewContext(js,{module,exports:module.exports,console},{filename:sourcePath});
const {sep28BlogPosts:posts,sep28BlogBasics:basics}=module.exports;
const fail=(message)=>{throw new Error(message)};
if(posts.length!==12)fail(`expected 12 posts, found ${posts.length}`);
if(new Set(posts.map(p=>p.slug)).size!==12)fail('duplicate slug in September 28 batch');
if(posts.some(p=>p.publishedAt!=='2026-09-28'))fail('publication date mismatch');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-28/blog-topics.json','utf8'));
if(JSON.stringify(posts.map(p=>p.slug))!==JSON.stringify(manifest.topics.map(t=>t.slug)))fail('topic inventory and routed batch differ');
const words=(value)=>value.match(/[A-Za-z0-9][A-Za-z0-9’'-]*/g)||[];
const shingles=(value)=>{const w=words(value.toLowerCase());return new Set(w.slice(0,-4).map((_,i)=>w.slice(i,i+5).join(' ')))};
const similarity=(a,b)=>{let shared=0;for(const s of a)if(b.has(s))shared++;return shared/(a.size+b.size-shared)};
const rows=posts.map(p=>{const basic=basics[p.slug];if(!basic)fail(`missing body for ${p.slug}`);if(!basic.sources?.length)fail(`missing source for ${p.slug}`);const body=basic.routeBody.join(' ');const count=words(body).length;if(count<900)fail(`${p.slug} has ${count} body-only words`);return {slug:p.slug,words:count,hash:crypto.createHash('sha256').update(body).digest('hex'),body,set:shingles(body)}});
let maximum={score:0,pair:[]};
for(let i=0;i<rows.length;i++)for(let j=i+1;j<rows.length;j++){const score=similarity(rows[i].set,rows[j].set);if(score>maximum.score)maximum={score,pair:[rows[i].slug,rows[j].slug]}}
if(maximum.score>=.5)fail(`five-word-shingle overlap ${(maximum.score*100).toFixed(2)}% for ${maximum.pair.join(' / ')}`);
console.log(JSON.stringify({family:'blog',required:12,found:posts.length,publicationDate:'2026-09-28',articles:rows.map(({slug,words,hash})=>({slug,words,hash})),maximumFiveWordShingleJaccard:{percent:Number((maximum.score*100).toFixed(2)),pair:maximum.pair}},null,2));
