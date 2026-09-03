# Service-led topical authority map

Status: source-only planning record. It does not add reader-facing links or claim a public release.

## Scope and rules

This map covers the ten generated Philippines-only service pages in `app/fleet-content.ts`. Each supporting research route answers a narrower planning question for the same service pillar. A future editor may add only one contextual handoff after checking the rendered source, target route, service scope, and deployment routine.

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
| `/services/digital-marketing-operations` | `/research/philippines-marketing-operations-research` | Which campaign preparation and QA tasks can proceed before a brand owner approves publication? | No route-specific handoff recorded | Review one digital-marketing-operations handoff with brand approval retained. |
| `/services/sales-development-support` | `/research/philippines-sales-development-support-research` | Which prospecting and record-hygiene tasks can be measured without making sales claims? | No route-specific handoff recorded | Review a sales-development-support handoff only after confirming no equivalent target link exists. |
| `/services/project-coordination` | `/research/philippines-project-coordination-research` | How can a manager define a project queue, review owner, and exception path? | Existing route-specific handoff: `Plan Philippines project coordination support` | Do not add another handoff. Recheck the existing source and target only if the renderer changes. |

## Artifact gate before a reader-facing change

1. Confirm the service slug in `fleetServices` and the research slug in `researchPosts`.
2. Build the site and inspect the source H1, target H1, source canonical, and both sitemap `<loc>` records.
3. Confirm the source has no equivalent service href and that the old or generic target is absent when replacing one.
4. For a public edit, use the repository deployment path and cache-bust verify the exact marker, href, H1, canonical, and sitemap on apex and `www`.
