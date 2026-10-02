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
- Independently drafted: 1 (`philippines-saas-user-access-onboarding-matrix`, 1,561 body words).
- Remaining drafts: 11.
- Live verified: 0.

## Generation availability

The configured Gemini API credential was tested during integration and returned HTTP 400 `API key not valid`. No claim of restored Gemini access is made. Direct drafting remains the recovery path.
