type Post = {
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
};
const shared = [
  "https://psa.gov.ph/content/2020-census-population-and-housing-results",
  "https://www.ilo.org/data",
  "https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH",
  "https://www.oecd.org/en/data.html",
];
const close = (decision: string, boundary: string) => [
  `A careful conclusion is narrower than a promise. The evidence supports testing ${decision} as a bounded Philippines-based support lane with a named owner, a dated sample, and a visible exception state. It does not establish a guaranteed result, a universal best practice, or the suitability of a particular worker without direct observation.`,
  `The boundary is part of the finding: the specialist can prepare, classify, compare, document, and route evidence, while ${boundary} remains with the authorized client owner. That separation keeps research useful without converting context into an unsupported claim.`,
  `Limitations should remain visible after launch. Public datasets use different definitions, periods, and populations; internal samples may be small or affected by seasonality; and a clean record can still conceal a poor source. Recheck the source, record the observation date, and revise the operating hypothesis when direct evidence disagrees.`,
  `The evidence-led next step is a short pilot containing ordinary work, incomplete evidence, and a genuine exception. Review first-pass acceptance, correction reason, unresolved age, and escalation timeliness. Expand only when another reviewer can reproduce the result from the same records and the owner can explain every material decision.`,
];
const baseFaq = [
  {
    question: "Do the cited public indicators predict a service result?",
    answer:
      "No. They provide context and definitions; a role-specific sample, reviewer, and acceptance rule are still required.",
  },
  {
    question: "What should be tested first?",
    answer:
      "Test a narrow queue with normal, incomplete, and exceptional items, preserving source references and correction reasons.",
  },
];
export const aug21ResearchPosts: readonly Post[] = [
  {
    slug: "philippines-outsourcing-access-review-evidence-research",
    title:
      "Philippines Outsourcing Access Reviews: What Evidence Shows a Permission Is Still Needed?",
    excerpt:
      "Access review support is strongest when it proves scope, owner, recency, and disposition without making the reviewer a rubber stamp.",
    published: "2026-08-21",
    statistic:
      "The World Bank digital-development indicator and ITU statistical materials demonstrate why a technology measure needs a defined population, period, and unit before it is interpreted.",
    methodology:
      "This desk review compares public statistical definitions from Philippine and international institutions with a bounded operating hypothesis about access-review administration. Facts describe the sources and their limits; the proposed evidence fields and sampling method are analysis for an Outsourced Philippines work lane, not a compliance certification.",
    body: [
      "Research question: what must a Philippines-based operations specialist record so an authorized owner can decide whether a user permission remains necessary? The question concerns review evidence, not whether a worker can approve access. A permission review has at least four different objects: the person or service identity, the system or resource, the business reason for access, and the owner decision. If those objects are collapsed into a spreadsheet row marked “checked,” the record may show activity while failing to show judgment.",
      "Evidence scope: public technology and labor datasets provide context about connected work and statistical definitions, but none measures the correctness of one client permission set. The analysis therefore uses a traceability hypothesis: a review record is more reproducible when another authorized reviewer can identify the identity, entitlement, source of need, review date, owner, disposition, and unresolved question without reconstructing a private conversation. This is an operational proposition to test, not a fact claimed by the external sources.",
      "A useful register begins with identity resolution. It should distinguish a named human account, a shared account, a service identity, and a dormant record. The specialist can compare the account register to the approved roster and flag mismatches, but should not infer that a familiar name proves current employment or that an active account proves current need. The source of the roster, its effective date, and the matching rule belong beside the result. A mismatch should become an exception with an owner and pause condition.",
      "The second layer is entitlement meaning. “Editor” or “administrator” is not self-explanatory across tools. Capture the system name, role label, resource scope, and the source policy or request that defines the role. Where the platform exposes a last-used signal, preserve its timestamp and definition; where it does not, mark the field unavailable rather than filling it with a guess. The support lane can assemble this evidence and highlight stale or unusually broad access, while the authorized owner decides whether to retain, reduce, or revoke it.",
      "The third layer is evidence freshness. An access need can change when a project ends, a task moves, or a contractor changes role. A dated review is not automatically current if the underlying roster or assignment record predates it. A small sample should intentionally include a recent joiner, a changed role, a dormant identity, and an exception. Record which source was consulted and whether the source itself had a freshness warning. This sample tests the process definition rather than rewarding a high completion percentage.",
      "Methodologically, separate completeness from correctness. Completeness asks whether required fields and source links exist. Correctness asks whether the owner’s disposition follows the applicable rule. A specialist may calculate missing-field and unresolved-item counts, but should not convert a complete record into a compliance conclusion. A reviewer can sample both retained and changed permissions, compare them to the stated evidence, and record disagreement as a taxonomy or instruction problem instead of silently correcting the row.",
      "Access minimization also affects the support role. The worker needs enough visibility to read the approved roster, entitlement export, and request record, but does not necessarily need the ability to change permissions. Individual accounts, least-necessary access, and an audit trail make the lane safer and make a later review possible. If the task requires privileged access, that requirement should be explicit, time-bounded, and owned by the client. The research cannot determine legal compliance from a dataset or a screenshot.",
      "The practical operating record should preserve disposition categories such as retained with evidence, reduced by owner, revoked by owner, awaiting clarification, conflicting sources, and not reviewable. Each category has a different next action. Treating “awaiting clarification” as complete hides risk, while treating every unusual permission as an error may disrupt legitimate work. The specialist’s value is making the state legible so the owner can act proportionately.",
      "Route-local audit: give an anonymized record to a preparer, an independent reviewer, and an authorized owner. Ask each to identify the identity, entitlement, business need, source date, unresolved issue, and next decision. Record disagreement instead of adding a completion mark. This tests whether the evidence survives a Philippines-based support handoff across working windows, where the written record must carry context after the collector is offline. It also keeps the role boundary clear: the specialist improves evidence continuity, while the owner remains accountable for the access decision.",
      "Conclusion: the strongest evidence is a reproducible link between identity, entitlement, need, source freshness, and owner disposition. Public indicators cannot prove that a permission is necessary or that a client meets a legal obligation. Pilot a mixed sample, inspect missingness and disagreement, and retain a visible not-reviewable state before expanding.",
      ...close(
        "access-review evidence",
        "the decision to grant, retain, reduce, or revoke permissions",
      ),
    ],
    dataSections: [
      {
        heading: "Facts and analysis",
        text: "The linked institutions support the need for defined statistical terms and dated evidence. The proposed access-review register, sample, and state model are analytical controls to test in a client workflow.",
      },
      {
        heading: "Role boundary",
        text: "A Philippines-based specialist may gather records, compare fields, document mismatches, and route exceptions. The client owner retains permission decisions and any interpretation of policy or legal obligation.",
      },
    ],
    faqs: baseFaq,
    sources: [
      "https://psa.gov.ph/content/2020-census-population-and-housing-results",
      "https://www.ilo.org/data",
      "https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH",
      "https://www.oecd.org/en/data.html",
    ],
    related: [
      "philippines-outsourcing-access-governance-research",
      "philippines-outsourcing-source-quality-evidence-research",
    ],
    hero: "/aug21-research-heroes/access-review-evidence.png",
  },
  {
    slug: "philippines-outsourcing-exception-aging-research",
    title:
      "Philippines Outsourcing Exception Queues: Does Aging Reveal a Routing Problem?",
    excerpt:
      "Exception age is a diagnostic signal only when the queue preserves why work paused, who owns the next decision, and when the clock began.",
    published: "2026-08-21",
    statistic:
      "ILO and OECD data resources model the importance of definitions and observation periods; they do not provide a benchmark for the age of one client queue.",
    methodology:
      "This review examines exception aging as an operating hypothesis for Philippines-based support. It uses institutional data documentation to frame evidence scope, then distinguishes measured queue fields from analysis about routing, ownership, and pause conditions. No market-wide aging rate is inferred.",
    body: [
      "Research question: when an exception remains open in a Philippines-based support queue, can its age help an owner locate a routing failure rather than simply blame slow execution? The answer depends on what “age” measures. Time since creation, time since last action, time waiting for an owner, and time since a source became unavailable are different clocks. A single overdue label hides those differences and makes a queue look like a performance scoreboard instead of a map of decisions.",
      "Evidence scope: the cited sources establish why comparable observations need a population, period, definition, and denominator. They do not measure the queue of Outsourced Philippines or predict an individual specialist’s speed. The test proposed here is narrower: classify exception states, start the relevant clock, preserve the dependency, and examine whether aged items cluster around a particular missing owner, source, rule, or handoff.",
      "A first design choice is state vocabulary. “Open” should not include awaiting client answer, blocked by access, conflicting source, suspected duplicate, ready for owner decision, and returned for correction as if they were interchangeable. Each state has a different clock and escalation rule. The specialist can assign a state using written criteria, attach the source record, and record the latest action. If the criteria do not fit, the correct action is to raise a taxonomy question rather than force a clean category.",
      "A second choice is the unit of analysis. One customer case may produce several exceptions; one exception may move between owners; a reopened item may represent a new problem or a failed resolution. Count items and transitions separately. Preserve creation, pause, resume, and closure events with timestamps. This lets a reviewer distinguish a queue with many old but actively owned cases from one with few cases that have disappeared between systems. Without the event trail, an aging average has little explanatory power.",
      "A third choice is segmentation. Compare ordinary work with items requiring approval, missing a source, involving a system outage, or containing contradictory instructions. Review by source, owner, service lane, and state, while avoiding unsupported comparisons between unlike populations. A small sample can include one item from each state and one reopened item. The purpose is to test whether the routing model makes the next decision obvious, not to produce a flattering aggregate.",
      "The specialist’s responsibility ends at evidence preparation and routing. They may identify that an item exceeds the written review window, request a missing record, or escalate a conflicting instruction. They should not invent an answer to clear the clock, close an item merely because no one replied, or choose the most convenient source. If a client owner cannot respond, the queue needs an explicit pause or continuity rule. Unacknowledged waiting is operational debt, not completed work.",
      "A useful review pairs aging with outcome. Track time to first triage, time awaiting owner, number of source requests, correction count, and final disposition. A reduction in age accompanied by more reopenings may indicate premature closure. A stable age accompanied by clear ownership may be safer than a fast queue that loses evidence. This is why the research question concerns routing and state design rather than a universal service-level target.",
      "Limitations are important. Queue data can be incomplete when work happens in chat, email, or local notes. Timestamps may reflect system events rather than substantive action. Seasonality, staffing changes, and policy changes can alter the mix. A pilot should state these limits and retain a small audit sample. The owner should review whether the measured field actually corresponds to the decision they care about before changing a role or escalation rule.",
      "Route-local audit: reconcile sampled queue items against creation, pause, resume, and closure events. Include each state, a reopened item, and an item waiting for an owner. A second reviewer should calculate age independently; differences expose unstable definitions. In a Philippines-based support lane, a message timestamp may show dispatch rather than receipt, so preserve both event and interpretation. The worker may prepare comparisons and highlight clusters, but the client owner decides how to prioritize, revise policy, or accept a pause.",
      "Conclusion: exception age can reveal a routing question only when clocks, states, denominators, and pause conditions are explicit. Institutional sources support disciplined measurement, not a universal aging benchmark. Test mixed cases and use age to choose inspection, never as proof of negligence or authority to close a disputed item.",
      ...close(
        "exception-aging analysis",
        "the prioritization, closure, or policy decision",
      ),
    ],
    dataSections: [
      {
        heading: "Measured fields",
        text: "Aged-item analysis is only as strong as its state definitions, event timestamps, owner fields, and denominator. Preserve those fields before comparing periods.",
      },
      {
        heading: "Analytical boundary",
        text: "Age can indicate where to inspect routing or ownership. It does not prove negligence, predict future performance, or authorize a specialist to close a disputed item.",
      },
    ],
    faqs: baseFaq,
    sources: [
      "https://psa.gov.ph/content/2020-census-population-and-housing-results",
      "https://www.ilo.org/data",
      "https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH",
      "https://www.oecd.org/en/data.html",
    ],
    related: [
      "philippines-outsourcing-exception-aging-patterns-research",
      "philippines-outsourcing-escalation-path-design",
    ],
    hero: "/aug21-research-heroes/exception-aging.png",
  },
  {
    slug: "philippines-outsourcing-invoice-source-matching-research",
    title:
      "Philippines Outsourcing Invoice Support: How Much Matching Evidence Is Enough?",
    excerpt:
      "Invoice support becomes reviewable when every match shows the source fields used and every mismatch remains visible before approval.",
    published: "2026-08-21",
    statistic:
      "Bangko Sentral ng Pilipinas payment-system publications illustrate the value of explicit transaction definitions; they do not establish a client’s matching tolerance or approval control.",
    methodology:
      "This desk study uses BSP publications alongside ILO, World Bank, and OECD data documentation to separate public context from an evidence design for invoice support. It does not estimate savings, accuracy, or financial outcomes. The proposed matching test is analytical and must be checked against client policy and records.",
    body: [
      "Research question: what evidence allows a Philippines-based invoice-support specialist to prepare a reliable match without silently taking over approval? Matching is not one action. It may compare supplier identity, invoice number, purchase order, line items, quantities, tax treatment, currency, receipt, and duplicate indicators. A row marked matched is meaningful only when the record says which fields agreed, which fields were unavailable, and what rule permitted the comparison.",
      "Evidence scope: BSP materials provide public descriptions of payment systems and terminology, while the other linked sources provide statistical context and documentation practice. None measures the correctness of a specific invoice queue. The operating hypothesis is that source-level transparency makes review safer: a reviewer should be able to reproduce the match from the same approved records and see why an item was held rather than infer that a familiar supplier or amount was sufficient.",
      "Start by separating record collection from financial judgment. The support lane can retrieve the invoice, purchase order, receiving evidence, supplier record, and prior approved reference when policy permits. It can normalize dates, identify missing fields, flag duplicate numbers, and compare defined values. It should not decide that a variance is immaterial, authorize payment, approve a credit, release a hold, or resolve a dispute unless the client has explicitly assigned that authority under applicable controls. In ordinary Outsourced Philippines work, those decisions remain owner actions.",
      "A matching record should distinguish exact match, conditional match, mismatch, duplicate suspected, source unavailable, dispute pending, and owner decision required. Conditional match is not a softer form of exact match; it is a different state that preserves the unresolved condition. Record the source identifiers, comparison date, rule version, variance description, and reviewer. If OCR or a system extraction supplied a value, retain the original source reference so transcription is not mistaken for evidence.",
      "The sample design should include more than clean invoices. Select a normal three-way match, a partial receipt, a changed supplier bank detail, a duplicate-looking invoice, a credit note, and an invoice with a currency or tax discrepancy if those cases exist in the lane. For each, ask a reviewer to reproduce the support worker’s conclusion from the attached evidence. Measure correction categories, not only pass rate. Repeated disagreement about a field may signal unclear policy or poor source quality rather than carelessness.",
      "The queue also needs a safe stop. If supplier identity conflicts across records, a bank detail changed without an approved request, or a receipt is missing, the specialist should preserve the conflict and route it. They should not search for a second unofficial source merely to clear the item or edit a source record to make it match. A clean queue achieved by removing difficult items is not evidence of quality. The unresolved state is part of the financial-control record.",
      "Public financial indicators cannot validate a client’s segregation of duties. The client must define who may prepare, review, approve, release, and reconcile. The specialist’s access should be limited to the systems and fields needed for the assigned preparation. Individual credentials, audit logs, and periodic sample review improve traceability, but they do not replace policy, contractual controls, or professional accounting judgment.",
      "A useful dashboard pairs volume with evidence health: share with all required source fields, share in exception states, average and oldest time awaiting owner, duplicate flags, correction reasons, and reopened items. Do not present those measures as a savings or accuracy promise. They show where the workflow needs inspection. Any threshold should be tied to the client’s documented policy and reviewed when the invoice population or process changes.",
      "A second-review exercise makes the matching claim testable. Remove the preparer’s final label from a small mixed sample and ask another reviewer to determine the status from the invoice, purchase order, receipt, supplier record, and stated rule. Require the reviewer to name every field that was compared, every field that was unavailable, and the exact condition that would release an exception. Compare the two records without treating disagreement as an automatic error. A disagreement about a tax field may reflect an unclear policy, while a disagreement about an invoice number may reveal a transcription problem. Record both the source of the value and the time it was retrieved, because a later source update should not silently rewrite the evidence used for the original preparation. This is a useful test for Philippines-based invoice support across distributed teams: the authorized owner should be able to reproduce the preparation without relying on a private chat or the worker’s memory. The test improves traceability while preserving the boundary between preparation and financial approval.",
      "Conclusion: matching evidence is enough only when the client rule identifies fields, tolerances, source records, and the decision owner. BSP material supplies public payment context; it does not validate one invoice or approval control. A Philippines-based specialist can prepare comparisons, preserve mismatches, and route exceptions. Pilot ordinary and difficult invoices, measure reproducibility, and keep approval, settlement, write-off, and bank-detail decisions with the authorized owner.",
      ...close(
        "invoice-source matching",
        "payment approval, dispute resolution, write-offs, and bank-detail decisions",
      ),
    ],
    dataSections: [
      {
        heading: "Facts and analysis",
        text: "BSP sources support careful use of defined payment terminology. The field-level match record and sample design are operational analysis that must be aligned with a client’s own policy.",
      },
      {
        heading: "Control boundary",
        text: "Support may prepare and compare evidence. An authorized owner retains approval, settlement, dispute, write-off, and other material financial decisions.",
      },
    ],
    faqs: baseFaq,
    sources: [
      "https://psa.gov.ph/content/2020-census-population-and-housing-results",
      "https://www.ilo.org/data",
      "https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH",
      "https://www.oecd.org/en/data.html",
      "https://www.bsp.gov.ph/Media_And_Research/Report%20on%20the%20Philippine%20Payment%20System.pdf",
    ],
    related: [
      "philippines-outsourcing-invoice-reconciliation-research",
      "philippines-outsourcing-source-quality-evidence-research",
    ],
    hero: "/aug21-research-heroes/invoice-reconciliation.png",
  },
  {
    slug: "philippines-outsourcing-project-dependency-evidence-research",
    title:
      "Philippines Outsourcing Project Coordination: Can Dependency Evidence Prevent Hidden Blockers?",
    excerpt:
      "Dependency records help distributed teams when they show the predecessor, successor, owner, evidence, and condition for safe progress.",
    published: "2026-08-21",
    statistic:
      "World Bank and ILO data resources show why an indicator must retain its definition and period; they do not measure the reliability of a project coordinator or a specific delivery plan.",
    methodology:
      "This research review treats dependency mapping as a testable coordination practice for Philippines-based support. It uses public institutional materials only for evidence-scope guidance and applies a separate operating analysis to project records. It does not claim that a dependency map predicts delivery performance.",
    body: [
      "Research question: what makes a project dependency record useful when a Philippines-based coordinator supports work across time zones, functions, and client owners? A dependency is not simply a task with a due date. It is a relationship in which one output, decision, access grant, or source condition must exist before another item can proceed. If the record names only two tasks, a team may see a line on a board while missing the actual evidence and decision owner that control progress.",
      "Evidence scope: the external sources are used to reinforce a basic methodological rule—retain definitions, dates, and units before interpretation. They do not provide a project-management benchmark for Outsourced Philippines. The operating hypothesis is that a dependency is more actionable when another person can identify the predecessor output, successor need, owner, evidence location, expected condition, and escalation path without asking the coordinator to retell the history.",
      "The coordinator’s first job is to identify the dependency type. It may be a material handoff, a client approval, a system permission, a source publication, a vendor response, or a decision about scope. Each type has a different proof of readiness. A document uploaded to a folder may prove delivery but not acceptance. A message saying “approved” may lack the version or scope approved. A task marked done may not prove that the successor has what it needs. The record should state the condition, not assume it.",
      "A strong dependency entry carries two linked records: the predecessor and the successor. It names the accountable owner for each, the expected artifact, the source-of-truth location, the relevant version or date, and the event that allows the successor to begin. It also records what happens when the condition is not met. A coordinator may gather these fields, draft a status, and ask the owner to confirm. They should not declare a policy, budget, legal, technical, or scope decision merely because the predecessor appears late.",
      "The research test should use a mixed sample. Include a dependency that cleared normally, one that cleared after clarification, one blocked by access, one with a changed requirement, and one that was incorrectly assumed rather than recorded. Compare the map to actual handoff evidence. Ask a reviewer who was not in the original conversation to reconstruct the blocker and the next safe action. If they cannot, the gap may be in terminology, ownership, source location, or the acceptance condition.",
      "Timing needs care. Record when the dependency was identified, when an owner acknowledged it, when evidence became available, and when the successor accepted it. These are not interchangeable durations. A coordinator should preserve a pause when the owner or source is unavailable rather than shift the due date and erase the waiting period. This makes planning more honest and exposes whether escalation rules work. It also prevents a distributed team from treating silence as permission to proceed.",
      "The map should show negative evidence too. If no dependency was found after a stated review, record the scope and method rather than claiming that none exists. If a source record is missing, mark it missing. If two owners provide incompatible instructions, preserve both and route the conflict. A dependency map is a decision aid, not a substitute for technical review, professional judgment, or client authority. Its value comes from making uncertainty visible early enough to act.",
      "Metrics should avoid false precision. Track percentage of sampled dependencies with a named owner, evidence link, acceptance condition, and current state; count reopened dependencies; and examine the age of items waiting for a decision. A high completion rate can coexist with hidden rework if accepted artifacts are later rejected. The review should therefore pair map fields with downstream correction or reopen events, while acknowledging that a small sample cannot establish a general delivery rate.",
      "Route-local audit: compare planned dependencies with actual handoffs. Sample a cleared item, delayed item, changed requirement, access blocker, and dependency discovered late. Preserve predecessor artifact, successor request, owner acknowledgement, acceptance condition, and state event. Ask someone outside the original conversation to reconstruct what may safely proceed. If the answer depends on memory, the record is incomplete. A Philippines-based coordinator can maintain this evidence across time zones and route unanswered questions, but cannot turn an inferred relationship into authorization.",
      "Conclusion: dependency evidence prevents hidden blockers when it records a specific relationship, proof of readiness, accountable owners, and a safe resume condition. Public sources justify disciplined definitions but do not predict delivery reliability. Test reconstruction on mixed cases and keep the owner’s proceed decision separate from coordination support.",
      ...close(
        "project-dependency evidence",
        "scope, budget, technical, legal, and delivery decisions",
      ),
    ],
    dataSections: [
      {
        heading: "Evidence test",
        text: "The most useful test is reconstruction: can an uninvolved reviewer identify what is blocked, by whom, on what evidence, and under what resume condition?",
      },
      {
        heading: "Role boundary",
        text: "Coordination support may maintain the map and route questions. The client owner decides whether a dependency is satisfied and whether work may proceed when evidence is incomplete.",
      },
    ],
    faqs: baseFaq,
    sources: [
      "https://psa.gov.ph/content/2020-census-population-and-housing-results",
      "https://www.ilo.org/data",
      "https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH",
      "https://www.oecd.org/en/data.html",
    ],
    related: [
      "philippines-outsourcing-handoff-reliability-research",
      "philippines-outsourcing-work-queue-ownership",
    ],
    hero: "/aug21-research-heroes/project-dependencies.png",
  },
  {
    slug: "philippines-outsourcing-feedback-sampling-research",
    title:
      "Philippines Outsourcing Customer Feedback: What Makes a Sample Decision-Useful?",
    excerpt:
      "Feedback analysis needs a stated sampling frame, coding rule, source trail, and uncertainty boundary before a theme becomes an operating signal.",
    published: "2026-08-21",
    statistic:
      "Philippine Statistics Authority public data illustrates why a sample requires a defined population and period before a result is generalized.",
    methodology:
      "This desk review distinguishes public sampling and data-definition context from an analytical method for a Philippines-based customer-feedback support lane. It does not estimate sentiment, prevalence, customer value, or product impact. The proposed sample and coding review are tests for a client-owned workflow.",
    body: [
      "Research question: when can a Philippines-based feedback analyst report a theme as decision-useful without turning a small set of comments into a prevalence claim? Customer feedback is valuable but uneven. A complaint, survey answer, support transcript, review, and interview do not enter the record through the same channel or represent the same population. The analyst must preserve how an item was collected, what group it could speak about, and what remains unknown before counting themes.",
      "Evidence scope: the linked public data resources demonstrate the importance of a defined population, period, unit, and method. They do not measure the experience of a client’s customers or validate a coding taxonomy. The operating hypothesis is that a feedback summary is more defensible when another reviewer can reproduce the sampling frame, see the source item, understand the code, inspect disagreement, and distinguish reported experience from analyst interpretation.",
      "Define the frame before reading for a theme. State the channels included, collection dates, eligibility rule, treatment of duplicates, language or translation approach, and exclusions. If the queue contains only customers who contacted support, it cannot be described as the experience of all customers without a separate basis for that inference. The analyst can report the frame honestly and still surface useful signals. Precision about scope increases trust rather than weakening the insight.",
      "Coding should be layered. A first code can describe the reported topic, such as delayed response, unclear instruction, billing confusion, or product defect. A second field can capture the requested or implied outcome. A third can record evidence strength, ambiguity, or a need for owner review. Keep the source excerpt or record reference available to an authorized reviewer, but do not expose personal data unnecessarily. One comment may fit several codes; forcing a single label creates artificial certainty.",
      "The sample should contain routine and unusual cases. Review randomly selected items from the defined frame, then deliberately inspect edge cases and repeat contacts. The random component provides disciplined coverage; the edge-case component tests whether the taxonomy can represent uncertainty. Record inter-reviewer disagreement and the reason for it. Disagreement may show that the code definitions are overlapping, that the source lacks context, or that the question being asked is actually about remediation rather than theme prevalence.",
      "A theme is not a product decision. The analyst may summarize reported experiences, compare coded groups inside the same frame, flag an emerging concern, and route examples. They should not promise a fix, assign blame, determine legal exposure, or claim that a theme represents all customers. A client owner must decide whether to investigate, change a process, contact a customer, or prioritize a product response. The handoff should contain evidence and uncertainty, not an overconfident recommendation disguised as a count.",
      "Measurement should include denominator and missingness. Report the number of source items reviewed, number coded, number excluded, number ambiguous, and the period. If a channel supplied most items, show that composition. If translation or redaction removed context, say so. A rising count can reflect more volume, a channel change, a campaign, or a better capture process rather than worsening experience. Trends require consistent collection and comparable definitions, not just two numbers placed side by side.",
      "Privacy and access are part of methodology. Use minimum necessary fields, restrict raw feedback to people who need it, and separate identifying details from the analytical table where practical. The support role should not copy sensitive data into broad notes. Public research cannot establish compliance for a client’s customer-data process. It can, however, support a disciplined boundary: collect only what the question requires, preserve provenance, and escalate any request that exceeds the approved scope.",
      "Route-local audit: record the frame query, extraction date, inclusion rules, duplicate treatment, channel composition, and codebook version. Have a second reviewer code a subset independently and preserve disagreements with source references. In a Philippines-based support lane, translation or abbreviated feedback can lose context, so label that limitation rather than presenting a paraphrase as original evidence. The analyst prepares a bounded signal; the client owner decides whether to investigate, change a process, or request a product review.",
      "Conclusion: a feedback sample is decision-useful when population, period, selection method, coding rules, source trail, and uncertainty are visible to another reviewer. Public statistics support those definitions but cannot establish prevalence or causation in a client population. Pilot the frame, inspect disagreement and missingness, and separate reported experience from analysis.",
      ...close(
        "feedback sampling",
        "customer treatment, product prioritization, remediation, and communication decisions",
      ),
    ],
    dataSections: [
      {
        heading: "Fact versus analysis",
        text: "Public sources support careful definitions of population and period. The sampling frame, codebook, and review method proposed here are analytical instruments that need client testing.",
      },
      {
        heading: "Uncertainty boundary",
        text: "A feedback analyst can make reported experiences easier to inspect. They cannot infer prevalence, causation, or the correct remedy from a small or biased sample alone.",
      },
    ],
    faqs: baseFaq,
    sources: [
      "https://psa.gov.ph/content/2020-census-population-and-housing-results",
      "https://www.ilo.org/data",
      "https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH",
      "https://www.oecd.org/en/data.html",
    ],
    related: [
      "philippines-outsourcing-customer-feedback-evidence-research",
      "philippines-outsourcing-review-consistency-research",
    ],
    hero: "/aug21-research-heroes/feedback-sampling.png",
  },
];
