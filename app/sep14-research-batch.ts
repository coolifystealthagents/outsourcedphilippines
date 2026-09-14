type ResearchPost = {
  slug: string;
  title: string;
  excerpt: string;
  published: string;
  statistic: string;
  methodology: string;
  body: readonly string[];
  dataSections: readonly { heading: string; text: string }[];
  faqs: readonly { question: string; answer: string }[];
  sources: readonly string[];
  related: readonly string[];
  hero: string;
  serviceHandoff: { slug: string; label: string; text: string };
};

const published = '2026-09-14';
const hero = '/research-batch-thumbnail.jpg';

const sources = {
  gaodata: 'https://www.gao.gov/products/gao-20-283g',
  nistQuality: 'https://www.nist.gov/director/nist-information-quality-standards',
  nistPrivacy: 'https://www.nist.gov/privacy-framework',
  nistAccess: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final',
  cisaLogging: 'https://www.cisa.gov/resources-tools/resources/guidance-best-practices-event-logging-and-threat-detection',
  govMetrics: 'https://www.gov.uk/service-manual/measuring-success/how-to-set-performance-metrics-for-your-service',
} as const;

const sharedLimits = 'The design is observational. Selection effects, changes in case mix, missing records, reviewer learning, policy changes, seasonality, and work completed outside the tracked system can explain an observed difference. Results do not establish causation, worker quality, compliance, or business impact.';

export const sep14ResearchPosts: readonly ResearchPost[] = [
  {
    slug: 'philippines-decision-register-completeness-research-2026-study-september-14-2026',
    title: 'Can a decision register reduce lost executive follow-up?, September 14 protocol',
    excerpt: 'A prospective paired review of decision traceability, ownership, and overdue actions in executive support.',
    published,
    statistic: 'GAO data-reliability guidance asks whether evidence is sufficiently reliable for its intended use. It does not prescribe a universal completeness target for executive records.',
    methodology: 'Scope: a prospective six-week review of eligible internal meetings with an approved source packet and at least one recorded decision. Compare a baseline period with shadow use of a decision register. Sample by meeting type and decision sensitivity, and have an independent reviewer recode 20% of eligible records. No client systems, meeting recordings, personal data, or production records were accessed for this desk-research protocol.',
    body: [
      'The primary unit is an eligible decision, not a meeting. Before collection, define what counts as a decision, which meetings qualify, the observation cutoff, and how reversals or superseding instructions are recorded.',
      'Measure source-linked decisions, named decision owners, named action owners, due dates, later status verification, disagreements, and overdue actions. Report the numerator and eligible denominator for every rate.',
      'Philippines-based executive support may prepare entries and request confirmation. Executives retain authority over decision wording, confidentiality, priority, delegation, and any change to an instruction.',
      `Inference boundary and limitations: ${sharedLimits}`,
      'Interpretation is limited to the sampled meeting types, teams, source practices, and six-week period. A more complete register may improve traceability without improving the quality or timeliness of the decisions themselves.',
    ],
    dataSections: [
      { heading: 'Observation record', text: 'Capture meeting class, decision identifier, approved source, wording confirmation, owners, due date, status evidence, reversal link, missingness, reviewer, and cutoff.' },
      { heading: 'Analysis plan', text: 'Compare distributions and paired completeness fields by meeting class. Publish exclusions and reviewer disagreements; do not combine unverified and verified completion.' },
    ],
    faqs: [
      { question: 'Would fewer overdue actions prove the register caused the change?', answer: 'No. Workload, meeting mix, management attention, and concurrent process changes may account for the difference.' },
      { question: 'Does the study evaluate executive decision quality?', answer: 'No. It evaluates whether sampled decisions and follow-up evidence are traceable under the stated rules.' },
    ],
    sources: [sources.gaodata, sources.nistQuality, sources.govMetrics],
    related: ['philippines-meeting-brief-usefulness-research', 'philippines-outsourcing-handoff-evidence-research'],
    hero,
    serviceHandoff: { slug: 'executive-administration', label: 'Plan a bounded executive support lane', text: 'Pilot the register with one meeting class, a named executive reviewer, and a short evidence checklist.' },
  },
  {
    slug: 'philippines-catalog-exception-resolution-research-2026-study-september-14-2026',
    title: 'Does a catalog exception queue reduce unsupported product values?, September 14 protocol',
    excerpt: 'A stratified audit design for unresolved attributes, owner decisions, and storefront verification.',
    published,
    statistic: 'NIST information-quality standards connect quality assessment to the intended use of information. They do not supply an ecommerce catalog accuracy benchmark.',
    methodology: 'Scope: a prospective eight-week study of eligible product-attribute imports for selected markets and categories. Draw a stratified sample by source, attribute class, category, and initial validation result. Compare the current workflow with shadow routing through an exception queue; an independent reviewer checks a 15% subsample against approved supplier evidence and the rendered storefront. This protocol used no retailer data or live catalog systems.',
    body: [
      'Define the SKU and market pair as the unit of analysis. Freeze the validation rules and source hierarchy before sampling, then preserve blank, conflicting, rejected, and out-of-scope values separately.',
      'Measure unsupported values published, exceptions raised, owner decisions, time to decision, repeat rule failures, and post-publication corrections. Storefront verification is distinct from successful import status.',
      'Philippines-based ecommerce operations staff may normalize permitted values, attach source evidence, run documented validation, and prepare corrections. Merchandising owners retain authority over taxonomy, claims, market rules, and ambiguous exceptions.',
      `Inference boundary and limitations: ${sharedLimits}`,
      'Findings apply only to the chosen sources, markets, categories, attributes, and observation window. Fewer unsupported values do not show that descriptions are persuasive, inventory is correct, or customers understand the product.',
    ],
    dataSections: [
      { heading: 'Observation record', text: 'Capture SKU, market, attribute, source, supplied value, rule version, exception state, owner decision, published value, storefront check, reviewer, and cutoff.' },
      { heading: 'Analysis plan', text: 'Report error and resolution distributions by attribute and source. Keep excluded records, missing evidence, and unresolved conflicts in the denominator table.' },
    ],
    faqs: [
      { question: 'Can a lower exception count be treated as better quality?', answer: 'No. Staff could suppress valid exceptions or a source mix could become easier. Review unsupported publication and sampled evidence as well.' },
      { question: 'Does this protocol test sales results?', answer: 'No. It tests traceability and support for selected catalog values.' },
    ],
    sources: [sources.nistQuality, sources.gaodata, sources.govMetrics],
    related: ['philippines-document-version-retrieval-research', 'philippines-outsourcing-source-quality-evidence-research'],
    hero,
    serviceHandoff: { slug: 'ecommerce-operations', label: 'Plan a catalog operations pilot', text: 'Choose one attribute class, freeze its validation rule, and sample the published result with a merchandising owner.' },
  },
  {
    slug: 'philippines-record-request-minimum-data-research-2026-study-september-14-2026',
    title: 'Can a minimum-data tracker manage record requests without copying sensitive files?, September 14 protocol',
    excerpt: 'A privacy-aware field audit for healthcare request administration and minimum-necessary workflow data.',
    published,
    statistic: 'The NIST Privacy Framework provides a voluntary approach to managing privacy risk. It does not determine whether a particular disclosure is lawful or clinically appropriate.',
    methodology: 'Scope: a prospective six-week field-level audit of eligible administrative record requests in one approved workflow. Map each tracker field to a stated operational purpose, compare the existing tracker with a minimum-data design in shadow use, and independently review a 20% sample for unnecessary copied content and missing routing evidence. The protocol is desk research only: no health information, patient records, client systems, or disclosures were accessed.',
    body: [
      'Define the request, rather than the person, as the observation unit. The protocol records status metadata and approved identifiers; requested records remain in the authorized clinical or records system.',
      'Measure fields collected, fields used for routing, unnecessary copied content, authority-check state, aging by wait state, disclosure evidence, and privacy-owner escalations. Record false alarms and reviewer disagreements.',
      'Philippines-based healthcare administration staff may validate required administrative fields, record status, and route missing or conflicting evidence. Authorized privacy, records, or clinical owners decide identity sufficiency, disclosure scope, legal requirements, and exceptions.',
      `Inference boundary and limitations: ${sharedLimits}`,
      'Results apply only to the mapped request type, approved systems, field definitions, and period. Less data in a tracker may reduce exposure, but this study cannot establish legal compliance, clinical safety, or completeness of a disclosure.',
    ],
    dataSections: [
      { heading: 'Observation record', text: 'Capture request class, approved identifier, field purpose, authority-check state, wait state, assigned owner, disclosure evidence, unnecessary-content finding, reviewer, and cutoff.' },
      { heading: 'Analysis plan', text: 'Compare field use and exception distributions before and during shadow use. Publish the field-purpose map, exclusions, missingness, and recoding disagreements.' },
    ],
    faqs: [
      { question: 'Does the protocol decide which records may be released?', answer: 'No. Disclosure decisions remain with authorized client owners under the applicable rules and policies.' },
      { question: 'Would a shorter tracker prove lower privacy risk?', answer: 'No. Field count is only one observation; access, retention, system design, and handling behavior also matter.' },
    ],
    sources: [sources.nistPrivacy, sources.nistAccess, sources.gaodata],
    related: ['philippines-outsourcing-access-governance-research', 'philippines-document-version-retrieval-research'],
    hero,
    serviceHandoff: { slug: 'healthcare-administration', label: 'Plan bounded healthcare administration', text: 'Map one request type, approve each tracker field, and name the privacy owner before a shadow pilot begins.' },
  },
  {
    slug: 'philippines-privileged-access-expiry-research-2026-study-september-14-2026',
    title: 'Do expiry checks reduce lingering privileged access?, September 14 protocol',
    excerpt: 'A cohort audit of time-bound requests, provisioning evidence, and verified removal states.',
    published,
    statistic: 'NIST SP 800-53 Rev. 5 includes access-control and account-management controls, but it does not set one universal privileged-access duration for every organization.',
    methodology: 'Scope: a prospective twelve-week cohort study of eligible time-bound privileged-access requests for selected systems. Compare request packets and verified account states before and after an expiry-check routine, stratified by system and privilege class. A security reviewer independently verifies a 20% sample. No credentials, client accounts, production systems, or access changes were used in preparing this protocol.',
    body: [
      'The unit is a granted role on a named system, not the ticket. Define approved privilege classes, start and expiry events, verification methods, and service-account exclusions before observation.',
      'Measure packets with complete approval evidence, grants matching approved scope, accounts verified at expiry, removals verified, extensions approved before expiry, and unresolved discrepancies. A closed ticket is not evidence that access changed.',
      'Philippines-based helpdesk staff may validate packet fields, route approvals, schedule checks, and collect permitted system evidence. Security and system owners retain approval, provisioning authority, risk acceptance, investigation, and emergency-access decisions.',
      `Inference boundary and limitations: ${sharedLimits}`,
      'The result applies only to sampled systems, role types, verification methods, and the twelve-week cohort. Fewer lingering grants would not prove that permissions were least privilege, accounts were never misused, or the organization was secure.',
    ],
    dataSections: [
      { heading: 'Observation record', text: 'Capture requester, system, role, purpose, approval evidence, grant state, start, planned expiry, extension, observed expiry state, removal evidence, reviewer, and cutoff.' },
      { heading: 'Analysis plan', text: 'Use cohort counts and time-to-verified-removal distributions by system and role. Keep unobservable states distinct from confirmed lingering access.' },
    ],
    faqs: [
      { question: 'Can ticket closure stand in for access removal?', answer: 'No. The study requires evidence from the approved system or another verification method accepted by the security owner.' },
      { question: 'Does this study assess whether an access grant was necessary?', answer: 'Only to the extent that required approval evidence is present. The authorized approver owns the necessity and risk judgment.' },
    ],
    sources: [sources.nistAccess, sources.cisaLogging, sources.gaodata],
    related: ['philippines-outsourcing-access-governance-research', 'philippines-outsourcing-handoff-evidence-research'],
    hero,
    serviceHandoff: { slug: 'operations-support', label: 'Plan a controlled helpdesk lane', text: 'Select one system, define accepted state evidence, and review a time-bound cohort with its security owner.' },
  },
  {
    slug: 'philippines-sop-observation-triage-research-2026-study-september-14-2026',
    title: 'Can structured observation notes improve SOP change triage?, September 14 protocol',
    excerpt: 'A blinded review design for reproducibility, duplicate findings, and owner disposition of process mismatches.',
    published,
    statistic: 'GAO guidance treats reliability as fitness for an intended use. A high observation count alone does not show that an SOP is inaccurate or that a change is warranted.',
    methodology: 'Scope: an eight-week prospective study of eligible observations against selected operational SOPs. Reviewers receive either current free-form notes or structured notes without knowing the submitting group, then classify reproducibility, duplicate status, evidence sufficiency, and disposition readiness. Randomize note order and double-code 25% of the sample. No client SOPs, employee records, or production workflows were accessed for this protocol.',
    body: [
      'Define an observation as a dated example tied to a specific SOP version and step. Separate observations from incidents, improvement ideas, training questions, and already approved change requests before sampling.',
      'Measure reviewer agreement, time to disposition, requests for clarification, reproducible mismatches, duplicates, owner decisions, and changes later reversed. Report rejected and unresolved notes, not only accepted changes.',
      'Philippines-based operations staff may document examples, attach permitted evidence, reproduce safe tests, and group possible duplicates. Process owners retain decisions about policy, risk, system changes, training, and SOP publication.',
      `Inference boundary and limitations: ${sharedLimits}`,
      'Findings apply to the selected SOPs, note types, reviewers, rubric, and eight-week window. Faster triage does not prove the resulting SOP is correct, the process is efficient, or staff follow the published instruction.',
    ],
    dataSections: [
      { heading: 'Observation record', text: 'Capture SOP and version, step, date, expected and observed result, evidence link, note format, duplicate candidate, reviewer codes, owner disposition, and cutoff.' },
      { heading: 'Analysis plan', text: 'Compare blinded reviewer agreement and clarification distributions by note format. Disclose exclusions, order assignment, protocol changes, and unresolved owner decisions.' },
    ],
    faqs: [
      { question: 'Would more accepted notes mean the structured format is better?', answer: 'No. Acceptance depends on the underlying examples and owner judgment. Reproducibility and evidence sufficiency must be reviewed separately.' },
      { question: 'Can operations support publish an SOP change from the study?', answer: 'No. The accountable process owner approves the instruction, effective date, and communication plan.' },
    ],
    sources: [sources.gaodata, sources.nistQuality, sources.govMetrics],
    related: ['philippines-outsourcing-review-consistency-research', 'philippines-outsourcing-source-quality-evidence-research'],
    hero,
    serviceHandoff: { slug: 'operations-support', label: 'Plan an SOP observation pilot', text: 'Choose a small SOP set, freeze the observation rubric, and have the process owner review blinded samples.' },
  },
];
