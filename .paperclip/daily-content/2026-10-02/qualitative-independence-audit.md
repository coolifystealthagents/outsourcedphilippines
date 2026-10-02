# October 2 qualitative independence audit

## Research handoff `a96a43459f2cd12a6ce22ffae7c6e51047715f5b`

- Numeric validator: PASS (5 articles; body lengths 1,563 / 1,544 / 1,547 / 1,536 / 1,551; maximum pairwise five-word-shingle Jaccard 47.88%).
- Exact repeated substantive full paragraphs across articles: 0.
- Shared heading structure: FAIL. All five rendered articles use the same global Research headings, including `Key Stats`, `Methodology`, `Key Takeaways`, `Source record`, `Minimum study record`, `FAQs`, `Sources`, and `Related Research`.
- Shared argument structure: FAIL. Every article is produced by the same `buildArticle` function and follows the same 12-step sequence: research question; evidence and interpretation; population and sampling; review procedure; measures; authority boundary; data handling; analysis; worked interpretation; decision use; limitations; conclusion.
- Distinct examples: PASS at topic level. The referral, property dispatch, vendor bank change, litigation hold, and identity-proofing worked cases are materially different.
- Distinct reasoning and reader outcomes: FAIL at family level. Topic facts differ, but each article advances them through the same prospective-study framework and reaches the same traceability/control conclusion.
- Editorial disposition: REWRITE REQUIRED. The 47.88% numeric score does not override the qualitative failure. Rewrites must use article-specific questions, evidence paths, section order, examples, reasoning, and reader decisions rather than variable substitution inside `buildArticle`.

## Blog status

- Exact new inventory: 12 unique topics committed.
- Independently drafted: 12/12.
- Body word counts in inventory order: 1,569 / 1,210 / 1,190 / 1,100 / 1,140 / 1,019 / 1,000 / 1,026 / 1,004 / 938 / 936 / 966.
- Maximum pairwise five-word-shingle Jaccard: 0.55% (`philippines-accounts-payable-invoice-exception-routing` / `philippines-procurement-quote-comparison-workflow`).
- Exact repeated substantive full paragraphs across Blog articles: 0.
- Shared complete heading structures across Blog articles: 0.
- Qualitative structure result: PASS at draft level. Each article uses a topic-specific decision path, worked example, reasoning sequence, and reader outcome. Shared elements are limited to site conventions such as source attribution and the relevant service CTA.
- Remaining Blog work: integrate drafts into the routed content model, set the truthful UTC publication date immediately before the sole release, regenerate the ledger, and run rendered-route, asset, link, originality, typecheck, test, and clean-build gates.
- Live verified: 0.

## Generation availability

The configured Gemini API credential was tested during integration and returned HTTP 400 `API key not valid`. No claim of restored Gemini access is made. Direct drafting remains the recovery path.
