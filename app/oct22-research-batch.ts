export const oct22ResearchPosts = [
  {
    "slug": "philippines-time-zone-overlap-observation-study",
    "title": "Observing Time Zone Overlap in Philippines Service Lanes",
    "excerpt": "A reproducible observation protocol for overlap use, response timing, handoff acceptance, and after-hours contact in one declared Philippines service lane.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "statistic": "The protocol defines six measures: net overlap minutes, live work completed inside overlap, response time inside and outside overlap, handoff acceptance on first pass, escalation wait by owner, and after-hours contact count. It reports no sample and no result.",
    "methodology": "This descriptive protocol fixes one Philippines service lane, one client time zone, and one observation window before records are selected. The unit is one lane day, built from the published roster, the client service window, the timestamped queue events, and the handoff acceptance record. Strata are workflow, weekday, risk tier, volume band, staffing level, holiday state, and daylight saving state. Exclusions and missing timestamps are retained, and an independent reviewer replays a protected sample before any interpretation.",
    "body": [
      "The question is narrow: in one declared service lane, how much of the available overlap is used for live work, and what happens at the edges of that window? The protocol does not ask whether outsourcing works in general. It asks whether a specific lane has enough shared time for the tasks that require a live counterpart, and whether work that crosses the boundary is accepted, delayed, or lost.",
      "Define the population as lane days in one Philippines service lane during a stated observation window. A lane day is the combination of the published roster, the client service window, the queue or inbox state, and the handoff record for that date. The unit keeps the schedule and the work together. A study that counts only messages or only tickets cannot tell whether the people who sent them were on shift.",
      "Fix the decision purpose before selecting records. Examples include deciding whether to move a handoff earlier, add a second overlap block, reduce a meeting load, or change an escalation owner. Write the decision, the accountable owner, the review date, and the action the evidence could support. A study without a decision tends to collect interesting numbers that no one can use.",
      "Separate preparation from authority. Philippines-based analysts may extract timestamps, classify events against a codebook, calculate the declared measures, and flag conflicts. Company owners retain decisions about schedules, service levels, employment, customer commitments, and any legal or payroll interpretation. The protocol should state this boundary so a finding about coverage is not mistaken for permission to change a contract.",
      "Build the frame from authoritative events. Use the published roster version for scheduled time, the client calendar for the service window, the queue system for arrival and response events, and the handoff record for release and acceptance. Do not substitute a manager summary for a missing system event. If a source is unavailable, record the gap and the date it was checked.",
      "Strata should reflect the conditions that plausibly change overlap use: workflow, weekday, risk tier, volume band, staffing level, holiday state, and daylight saving state. A lane day with one person covering a queue is not comparable to a day with three, even if the arrival count is similar. Keep the strata few enough that each cell can be described, and report empty or thin cells rather than merging them silently.",
      "Define the overlap itself in minutes, not in hours or in a general statement. For each lane day, record the client window start and end, the Philippines window start and end, the offset used, the break allowance, and the recurring meeting time that consumed the overlap. The net figure is the time actually available for live work and handoff. Gross overlap is useful context but should never be the headline.",
      "Timestamp rules must be written before any calculation. Record the source clock, the time zone, the extraction time, and whether the timestamp represents arrival, first view, first response, release, or acceptance. Convert all events to one reference zone and keep the original value. A response time computed from mixed clocks will produce a pattern that looks like a staffing problem and is actually a data problem.",
      "The primary measures are descriptive. Net overlap minutes show the opportunity. Live work completed inside overlap shows use. Response time inside and outside overlap shows the boundary effect. Handoff acceptance on first pass shows whether the package was usable. Escalation wait by owner shows where time sits. After-hours contact count shows work that arrived when no one was scheduled.",
      "Every measure needs a numerator, an eligible denominator, the observation window, and a missing-data count. A response time based only on answered messages excludes the messages that were never answered, which are often the most important. A handoff acceptance rate based only on accepted packages excludes the ones that were returned or abandoned. Show the excluded counts beside the rate.",
      "Measure handoff acceptance separately from message volume. The handoff record should show the sender, the receiver, the release time, the acceptance time, the evidence state, and any return reason. A package accepted after a clarification loop is not the same as one accepted on first pass. Report both, and keep the clarification count visible so a fast acceptance is not achieved by lowering the evidence standard.",
      "List the plausible alternative explanations before interpreting a pattern. Volume, case mix, new hires, system outages, holiday closures, daylight saving transitions, meeting load, and changes to the queue tool can all move the measures. A month with more after-hours contacts may reflect a client campaign, not a coverage gap. Record known events on the timeline so the reviewer can separate them from the process under study.",
      "Use a census of eligible lane days where the records are complete. If the volume is too large, use a consecutive sample and state the rule. Do not select only busy days or only days with visible problems. Add a deliberate adverse-case review that includes holiday weeks, transition weeks, outage days, and days with an absent owner, because those are the conditions the plan is supposed to survive.",
      "Protect the dataset with the minimum fields needed. Replace names with stable study keys, restrict access to named reviewers, and keep the mapping between keys and people in a separate controlled file. The dataset may expose customer, commercial, or personnel information even without message content. Set a retention date and a deletion owner before collection starts, not after the report is written.",
      "Independent replay is the main quality check. Give a second reviewer the codebook, the lane definition, and a protected sample without the first pass labels. Ask them to recompute overlap minutes, classify in-window and out-of-window events, and verify handoff acceptance. Compare differences and resolve them through the agreed definitions or the accountable owner. Do not resolve a definitional conflict by majority vote.",
      "Run sensitivity checks on the choices most likely to change the conclusion: break allowance, meeting exclusion, treatment of messages that arrive just before the window closes, handling of reopened items, and the classification of owner wait. If the conclusion changes materially, present both readings and name the operational decision that depends on the choice. A stable finding should survive reasonable variation in the boundary rules.",
      "The limitations are structural. Timestamps may reflect system behavior rather than human action. A quiet queue may mean efficient work or an intake problem. A busy overlap may mean good use of time or a backlog that should have been handled earlier. The study describes one lane in one period and does not rank individuals or predict another client. State these limits beside the findings, not in a detached appendix.",
      "The output should be a short decision pack: the lane and period, the net overlap, the measures with denominators, the adverse cases, the sensitivity results, and one bounded experiment. An experiment might move the handoff thirty minutes earlier, reserve a no-meeting block, add a named backup for one escalation, or reduce a recurring meeting. Give it an owner, a signal to watch, a time limit, and a rollback condition."
    ],
    "dataSections": [
      {
        "heading": "Population and unit",
        "text": "Lane days in one declared Philippines service lane and observation window. Unit: the roster, client window, queue events, and handoff record for one date."
      },
      {
        "heading": "Strata",
        "text": "workflow, weekday, risk tier, volume band, staffing level, holiday state, and daylight saving state"
      },
      {
        "heading": "Primary measures",
        "text": "net overlap minutes, live work inside overlap, response time inside and outside overlap, first pass handoff acceptance, escalation wait by owner, and after-hours contacts"
      },
      {
        "heading": "Authority boundary",
        "text": "Analysts prepare and describe the evidence. Schedule, service level, employment, and customer decisions remain with the accountable owner."
      },
      {
        "heading": "Principal limitation",
        "text": "Timestamps describe system events, not intent or effort. One lane and one period cannot be generalized to another team or client."
      }
    ],
    "faqs": [
      {
        "question": "Does this study measure individual performance?",
        "answer": "No. The unit is a lane day, and the output describes coverage and handoff behavior rather than ranking people."
      },
      {
        "question": "How is overlap defined?",
        "answer": "The shared minutes between the published client window and the Philippines shift, after breaks and recurring meetings, stated separately from gross overlap."
      },
      {
        "question": "What if timestamps are missing?",
        "answer": "Record the gap, keep the lane day in the eligible count, and show the missing-data count beside each measure."
      },
      {
        "question": "Who decides a schedule change?",
        "answer": "The accountable company owner after reviewing the evidence. The study can recommend a bounded experiment, not impose it."
      }
    ],
    "sources": [
      "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
      "https://www.worldbank.org/en/country/philippines/overview",
      "https://www.bir.gov.ph/",
      "https://www.nist.gov/cyberframework",
      "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
      "https://www.cisa.gov/zero-trust-maturity-model",
      "https://opentelemetry.io/docs/",
      "https://www.nist.gov/privacy-framework"
    ],
    "related": [
      "philippines-onboarding-time-to-independence-protocol",
      "philippines-payroll-exception-ownership-audit",
      "philippines-shift-handoff-acceptance-latency-study"
    ],
    "hero": "/oct22/research/philippines-time-zone-overlap-observation-study.webp",
    "thumbnail": "/oct22/research/philippines-time-zone-overlap-observation-study.webp",
    "serviceHandoff": {
      "slug": "operations-support",
      "label": "Plan Philippines operations support",
      "text": "Use this method to define one bounded work lane while accountable owners retain policy, approval, access, and customer decisions."
    }
  },
  {
    "slug": "philippines-onboarding-time-to-independence-protocol",
    "title": "Measuring Time to Independence in Philippines Onboarding",
    "excerpt": "A protocol that defines independence as accepted work without rescue, then measures the elapsed path from access to that state in one support lane.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "statistic": "The protocol defines access readiness, first accepted task, first independent week, rescue rate, rework rate, and checkpoint completion. Independence is an evidence state, not a feeling, and no sample or result is claimed.",
    "methodology": "This descriptive protocol fixes one role, one onboarding plan, and one observation window. The unit is one new team member at one checkpoint, with the plan version, access dates, reviewed work samples, rescue events, and acceptance decisions. Strata are role family, prior experience band, task risk, documentation state, reviewer, and shift pattern. Time states are separated, exclusions are retained, and a second reviewer replays the acceptance decisions.",
    "body": [
      "Onboarding is often reported as a date: the person started, the training ended, the probation passed. Those dates say little about whether the person could do the work without unplanned help. This protocol replaces the date with a state. Independence means the team member completes the defined work at the agreed quality and knows when to stop and escalate, with the normal review cadence rather than rescue.",
      "Define the population as new team members who entered one declared role and onboarding plan during the observation window. The unit is one person at one checkpoint: access ready, first observed task, first accepted task, first independent week, and plan close. A person can be in different states for different task families, so the record should identify the task family as well as the person.",
      "Write the independence definition before the first hire. It should name the task families, the quality threshold, the sample size, the review method, the acceptable escalation behavior, and the evidence that closes each checkpoint. A definition that changes after a person struggles turns a measurement into a negotiation. Version it and keep the version used for each person.",
      "Separate access readiness from skill readiness. Access is ready when the named accounts work, multi-factor authentication is enrolled, the required data is visible, and the recovery path has been tested. A person cannot demonstrate independence without access, and an access delay should not be recorded as a learning delay. Keep the two clocks separate so the cause of a slow start is visible.",
      "Define time states before calculating elapsed days. Distinguish calendar time, scheduled working time, active training time, reviewer wait, access wait, source or documentation wait, and time outside the onboarding plan. A two week delay caused by an unapproved account is not the same as two weeks of guided practice. Report elapsed calendar time and active learning time together, not as one number.",
      "The first checkpoint is the first observed task. Record the task, the sample, the reviewer, the result, and the corrections. The purpose is to establish a baseline and test whether the instructions are usable. A first task that fails because the SOP is incomplete is a documentation finding, not a person finding. Classify the cause before assigning a corrective action.",
      "The second checkpoint is the first accepted task. Acceptance means the reviewer would send the output to the destination without material rework. Record the acceptance date, the sample, the acceptance rule, and any remaining comments. Do not count a task as accepted because it was submitted or because the reviewer was tired of waiting. The acceptance state should be defensible to a second reviewer.",
      "The third checkpoint is the first independent week. Define what independent means for the role: the volume completed, the sample reviewed, the first pass acceptance rate, the rescue events, and the escalation decisions. A week with high volume but constant rescue is not independent. A week with lower volume and clean acceptance may be the stronger signal, provided the volume is within the agreed range.",
      "Measure rescue events separately from planned coaching. A rescue is an unplanned intervention needed to prevent a missed commitment, a quality failure, or a customer impact. Record the trigger, the person who intervened, the duration, and the cause. Planned coaching is scheduled and should be recorded as such. Mixing the two hides whether the team member is actually ready for the normal review cadence.",
      "Measure rework by cause: unclear instruction, missing source, tool or access problem, reviewer preference, or a genuine execution error. A rework count without causes invites a simple narrative about effort. The cause distribution points to different repairs. If most rework comes from unclear instructions, the onboarding plan needs better examples, not more practice on the same ambiguous task.",
      "Checkpoint completion should be recorded as evidence, not as a meeting outcome. Each checkpoint needs the date, the reviewer, the sample, the result, the open gaps, and the decision to advance, hold, or extend. A hold is a legitimate state. It should come with a specific gap, a repair action, and a review date, rather than a general instruction to improve.",
      "Stratify by role family, prior experience band, task risk, documentation state, reviewer, and shift pattern. These factors plausibly change the path without saying anything about the person's worth. Prior experience in a similar tool may shorten the access and first task stages. A reviewer who is unavailable may lengthen the acceptance stage. The strata help separate design effects from individual differences.",
      "Use a census of new team members where the records are complete. If the cohort is large, use consecutive entries and state the rule. Include people who left during onboarding, people who were reassigned, and people whose plan was extended. Excluding the difficult cases produces a flattering average and hides the states the plan most needs to fix.",
      "Protect the record with stable study keys and restricted access. Onboarding files can contain identity, employment, accommodation, and performance information. Keep the evidence needed for the checkpoints and remove unrelated personal detail. Set a retention date and a deletion owner. The study should not become a second, informal personnel file.",
      "Independent replay should test the acceptance decisions, not only the dates. Give a second reviewer the definition, the samples, and the checkpoint records without the first reviewer's recommendation. Ask whether the same task would be accepted, held, or returned. Differences reveal an unclear standard. Resolve them through the accountable owner and update the definition if needed.",
      "Test sensitivity to the acceptance threshold, the sample size, the treatment of extended plans, and the classification of rescue versus coaching. A finding that disappears when the sample size changes by a few tasks is not stable enough for a hiring or probation decision. Present the range and name the decision that depends on the threshold.",
      "The limitations are significant. A small cohort cannot support a general claim about a role, a provider, or a country. The reviewer's judgment affects acceptance. Documentation quality, access speed, and task mix can dominate the result. The protocol describes one onboarding design in one period. It does not predict another hire and should not be used as an individual ranking tool.",
      "The useful output is a plan repair, not a scoreboard. Identify the checkpoint where most delay or rework occurs, name the cause, and change one part of the plan: add a sample, fix an access step, assign a backup reviewer, or narrow the first task set. Give the change an owner, a success signal, a review date, and a condition for reversal. Repeat the measurement after the change."
    ],
    "dataSections": [
      {
        "heading": "Population and unit",
        "text": "New team members in one role and onboarding plan during the observation window. Unit: one person at one checkpoint, with the task family and plan version."
      },
      {
        "heading": "Checkpoints",
        "text": "access ready, first observed task, first accepted task, first independent week, and plan close"
      },
      {
        "heading": "Primary measures",
        "text": "elapsed and active days to each checkpoint, first pass acceptance, rescue rate, rework by cause, and checkpoint completion"
      },
      {
        "heading": "Authority boundary",
        "text": "The protocol describes readiness evidence. Hiring, probation, employment, and pay decisions remain with the authorized owner and qualified adviser."
      },
      {
        "heading": "Principal limitation",
        "text": "Small cohorts and reviewer judgment limit generalization. The protocol is not an individual ranking or a prediction of another hire."
      }
    ],
    "faqs": [
      {
        "question": "Is independence the same as working alone?",
        "answer": "No. It means the person completes the defined work at the agreed quality and escalates at the right point under the normal review cadence."
      },
      {
        "question": "How is a rescue counted?",
        "answer": "Any unplanned intervention needed to prevent a missed commitment or quality failure, recorded with the trigger, duration, and cause."
      },
      {
        "question": "Can this measure be used in a probation decision?",
        "answer": "It can provide evidence, but the decision belongs to the authorized owner under the applicable process and advice. The protocol does not make the decision."
      },
      {
        "question": "What if the plan changes mid cohort?",
        "answer": "Version the plan, record the effective date, and report the affected people separately rather than pooling unlike plans."
      }
    ],
    "sources": [
      "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
      "https://www.worldbank.org/en/country/philippines/overview",
      "https://www.sba.gov/business-guide/manage-your-business",
      "https://developers.google.com/tech-writing",
      "https://www.nist.gov/cyberframework",
      "https://www.nist.gov/privacy-framework",
      "https://www.archives.gov/records-mgmt/policy",
      "https://www.bir.gov.ph/"
    ],
    "related": [
      "philippines-time-zone-overlap-observation-study",
      "philippines-attrition-signal-review-method",
      "philippines-shift-handoff-acceptance-latency-study"
    ],
    "hero": "/oct22/research/philippines-onboarding-time-to-independence-protocol.webp",
    "thumbnail": "/oct22/research/philippines-onboarding-time-to-independence-protocol.webp",
    "serviceHandoff": {
      "slug": "operations-support",
      "label": "Plan Philippines operations support",
      "text": "Use this method to define one bounded work lane while accountable owners retain policy, approval, access, and customer decisions."
    }
  },
  {
    "slug": "philippines-attrition-signal-review-method",
    "title": "Reviewing Attrition Signals Without Predicting Individuals",
    "excerpt": "A method for reviewing aggregate leaving patterns and operating signals in Philippines support lanes without turning small samples into individual predictions.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "statistic": "The method defines eligible leavers, voluntary and involuntary categories, tenure bands, signal windows, and aggregate review cells. It produces no individual risk score, claims no sample, and reports no result.",
    "methodology": "This method note fixes one operating population and review period. The unit is one leaver record linked to a declared exit category, tenure band, role family, schedule, and a defined lookback window of operating signals. Cells below a minimum size are suppressed. Signal review is separated from exit interviews and from employment decisions, and an independent reviewer checks the classification and aggregation.",
    "body": [
      "Attrition analysis often drifts into prediction: which person is likely to leave, which team is next. That drift creates privacy, fairness, and practical problems. A safer method reviews aggregate patterns in the operating system. It asks whether a cluster of avoidable conditions, such as access delays, unresolved escalations, or schedule churn, appears before a group of exits, and whether those conditions can be repaired.",
      "Define the population as people who left one declared operating population during the review period, plus the comparable population that stayed. The unit is one leaver record linked to the declared exit category, tenure band, role family, schedule, and lookback window. A record without a reliable exit category stays in the population as unclassified. Dropping it would make the remaining pattern look cleaner than the data supports.",
      "Separate voluntary, involuntary, end of contract, transfer, and unresolved categories. These are different events and should not be pooled into a single attrition rate. A contract ending on schedule is not the same as a resignation, and an unresolved category is not a signal to be interpreted. Publish the counts by category with the denominator for each.",
      "Define the observation period and the lookback window before collecting records. A signal window of thirty, sixty, or ninety days is a design choice, not a finding. State which window the review uses and why. If the window changes between cycles, show both readings or label the break so a trend is not created by the measurement rule.",
      "Choose operating signals that are recorded in the normal course of work: access grant and removal dates, schedule changes, unresolved escalation age, first pass acceptance, correction clusters, skipped one to ones, and open tickets at exit. A survey question can add context, but it should not be the only signal. The strongest review uses records that exist whether or not someone is thinking about attrition.",
      "Aggregate before interpreting. A single exit with a slow access grant is an anecdote. A group of exits in one role family with repeated access delays is a pattern worth examining. Set a minimum cell size before the review and suppress smaller cells. Suppression protects privacy and reduces the chance that a manager acts on noise.",
      "Do not build an individual risk score. A score invites action against a person based on a statistical pattern that may reflect the team, the schedule, or the data. If a manager wants to act, the action should be a review of the operating condition: a delayed access queue, an unclear escalation path, a schedule that changes too often, or a review process that creates rework.",
      "Compare leavers with the eligible staying population on the same signals and the same window. A high access delay rate among leavers means little if the rate is equally high among people who stayed. The comparison is the first defense against a dramatic but uninformative finding. Report both groups and the difference, with the cell sizes.",
      "Check the timing of the signal relative to the exit. A signal that appears after the resignation is not evidence of a cause. Record the date of each signal and the date the exit was known, then classify the signal as before or after. This sounds basic, but it removes a large share of misleading narratives.",
      "Exit interviews and conversations can add context, but they are not a representative sample. Participation is uneven, memory is imperfect, and people may not disclose the real reason. Use them as qualitative material with the number of participants and the method stated. Do not convert a handful of comments into a percentage of the population.",
      "Stratify by role family, tenure band, schedule, shift, manager group, and location only where the cell size allows. A pattern that appears only after slicing into six dimensions is likely noise. Start with one or two strata that the operating plan can act on, then expand only when the counts support it. Report the strata that were not analyzed because the cells were too small.",
      "Separate the review from employment decisions. The output is a description of operating conditions and a small set of repairs. It is not a list of people to manage out or a justification for a policy change. Any decision about an individual or a formal policy belongs to the authorized owner, with advice where the law or a contract applies.",
      "Protect the dataset with stable keys, restricted access, and a retention date. Exit records can contain sensitive personal information. Keep only the fields needed for the review and store the key mapping separately. Do not circulate a spreadsheet with names to a broad management group. Aggregate tables should be the default output.",
      "Independent review should test the classification, the aggregation, and the suppression rule. Give a second reviewer the codebook and a protected extract without the first pass labels. Ask them to recompute the counts and identify any cell that should have been suppressed. Differences in exit category are especially important because they can change the denominator for every rate.",
      "Test sensitivity to the exit categories, the signal window, the minimum cell size, and the treatment of unresolved records. If a pattern disappears when unresolved records are included, it is not stable. Present the range and state what decision would change. A finding that only survives one convenient definition is not ready for action.",
      "The limitations are substantial. Attrition is multi causal, the population is small in many lanes, and the records reflect management practice as much as employee experience. A signal may be a consequence of an earlier event rather than a cause. The method describes associations in one population and period. It does not predict an individual or establish causation.",
      "The output should be a small number of operating repairs with owners and review dates. Examples include reducing access wait, clarifying an escalation path, stabilizing a schedule, or fixing a recurring rework cause. Measure the repair with the same signal and window used in the review. If the signal does not move, do not assume the repair failed until the implementation and the data quality are checked.",
      "A useful review also records what was not measured. If a signal was unavailable, or a cell was too small to report, say so in the method note. The absence of a finding is not evidence that the condition does not exist. It may mean the records are too thin to support a conclusion, which is itself a reason to improve the data before acting."
    ],
    "dataSections": [
      {
        "heading": "Population and unit",
        "text": "People who left one operating population during the review period, plus the comparable staying population. Unit: one leaver record with exit category, tenure band, and lookback window."
      },
      {
        "heading": "Exit categories",
        "text": "voluntary, involuntary, end of contract, transfer, and unresolved, reported separately"
      },
      {
        "heading": "Signals",
        "text": "access dates, schedule changes, escalation age, first pass acceptance, correction clusters, one to one attendance, and open items at exit"
      },
      {
        "heading": "Privacy rule",
        "text": "minimum cell size set before review, small cells suppressed, stable keys used, and individual risk scores prohibited"
      },
      {
        "heading": "Principal limitation",
        "text": "Small populations, uneven exit interviews, and management practice limit inference. The method describes associations, not causes or individual predictions."
      }
    ],
    "faqs": [
      {
        "question": "Does this method identify people likely to leave?",
        "answer": "No. It reviews aggregate operating signals and explicitly prohibits individual risk scores."
      },
      {
        "question": "Why suppress small cells?",
        "answer": "To protect privacy and avoid acting on patterns that a handful of records can create by chance."
      },
      {
        "question": "Can exit interview comments be turned into percentages?",
        "answer": "Only with the participant count and method stated. They are qualitative material, not a representative sample."
      },
      {
        "question": "Who acts on the findings?",
        "answer": "The owner of the operating condition, with employment and policy decisions kept with the authorized owner and adviser."
      }
    ],
    "sources": [
      "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
      "https://www.worldbank.org/en/country/philippines/overview",
      "https://www.nist.gov/privacy-framework",
      "https://www.eeoc.gov/employers/recordkeeping-requirements",
      "https://www.archives.gov/records-mgmt/policy",
      "https://www.nist.gov/cyberframework",
      "https://www.sba.gov/business-guide/manage-your-business",
      "https://www.bir.gov.ph/"
    ],
    "related": [
      "philippines-onboarding-time-to-independence-protocol",
      "philippines-time-zone-overlap-observation-study",
      "philippines-access-revocation-evidence-completeness-study"
    ],
    "hero": "/oct22/research/philippines-attrition-signal-review-method.webp",
    "thumbnail": "/oct22/research/philippines-attrition-signal-review-method.webp",
    "serviceHandoff": {
      "slug": "operations-support",
      "label": "Plan Philippines operations support",
      "text": "Use this method to define one bounded work lane while accountable owners retain policy, approval, access, and customer decisions."
    }
  },
  {
    "slug": "philippines-payroll-exception-ownership-audit",
    "title": "Auditing Payroll Exception Ownership in Philippines Operations",
    "excerpt": "An audit method for checking that every payroll exception has an owner, a reason, an age, an approval path, and a resolution record.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "statistic": "The audit defines exception completeness, owner assignment, age, approval evidence, resolution evidence, and recurrence. It does not interpret payroll law, assert statutory amounts, or claim a measured result.",
    "methodology": "This audit protocol fixes one payroll cycle set and one exception population. The unit is one exception record with a source, reason code, affected employee key, owner, age, approval, resolution, and recurrence flag. Strata are input type, cycle, owner role, reason, severity, and resolution path. The audit is performed against a frozen file version, with a protected sample replayed by a second reviewer.",
    "body": [
      "Payroll exceptions are the work that does not fit the standard run: a late timesheet, a missing approval, a bank detail change, a conflicting status, a holiday code that does not match the calendar. The question for an audit is not whether the exception was difficult. It is whether the record shows who owned it, what rule applied, when it was resolved, and who approved the effect.",
      "Define the exception population from the cycle records, not from memory. Start with the exception log, then reconcile it to the payroll register, the input freeze record, and the correction record. An exception that appears in one source but not another is itself a finding. Record the source of the population and the date it was extracted.",
      "The unit is one exception record linked to one employee key, one input type, one cycle, one reason code, and one owner. If an exception affects several employees, keep one record per employee so the counts are meaningful. If the same employee has several exceptions, keep them separate unless the reason and resolution are truly identical.",
      "Define completeness before scoring anything. A complete exception record contains the source, the date observed, the affected employee key, the input type, the reason code, the current state, the owner, the next action, the approval requirement, the resolution, and the closure date. A field that is not applicable should say so explicitly rather than being blank.",
      "Owner assignment is the central control. Each exception needs one accountable owner at every stage: the person who resolves the data question, the person who approves the payroll effect, and the person who confirms closure. These can be different roles, but each stage should name one person rather than a team or a chat channel.",
      "Age should be measured from the time the exception was observed to the time it was resolved or closed, with the state history preserved. Separate active handling, owner wait, system wait, and time outside the cycle. An exception that waited for an approver for three days is a different problem from one that took three days of active work. Report both the total age and the wait components.",
      "Approval evidence should show what the approver saw, not only that a name is attached. Record the frozen file version, the exception summary, the proposed treatment, the supporting source, and the approval time. If the approver relied on a conversation, the record should link to a note that captures the decision. A signature over an unexplained change is weak evidence.",
      "Resolution evidence should show the corrected value or the decision to hold, the system reference, the person who made the change, and the confirmation that the change reached the payroll register. A ticket marked resolved is not the same as a corrected payroll record. Check the destination state for a sample of resolved exceptions.",
      "Recurrence is a separate measure. Flag an exception that has the same employee, input type, and reason code in a later cycle. Recurrence suggests the underlying cause was not repaired, even if each individual ticket was closed. Report recurrence by reason and owner, with the number of eligible exceptions as the denominator.",
      "Stratify by input type, cycle, owner role, reason, severity, and resolution path. Do not slice so finely that each cell has one record. Start with the categories the payroll owner can act on, such as late inputs, missing approvals, and post-freeze corrections. Report the cells that were too small to analyze rather than merging them invisibly.",
      "Use a census of the exception population where the records are complete. If the volume is large, use a consecutive sample and state the rule. Include a deliberate sample of exceptions that were closed quickly, because a fast closure can reflect a real fix or a bypassed control. The audit should test both the slow and the fast paths.",
      "The audit must not interpret payroll law or assert amounts. Questions about entitlement, premium treatment, deductions, or final pay go to the payroll owner and, where needed, qualified Philippine counsel. The audit records the question, the source facts, the answer, and the records affected. It does not create a parallel rule set.",
      "Protect the audit data with stable employee keys, restricted access, and a retention date. The exception log may contain pay, identity, and bank information. Keep the minimum fields needed for the audit and store the key mapping separately. Reports should use aggregate counts unless a named reviewer needs the record level detail.",
      "Independent replay should test owner assignment, approval evidence, and resolution evidence. Give a second reviewer a protected sample without the first pass conclusions. Ask them to trace one exception from source to payroll register and to identify the stage where ownership is unclear. Differences are usually definitional and should be resolved before the report is issued.",
      "Test sensitivity to the age definition, the treatment of owner wait, the inclusion of unresolved exceptions, and the recurrence window. A finding that depends on excluding unresolved records is not stable. Show the result with and without the excluded records and name the decision that would change.",
      "The limitations are structural. The exception log may be incomplete, owners may change during a cycle, and a resolved ticket may not prove the payroll record changed. The audit describes one cycle set in one operating population. It does not certify compliance, evaluate an individual's performance, or replace the payroll owner's judgment.",
      "The output should be a control repair list: fields to add, owners to name, approvals to require, and one recurring cause to fix. Give each repair an owner, a due date, and a retest cycle. A useful audit ends with a smaller number of exceptions next cycle, not a longer report about this one.",
      "Keep a distinction between the exception record and the payroll register. The record explains the decision; the register shows the effect. An audit that checks only one of them can miss a change that was approved but never applied, or an applied change with no supporting decision. Compare both for every sampled item. A repair list should also be small enough to finish before the next cycle. If the audit produces twenty actions, the team will likely complete none of them. Choose the two or three that remove the most recurring cause or the most serious approval gap, name an owner, and set a retest date."
    ],
    "dataSections": [
      {
        "heading": "Population and unit",
        "text": "Exception records from a declared set of payroll cycles. Unit: one exception linked to one employee key, input type, reason code, and owner."
      },
      {
        "heading": "Strata",
        "text": "input type, cycle, owner role, reason, severity, and resolution path"
      },
      {
        "heading": "Primary measures",
        "text": "record completeness, owner assignment, total age, owner wait, approval evidence, resolution evidence, and recurrence"
      },
      {
        "heading": "Authority boundary",
        "text": "The audit checks records and ownership. Payroll treatment, legal interpretation, and payment approval remain with the payroll owner and qualified counsel."
      },
      {
        "heading": "Principal limitation",
        "text": "The log may be incomplete and a closed ticket may not prove the register changed. The audit is not a compliance certification."
      }
    ],
    "faqs": [
      {
        "question": "Does this audit check whether pay was correct?",
        "answer": "It checks whether the exception record and its approval can be traced to the register. It does not recalculate pay or interpret the rules."
      },
      {
        "question": "What counts as an owner?",
        "answer": "One named person accountable for the stage, not a team, mailbox, or chat channel."
      },
      {
        "question": "Why measure recurrence?",
        "answer": "A closed ticket can hide a cause that returns. Recurrence shows whether the repair changed the underlying condition."
      },
      {
        "question": "Who receives the record level detail?",
        "answer": "Named reviewers with a business purpose and restricted access. Aggregate counts are the default for wider reporting."
      }
    ],
    "sources": [
      "https://www.bir.gov.ph/",
      "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
      "https://www.nist.gov/privacy-framework",
      "https://www.archives.gov/records-mgmt/policy",
      "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
      "https://www.sba.gov/business-guide/manage-your-business",
      "https://www.eeoc.gov/employers/recordkeeping-requirements",
      "https://www.worldbank.org/en/country/philippines/overview"
    ],
    "related": [
      "philippines-holiday-calendar-version-control-study",
      "philippines-time-zone-overlap-observation-study",
      "philippines-shift-handoff-acceptance-latency-study"
    ],
    "hero": "/oct22/research/philippines-payroll-exception-ownership-audit.webp",
    "thumbnail": "/oct22/research/philippines-payroll-exception-ownership-audit.webp",
    "serviceHandoff": {
      "slug": "operations-support",
      "label": "Plan Philippines operations support",
      "text": "Use this method to define one bounded work lane while accountable owners retain policy, approval, access, and customer decisions."
    }
  },
  {
    "slug": "philippines-holiday-calendar-version-control-study",
    "title": "Version Control for Philippines Holiday Calendars",
    "excerpt": "A method for tracing holiday calendar changes from publication to payroll and time systems, with acknowledgements, effective dates, and rollback evidence.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "statistic": "The method defines version identity, change completeness, propagation, acknowledgement, effective-date alignment, and rollback readiness. It makes no claim about the legal status of any date and reports no measured result.",
    "methodology": "This method note fixes one holiday calendar source and one set of dependent systems. The unit is one calendar change event linked to a version, an effective date, an affected workflow, a propagation check, and an acknowledgement. Strata are holiday type, lead time, system, site, and owner. The review compares the approved source with the copies actually used, and a second reviewer replays the propagation checks.",
    "body": [
      "A holiday calendar is a controlled document with copies in many places: payroll, time and attendance, scheduling, client communication, and local site notices. The risk is not only that the calendar is wrong. It is that different copies disagree and no one can show which version was used for a given date. Version control turns that risk into a traceable chain.",
      "Define the authoritative source and the owner who releases a version. The source might be a government publication, a client calendar, or an internal compilation, but it must be named. A calendar that exists only as a forwarded file has no owner and no reliable version. Record the publication date, the effective period, and the person who approved the release.",
      "The unit is one change event: a date added, removed, relabeled, or moved, plus the version that introduced it. Keep the event separate from the whole calendar file. A large file comparison hides which date changed and when. The event record should show the old state, the new state, the reason, the source, and the effective date.",
      "Version identity needs more than a file name. Use an id, a publication date, a content hash, and a changelog. The hash proves that two copies are identical; the changelog explains what changed. A file named final_v3 does not tell a reviewer whether it is the version that payroll used in March.",
      "Change completeness means the record answers who, what, when, why, and where. Who requested the change, what date or label changed, when it takes effect, why the source supports it, and where the dependent systems need updating. A change without a source is a rumor, even when the date turns out to be correct.",
      "Map every dependent system that holds a copy: payroll codes, time and attendance rules, scheduling templates, client notices, and local site boards. For each, name the owner, the update method, the expected completion time, and the verification step. A calendar change that reaches payroll but not the time system creates a mismatch that can take a full cycle to find.",
      "Propagation checks should compare the approved source with the copy actually in use. Record the system, the version or effective date, the check time, the checker, and the result. Do not accept a screenshot of a settings page as proof that the rule applied to the relevant pay period. Check the effective date in the system, not only the label on the screen.",
      "Acknowledgement is the human link. Each owner confirms that they received the change, updated their system, and checked the affected records. Record the name, the time, and the evidence. An acknowledgement that says noted is weak. A useful acknowledgement names the version, the system, and the verification performed.",
      "Effective-date alignment is a common failure. A change published after the effective date may apply retroactively or prospectively depending on the rule and the system. Record the publication date, the effective date, the date the system accepted the change, and the first affected cycle. Where the dates differ, flag the records that may need correction.",
      "Lead time matters. A change published one day before the date gives payroll little room to verify. Record the lead time for each event and group the results. A pattern of short lead times is an operating risk even if every individual change was technically correct. The repair may be a subscription, a reminder, or a different source owner.",
      "Rollback readiness should be tested before it is needed. If a version is found to be wrong, the team needs the prior version, the list of systems that received it, and a procedure to restore the previous state or apply a correction. Record the rollback test date, the systems covered, and the result.",
      "The review should include dates with no change as a control. Pick a sample of ordinary holiday dates and confirm that all systems agree. A process that only checks changes can still drift through silent edits or missed initial setup. The quiet sample tests the base state, not just the change path.",
      "Protect the records with stable keys and restricted access. The calendar itself is usually public, but the change log may contain client names, site details, and employee impact. Keep the distribution list and the acknowledgements in a controlled location with a retention date. Do not solve a version problem by emailing the file to everyone again.",
      "Independent replay should trace one change from source to each dependent system. Give a second reviewer the changelog and the system list without the first pass result. Ask them to find the version in use on a stated date and to identify any system that does not match. The exercise often reveals a copy that no one listed.",
      "Test sensitivity to the effective-date rule, the treatment of retroactive changes, and the inclusion of client calendars that differ from the national calendar. A finding that depends on one interpretation of retroactivity is not stable. Present the alternatives and name the decision owner. The method describes version control, not the legal effect of a date.",
      "The limitations are clear. The authoritative source may change without notice, systems may cache rules, and acknowledgements may be recorded without a real check. The method covers one calendar source and one set of systems in one period. It does not certify payroll accuracy or legal compliance, and it does not decide whether a date should be treated as a holiday.",
      "The output should be a version-control repair: a single source of truth, a change log, a system map, acknowledgement evidence, and a rollback test. Assign one owner for the calendar and one for each dependent system. Review after the next change event and after the next holiday cycle. The test of the repair is whether a reviewer can answer which version applied on a given date without asking around.",
      "Keep the system map current when a tool changes. A migration can create a new copy of the calendar that no one adds to the distribution list. Review the map after any payroll, time, or scheduling system change, and test one known date in the new system before the next holiday cycle."
    ],
    "dataSections": [
      {
        "heading": "Population and unit",
        "text": "Calendar change events from one approved source and one set of dependent systems. Unit: one change event with a version, effective date, propagation check, and acknowledgement."
      },
      {
        "heading": "Strata",
        "text": "holiday type, lead time, dependent system, site, and owner"
      },
      {
        "heading": "Primary measures",
        "text": "version identity, change completeness, propagation match, acknowledgement evidence, effective-date alignment, and rollback readiness"
      },
      {
        "heading": "Authority boundary",
        "text": "The method checks version control and propagation. Holiday treatment, pay rules, and legal interpretation remain with the payroll owner and qualified counsel."
      },
      {
        "heading": "Principal limitation",
        "text": "Sources can change without notice and systems can cache rules. One calendar and one period cannot certify payroll accuracy or compliance."
      }
    ],
    "faqs": [
      {
        "question": "Does this study determine which dates are holidays?",
        "answer": "No. It traces how an approved calendar version reaches dependent systems. The source and the legal treatment belong to the authorized owner."
      },
      {
        "question": "Why keep old versions?",
        "answer": "To show what applied on a past date and to support a correction or rollback if a version is found to be wrong."
      },
      {
        "question": "What is a propagation check?",
        "answer": "A comparison of the approved source with the copy actually in use in each system, including the effective date."
      },
      {
        "question": "Who owns the calendar?",
        "answer": "One named owner for the source and one named owner for each dependent system, with acknowledgements recorded."
      }
    ],
    "sources": [
      "https://www.bir.gov.ph/",
      "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
      "https://www.archives.gov/records-mgmt/policy",
      "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
      "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews",
      "https://slsa.dev/spec/v1.0/",
      "https://www.nist.gov/privacy-framework",
      "https://www.worldbank.org/en/country/philippines/overview"
    ],
    "related": [
      "philippines-payroll-exception-ownership-audit",
      "philippines-time-zone-overlap-observation-study",
      "philippines-source-record-correction-recurrence-study"
    ],
    "hero": "/oct22/research/philippines-holiday-calendar-version-control-study.webp",
    "thumbnail": "/oct22/research/philippines-holiday-calendar-version-control-study.webp",
    "serviceHandoff": {
      "slug": "operations-support",
      "label": "Plan Philippines operations support",
      "text": "Use this method to define one bounded work lane while accountable owners retain policy, approval, access, and customer decisions."
    }
  }
] as const;
