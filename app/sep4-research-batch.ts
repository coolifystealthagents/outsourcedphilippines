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

const published = '2026-09-04';
const hero = '/research-batch-thumbnail.jpg';

export const sep4ResearchPosts: readonly ResearchPost[] = [
  {
    slug: 'philippines-customer-support-first-contact-resolution-research',
    title: 'Philippines customer support research: what can first-contact resolution tell a manager?',
    excerpt: 'A bounded study design for reading first-contact resolution beside repeat demand, case mix, policy limits, and customer outcomes.',
    published,
    statistic: 'COPC defines first contact resolution at the transaction level and warns that calculation methods must be specified. ISO 18295-1 describes requirements for customer contact centres but does not prescribe one universal resolution target.',
    methodology: 'This desk review compares COPC measurement guidance, ISO 18295-1 scope material, and UK Government Service Manual guidance on combining service measures. It proposes a four-week shadow study. No OutsourcedPhilippines.com client records were analyzed, and the sources do not establish a universal target for a Philippines-based team.',
    body: [
      'The study question is narrow: when does first-contact resolution help a support manager understand the customer journey, and when does it reward premature closure? Define a contact, case, resolution, repeat window, eligible channel, and approved exclusion before producing a rate. A reopened case and a second contact about a different issue should not be treated as the same event by accident.',
      'Build a case-level record with timestamps, channel, reason, complexity or approved risk class, transfers, reopenings, customer confirmation where available, and final disposition. Link related contacts through an approved identifier. Sample the linkage itself because weak matching can inflate resolution by treating a returning customer as a new case.',
      'Report first-contact resolution beside repeat-contact rate, escalation appropriateness, policy adherence, customer feedback, and unresolved aging. Break results down by stable case groups with counts and denominators. A high rate in password resets cannot establish performance on billing disputes, and a low rate may be appropriate when an authorized owner must review the case.',
      'A Philippines-based analyst can prepare the dataset, test definitions, reconcile contact links, and document exceptions. Client owners retain policy meaning, outcome approval, target setting, and any decision about staff performance. Do not use the metric to pressure specialists into guessing, suppressing escalations, or marking a case resolved before the customer-facing work is complete.',
      'The design has limits. Contact linkage may miss cross-channel returns, survey responses are selective, case labels may be inconsistent, and four weeks may not cover seasonal demand. The study can describe the observed queue under its definitions. It cannot prove customer loyalty, individual competence, or the cause of a change without a stronger design.',
      'Run the metric in shadow mode first. Review cases where the number and reviewer judgment disagree, adjust definitions with dated changes, and retain both numerator and denominator. Expansion is reasonable only when the measure helps managers find specific workflow problems without weakening safe escalation or honest open-case reporting.',
    ],
    dataSections: [
      { heading: 'Minimum case record', text: 'Retain contact identifiers, reason, channel, timestamps, transfers, approved complexity class, reopenings, customer confirmation where available, and final disposition.' },
      { heading: 'Interpretation safeguards', text: 'Publish counts, denominators, exclusions, repeat window, case-mix cuts, and examples of appropriate non-resolution beside the headline rate.' },
    ],
    faqs: [
      { question: 'Is a higher first-contact resolution rate always better?', answer: 'No. It can conceal premature closure or missed escalation unless case quality and repeat demand are checked.' },
      { question: 'Can one target cover every support queue?', answer: 'The reviewed sources do not support that conclusion. Definitions, case mix, channels, and approval boundaries differ.' },
    ],
    sources: ['https://www.copc.com/customer-experience-performance-leader-glossary/', 'https://www.iso.org/standard/64739.html', 'https://www.gov.uk/service-manual/measuring-success/measuring-service-performance'],
    related: ['philippines-customer-support-backlog-age-mix-research', 'philippines-customer-support-qa-sample-stratification-research'],
    hero,
    serviceHandoff: { slug: 'customer-experience', label: 'Plan customer experience reporting support', text: 'Test resolution measures beside repeat demand, escalation quality, and explicit case definitions.' },
  },
  {
    slug: 'philippines-bookkeeping-reconciliation-exception-aging-research',
    title: 'Philippines bookkeeping research: how should reconciliation exceptions be aged?',
    excerpt: 'A study protocol for measuring unresolved reconciliation items without confusing age, financial risk, and reviewer delay.',
    published,
    statistic: 'The IFRS Conceptual Framework describes relevance and faithful representation as characteristics of useful financial information. It does not define a universal operating deadline for clearing reconciliation exceptions.',
    methodology: 'This desk review uses the IFRS Conceptual Framework, UK Government Finance Function reconciliation guidance, and GAO data-reliability guidance to design an exception-aging study. It offers fields and tests, not accounting advice or a benchmark. No ledger, bank, or client performance data were reviewed.',
    body: [
      'The research question is whether an aging view helps a financial reviewer distinguish ordinary timing items from exceptions that need a decision. Age alone is not risk. A recent high-value duplicate and an old documented timing difference may deserve different treatment, so the queue needs both elapsed time and an approved reason.',
      'Define the population as unresolved reconciliation items at a named cutoff. Record source account, source date, first-observed date, amount, currency, candidate match, exception reason, supporting documents, preparer, reviewer, next action, and decision state. Preserve the original date when an item moves between queues; otherwise transfers can reset age and hide waiting.',
      'Group age in intervals that fit the client\'s close cycle, then report counts and values by reason and owner. Keep debits and credits interpretable rather than netting unrelated exceptions into a comforting small total. Separate items waiting on external evidence from those waiting on internal review so managers can choose an appropriate response.',
      'Philippines bookkeeping support can collect source records, maintain the exception log, compare candidate matches, and prepare reviewer questions. Accounting treatment, posting period, write-off, tax, materiality, and approval remain with the client\'s authorized financial owner. A service-level clock must not substitute for that judgment.',
      'The evidence has practical limits. An exception register can omit items, reason labels can drift, currency conversion can alter comparisons, and a month-end snapshot may not represent the rest of the year. Aging describes time in the defined process. It does not establish error, fraud, materiality, or the cause of delay.',
      'Pilot the view across at least one complete client-defined close cycle. Reconcile the exception population to source totals, review a sample of opening dates and reasons, and record corrections. Keep the report only if it leads to clear ownership and cleaner evidence without encouraging unsupported postings to improve the chart.',
    ],
    dataSections: [
      { heading: 'Aging fields', text: 'Capture source date, first-observed date, cutoff, reason, amount and currency, decision state, evidence owner, reviewer, and next action.' },
      { heading: 'Reporting rule', text: 'Show counts and values without netting unrelated items, and separate evidence waits from reviewer waits under dated definitions.' },
    ],
    faqs: [
      { question: 'Does the oldest item carry the greatest risk?', answer: 'Not necessarily. Age should be reviewed with amount, reason, evidence, and the client\'s approved risk rules.' },
      { question: 'Can support staff clear items to meet an aging target?', answer: 'Only through the client\'s approved treatment and review path. The metric does not grant accounting authority.' },
    ],
    sources: ['https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/', 'https://www.gov.uk/government/publications/government-functional-standard-govs-006-finance', 'https://www.gao.gov/products/gao-20-283g'],
    related: ['philippines-outsourcing-invoice-reconciliation-research', 'philippines-bookkeeping-close-cutoff-research'],
    hero,
    serviceHandoff: { slug: 'bookkeeping-support', label: 'Plan bookkeeping exception support', text: 'Prepare an evidence-led aging queue while financial decisions remain with the client reviewer.' },
  },
  {
    slug: 'philippines-sales-development-crm-field-completeness-research',
    title: 'Philippines sales development research: does CRM field completeness improve handoffs?',
    excerpt: 'A research design for testing whether required CRM fields help sales owners act, without rewarding low-value data entry.',
    published,
    statistic: 'NIST information-quality standards address utility, objectivity, and integrity. They support testing whether information is useful for its stated purpose rather than assuming completeness equals quality.',
    methodology: 'This desk review draws on NIST information-quality standards, GAO data-reliability guidance, and UK government guidance on measuring services. It proposes a blinded handoff test using de-identified records. No prospect data were collected, and the sources do not identify a standard CRM field set.',
    body: [
      'The study asks whether a defined set of CRM fields gives a sales owner enough current evidence to choose the next action. A record can be 100 percent populated and still be wrong, stale, duplicated, or irrelevant. Start with decisions such as accept account, return for research, suppress outreach, resolve ownership, or close as unsupported.',
      'Choose a small field set for each decision. Candidate fields may include verified account identity, source and retrieval date, territory, account owner, contact restriction, observed fit evidence, contrary evidence, last approved interaction, and an open question. Define acceptable values and a missing state. Do not force a guess merely to eliminate blanks.',
      'Create a test set that includes clean records, stale evidence, duplicates, conflicting ownership, prohibited contact, plausible but unsupported fit, and legitimate unknowns. Ask sales owners to make the permitted disposition without seeing who prepared each record. Capture decision time, return reason, confidence, and later correction.',
      'A Philippines sales operations specialist can research approved public sources, normalize records, identify duplicates, and maintain field evidence. The client decides segmentation, territory, contact policy, qualification, outreach, and performance expectations. No study result authorizes scraping restricted data or contacting a prospect.',
      'The study is limited by the selected records, owner consistency, tool configuration, and the chosen disposition. Faster decisions may reflect familiarity rather than record quality. Later sales outcomes have many causes and should not be presented as proof that a completeness rule worked. False certainty is a material failure even when the form is full.',
      'Compare required fields with observed return reasons. Remove fields that never affect a decision, strengthen fields tied to repeated ambiguity, and preserve unknown when the evidence is absent. A useful CRM rule reduces preventable returns and unsupported actions; it does not maximize the number of populated cells.',
    ],
    dataSections: [
      { heading: 'Handoff test', text: 'Measure permitted disposition, decision time, return reason, confidence, correction, and whether each required field had current source evidence.' },
      { heading: 'Quality failures', text: 'Separate missing, stale, conflicting, duplicated, unsupported, and restricted records. Each failure needs a different response.' },
    ],
    faqs: [
      { question: 'Is an empty field always a defect?', answer: 'No. Unknown can be the accurate value when approved sources do not support an answer.' },
      { question: 'Does completeness prove a prospect is qualified?', answer: 'No. Qualification remains an owner decision under the client\'s approved criteria.' },
    ],
    sources: ['https://www.nist.gov/director/nist-information-quality-standards', 'https://www.gao.gov/products/gao-20-283g', 'https://www.gov.uk/service-manual/measuring-success/measuring-service-performance'],
    related: ['philippines-sales-development-research', 'philippines-crm-data-hygiene-research'],
    hero,
    serviceHandoff: { slug: 'sales-development-support', label: 'Plan sales development data support', text: 'Test CRM fields against real owner decisions while outreach authority remains with the client.' },
  },
  {
    slug: 'philippines-project-status-report-risk-calibration-research',
    title: 'Philippines project coordination research: can teams calibrate status-report risk?',
    excerpt: 'A structured test of whether coordinators and owners apply project risk labels consistently enough to support decisions.',
    published,
    statistic: 'ISO 31000 provides principles and guidelines for risk management, while GAO schedule guidance connects reliable schedules with defined activities, dependencies, and uncertainty. Neither source supplies universal red, amber, and green thresholds.',
    methodology: 'This desk review combines ISO 31000 scope material, GAO schedule assessment guidance, and UK Infrastructure and Projects Authority risk guidance. It proposes a scenario-based calibration exercise. No OutsourcedPhilippines.com project records were scored, and the labels require client-defined consequences and authority.',
    body: [
      'The question is whether a project coordinator and project owner interpret risk labels similarly enough for a status report to prompt the right action. Color alone is ambiguous. One person may label a late dependency amber because recovery is possible, while another calls it red because the decision deadline has passed.',
      'Define each rating through observable conditions: affected outcome, probability or uncertainty statement, time to impact, recovery margin, dependency owner, and decision required. Keep current status separate from forecast risk. Work can be on schedule today while an unresolved approval threatens next week\'s milestone.',
      'Build a set of representative scenarios with source evidence, including ordinary delays, uncertain estimates, external dependencies, missing owners, accepted scope changes, and risks that materialized. Have participants rate them independently and state the action each rating implies. Compare disagreements in reasoning, not only color.',
      'A Philippines project coordinator can maintain source dates, prepare scenarios, facilitate the exercise, and record agreed definitions. Project owners retain risk acceptance, priority, scope, budget, and commitment decisions. Calibration should not pressure a coordinator to soften a finding for presentation or escalate without the approved route.',
      'The exercise has limits. Written scenarios remove some context, participants may learn expected answers, and agreement does not prove the thresholds are wise. A calibrated label can still rely on weak source data. Review actual decisions and outcomes later, while avoiding hindsight claims that every realized risk was predictable.',
      'Revise the status template where disagreements reveal missing evidence or unclear authority. Retest a mix of old and new scenarios after the team has used the definitions. Keep the scheme only if each label leads to an understood review or action; decorative colors add confidence without operational value.',
    ],
    dataSections: [
      { heading: 'Scenario evidence', text: 'Provide outcome, current status, uncertainty, dependency, time to impact, recovery margin, owner, and available decision.' },
      { heading: 'Calibration result', text: 'Compare label, reasoning, proposed action, and confidence. Record where participants agree on color but disagree on what should happen.' },
    ],
    faqs: [
      { question: 'Can a standard color scheme remove judgment?', answer: 'No. The client still needs explicit thresholds, evidence rules, and accountable risk decisions.' },
      { question: 'Does agreement prove a project is well controlled?', answer: 'No. Agreement measures shared interpretation of the scenarios, not the quality of source data or the decision itself.' },
    ],
    sources: ['https://www.iso.org/iso-31000-risk-management.html', 'https://www.gao.gov/products/gao-16-89g', 'https://www.gov.uk/government/publications/orange-book'],
    related: ['philippines-project-status-reporting-research', 'philippines-project-dependency-research'],
    hero,
    serviceHandoff: { slug: 'project-coordination', label: 'Plan project reporting support', text: 'Calibrate risk evidence and labels while project owners retain acceptance and priority decisions.' },
  },
  {
    slug: 'philippines-marketing-content-claim-substantiation-research',
    title: 'Philippines marketing operations research: how should content claims be substantiated?',
    excerpt: 'A claim-level review method for matching marketing language to evidence, scope, approval, and expiry conditions.',
    published,
    statistic: 'The US Federal Trade Commission states that advertisers need a reasonable basis for objective claims before dissemination. UK CAP guidance likewise distinguishes objective claims that require evidence from subjective claims.',
    methodology: 'This desk review compares FTC advertising substantiation policy, UK CAP guidance, and NIST information-quality standards. It proposes a claim register and blinded reviewer test. It is not legal advice, does not determine which rules apply to a campaign, and includes no client claims or outcome data.',
    body: [
      'The research question is whether a claim register helps a marketing owner see when a draft says more than its evidence supports. The unit is one objective claim in one planned placement. Record the exact wording, intended audience, channel, geography, evidence owner, source version, qualifying conditions, approval, and review trigger.',
      'Classify the relationship between claim and evidence without declaring legal sufficiency: direct support, calculated result, customer-specific statement, comparison, forecast, opinion, or unresolved. Comparisons need a named basis. Numbers need a population, period, method, and denominator where relevant. A citation near the copy is not enough if it supports a narrower statement.',
      'Test the register with reviewers who see the claim and evidence packet but not the drafter. Ask what they believe the claim means, which evidence supports it, what qualification they need, and whether the proposed placement changes interpretation. Disagreement can reveal vague copy, incomplete evidence, or a review standard that needs an owner.',
      'A Philippines marketing operations specialist can inventory claims, collect approved evidence, maintain versions, and flag mismatches. Brand, legal, regulatory, pricing, comparative, and publication decisions remain with authorized client owners. The specialist should not weaken a qualifier, invent a customer result, or release copy because a deadline is close.',
      'The method has limits. Reviewer agreement does not establish compliance, archived evidence may omit context, rules differ by place and product, and claims can change meaning beside images or other copy. The register covers materials placed into the study. It cannot prove that every public impression is identical or that the advertised outcome will occur.',
      'Begin with higher-consequence objective claims and active campaigns. Record corrections and false alarms, then adjust fields that repeatedly fail to help reviewers. A useful substantiation routine makes scope and ownership visible before release. It does not turn administrative preparation into legal approval.',
    ],
    dataSections: [
      { heading: 'Claim record', text: 'Capture exact wording, placement, audience, geography, claim class, source version, method and period, qualifications, owner, approval, and review trigger.' },
      { heading: 'Reviewer test', text: 'Compare interpreted meaning, supporting evidence, needed qualification, disposition, and disagreement reason without revealing the drafter.' },
    ],
    faqs: [
      { question: 'Does attaching a source substantiate a claim?', answer: 'Not by itself. The evidence must support the meaning, scope, audience, period, and comparison expressed by the claim.' },
      { question: 'Can an operations specialist approve marketing claims?', answer: 'Only if the client explicitly grants that authority. This workflow assumes substantive approval stays with the named owner.' },
    ],
    sources: ['https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation', 'https://www.asa.org.uk/advice-online/substantiation.html', 'https://www.nist.gov/director/nist-information-quality-standards'],
    related: ['philippines-marketing-operations-research', 'philippines-outsourced-content-operations-research'],
    hero,
    serviceHandoff: { slug: 'digital-marketing-operations', label: 'Plan marketing operations support', text: 'Prepare claim-level evidence and version records for review by the client\'s authorized owners.' },
  },
];
