import fs from 'node:fs';
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-18/blog.json','utf8'));
const source=fs.readFileSync('app/blog/sep18-blog-batch.ts','utf8');
if(manifest.entries.length!==12) throw new Error(`expected 12 entries, got ${manifest.entries.length}`);
const slugs=manifest.entries.map(x=>x.slug);
if(new Set(slugs).size!==12) throw new Error('duplicate manifest slug');
for(const entry of manifest.entries){
  if(!source.includes(`slug:'${entry.slug}'`)) throw new Error(`missing source slug: ${entry.slug}`);
  if(!entry.contentHash.startsWith('sha256:')||!entry.liveUrl.endsWith(entry.slug)) throw new Error(`bad ledger entry: ${entry.slug}`);
}
if(!source.includes("const publishedAt = '2026-09-18'")) throw new Error('publication date mismatch');
console.log('validated 12 unique September 18 Blog routes and ledger entries');
