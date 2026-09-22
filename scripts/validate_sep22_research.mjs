import fs from 'node:fs';
const source=fs.readFileSync(new URL('../app/sep22-research-batch.ts',import.meta.url),'utf8');
const manifest=JSON.parse(fs.readFileSync(new URL('../.paperclip/daily-content/2026-09-22/research.json',import.meta.url),'utf8'));
const fail=m=>{throw new Error(m)};
const blocks=source.split(/\nbuildArticle\(\{/).slice(1);
if(blocks.length!==5)fail(`expected 5 articles, found ${blocks.length}`);
if(manifest.required!==5||manifest.articles.length!==5)fail('manifest must declare exactly 5 articles');
const common=(source.match(/function buildArticle[\s\S]*?export const sep22ResearchPosts/)?.[0]??'').match(/\b[\w'-]+\b/g)?.length??0;
const slugs=[];
for(const block of blocks){
 const slug=block.match(/slug:'([^']+)'/)?.[1]??fail('missing slug');
 const renderedEstimate=common+(block.match(/\b[\w'-]+\b/g)?.length??0);
 if(renderedEstimate<1200)fail(`${slug} has fewer than 1200 substantive rendered words`);
 if(!block.includes('checked September 22, 2026'))fail(`${slug} lacks checked source details`);
 if(/[—–]/.test(block))fail(`${slug} contains forbidden dash punctuation`);
 slugs.push(slug);
}
if(new Set(slugs).size!==5)fail('duplicate slug');
for(const article of manifest.articles)if(!slugs.includes(article.slug))fail(`manifest-only slug ${article.slug}`);
console.log('validated 5 new research articles for 2026-09-22');
