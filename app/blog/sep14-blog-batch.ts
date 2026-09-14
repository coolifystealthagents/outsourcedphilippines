type Topic = {
  slug: string;
  title: string;
  excerpt: string;
  lane: string;
  owner: string;
  record: string;
  routeBody: readonly string[];
};

const publishedAt = '2026-09-14';
const heroImage = '/research-batch-thumbnail.jpg';

const topics: readonly Topic[] = [
  {
    slug: 'philippines-executive-assistant-decision-register-operating-guide-september-14-2026',
    title: 'A decision register for executive support that people will keep using, September 14 edition',
    excerpt: 'Capture decisions, owners, and follow-up dates without turning meeting notes into an unofficial policy archive.',
    lane: 'executive decision follow-up',
    owner: 'executive or delegated decision owner',
    record: 'meeting reference, decision wording, decision owner, action owner, due date, source link, status, and superseding decision',
    routeBody: [
      'A decision register is narrower than a meeting transcript. It records what was decided, who owns the follow-up, and where the approved source lives. Discussion that did not produce a decision stays in the meeting notes.',
      'The assistant should read the decision wording back to the owner before publishing it to the register. If two notes disagree, both remain visible until the decision owner resolves the conflict. The assistant does not choose the version that sounds more plausible.',
      'During the weekly review, close actions only after checking the destination system or receiving owner confirmation. Link a later reversal to the original entry so staff do not act on an obsolete instruction.'
    ],
  },
  {
    slug: 'philippines-customer-support-escalation-receipt-operating-guide-september-14-2026',
    title: 'Give every customer escalation a receipt, September 14 edition',
    excerpt: 'A short acknowledgment and ownership record can keep urgent support cases from disappearing between teams.',
    lane: 'customer support escalation intake',
    owner: 'support escalation manager',
    record: 'case identifier, received time, stated issue, severity basis, current owner, required evidence, next update time, and resolution state',
    routeBody: [
      'An escalation receipt confirms that a case reached the next queue. It is not a promise that the customer will receive a particular outcome. Use approved language that names the next update time and the channel where that update will appear.',
      'Severity should come from the client\'s written definitions. A Philippines-based support specialist can check the evidence and flag a possible match, but the assigned manager handles exceptions and any customer remedy outside the playbook.',
      'Measure unacknowledged receipts, missed update times, transfers, and reopened cases separately. A fast acknowledgment is useful, but it does not show that the underlying problem was fixed.'
    ],
  },
  {
    slug: 'philippines-ecommerce-product-attribute-exception-queue-operating-guide-september-14-2026',
    title: 'Do not let odd product attributes vanish into a spreadsheet, September 14 edition',
    excerpt: 'Route uncertain catalog data into a visible exception queue instead of forcing a value that may be wrong.',
    lane: 'ecommerce product attribute review',
    owner: 'catalog or merchandising owner',
    record: 'SKU, market, attribute, supplied value, source, validation rule, conflict, proposed correction, reviewer, and publication state',
    routeBody: [
      'Catalog imports often fail at the edges: an unfamiliar unit, a bundle with no matching category, or two suppliers using different names for the same field. The safe response is an exception state, not a best guess entered to clear the row.',
      'Group exceptions by rule and source so the catalog owner can resolve several related records at once. Keep the supplier value beside any normalized value; that comparison makes later corrections easier to explain.',
      'After approval, verify the storefront rather than relying on the import result alone. Record whether the corrected value appears on the intended market and variant, and leave unrelated attributes untouched.'
    ],
  },
  {
    slug: 'philippines-bookkeeping-vendor-statement-gap-review-operating-guide-september-14-2026',
    title: 'How to review gaps in a vendor statement without making an accounting call, September 14 edition',
    excerpt: 'Prepare a clean list of missing documents and unmatched lines while the authorized finance owner keeps accounting judgment.',
    lane: 'vendor statement gap review',
    owner: 'authorized finance reviewer',
    record: 'vendor, statement period, line reference, amount, currency, candidate document, match basis, discrepancy, request status, and reviewer decision',
    routeBody: [
      'Start with the statement period and the ledger cutoff. That prevents a payment posted after cutoff from being described as missing and keeps the comparison reproducible.',
      'For each unmatched line, attach the permitted source record and describe the mismatch in plain terms. Do not net amounts, infer a credit, change a posting, or contact a vendor unless the finance owner has approved that action.',
      'The closeout should distinguish documents received, confirmed timing differences, owner-approved adjustments, and unresolved gaps. Those states help the next reviewer pick up the work without redoing the entire statement.'
    ],
  },
  {
    slug: 'philippines-recruitment-candidate-consent-log-operating-guide-september-14-2026',
    title: 'A practical consent log for recruitment coordination, September 14 edition',
    excerpt: 'Keep candidate contact preferences and permissions attached to the recruiting record before scheduling or follow-up.',
    lane: 'candidate communication coordination',
    owner: 'recruiting or privacy owner',
    record: 'candidate identifier, contact source, consent basis, permitted channels, restrictions, recorded time, withdrawal, retention state, and owner',
    routeBody: [
      'A consent log should answer a simple operational question: may the recruiting team use this channel for this purpose now? It should not become a store for extra personal detail that the workflow does not need.',
      'Use the client\'s approved consent language and retention rule. Coordinators can record a candidate\'s stated preference and stop contact after a withdrawal, while legal interpretation and unusual cases go to the named privacy or recruiting owner.',
      'Before any campaign or scheduling batch, check the current consent state against the intended channel. Count blocked, withdrawn, and unclear records so managers see how much of the list was actually eligible.'
    ],
  },
  {
    slug: 'philippines-real-estate-maintenance-access-brief-operating-guide-september-14-2026',
    title: 'The maintenance access brief that protects everyone’s time, September 14 edition',
    excerpt: 'Prepare property access details, permissions, and exceptions before a contractor is dispatched.',
    lane: 'property maintenance access coordination',
    owner: 'property manager or authorized owner',
    record: 'property, work order, approved contact, access window, permission state, contractor, restrictions, notice evidence, exception, and completion proof',
    routeBody: [
      'The access brief is a coordination record, not permission by itself. It points to the approved notice or authorization and gives the contractor only the details required for the assigned visit.',
      'Confirm time zones, occupancy notes allowed by policy, key or escort arrangements, and a safe contact if access fails. Questions about tenant rights, emergency entry, or lease interpretation remain with the property manager or counsel.',
      'Close the visit with arrival, access outcome, work-order status, and any follow-up evidence. A contractor marked dispatched is still pending until the property record shows what happened.'
    ],
  },
  {
    slug: 'philippines-healthcare-admin-record-request-tracker-operating-guide-september-14-2026',
    title: 'Track healthcare record requests without widening access, September 14 edition',
    excerpt: 'A minimum-necessary tracker for request status, authorization checks, and accountable handoffs.',
    lane: 'healthcare record request administration',
    owner: 'authorized privacy or records owner',
    record: 'approved request identifier, requester, authority check state, requested scope, received date, due date, assigned owner, disclosure state, and exception',
    routeBody: [
      'The tracker needs status data, not a copied clinical record. Store protected material only in the approved system and link by the organization\'s permitted identifier.',
      'Administrative staff may check required fields, record receipt, route the request, and follow up on an assigned due date. They should pause when identity, authority, scope, or disclosure rules are unclear and send the case to the authorized owner.',
      'Review aging from the verified received time and separate cases waiting on the requester from cases waiting inside the organization. The queue should expose delay without revealing unnecessary health information.'
    ],
  },
  {
    slug: 'philippines-sales-operations-territory-conflict-check-operating-guide-september-14-2026',
    title: 'Run a territory conflict check before assigning the lead, September 14 edition',
    excerpt: 'Compare account ownership evidence before CRM routing creates duplicate outreach or internal disputes.',
    lane: 'sales territory routing',
    owner: 'sales operations or territory owner',
    record: 'account identifier, normalized domain, current owner, territory rule version, open opportunity, duplicate candidates, conflict evidence, routing decision, and reviewer',
    routeBody: [
      'Start with durable identifiers such as the approved account ID and normalized company domain. Names alone produce false matches when subsidiaries, franchises, or similarly named firms appear in the same queue.',
      'A sales operations specialist can gather ownership evidence and mark the rules that appear to apply. When rules overlap or an active opportunity conflicts with the proposed route, the specialist holds assignment for the named owner.',
      'Audit the eventual CRM owner, not just the routing recommendation. Track overrides and their reasons because repeated overrides usually point to a rule or data problem, not a need for faster processing.'
    ],
  },
  {
    slug: 'philippines-legal-admin-filing-proof-index-operating-guide-september-14-2026',
    title: 'Build a filing-proof index without treating “sent” as filed, September 14 edition',
    excerpt: 'Keep receipts, portal states, and attorney review together while legal conclusions remain with counsel.',
    lane: 'legal filing administration',
    owner: 'supervising lawyer or authorized filing owner',
    record: 'matter reference, filing description, jurisdiction, instructed deadline, approved version, submission channel, receipt, portal state, rejection notice, and owner review',
    routeBody: [
      'An email in the sent folder proves only that an email left the account. The filing index should point to the accepted receipt or portal state that the supervising lawyer recognizes as completion.',
      'Administrative support can prepare the evidence packet, compare document identifiers, record timestamps, and flag a rejection. Counsel decides legal sufficiency, deadline interpretation, corrective action, and any representation to a court or agency.',
      'Keep rejected and superseded submissions linked to the accepted record. That history explains what changed and prevents a later reviewer from mistaking an earlier upload for the operative filing.'
    ],
  },
  {
    slug: 'philippines-marketing-utm-governance-log-operating-guide-september-14-2026',
    title: 'A UTM governance log for campaigns with many hands, September 14 edition',
    excerpt: 'Keep campaign tags consistent and reviewable without silently rewriting live tracking links.',
    lane: 'marketing campaign link preparation',
    owner: 'marketing analytics or campaign owner',
    record: 'destination URL, campaign, source, medium, content tag, naming-rule version, requester, QA result, approval, launch state, and correction history',
    routeBody: [
      'A UTM log works when the naming rule is versioned and examples are easy to copy. Free-form tags create nearly identical campaign rows that later have to be reconciled by hand.',
      'The coordinator can build and test links, check encoding, and compare tags with the approved brief. Redirect strategy, attribution policy, and changes to live links require the campaign or analytics owner.',
      'After launch, test a sample from the actual published placement and preserve corrections as new records. Editing the old entry in place removes the evidence needed to explain a reporting break.'
    ],
  },
  {
    slug: 'philippines-it-helpdesk-privileged-request-packet-operating-guide-september-14-2026',
    title: 'What belongs in a privileged-access request packet?, September 14 edition',
    excerpt: 'Give security reviewers enough context to decide while keeping approval separate from helpdesk preparation.',
    lane: 'privileged access request preparation',
    owner: 'authorized system or security approver',
    record: 'requester, system, requested role, business purpose, data scope, duration, manager evidence, separation concern, approver, provisioning event, and expiry check',
    routeBody: [
      'The packet should make the requested privilege and its duration unambiguous. “Admin access” is too broad when the system has several roles with different powers.',
      'Helpdesk staff can validate required fields, attach manager evidence, identify an existing lower-privilege role, and route the packet. They cannot approve their own request or treat a manager message as security approval when policy requires another reviewer.',
      'Provisioning is followed by an independent state check and a scheduled expiry review. Record denied and reduced-scope decisions too; they show whether request quality or role design needs attention.'
    ],
  },
  {
    slug: 'philippines-operations-sop-observation-notes-operating-guide-september-14-2026',
    title: 'Write SOP observation notes before rewriting the SOP, September 14 edition',
    excerpt: 'Separate what staff observed from the process owner’s decision about changing instructions.',
    lane: 'SOP observation and change intake',
    owner: 'process or policy owner',
    record: 'SOP identifier, version, step, observation date, example, expected result, actual result, frequency, risk note, source evidence, and owner disposition',
    routeBody: [
      'An observation note describes a specific mismatch between the written step and the work. It should include the example and current SOP version without jumping straight to a replacement instruction.',
      'Operations support can group similar notes, reproduce a safe test, and identify affected records. The process owner decides whether the SOP, training, system, or exception rule should change.',
      'When a change is approved, link the observation to the new version and its effective date. Keep unresolved notes open with an owner; deleting them because the team found a workaround hides process debt.'
    ],
  },
];

export const sep14BlogPosts = topics.map(({ slug, title, excerpt }) => ({
  slug,
  title,
  excerpt,
  minutes: 8,
  publishedAt,
  heroImage,
}));

export const sep14BlogBasics = Object.fromEntries(topics.map((topic) => [topic.slug, {
  intro: `This guide defines a bounded ${topic.lane} routine for a Philippines-based specialist. It keeps preparation moving while decisions stay with the ${topic.owner}.`,
  routeBody: topic.routeBody,
  sections: [
    {
      title: 'Set the record and cutoff',
      paragraphs: [
        `Use one controlled record containing ${topic.record}. Link to permitted source systems instead of copying restricted data into working notes.`,
        'Name the population, starting state, and cutoff before processing begins. Record unknown and conflicting information as explicit states so another reviewer can reproduce the result.',
      ],
      checks: ['Which system is authoritative?', 'What cutoff governs this batch?', 'Which fields may remain unknown?'],
    },
    {
      title: 'Keep authority visible',
      paragraphs: [
        `The specialist may prepare records, perform documented checks, and route exceptions. Approval and policy judgment remain with the ${topic.owner}.`,
        'Write the pause condition beside the normal path. When evidence conflicts, preserve the competing observations and their timestamps until the named owner decides.',
      ],
      checks: ['Which actions are pre-authorized?', 'Who resolves an exception?', 'What condition pauses work?'],
    },
    {
      title: 'Verify the resulting state',
      paragraphs: [
        'Completion requires evidence in the destination system or confirmation from the accountable owner. A sent message, prepared draft, or checked task is an intermediate state.',
        `Review completeness, age, rework, and exception reasons for this ${topic.lane}. Report counts with denominators and do not treat one queue as proof of individual performance or wider business impact.`,
      ],
      checks: ['What proves completion?', 'Is the reviewer recorded?', 'Are open exceptions still visible?'],
    },
  ],
}]));
