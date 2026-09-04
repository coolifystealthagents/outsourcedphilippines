type Topic = {
  slug: string;
  title: string;
  excerpt: string;
  intro: string;
  sections: readonly { title: string; paragraphs: readonly string[]; checks: readonly string[] }[];
};

const publishedAt = '2026-09-04';

const topics: readonly Topic[] = [
  {
    slug: 'philippines-customer-support-shift-opening-check',
    title: 'A shift-opening check for a Philippines customer support team',
    excerpt: 'Start support coverage with a quick review of queue health, policy changes, access, and named escalation owners.',
    intro: 'The first few minutes of a support shift often decide whether the queue stays orderly. A Philippines-based support specialist needs more than a ticket count. They need to know what changed, which cases cannot wait, and who is available to make decisions.',
    sections: [
      { title: 'Read the queue before answering it', paragraphs: ['Begin with open volume by age and priority, then inspect the oldest unresolved cases. Check for repeat contacts, failed handoffs, and tickets waiting on customer information. This short scan gives the numbers context.', 'Confirm which channels are in scope for the shift and whether any system or product incident is active. If the queue data is delayed or incomplete, record that limitation instead of presenting the opening count as current.'], checks: ['Which cases have waited longest?', 'Is the queue data current?', 'Are any channels or systems impaired?'] },
      { title: 'Confirm today\'s decision boundaries', paragraphs: ['Review policy notices and approved reply changes that took effect since the previous shift. Refunds, account changes, safety concerns, and legal threats should keep their named approval routes.', 'The support specialist can sort work, gather facts, use approved responses, and prepare escalations. They should not infer a new policy from one unusual case or treat yesterday\'s exception as a standing rule.'], checks: ['What changed since the last shift?', 'Which decisions still need approval?', 'Where is the current answer bank?'] },
      { title: 'Leave a usable opening record', paragraphs: ['Record the observation time, queue snapshot, urgent cases, current blockers, escalation contacts, and the first work block. Keep customer details inside the approved support system.', 'The team lead should be able to compare this note with the closing handoff. Differences help explain what arrived, what moved, and what remained blocked without turning a small snapshot into a performance claim.'], checks: ['Is the observation time visible?', 'Does every urgent case have an owner?', 'Can the closing shift reconcile the note?'] },
    ],
  },
  {
    slug: 'philippines-customer-support-refund-evidence-packet',
    title: 'How a Philippines support specialist can prepare a refund evidence packet',
    excerpt: 'Gather order facts, customer history, policy references, and missing information while the authorized owner keeps the refund decision.',
    intro: 'Refund requests become slow when the decision maker has to rebuild the case from scattered messages. A support specialist can shorten that work by preparing a compact evidence packet without deciding whether money should move.',
    sections: [
      { title: 'Build the packet around one request', paragraphs: ['Use the order or case identifier as the packet identity. Add the customer request in plain language, transaction record, delivery or service evidence, prior contacts, relevant policy version, and any promised response time.', 'Separate facts from customer statements and internal notes. If dates, amounts, or identities conflict, show the conflict. Do not choose the version that makes the case easier to close.'], checks: ['Does the packet cover one decision?', 'Are facts and assertions separated?', 'Are conflicts still visible?'] },
      { title: 'Keep payment authority with the owner', paragraphs: ['A Philippines-based specialist may collect records, tag the request, calculate an amount from an approved rule, and draft a reply. The named owner approves exceptions, goodwill credits, payment changes, and the final refund.', 'Use a hold state when identity, delivery evidence, or policy applicability is unresolved. A service target should never encourage staff to skip a control simply to close the ticket on time.'], checks: ['Who can approve the refund?', 'Which gaps require a hold?', 'Is the proposed amount traceable?'] },
      { title: 'Close the record after the decision', paragraphs: ['Record the decision, approver, time, amount, payment reference where permitted, and customer message. Limit access to the people who need the case and follow the client\'s retention rules.', 'Sample completed packets for missing evidence and unauthorized decisions. Review patterns with the policy owner, but do not treat a small or selected sample as a universal error rate.'], checks: ['Is the approval recorded?', 'Was the customer message sent from an approved channel?', 'Were sensitive records handled under policy?'] },
    ],
  },
  {
    slug: 'philippines-ecommerce-order-exception-handoff',
    title: 'An ecommerce order-exception handoff for Philippines operations support',
    excerpt: 'Move delayed, split, damaged, or mismatched orders between shifts with evidence and a clear next action.',
    intro: 'An ordinary order can follow automation. An exception cannot. When an ecommerce order is delayed, split, damaged, or mismatched, the next person needs the case history and the next permitted action, not a vague note to follow up.',
    sections: [
      { title: 'Describe the exception precisely', paragraphs: ['Record the order, affected item, customer promise, fulfillment status, carrier or warehouse evidence, contact history, and the first time the problem appeared. Use the source system\'s timestamps rather than memory.', 'Choose an approved exception label, but keep a short factual note beside it. A label helps route work; it does not explain why this order belongs in the category.'], checks: ['Which item is affected?', 'What evidence shows the current state?', 'When did the exception begin?'] },
      { title: 'Name the next safe action', paragraphs: ['The specialist can request missing warehouse information, update an internal record, prepare a customer reply, and route the packet. Replacement, refund, fraud, and policy exceptions remain with authorized owners.', 'Write the next action as an observable step with an owner and due condition. "Monitor order" is weak. "Check the carrier scan after the stated cutoff and escalate if it has not changed" can be completed and reviewed.'], checks: ['Can the next action be observed?', 'Who owns it?', 'What requires customer or manager approval?'] },
      { title: 'Reconcile at the next shift', paragraphs: ['The receiving shift should acknowledge the case, verify that links still open, and either accept the next action or state what is missing. Do not create a second ticket to make the handoff look clean.', 'Track exception age, repeated handoffs, missing evidence, and customer commitments separately. These measures can reveal weak routing, but they do not establish why an order failed without case review.'], checks: ['Did the receiving shift accept the handoff?', 'Is there still one case identity?', 'Are customer commitments visible?'] },
    ],
  },
  {
    slug: 'philippines-bookkeeping-bank-feed-exception-queue',
    title: 'A bank-feed exception queue for Philippines bookkeeping support',
    excerpt: 'Prepare unmatched and ambiguous transactions for review without allowing bookkeeping support to guess the account treatment.',
    intro: 'Bank feeds reduce typing, but they do not remove judgment. Duplicate-looking entries, unfamiliar merchants, transfers, and partial matches need a queue that lets a Philippines bookkeeping specialist prepare the evidence while the client keeps accounting decisions.',
    sections: [
      { title: 'Keep the source transaction intact', paragraphs: ['Capture the account, posted date, amount, bank description, import identifier, and any candidate match. Link supporting documents without rewriting the bank text.', 'Use distinct reasons for missing document, possible duplicate, uncertain counterparty, transfer match, amount difference, and accounting treatment. If more than one reason applies, preserve both rather than forcing a convenient single label.'], checks: ['Is the bank record unchanged?', 'Are candidate matches identified as candidates?', 'Is the exception reason specific?'] },
      { title: 'Prepare, do not decide', paragraphs: ['The specialist can locate invoices, compare amounts and dates, identify prior treatment, and ask a focused question. Posting, write-off, tax, period, and policy decisions remain with the client\'s authorized financial reviewer.', 'Avoid copying last month\'s treatment when the underlying facts differ. A prior entry is useful context, not automatic approval.'], checks: ['What evidence has been gathered?', 'Which treatment needs reviewer approval?', 'Does a prior example truly match?'] },
      { title: 'Make review efficient and traceable', paragraphs: ['Send the reviewer the transaction, likely match, remaining conflict, proposed options, and deadline. Record the reviewer\'s instruction beside the item before applying it.', 'Reconcile the queue to the bank-feed total after approved actions. Report unresolved value and count with the relevant cutoff, since a changing live feed can otherwise make two correct snapshots appear inconsistent.'], checks: ['Can the reviewer answer one bounded question?', 'Is the instruction recorded?', 'Does the report state its cutoff?'] },
    ],
  },
  {
    slug: 'philippines-executive-assistant-calendar-conflict-brief',
    title: 'A calendar-conflict brief for a Philippines executive assistant',
    excerpt: 'Give an executive the facts, constraints, and viable options when meetings compete for the same time.',
    intro: 'A calendar conflict is rarely solved by moving the shorter meeting. Travel time, preparation, attendees, deadlines, and relationship context can matter more than duration. A Philippines executive assistant can prepare the choice without silently making it.',
    sections: [
      { title: 'Collect the constraints first', paragraphs: ['List the conflicting events in one time zone with organizers, required attendees, location or link, preparation needs, travel buffers, and stated flexibility. Check whether either invitation is a duplicate or placeholder.', 'Read the executive\'s current scheduling rules. Do not assume a recurring event always wins or that an external meeting is automatically more important.'], checks: ['Are all times shown in one zone?', 'Were travel and preparation included?', 'Which rules apply?'] },
      { title: 'Offer viable choices', paragraphs: ['Prepare two or three options only when they are genuinely available. Each option should show what moves, who must agree, and which deadline or relationship may be affected.', 'The assistant may draft rescheduling messages and place a temporary hold under the approved routine. The executive or delegated owner decides priority when the rules do not settle it.'], checks: ['Can each option actually be scheduled?', 'Who must approve a move?', 'Is any hold clearly marked?'] },
      { title: 'Update every affected record', paragraphs: ['After the decision, update invitations, buffers, briefing notes, and participants from the source calendar. Remove superseded holds so they do not create another conflict.', 'Include the resolved choice in the daily handoff when it changes travel, preparation, or another person\'s commitment. Keep private context out of broad calendar descriptions.'], checks: ['Were all participants notified?', 'Did stale holds get removed?', 'Was private context limited?'] },
    ],
  },
  {
    slug: 'philippines-sales-development-prospect-research-note',
    title: 'A prospect research note for Philippines sales development support',
    excerpt: 'Prepare current, sourced account context for owner-approved outreach without inventing fit or contact claims.',
    intro: 'A useful prospect note is small enough to check. It tells a sales owner what public evidence was found, when it was found, and what still needs judgment. It does not turn a company homepage into a confident buying signal.',
    sections: [
      { title: 'Start with an approved account question', paragraphs: ['Define the target organization, market, relevant service, accepted source types, and the date range that matters. Confirm the company identity before collecting details; similar names and acquired brands create easy mistakes.', 'Record public facts with source URLs and retrieval dates. Label interpretations as hypotheses. A job posting may suggest an operational need, but it does not prove budget, urgency, or buying authority.'], checks: ['Is the company identity confirmed?', 'Does each fact have a source date?', 'Are hypotheses labeled?'] },
      { title: 'Respect contact and outreach boundaries', paragraphs: ['The researcher can organize public company information, check approved records, and draft a neutral summary. They should not bypass access controls, collect sensitive personal data, or send outreach without the client\'s authorization.', 'Keep suppression, consent, territory, and account-ownership rules visible in the record. A promising note does not override a do-not-contact instruction or an existing relationship owner.'], checks: ['Is the source permitted?', 'Do contact restrictions apply?', 'Who approves outreach?'] },
      { title: 'Hand the owner a decision, not a dossier', paragraphs: ['Close with the observed fit, contrary evidence, open question, and suggested next review. Link to sources instead of pasting large extracts.', 'Audit accepted notes for source quality, identity errors, and unsupported conclusions. Conversion outcomes may inform the process, but they cannot prove that every rejected account was researched poorly.'], checks: ['What evidence argues against fit?', 'Is the open question explicit?', 'Can the owner review the note quickly?'] },
    ],
  },
  {
    slug: 'philippines-healthcare-admin-appointment-record-check',
    title: 'An appointment-record check for Philippines healthcare administration support',
    excerpt: 'Verify scheduling fields and route clinical, privacy, and urgency questions to the proper owner.',
    intro: 'A clean appointment record prevents avoidable back-and-forth, but administrative completeness is not clinical clearance. Philippines-based healthcare admin support can verify required scheduling information while clinical and privacy decisions stay with qualified owners.',
    sections: [
      { title: 'Use the approved minimum record', paragraphs: ['Check the patient identifier, service requested, date and time, location or approved remote link, referral status where required, contact preference, and administrative notes. Follow the client\'s minimum-necessary standard.', 'Do not copy sensitive details into chat or a general task board for convenience. If the approved system is unavailable, use the documented downtime route and record the later reconciliation.'], checks: ['Are required scheduling fields complete?', 'Is information in the approved system?', 'Does the downtime process apply?'] },
      { title: 'Separate scheduling from clinical judgment', paragraphs: ['The admin specialist can identify missing forms, confirm logistics, send approved reminders, and route questions. They should not interpret symptoms, determine urgency, promise eligibility, or advise on treatment.', 'Use the named escalation route when a message contains clinical content or a potential emergency. Do not paraphrase away urgency to fit an administrative category.'], checks: ['Does the message need clinical review?', 'Who owns eligibility questions?', 'Was urgency preserved in the handoff?'] },
      { title: 'Check the completed handoff', paragraphs: ['Before closing, confirm that the appointment record, reminder state, attachments, and owner response agree. Correct duplicate or stale holds through the approved workflow.', 'Sample records for missing fields and misrouted questions. Report the sampled period and denominator, and keep findings focused on the administrative process rather than making claims about clinical quality.'], checks: ['Do all records show the same appointment?', 'Was the owner response recorded?', 'Is the sample scope stated?'] },
    ],
  },
  {
    slug: 'philippines-real-estate-maintenance-intake-log',
    title: 'A maintenance intake log for Philippines real estate administration',
    excerpt: 'Capture property, tenant, access, urgency, and vendor facts while licensed and spending decisions remain with the owner.',
    intro: 'Maintenance requests arrive by phone, email, portal, and sometimes through a third party. A Philippines real estate administrator can create one reliable intake record, provided the role does not drift into technical diagnosis or owner-only decisions.',
    sections: [
      { title: 'Create one case from the first report', paragraphs: ['Record the property and unit, reporter, contact channel, observed problem in the reporter\'s words, time first noticed, photos or documents, access constraints, and any immediate safety statement.', 'Search for an existing case before opening another. Link repeat reports to the original and preserve their timestamps; repeated contact may change priority even when the described issue is the same.'], checks: ['Is the property identity clear?', 'Was the original report preserved?', 'Does an open case already exist?'] },
      { title: 'Route urgency and authority correctly', paragraphs: ['The administrator can acknowledge receipt, collect missing administrative details, contact an approved vendor, and prepare a status note. The property owner or qualified professional keeps spending, legal, safety, and technical decisions.', 'Follow the emergency route when the client\'s stated trigger appears. Do not downgrade a report because evidence is incomplete or diagnose the cause from a photograph.'], checks: ['Does an emergency trigger apply?', 'Who can authorize spending?', 'Is technical judgment reserved?'] },
      { title: 'Maintain the case until accepted closure', paragraphs: ['Track vendor contact, promised attendance, access confirmation, work evidence, tenant communication, invoices, and owner approval. A vendor\'s completed message is not sufficient if the client requires inspection or tenant confirmation.', 'Close only under the property\'s approved rule, then retain the record according to policy. Review repeated issues by property or asset without claiming causation from the log alone.'], checks: ['What proves completion?', 'Did the required person accept closure?', 'Are repeat issues visible?'] },
    ],
  },
  {
    slug: 'philippines-legal-admin-deadline-docket-check',
    title: 'A deadline docket check for Philippines legal administrative support',
    excerpt: 'Prepare date evidence, source documents, and confirmation questions without making a legal interpretation.',
    intro: 'Deadline tracking is sensitive because a date can look obvious while depending on service, filing, jurisdiction, or a lawyer\'s instruction. A Philippines legal admin specialist can maintain the record and surface conflicts, but counsel must determine the controlling deadline.',
    sections: [
      { title: 'Record the source of every date', paragraphs: ['For each matter, capture the proposed date, event, source document, document date, receipt or service evidence, responsible lawyer, reminder schedule, and current confirmation state.', 'If two records disagree, show both and alert the owner. Never overwrite the earlier entry to make the docket appear settled.'], checks: ['Is every date linked to its source?', 'Are conflicting dates visible?', 'Who confirms the deadline?'] },
      { title: 'Keep interpretation with counsel', paragraphs: ['The specialist may enter counsel-approved dates, schedule reminders, request missing documents, and prepare a discrepancy note. They should not calculate a legal deadline unless the client has supplied an approved rule and counsel remains the confirming owner.', 'Use a pending-confirmation state for uncertain dates. Calendar reminders can be placed conservatively under policy, but they must not be represented as legal conclusions.'], checks: ['Was the date approved by counsel?', 'Is uncertainty visible?', 'Does the rule cover this matter?'] },
      { title: 'Run a two-way docket review', paragraphs: ['Compare the docket against source documents, then compare the source list back to the docket. The second direction finds documents whose dates never entered the calendar.', 'Record the review period, matters checked, exceptions, reviewer, and correction evidence. Administrative completeness supports counsel; it does not establish substantive legal compliance.'], checks: ['Was the comparison run both ways?', 'Are exceptions assigned?', 'Is the review scope documented?'] },
    ],
  },
  {
    slug: 'philippines-marketing-operations-campaign-utm-register',
    title: 'A campaign UTM register for Philippines marketing operations support',
    excerpt: 'Keep campaign links consistent with controlled names, destinations, approvals, and a preflight test.',
    intro: 'UTM tags are simple until five people spell the same campaign five ways. A Philippines marketing operations specialist can maintain a controlled link register that protects reporting consistency without deciding campaign strategy.',
    sections: [
      { title: 'Use a controlled naming sheet', paragraphs: ['Record the campaign, channel, source, medium, content variant, destination, owner, and approval state. Define lowercase, spacing, abbreviations, and allowed values in the same place.', 'Check the destination before generating a link. A perfectly named tag attached to an expired, redirected, or unapproved page still creates a bad reader path.'], checks: ['Are values drawn from the approved list?', 'Is the destination current?', 'Who owns the campaign?'] },
      { title: 'Keep strategy and consent decisions upstream', paragraphs: ['The specialist can build links, check encoding, flag duplicates, and update the register. Audience selection, claims, budgets, consent rules, and public release stay with their authorized owners.', 'Do not repair inconsistent live tags by silently rewriting historical reports. Map known variants and document any reporting treatment.'], checks: ['Which choices require campaign approval?', 'Are historical variants preserved?', 'Do privacy rules affect the link?'] },
      { title: 'Test the reader path', paragraphs: ['Open the final link in a clean session, verify the expected page, inspect parameters, and confirm that the page works at a narrow viewport. Do not submit lead or booking forms during the check.', 'After launch, compare registered links with deployed placements and report unmatched values. Analytics data can show collection behavior, but it should not be treated as proof that the campaign caused an outcome.'], checks: ['Does the final URL load correctly?', 'Were forms left unsubmitted?', 'Do deployed tags match the register?'] },
    ],
  },
  {
    slug: 'philippines-project-coordinator-dependency-check-in',
    title: 'A dependency check-in for a Philippines project coordinator',
    excerpt: 'Turn vague waiting states into dated commitments, evidence, and a clear escalation choice.',
    intro: 'A project status can sit at waiting for days while each person assumes somebody else owns the next move. A Philippines project coordinator can make dependencies visible by recording the deliverable, provider, due condition, and consequence of delay.',
    sections: [
      { title: 'Describe the dependency as an exchange', paragraphs: ['Name the work item that cannot proceed, the exact input required, its provider, receiving owner, agreed format, due time, and evidence of the commitment. Avoid broad labels such as stakeholder feedback.', 'Check whether the team can continue a safe portion of the work. Partial progress should not hide the blocked decision or create an incompatible parallel version.'], checks: ['What exact input is required?', 'Who provides and accepts it?', 'What work can safely continue?'] },
      { title: 'Follow up with context', paragraphs: ['A useful check-in states the prior agreement, current observation, impact, and requested response. It should be short enough to answer without reopening the full project history.', 'The coordinator may send approved reminders, update the dependency log, and prepare options. Priority changes, scope tradeoffs, acceptance, and deadline commitments remain with project owners.'], checks: ['Can the recipient answer quickly?', 'Is the impact specific?', 'Which choice belongs to the owner?'] },
      { title: 'Escalate by rule, not frustration', paragraphs: ['Use the agreed escalation time and path. Include attempts made, current risk, safe pause condition, and the decision needed. Do not broaden the audience simply to create pressure.', 'Close the dependency when the receiving owner accepts the input, not merely when a file arrives. Record downstream dates that changed so the project plan tells the same story.'], checks: ['Was the escalation trigger met?', 'Did the receiver accept the input?', 'Were affected dates updated?'] },
    ],
  },
  {
    slug: 'philippines-content-operations-publication-proof-log',
    title: 'A publication proof log for Philippines content operations',
    excerpt: 'Record what readers actually receive after release across status, date, canonical, index, sitemap, image, and layout checks.',
    intro: 'A successful build does not prove that an article is live. Routing, caching, deployment selection, and generated metadata can still leave readers with the wrong page. A Philippines content operations specialist can close the gap with a compact publication proof log.',
    sections: [
      { title: 'Test the canonical route directly', paragraphs: ['Open the production URL and record the response, final URL, visible title and date, canonical, structured publication date, and image response. Check the article at both wide and narrow viewports.', 'Use the deployed route, not a preview or repository file, as the release evidence. If caching is suspected, add a harmless query value for the check and still confirm the canonical remains clean.'], checks: ['Does the route return 200?', 'Do visible and structured dates agree?', 'Is the canonical self-referencing?'] },
      { title: 'Prove discovery inside the site', paragraphs: ['Confirm the exact route appears in its Blog or Research index and in the production sitemap. Follow pagination links as rendered instead of assuming every article remains on the first page.', 'Index membership, sitemap membership, and route health are separate checks. A pass in one cannot stand in for another.'], checks: ['Is the route in the correct family index?', 'Was pagination followed?', 'Is the exact canonical in the sitemap?'] },
      { title: 'Preserve immutable release evidence', paragraphs: ['Record the repository, branch, full commit SHA, deployment identifier, check time, and per-route results. Note any limitation instead of rounding an incomplete check up to a pass.', 'The specialist can perform the audit and report failures. The release owner decides whether to roll forward, correct, or revert. The log closes only when the required live conditions pass on the intended production version.'], checks: ['Is the deployed SHA recorded?', 'Does each route have its own result?', 'Who owns any failed gate?'] },
    ],
  },
];

export const sep4BlogPosts = topics.map((topic) => ({
  slug: topic.slug,
  title: topic.title,
  excerpt: topic.excerpt,
  minutes: 8,
  publishedAt,
  heroImage: '/research-batch-thumbnail.jpg',
}));

export const sep4BlogBasics = Object.fromEntries(topics.map((topic) => [topic.slug, {
  intro: topic.intro,
  sections: topic.sections,
}]));
