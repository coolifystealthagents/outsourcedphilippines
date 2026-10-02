import fs from 'node:fs';

const releaseDate=process.env.RELEASE_DATE;
if(!/^\d{4}-\d{2}-\d{2}$/.test(releaseDate||''))throw new Error('RELEASE_DATE=YYYY-MM-DD is required');
const inventory=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/blog-topics.json','utf8'));
const clean=s=>s.replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\s+/g,' ').trim();
const rows=inventory.topics.map(topic=>{
 const raw=fs.readFileSync(`content/blog/${topic.slug}.md`,'utf8');
 const front=raw.match(/^---\n([\s\S]*?)\n---/)?.[1]||'';
 const field=name=>front.match(new RegExp(`^${name}:\\s*"([^"]*)"`,'m'))?.[1];
 const body=raw.slice(raw.indexOf('\n# ')+1);
 const parts=body.split(/^## /m);
 const intro=clean(parts[0].replace(/^# .*\n/,''));
 const sections=parts.slice(1).map(part=>{const [heading,...rest]=part.split('\n');const paras=rest.join('\n').split(/\n\n+/).map(clean).filter(Boolean).filter(p=>!p.startsWith('- '));return {title:heading.trim(),paragraphs:paras,checks:[]}}).filter(s=>s.title!=='Source');
 const sourcePart=parts.find(p=>p.startsWith('Source\n'))||'';
 const sourceMatch=sourcePart.match(/- \[([^\]]+)\]\(([^)]+)\)/);
 return {topic,post:{slug:topic.slug,title:field('title'),excerpt:field('description'),minutes:10,publishedAt:releaseDate,heroImage:'/research-batch-thumbnail.jpg'},basic:{intro,sections,sources:sourceMatch?[{name:sourceMatch[1],url:sourceMatch[2]}]:[],servicePath:topic.servicePath,serviceLabel:`Explore ${topic.pillar.toLowerCase()}`}};
});
const output=`// Generated from independently authored Markdown by scripts/generate_oct2_blog.mjs.\nexport const oct2BlogPosts=${JSON.stringify(rows.map(r=>r.post),null,2)} as const;\nexport const oct2BlogBasics=${JSON.stringify(Object.fromEntries(rows.map(r=>[r.topic.slug,r.basic])),null,2)} as const;\n`;
fs.writeFileSync('app/blog/oct2-blog-batch.ts',output);
console.log(`generated ${rows.length} routed Blog articles for ${releaseDate}`);
