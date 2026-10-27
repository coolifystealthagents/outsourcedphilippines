# Service-led topical authority map

Status: source-only planning record. It does not add reader-facing links or claim a public release.

## Scope and rules

This map covers the eleven generated Philippines-only service pages in `app/fleet-content.ts`. Each supporting research route answers a narrower planning question for the same service pillar. A future editor may add only one contextual handoff after checking the rendered source, target route, service scope, and deployment routine.

- Do not duplicate the existing project-coordination handoff.
- Keep Philippines-based staffing context and the stated owner-approval boundaries.
- Do not treat public context data as a promise about a worker, provider, price, or business outcome.
- A menu, footer, related-card, or generic contact link does not count as the planned contextual handoff.

## Pillars and next editorial reviews

| Service pillar | Existing supporting route | Reader decision | Current state | Controlled next action |
| --- | --- | --- | --- | --- |
| `/services/executive-administration` | `/research/philippines-executive-assistance-research` | Which executive preparation tasks can be handed over while approvals stay with the owner? | Existing route-specific handoff: `Plan Executive Administration support` | Do not add another handoff. Recheck the existing source and target only if the renderer changes. |
| `/services/ecommerce-operations` | `/research/philippines-ecommerce-chargeback-evidence-packets-research` | How can a merchant review a chargeback evidence packet before keeping the dispute decision? | Existing route-specific handoff: `Plan ecommerce operations support` | Do not add another handoff. The packet route keeps dispute decisions with the authorized merchant owner. |
| `/services/real-estate-administration` | `/research/philippines-property-deadline-control-research` | How can a property team test deadline control without shifting licensed judgment? | Existing route-specific handoff: `Plan real estate administration support` | Do not add another handoff. The source route limits the service lane to shadow-calendar preparation. |
| `/services/healthcare-administration` | `/research/philippines-healthcare-minimum-necessary-view-research` | How can an admin queue limit fields before sensitive or clinical decisions are escalated? | Existing route-specific handoff: `Plan healthcare administration support` | Do not add another handoff. The source route retains owner approval and excludes clinical authority. |
| `/services/legal-administrative-support` | `/research/philippines-legal-intake-conflict-routing-research` | Which intake details can be prepared before a professional decides a conflict question? | Existing route-specific handoff: `Plan legal administrative support` | Do not add another handoff. The source route separates party-name preparation from professional judgment. |
| `/services/bookkeeping-support` | `/research/philippines-bookkeeping-close-cutoff-research` | Which month-end exceptions can be prepared before financial approval stays with the reviewer? | Existing route-specific handoff: `Plan bookkeeping support` | Do not add another handoff. The source route keeps recognition, tax, and presentation decisions with the reviewer. |
| `/services/customer-experience` | `/research/philippines-customer-support-outsourcing-data` | What evidence should a support queue show before a manager handles complaints, refunds, or exceptions? | Existing route-specific handoff: `Plan customer experience support` | Do not add another handoff. The source route keeps responses, refunds, and policy exceptions with the accountable owner. |
| `/services/digital-marketing-operations` | `/research/philippines-marketing-operations-research` | Which campaign preparation and QA tasks can proceed before a brand owner approves publication? | Existing route-specific handoff: `Plan digital marketing operations support` | Do not add another handoff. The source route keeps publication and change approval with the brand owner. |
| `/services/sales-development-support` | `/research/philippines-sales-development-support-research` | Which prospecting and record-hygiene tasks can be measured without making sales claims? | Locally verified route-specific handoff: `Plan sales development support`; public verification pending | Do not add another handoff. Recheck the saved route after an authorized rollout. |
| `/services/project-coordination` | `/research/philippines-project-coordination-research` | How can a manager define a project queue, review owner, and exception path? | Existing route-specific handoff: `Plan Philippines project coordination support` | Do not add another handoff. Recheck the existing source and target only if the renderer changes. |
| `/services/operations-support` | `/research/oph-aged-backlog-evidence`, `/research/oph-duplicate-request-rate`, `/research/oph-role-change-continuity`, `/research/oph-document-expiry-risk`, and `/research/oph-shared-inbox-coverage` | Which routine queue needs a bounded evidence lane before an owner decides what to change? | Locally verified October 26 cohort: each source has one `Plan Philippines operations support` handoff | Do not add another handoff to these five sources. Preserve their distinct reader questions; recheck only after a renderer or service-scope change. |

## Registration prerequisites — non-generated handoff targets

The research renderer emits `serviceHandoff.slug` as `/services/{slug}`. The services route, service static parameters, and sitemap instead derive only from the ten `fleetServices` entries. `app/data.ts` has a legacy service list, but it does not register service routes, cards, or sitemap entries. Its presence is not proof that a handoff target exists.

| Non-generated destination | Existing source families | Artifact finding | Controlled next action |
| --- | --- | --- | --- |
| `/services/operations-support` | September 8, 10, 11, and 14 research batches; October 8, 12, and 13 research records | Registered in `fleetServices` as the Philippines-only Operations Support pillar. The shared service route now generates its route, service-hub card, and sitemap entry from that source of truth. | Verify the generated service artifact and the existing research handoffs after the production build. Do not add duplicate CTAs; the existing typed handoffs already name this route. |
| `/services/recruiting-coordination` | September 7, 8, 22, 24, and 28 research batches | Recruiting records point to a target that is not generated by `fleetServices`, including the record-retention route previously reviewed here. | Establish an approved recruiting pillar, or make a record-level editorial decision to use a genuinely matching existing service. Do not substitute a generic contact or unrelated service page. |
| `/services/reporting-and-quality-assurance` | September 1, 2, 3, and 22 research batches | The target is absent from the generated service inventory and sitemap even though related data exists in the legacy module. | Treat route registration as a separate technical prerequisite before retaining or expanding these handoffs. |
| `/services/content-moderation` | September 1 and 2 research batches | The target is declared in research data but not in `fleetServices`, generated service routes, or the sitemap. | Require a scope-approved content-moderation pillar before any route-level link work. |
| `/services/finance-accounting` | October 2 research batch | The declared target has no generated service route or sitemap record. | Select a finance pillar only after a record-specific owner and scope review; do not map it automatically to Bookkeeping Support. |
| `/services/healthcare-support` | October 2 research batch | The declared target is absent, while Healthcare Administration is a different existing pillar with its own scope. | Do not retarget without a clinical/privacy boundary review and a documented reader-intent match. |
| `/services/legal-support` | October 2 research batch | The declared target is absent, while Legal Administrative Support is a distinct generated service. | Do not retarget without a legal-administration scope review that preserves professional judgment boundaries. |
| `/services/property-management` | October 2 research batch | The declared target is absent, while Real Estate Administration is a distinct generated service. | Do not retarget without checking whether the supporting route is administrative rather than property-management work. |

This is a source-only prerequisite record. It does not claim that any listed target is published, authorize a substitute link, or represent a public release.

## Artifact gate before a reader-facing change

1. Confirm the service slug in `fleetServices` and the research slug in `researchPosts`.
2. Build the site and inspect the source H1, target H1, source canonical, and both sitemap `<loc>` records.
3. Confirm the source has no equivalent service href and that the old or generic target is absent when replacing one.
4. For a public edit, use the repository deployment path and cache-bust verify the exact marker, href, H1, canonical, and sitemap on apex and `www`.

## Delivery status — 2026-09-15

- Rendered source: e2754344704aefcc7fa5f629a808f26ce6a72fb3. Local production artifact: the research route has the expected H1 and canonical, exactly one route-local `/services/sales-development-support` href, the `Plan sales development support` marker, Article `datePublished` 2026-08-09, Article `dateModified` 2026-09-15, and the canonical sitemap `<loc>`; this sitemap intentionally has no `<lastmod>`.
- Cache-busted apex and `www` responses each returned `200 text/html` with the expected H1 and apex canonical, but omitted the marker, service href, and modified-time metadata. The route is `deployment_pending_public_verification / public_stale`; no repository-approved deployment target or workflow was found, so none was inferred or triggered.
- Preserve rendered-source commit e2754344704aefcc7fa5f629a808f26ce6a72fb3. This status-only record must not lead to a duplicate CTA.

## Metadata freshness status — 2026-09-26

- Rendered source: `03d8887741e697e951529b06bd58f65921fd0669`. The shared research metadata now uses each record's existing `updated` value, or its publication date when no update exists, for both Article `dateModified` and Open Graph `article:modified_time`.
- Local production artifact: `/research/philippines-bookkeeping-support-research` has the expected H1 and canonical. Its Article and Open Graph modified dates both read `2026-09-24`; the executive-assistance fallback route uses `2026-08-26` for both. The sitemap contains both canonical URLs and intentionally has no `<lastmod>`.
- Cache-busted apex and `www` pages returned `200 text/html` with the expected H1 and apex canonical, but neither contained `article:modified_time`. Both sitemaps returned `200 application/xml` and contain the selected research URL. There is no repository-approved deployment target or workflow, so no deployment was inferred or triggered.
- Classification: `deployment_pending_public_verification / public_stale`. Preserve rendered-source commit `03d8887741e697e951529b06bd58f65921fd0669`; this status record must not be used to recreate or duplicate any contextual handoff.
