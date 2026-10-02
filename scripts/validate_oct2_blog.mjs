import fs from 'node:fs';
const m=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog.json','utf8'));
const fail=x=>{throw new Error(x)};
if(m.requiredCount!==12||m.articles.length!==12)fail('expected exactly 12 Blog entries');
if(new Set(m.articles.map(x=>x.slug)).size!==12)fail('duplicate Blog slug');
if(m.publicationDate!=='2026-10-02'||m.timezone!=='UTC')fail('date/timezone mismatch');
if(m.articles.some(x=>x.bodyWords<900||x.publicationDate!==m.publicationDate||!x.contentHash||!x.sources.length))fail('article ledger gate failed');
for(const a of m.articles){const md=fs.readFileSync(`content/blog/${a.slug}.md`,'utf8');if(!md.includes('datePublished: "2026-10-02"')||!md.includes('publishedAt: "2026-10-02"'))fail(`${a.slug}: source date mismatch`);const html=fs.readFileSync(`.next/server/app/blog/${a.slug}.html`,'utf8');for(const expected of [a.slug,'2026-10-02','datePublished','/research-batch-thumbnail.jpg'])if(!html.includes(expected))fail(`${a.slug}: rendered ${expected} missing`);}
if(!fs.existsSync('public/research-batch-thumbnail.jpg'))fail('hero asset missing');
console.log(`validated 12 Blog source and rendered routes for ${m.publicationDate}; words ${m.articles.map(x=>x.bodyWords).join('/')}`);
