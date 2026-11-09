// 2026-11-08 batch.
export const nov08BlogPosts = [
  {
    "slug": "turn-recurring-workarounds-into-a-reviewed-exception-register",
    "title": "Turn Recurring Workarounds into a Reviewed Exception Register",
    "excerpt": "Give the shortcuts your team already uses a name, an owner, a risk note, and an expiry date so they stop being invisible habits.",
    "minutes": 5,
    "publishedAt": "2026-11-08",
    "heroImage": "/daily08/outsourcedphilippines/turn-recurring-workarounds-into-a-reviewed-exception-register.webp"
  },
  {
    "slug": "write-a-client-facing-capacity-note-before-adding-another-queue",
    "title": "Write a Client-Facing Capacity Note Before Adding Another Queue",
    "excerpt": "Use arrivals, completions, handle time, and a named trade-off to show a client what the team can absorb before another queue lands.",
    "minutes": 6,
    "publishedAt": "2026-11-08",
    "heroImage": "/daily08/outsourcedphilippines/write-a-client-facing-capacity-note-before-adding-another-queue.webp"
  },
  {
    "slug": "run-a-weekly-queue-review-that-ends-with-one-decision",
    "title": "Run a Weekly Queue Review That Ends With One Decision",
    "excerpt": "Replace the status meeting with a short review built around one queue, three numbers, the adverse cases, and a single owner for the next action.",
    "minutes": 5,
    "publishedAt": "2026-11-08",
    "heroImage": "/daily08/outsourcedphilippines/run-a-weekly-queue-review-that-ends-with-one-decision.webp"
  },
  {
    "slug": "retire-a-stale-report-without-breaking-a-client-dependency",
    "title": "Retire a Stale Report Without Breaking a Client Dependency",
    "excerpt": "Trace who reads a report, which fields drive a decision, and how to replace it before removing a recurring deliverable.",
    "minutes": 5,
    "publishedAt": "2026-11-08",
    "heroImage": "/daily08/outsourcedphilippines/retire-a-stale-report-without-breaking-a-client-dependency.webp"
  },
  {
    "slug": "set-a-first-week-output-target-for-a-new-philippines-specialist",
    "title": "Set a First-Week Output Target for a New Philippines Specialist",
    "excerpt": "Give a new specialist one complete, reviewable piece of work in week one, with a sample, a learning allowance, and a second target built from evidence.",
    "minutes": 6,
    "publishedAt": "2026-11-08",
    "heroImage": "/daily08/outsourcedphilippines/set-a-first-week-output-target-for-a-new-philippines-specialist.webp"
  }
];

export const nov08BlogBasics = {
  "turn-recurring-workarounds-into-a-reviewed-exception-register": {
    "intro": "Every Philippines-based team develops small workarounds that never appear in the process document. A coordinator copies a value from an old spreadsheet, an agent asks a supervisor to approve a refund outside the portal, and a report is rebuilt by hand because the export is unreliable. These shortcuts often keep the work moving, yet nobody records why they exist or when they should end. An exception register gives those choices a name, an owner, and a review date so the workaround stops being an invisible habit.",
    "sections": [
      {
        "title": "Start with the workarounds people already use",
        "paragraphs": [
          "Ask the team to list the steps they skip, duplicate, or complete outside the standard tool. Do not ask for a confession; ask for a map of where the official process creates friction. Run the question in a short meeting and let people add items privately afterward, because some workarounds involve a client instruction that nobody wants to raise in public. The list will be longer than expected and more useful than another policy reminder.",
          "Group the items by cause: missing access, unclear ownership, a slow approval, a broken export, or a rule that no longer matches the work. A workaround caused by a missing permission needs an access fix, while one caused by an ambiguous rule needs a decision. Keep the grouping simple enough that a coordinator can apply it without a workshop. The pattern matters more than the individual complaint, because one cause often explains several shortcuts."
        ],
        "checks": []
      },
      {
        "title": "Record the exception in one place",
        "paragraphs": [
          "Create one register with columns for the workaround, the reason, the risk, the owner, the approval, and the expiry date. Put it where the team already works, such as the operations tracker or a shared sheet linked from the process page. Keep each entry short enough to read during a handover and specific enough that a new coordinator can act on it. A register hidden in a personal drive is only a diary.",
          "Write the risk in plain language instead of a severity score nobody calibrated. A workaround that bypasses a payment approval is different from one that copies a formatting step, and the register should show that difference. Name the person who accepted the risk, not just the person who performs the workaround. When an auditor asks who approved the deviation, the register should answer without a search through chat."
        ],
        "checks": []
      },
      {
        "title": "Separate a temporary workaround from a policy change",
        "paragraphs": [
          "A temporary fix should carry an end condition, such as a tool repair, a new hire, or a client decision. A permanent change should go through the normal scope and approval path, with the process document updated. Mixing the two lets a temporary fix quietly become the standard, and the team later cannot explain why the official process and the real process disagree. Label each entry as temporary or proposed change so the distinction stays visible.",
          "For a proposed change, write what would be different and who would approve it. Include the effect on the client, the controls, and the training material. A change that removes a check needs a replacement control, not just a note that the check was annoying. The register can hold the proposal, but the decision belongs to the named owner and should be recorded in the same entry."
        ],
        "checks": []
      },
      {
        "title": "Set an expiry date and an owner",
        "paragraphs": [
          "Every temporary exception should expire on a calendar date, not on a vague condition that nobody tracks. Set the date when the entry is created and put a reminder on the owner's calendar before it lapses. The owner confirms whether the condition still exists, extends the entry with a reason, or closes it with evidence. An exception without an expiry date becomes a permanent shadow process.",
          "The owner should be close enough to the work to know whether the workaround is still needed. A manager who never sees the queue will extend the entry by default, while the coordinator who performs it knows when the underlying problem disappears. Give the owner authority to close the entry and require a short note explaining the close. That note is the evidence that the fix actually landed."
        ],
        "checks": []
      },
      {
        "title": "Review the register for patterns",
        "paragraphs": [
          "Review the open entries on a fixed cadence, such as the first operations meeting of each month. Count how many share the same cause, how long they have been open, and which ones carry client-facing risk. A cluster of exceptions around one approval step usually points to a design problem rather than a discipline problem. The review should end with one process change, not a longer list of warnings.",
          "Bring one closed exception to each review and ask what prevented the same workaround from returning. If the fix was a reminder or a training note, the team may be treating a system problem as a memory problem. If the fix changed a permission or a form, the exception should stay closed. Compare the result with the original risk note so the review tests the decision, not just the activity."
        ],
        "checks": []
      },
      {
        "title": "Feed the findings back into the process",
        "paragraphs": [
          "Update the process document, the onboarding pack, and the training material when an exception becomes a real change. The team should not have to read the register to learn the current method. Add a short note to the process page that explains the change and the reason behind it. A procedure that contradicts the register creates the next workaround before the old one is closed.",
          "Keep the register after the batch is closed, because the history shows how the operation actually adapted. Review it when a new client, tool, or shift pattern arrives, since old exceptions often return under new conditions. The goal is not zero exceptions, because real work will always produce some. The goal is a visible, owned, and temporary deviation instead of an invisible habit that outlives its reason."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, business process guidance",
        "url": "https://www.sba.gov/"
      },
      {
        "name": "International Organization for Standardization, quality management",
        "url": "https://www.iso.org/standards.html"
      },
      {
        "name": "International Labour Organization, work organization",
        "url": "https://www.ilo.org/"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "write-a-client-facing-capacity-note-before-adding-another-queue": {
    "intro": "A client often adds a queue with a friendly message and an assumption that the team has spare capacity. The specialist may already be covering a leave, a new report, and an approval backlog that nobody counted. Without a shared note, the request becomes a test of goodwill instead of a scheduling decision. A short capacity note gives the client the numbers, the constraint, and two workable options before the work is accepted.",
    "sections": [
      {
        "title": "Measure arrivals and completions before writing",
        "paragraphs": [
          "Export the queue for two normal weeks and count what arrived each day against what the team completed. Use the same definition of done for both numbers so the comparison is honest. A team that receives more than it finishes has a trend, not a bad week, and the note should show that trend. Note any launch, outage, or holiday that makes the period unusual.",
          "Break the counts down by item type, because a total hides the difficult work. Ten password resets and ten reconciliation exceptions consume very different amounts of time. Include the share of items that required rework or a second review, since those hours reduce the capacity available for new arrivals. The client does not need every field, but the note should show the mix behind the headline number."
        ],
        "checks": []
      },
      {
        "title": "Describe capacity in the client's units",
        "paragraphs": [
          "Translate the team's available hours into the client's own units, such as tickets, invoices, or reports. State the assumption behind the conversion, including the average handle time and the share of time reserved for meetings and checks. If the team can complete forty invoices in a normal week, say so and show the calculation. A client who sees the unit cost can compare a request with the existing load.",
          "Avoid presenting a single utilization percentage as proof of capacity. A team at high utilization may still have room for a small recurring task, or it may be one absence away from missing every deadline. Show the buffer you have kept for leave, breaks, training, and unexpected rework. The buffer is part of the plan, not a sign that the team is underused."
        ],
        "checks": []
      },
      {
        "title": "Name the trade-off in plain language",
        "paragraphs": [
          "Every new recurring task replaces something unless the client adds capacity. Write the sentence directly: adding this queue within the current hours will delay the weekly report by one day. A trade-off stated in advance is a decision, while the same trade-off discovered later looks like a failure. Keep the sentence specific enough that the client can accept, reject, or change it.",
          "Do not hide the trade-off inside a list of risks with equal weight. Lead with the one existing output that will move, and explain why the two tasks compete for the same hours. If the new queue is genuinely more important, the client can choose to pause the other work. That is a better outcome than a quiet backlog that nobody owns."
        ],
        "checks": []
      },
      {
        "title": "Give the client two realistic options",
        "paragraphs": [
          "Offer one option that fits within current capacity and one that requires a change. The first might be a smaller scope, a slower turnaround, or a temporary pause on a lower-value report. The second might be additional hours, a new specialist, or a tool change that removes manual work. Both options should be operable, not a real choice plus a warning.",
          "Put a price or a date beside each option, even if the number is an estimate with a stated range. A vague option forces the client to guess, and guessing usually produces the largest request. Give a recommendation with the reason you prefer it. Name the assumption that would change the recommendation, so the client knows what to watch. The note should help the client decide, not simply announce that the team is busy."
        ],
        "checks": []
      },
      {
        "title": "Put the note on a fixed cadence",
        "paragraphs": [
          "Send the capacity note on the same day each month so the client learns to expect it. Include the current queue, the completed volume, the open exceptions, and the next known constraint. A regular note is easier to trust than a warning that only appears when the team is already behind. It also gives both sides a shared history for the renewal conversation.",
          "Keep the note short enough to read in a few minutes. One page with three numbers and two options is usually enough. Save each version in the account folder so a new manager can see how the workload changed. Add the date and the author at the top so the current version is obvious. The cadence matters more than the format, because a regular habit prevents the surprise request from arriving without context."
        ],
        "checks": []
      },
      {
        "title": "Keep the note separate from the sales pitch",
        "paragraphs": [
          "A capacity note is an operating document, not a proposal for more services. Write it in plain language, avoid promotional claims, and do not use a client request as an excuse to upsell. The credibility of the note depends on the client believing the numbers are for planning rather than persuasion. If the answer is that capacity is available, say that clearly as well.",
          "When the client does need more capacity, hand the commercial conversation to the account owner after the operating facts are agreed. Separating the two conversations keeps the specialist out of a negotiation they did not choose. It also makes the eventual change easier to implement, because the scope and the trade-off were settled before the price was discussed. The client sees one honest operating picture and one clear commercial next step."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Bureau of Labor Statistics, productivity and hours data",
        "url": "https://www.bls.gov/productivity/"
      },
      {
        "name": "Project Management Institute, capacity planning resources",
        "url": "https://www.pmi.org/"
      },
      {
        "name": "International Labour Organization, working time",
        "url": "https://www.ilo.org/"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "run-a-weekly-queue-review-that-ends-with-one-decision": {
    "intro": "A weekly queue review can easily become a tour of everything the team touched. People report activity, someone asks about a client, and the meeting ends without changing the work. The fix is not a longer agenda but a narrower one. A useful review picks one queue, reads the evidence that matters, and leaves with one named decision and one owner.",
    "sections": [
      {
        "title": "Choose the queue and the decision first",
        "paragraphs": [
          "Write the queue and the decision at the top of the agenda before anyone opens a dashboard. For example, the decision may be whether to change the approval step for refunds over a set amount. A decision that broadens into a general discussion needs to be split into a smaller question. The meeting should not start until the question is specific enough to answer.",
          "Rotate the queue each week if the team owns several lanes, but keep one decision per session. A review that tries to fix three queues at once usually produces three vague actions. The rotation also gives each lane a regular slot instead of attention only when something breaks. Publish the schedule so the team knows which queue is coming. Anyone who owns a lane should prepare the three numbers before their turn."
        ],
        "checks": []
      },
      {
        "title": "Bring three numbers, not a dashboard",
        "paragraphs": [
          "Choose three measures that describe the queue: arrivals, completions, and the age of the oldest open item. Add one quality measure only if it changes the decision, such as the rework count for the week. A dashboard with forty tiles invites people to defend a metric instead of solving a problem. The three numbers should be defined the same way every week.",
          "Write the numbers on the agenda before the meeting and note the source and the extraction time. If two systems disagree, show both and name the controlling source. Do not spend the meeting reconciling data that should have been reconciled beforehand. Send the agenda early enough for people to check a surprising figure. The participants should arrive with the same picture, not build it together under time pressure."
        ],
        "checks": []
      },
      {
        "title": "Read the exceptions before the averages",
        "paragraphs": [
          "Pull the items that broke the pattern: the oldest ticket, the item reopened twice, the request that arrived without an owner. Read two or three aloud and ask what the queue would need to prevent a repeat. Exceptions often reveal a missing field, an unclear rule, or a handoff that adds a day. The average can look stable while the same small group of items keeps failing.",
          "Keep the review respectful of the people who handled the cases. The question is what the system allowed, not who made the mistake. A coordinator who fears blame will describe the case in the most favorable way and hide the detail the review needs. The meeting should make it safe to say that a request was confusing or a tool did not work."
        ],
        "checks": []
      },
      {
        "title": "Name one owner for the decision",
        "paragraphs": [
          "Write the decision as an action with one owner and one date. If the decision is to keep the current process, say so and record why. A decision to change something needs the specific change, the person who will make it, and the evidence that will show it worked. State what would count as a failed change so the follow-up has a test. Multiple owners usually means no owner.",
          "Give the owner enough authority to act without another meeting. If the change needs a client approval, name the person who will ask and the date of the ask. If it needs a tool change, name the person who can make it and the access they need. Record any dependency that could block the action before the date arrives. The review is only useful when the next step is possible before the group meets again."
        ],
        "checks": []
      },
      {
        "title": "Write the decision where the team works",
        "paragraphs": [
          "Put the decision in the queue tracker or the process page, not only in the meeting notes. The person doing the work should be able to see the current rule without searching a calendar invite. Add the date and the owner so a later reader can tell whether the rule is current. A decision that lives only in a meeting is a decision the night shift never receives.",
          "Link the decision to the item or the process step it affects. If the rule changes, update the related training note in the same pass. A short change log beside the queue is enough, as long as it is visible and maintained. Add the previous rule as well, so a reviewer can see what changed. The team should not have to reconstruct the rule from a thread of messages."
        ],
        "checks": []
      },
      {
        "title": "Close the loop at the next review",
        "paragraphs": [
          "Start the next review by reading the previous decision and checking whether it was implemented. If it was not, ask what blocked it instead of adding a new action. If it was implemented, look at the same three numbers and see whether anything moved. Give the change at least one full cycle before judging it. The follow-up is what separates a review from a recurring report.",
          "Retire decisions that no longer apply and record why they were retired. A growing list of stale rules is as confusing as no rules at all. Keep the review short, keep the decision small, and keep the owner visible. Note the date of the last check so a new manager can see the record is alive. Over several weeks the team builds a record of changes that actually reached the work."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Bureau of Labor Statistics, productivity measures",
        "url": "https://www.bls.gov/productivity/"
      },
      {
        "name": "Project Management Institute, project controls",
        "url": "https://www.pmi.org/"
      },
      {
        "name": "International Organization for Standardization, quality management",
        "url": "https://www.iso.org/standards.html"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "retire-a-stale-report-without-breaking-a-client-dependency": {
    "intro": "Most operations teams inherit at least one report that nobody remembers commissioning. It is rebuilt every week, sent to a distribution list, and opened by almost no one. Removing it outright can still cause a shock because a client or an auditor may rely on one field. The safe path is to trace the dependency, replace what matters, and retire the rest with a clear notice.",
    "sections": [
      {
        "title": "Find out who reads the report and why",
        "paragraphs": [
          "Start with the distribution list and ask each recipient what decision the report supports. Some will name a specific check, others will admit they only glance at the subject line. Ask how they would notice if the report stopped arriving, because that question reveals the real dependency. A report with no reader and no decision is a candidate for retirement.",
          "Check the sent folder and the shared drive for replies, forwards, and saved copies. A report that is forwarded to a client contact may matter even if the internal recipient never opens it. Look for the questions people ask after receiving it, since those questions describe the job the report is doing. The goal is to find the use, not to defend the format."
        ],
        "checks": []
      },
      {
        "title": "Trace every field to a decision",
        "paragraphs": [
          "List the columns and mark each one as used, occasionally used, or unexplained. For each used field, write the decision it supports and the action that follows if the value changes. A field that has never triggered an action is a candidate for removal even if someone likes seeing it. The exercise usually reduces a long report to a short set of measures.",
          "Ask the person who builds the report where each value comes from and how often the source changes. A field that is copied from a stale export may be worse than no field at all, because it looks authoritative. Record the source and the refresh time beside the definition. Ask what happens when the source is late, because a report that silently uses yesterday's data can mislead a live decision. That record becomes the specification for the replacement."
        ],
        "checks": []
      },
      {
        "title": "Build a replacement before the removal",
        "paragraphs": [
          "Design the smaller report around the decisions that survived the trace. Keep the same definitions where they still make sense, and change the format only when the change helps the reader act. Send a draft to the people who use it and ask them to complete one real task with it. A replacement that works in a test is safer than a promise that it will work later.",
          "If the old report contains a compliance or audit field, confirm the retention requirement before changing anything. The replacement may need to preserve the same evidence, even if the layout is different. Store the old versions according to the retention rule and note where they live. Ask the compliance owner to confirm the replacement in writing before the change. The point is to remove wasted effort, not to remove the record."
        ],
        "checks": []
      },
      {
        "title": "Run the old and new reports in parallel",
        "paragraphs": [
          "Run both versions for one full cycle and compare the numbers. Investigate every difference before declaring the replacement correct. A small variance may come from a different cut-off time, while a large one may reveal a broken formula. Write down the explanation for each difference and keep it with the test. The parallel run is the evidence that the new report can be trusted.",
          "Use the parallel period to train the readers on the new format. Show them where the decision fields sit and what changed. Ask for one improvement before the old version is retired, because a small adjustment now is cheaper than a redesign later. The parallel run should end on a planned date, not drift until everyone forgets which version is official."
        ],
        "checks": []
      },
      {
        "title": "Announce the change with a reason and a date",
        "paragraphs": [
          "Tell every recipient what is being retired, what replaces it, and when the change takes effect. Give the reason in plain language: the report consumed six hours a week and only one field was used. Include a contact for questions and a short description of where the replacement lives. State the date the old link will stop working so nobody is surprised. A notice sent after the change is not a notice.",
          "Send the announcement twice, once at the start of the parallel run and once before the final switch. Put the date on the team calendar and update the process page at the same time. If a recipient objects, ask which decision the old report supports and resolve that specific need. The conversation is easier when the evidence is already on the table."
        ],
        "checks": []
      },
      {
        "title": "Archive the old version instead of deleting it",
        "paragraphs": [
          "Keep the final version, its definitions, and the note explaining why it was retired. Store them where the team keeps operational records and restrict editing so the history cannot be changed. An archived report is useful when someone asks how a number was calculated in a prior period. Add a one-page note that names the owner and the reason for retirement. Deleting it creates a question that nobody can answer.",
          "Review the archive when the retention period ends and dispose of what is no longer required. Follow the client contract and the applicable privacy rule rather than keeping everything forever. Record the disposal decision with a date and an owner. Ask the client to confirm the retention expectation at renewal. The archive should be a controlled record, not another folder that grows without review."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. National Archives, records management guidance",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "name": "International Organization for Standardization, information and documentation",
        "url": "https://www.iso.org/standards.html"
      },
      {
        "name": "U.S. Small Business Administration, recordkeeping",
        "url": "https://www.sba.gov/"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "set-a-first-week-output-target-for-a-new-philippines-specialist": {
    "intro": "A new specialist often spends the first week in orientation, watching recordings and reading documents. By Friday the manager is not sure what the person can do, and the person is not sure what good work looks like. A first-week output target replaces that uncertainty with one small, complete task. The target is not a productivity test; it is a way to test the brief, the access, and the review process at the same time.",
    "sections": [
      {
        "title": "Define a small, complete piece of work",
        "paragraphs": [
          "Choose a task that has a clear start, a visible finish, and a real consumer. Preparing one weekly summary, reconciling one small account, or clearing one batch of standard requests are good candidates. Avoid a fragment that ends with someone else finishing the job, because the new specialist will not see the result. The task should be small enough to finish in the first week with time for review.",
          "Write the finish line in one sentence and attach an example of acceptable output. The example can be a redacted prior deliverable with a note explaining what made it good. A new specialist should be able to compare their work with the example before asking for help. Keep the example in the same folder as the brief so it is easy to find. The definition and the example together replace a long verbal explanation."
        ],
        "checks": []
      },
      {
        "title": "Choose a target the first week can prove",
        "paragraphs": [
          "Set a target for one complete unit, not for a full workload. The question is whether the person can produce an acceptable piece of work with the available instructions, not whether they can match an experienced colleague's pace. A completed and reviewed unit proves more than a week of shadowing. It also gives the manager a concrete basis for the next assignment.",
          "Include the review time in the plan, because the first output will need feedback. If the reviewer is unavailable until Friday, the target should finish earlier in the week. A target that depends on a last-minute review teaches the new specialist to wait rather than to ask. Confirm that the reviewer will be available and name a backup. Put the review slot on the calendar before the week begins."
        ],
        "checks": []
      },
      {
        "title": "Pair the target with a review sample",
        "paragraphs": [
          "Review the first output against the written definition and the example, not against personal preference. Note what met the standard, what needs correction, and which instruction caused confusion. Give the feedback in writing so the specialist can revisit it during the next task. Separate a defect from a preference, and say which one the comment is. A verbal comment disappears as soon as the call ends.",
          "Ask the specialist to mark the steps where they were unsure. Those marks are more useful than a general question about how the week went, because they point to the exact instruction that failed. Fix the instruction before the next task instead of asking the person to remember harder. The first week is a test of the material as much as of the new hire."
        ],
        "checks": []
      },
      {
        "title": "Separate learning time from production time",
        "paragraphs": [
          "Reserve part of each day for training, questions, and access setup, and state that the reserve is expected. A new specialist who is measured on output from hour one will skip the reading and guess. The first-week target should be achievable within the remaining production time. If it is not, the target is too large or the learning allowance is too small.",
          "Track the learning time so the second week can be planned with real numbers. If access took two days to arrive, the delay is an onboarding defect, not a performance problem. Record it and fix the request path for the next hire. Include the delay in the weekly note to the client when it affects a deadline. The same record helps the manager explain why a target moved without blaming the new person."
        ],
        "checks": []
      },
      {
        "title": "Use the first week to test the brief",
        "paragraphs": [
          "The role brief should tell the specialist what to do, what to check, and who to ask. Test it by seeing whether the person can complete the task without asking a question the brief should have answered. Every question that falls outside the brief is a gap to close. Sort the gaps into missing information, missing access, and missing practice. Update the brief before the next hire uses it.",
          "Ask the specialist which instruction was hardest to follow and which tool felt unclear. A newcomer notices friction that the experienced team has stopped seeing. Write the answers into the onboarding notes while they are fresh. Ask a second new hire to read the revised brief and mark anything still unclear. The first week produces two outputs: the task and a better brief."
        ],
        "checks": []
      },
      {
        "title": "Set the second-week target from evidence",
        "paragraphs": [
          "Use the first review to choose the next target. If the work met the standard, add a second unit or a slightly broader task. If it did not, repeat the same task with the corrected instruction and a shorter review. The progression should follow the evidence rather than a fixed calendar. Tell the specialist what the next target will test so the week has a purpose.",
          "Keep the targets small enough that a bad week does not erase the plan. A new specialist who completes two reviewed units in two weeks is more useful than one who spends the month in orientation. The manager also learns what support the role needs before the client sees a missed deadline. That early evidence is the real return on the first-week target."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Department of Labor, apprenticeship and training resources",
        "url": "https://www.dol.gov/agencies/eta/apprenticeship"
      },
      {
        "name": "International Labour Organization, skills and lifelong learning",
        "url": "https://www.ilo.org/"
      },
      {
        "name": "Association for Talent Development, onboarding resources",
        "url": "https://www.td.org/"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  }
};
