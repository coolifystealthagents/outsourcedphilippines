// 2026-11-11 batch.
export const nov11BlogPosts = [
  {
    "slug": "run-a-weekly-capacity-check-before-adding-client-work",
    "title": "Run a Weekly Capacity Check Before Adding Client Work",
    "excerpt": "Measure committed hours, separate interrupt work from planned work, and set a written trigger for adding capacity before the team promises another delivery date.",
    "minutes": 5,
    "publishedAt": "2026-11-11",
    "heroImage": "/daily10/outsourcedphilippines/run-a-weekly-capacity-check-before-adding-client-work.webp"
  },
  {
    "slug": "write-a-task-handoff-note-that-survives-a-shift-change",
    "title": "Write a Task Handoff Note That Survives a Shift Change",
    "excerpt": "Record the state of the task, the next action, the open questions, and the parts that must not change so the next person can continue without a call.",
    "minutes": 5,
    "publishedAt": "2026-11-11",
    "heroImage": "/daily10/outsourcedphilippines/write-a-task-handoff-note-that-survives-a-shift-change.webp"
  },
  {
    "slug": "set-a-two-person-rule-for-sensitive-client-requests",
    "title": "Set a Two-Person Rule for Sensitive Client Requests",
    "excerpt": "Define which requests need a second person, separate the preparer from the approver, and keep the evidence beside the decision instead of in a chat thread.",
    "minutes": 6,
    "publishedAt": "2026-11-11",
    "heroImage": "/daily10/outsourcedphilippines/set-a-two-person-rule-for-sensitive-client-requests.webp"
  },
  {
    "slug": "keep-a-decision-log-for-role-scope-changes",
    "title": "Keep a Decision Log for Role Scope Changes",
    "excerpt": "Write down each scope change in the client's words, name the approver, and link the decision to the task inventory so the role does not drift by accident.",
    "minutes": 5,
    "publishedAt": "2026-11-11",
    "heroImage": "/daily10/outsourcedphilippines/keep-a-decision-log-for-role-scope-changes.webp"
  },
  {
    "slug": "test-a-backup-contact-path-before-an-outage",
    "title": "Test a Backup Contact Path Before an Outage",
    "excerpt": "List the failures the contact path must survive, choose channels that fail differently, and rehearse the switch while the primary channel still works.",
    "minutes": 5,
    "publishedAt": "2026-11-11",
    "heroImage": "/daily10/outsourcedphilippines/test-a-backup-contact-path-before-an-outage.webp"
  }
];

export const nov11BlogBasics = {
  "run-a-weekly-capacity-check-before-adding-client-work": {
    "intro": "A support lane can look healthy in a weekly status call and still be one client request away from missed deadlines. The warning signs usually appear before the failure: a calendar full of recurring tasks, a backlog of small requests, and a coordinator who has stopped writing things down. A short weekly capacity check turns those signals into a decision about scope, sequencing, or staffing before the team promises a date it cannot hold.",
    "sections": [
      {
        "title": "Measure committed hours before pipeline",
        "paragraphs": [
          "Start with the hours the team has already promised, not the hours it hopes to sell. List recurring reports, standing meetings, ticket shifts, and every deliverable with a fixed date. Convert each item into a weekly estimate and add a realistic allowance for review and rework. The total is the committed base, and it should be visible to the account owner before new work enters the queue. A team that cannot state this number is guessing about its own headroom.",
          "Include the hidden work that never appears on a project plan. Inbox triage, internal questions, and corrections to completed tasks consume real time even when they leave no artifact. Ask each person to keep a simple log for one week and compare it with the formal task list. The gap between the two is the overhead the capacity check has been missing. Review the log together rather than treating it as a performance measure."
        ],
        "checks": []
      },
      {
        "title": "Separate interrupt work from planned work",
        "paragraphs": [
          "Interrupt work arrives without a scheduled slot, and it is the easiest thing to underestimate. Count the requests that came through chat during the past week, including the ones that took under ten minutes. A lane with forty small interruptions a week loses more capacity than a single large project suggests. Keep the count beside the planned hours so the pattern is visible rather than remembered.",
          "Give interrupts a budget instead of letting them consume the whole day. Reserve a block of time for them and route everything else into the normal queue. When the block fills early, the team has evidence that demand has changed. This is more useful than asking people to work faster, because speed does not create additional hours. Review the budget at the same time each week."
        ],
        "checks": []
      },
      {
        "title": "Set a trigger for adding capacity",
        "paragraphs": [
          "Write the trigger as a condition, not a feeling. For example, the team adds help when committed hours plus interrupt hours stay above a stated share of available time for three weeks. The exact share should reflect the work, the review load, and the amount of slack the account needs. A number agreed in advance keeps the conversation about evidence instead of loyalty or optimism.",
          "Name the first response before hiring. The team might pause new requests, move a recurring report to a different day, or split one lane into two. Each option has a cost, and the account owner should choose among them knowingly. Hiring takes time, so a trigger that only produces a job description arrives too late. Record which response was chosen and when it took effect."
        ],
        "checks": []
      },
      {
        "title": "Review the check with the account owner",
        "paragraphs": [
          "Bring three things to the weekly review: committed hours, interrupt hours, and the work that slipped. Keep the conversation short and compare the numbers with the previous two weeks. Ask whether any client promise depends on capacity that does not exist. The owner can then adjust scope or timing while the choice is still cheap.",
          "Do not turn the review into a defense of individual performance. The purpose is to expose a mismatch between demand and time, not to rank people. If a task consistently takes longer than estimated, treat that as information about the task. Update the estimate and note why it changed. The next check becomes more accurate because the team corrected the model."
        ],
        "checks": []
      },
      {
        "title": "Keep a short decision record",
        "paragraphs": [
          "Record the date, the capacity reading, the decision, and the person who approved it. Write one sentence about what happens if the decision fails, such as which client date would move first. This record prevents a later argument about what the team knew. It also gives a new manager a quick history of why the lane is shaped the way it is.",
          "Review old decisions when the volume changes in either direction. A temporary pause may need to end, and an added person may need a different task mix. Close each entry with the outcome you observed. A decision log with outcomes is more useful than a list of intentions. Keep it in the same folder as the task inventory so both stay current."
        ],
        "checks": []
      },
      {
        "title": "Define what full capacity means for the lane",
        "paragraphs": [
          "Full capacity is not the same as a full calendar. Some of the week must remain available for review, questions, and the unexpected request that arrives on Friday. Write the working definition as a share of time reserved for planned work, review, and buffer. Then use the same definition each week so the numbers remain comparable. A definition that changes with the pressure makes the check useless.",
          "Review the definition with the people doing the work. They notice the small delays that a manager's spreadsheet misses, such as a tool that takes minutes to load or a client who replies late. Ask which parts of the week feel compressed and compare that with the numbers. Adjust the definition only when the work itself has changed. Record the change and the reason."
        ],
        "checks": []
      },
      {
        "title": "Show the trend on one page",
        "paragraphs": [
          "Track the capacity reading on a simple line chart with committed hours, interrupt hours, and available hours. A chart makes a three-week pattern visible without a long explanation. Mark the decisions on the same timeline so a later reader can see what changed. Keep the chart in the weekly folder rather than a personal notebook.",
          "Add a one-line note for anything unusual, such as a holiday, a client launch, or a temporary absence. Without the note, a spike looks like a permanent trend. At the end of the quarter, review the chart and choose one change to test. The chart is useful when it leads to a decision, not when it only records activity."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Bureau of Labor Statistics, productivity and costs",
        "url": "https://www.bls.gov/lpc/"
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "Chartered Institute of Personnel and Development, workload planning",
        "url": "https://www.cipd.org/en/knowledge/"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "write-a-task-handoff-note-that-survives-a-shift-change": {
    "intro": "A handoff fails when the next person has to reconstruct the task from memory, a chat thread, and a half-finished file. The note does not need to be long, but it does need to answer four questions: where the task stands, what happens next, what is still unresolved, and what must not be changed. A stable format makes those answers findable at the end of a shift.",
    "sections": [
      {
        "title": "Name the state of the task first",
        "paragraphs": [
          "Open with one sentence that says whether the task is waiting, in progress, blocked, or ready for review. Avoid labels that mean different things to different people, such as open or pending. If the task is blocked, name the person or system that must respond. The reader should know within a few seconds whether action is possible now.",
          "Add the date and time of the last update, including the time zone. A note that says Friday morning is ambiguous when the team spans several regions. Use a consistent format and keep it at the top of the note. This one detail prevents the next shift from acting on a stale status. It also shows how long a blocked item has been waiting."
        ],
        "checks": []
      },
      {
        "title": "Record the next action and the owner",
        "paragraphs": [
          "State the next action as a verb with a clear finish line. Send the revised file to the client for approval is stronger than follow up on the file. Name one owner, even when several people will contribute. If the action depends on a meeting, note the date and the decision the meeting must produce. The next person should not have to infer the purpose.",
          "Include the location of the working file and the version that is current. Link to the folder rather than describing it, and mark drafts that must not be sent. If a client-facing version exists, say where it lives and who released it. File names drift quickly, so a link is safer than a title. Check that the link opens before ending the shift."
        ],
        "checks": []
      },
      {
        "title": "List the open questions and the evidence",
        "paragraphs": [
          "Write each open question with the answer received so far and the source of that answer. A question without evidence invites the next person to ask it again. If the client gave a verbal answer, record who said it and when. If the answer came from a document, link to the section rather than the whole file.",
          "Separate confirmed facts from working assumptions. An assumption can guide the next step, but it should not be repeated to the client as settled. Mark the assumption and the date it should be checked. This distinction protects the team when a detail changes. It also helps a reviewer see where the risk sits."
        ],
        "checks": []
      },
      {
        "title": "Mark what must not be changed",
        "paragraphs": [
          "Some tasks include a fixed price, a legal phrase, an approved greeting, or a system setting that only one person may alter. List those constraints explicitly in the handoff. Do not assume the next person knows which parts are sensitive. A short do-not-change list is easier to follow than a long explanation of history.",
          "Include the approval needed to change a constraint and the person who can grant it. If no approval is possible during the next shift, say what to do instead. The fallback might be to pause the task or send a holding reply. Write the fallback in advance so the next person does not improvise under pressure. Review the list whenever the client updates a template."
        ],
        "checks": []
      },
      {
        "title": "Test the note with a second reader",
        "paragraphs": [
          "Before the note becomes routine, ask a colleague who did not do the task to read it and state the next action aloud. If the reader hesitates, the note is missing a detail. Fix the note rather than explaining it in conversation. The test takes two minutes and exposes the assumptions the writer cannot see.",
          "Repeat the test after a process change, a new client, or a shift realignment. Keep one or two strong examples in the team folder as models. Do not turn the examples into a rigid template that ignores the task. The format should stay stable while the content changes. A good handoff note reads like a clear status update, not a diary."
        ],
        "checks": []
      },
      {
        "title": "Keep the note where the next shift looks",
        "paragraphs": [
          "Store the handoff in the task record, not in a private document or a chat message. The next person should find it from the same link they use to open the work. Use a consistent title that includes the task name and the shift date. If the team uses several tools, name the one source of truth and link to it from the others.",
          "Give the note a clear owner for the current shift and a reviewer for the next. The owner updates the note before leaving, and the reviewer confirms that the next action is clear. A note without an owner becomes a diary that nobody maintains. Check the record at the start of the shift rather than after the first question."
        ],
        "checks": []
      },
      {
        "title": "Close the note when the task ends",
        "paragraphs": [
          "A handoff note is temporary. When the task is complete, record the outcome, the date, and where the final file lives. Then close the note so it does not compete with active work. Archive it with the task record for the period the client requires. An open note on a finished task confuses the next reader.",
          "Review a sample of closed notes each month. Look for tasks that were reopened, questions that repeated, or approvals that arrived late. Those patterns point to a gap in the task design rather than a careless writer. Update the template or the process and tell the team what changed. The goal is fewer handoffs that need a rescue call."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Department of Labor, workplace flexibility",
        "url": "https://www.dol.gov/agencies/whd/fmla"
      },
      {
        "name": "U.S. Office of Personnel Management, telework and remote work",
        "url": "https://www.opm.gov/policy-data-oversight/telework-faq/"
      },
      {
        "name": "Project Management Institute, knowledge management",
        "url": "https://www.pmi.org/learning/library"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "set-a-two-person-rule-for-sensitive-client-requests": {
    "intro": "Some client requests are routine, and some can change a price, a bank detail, a legal position, or a public statement. The second category should never depend on one person's memory at the end of a long day. A two-person rule names the requests that need a second set of eyes, separates preparation from approval, and leaves evidence that the check actually happened.",
    "sections": [
      {
        "title": "Define which requests need two people",
        "paragraphs": [
          "Start from consequences rather than job titles. A request needs two people when a mistake would be hard to reverse, visible outside the company, or expensive to correct. Payment changes, pricing exceptions, contract edits, account closures, and public responses usually qualify. Write the categories in plain language and include examples the team has actually seen.",
          "Add a catch-all for requests that combine several risk factors. A small discount may be routine, but the same discount applied to a renewal with a payment change is not. Give the reviewer a short list of triggers to check. When the triggers overlap, the request goes to the higher review path. This prevents a low-risk label from hiding a high-risk combination."
        ],
        "checks": []
      },
      {
        "title": "Split the preparer and the approver",
        "paragraphs": [
          "The preparer gathers the facts, drafts the response, and names the action requested. The approver checks the facts against the source and confirms that the action is allowed. One person should not perform both roles on the same request. This separation is the point of the rule, not an administrative extra step.",
          "Name a backup for each role so the process does not stop during leave. The backup should have the same access and the same written criteria. If no qualified approver is available, the request waits or moves to a manager. Do not let urgency quietly collapse the two roles. Record the delay and the reason so the pattern is visible."
        ],
        "checks": []
      },
      {
        "title": "Require evidence with the approval",
        "paragraphs": [
          "The approval should point to the client message, the current record, and the rule that permits the action. A note that says approved is not enough to reconstruct the decision later. Ask for the specific field or clause that was checked. If the evidence is missing, the approver sends the request back rather than filling the gap personally.",
          "Keep the evidence where the work lives, not in a private inbox. A ticket, shared folder, or task record works if the right people can see it. Limit access to the people who need it, and avoid copying sensitive numbers into chat. The record should answer who asked, what changed, who approved, and when."
        ],
        "checks": []
      },
      {
        "title": "Log the exception rather than the conversation",
        "paragraphs": [
          "When the team makes an exception, write down the normal rule, the reason for the exception, and the person who accepted the risk. A chat thread is easy to lose and hard to search. The log should be short enough to complete during the request. If it takes longer than the task, the form is too complicated.",
          "Review exceptions at a fixed interval and look for repeats. Three exceptions for the same client may mean the rule is wrong or the client needs a different process. Decide whether to change the rule, train the team, or escalate the pattern. Close the loop in the log so the next reviewer understands the outcome."
        ],
        "checks": []
      },
      {
        "title": "Review the rule after an incident",
        "paragraphs": [
          "After a near miss or a real error, trace the request through the rule rather than blaming the last person who touched it. Ask whether the request was classified correctly and whether the approver had the evidence needed. If the rule allowed the error, change the rule. If the rule was skipped, find out why the skip felt reasonable.",
          "Update the training example and the written criteria in the same cycle. Tell the team what changed and why, without turning the review into a public trial. A rule that is updated after every incident becomes more useful over time. A rule that is only enforced when someone remembers will not survive a busy week."
        ],
        "checks": []
      },
      {
        "title": "Put the rule inside the workflow",
        "paragraphs": [
          "A rule in a policy document is easy to forget when a request arrives in a chat window. Build the check into the tool where the request is handled. Require an approver field before the task can move to done, and block the closure when the field is empty. The control should appear at the moment of action, not in a separate training tab.",
          "Keep the field simple: approver, date, evidence link, and decision. Too many fields encourage people to type a single word and move on. Test the workflow with a real request from the previous month. If the control adds more than a minute, simplify it before rolling it out. A rule that slows the queue without improving the check will be bypassed."
        ],
        "checks": []
      },
      {
        "title": "Handle urgent requests without skipping the check",
        "paragraphs": [
          "Urgent requests still need a second person, but the second person can be a manager on call rather than the usual reviewer. Write the escalation path and the maximum time allowed for a decision. If no approver can be reached, the default is to hold the action and tell the client when to expect an answer. Urgency changes the speed, not the standard.",
          "Record every urgent approval and review the pattern monthly. A high number of urgent requests may mean the normal path is too slow or the client is planning poorly. Fix the cause rather than normalising the exception. The two-person rule should reduce risk without becoming a bottleneck that people route around."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "Committee of Sponsoring Organizations, internal control framework",
        "url": "https://www.coso.org/guidance-on-ic"
      },
      {
        "name": "U.S. Government Accountability Office, internal control standards",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "Institute of Internal Auditors, segregation of duties",
        "url": "https://www.theiia.org/en/standards/"
      }
    ],
    "servicePath": "/services/reporting-and-qa",
    "serviceLabel": "reporting and QA"
  },
  "keep-a-decision-log-for-role-scope-changes": {
    "intro": "A role grows through small requests that each seem reasonable on their own. Someone asks for one more report, a weekly task becomes daily, or a coordinator starts answering a client question that used to go to the account manager. Without a record, the role quietly becomes a different job and the original scope discussion is impossible to reconstruct.",
    "sections": [
      {
        "title": "Record the request in the client's words",
        "paragraphs": [
          "Write the request as the client stated it, then add the operational meaning in a separate line. The first version preserves intent, while the second shows what the team would actually do. If the client said help with reporting, the team might interpret that as building a new weekly pack. Keeping both lines exposes the gap before work begins.",
          "Include the date, the channel, and the person who made the request. A verbal request in a meeting should be confirmed in writing before it enters the log. This is not bureaucracy; it prevents a later disagreement about whether the request was approved. A short confirmation message is enough when the client dislikes formal documents. Ask the client to reply with a simple yes so the record has a clear answer. If the client does not reply, note the follow-up date and keep the request open."
        ],
        "checks": []
      },
      {
        "title": "State the reason and the alternatives",
        "paragraphs": [
          "Record why the change is being considered and what it replaces. A new task either displaces existing work, adds capacity, or changes the quality standard. Write which one applies. If the answer is unclear, the decision is not ready. The log should show the trade-off rather than only the desired outcome.",
          "List at least one alternative, including doing nothing. The team might move the task to a different day, simplify the output, or assign it to another role. Comparing options makes the cost visible. It also gives the client a way to choose a smaller change when the full request is too expensive."
        ],
        "checks": []
      },
      {
        "title": "Name who approved and what changed",
        "paragraphs": [
          "Record the approver by role and name, the date of approval, and the exact change to the task inventory. If the approval was conditional, write the conditions beside it. A scope change without an updated inventory is only a suggestion. The log and the inventory should agree when the next review begins.",
          "Note who was informed and who was not. The account manager, the quality reviewer, and the person doing the work may need different levels of detail. Keep sensitive client information out of the general log and link to the restricted record instead. The log should be useful without becoming a second copy of the client file."
        ],
        "checks": []
      },
      {
        "title": "Link the decision to the task inventory",
        "paragraphs": [
          "Assign an identifier to each decision and reference it in the task entry it changed. When someone later asks why a report includes an extra section, the identifier leads to the request and the approval. This link is more reliable than a folder of meeting notes. It also makes the history searchable by task rather than by date.",
          "Update the time estimate when the scope changes. A task that gains a review step takes longer, even if the output looks similar. If the estimate does not change, the team is absorbing the difference somewhere else. Record that assumption so the next capacity check does not miss it."
        ],
        "checks": []
      },
      {
        "title": "Review the log at each account check",
        "paragraphs": [
          "Bring the last few decisions to the regular account review and ask whether they still apply. Temporary changes should have an end date. Permanent changes should be reflected in the role description and the quality checklist. Decisions that no longer make sense should be closed rather than left open forever.",
          "Keep the log small enough to read. One line per decision, with a link to detail, is usually enough. Archive closed entries by quarter and leave a short summary for the account. A decision log is valuable when it explains the present scope, not when it proves how much paperwork the team can produce."
        ],
        "checks": []
      },
      {
        "title": "Separate a scope change from a quality problem",
        "paragraphs": [
          "Not every complaint is a request for new work. If the output is missing a required section, that is a quality issue to repair, not a scope change to approve. Ask whether the task description already promised the work. If it did, fix the delivery and record the correction. If it did not, the request belongs in the decision log.",
          "Write the distinction into the account notes so the team applies it consistently. A client who repeatedly reframes quality problems as new requests may need a clearer acceptance checklist. A team that treats every correction as scope creep may miss a genuine gap. The log should show which interpretation was used and why."
        ],
        "checks": []
      },
      {
        "title": "Give the log a short monthly summary",
        "paragraphs": [
          "At the end of each month, count the scope changes, the time added, and the changes that displaced other work. Summarise the result in a few lines for the account owner. Do not list every request again; point to the entries that matter. The summary should help the owner decide whether the role still matches the original brief.",
          "Use the summary in the next planning conversation. If scope has grown without a matching change in hours, the team is absorbing the difference. If scope has shrunk, the role may have room for another task. Record the conclusion and the next review date. A monthly summary is more useful than a large report nobody reads."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, business planning",
        "url": "https://www.sba.gov/business-guide/plan-your-business"
      },
      {
        "name": "Project Management Institute, scope management",
        "url": "https://www.pmi.org/learning/library"
      },
      {
        "name": "International Organization for Standardization, quality management",
        "url": "https://www.iso.org/iso-9001-quality-management.html"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "test-a-backup-contact-path-before-an-outage": {
    "intro": "Most teams have a backup contact path on paper and very little confidence that it works. The number may be old, the alternate channel may depend on the same internet connection, or the person who knows the sequence may be asleep. A path is only a backup if someone has used it under realistic conditions and confirmed the other end received the message.",
    "sections": [
      {
        "title": "List the failures the path must survive",
        "paragraphs": [
          "Start with the failures that would interrupt communication rather than the channels you already use. A power cut, a network outage, a platform login problem, and a lost phone each break a different assumption. Write them separately because one backup rarely covers all four. The list should reflect the actual tools and locations of the team.",
          "Add the human failures as well. The primary contact may be on leave, the manager may be traveling, or the client may have changed offices. A backup path that depends on one person being available is not a path. Name a second contact for each organization and a way to confirm that the message arrived."
        ],
        "checks": []
      },
      {
        "title": "Choose two channels that fail differently",
        "paragraphs": [
          "A chat app and an email account may both depend on the same internet service and the same device. Choose channels with different dependencies, such as a mobile call and a shared status page, or a phone call and a written message to a second provider. The goal is to avoid a single failure taking out both paths at once. Test the pair by asking which one still works when the office router loses power. If the answer is neither, choose another channel.",
          "Write the order in which the channels should be tried. Put the fastest and most direct first, then the one that leaves a durable record. Include the expected response time for each so the sender knows when to escalate. A backup path without a waiting rule becomes a series of anxious messages with no clear owner."
        ],
        "checks": []
      },
      {
        "title": "Put the path in the runbook",
        "paragraphs": [
          "The runbook should list the trigger, the channels, the contacts, and the message to send. Keep it short enough to follow when the primary system is unavailable. Store a copy somewhere that does not require the affected system to open. A runbook trapped behind the tool that failed is not accessible.",
          "Include the information the receiver needs in the first message: who is reporting, what is affected, when it started, and what has been tried. A vague alert creates a round of questions that wastes the time the backup path was meant to save. Add a template with blanks so the sender can move quickly without guessing. Keep it short enough to complete on a phone. Review it after each test and remove fields nobody uses."
        ],
        "checks": []
      },
      {
        "title": "Test the path on a normal day",
        "paragraphs": [
          "Run a scheduled test while the primary channel is healthy. Send a message through the backup path and ask the receiver to confirm it arrived. Time the test from trigger to confirmation and compare it with the expected response. A test that only checks whether a number exists proves very little.",
          "Do not simulate the test so heavily that it disrupts client work. Use a short, clearly labeled message and a receiver who expects it. Record the result and any confusion about the instructions. The confusion is the finding, not a reason to cancel the test. Fix the runbook before the next scheduled check."
        ],
        "checks": []
      },
      {
        "title": "Retire stale numbers on a schedule",
        "paragraphs": [
          "Set a review date for every contact in the path. Confirm the number, the person, and the role, and remove anyone who has left the account. A quarterly check is easier to remember than an annual cleanup. Put the date in the same calendar as the test so both happen together.",
          "When a contact changes, update the runbook and tell the people who rely on it. A silent update leaves old copies in circulation. Keep one authoritative version and mark the others as archived. The backup path is only dependable when the team knows which version is current and has used it recently."
        ],
        "checks": []
      },
      {
        "title": "Coordinate the path with the client",
        "paragraphs": [
          "The client may have its own incident process, contact list, and notification expectations. Ask for them before an outage and compare them with the team's path. Decide which channel takes priority and who speaks to the client's customers. A backup path that conflicts with the client's process creates confusion at the worst moment.",
          "Share the runbook with the client contact and confirm that the numbers are current. Ask the client to test its side of the path as well. Record the date of the joint test and any change to responsibilities. The path belongs to the relationship, not to one team."
        ],
        "checks": []
      },
      {
        "title": "Learn from every real interruption",
        "paragraphs": [
          "After a real outage or a near miss, write a short timeline of what happened and which channel worked. Include the time of the first attempt, the time of the confirmation, and the point where the path failed. Avoid blaming individuals; look for a missing step or an outdated contact. The timeline is the evidence for the next change.",
          "Update the runbook and retest the changed part within a reasonable period. Tell the team what changed and where to find the new version. Keep the old timeline with the incident record. Over time, the pattern of failures shows which channel deserves more investment and which one can be retired."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "Ready.gov, business continuity planning",
        "url": "https://www.ready.gov/business-continuity-plan"
      },
      {
        "name": "Federal Emergency Management Agency, emergency communications",
        "url": "https://www.fema.gov/emergency-managers/national-preparedness"
      },
      {
        "name": "CISA, communications resilience",
        "url": "https://www.cisa.gov/topics/emergency-communications"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  }
};
