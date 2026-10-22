import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const records = read('app/service-records.ts');
const detail = read('app/services/[slug]/page.tsx');
const index = read('app/services/page.tsx');
const home = read('app/page.tsx');
const contact = read('app/contact-us/page.tsx');
const commercial = `${home}\n${index}\n${detail}\n${contact}`;
const expectedSlugs = [
  'executive-administration', 'ecommerce-operations', 'real-estate-administration',
  'healthcare-administration', 'legal-administrative-support', 'bookkeeping-support',
  'customer-experience', 'digital-marketing-operations', 'sales-development-support',
  'project-coordination', 'operations-support',
];

test('all eleven service records expose the long-form field system', () => {
  for (const slug of expectedSlugs) assert.match(records, new RegExp(`slug: '${slug}'`), slug);
  assert.equal((records.match(/\bslug: '/g) || []).length, 11);
  for (const field of ['hero', 'audience', 'problem', 'inputs', 'scope', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faqs', 'related']) {
    // One type declaration plus one populated field on each of the eleven records.
    assert.equal((records.match(new RegExp(`\\b${field}:`, 'g')) || []).length, 12, field);
  }
  for (const field of ['audience', 'problem', 'inputs', 'scope', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faqs', 'related']) {
    assert.ok(detail.includes(`service.${field}`), `detail route renders ${field}`);
  }
});

test('service heroes are unique and carry intrinsic, alt, priority, and crop data', () => {
  const sources = [...records.matchAll(/hero: \{ src: '([^']+)', alt: '([^']+)', width: (\d+), height: (\d+), position: '([^']+)' \}/g)];
  assert.equal(sources.length, 11);
  assert.equal(new Set(sources.map((match) => match[1])).size, 11);
  for (const [, src, alt, width, height, position] of sources) {
    assert.ok(src.startsWith('/illustrations/'));
    assert.ok(alt.length > 30);
    assert.ok(Number(width) > 0 && Number(height) > 0 && position.length > 0);
  }
  assert.match(detail, /loading="eager"/);
  assert.match(detail, /fetchPriority="high"/);
  assert.match(detail, /style=\{\{ objectPosition: service\.hero\.position \}\}/);
});

test('commercial layouts do not use decorative zero-padded or alphabet labels', () => {
  assert.doesNotMatch(commercial, /padStart\s*\(\s*2/);
  assert.doesNotMatch(commercial, />0[1-9]</);
  assert.doesNotMatch(commercial, /Role brief\s*\/\s*0\d/i);
  assert.doesNotMatch(commercial, /className="(?:service|role)[^"]*(?:number|letter)/i);
});

test('service index includes offering, method, guidance, FAQ, and final conversion', () => {
  for (const marker of ['Service atlas', 'Operating method', 'Decision guide', 'Good first-lane signals', 'Common questions', 'Request a role brief']) assert.ok(index.includes(marker), marker);
  assert.ok(index.includes('fleetServices.map'));
  assert.ok((index.match(/<section\b/g) || []).length >= 7);
});

test('homepage keeps a compact first fold and at least four distinct long-form layout families', () => {
  const styles = read('app/home.css');
  assert.match(styles, /min-height:510px/);
  for (const marker of ['role-desk', 'role-library', 'process-field', 'handoff-section', 'decision-compass', 'closing-card']) assert.ok(home.includes(marker), marker);
  assert.ok(home.includes('/services/bookkeeping-support'));
  assert.ok(home.includes('/services/customer-experience'));
  assert.ok(home.includes('/services/project-coordination'));
});
