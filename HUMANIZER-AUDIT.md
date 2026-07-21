# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the visitor-facing marketing and editorial copy across the homepage, shared site data, service template, guide index and detail template, contact page, thank-you page, shared header, CTA, footer, and site metadata.

Reviewed files:

- `app/page.tsx`
- `app/data.ts`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`
- `app/components.tsx`
- `app/layout.tsx`

## What changed

- Replaced four repeated service descriptions with copy tied to the actual work, such as ticket triage, CRM updates, report preparation, and manager review.
- Repaired the broken planning-guide title and made every guide title read like a normal search question or checklist.
- Replaced the shared generic fallback article with separate planning, first-task, and onboarding guidance. Each guide now has its own examples, decision limits, and review questions.
- Rewrote the guide index around Philippines staffing instead of broad offshore outsourcing.
- Removed the self-conscious "grand transformation" line from the homepage and replaced it with a direct launch rule.
- Repaired the service-page H1 and removed an invented quotation treatment from the handoff card.
- Added clear spacing between guide question panels and the next heading after local visual QA found them touching.
- Kept the offer limited to Filipino talent recruited and hired in the Philippines.

## Final anti-AI pass

The remaining copy is deliberately plain. Sentences vary in length, headings state the decision at hand, and the examples name real tasks and approval limits. The review found no remaining significance puffery, chatbot language, em-dash habits, broad global-talent language, or repeated generic service descriptions in the audited marketing files.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded. Their legal meaning was not changed. No testimonials, statistics, credentials, client claims, or first-person stories were added. Route slugs, citations, schema types, and the existing conversion path were preserved.
