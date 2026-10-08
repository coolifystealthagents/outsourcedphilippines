import fs from 'node:fs';import {execFileSync} from 'node:child_process';
const text=fs.readFileSync('app/oct8-batch.ts','utf8'),assert=(x,m)=>{if(!x)throw new Error(m)},words=x=>x.replace(/\$\{[^}]+\}/g,' value ').trim().split(/\s+/).filter(Boolean).length;
const blogBlock=text.slice(text.indexOf('const blogSpecs'),text.indexOf('const common='));
const researchBlock=text.slice(text.indexOf('const researchSpecs'),text.indexOf('const makeResearch='));
const commonBlock=text.slice(text.indexOf('const common='),text.indexOf('export const oct8BlogPosts'));
const researchBody=text.slice(text.indexOf('body:[',text.indexOf('const makeResearch=')),text.indexOf(']});',text.indexOf('const makeResearch=')));
const slugs=block=>[...block.matchAll(/slug:'([^']+)'/g)].map(m=>m[1]);
const blogs=slugs(blogBlock),research=slugs(researchBlock);assert(blogs.length===12,`Blog count ${blogs.length}`);assert(research.length===5,`Research count ${research.length}`);assert(new Set([...blogs,...research]).size===17,'duplicate slug');
const templateWords=block=>[...block.matchAll(/`([^`]*)`/gs)].reduce((n,m)=>n+words(m[1]),0);
assert(templateWords(commonBlock)>=1100,`Blog template only ${templateWords(commonBlock)} words`);assert(templateWords(researchBody)>=1100,`Research template only ${templateWords(researchBody)} words`);
assert((text.match(/2026-10-08/g)||[]).length>=1,'date missing');
for(const [kind,count] of [['blog',12],['research',5]]){const m=JSON.parse(fs.readFileSync(`.paperclip/daily-content/2026-10-08/${kind}.json`,'utf8'));assert(m.date==='2026-10-08'&&m.count===count&&m.articles.length===count,`${kind} manifest`)}
for(const file of ['app/blog/blog-listing.tsx','app/research/page.tsx','app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx']){const page=fs.readFileSync(file,'utf8');assert(page.includes('<time')&&page.includes('Published'),`${file}: visible date`)}
const data=fs.readFileSync('app/data.ts','utf8'),fleet=fs.readFileSync('app/fleet-content.ts','utf8');assert(data.includes('...oct8BlogPosts')&&data.includes('...oct8BlogBasics'),'Blog registry');assert(fleet.includes('oct8ResearchPosts'),'Research registry');
execFileSync('git',['cat-file','-e','HEAD:public/research-batch-thumbnail.jpg'],{stdio:'ignore'});
console.log(`October 8 validation passed: Blog ${blogs.length} (${templateWords(commonBlock)} template words), Research ${research.length} (${templateWords(researchBody)} template words).`);
