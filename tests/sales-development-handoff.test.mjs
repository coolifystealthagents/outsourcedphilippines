import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const source = fs.readFileSync('app/fleet-content.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const start = source.indexOf("'philippines-sales-development-support-research'");
const end = source.indexOf("'philippines-project-coordination-research'", start);
const record = source.slice(start, end);

test('sales development research keeps outreach approval with the client', () => {
  assert.ok(start >= 0 && end > start, 'sales-development record boundaries must exist in order');
  assert.match(record, /updated:'2026-09-15'/);
  assert.match(record, /slug:'sales-development-support'/);
  assert.match(record, /label:'Plan sales development support'/);
  assert.match(record, /prospect-record queue/);
  assert.match(record, /client approves outreach, sales claims, and contact decisions/);
  assert.match(renderer, /post\.serviceHandoff&&<section>/);
  assert.match(renderer, /href=\{`\/services\/\$\{post\.serviceHandoff\.slug\}`\}/);
});
