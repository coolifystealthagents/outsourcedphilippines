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
| `/services/ecommerce-operations` | `/research/philippines-ecommerce-customer-care-research` | How should an order-and-exception queue be prepared before refund decisions leave the owner? | No route-specific handoff recorded | Review an ecommerce-operations handoff with refund authority kept explicit. |
| `/services/real-estate-administration` | `/research/philippines-real-estate-admin-research` | Which record and deadline tasks can support a property team without making licensed decisions? | No route-specific handoff recorded | Review one real-estate-administration handoff after checking the current source copy. |
| `/services/healthcare-administration` | `/research/philippines-healthcare-admin-research` | Which privacy-aware admin tasks have a clear escalation path for clinical or sensitive issues? | No route-specific handoff recorded | Review one healthcare-administration handoff without implying compliance or clinical authority. |
| `/services/legal-administrative-support` | `/research/philippines-legal-admin-support-research` | How can records and drafts be prepared without presenting administrative support as legal advice? | No route-specific handoff recorded | Review one legal-administrative-support handoff with the professional boundary preserved. |
| `/services/bookkeeping-support` | `/research/philippines-bookkeeping-support-research` | Which reconciliation tasks can be checked before financial approval remains with the reviewer? | No route-specific handoff recorded | Review one bookkeeping-support handoff that does not imply accounting advice. |
| `/services/customer-experience` | `/research/philippines-customer-support-outsourcing-data` | What evidence should a support queue show before a manager handles complaints, refunds, or exceptions? | No route-specific handoff recorded | Review a customer-experience handoff if the source lacks a more exact service link. |
| `/services/digital-marketing-operations` | `/research/philippines-marketing-operations-research` | Which campaign preparation and QA tasks can proceed before a brand owner approves publication? | No route-specific handoff recorded | Review one digital-marketing-operations handoff with brand approval retained. |
| `/services/sales-development-support` | `/research/philippines-sales-development-support-research` | Which prospecting and record-hygiene tasks can be measured without making sales claims? | No route-specific handoff recorded | Review a sales-development-support handoff only after confirming no equivalent target link exists. |
| `/services/project-coordination` | `/research/philippines-project-coordination-research` | How can a manager define a project queue, review owner, and exception path? | Existing route-specific handoff: `Plan Philippines project coordination support` | Do not add another handoff. Recheck the existing source and target only if the renderer changes. |

## Artifact gate before a reader-facing change

1. Confirm the service slug in `fleetServices` and the research slug in `researchPosts`.
2. Build the site and inspect the source H1, target H1, source canonical, and both sitemap `<loc>` records.
3. Confirm the source has no equivalent service href and that the old or generic target is absent when replacing one.
4. For a public edit, use the repository deployment path and cache-bust verify the exact marker, href, H1, canonical, and sitemap on apex and `www`.
