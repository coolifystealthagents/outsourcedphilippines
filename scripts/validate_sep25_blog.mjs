import fs from 'node:fs';import path from 'node:path';
const source=fs.readFileSync('app/blog/sep25-blog-batch.ts','utf8');
const slugs=[...source.matchAll(/slug:'([^']+)'/g)].map(x=>x[1]);
if(slugs.length!==12||new Set(slugs).size!==12)throw new Error(`expected 12 unique slugs, found ${slugs.length}`);
if(!source.includes("publishedAt='2026-09-25'"))throw new Error('publication date mismatch');
const allFiles=fs.readdirSync('app/blog').filter(x=>x.endsWith('.ts')).filter(x=>x!=='sep25-blog-batch.ts').map(x=>fs.readFileSync(path.join('app/blog',x),'utf8')).join('\n');
for(const slug of slugs){
 if(allFiles.includes(`slug:'${slug}'`)||allFiles.includes(`slug: '${slug}'`))throw new Error(`duplicate slug: ${slug}`);
 const htmlPath=path.join('.next/server/app/blog',slug+'.html');
 const html=fs.readFileSync(htmlPath,'utf8');
 const text=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&\w+;/g,' ').replace(/\s+/g,' ').trim();
 const words=text.split(' ').filter(Boolean).length;
 if(words<900)throw new Error(`${slug}: only ${words} rendered words`);
 if(!html.includes(`<link rel="canonical" href="https://outsourcedphilippines.com/blog/${slug}"`))throw new Error(`${slug}: canonical missing`);
 if(!html.includes('2026-09-25')||!html.includes('datePublished'))throw new Error(`${slug}: publication metadata missing`);
 if(!html.includes('/services/operations-support'))throw new Error(`${slug}: on-site CTA missing`);
}
console.log(`validated ${slugs.length} unique articles: >=900 rendered words, canonical, datePublished, and CTA present`);
