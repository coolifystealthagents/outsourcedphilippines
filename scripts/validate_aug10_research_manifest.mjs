import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root = process.cwd();
const fail = (message) => { throw new Error(message); };
const git = (...args) => execFileSync('git', args, {encoding:'utf8'}).trim();
const frozen = ['philippines-appointment-setting-research','philippines-ecommerce-customer-care-research','philippines-executive-travel-support-research','philippines-finance-reconciliation-support-research','philippines-healthcare-privacy-admin-research','philippines-legal-records-admin-research','philippines-project-status-reporting-research','philippines-real-estate-transaction-admin-research','philippines-recruitment-sourcing-research','philippines-sales-development-research','philippines-social-media-operations-research','philippines-sop-audit-research'];
const introductionCommit = '516c78f1dfe83d5929a024c1c28317ba2462f4b9';
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
const topKeys = ['schemaVersion','contract','targetDate','family','domain','repository','branch','minimum','priorRunId','priorIssueId','validationCommands','cleanBuildPassed','existingCompliancePassed','indexNewestFirstPassed','entries'];
JSON.stringify(Object.keys(manifest)) === JSON.stringify(topKeys) || fail('manifest top-level keys are not exact');
manifest.schemaVersion === 1 && manifest.contract === 'sites3-aug10-public-date-v6' && manifest.targetDate === '2026-08-10' && manifest.family === 'research' && manifest.domain === 'outsourcedphilippines.com' && manifest.repository === 'coolifystealthagents/outsourcedphilippines' && manifest.branch === 'main' && manifest.minimum === 10 || fail('manifest contract fields are wrong');
manifest.entries.length === 12 && frozen.every((slug, i) => manifest.entries[i].slug === slug) || fail('frozen entry identity/order is wrong');
manifest.cleanBuildPassed === true && manifest.existingCompliancePassed === true && manifest.indexNewestFirstPassed === true || fail('manifest validation flags are not true');
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const parent = git('show', `${introductionCommit}^:app/fleet-content.ts`);
for (const entry of manifest.entries) {
  const keys = ['slug','route','sourcePath','provenance','introducedByCommit','sourceDateField','sourceDate','renderedDateFields','renderedDate'];
  JSON.stringify(Object.keys(entry)) === JSON.stringify(keys) || fail(`entry keys are not exact: ${entry.slug}`);
  entry.route === `/research/${entry.slug}` && entry.sourcePath === 'app/fleet-content.ts' && entry.provenance === 'original-aug10-batch' && entry.introducedByCommit === introductionCommit && entry.sourceDateField === 'published' && entry.sourceDate === '2026-08-10' && entry.renderedDate === '2026-08-10' && entry.renderedDateFields.length > 0 && entry.renderedDateFields.every((x) => ['datePublished','article:published_time','time[datetime]'].includes(x)) || fail(`entry contract mismatch: ${entry.slug}`);
  source.includes(`makeResearch('${entry.slug}'`) || fail(`source identity missing: ${entry.slug}`);
  parent.includes(`makeResearch('${entry.slug}'`) && fail(`frozen identity existed before introduction: ${entry.slug}`);
}
const route = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
route.includes('datePublished:post.published') && route.includes('post.published') || fail('renderer does not expose published date');
const index = fs.readFileSync(path.join(root, 'app/research/page.tsx'), 'utf8');
index.includes('frozenAug10') && index.includes('b.published.localeCompare(a.published)') || fail('index tie ordering is not explicit');
fs.existsSync(path.join(root, '.next/server/app/research')) || fail('production build output is missing');
console.log(`August 10 Research manifest PASS (${manifest.entries.length} entries)`);
