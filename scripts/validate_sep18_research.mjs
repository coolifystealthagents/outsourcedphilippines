import fs from 'node:fs';
const batch=fs.readFileSync(new URL('../app/sep18-research-batch.ts',import.meta.url),'utf8');
const manifest=JSON.parse(fs.readFileSync(new URL('../.paperclip/daily-content/2026-09-18/research.json',import.meta.url),'utf8'));
const blocks=batch.split(/\n\{\nslug:/).slice(1);
const fail=(message)=>{throw new Error(message)};
if(blocks.length!==5)fail(`expected 5 articles, found ${blocks.length}`);
if(manifest.required!==5||manifest.articles.length!==5)fail('manifest does not declare exactly 5 articles');
const slugs=[];
for(const block of blocks){
  const slug=block.match(/^'([^']+)'/)?.[1]??fail('article without slug');
  const words=(block.match(/\b[\w’'-]+\b/g)??[]).length;
  if(words<1200)fail(`${slug} has only ${words} source words`);
  if(!block.includes("published,hero"))fail(`${slug} does not use the batch publication date`);
  if(!block.includes("checked September 18, 2026"))fail(`${slug} lacks checked source details`);
  if(/[—–]/.test(block))fail(`${slug} contains forbidden dash punctuation`);
  slugs.push(slug);
}
if(new Set(slugs).size!==5)fail('duplicate slug in batch');
for(const article of manifest.articles){if(!slugs.includes(article.slug))fail(`manifest-only slug ${article.slug}`)}
console.log(`validated ${blocks.length} new research articles for 2026-09-18`);
