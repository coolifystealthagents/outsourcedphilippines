import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const source=fs.readFileSync('app/fleet-content.ts','utf8');
const renderer=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
const start=source.indexOf("'philippines-marketing-operations-research'");
const end=source.indexOf("'philippines-data-entry-quality-research'",start);
const record=source.slice(start,end);

test('marketing operations research owns a bounded Philippines service handoff',()=>{
  assert.ok(start>=0&&end>start,'marketing research record boundaries must exist in order');
  assert.match(record,/updated:'2026-09-04'/);
  assert.match(record,/slug:'digital-marketing-operations'/);
  assert.match(record,/label:'Plan digital marketing operations support'/);
  assert.match(record,/campaign-preparation queue/);
  assert.match(record,/brand owner approves publication and changes/);
  assert.match(renderer,/post\.serviceHandoff&&<section>/);
  assert.match(renderer,/href=\{`\/services\/\$\{post\.serviceHandoff\.slug\}`\}/);
});