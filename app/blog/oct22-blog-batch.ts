export const oct22BlogPosts = [
  {
    "slug": "philippines-hiring-scorecard-evidence",
    "title": "Build a Hiring Scorecard That Holds Up to Review",
    "excerpt": "A scorecard is useful when every rating points to observed evidence, a named reviewer, and a decision rule fixed before interviews begin.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-hiring-scorecard-evidence.png"
  },
  {
    "slug": "philippines-timezone-overlap-planning",
    "title": "Plan Philippines Time Zone Overlap Without Guesswork",
    "excerpt": "A coverage plan works when overlap minutes, live tasks, handoff windows, and fallback owners are written before the schedule is published.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-timezone-overlap-planning.png"
  },
  {
    "slug": "philippines-payroll-cutoff-calendar",
    "title": "Run a Payroll Cutoff Calendar With Named Owners",
    "excerpt": "A cutoff calendar is a control, not a reminder: each input has a gate, an owner, an evidence field, and a documented exception path.",
    "minutes": 9,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-payroll-cutoff-calendar.png"
  },
  {
    "slug": "philippines-thirteenth-month-input-checklist",
    "title": "Prepare a Thirteenth Month Input Checklist for Payroll Review",
    "excerpt": "The support lane can assemble dates, coverage months, and exception evidence while payroll owners and Philippine counsel decide treatment.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-thirteenth-month-input-checklist.png"
  },
  {
    "slug": "philippines-holiday-premium-verification",
    "title": "Verify Holiday Premium Inputs Without Recalculating the Law",
    "excerpt": "Verification means matching the approved calendar, the worked time, and the payroll code, then routing every mismatch to the payroll owner.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-holiday-premium-verification.png"
  },
  {
    "slug": "philippines-home-office-internet-resilience",
    "title": "Test Home Office Internet Resilience Before It Fails",
    "excerpt": "Resilience is a tested fallback with an owner, not a promise of good internet. Record the primary path, the backup, and the moment work must pause.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-home-office-internet-resilience.png"
  },
  {
    "slug": "philippines-background-check-consent-log",
    "title": "Keep a Background Check Consent Log That Can Survive an Audit",
    "excerpt": "A consent log records what was disclosed, which version was accepted, when, through which channel, and who can rely on it.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-background-check-consent-log.png"
  },
  {
    "slug": "philippines-offboarding-final-pay-checklist",
    "title": "Coordinate Offboarding and Final Pay Inputs With One Checklist",
    "excerpt": "Offboarding support gathers dates, hours, assets, and clearances; payroll owners and Philippine counsel decide the final amount and its treatment.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-offboarding-final-pay-checklist.png"
  },
  {
    "slug": "philippines-team-lead-span-of-control",
    "title": "Set a Team Lead Span of Control You Can Defend",
    "excerpt": "Span is a design choice, not a target ratio: the right number depends on review load, queue complexity, escalation volume, and the lead's own work.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-team-lead-span-of-control.png"
  },
  {
    "slug": "philippines-shift-differential-review",
    "title": "Review Shift Differential Inputs as a Controlled Process",
    "excerpt": "The review lane verifies schedule version, actual time, and approved code; it does not interpret the labor code or recalculate statutory amounts.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-shift-differential-review.png"
  },
  {
    "slug": "philippines-performance-review-evidence",
    "title": "Collect Performance Review Evidence Without Surprises",
    "excerpt": "A review file is credible when examples are dated, tied to agreed expectations, shown to the employee, and separated from ratings the manager owns.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-performance-review-evidence.png"
  },
  {
    "slug": "philippines-replacement-handoff-plan",
    "title": "Write a Replacement Handoff Plan Before the Seat Empties",
    "excerpt": "A replacement plan protects access, open work, and relationships when a seat changes hands, whether the change is planned or sudden.",
    "minutes": 8,
    "publishedAt": "2026-10-22",
    "heroImage": "/oct22/blog/philippines-replacement-handoff-plan.png"
  }
] as const;

export const oct22BlogBasics = {
  "philippines-hiring-scorecard-evidence": {
    "intro": "A hiring scorecard is not a form that makes a decision look objective. It is a record that shows what a candidate demonstrated, which reviewer observed it, and how the panel applied a rule agreed before the first interview. The design work happens before sourcing, not after a disagreement. The record should be short enough to use in a live panel and complete enough to defend months later.",
    "takeaways": [
      "Fix the decision, the evidence types, and the accepting owner before sourcing starts.",
      "Write anchors at the level of observed behavior so two reviewers can rate alike.",
      "Submit scores before the debrief and preserve dissent in the decision file.",
      "Version the scorecard and inspect reviewer patterns with denominators."
    ],
    "questionRows": [
      {
        "question": "Which evidence supports this rating?",
        "usefulAnswer": "A note that names the question, the candidate response, the artifact reviewed, and the anchor level applied.",
        "warning": "The panel agrees the candidate seemed strong."
      },
      {
        "question": "Who observed this dimension?",
        "usefulAnswer": "A named reviewer at a named stage, with the evidence type and the time limit recorded.",
        "warning": "Everyone met the candidate, so anyone can score it later."
      },
      {
        "question": "What changed for this candidate?",
        "usefulAnswer": "A documented accommodation or verified gap, the approver, and the effect on comparability.",
        "warning": "We shortened the exercise because the schedule was tight."
      },
      {
        "question": "What happens to the notes?",
        "usefulAnswer": "Restricted access, a retention date, and a named deletion owner.",
        "warning": "They stay in the shared drive in case we need them later."
      }
    ],
    "sections": [
      {
        "title": "Name the decision and the evidence owner",
        "paragraphs": [
          "Start with the decision the scorecard supports: advance, hold, or stop for one requisition. Write the requisition identifier, role family, work location, schedule, and accountable hiring owner on the header. The panel may recommend, but one named owner accepts the outcome and records the reason for it.",
          "Assign each scored dimension to a reviewer who will actually observe it. A dimension with no observer becomes a guess. Record the reviewer, the interview stage, and the evidence type expected, such as a work sample, a structured answer, or a verified reference. Remove unassigned dimensions rather than filling them in after the debrief.",
          "Record the requisition in the applicant tracking system before the first interview and link the scorecard to that record. A scorecard kept outside the system of record is easy to lose, hard to compare across cycles, and difficult to produce when a candidate asks for the basis of a decision."
        ],
        "checks": [
          "Does every dimension have an observer?",
          "Is the accepting owner named on the header?"
        ]
      },
      {
        "title": "Write anchors before candidates arrive",
        "paragraphs": [
          "An anchor describes observable behavior at a defined level. Instead of asking for strong communication, write that the candidate explains a disputed figure in plain language, states the assumption, and answers one follow-up without contradicting the source. Anchors should be specific enough that two reviewers can rate the same answer similarly.",
          "Keep the number of levels small and label every one. A four level scale with written anchors is easier to audit than a ten point scale with undefined middle values. Put the anchor text beside the rating field so a reviewer cannot rate from memory after the interview has ended and the notes have gone cold."
        ],
        "checks": [
          "Can two reviewers rate one answer alike?",
          "Are anchors visible during scoring?"
        ]
      },
      {
        "title": "Separate observation from inference",
        "paragraphs": [
          "The evidence field should contain what happened, not a personality summary. Record the question asked, the response in note form, the artifact reviewed, and the time limit. If a reviewer wants to add an inference, it goes in a separate note marked as inference with a short reason and the evidence it draws from.",
          "This separation matters when a candidate questions a result or a manager asks why a strong work sample did not overcome a weak structured answer. The record shows the tradeoff. It also stops a single memorable comment from becoming the whole case after the details fade."
        ],
        "checks": [
          "Is each note tied to a question or artifact?",
          "Are inferences labeled and explained?"
        ]
      },
      {
        "title": "Run the same evidence plan for every candidate",
        "paragraphs": [
          "Use the same core questions, work sample, time allowance, and scoring anchors for candidates in the same requisition. Adapt only for a documented accommodation or a verified skill gap that changes the exercise, and record the change with its approver and its effect on the comparison.",
          "When the plan changes mid-pipeline, reset the comparison. A candidate interviewed with a shorter exercise is not directly comparable to one who completed the full sample. Either re-test or state the limitation in the decision note so a later reviewer does not treat unlike evidence as equivalent."
        ],
        "checks": [
          "Is the evidence plan identical across candidates?",
          "Are exceptions documented with an approver?"
        ]
      },
      {
        "title": "Keep the debrief independent first",
        "paragraphs": [
          "Ask reviewers to submit scores and notes before the debrief conversation. This reduces anchoring on the loudest voice in the room. In the meeting, read the evidence for each dimension, then discuss disagreements at the anchor level rather than at the level of general impression or seniority.",
          "Record dissent instead of smoothing it away. If two reviewers saw different behavior, both notes stay in the file with the resolution and the person who resolved it. A unanimous score produced by pressure is weaker evidence than a documented split with a clear decision rule applied by the owner."
        ],
        "checks": [
          "Were scores submitted before discussion?",
          "Is dissent preserved in the file?"
        ]
      },
      {
        "title": "Handle sensitive data narrowly",
        "paragraphs": [
          "Collect only what the decision requires. Identity documents, medical information, family details, and background check results belong in restricted files with named access, not in interview notes. Use a candidate identifier in the scorecard where the name is not needed for the review or the debrief.",
          "Set a retention date and an owner for deletion at the start. A scorecard that lives forever in a shared drive creates privacy and legal exposure. Route questions about accommodation, eligibility, or adverse action to the qualified adviser rather than deciding them inside the panel."
        ],
        "checks": [
          "Is sensitive data outside the scorecard?",
          "Are access and retention named?"
        ]
      },
      {
        "title": "Audit consistency across the pipeline",
        "paragraphs": [
          "After five or ten decisions, compare score distributions by reviewer, dimension, and stage. Look for a reviewer who never uses the middle of the scale, a dimension that never discriminates, or a stage where scores cluster regardless of evidence. Investigate the cause before changing the form or coaching the panel.",
          "Also check the stop reasons. A pipeline with no holds may mean the bar is low or the evidence is too easy. A pipeline with many holds may mean the anchors are unclear. Report counts with denominators and the review window so a pattern is not mistaken for a trend in candidate quality.",
          "Keep the comparison at the level of the role and the process. A reviewer pattern is a reason to inspect anchors, training, or the evidence plan, not a reason to label the reviewer. Share the finding with the panel and record the change that follows. If no change follows, record why the pattern is acceptable."
        ],
        "checks": [
          "Are reviewer patterns visible?",
          "Do stop reasons carry denominators?"
        ]
      },
      {
        "title": "Revise the scorecard on evidence",
        "paragraphs": [
          "Retire a dimension when it cannot be observed, cannot be scored consistently, or does not relate to the work. Add a dimension only after the team can describe the behavior and name the evidence source. Version the scorecard and date the change so older decisions remain interpretable by a new reviewer.",
          "Keep a short change log with the reason, owner, and effective requisition. The goal is not a perfect form. It is a decision record that a different reviewer can reconstruct without asking the original panel what they meant by a particular score."
        ],
        "checks": [
          "Is the scorecard versioned?",
          "Can a new reviewer reconstruct a decision?"
        ]
      }
    ],
    "checklist": [
      "Requisition id, role family, schedule, and accepting owner on the header",
      "One observer and one evidence type per dimension",
      "Anchors written before the first interview",
      "Scores submitted before the debrief",
      "Sensitive data kept out of panel notes",
      "Retention date and deletion owner recorded"
    ],
    "callScript": [
      "Confirm the requisition owner, the scored dimensions, and the evidence type for each dimension.",
      "Share the anchor text and the rating scale before the first interview.",
      "State how scores and notes will be submitted before the debrief.",
      "Name the person who can approve an accommodation or a change to the exercise.",
      "Confirm where candidate records are stored, who can open them, and when they are deleted."
    ],
    "faqs": [
      {
        "question": "How many dimensions should a scorecard have?",
        "answer": "Only as many as the panel can observe and discuss with evidence. A short set with clear anchors is easier to audit than a long list of vague traits."
      },
      {
        "question": "Should we score after each interview or at the end?",
        "answer": "Score while the evidence is fresh, then submit before the debrief. Delayed scoring drifts toward an overall impression."
      },
      {
        "question": "Can we change questions for one candidate?",
        "answer": "Only for a documented accommodation or a verified gap, with the approver and the effect on comparability recorded in the file."
      },
      {
        "question": "Does a scorecard remove bias?",
        "answer": "No. It makes evidence and disagreement visible so the owner can review them. It does not replace interviewer training or advice from qualified counsel."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "EEOC Recordkeeping Requirements",
        "url": "https://www.eeoc.gov/employers/recordkeeping-requirements",
        "note": "Employment record retention concepts used as a comparison, not as Philippine law."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk framing for collecting, using, retaining, and deleting worker records."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "World Bank: Philippines overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview",
        "note": "Country context for Philippine labour market and development conditions."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Small business guidance for hiring, payroll, and operations management."
      }
    ]
  },
  "philippines-timezone-overlap-planning": {
    "intro": "Time zone overlap is often discussed as a feeling: the team is online when we need them. A plan replaces that feeling with a table of lanes, windows, minutes, and owners. It also names the work that must happen live and the work that can wait for the next overlap window.",
    "takeaways": [
      "Map each lane against Philippines time and the client time zone before agreeing to coverage.",
      "Separate synchronous work from elapsed work so a long queue does not look like a live commitment.",
      "Reserve part of the overlap for handoff and escalation, not only for meetings.",
      "Review missed handoffs and after-hours messages with a denominator every month."
    ],
    "questionRows": [
      {
        "question": "Which tasks truly need live coverage?",
        "usefulAnswer": "A named list with the customer or system consequence of a delay and the maximum acceptable wait.",
        "warning": "Everything is urgent when the client is awake."
      },
      {
        "question": "What is the overlap in minutes?",
        "usefulAnswer": "A lane level table showing the client window, the Philippines window, and the shared minutes after breaks.",
        "warning": "We have a few hours together, so it should be fine."
      },
      {
        "question": "Who owns the handoff?",
        "usefulAnswer": "A sender and a receiver for each shift pair, with a required package and an acceptance time.",
        "warning": "Whoever is online can pick it up."
      },
      {
        "question": "What happens outside overlap?",
        "usefulAnswer": "A documented fallback, a safe holding state, and an escalation owner with a response window.",
        "warning": "Someone will probably check messages."
      }
    ],
    "sections": [
      {
        "title": "Map the actual work clock",
        "paragraphs": [
          "List the client time zone, the Philippines time zone, and every lane that depends on the other side. For each lane, write the service window, the systems used, and the timestamp source. Philippines time does not shift for daylight saving, but several client markets do, so the plan needs a dated rule for the weeks when the offset changes.",
          "Do not build the table from memory. Pull the current published windows from the client calendar and the current shift roster, then compare them. Record the version and the person who confirmed each window. A stale calendar is a common cause of a coverage plan that looks correct in a slide and fails in the first week."
        ],
        "checks": [
          "Are both time zones and the offset rule stated?",
          "Is the source and version of each window recorded?"
        ]
      },
      {
        "title": "Separate live work from elapsed work",
        "paragraphs": [
          "Live work needs a person present at a specific moment: a call, a queue with a short response target, or a system action that blocks another team. Elapsed work can be prepared, checked, and completed inside the shift without a live counterpart. Put each task in one category before calculating coverage.",
          "This distinction stops a common planning error. A queue that is monitored during overlap but worked after the client signs off is not a live service for the whole window. Write the response target and the actual handling window separately so the client knows what to expect when they send a message at the edge of the overlap."
        ],
        "checks": [
          "Is each task marked live or elapsed?",
          "Are response targets separate from handling windows?"
        ]
      },
      {
        "title": "Calculate overlap per lane",
        "paragraphs": [
          "Build a row for each lane with the client window, the Philippines window, the gross overlap, the break allowance, and the net minutes available for live work. Add the minutes already committed to recurring meetings and the minutes reserved for handoff. The remainder is the real live capacity for the lane.",
          "Show the arithmetic to the person who approves the schedule. When the net minutes are lower than the live demand, the answer is to reduce scope, move work to an elapsed lane, or add a second overlap window. Approving the plan while hiding the shortfall only moves the failure to the queue."
        ],
        "checks": [
          "Does each row show gross and net minutes?",
          "Is meeting and handoff time deducted?"
        ]
      },
      {
        "title": "Protect the handoff window",
        "paragraphs": [
          "Reserve the first and last part of the overlap for handoff, not for another status meeting. The outgoing owner records open items, the next action, the evidence link, the blocker, and the person who must act. The incoming owner accepts the package or returns it with a specific missing field.",
          "A handoff that is only a chat message is hard to audit. Use one template and one destination so the next shift can find the state without reconstructing a private conversation. Measure acceptance time and returns, not the number of messages sent, because message volume says little about whether the receiver could act."
        ],
        "checks": [
          "Is handoff time reserved in the schedule?",
          "Does the receiver accept or return the package?"
        ]
      },
      {
        "title": "Price the meeting load",
        "paragraphs": [
          "List every recurring meeting that requires the Philippines team, with its duration, cadence, owner, and purpose. Multiply the duration by the cadence to get a monthly load per attendee. Compare that load with the live capacity from the lane table. A schedule can be technically covered and still leave no time for the work.",
          "Consolidate meetings where possible and replace status updates with a written artifact. Protect at least one uninterrupted block inside the overlap for queue work. The meeting budget should be approved by the same owner who approves the service window, because both consume the same finite hours."
        ],
        "checks": [
          "Is meeting load calculated per attendee?",
          "Is there an uninterrupted work block?"
        ]
      },
      {
        "title": "Design the escalation ladder",
        "paragraphs": [
          "Write what happens when a problem appears inside overlap, at the edge of overlap, and outside it. Each step needs a trigger, a contact, a response window, and the state the work waits in. The ladder should make it easy to stop rather than encouraging an unauthorized workaround.",
          "Outside overlap, name a fallback owner and the conditions that justify a contact. If no one is available, the work stays in a safe holding state with a timestamp and a reason. An after-hours message that gets no response is not a control, and an informal promise to check email is not a service level."
        ],
        "checks": [
          "Does each escalation step have a trigger and owner?",
          "Is a safe holding state defined?"
        ]
      },
      {
        "title": "Plan for holidays and offset changes",
        "paragraphs": [
          "Keep two calendars: the Philippines holiday calendar and the client holiday calendar. For each date where either side is closed, record the lane impact, the coverage decision, and the owner who approved it. Do not assume that a client holiday is a quiet day for the Philippines team or the reverse.",
          "Review the plan before every daylight saving transition in the client market. Recalculate the overlap, update the schedule, and notify the affected owners. Put the transition dates in the calendar with a reminder early enough to change rosters and customer expectations rather than discovering the shift on the Monday after."
        ],
        "checks": [
          "Are both holiday calendars linked?",
          "Are offset transitions scheduled for review?"
        ]
      },
      {
        "title": "Review the plan monthly",
        "paragraphs": [
          "Report handoffs accepted on first pass, handoffs returned for missing fields, live queue wait inside overlap, messages received outside overlap, and escalations that missed their response window. Use eligible counts as denominators and show the review period. Keep the definitions stable so month to month comparison means something.",
          "Change the schedule only after the data shows which lane is short. A team that is constantly interrupted may need a smaller scope or a different handoff time, not more meetings. Record each change with its reason and review date so the plan evolves from evidence instead of preference."
        ],
        "checks": [
          "Are five coverage measures reported?",
          "Does each schedule change have a reason and review date?"
        ]
      }
    ],
    "checklist": [
      "Client and Philippines windows confirmed from source calendars",
      "Each lane marked live or elapsed",
      "Gross and net overlap minutes calculated",
      "Handoff time reserved at both edges",
      "Meeting load deducted per attendee",
      "Outside-overlap escalation and holding state named"
    ],
    "callScript": [
      "Send the current client service windows, holidays, and daylight saving transition dates.",
      "Confirm which tasks need a live person and which can be completed within the shift.",
      "Share the handoff template, destination, and acceptance rule.",
      "Name the escalation owner for each window, including outside overlap.",
      "Agree the monthly measures and the person who reviews them."
    ],
    "faqs": [
      {
        "question": "How much overlap is enough?",
        "answer": "Enough net minutes to cover the live tasks plus handoff, after meetings and breaks. The number comes from the lane table, not from a universal target."
      },
      {
        "question": "Should the Philippines team change its hours?",
        "answer": "Only within the schedule rules and with the owner who approves coverage. A temporary change should be dated and reviewed like any other schedule version."
      },
      {
        "question": "How do we handle daylight saving?",
        "answer": "Recalculate the overlap before each transition, update the roster, and notify affected customers and owners."
      },
      {
        "question": "What if a message arrives after overlap?",
        "answer": "It waits in the documented holding state or goes to the named fallback owner. The plan should state which, with a response window."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "World Bank: Philippines overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview",
        "note": "Country context for Philippine labour market and development conditions."
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Governance and risk outcomes for assigning control ownership and review."
      },
      {
        "name": "CISA Zero Trust Maturity Model",
        "url": "https://www.cisa.gov/zero-trust-maturity-model",
        "note": "Identity, device, and access maturity model for distributed work."
      },
      {
        "name": "Google Technical Writing",
        "url": "https://developers.google.com/tech-writing",
        "note": "Clear procedure and checklist writing for handoffs and operating guides."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Small business guidance for hiring, payroll, and operations management."
      }
    ]
  },
  "philippines-payroll-cutoff-calendar": {
    "intro": "Payroll fails at the edges: a late timesheet, a missing approval, a change that arrived after the file was frozen. A cutoff calendar turns those edges into visible gates. It does not calculate pay or interpret Philippine labor rules. It makes the inputs, owners, and exceptions reviewable before the payroll owner approves the run.",
    "takeaways": [
      "Build the calendar backward from the pay date and label every gate.",
      "Give each input one owner, one evidence field, and one late path.",
      "Freeze the file with a version and a hash, then record every change after freeze.",
      "Review misses by cause after each cycle, not by blaming the last person in the chain."
    ],
    "questionRows": [
      {
        "question": "What closes at this gate?",
        "usefulAnswer": "A named input, the system it comes from, the acceptance rule, and the person who confirms it.",
        "warning": "Everything is due by the cutoff."
      },
      {
        "question": "Who owns a late input?",
        "usefulAnswer": "One owner for the source and one for the payroll decision, with a documented late path and safe holding state.",
        "warning": "We will chase whoever sent it."
      },
      {
        "question": "What changed after freeze?",
        "usefulAnswer": "A change record with the old value, new value, reason, approver, and effect on the run.",
        "warning": "It was a small correction, so we updated the sheet."
      },
      {
        "question": "How do we know the run used the right file?",
        "usefulAnswer": "A version label, a hash or checksum, the approval timestamp, and the location of the frozen copy.",
        "warning": "The latest file in the folder is the right one."
      }
    ],
    "sections": [
      {
        "title": "Define the payroll input map",
        "paragraphs": [
          "List every input the payroll owner needs: time and attendance, new hires, exits, status changes, leave, overtime, allowances, deductions, bank details, and cost center allocations. For each input, name the source system, the preparing role, the approving role, and the evidence that proves the input is complete.",
          "Keep the map at the level of a control, not a task list. If two inputs come from the same system but have different owners or acceptance rules, list them separately. The map becomes the index for the calendar, the exception log, and the post-run review, so ambiguity here spreads everywhere else."
        ],
        "checks": [
          "Is every payroll input on the map?",
          "Does each input have prepare and approve owners?"
        ]
      },
      {
        "title": "Set gates backward from the pay date",
        "paragraphs": [
          "Start with the pay date and the bank or payment provider deadline, then work backward. Place gates for source extraction, employee change review, exception resolution, payroll calculation, independent check, approval, file release, and payment confirmation. Each gate gets a date, a time, a time zone, and an owner.",
          "Leave a buffer between the internal approval and the external release. A calendar that ends at the last possible minute has no room for a failed file or a rejected bank batch. Publish the calendar before the cycle opens and version it when a date changes, with the reason visible to every owner."
        ],
        "checks": [
          "Are gates dated with time zones?",
          "Is there a buffer before external release?"
        ]
      },
      {
        "title": "Name one owner per input",
        "paragraphs": [
          "Shared ownership is a common source of missed cutoffs. Give each input a single accountable owner who confirms completeness, even if several people prepare parts of it. The owner signs off in the tracking record with a timestamp and a link to the evidence, not with a verbal assurance in a meeting.",
          "Name a backup for each owner and the condition under which the backup acts. The backup needs the same access and the same instructions before the cycle starts, not after the owner is unreachable. Test the backup path at least once so the plan is not discovered to be theoretical during a live run."
        ],
        "checks": [
          "Is every input owned by one person?",
          "Is the backup tested before the cycle?"
        ]
      },
      {
        "title": "Freeze the file and record the version",
        "paragraphs": [
          "At the freeze gate, save the approved input set to a read-only location. Record the file name, version, creation time, checksum, and the person who froze it. From that moment, changes go through a correction record rather than a silent edit to the working sheet.",
          "The correction record should show the old value, the new value, the source of the change, the reason, the approver, and whether the payroll calculation must be rerun. This is the evidence an auditor or a payroll owner needs when a payment differs from the original approval. Without it, every later question becomes a search through chat history."
        ],
        "checks": [
          "Is the frozen file read-only and hashed?",
          "Does every post-freeze change have a record?"
        ]
      },
      {
        "title": "Route late and corrected inputs",
        "paragraphs": [
          "Define what happens when an input misses its gate. The owner records the reason code, the affected employees or records, the earliest safe handling point, and the person who accepts the delay. The default is not to reopen the run; it is to decide whether the item waits for the next cycle or follows an approved off-cycle path.",
          "Off-cycle handling needs its own owner and approval. Keep the decision with the payroll owner and, where treatment is unclear, with qualified Philippine counsel or the payroll provider. The support lane can assemble evidence and route the question, but it should not invent a rule to close a ticket."
        ],
        "checks": [
          "Does each late item have a reason code and owner?",
          "Is off-cycle handling separately approved?"
        ]
      },
      {
        "title": "Separate preparation from approval",
        "paragraphs": [
          "The person who prepares or reconciles an input should not be the only person who approves it. Build an independent check that compares the frozen input to the payroll register, samples changed records, and confirms that exception decisions are present. Record the checker, the sample, and the result.",
          "The approval step should state what the approver reviewed, not only that the run was approved. A useful approval note names the file version, the exception count, the open items, and the decision to proceed or hold. This gives the next cycle a baseline and gives an auditor a clear authority trail."
        ],
        "checks": [
          "Is there an independent check?",
          "Does approval name what was reviewed?"
        ]
      },
      {
        "title": "Test the calendar with a dry run",
        "paragraphs": [
          "Before the first live cycle, run a dry run with representative data. Walk every gate, send every notification, freeze a test file, and produce a mock exception. The purpose is to find missing access, unclear instructions, and owners who are unavailable at the gate time.",
          "Record what failed and fix the calendar or the access before the live date. A dry run that only tests the happy path is not enough. Include a late input, a post-freeze correction, an absent owner, and a bank file rejection so the team practices the states that cause the most damage in production."
        ],
        "checks": [
          "Does the dry run include adverse cases?",
          "Are failures assigned and retested?"
        ]
      },
      {
        "title": "Review misses after each cycle",
        "paragraphs": [
          "After the run, count inputs received on time, late, corrected after freeze, and missing at approval. Group the misses by cause: unclear request, source unavailable, owner unavailable, tool failure, or a genuine change. Report the count against the eligible inputs and the cycle window.",
          "Assign each recurring cause to the person who can repair it. A repeated late timesheet may need a reminder and a different source owner, not more pressure on payroll. The review closes with a small number of changes, each with an owner and a date, and the next cycle tests whether they worked."
        ],
        "checks": [
          "Are misses grouped by cause?",
          "Does each repair have an owner and date?"
        ]
      }
    ],
    "checklist": [
      "Pay date and external deadline confirmed",
      "Every input mapped to a source and an owner",
      "Gates dated with time zones and buffers",
      "Backup owner tested before the cycle",
      "Frozen file hashed and stored read-only",
      "Post-freeze corrections logged and approved"
    ],
    "callScript": [
      "Send the pay date, the bank or provider deadline, and the internal approval date.",
      "Confirm the input map, including the owner and approver for each input.",
      "Share the freeze procedure and the correction record template.",
      "Name the late-input path and the person who approves off-cycle handling.",
      "Agree the post-run measures and the review meeting date."
    ],
    "faqs": [
      {
        "question": "Does the support lane calculate payroll?",
        "answer": "No. It prepares, checks, and routes inputs. The payroll owner approves the run, and treatment questions go to the payroll owner or qualified Philippine counsel."
      },
      {
        "question": "How long before payday should the freeze happen?",
        "answer": "Early enough to allow an independent check, approval, file release, and a buffer for rejection. The exact interval depends on the provider and the payment method."
      },
      {
        "question": "Can we edit the file after freeze?",
        "answer": "Only through a correction record that shows the change, reason, approver, and whether the run must be recalculated."
      },
      {
        "question": "What should the post-run review cover?",
        "answer": "On-time inputs, late inputs, post-freeze corrections, missing approvals, and the causes behind each, with denominators."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "Bureau of Internal Revenue",
        "url": "https://www.bir.gov.ph/",
        "note": "Official Philippine tax administration pages used for payroll filing context, not for a specific rate or amount."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk framing for collecting, using, retaining, and deleting worker records."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Small business guidance for hiring, payroll, and operations management."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access, audit logging, and records protection."
      }
    ]
  },
  "philippines-thirteenth-month-input-checklist": {
    "intro": "Thirteenth month preparation is a payroll input problem before it is a calculation problem. The support lane can establish who was covered, for which months, with what status changes, and which records are missing. It should not decide entitlement, exclusions, or amounts. Those decisions belong to the payroll owner and, where the rule is unclear, to qualified Philippine counsel.",
    "takeaways": [
      "Define the employee and period keys before collecting any amounts.",
      "Collect coverage month evidence, not just a year to date total.",
      "Flag gaps and status changes with a reason code and an owner.",
      "Keep policy and treatment questions outside the preparation lane."
    ],
    "questionRows": [
      {
        "question": "Which period does this record cover?",
        "usefulAnswer": "A start date, end date, pay frequency, and the months actually covered, tied to the payroll calendar version.",
        "warning": "The annual total is close enough."
      },
      {
        "question": "Why is this employee flagged?",
        "usefulAnswer": "A reason code such as new hire, exit, unpaid leave, status change, or missing record, with the source link.",
        "warning": "Payroll will figure it out from the notes."
      },
      {
        "question": "Who decides the treatment?",
        "usefulAnswer": "The payroll owner for the run and qualified Philippine counsel for an unclear rule, with the question and answer recorded.",
        "warning": "The team has done it this way before."
      },
      {
        "question": "What proves the checklist is complete?",
        "usefulAnswer": "A reconciliation count against the employee master, with exclusions and missing records listed.",
        "warning": "The file looks complete."
      }
    ],
    "sections": [
      {
        "title": "Write the question the checklist answers",
        "paragraphs": [
          "State the purpose in one sentence: to give the payroll owner a complete, dated set of coverage and status inputs for the review period. List what the checklist will not do, including deciding entitlement, applying exclusions, or calculating an amount. This boundary keeps the preparation useful and prevents the team from practising law or payroll design.",
          "Agree the review period, the payroll calendar version, and the employee population with the payroll owner. Record the source of the population, such as the employee master as of a stated date. A checklist built against an undefined population cannot be reconciled, and a later dispute will not show whether an employee was missed or excluded."
        ],
        "checks": [
          "Is the purpose stated in one sentence?",
          "Is the population source and date recorded?"
        ]
      },
      {
        "title": "Fix the employee and period keys",
        "paragraphs": [
          "Use the payroll employee identifier as the primary key, not a name or a chat handle. Add the legal entity, pay group, location, and cost center where the payroll owner needs them. Names can change, and duplicate names are common enough that a name based reconciliation will eventually fail.",
          "For each employee, record the coverage start and end dates, the pay frequency, and the months included in the review. Keep the periods as explicit dates rather than labels such as first half or last quarter. A date range can be checked against the calendar; a label cannot."
        ],
        "checks": [
          "Is the payroll identifier the primary key?",
          "Are coverage periods explicit dates?"
        ]
      },
      {
        "title": "Collect coverage month evidence",
        "paragraphs": [
          "For each month in scope, record whether the employee had a paid status, the pay basis, and the source record that supports it. If the source is a payroll register, preserve the register version and the extraction date. If the source is an HR status change, preserve the effective date and the approver.",
          "Do not collapse the year into a single total before the monthly evidence exists. A total can hide a missing month, a duplicate payment, or a period of unpaid leave. The monthly view is the audit trail that lets the payroll owner see how the total was built and where a question remains."
        ],
        "checks": [
          "Does each month have a source record?",
          "Is the register version preserved?"
        ]
      },
      {
        "title": "Flag gaps instead of guessing treatment",
        "paragraphs": [
          "Create a short reason code list for gaps: missing hire date, missing exit date, conflicting status, unpaid leave, no pay record, duplicate identifier, or source unavailable. Each flag gets the employee key, the period, the source checked, the date checked, and the owner who can resolve it.",
          "The support lane should not fill a gap with a plausible value. A guessed hire date or leave period can change the input and create a correction later. Leave the field blank, mark the flag, and route the question. A blank field with an owner is safer than a complete looking record with an invented fact."
        ],
        "checks": [
          "Does every gap have a reason code and owner?",
          "Are blanks left blank rather than guessed?"
        ]
      },
      {
        "title": "Record new hires, exits, and status changes",
        "paragraphs": [
          "Build a separate change list for the review period: hires, exits, transfers, pay basis changes, and leave status changes. Each row needs the effective date, the old value, the new value, the source, and the approver. This list explains most of the difference between a simple headcount and the payroll population.",
          "Check the change list against the monthly coverage evidence. A hire with no first pay record, an exit with a payment after the last working date, or a transfer with two cost centers is a question for the payroll owner. The change list makes those questions visible before the run rather than after a payslip is disputed."
        ],
        "checks": [
          "Is there a dated change list?",
          "Are changes reconciled to monthly coverage?"
        ]
      },
      {
        "title": "Keep sensitive inputs in a restricted file",
        "paragraphs": [
          "The checklist will contain identifiers, pay data, leave information, and possibly family or health related details. Store it in the approved location with named access, not in a shared drive open to the whole company. Use the minimum fields needed for the review and remove columns that the payroll owner does not require.",
          "Record who accessed the file, why, and when access was removed. Set a retention date at creation. If the checklist is exported for review, mark the export and delete it after the review. A convenience copy is a second uncontrolled record and often the one that leaks."
        ],
        "checks": [
          "Is the file in an approved location?",
          "Are access and retention recorded?"
        ]
      },
      {
        "title": "Route policy questions to payroll and counsel",
        "paragraphs": [
          "Some questions are not data questions: whether a particular absence counts, how a status change affects the period, or which employees are in scope. Route those to the payroll owner with the facts and the source references. If the owner needs a legal interpretation, the question goes to qualified Philippine counsel through the agreed channel.",
          "Keep a question log with the date asked, the facts provided, the answer, the person who answered, and the records affected. This log prevents the same question from being answered differently in the next cycle. It also shows an auditor that the team distinguished preparation from interpretation."
        ],
        "checks": [
          "Is there a policy question log?",
          "Are answers attributed to an authorized owner?"
        ]
      },
      {
        "title": "Reconcile the checklist before handoff",
        "paragraphs": [
          "Before sending the checklist, reconcile the row count to the employee population and the change list. Confirm that every employee has a coverage row, every flag has an owner, and every resolved flag has a source. Record the reconciliation counts and the person who performed it.",
          "Hand off the file with a short cover note: period, population source, counts, open flags, and the decisions the payroll owner must make. Keep the checklist version and the handoff timestamp. The goal is a packet the owner can review without reopening five systems or asking the support team what a column means."
        ],
        "checks": [
          "Do row counts reconcile to the population?",
          "Does the handoff list open decisions?"
        ]
      }
    ],
    "checklist": [
      "Review period and population source fixed",
      "Payroll identifier used as the primary key",
      "Monthly coverage evidence linked to a source",
      "Change list for hires, exits, and status moves",
      "Gap reason codes with named owners",
      "Reconciliation counts recorded before handoff"
    ],
    "callScript": [
      "Confirm the review period, population source, and payroll calendar version.",
      "Share the employee identifier and the required coverage fields.",
      "Agree the reason codes for gaps and the owner for each code.",
      "Name the channel for policy questions and the person who answers them.",
      "Confirm the handoff format, reconciliation counts, and retention location."
    ],
    "faqs": [
      {
        "question": "Can the support team calculate the thirteenth month amount?",
        "answer": "The payroll owner decides the calculation and treatment. The support lane assembles coverage, status, and exception evidence for review."
      },
      {
        "question": "What if an employee record is incomplete?",
        "answer": "Flag it with a reason code and an owner. Do not invent a date, status, or amount to make the row look complete."
      },
      {
        "question": "Where should the checklist be stored?",
        "answer": "In the approved payroll location with named access and a retention date. Exports should be temporary and deleted after review."
      },
      {
        "question": "Who answers a question about entitlement?",
        "answer": "The payroll owner, with qualified Philippine counsel when the rule needs interpretation. Record the question and the answer."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "Bureau of Internal Revenue",
        "url": "https://www.bir.gov.ph/",
        "note": "Official Philippine tax administration pages used for payroll filing context, not for a specific rate or amount."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk framing for collecting, using, retaining, and deleting worker records."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Small business guidance for hiring, payroll, and operations management."
      }
    ]
  },
  "philippines-holiday-premium-verification": {
    "intro": "Holiday premium verification is a matching exercise, not a legal opinion. The support lane confirms that the approved holiday calendar, the recorded work time, the employee status, and the payroll code agree. When they do not, the lane documents the mismatch and sends it to the payroll owner. It does not decide what the law requires or recalculate an amount. The check should be repeatable by someone who did not build the calendar or the mapping.",
    "takeaways": [
      "Anchor every check to one approved and versioned holiday calendar.",
      "Match time records to the scheduled window before examining any premium code.",
      "Log each mismatch with the source, the rule version, and a named owner.",
      "Sample quiet records as well as exceptions so the error rate has a denominator."
    ],
    "questionRows": [
      {
        "question": "Which calendar version applies?",
        "usefulAnswer": "The approved calendar id, publication date, effective period, and the owner who released it.",
        "warning": "The team used last year's file because it was easier to find."
      },
      {
        "question": "What time was actually worked?",
        "usefulAnswer": "Clock or system evidence matched to the scheduled window, with the source and extraction date recorded.",
        "warning": "The schedule says the person was rostered, so we assume they worked."
      },
      {
        "question": "Why does the code differ from the calendar?",
        "usefulAnswer": "A logged mismatch with the employee, date, expected code, observed code, and the payroll owner who will decide.",
        "warning": "Payroll usually fixes these at the end."
      },
      {
        "question": "How do we know the check is complete?",
        "usefulAnswer": "A reconciliation count of eligible records, checked records, mismatches, and unresolved items by owner.",
        "warning": "No one complained, so it is probably fine."
      }
    ],
    "sections": [
      {
        "title": "Anchor to one approved calendar version",
        "paragraphs": [
          "Store the approved holiday calendar with an identifier, a publication date, an effective period, and the owner who released it. Record where it came from and which version the payroll run is supposed to use. If a new version appears, keep the old one and show the change rather than overwriting the file.",
          "Before verification starts, confirm that the checklist, the payroll system, and the client communication all reference the same version. A mismatch between two calendars is a control failure, not a data entry error. Stop the check and resolve the version question with the calendar owner before reviewing individual employees.",
          "Keep the release notice with the calendar. The notice should name the version, the effective dates, the owner, and the systems that must update. A calendar without its release record is just a file, and a file cannot show who approved it or when it changed."
        ],
        "checks": [
          "Is the calendar id and version recorded?",
          "Do all systems reference the same version?"
        ]
      },
      {
        "title": "Separate holiday type from premium rule",
        "paragraphs": [
          "A holiday calendar may label a date as a regular holiday, a special non-working day, or a local observance. The payroll rule that applies is a separate decision owned by payroll and, where needed, qualified counsel. Keep two fields in the verification record: the calendar label and the payroll code. Do not infer one from the other.",
          "This separation lets the support lane check consistency without interpreting the law. If the calendar label and the payroll code disagree, the lane records the expected value from the approved mapping and routes the difference. The payroll owner decides whether the mapping is correct or the record needs correction."
        ],
        "checks": [
          "Are calendar label and payroll code separate fields?",
          "Is the approved mapping versioned?"
        ]
      },
      {
        "title": "Match time records to the scheduled window",
        "paragraphs": [
          "For each employee and date, compare the actual time record with the scheduled window. Record the source system, the extraction time, the time zone, and any manual adjustment. A holiday check is only as good as the time evidence behind it, and an adjusted record needs its approver visible.",
          "Do not assume that a rostered shift was worked or that a holiday absence was paid. Missing time, a double punch, or a shift that crosses midnight should become a flag. The reviewer needs enough evidence to see the actual state, not a cleaned summary that hides the uncertainty."
        ],
        "checks": [
          "Is the time source and extraction time recorded?",
          "Are adjustments linked to an approver?"
        ]
      },
      {
        "title": "Check rest day and holiday overlap flags",
        "paragraphs": [
          "When a holiday falls on a rest day or overlaps another premium condition, the payroll code may depend on a rule the support lane should not choose. Record both conditions and the approved code from the mapping. If the mapping does not cover the combination, create a question for the payroll owner.",
          "Keep these overlap cases in a separate count so they do not disappear inside a general exception rate. They are often the cases most likely to be handled inconsistently between cycles. A short list of overlap cases with the owner decision is more useful than a note that says see payroll."
        ],
        "checks": [
          "Are overlap cases counted separately?",
          "Is an unmapped combination routed as a question?"
        ]
      },
      {
        "title": "Verify the payroll code against the owner map",
        "paragraphs": [
          "The owner map names who can approve each code, which changes require a new mapping, and what evidence supports an override. The verification lane checks the code against the map and flags any code that is absent, inactive, or used outside its approved period.",
          "An override should have a reason, an approver, and an expiry. A permanent override is a sign that the mapping is wrong or the process is being bypassed. Report overrides by type and owner so the payroll owner can see whether the exception is becoming the normal path."
        ],
        "checks": [
          "Is every code on the owner map?",
          "Do overrides have a reason and expiry?"
        ]
      },
      {
        "title": "Log mismatches with a reason and owner",
        "paragraphs": [
          "Use a mismatch log with the employee key, date, calendar version, expected code, observed code, evidence link, reason code, owner, and status. Reason codes should distinguish a calendar version issue, a time record gap, a mapping gap, a data entry error, and an unresolved policy question.",
          "Do not close a mismatch by editing the payroll record from the verification sheet. The payroll owner or the authorized system owner makes the correction, and the log records the correction reference. This keeps the evidence trail intact and prevents the support lane from becoming an unaudited second payroll system."
        ],
        "checks": [
          "Does each mismatch have a reason code?",
          "Are corrections made by the authorized owner?"
        ]
      },
      {
        "title": "Sample the quiet cases too",
        "paragraphs": [
          "It is easy to review only the records that look unusual. Add a random sample of records with no flag and check them against the calendar and time source. This estimates whether the quiet population is actually clean or simply unexamined.",
          "Report the sample size, the population, the number of mismatches found, and the review period. If the quiet sample produces mismatches, expand the check before approving the run. A clean exception queue with a dirty base population is not a control.",
          "Record the sample frame as well as the result. If the sample covers only one shift or one site, say so. A quiet sample from a narrow frame does not support a claim about the whole population, and the report should not imply that it does."
        ],
        "checks": [
          "Is there a random sample of unflagged records?",
          "Are sample results reported with the population?"
        ]
      },
      {
        "title": "Close with a reconciliation count",
        "paragraphs": [
          "At the end of the check, reconcile eligible records to checked records, checked records to mismatches, and mismatches to open or resolved status. Show the counts by owner and by reason code. The payroll owner should be able to see what remains before approving the run.",
          "Keep the final pack with the calendar version, the extraction evidence, the mismatch log, and the reconciliation. If a later question arises, the pack should show what was checked, what was not, and who accepted the remaining risk. That is more valuable than a statement that the holiday run was reviewed."
        ],
        "checks": [
          "Do eligible, checked, and mismatch counts reconcile?",
          "Does the pack show unresolved items?"
        ]
      }
    ],
    "checklist": [
      "Approved calendar id and version recorded",
      "Calendar label separated from payroll code",
      "Time source, time zone, and extraction date captured",
      "Overlap cases counted separately",
      "Mismatch log with reason codes and owners",
      "Reconciliation counts signed off before the run"
    ],
    "callScript": [
      "Send the approved holiday calendar, its version, and the effective period.",
      "Share the mapping between calendar labels and payroll codes.",
      "Confirm the time record source, time zone, and extraction method.",
      "Name the payroll owner for mismatches and the channel for policy questions.",
      "Agree the sample size and the reconciliation counts for the final pack."
    ],
    "faqs": [
      {
        "question": "Does the support team decide who is entitled to a premium?",
        "answer": "No. It verifies that the approved calendar, time evidence, status, and payroll code agree, then routes mismatches to the payroll owner."
      },
      {
        "question": "What if two holiday calendars disagree?",
        "answer": "Stop the check and resolve the version question with the calendar owner before reviewing individual records."
      },
      {
        "question": "Should we check every record or sample?",
        "answer": "Start with full coverage for a new calendar or a changed rule. Use a documented sample only after the process is stable, and always include some unflagged records."
      },
      {
        "question": "Where do legal questions go?",
        "answer": "To the payroll owner and, when interpretation is needed, to qualified Philippine counsel. Record the question and the answer."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "Bureau of Internal Revenue",
        "url": "https://www.bir.gov.ph/",
        "note": "Official Philippine tax administration pages used for payroll filing context, not for a specific rate or amount."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk framing for collecting, using, retaining, and deleting worker records."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access, audit logging, and records protection."
      }
    ]
  },
  "philippines-home-office-internet-resilience": {
    "intro": "A home office connection is an operating dependency, not a personal detail. The team should know the primary path, the backup path, the power risk, the device risk, and the exact point at which work pauses. Testing those states before an outage is cheaper than reconstructing a customer promise afterward.",
    "takeaways": [
      "Define the minimum connection and device state each lane needs.",
      "Test power, primary internet, backup internet, and device failure separately.",
      "Write a dated outage sequence with a safe pause and a named escalation owner.",
      "Review outage logs monthly and repair repeat causes rather than coaching around them."
    ],
    "questionRows": [
      {
        "question": "What does this lane need to stay online?",
        "usefulAnswer": "A minimum upload and download speed, a device standard, a power backup, and the tools that must remain reachable.",
        "warning": "The connection is usually fine."
      },
      {
        "question": "What is the backup path?",
        "usefulAnswer": "A named secondary connection or location, tested on a schedule, with the switch procedure and owner.",
        "warning": "The phone hotspot exists but has never been tested."
      },
      {
        "question": "When does work pause?",
        "usefulAnswer": "A written threshold such as loss of both paths or loss of power beyond the backup window, with the state work waits in.",
        "warning": "The team will improvise something."
      },
      {
        "question": "What proves the test happened?",
        "usefulAnswer": "A dated log with the test type, result, duration, fallback used, and the issue raised.",
        "warning": "Someone mentioned it in the stand-up."
      }
    ],
    "sections": [
      {
        "title": "Define the minimum viable connection",
        "paragraphs": [
          "For each work lane, write the tools that must remain reachable, the minimum upload and download needed for voice or video, and the acceptable latency. A task that only needs a browser can tolerate a weaker link than a live support queue with screen sharing. State the difference instead of applying one standard to every role.",
          "Include the device in the standard: operating system support, disk space, memory, headset, camera where required, and a charged backup power source. A fast connection on an unstable device is still an outage. Record the standard in the onboarding checklist so a new team member knows what to test before the first live shift."
        ],
        "checks": [
          "Is the minimum defined per lane?",
          "Does the device standard sit beside it?"
        ]
      },
      {
        "title": "Inventory the primary and backup paths",
        "paragraphs": [
          "Record the primary internet provider, the technology, the plan, and the usual speed at the work location. Record the backup path separately: a second provider, a mobile hotspot, a nearby office, or a designated alternate location. Include who owns each path and how it is activated.",
          "Do not treat a phone hotspot as a real backup until it has been tested with the actual tools and for the expected duration. A hotspot may support email but fail a voice queue or a large file transfer. Test the backup against the lane standard and record the result, including the cost or data limit."
        ],
        "checks": [
          "Are primary and backup paths separately recorded?",
          "Has the backup been tested with real tools?"
        ]
      },
      {
        "title": "Test power and device failure separately",
        "paragraphs": [
          "A power interruption can take down the router, the device, and the lighting at the same time. Record whether the router has a backup power source, how long it lasts, and whether the device can continue on battery. Test the sequence with the actual equipment rather than assuming a charged laptop is enough.",
          "Device failure needs its own path: a spare device, an approved loaner, or a documented recovery time. Record where the spare is, who can release it, and how the user signs in with multi-factor authentication when the primary phone is unavailable. A backup code or recovery process should be stored securely and tested before it is needed."
        ],
        "checks": [
          "Is router backup power tested?",
          "Is there a device and sign-in recovery path?"
        ]
      },
      {
        "title": "Write the outage sequence",
        "paragraphs": [
          "The sequence starts when the user notices a failure and ends when work resumes or pauses. Steps should include the check to perform, the evidence to capture, the backup to activate, the person to notify, the customer or queue owner to update, and the time limit before escalation.",
          "Keep the sequence short enough to use under pressure. Put the most common failures first and link to the detailed runbook rather than pasting every step into the chat. The user should not have to decide whether an outage is serious enough to report. The threshold is written in advance."
        ],
        "checks": [
          "Does the sequence have a clear start and end?",
          "Is the escalation threshold written down?"
        ]
      },
      {
        "title": "Keep a dated test log",
        "paragraphs": [
          "Test the primary path, the backup path, the power backup, and the sign-in recovery on a schedule. Each test records the date, the tester, the lane, the test type, the result, the duration, and any issue raised. A test that only checks whether the internet is on does not test the failure states.",
          "Use the log to spot patterns: the same provider dropping at the same hour, a backup that cannot sustain a full shift, or a device that fails after an update. Assign each recurring issue to the owner who can repair it. The log is also evidence for a client who asks how continuity is managed."
        ],
        "checks": [
          "Are all four failure states tested?",
          "Is every issue assigned to an owner?"
        ]
      },
      {
        "title": "Set a safe pause rule",
        "paragraphs": [
          "Define the state in which work must stop. Examples include loss of both connections, loss of power beyond the backup window, inability to access the system of record, or a device that cannot meet the security standard. The rule should name the queue state, the customer message, and the owner who authorizes resumption.",
          "A safe pause is not a failure of effort. It protects the customer from half-completed work and protects the team member from improvising on an unsecured channel. Record the pause time, the reason, and the resumption approval so the gap is visible in the service record."
        ],
        "checks": [
          "Is the pause condition explicit?",
          "Is resumption approved and recorded?"
        ]
      },
      {
        "title": "Protect data on fallback channels",
        "paragraphs": [
          "A fallback connection can change the security posture. Use the approved tools and the same account controls, not a personal email or an unmanaged file transfer. If a mobile hotspot is used, confirm that the device firewall and the approved VPN or access path still apply.",
          "Do not ask a team member to move sensitive files to a personal device because the primary connection failed. Define which low-risk tasks can continue on the backup and which must wait. The data classification should drive the answer, not the urgency of the queue."
        ],
        "checks": [
          "Are approved tools used on the backup?",
          "Is sensitive work held until secure access returns?"
        ]
      },
      {
        "title": "Review incidents for pattern and repair",
        "paragraphs": [
          "Each month, count outages by lane, duration, cause, fallback used, and work displaced. Separate a provider outage from a device failure, a power event, and a configuration error. Report the count against the number of shifts or users so a single event is not mistaken for a trend.",
          "Close the review with a small number of repairs: replace an aging router, add a second provider, change a backup window, or update the runbook. Give each repair an owner and a date. A resilience plan that never changes after an incident is a document, not a control."
        ],
        "checks": [
          "Are incidents grouped by cause?",
          "Does each repair have an owner and date?"
        ]
      }
    ],
    "checklist": [
      "Lane specific connection and device standard",
      "Primary and backup paths recorded with owners",
      "Router power backup tested",
      "Device and sign-in recovery tested",
      "Outage sequence and safe pause published",
      "Monthly incident counts by cause"
    ],
    "callScript": [
      "Confirm the tools and minimum connection for each lane.",
      "Share the primary and backup path inventory, including the owner of each.",
      "Agree the power, device, and sign-in recovery procedures.",
      "Name the escalation owner and the safe pause condition.",
      "Set the test schedule and the monthly incident review date."
    ],
    "faqs": [
      {
        "question": "Is a mobile hotspot enough for a backup?",
        "answer": "Only if it has been tested with the actual tools for the expected duration and meets the lane standard. Otherwise it is an untested assumption."
      },
      {
        "question": "Who pays for the backup connection?",
        "answer": "That is a commercial decision for the employer and the provider. The operating plan should state the expectation before the first shift."
      },
      {
        "question": "Should the team member keep working during an outage?",
        "answer": "Only on approved tools and only for work that meets the data rule. Otherwise the work pauses in the documented state."
      },
      {
        "question": "How often should the backup be tested?",
        "answer": "Often enough to trust it before a real outage, with a dated log. A quarterly test is a common starting point and should be adjusted for critical lanes."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "CISA Secure Our World",
        "url": "https://www.cisa.gov/secure-our-world",
        "note": "Practical account, authentication, and phishing guidance for distributed staff."
      },
      {
        "name": "CISA Zero Trust Maturity Model",
        "url": "https://www.cisa.gov/zero-trust-maturity-model",
        "note": "Identity, device, and access maturity model for distributed work."
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Governance and risk outcomes for assigning control ownership and review."
      },
      {
        "name": "World Bank: Philippines overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview",
        "note": "Country context for Philippine labour market and development conditions."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access, audit logging, and records protection."
      }
    ]
  },
  "philippines-background-check-consent-log": {
    "intro": "A background check consent log is evidence about a permission event, not a copy of the check result. It should show the disclosure version a candidate received, the scope they agreed to, the time and channel of acceptance, and any later withdrawal. It should not contain the adjudication itself, which belongs with the authorized decision owner and qualified counsel. The log should be usable by someone who was not part of the original conversation.",
    "takeaways": [
      "Define the check scope and the disclosure version before collecting consent.",
      "Record consent as a dated event with a channel and an evidence link.",
      "Separate the consent record from the background result and the adjudication.",
      "Rehearse a withdrawal and a subject access request before they happen."
    ],
    "questionRows": [
      {
        "question": "What exactly did the candidate agree to?",
        "usefulAnswer": "The disclosure version, the check types in scope, the entities that may be contacted, and the retention period shown.",
        "warning": "The candidate signed something at intake."
      },
      {
        "question": "When and how was consent given?",
        "usefulAnswer": "A timestamp, channel, account or signature reference, and the stored evidence that matches the disclosure version.",
        "warning": "Recruiting says it was verbal."
      },
      {
        "question": "What happens if consent is withdrawn?",
        "usefulAnswer": "A recorded withdrawal event, the work stopped, the owner notified, and the consequence explained under the applicable rule.",
        "warning": "We will deal with it if it comes up."
      },
      {
        "question": "Who can see the log?",
        "usefulAnswer": "A named group with a business purpose, least privilege, access review, and a retention date.",
        "warning": "The whole HR drive can open it."
      }
    ],
    "sections": [
      {
        "title": "Define the scope before collection",
        "paragraphs": [
          "Write the check types in scope, the roles they apply to, the information sources that may be contacted, and the decision the check supports. Include the countries or jurisdictions involved and the person who approves an exception. Scope should be narrow enough that a candidate can understand what will happen and what will not.",
          "Have qualified Philippine counsel review the disclosure and the consent process for the jurisdictions in play. The support lane can maintain the record and route questions, but it should not draft a legal permission or decide whether a check is lawful. Record the approved text and the approval date as the controlled source."
        ],
        "checks": [
          "Is the scope written and approved?",
          "Is the approving adviser named?"
        ]
      },
      {
        "title": "Version the disclosure text",
        "paragraphs": [
          "Give each disclosure version an identifier, a publication date, a summary of changes, and an effective date. When the text changes, keep the old version available so an earlier consent can still be matched to the words the candidate actually saw. Do not update the text in place.",
          "Link every consent event to the exact version. A log that says consent was given without a version cannot show what was agreed to after the disclosure changes. This is the most common weakness in a consent record and the hardest one to repair later.",
          "Keep a small index that maps each version to the consent events that used it. The index makes a later audit possible without opening every candidate file, and it shows quickly whether an old version is still being presented after its retirement date."
        ],
        "checks": [
          "Does every version have an id and date?",
          "Is each consent linked to a version?"
        ]
      },
      {
        "title": "Capture consent as an event",
        "paragraphs": [
          "Record the candidate key, the disclosure version, the scope, the timestamp, the channel, the language, and the evidence location. If the consent is electronic, preserve the audit trail from the system. If it is on paper, store a scanned copy in the restricted location and record the original location.",
          "Do not record consent as a yes or no field on a spreadsheet without the evidence behind it. The event record should let a reviewer reconstruct who saw what, when, and how. If a candidate later asks for proof, the log should answer without a search through email."
        ],
        "checks": [
          "Does the event include time, channel, and version?",
          "Is the evidence linked, not just asserted?"
        ]
      },
      {
        "title": "Record withdrawal and its consequence",
        "paragraphs": [
          "A withdrawal is a new event, not an edit to the original consent. Record the date, the channel, the scope withdrawn, the evidence, and the person who received it. Notify the owner who can stop the check or the use of the result, and record the action taken.",
          "The consequence depends on the applicable rule and the stage of the process. Do not decide that consequence inside the support lane. Route it to the authorized owner and qualified counsel, and keep the question and answer with the record. The log should show that the withdrawal was received and acted on, not that it was quietly noted."
        ],
        "checks": [
          "Is withdrawal a separate event?",
          "Is the stop action recorded with an owner?"
        ]
      },
      {
        "title": "Restrict access to the smallest group",
        "paragraphs": [
          "Consent records contain identity and sometimes sensitive details. Give access only to the roles that need it for the defined purpose. Use named accounts, role based permissions, and an access review. Do not share a single recruiting inbox as the identity for the log.",
          "Record access grants and removals with a date and approver. If a vendor performs the check, confirm the data sharing terms and the vendor access list. A vendor portal can become an uncontrolled copy, so the contract and the access review should cover it explicitly.",
          "Review the access list after a role change or a vendor change, not only on a calendar date. A person who moves to a new team may keep old permissions for months if the review is annual and no one checks the transfer. Record the removal as well as the grant."
        ],
        "checks": [
          "Is access role based and named?",
          "Is vendor access reviewed?"
        ]
      },
      {
        "title": "Separate administrative facts from adjudication",
        "paragraphs": [
          "The consent log can show that a check was authorized and completed. It should not contain the recruiter's opinion about the result or the final employment decision. Keep the result in a restricted file and the adjudication with the authorized decision owner.",
          "This separation protects the candidate and the reviewer. A support team member who can see the result may be pressured to interpret it. A clear boundary lets the lane maintain the permission record and the status while the qualified owner handles the judgment."
        ],
        "checks": [
          "Is the result outside the consent log?",
          "Is adjudication assigned to an authorized owner?"
        ]
      },
      {
        "title": "Set retention and deletion evidence",
        "paragraphs": [
          "Decide how long each record is kept, what triggers deletion, and who performs it. Base the period on the approved policy and applicable law, not on storage convenience. Record the retention rule beside the record so a later reviewer does not have to guess.",
          "Deletion should produce evidence: the date, the record identifiers, the method, and the person who confirmed it. A note that says deleted is weak. A deletion log that can be matched to the record inventory is stronger and also shows that old consent records are not accumulating indefinitely."
        ],
        "checks": [
          "Is the retention period approved?",
          "Does deletion produce evidence?"
        ]
      },
      {
        "title": "Rehearse a subject request",
        "paragraphs": [
          "Run a tabletop exercise for a candidate who asks what was collected, who saw it, and how to withdraw. Walk through the search, the identity check, the response owner, the deadline, and the redaction rules. Fix any gap before a real request arrives.",
          "The exercise should include a request that spans the consent log, the vendor, and the result file. Most failures appear at the boundary between systems. Record the exercise date, the participants, the gaps found, and the repairs, then repeat after a material change in vendor or process.",
          "Keep the exercise notes with the process documentation and assign the repairs. A rehearsal that produces a list but no owner is a discussion, not a control."
        ],
        "checks": [
          "Has a subject request been rehearsed?",
          "Are cross system gaps assigned?"
        ]
      }
    ],
    "checklist": [
      "Approved scope and disclosure version",
      "Consent event with time, channel, and evidence",
      "Withdrawal path with a named owner",
      "Role based access and vendor review",
      "Result and adjudication kept separate",
      "Retention rule and deletion evidence"
    ],
    "callScript": [
      "Send the approved disclosure text, version, and scope.",
      "Confirm the consent capture method and the evidence location.",
      "Name the owner who handles withdrawal and the adviser for legal questions.",
      "Share the access list and the retention rule.",
      "Agree the subject request rehearsal date and participants."
    ],
    "faqs": [
      {
        "question": "Can consent be collected verbally?",
        "answer": "Only if the approved process allows it and the evidence is recorded. The safer default is a documented channel tied to a disclosure version."
      },
      {
        "question": "Should the consent log include the check result?",
        "answer": "No. Keep the permission event separate from the result and the adjudication, with different access and retention rules."
      },
      {
        "question": "What if a candidate withdraws consent?",
        "answer": "Record the withdrawal as a new event, notify the authorized owner, and follow the approved consequence with advice from qualified counsel."
      },
      {
        "question": "Who can approve a new check type?",
        "answer": "The designated owner after review by qualified counsel. The support lane updates the log only after the approval is recorded."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk framing for collecting, using, retaining, and deleting worker records."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "EEOC Recordkeeping Requirements",
        "url": "https://www.eeoc.gov/employers/recordkeeping-requirements",
        "note": "Employment record retention concepts used as a comparison, not as Philippine law."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access, audit logging, and records protection."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "SBA: Stay legally compliant",
        "url": "https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant",
        "note": "Compliance planning context for employer records and obligations."
      }
    ]
  },
  "philippines-offboarding-final-pay-checklist": {
    "intro": "Final pay work crosses three systems and at least three owners: the last working date, the time and attendance record, the asset and access clearance, and the payroll calculation. A single checklist makes the handoff visible. It does not decide the amount, the deductions, or the legal treatment of any item. A complete packet is not a long packet; it is one a reviewer can follow without asking what a column means.",
    "takeaways": [
      "Start every offboarding packet from the confirmed last working date.",
      "Collect time, asset, and clearance evidence separately from payroll decisions.",
      "Flag deductions and advances as questions rather than adjusting the amount.",
      "Close the packet only after payment evidence and access removal are recorded."
    ],
    "questionRows": [
      {
        "question": "What is the last working date?",
        "usefulAnswer": "A confirmed date with the source notice, the approver, and any garden leave or transition arrangement recorded.",
        "warning": "The manager mentioned Friday."
      },
      {
        "question": "Which time and leave records are final?",
        "usefulAnswer": "A frozen attendance extract with the cut-off, approvals, and unresolved exceptions listed.",
        "warning": "Payroll can pull the latest numbers."
      },
      {
        "question": "What is still outstanding?",
        "usefulAnswer": "Assets, access, clearances, and documents listed with an owner, due date, and current state.",
        "warning": "Everything is basically returned."
      },
      {
        "question": "Who decides the final amount?",
        "usefulAnswer": "The payroll owner, with qualified Philippine counsel for treatment questions, and the approval recorded before release.",
        "warning": "The checklist total is the final pay."
      }
    ],
    "sections": [
      {
        "title": "Start from the last working date",
        "paragraphs": [
          "Confirm the last working date in writing before building the packet. Record the notice date, the source document, the approver, and any transition arrangement such as leave or a shorter schedule. The date drives the time cut-off, the benefit period, and the access removal, so an unconfirmed date creates errors in every later step.",
          "If the date changes, version the packet and recalculate the dependent items. Do not edit the original date in place. A short change log with the old date, the new date, the reason, and the approver keeps the history clear when payroll or counsel reviews the file."
        ],
        "checks": [
          "Is the last working date confirmed in writing?",
          "Are changes versioned?"
        ]
      },
      {
        "title": "Track time and attendance inputs",
        "paragraphs": [
          "Freeze the attendance extract at the agreed cut-off and record the source, the extraction time, and the person who pulled it. List approved overtime, rest day work, holiday work, leave, and any manual adjustment with its approver. Do not let a late adjustment slip in without a correction record.",
          "Reconcile the extract to the schedule and the leave system. Explain every gap: an absence without leave, a missed punch, a shift swap, or a correction. The payroll owner needs the unresolved items listed, not a clean total that hides them.",
          "Keep the schedule version beside the attendance extract. A shift that was swapped before the last working date can change which hours are final, and the reviewer needs to see the approved schedule rather than the original plan."
        ],
        "checks": [
          "Is the attendance extract frozen and sourced?",
          "Are adjustments approved and reconciled?"
        ]
      },
      {
        "title": "Reconcile assets and access",
        "paragraphs": [
          "List every asset issued to the employee: laptop, phone, headset, token, badge, vehicle, or equipment. Record the serial or asset id, the issue date, the return state, and the person who received it. A missing asset is a business issue for the owner, not a reason for the support lane to invent a deduction.",
          "Run the access removal checklist with named systems and owners. Record the time access ended, not only the request time. Confirm that shared credentials were rotated where the employee knew them. Access removal is a security control and should not wait for the final pay discussion."
        ],
        "checks": [
          "Is every asset tracked to a return state?",
          "Is access removal confirmed with a time?"
        ]
      },
      {
        "title": "Collect clearance evidence",
        "paragraphs": [
          "Clearance items vary by role: finance, inventory, client property, confidentiality, or pending case files. Give each item an owner, a due date, and a state. The support lane can chase and record, but the owner decides whether the clearance is satisfied.",
          "Keep clearance evidence separate from the pay calculation. A cleared item is a fact; whether it affects pay is a policy question. Mixing the two invites an unauthorized deduction or a promise that the team cannot keep. Route the question with the evidence attached.",
          "Some clearances belong to another company or client. Record the external owner and the expected response time, then treat a missing response as an open item rather than a cleared one."
        ],
        "checks": [
          "Does each clearance item have an owner?",
          "Is clearance kept separate from pay decisions?"
        ]
      },
      {
        "title": "Flag deductions and advances as questions",
        "paragraphs": [
          "List possible deductions, advances, loans, or recoveries as questions with the source document and the amount stated by the system. Do not calculate a net amount or apply an offset. The payroll owner and qualified counsel decide whether an item is valid, how it is treated, and what evidence is required.",
          "Record the question, the facts provided, the answer, and the person who answered. If an item remains unresolved at the release date, the packet should show it as open rather than silently excluding it. A visible open item is easier to defend than a surprise correction later."
        ],
        "checks": [
          "Are deductions treated as questions?",
          "Are unresolved items visible at release?"
        ]
      },
      {
        "title": "Keep the payroll owner in the approval path",
        "paragraphs": [
          "The packet moves from preparation to payroll review to approval. Name the reviewer, the approval criteria, and the evidence they will see. The support lane should not release a payment file or communicate a final amount to the employee without the payroll owner's approval.",
          "Build a short approval note that lists the last working date, the attendance cut-off, open items, and the payment instruction reference. The note should show what the approver accepted, not just a signature. This is the record that answers a later question about who authorized the release."
        ],
        "checks": [
          "Is the payroll reviewer named?",
          "Does approval list what was reviewed?"
        ]
      },
      {
        "title": "Hand off a complete packet",
        "paragraphs": [
          "Assemble the packet in a fixed order: confirmed dates, attendance extract, leave and adjustment evidence, asset and access record, clearance states, open questions, and the payroll calculation reference. Add an index with page or file names so the reviewer can find each item without searching.",
          "Send the packet through the approved channel and record the handoff time and receiver. If an item is missing, send the packet with the gap listed rather than delaying everything. A partial packet with a clear gap is easier to act on than a promise that everything will follow.",
          "Use a file naming rule that includes the employee key, the last working date, and the packet version. A folder of files named final makes the reviewer's job harder and increases the chance that an old version is paid."
        ],
        "checks": [
          "Is the packet indexed?",
          "Is the handoff time and receiver recorded?"
        ]
      },
      {
        "title": "Close the record after payment",
        "paragraphs": [
          "After payment, attach the payment evidence and the final approval to the packet. Close the access and asset items with dates, then record the retention period and the owner of the closed file. Do not leave the packet open in a working folder where it can be edited later.",
          "Review the cycle for misses: late clearances, missing attendance, unresolved questions, and access removed after the deadline. Count them against the number of offboardings in the period. Assign repairs to the owners and check the next cycle. Offboarding quality is visible in the closure record, not in the farewell message."
        ],
        "checks": [
          "Is payment evidence attached?",
          "Are closure misses reviewed with a denominator?"
        ]
      }
    ],
    "checklist": [
      "Last working date confirmed and versioned",
      "Attendance extract frozen at cut-off",
      "Assets tracked to a return state",
      "Access removal confirmed with a time",
      "Deductions logged as questions with owners",
      "Payment evidence and closure recorded"
    ],
    "callScript": [
      "Confirm the last working date, notice source, and approver.",
      "Send the attendance cut-off and the adjustment list.",
      "Share the asset register and the access removal checklist.",
      "Name the payroll owner, the reviewer, and the channel for legal questions.",
      "Agree the packet index and the closure evidence required."
    ],
    "faqs": [
      {
        "question": "Does the support team calculate final pay?",
        "answer": "No. It assembles the dates, time, asset, and clearance evidence. The payroll owner decides the amount and the treatment, with counsel where needed."
      },
      {
        "question": "Can we deduct an unreturned asset?",
        "answer": "That is a policy and legal question. Record the asset state and route the question. Do not apply a deduction inside the checklist."
      },
      {
        "question": "What if the last working date changes?",
        "answer": "Version the packet, update dependent items, and record the reason and approver."
      },
      {
        "question": "When should access be removed?",
        "answer": "According to the approved offboarding rule, with the actual removal time recorded. It should not wait for the final pay discussion."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "Bureau of Internal Revenue",
        "url": "https://www.bir.gov.ph/",
        "note": "Official Philippine tax administration pages used for payroll filing context, not for a specific rate or amount."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk framing for collecting, using, retaining, and deleting worker records."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "EEOC Recordkeeping Requirements",
        "url": "https://www.eeoc.gov/employers/recordkeeping-requirements",
        "note": "Employment record retention concepts used as a comparison, not as Philippine law."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Small business guidance for hiring, payroll, and operations management."
      }
    ]
  },
  "philippines-team-lead-span-of-control": {
    "intro": "A span of control is the amount of work a team lead can review, coach, and escalate in a normal week. Counting direct reports is only the first step. Two teams with eight people each can place very different demands on a lead if one handles routine transactions and the other handles exceptions, client calls, or new hires. The estimate should be revisable when the work changes, and it should show its assumptions.",
    "takeaways": [
      "Measure review and coaching load, not only headcount.",
      "Separate queue rescue from planned coaching so hidden work becomes visible.",
      "Test the span with a dated diary before adding a layer or a new lane.",
      "Change scope or tooling before adding a supervisor when the load is too high."
    ],
    "questionRows": [
      {
        "question": "How much review does each person need?",
        "usefulAnswer": "A sample based estimate of first pass acceptance, rework, and review minutes per item, split by role and risk tier.",
        "warning": "Everyone gets the same five percent sample."
      },
      {
        "question": "How often does the lead rescue the queue?",
        "usefulAnswer": "A count of unplanned interventions, their duration, and the cause, tracked separately from coaching.",
        "warning": "The lead is always on the floor, so it is fine."
      },
      {
        "question": "What work does the lead own?",
        "usefulAnswer": "A short list of deliverables with hours reserved, so the span calculation includes them.",
        "warning": "The lead will fit it in around the team."
      },
      {
        "question": "What happens when the span is too high?",
        "usefulAnswer": "Reduce scope, change review sampling, add tooling, or add a layer, in that order, with a review date.",
        "warning": "We will add another supervisor and keep everything else the same."
      }
    ],
    "sections": [
      {
        "title": "Count the work, not just the people",
        "paragraphs": [
          "List the direct reports, then list the recurring work the lead performs for them: one to ones, quality reviews, schedule changes, escalations, onboarding, and client reporting. Add the lead's own deliverables. The sum is the load the span has to fit into the available hours.",
          "Include the variation, not only the average. A team with stable, documented work needs less unplanned attention than a team with new hires, changing rules, or frequent exceptions. Write the variation as a range and name the conditions that push the load toward the top of it."
        ],
        "checks": [
          "Are direct reports and lead deliverables both listed?",
          "Is workload variation described?"
        ]
      },
      {
        "title": "Measure review load per person",
        "paragraphs": [
          "For each role, estimate the minutes required to review one unit of work at the agreed sample rate. Multiply by the expected volume, then add the time to explain corrections and recheck them. A role with a high first pass acceptance rate needs less review time than a role with the same volume and frequent rework.",
          "Use actual samples where available. Pull ten or twenty recent reviews and record the time spent, the number of findings, and the follow up required. If no time data exists, run a one week diary. A planned estimate based on a real sample is better than a ratio borrowed from another team.",
          "Keep the sample dates and the reviewer names with the estimate. A review time that comes from a quiet week will understate the load in a launch or peak period. Repeat the sample after a new hire joins or a tool changes."
        ],
        "checks": [
          "Is review time measured per unit?",
          "Does the estimate include rework and recheck?"
        ]
      },
      {
        "title": "Separate coaching from queue rescue",
        "paragraphs": [
          "Coaching is planned time to improve a skill or reinforce a standard. Queue rescue is unplanned work to keep a service moving. Both consume the lead's hours, but they have different causes and different fixes. Track them separately so a chronic rescue pattern is not mistaken for effective leadership.",
          "A lead who spends most of the week rescuing may need a clearer escalation path, better tooling, or a smaller scope. A lead with little rescue time but weak quality may need a different review sample. The split tells you which problem to solve before you change the span."
        ],
        "checks": [
          "Are coaching and rescue tracked separately?",
          "Does each pattern point to a repair?"
        ]
      },
      {
        "title": "Map escalation volume and severity",
        "paragraphs": [
          "Count escalations by source, severity, and time to resolve. Include the ones the lead handles directly and the ones that require a manager or client owner. A small number of severe escalations can consume more attention than a large number of routine questions.",
          "Set a threshold for what the lead must handle and what should go to a documented owner. If the lead is the default for every exception, the span is artificially wide. A clear escalation matrix reduces the load without adding headcount, but only if the owners actually respond."
        ],
        "checks": [
          "Are escalations counted by severity?",
          "Is the default route to the lead removed?"
        ]
      },
      {
        "title": "Protect the lead's own deliverables",
        "paragraphs": [
          "Write the lead's non-people work into the capacity plan: reporting, client calls, process changes, audits, and projects. Reserve hours for them in the same way you reserve hours for queue coverage. If the deliverables do not fit, the span is overstated even when the headcount looks reasonable.",
          "A lead without protected time will do the extra work after hours or drop it. Neither outcome is visible in a headcount report. Review the deliverables each quarter and remove the ones that no longer justify the time.",
          "If the lead's deliverables are routinely deferred, treat that as a capacity finding. Deferral is a signal that the span is using time that was promised to another output."
        ],
        "checks": [
          "Are lead deliverables in the capacity plan?",
          "Is time reserved for them?"
        ]
      },
      {
        "title": "Test the span with a two week diary",
        "paragraphs": [
          "Ask the lead to log time in categories for two weeks: planned coaching, quality review, unplanned rescue, escalations, meetings, own deliverables, and administration. Keep the categories small enough to use consistently. Review the diary with the lead and check the totals against the capacity plan.",
          "The diary is a sample, not a permanent time tracking system. Use it to test the assumptions, then repeat after a material change in volume, scope, or team composition. Record the dates and the conditions so the result is not treated as a universal benchmark.",
          "Review the diary with the lead rather than auditing it. The purpose is to correct the estimate, not to judge how the lead spends each minute."
        ],
        "checks": [
          "Does the diary use stable categories?",
          "Will it be repeated after a change?"
        ]
      },
      {
        "title": "Adjust scope before adding layers",
        "paragraphs": [
          "When the load is too high, first remove low value work, clarify the escalation path, improve the review tooling, or reduce the span. Adding a supervisor can help, but it also adds a layer of communication and another review relationship. Choose the smallest change that addresses the measured cause.",
          "If a new layer is needed, define what the new lead owns and what stays with the original lead. Write the handoff for escalations, quality review, and client communication. A new layer without a clear boundary often recreates the same overload one level down."
        ],
        "checks": [
          "Is the cause identified before adding a layer?",
          "Are the new boundaries written?"
        ]
      },
      {
        "title": "Review the design each quarter",
        "paragraphs": [
          "Revisit the span when volume, role mix, tooling, or client expectations change. Use the same measures: review minutes per unit, first pass acceptance, rescue time, escalation volume, and lead deliverable hours. Report the period and the denominator rather than a single ratio.",
          "Keep a short decision record for each change: the evidence, the option chosen, the owner, and the review date. The point is not to find a perfect number. It is to make the tradeoff visible so the team can adjust before quality or health suffers.",
          "Use the same review date for the diary follow up and the span decision so the evidence and the choice stay connected."
        ],
        "checks": [
          "Are the same measures used over time?",
          "Does each change have a decision record?"
        ]
      }
    ],
    "checklist": [
      "Direct reports and lead deliverables listed",
      "Review minutes measured from a real sample",
      "Coaching and rescue tracked separately",
      "Escalation volume and severity counted",
      "Two week diary completed and reviewed",
      "Scope change considered before a new layer"
    ],
    "callScript": [
      "Send the current team list, role mix, and lead deliverables.",
      "Share the review sample, first pass acceptance, and rework data.",
      "Confirm how coaching and queue rescue are tracked.",
      "Name the escalation owners and the threshold for the lead.",
      "Agree the diary dates and the quarterly review cadence."
    ],
    "faqs": [
      {
        "question": "Is there a standard span of control?",
        "answer": "No single number fits every team. The defensible span comes from the measured review, coaching, escalation, and deliverable load."
      },
      {
        "question": "Should we add a supervisor when the lead is busy?",
        "answer": "First check whether scope, escalation, tooling, or sampling can remove the load. Add a layer only when the cause requires it and the new boundary is written."
      },
      {
        "question": "How do we measure review load?",
        "answer": "Sample recent reviews, record the minutes and findings, and include rework and recheck time. Repeat after a material change."
      },
      {
        "question": "Does a wide span always mean poor quality?",
        "answer": "Not necessarily, but it raises the risk that coaching and review are being skipped. The diary and quality data show whether the work is actually covered."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "World Bank: Philippines overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview",
        "note": "Country context for Philippine labour market and development conditions."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Small business guidance for hiring, payroll, and operations management."
      },
      {
        "name": "Google Technical Writing",
        "url": "https://developers.google.com/tech-writing",
        "note": "Clear procedure and checklist writing for handoffs and operating guides."
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Governance and risk outcomes for assigning control ownership and review."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      }
    ]
  },
  "philippines-shift-differential-review": {
    "intro": "Shift differential review is easy to turn into an argument about the law. Keep it as an input control instead. The lane confirms which schedule applied, what time was actually worked, which qualifying window the payroll owner has defined, and whether the approved code matches the record. Interpretation and calculation stay with the payroll owner and qualified Philippine counsel. That boundary is the difference between a verification lane and an unauthorized pay decision, and it should be visible in the record.",
    "takeaways": [
      "Freeze the schedule version before comparing it with actual time.",
      "Record the qualifying window as an approved rule, not a reviewer guess.",
      "Treat swaps, rest days, and holiday overlap as separate exception types.",
      "Report mismatches and sample results with the eligible population."
    ],
    "questionRows": [
      {
        "question": "Which schedule applied on this date?",
        "usefulAnswer": "A versioned roster with the effective date, the shift start and end, and the approver of any change.",
        "warning": "The team knows who was on shift."
      },
      {
        "question": "What time was actually worked?",
        "usefulAnswer": "A clock or system extract with the time zone, adjustment evidence, and the approval for any manual edit.",
        "warning": "The roster is close enough."
      },
      {
        "question": "Which window qualifies?",
        "usefulAnswer": "The approved rule or mapping that defines the window for the payroll owner, with the version and owner recorded.",
        "warning": "The reviewer decides case by case."
      },
      {
        "question": "Why does the code differ?",
        "usefulAnswer": "A mismatch record with the expected code, observed code, reason, owner, and correction reference.",
        "warning": "Payroll will catch it later."
      }
    ],
    "sections": [
      {
        "title": "Freeze the schedule version",
        "paragraphs": [
          "Before reviewing time, confirm which roster version applied to each date. Record the version id, the effective period, the publication date, and the person who approved the change. A schedule that is edited after the fact cannot support a reliable comparison with actual time.",
          "Keep the previous version when a change is made. A shift swap, a temporary reassignment, or a rest day change should appear as a dated difference, not as a silent edit. The reviewer needs to see the state that was in force when the employee worked.",
          "If the roster is maintained in more than one system, record which system is authoritative and how the copies are reconciled. Two rosters that disagree are a version problem before they are a pay problem."
        ],
        "checks": [
          "Is the roster version recorded per date?",
          "Are prior versions retained?"
        ]
      },
      {
        "title": "Match actual time to the approved shift",
        "paragraphs": [
          "Compare the clock or system record with the approved shift start and end. Record the time zone and the extraction time. If the shift crosses midnight, keep the dates explicit so the hours are not split incorrectly. A mismatch between the roster and the clock is a flag, not an automatic correction.",
          "Manual adjustments need a reason, an approver, and a timestamp. List them separately so they can be reviewed as a group. A high rate of manual adjustment may indicate a scheduling problem, a device problem, or a control weakness, and each has a different repair.",
          "List the source of each time record and the person who can correct it. A correction route without a named owner becomes a message to the team channel."
        ],
        "checks": [
          "Is the time zone explicit?",
          "Do manual adjustments have reasons and approvers?"
        ]
      },
      {
        "title": "Flag the qualifying window for the payroll owner",
        "paragraphs": [
          "The payroll owner defines the qualifying window or the rule that maps a schedule to a code. The support lane records that rule and applies it as a matching test. It does not decide whether the rule is legally correct. That question goes to the owner and, where needed, qualified Philippine counsel.",
          "When a record falls near the boundary, flag it for review instead of rounding it. Boundary cases are where inconsistent practice accumulates. A short list with the exact start and end times is more useful than a general note that the shift was a night shift.",
          "Keep a copy of the rule with the cycle pack so a later reviewer can see what was applied without searching an old email."
        ],
        "checks": [
          "Is the qualifying rule versioned?",
          "Are boundary cases flagged rather than rounded?"
        ]
      },
      {
        "title": "Handle schedule changes and swaps",
        "paragraphs": [
          "A swap creates two questions: who was scheduled and who actually worked. Record both, with the approval for the swap and the time evidence for each person. Do not assume that the original roster still describes the work after a swap.",
          "If the swap crossed a pay period or changed the qualifying window, flag it for the payroll owner. The lane can document the facts and the conflicting records. It should not resolve the conflict by choosing the more convenient version.",
          "Record the time of the swap request and the time of approval. A retroactive approval can be legitimate, but it should be visible as a retroactive event rather than looking like the original schedule."
        ],
        "checks": [
          "Are scheduled and actual people both recorded?",
          "Are cross period swaps flagged?"
        ]
      },
      {
        "title": "Check rest day and holiday overlap",
        "paragraphs": [
          "When a shift touches a rest day or a holiday, record the calendar version and the overlap. The combination may change the code or require a different approval. Keep the overlap as a separate exception type so it is not lost in a general mismatch count.",
          "Use the approved mapping and route unmapped combinations as questions. A reviewer should not combine rules from memory. The record should show the calendar label, the schedule, the actual time, and the code the mapping produced."
        ],
        "checks": [
          "Is the calendar version recorded?",
          "Are unmapped combinations routed?"
        ]
      },
      {
        "title": "Separate verification from approval",
        "paragraphs": [
          "The person who verifies the input should not be the only person who approves the payroll effect. Build a review step that checks the mismatch log, the exception decisions, and the reconciliation counts. Record who reviewed what and when.",
          "The approval note should list the schedule version, the time source, the number of mismatches, the unresolved items, and the decision to proceed or hold. A signature without this context does not show what the approver accepted.",
          "The reviewer should be able to see the exception log and the reconciliation in one place. Splitting them across two files makes it easy to approve a total that does not match the detail."
        ],
        "checks": [
          "Is there an independent approval?",
          "Does the note list what was reviewed?"
        ]
      },
      {
        "title": "Sample the exceptions and the quiet records",
        "paragraphs": [
          "Review all records that carry a flag or a manual adjustment. Add a random sample of unflagged records to test whether the base population is clean. Record the sample size, the population, and any mismatches found.",
          "If the quiet sample produces mismatches, expand the review before the run. A low exception count can mean the process is working or the checks are too shallow. The sample is how you tell the difference."
        ],
        "checks": [
          "Is there a random sample of quiet records?",
          "Are sample results reported with the population?"
        ]
      },
      {
        "title": "Report counts with denominators",
        "paragraphs": [
          "Close the cycle with eligible records, checked records, mismatches by type, resolved items, and open items by owner. Show the review period and the schedule version. These counts let the payroll owner see the state of the input set before approval.",
          "Review the trend across cycles only after the definitions are stable. A change in the schedule system or the qualifying rule can move the numbers without any change in quality. Note the change beside the result so the comparison remains honest.",
          "Keep the cycle report short enough for the payroll owner to read before approval. A long narrative with no counts does not help the decision."
        ],
        "checks": [
          "Do the counts reconcile?",
          "Are definition changes noted?"
        ]
      }
    ],
    "checklist": [
      "Roster version recorded for each date",
      "Actual time source and time zone captured",
      "Qualifying rule versioned and owned",
      "Swaps and cross period changes flagged",
      "Holiday and rest day overlaps separated",
      "Reconciliation counts approved before the run"
    ],
    "callScript": [
      "Send the roster versions and the effective dates for the review period.",
      "Share the approved qualifying rule or mapping and its owner.",
      "Confirm the time source, time zone, and adjustment approvals.",
      "Name the payroll owner for mismatches and legal questions.",
      "Agree the sample size and the reconciliation format."
    ],
    "faqs": [
      {
        "question": "Does the support team decide who qualifies for a differential?",
        "answer": "No. It verifies the schedule, time, and approved code. The payroll owner defines the rule and decides treatment with counsel where needed."
      },
      {
        "question": "How should a boundary case be handled?",
        "answer": "Flag it with the exact times and route it to the payroll owner. Do not round it to fit the rule."
      },
      {
        "question": "What if the roster was changed after the shift?",
        "answer": "Keep the prior version and record the change with its approver. Compare actual time with the version in force at the time of work."
      },
      {
        "question": "Why sample records with no flag?",
        "answer": "To estimate whether the quiet population is clean. Reviewing only exceptions can hide a shallow check."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "Bureau of Internal Revenue",
        "url": "https://www.bir.gov.ph/",
        "note": "Official Philippine tax administration pages used for payroll filing context, not for a specific rate or amount."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk framing for collecting, using, retaining, and deleting worker records."
      },
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access, audit logging, and records protection."
      }
    ]
  },
  "philippines-performance-review-evidence": {
    "intro": "Performance reviews fail when the evidence appears for the first time in the review meeting. A support lane can maintain the evidence log, link examples to agreed expectations, and prepare the file. It should not assign the rating or decide the consequence. Those remain with the manager and the authorized owner. The file should make the conversation easier, not turn it into a trial of memory.",
    "takeaways": [
      "Agree the expectations and evidence types before the review period starts.",
      "Log dated examples as they happen, not from memory at the end.",
      "Separate the observed example from the rating and the consequence.",
      "Give the employee the evidence before the meeting and record corrections."
    ],
    "questionRows": [
      {
        "question": "Which expectation does this example relate to?",
        "usefulAnswer": "A specific expectation from the agreed role plan, with the date, the task, and the observed result.",
        "warning": "The employee is generally reliable."
      },
      {
        "question": "What is the source of the example?",
        "usefulAnswer": "A ticket, report, call record, or dated note that another reviewer can open.",
        "warning": "The manager remembers it clearly."
      },
      {
        "question": "Has the employee seen it?",
        "usefulAnswer": "A shared file or a documented conversation with the date and any response.",
        "warning": "We will show it at the review."
      },
      {
        "question": "Who decides the rating?",
        "usefulAnswer": "The manager under the approved review process, with calibration evidence and a recorded rationale.",
        "warning": "The evidence log produces the score."
      }
    ],
    "sections": [
      {
        "title": "Agree expectations at the start",
        "paragraphs": [
          "Write the expectations for the review period in observable terms. Each expectation should name the work, the standard, the evidence source, and the review owner. A statement such as handles tickets well is too broad. A statement such as closes assigned tickets within the agreed service window and records the resolution code is reviewable.",
          "Share the expectations with the employee at the start and record that they were discussed. If the work changes during the period, update the expectations and note the effective date. Reviewing someone against a standard they never saw is not a fair test, even when the standard is reasonable.",
          "Keep the role plan in one place and link each expectation to the evidence source. A plan spread across a job description, a chat message, and a slide is hard to apply consistently."
        ],
        "checks": [
          "Is each expectation observable?",
          "Was it shared and dated?"
        ]
      },
      {
        "title": "Log examples as they happen",
        "paragraphs": [
          "Create a simple evidence log with the date, expectation, example, source link, and the person who observed it. Add both positive and corrective examples. A file with only problems is not a balanced record, and a file with only praise does not help the employee improve.",
          "Keep the log short. One or two strong examples per expectation are more useful than a folder of screenshots. The purpose is to support a conversation, not to build a case. Delete duplicates and low value notes at the review, subject to the retention rule."
        ],
        "checks": [
          "Does the log have dated source links?",
          "Are positive and corrective examples included?"
        ]
      },
      {
        "title": "Separate observation from rating",
        "paragraphs": [
          "The log records what happened. The rating is a judgment made by the manager under the approved process. Keep them in separate fields so a later reader can see the evidence without assuming the conclusion. This also lets the manager change a rating after calibration without rewriting the facts.",
          "If the support lane prepares a summary, label it as a summary and keep it descriptive. Do not use words such as exceeds or below expectations unless the manager has assigned that rating and recorded the reason. The lane can organize the file, but it should not grade the person.",
          "When a summary is prepared by support, have the manager review it before it enters the file. The manager owns the judgment, and the review catches language that sounds like a rating."
        ],
        "checks": [
          "Are facts and ratings separate?",
          "Is the summary descriptive?"
        ]
      },
      {
        "title": "Give the employee the file",
        "paragraphs": [
          "Share the evidence before the review meeting so the employee can read it and prepare a response. Record the share date and the channel. If the file contains sensitive information about other people, redact it before sharing and note the redaction.",
          "A review that reveals new examples in the meeting creates defensiveness and weakens trust. The conversation is more useful when both people have the same record. If a new example appears late, add it with its date and source, then give the employee time to respond.",
          "Use the same share method for every employee in the same role so the process does not depend on who the manager is."
        ],
        "checks": [
          "Was the file shared before the meeting?",
          "Are third party details redacted?"
        ]
      },
      {
        "title": "Run calibration with evidence",
        "paragraphs": [
          "Calibration compares ratings across managers using the evidence and the agreed standards. Bring a small sample of files, not just the scores. Discuss where the same evidence produced different ratings and record the reasoning that resolved the difference.",
          "Calibration should not pressure a manager to match a distribution. Its purpose is consistency in applying the standard. Record the participants, the sample, the decisions, and any change to a rating with the reason.",
          "If calibration cannot reach agreement, record the disagreement and route it to the review owner rather than forcing a score."
        ],
        "checks": [
          "Does calibration use sample files?",
          "Are rating changes recorded with reasons?"
        ]
      },
      {
        "title": "Handle disagreement and correction",
        "paragraphs": [
          "The employee may disagree with a fact or a rating. Record the disagreement, the evidence they provide, and the response. If a fact is wrong, correct the log and note the correction. If the disagreement is about judgment, the manager records the rationale and the employee response stays with the file.",
          "Do not remove a legitimate disagreement to make the file look clean. A record that shows a considered response is stronger than one that shows no conflict. Route any question about employment consequences to the authorized owner and qualified adviser.",
          "If a factual correction changes a rating, record the old rating, the new rating, and the reason. Do not overwrite the original without a trace."
        ],
        "checks": [
          "Is disagreement recorded?",
          "Are factual corrections versioned?"
        ]
      },
      {
        "title": "Protect private and sensitive notes",
        "paragraphs": [
          "Review files can contain health, family, performance, or conduct information. Restrict access to the manager, the reviewer, and the roles that need it. Do not keep the file in a shared team folder or a chat channel.",
          "Set a retention period and a deletion owner. Remove drafts and duplicate copies after the final file is approved. A private note that is not needed for the decision should not be kept just in case, because it can create risk without improving the review."
        ],
        "checks": [
          "Is access limited to named roles?",
          "Are drafts removed after approval?"
        ]
      },
      {
        "title": "Close the cycle with a short record",
        "paragraphs": [
          "Close with the final expectations, the evidence summary, the rating and rationale, the employee response, and the next period goals. Keep it short enough that both people can use it. Record the date of the conversation and the owner of the next check in.",
          "Review the process itself after the cycle: files shared on time, evidence coverage per expectation, calibration completion, and open disagreements. Use counts and a denominator. The next cycle should fix one or two process problems, not add another form.",
          "Keep the final file and delete the working notes that are no longer needed. A clean final record is easier to defend than a folder with six versions of the same conversation."
        ],
        "checks": [
          "Does the final record include the rationale?",
          "Is one process repair identified?"
        ]
      }
    ],
    "checklist": [
      "Observable expectations shared and dated",
      "Evidence log with source links",
      "Positive and corrective examples",
      "File shared before the review meeting",
      "Calibration sample and decisions recorded",
      "Retention rule and next cycle repair"
    ],
    "callScript": [
      "Send the role expectations and the evidence types for the period.",
      "Confirm how examples will be logged and who can see the file.",
      "Agree the share date before the review meeting.",
      "Name the calibration owner and the rating authority.",
      "Set the retention rule and the next cycle review date."
    ],
    "faqs": [
      {
        "question": "Can the support team write the performance rating?",
        "answer": "No. It maintains the evidence and prepares the file. The manager assigns the rating under the approved process."
      },
      {
        "question": "How many examples are enough?",
        "answer": "Enough to show a pattern for each expectation, with dates and sources. A few strong examples are better than a large folder of duplicates."
      },
      {
        "question": "Should the employee see everything?",
        "answer": "They should see the evidence used for their review, with third party details redacted where necessary. Follow the approved policy."
      },
      {
        "question": "What if the manager disagrees with the evidence?",
        "answer": "Record the disagreement and the reason. If a fact is wrong, correct it with a version note. If it is a judgment difference, the manager records the rationale."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "World Bank: Philippines overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview",
        "note": "Country context for Philippine labour market and development conditions."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Small business guidance for hiring, payroll, and operations management."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk framing for collecting, using, retaining, and deleting worker records."
      },
      {
        "name": "Google Technical Writing",
        "url": "https://developers.google.com/tech-writing",
        "note": "Clear procedure and checklist writing for handoffs and operating guides."
      }
    ]
  },
  "philippines-replacement-handoff-plan": {
    "intro": "A replacement handoff is not a knowledge transfer meeting. It is a plan for access, open work, relationships, and evidence that survives the departure of the person who currently holds the context. The plan should exist before the seat is vacant, and it should be tested while the outgoing person can still answer questions. The plan should be usable on the first day of the vacancy, not only in a planned transition.",
    "takeaways": [
      "Name the critical work, the access, and the relationships before the vacancy.",
      "Inventory open items with a next action and a named owner.",
      "Test the replacement with real work, not a read only walkthrough.",
      "Remove the old access on schedule and keep the closure evidence."
    ],
    "questionRows": [
      {
        "question": "What breaks if this seat is empty tomorrow?",
        "usefulAnswer": "A short list of critical work, the customer or system impact, and the person who can cover each item.",
        "warning": "We will find out when it happens."
      },
      {
        "question": "Where does the access live?",
        "usefulAnswer": "An account inventory with the owner, the recovery method, the last review date, and the removal step.",
        "warning": "The password is in the team chat."
      },
      {
        "question": "Which work is undocumented?",
        "usefulAnswer": "A list of routines with a recorded walkthrough, a sample output, and the person who validated it.",
        "warning": "It is mostly common sense."
      },
      {
        "question": "How do we know the handoff worked?",
        "usefulAnswer": "The replacement completes real tasks with review, and the reviewer records acceptance and remaining gaps.",
        "warning": "They sat in on the meetings."
      }
    ],
    "sections": [
      {
        "title": "Name the critical work and the owner",
        "paragraphs": [
          "List the work that cannot wait for a replacement to learn slowly: customer commitments, payment or payroll inputs, security tasks, reporting deadlines, and relationships with key vendors. For each item, name the current owner, the backup, the consequence of a missed cycle, and the minimum service level during the transition.",
          "Rank the list by impact and frequency. A daily task with a hard deadline needs a different plan from a monthly report. The ranking tells you what to document first and what can be paused or deferred with an owner decision.",
          "Keep the list short enough to act on. A register with forty critical items is a sign that nothing has been prioritized."
        ],
        "checks": [
          "Is critical work ranked?",
          "Does each item have a backup?"
        ]
      },
      {
        "title": "Map access and account recovery",
        "paragraphs": [
          "Build an account inventory with the system, the account name, the role, the owner, the recovery method, and the last access review. Include shared mailboxes, distribution lists, vendor portals, and any local tool that holds business data. Do not record passwords in the inventory; record where the credential is stored and who can retrieve it.",
          "Test the recovery path for the accounts the replacement will need. If multi-factor authentication is tied to a personal phone number, change it before the handoff. A replacement who cannot sign in on day one is a plan failure, not a training issue.",
          "Record the date each credential was rotated or transferred. A transfer that is announced but not completed leaves the old person able to sign in."
        ],
        "checks": [
          "Does the inventory cover shared and vendor accounts?",
          "Has recovery been tested?"
        ]
      },
      {
        "title": "Inventory open items with next actions",
        "paragraphs": [
          "Create a handoff register with the item, the current state, the next action, the due date, the evidence link, and the named owner after the transition. Include escalations, pending customer requests, unfinished reports, and decisions waiting on someone else.",
          "Do not summarize an open item as in progress. That phrase hides whether the next action is with the team, the customer, or a system owner. A specific next action lets the replacement act without reconstructing the history.",
          "Record the date of the walkthrough and the version of the SOP. A routine that changes every week needs a review date, not a one time recording."
        ],
        "checks": [
          "Does every open item have a next action?",
          "Is the post transition owner named?"
        ]
      },
      {
        "title": "Record the undocumented routines",
        "paragraphs": [
          "Ask the outgoing person to walk through the tasks that are not in the SOP, especially the checks they perform before sending a report or the workaround they use when a system fails. Record the walkthrough with a sample input and a sample output.",
          "Have the replacement repeat the task while the outgoing person observes. Record the questions and the corrections in the SOP. A video without a written step is hard to search later; a written step without a sample is hard to verify. Keep both where the task warrants it."
        ],
        "checks": [
          "Are undocumented routines listed?",
          "Is there a sample and a written step?"
        ]
      },
      {
        "title": "Plan the shadow period",
        "paragraphs": [
          "Define a shadow period with a start date, an end date, and a decreasing level of review. In the first week the replacement observes and performs with a reviewer. In the second week the replacement performs with sampling. By the end, the replacement owns the routine with the normal review cadence.",
          "Name the reviewer and the acceptance criteria for each phase. Do not end the shadow period because the calendar says so. End it when the replacement can complete the work with the agreed quality and knows when to stop and escalate.",
          "If the replacement is internal, confirm that the old role is backfilled or the work is removed. A handoff that adds a second job to one person is not a plan."
        ],
        "checks": [
          "Are shadow phases dated?",
          "Are acceptance criteria written?"
        ]
      },
      {
        "title": "Test knowledge with real work",
        "paragraphs": [
          "Use live or realistic tasks to test the handoff. Include one ordinary case, one exception, and one case where the source is incomplete. Observe whether the replacement finds the right evidence, applies the rule, and escalates at the right point.",
          "Record the result and the gaps. If the replacement cannot complete an exception case, the SOP or the access is incomplete. Repair the cause before the outgoing person leaves, or assign a named owner for the remaining gap.",
          "If the test fails, extend the shadow period and record the specific gap. A calendar end date is not evidence of readiness."
        ],
        "checks": [
          "Does the test include an exception?",
          "Are gaps assigned before departure?"
        ]
      },
      {
        "title": "Communicate with customers and vendors",
        "paragraphs": [
          "Prepare the messages for customers, vendors, and internal teams that interact with the seat. State the effective date, the new contact, the escalation path, and what stays the same. Get approval from the relationship owner before sending.",
          "Update the contact lists, distribution groups, and system records at the same time. A handoff message that leaves the old name in the portal creates confusion and delays. Record the date of each update so a later question can be traced.",
          "Keep a single contact list for the transition and update it after each change. Multiple lists with different dates are a common source of missed messages."
        ],
        "checks": [
          "Are external messages approved?",
          "Are contact records updated?"
        ]
      },
      {
        "title": "Close the old access and keep the evidence",
        "paragraphs": [
          "Remove the outgoing person's access according to the offboarding rule and record the time for each system. Transfer ownership of files, mailboxes, and calendars before removal. Check that the replacement has the access they need and that no shared credential remains unchanged.",
          "Close the handoff with the register, the test results, the access changes, and the remaining gaps. Set a review date after thirty days to confirm the replacement is stable. The record should show that the transition was completed, not merely announced.",
          "Record the reviewer and the date of the thirty day check. A closure note without a follow up owner is only a hope."
        ],
        "checks": [
          "Is removal time recorded per system?",
          "Is there a thirty day review?"
        ]
      }
    ],
    "checklist": [
      "Critical work ranked with backups",
      "Account inventory and recovery tested",
      "Open items with next actions and owners",
      "Undocumented routines recorded with samples",
      "Shadow period with acceptance criteria",
      "Access removal time and thirty day review"
    ],
    "callScript": [
      "Send the critical work list, backups, and service levels for the transition.",
      "Share the account inventory and the recovery test results.",
      "Confirm the open item register and the post transition owners.",
      "Agree the shadow period, reviewer, and acceptance criteria.",
      "Set the access removal date and the thirty day review."
    ],
    "faqs": [
      {
        "question": "When should a replacement plan be written?",
        "answer": "Before the seat is vacant. A plan written after departure cannot capture undocumented routines or test the access path with the outgoing person."
      },
      {
        "question": "How long should the shadow period be?",
        "answer": "Long enough for the replacement to complete ordinary and exception work with review. The calendar is less important than the acceptance criteria."
      },
      {
        "question": "What if the departure is sudden?",
        "answer": "Use the existing account inventory and open item register, assign an interim owner, and document gaps as they are discovered."
      },
      {
        "question": "Who approves external communication?",
        "answer": "The relationship owner or the authorized manager. The support lane can draft and track the message."
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "Philippines operations support",
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control catalog for access, audit logging, and records protection."
      },
      {
        "name": "CISA Zero Trust Maturity Model",
        "url": "https://www.cisa.gov/zero-trust-maturity-model",
        "note": "Identity, device, and access maturity model for distributed work."
      },
      {
        "name": "NARA Records Management Policy",
        "url": "https://www.archives.gov/records-mgmt/policy",
        "note": "Records lifecycle, retention, and disposition concepts used as a comparison for record keeping."
      },
      {
        "name": "Google Technical Writing",
        "url": "https://developers.google.com/tech-writing",
        "note": "Clear procedure and checklist writing for handoffs and operating guides."
      },
      {
        "name": "International Labour Organization: Decent work and the 2030 agenda",
        "url": "https://www.ilo.org/topics-and-sectors/decent-work-and-2030-agenda-sustainable-development",
        "note": "International labour context for decent work, employment conditions, and workforce planning."
      },
      {
        "name": "SBA: Manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Small business guidance for hiring, payroll, and operations management."
      }
    ]
  }
} as const;
