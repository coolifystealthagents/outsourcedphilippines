// 2026-11-24 batch.
export const nov24BlogPosts = [
  {
    "slug": "outsourcedphilippines-write-an-escalation-timeout-rule-for-a-philippine-support-team",
    "title": "Write an escalation timeout rule for a Philippine support team",
    "excerpt": "An escalation that sits past its clock is a missed promise even when the team eventually answers. A timeout rule names the tier, the clock, and the owner who must act next.",
    "minutes": 5,
    "publishedAt": "2026-11-24",
    "heroImage": "/images/november-24/outsourcedphilippines-write-an-escalation-timeout-rule-for-a-philippine-support-team.webp"
  },
  {
    "slug": "outsourcedphilippines-build-a-client-onboarding-checklist-for-a-philippine-delivery-team",
    "title": "Build a client onboarding checklist for a Philippine delivery team",
    "excerpt": "A new account can start with access gaps, unclear contacts, and mismatched expectations. A checklist turns the first two weeks into a sequence of evidence-backed handoffs.",
    "minutes": 5,
    "publishedAt": "2026-11-24",
    "heroImage": "/images/november-24/outsourcedphilippines-build-a-client-onboarding-checklist-for-a-philippine-delivery-team.webp"
  },
  {
    "slug": "outsourcedphilippines-set-a-meeting-notes-standard-for-a-philippine-outsourcing-team",
    "title": "Set a meeting notes standard for a Philippine outsourcing team",
    "excerpt": "Notes that record the conversation but not the decision waste the hour. A standard fixes the owner, the decision format, the action fields, and the send time.",
    "minutes": 5,
    "publishedAt": "2026-11-24",
    "heroImage": "/images/november-24/outsourcedphilippines-set-a-meeting-notes-standard-for-a-philippine-outsourcing-team.webp"
  },
  {
    "slug": "outsourcedphilippines-write-a-credential-rotation-rule-for-shared-client-tools",
    "title": "Write a credential rotation rule for shared client tools",
    "excerpt": "A shared login that never changes is an access risk the team has stopped noticing. A rotation rule names the trigger, the vault, the test, and the record.",
    "minutes": 5,
    "publishedAt": "2026-11-24",
    "heroImage": "/images/november-24/outsourcedphilippines-write-a-credential-rotation-rule-for-shared-client-tools.webp"
  },
  {
    "slug": "outsourcedphilippines-build-a-weekly-capacity-check-for-a-philippine-support-queue",
    "title": "Build a weekly capacity check for a Philippine support queue",
    "excerpt": "A queue can look calm while the backlog hides in a later step. A weekly capacity check compares demand, handling time, and available hours before the gap becomes a service miss.",
    "minutes": 5,
    "publishedAt": "2026-11-24",
    "heroImage": "/images/november-24/outsourcedphilippines-build-a-weekly-capacity-check-for-a-philippine-support-queue.webp"
  }
];

export const nov24BlogBasics = {
  "outsourcedphilippines-write-an-escalation-timeout-rule-for-a-philippine-support-team": {
    "intro": "An escalation that sits in a queue past its clock is a missed promise, even when the team eventually answers. A timeout rule names each tier, the clock that applies, and the person who owns the next move. The rule should be short enough to use during a live contact and precise enough to audit later. It works best when the queue, the client contract, and the shift roster all point to the same thresholds.",
    "sections": [
      {
        "title": "Define the tiers and their clocks",
        "paragraphs": [
          "List the tiers the team actually uses, from the first-line agent to the client owner. Give each tier one clock that starts at a named event and ends at a named action. Do not reuse a single clock for both a first response and a final resolution. A tier without a clock is a label rather than a commitment.",
          "Write the clock in hours and minutes, not in vague phrases such as soon or urgent. State whether the clock pauses overnight, on weekends, or during a client holiday. Record the calendar that applies and the date it was last checked. A clock that ignores the shift boundary will report failures the team could not avoid.",
          "Separate the internal handoff clock from the client-facing promise. An internal tier may need thirty minutes to accept a case, while the client promise allows four hours for a resolution. Record both and show how they relate. Confusing the two creates either false alarms or silent breaches.",
          "Publish the thresholds in the queue view and in the escalation guide. Use the same words in both places so an agent does not have to translate. Record the version and the owner of the guide. The tier list should be reviewed when a client adds a channel or changes a service level."
        ],
        "checks": []
      },
      {
        "title": "Name who watches the clock",
        "paragraphs": [
          "Assign one role per shift to watch open escalations and their timers. That person needs the authority to reassign, call, or escalate without waiting for a meeting. Record the name at the start of the shift and the backup for breaks. A clock with no watcher is a dashboard nobody reads.",
          "Give the watcher a short list of actions for each threshold. The list should say whom to contact, what to say, and what to record. Record the action taken and the time it was taken. The watcher should never have to invent the next step under pressure.",
          "Set a second check for cases that cross a shift boundary. A case handed to the next shift needs a fresh owner and a fresh acknowledgement. Record the handoff and the remaining time. A timer that resets without a note hides the delay instead of surfacing it.",
          "Review the watcher role during peak weeks and holidays. A single watcher cannot cover a queue that doubles in volume. Record the added coverage and the hours it applies to. The rule should scale with the work rather than assume a calm week."
        ],
        "checks": []
      },
      {
        "title": "Set the first response and acceptance",
        "paragraphs": [
          "Define what counts as a first response and what counts as acceptance. A quick acknowledgement is not the same as an owner taking the case and starting work. Record both events separately and give each its own clock. A team that only measures the greeting will miss the case that never moves.",
          "Require the receiving tier to confirm the case, the current state, and the next action. A bare transfer leaves the case in limbo between two owners. Record the confirmation and the name of the person who gave it. The sending tier should keep the case until the receiving tier accepts it.",
          "State what happens when the receiving tier does not answer within its clock. The case should return to the sender or move to the next tier automatically. Record the rule and the fallback contact. An escalation that depends on a reply that never comes is not a path.",
          "Test the rule with a drill on a quiet shift. Send a sample case through each tier and time the handoffs. Record where the case waited and why. A drill exposes the gaps that a written rule can hide."
        ],
        "checks": []
      },
      {
        "title": "Decide the handoff trigger",
        "paragraphs": [
          "Write the exact conditions that trigger a handoff rather than a judgment call. A missed deadline, a missing access, a client complaint, and a policy exception are clear triggers. Record the trigger and the tier that owns the response. Ambiguous triggers produce both unnecessary escalations and missed ones.",
          "Give the agent a way to escalate early when the risk is obvious. A safety issue or a legal threat should not wait for the clock to expire. Record the early trigger and the person who must be told. The rule should reward early warning rather than punish it.",
          "Keep the case record with the case as it moves. The receiving tier needs the contact history, the evidence, and the attempts already made. Record the package and the time it was sent. A handoff that forces the next owner to start over adds delay and frustration.",
          "Review the triggers after a month of real cases. Some will fire too often, and some will never fire. Record the counts and the reason for each change. The trigger list should reflect the work the team actually receives."
        ],
        "checks": []
      },
      {
        "title": "Record the timeout and the recovery",
        "paragraphs": [
          "Log every timeout with the tier, the clock, the time elapsed, and the reason. A timeout is evidence about the process, not only about the agent. Record whether the case was recovered and how long recovery took. The log should be short enough to complete during the shift.",
          "Name the recovery owner and the recovery action for each timeout. A late case needs a call, an apology, or a revised commitment, depending on the client. Record the action and the client response. A timeout that is silently closed teaches the team that the clock does not matter.",
          "Separate the provider-caused miss from a client-caused delay. A missing document or an unavailable approver changes the lesson from the case. Record the cause at the level the team can verify. Blaming the clock will not fix a dependency the client controls.",
          "Review the log in the weekly service meeting. Pick one timeout and trace it end to end. Record the finding and the single change to make. A long list of misses without a change is only a record of frustration."
        ],
        "checks": []
      },
      {
        "title": "Review the rule each quarter",
        "paragraphs": [
          "Compare the promised clocks with the times the team actually achieves. A rule that looks generous on paper may fail in every peak week. Record the comparison and the cause of the widest gap. Adjust the clock or the staffing, not only the wording.",
          "Ask the agents which tier they avoid and why. A tier that everyone routes around is a signal that the rule does not match the work. Record the answer and the proposed change. The people on the queue see the failure before the report does.",
          "Check the rule against the client contract and the current roster. A new channel, a new client contact, or a changed shift pattern can make an old threshold wrong. Record the review and the approval. The rule should be current before the next busy season.",
          "Put the next review date on the service calendar. A rule that is never revisited slowly becomes folklore. Record the owner and the date. The quarterly check keeps the promise honest."
        ],
        "checks": []
      }
    ]
  },
  "outsourcedphilippines-build-a-client-onboarding-checklist-for-a-philippine-delivery-team": {
    "intro": "A new account can start with access gaps, unclear contacts, and mismatched expectations. A checklist turns the first two weeks into a sequence of evidence-backed handoffs. It should cover the people, the tools, the service rules, and the risks that the team will meet in the first month. The checklist is finished when the team can work a live case without asking who owns it.",
    "sections": [
      {
        "title": "Start with access and contacts",
        "paragraphs": [
          "List every system the team needs and the level of access each role requires. Separate read access from write access and from approval rights. Record the request owner and the expected turnaround. A team that starts with borrowed logins begins with a security and an audit problem.",
          "Collect the client contacts by function rather than by name alone. A billing question and an outage need different people and different hours. Record the role, the backup, and the contact window. A single account manager cannot cover every decision the team will need.",
          "Confirm the identity of the people who may approve a change or a refund. Record the authority limit and the channel for the approval. A verbal approval from an unknown contact is not a control. The team should know whose written approval it can rely on.",
          "Test the access before the first live case. Ask an agent to sign in, open the queue, and complete a harmless action. Record the result and the gap. Access that is granted but unusable is not ready."
        ],
        "checks": []
      },
      {
        "title": "Confirm the communication path",
        "paragraphs": [
          "Agree the channels for routine work, urgent issues, and client approvals. A chat thread, an email inbox, and a ticket queue each have a different purpose. Record the channel and the response expectation for each. Mixing the three creates duplicate requests and missed messages.",
          "Set the escalation contact and the hours the client covers. A night team needs a named on-call contact rather than a general inbox. Record the number, the backup, and the holiday rule. The escalation path should be usable at the hour the work actually runs.",
          "Define how the team reports status and how often. A daily note, a weekly summary, and a monthly review serve different readers. Record the format and the send time. The client should not have to ask for the same update twice.",
          "Write the meeting rhythm before the first call. A kickoff, a first-week check, and a thirty-day review are usually enough to start. Record the attendees and the decisions each meeting should produce. A calendar full of status calls can crowd out the work."
        ],
        "checks": []
      },
      {
        "title": "Record the service expectations",
        "paragraphs": [
          "Turn the contract into the few rules the agents will use every day. State the volume, the service level, the quality bar, and the hours of coverage. Record the source clause and the person who confirmed the interpretation. An agent should not have to read a master agreement to answer a routine question.",
          "Define what counts as complete for each deliverable. A ticket, a report, and a data entry batch each need their own acceptance rule. Record one passing and one failing example. A standard that lives only in the client's head will be discovered through rework.",
          "Agree the rework and the exception path. A rejected item needs a reason, an owner, and a response time. Record the path and the authority to correct. Rework without a cause code becomes a recurring cost with no fix.",
          "Write the holiday and absence rule for both sides. A client holiday can change the volume, and a provider holiday can change the coverage. Record the calendars and the notice period. The first surprise holiday should not be the one that breaks the service."
        ],
        "checks": []
      },
      {
        "title": "Set the first-week review",
        "paragraphs": [
          "Schedule a review at the end of the first week and keep it short. The agenda should cover the access gaps, the live volume, the early errors, and the open questions. Record the decisions and the owners. The first week is when the assumptions are cheapest to correct.",
          "Ask the agents what slowed them down. A missing password, a confusing template, or an unclear contact will show up before the metrics do. Record the answer and the fix. The team's experience is the earliest signal of a design problem.",
          "Compare the actual volume and contact mix with the forecast. A different mix may change the skills or the schedule the team needs. Record the difference and the proposed change. The plan should bend before the mismatch becomes a service issue.",
          "Confirm the client contact who will handle each open issue. An issue without an owner drifts between teams. Record the name and the date. The review should end with a smaller list than it started with."
        ],
        "checks": []
      },
      {
        "title": "Capture the risks and assumptions",
        "paragraphs": [
          "Write the assumptions that the onboarding plan depends on. A client system change, a hiring delay, and a language gap are common examples. Record the assumption, the owner, and the date it was last true. An unstated assumption becomes a surprise later.",
          "List the risks that could affect the service in the first quarter. Rank them by likelihood and impact, and name one mitigation for each. Record the review date and the trigger that would reopen the plan. A risk register that is never read is only paperwork.",
          "Keep the client-specific knowledge in one place that the team can search. A decision log, a contact sheet, and a process note are enough to start. Record the owner and the review cycle. Knowledge held by one agent is a single point of failure.",
          "Share the risk list with the client in the first review. The client may know a change that the team cannot see. Record the client response and the update. A shared risk is easier to manage than a surprise."
        ],
        "checks": []
      },
      {
        "title": "Close the onboarding",
        "paragraphs": [
          "Define the evidence that shows onboarding is complete. Access tested, first cases delivered, contacts confirmed, and the review held are reasonable markers. Record the evidence and the date. A checklist that is closed because the calendar passed is not complete.",
          "Hold a short close-out with the team and the client. Confirm what worked, what changed, and what remains open. Record the decisions and the next review. The close-out should hand the account to steady operations with no loose ends.",
          "Move the open items into the normal service review. An onboarding issue that disappears from the list will return as a complaint. Record the carry-over and the owner. The regular review should inherit the unfinished work.",
          "Review the checklist itself after the first close-out. Remove the steps nobody used and add the gap that caused trouble. Record the change and the version. The next onboarding should be faster and safer than this one."
        ],
        "checks": []
      }
    ]
  },
  "outsourcedphilippines-set-a-meeting-notes-standard-for-a-philippine-outsourcing-team": {
    "intro": "Notes that record the conversation but not the decision waste the hour. A standard fixes who writes, what counts as a decision, how an action is written, and when the note goes out. The test is simple: a reader who missed the meeting should know what changed and who must act. A good note is short, dated, and tied to the record it affects.",
    "sections": [
      {
        "title": "Choose the note owner before the meeting",
        "paragraphs": [
          "Name the person who will write the note before the call begins. Rotating the role is fine, but an unassigned note is usually a lost note. Record the writer and the backup in the invite. The writer should have the agenda and the attendee list in advance.",
          "Give the writer permission to ask for a pause when a decision is unclear. A note that captures a vague discussion will be disputed later. Record the question and the answer in the moment. The writer is a recorder of decisions, not a stenographer of every remark.",
          "Separate the chair from the writer when the meeting is complex. A chair who is also writing will miss the nuance or slow the discussion. Record the two roles and the handoff. A small meeting can combine them, but a decision-heavy call should not.",
          "Keep the note template in the same place as the agenda. A shared template reduces the variation between writers. Record the template version and the owner. The format should be familiar enough that the writer can focus on the content."
        ],
        "checks": []
      },
      {
        "title": "Capture decisions rather than chatter",
        "paragraphs": [
          "Write the decision in one sentence that names the choice and the scope. A note that says the team discussed staffing does not say what was decided. Record the decision, the date, and the person who made it. A decision without an owner is a suggestion.",
          "Record the options that were rejected and the reason. A later reader may reopen a question that was already settled. Record the alternative and the concern that ruled it out. The note should prevent the same debate from returning next month.",
          "Leave out the side conversations that did not change a decision. A note full of unrelated remarks is hard to search and easy to misread. Record only the context that explains a choice. The writer should be able to defend every line as useful.",
          "Quote a number only with its source and period. A figure without a definition can drift as it is repeated. Record the source and the date the figure was produced. The note should let a reader check the number rather than trust it."
        ],
        "checks": []
      },
      {
        "title": "Use one action format",
        "paragraphs": [
          "Write each action as a verb, an owner, and a due date. A line that says follow up on the access issue has no owner and no end. Record the specific output and the date it is needed. An action should be small enough to finish and clear enough to verify.",
          "Limit the action list to the work that the meeting actually created. A long list of standing tasks buries the new commitments. Record the new action and the existing task it replaces, if any. The reader should see what changed because of this meeting.",
          "Mark the actions that depend on the client or another team. A provider-only list can hide a dependency that will block the work. Record the external owner and the date the request was sent. The follow-up should track the dependency, not only the provider task.",
          "Review the open actions at the start of the next meeting. An action that is never reviewed quietly expires. Record the status and the reason for any delay. The same list should carry forward until it is closed or cancelled."
        ],
        "checks": []
      },
      {
        "title": "Record dissent and open questions",
        "paragraphs": [
          "Note a material disagreement even when the decision is clear. A later failure may trace back to a concern that was never written down. Record the concern and the person who raised it. The note should preserve the reasoning without turning the meeting into a contest.",
          "List the questions that could not be answered in the room. Assign an owner and a date for each one. Record the question as it was asked, not as it was later paraphrased. An open question with no owner is a gap that will reopen.",
          "Separate a decision from a pending approval. A team may agree on a direction while the client still has to sign. Record the approval status and the person who must give it. A note that treats a proposal as final will mislead the reader.",
          "Keep the language neutral when the discussion was tense. A note that editorializes will be argued about instead of used. Record the positions and the decision without attributing blame. The document should help the team move on."
        ],
        "checks": []
      },
      {
        "title": "Send the note within one business day",
        "paragraphs": [
          "Set a send window that the team can keep, such as the end of the same business day. A note sent a week later is easy to dispute and hard to use. Record the send time and the recipients. The window should be part of the meeting standard, not a personal habit.",
          "Put the note where the work lives rather than in a private folder. A project page, a ticket, or a shared drive is better than an inbox. Record the link in the meeting invite. A note that cannot be found is a note that does not exist.",
          "Ask the attendees to correct factual errors within a short window. A brief correction period improves accuracy without reopening the decision. Record the correction and the date. Silence after the window should mean the note stands.",
          "Send the action list to the owners even when they missed the meeting. An owner who learns about a task late will miss the date. Record the send and the acknowledgement. The note should reach the person who must act, not only the people who attended."
        ],
        "checks": []
      },
      {
        "title": "Audit the notes each quarter",
        "paragraphs": [
          "Sample a few notes and check whether a reader can find the decision and the owner. A note that requires the writer to explain it has failed the test. Record the gap and the fix. The sample should include a routine meeting and a difficult one.",
          "Compare the actions in the notes with the work that was actually completed. A pattern of unclosed actions may point to unrealistic commitments or a missing owner. Record the finding and the change. The note standard should improve follow-through, not only documentation.",
          "Ask the team whether the template is too heavy or too thin. A format that takes an hour to complete will be abandoned in a busy week. Record the feedback and the simplification. The standard should survive a peak period.",
          "Review the standard when a new client or a new tool changes the meeting rhythm. Record the review and the version. Ask the writers whether the template still fits the calls they cover. The next quarter should start with a format the team still uses."
        ],
        "checks": []
      }
    ]
  },
  "outsourcedphilippines-write-a-credential-rotation-rule-for-shared-client-tools": {
    "intro": "A shared login that never changes is an access risk the team has stopped noticing. A rotation rule names the trigger, the vault, the test, and the record. It should cover the tools that hold client data, the accounts that several agents use, and the credentials that survive a staff change. The rule is only real when the team can rotate a credential without breaking the queue.",
    "sections": [
      {
        "title": "Inventory the shared credentials",
        "paragraphs": [
          "List every shared account the team uses, including the client systems and the internal tools. Record the owner, the users, the data it can reach, and the last change. An account that nobody owns is the one most likely to be forgotten. The inventory should be short enough to review in one sitting.",
          "Separate a shared account from a personal account with delegated access. A shared login removes individual accountability and makes rotation harder. Record the reason the account is shared and the alternative that was considered. Where a personal account can work, prefer it.",
          "Mark the accounts that can change a client record or move money. These need a shorter rotation interval and a second approver. Record the classification and the review date. A read-only dashboard does not carry the same risk as a payment portal.",
          "Remove the accounts that no longer have a user or a purpose. A dormant credential is an open door with no owner watching it. Record the removal and the date. The inventory should shrink before it grows."
        ],
        "checks": []
      },
      {
        "title": "Decide what triggers a rotation",
        "paragraphs": [
          "Set a scheduled interval for each class of account. A high-risk account may rotate every thirty days, while a low-risk tool may rotate quarterly. Record the interval and the reason. A single interval for every account will either overwork the team or under-protect the client.",
          "Rotate immediately when a person with access leaves the account. A departure is the most common reason a shared credential becomes unsafe. Record the trigger and the person who confirms the change. The rule should not wait for the next scheduled date.",
          "Rotate after a suspected exposure, a lost device, or a vendor incident. The team may not know the full scope, so the safe response is to change the credential and check the access log. Record the event and the response. A suspected exposure is enough to act.",
          "Review the trigger list when the client changes the tool or the access model. A new single sign-on or a new role can make an old trigger obsolete. Record the review and the version. The rule should follow the system it protects."
        ],
        "checks": []
      },
      {
        "title": "Use the vault as the only store",
        "paragraphs": [
          "Keep the credential in the approved vault rather than in a chat, a spreadsheet, or a note. A vault gives the team a record of who viewed the secret and when. Record the vault entry and the owner. A credential stored in two places is a credential that will drift.",
          "Grant access by role and remove it when the role ends. A shared vault entry should still have a named list of users. Record the grant and the removal. The team should be able to answer who could see the secret last month.",
          "Require a second person for the high-risk rotations. One person can change the password, and another can confirm the access and the record. Record both names and the time. A single-person rotation is easy to do and hard to verify.",
          "Set the vault to require a fresh sign-in for the rotation. A stale session can keep working after the secret changes. Record the session check and the result. The rotation is not complete until every session is closed."
        ],
        "checks": []
      },
      {
        "title": "Test the new credential before closing",
        "paragraphs": [
          "Ask an agent to sign in with the new credential and complete a harmless action. A credential that authenticates but cannot open the queue is not ready. Record the test, the time, and the result. The test should cover each role that uses the account.",
          "Check the integrations and the saved sessions that depend on the old secret. An automated job or a mobile app may fail hours after the change. Record the integration and the result. The team should find the break before the client does.",
          "Keep the old credential invalid rather than restoring it when a test fails. A rollback can hide the real problem and leave two live secrets. Record the failure and the fix. The safe path is to repair the access, not to reopen the old door.",
          "Update the recovery contact and the backup code at the same time. A rotation that locks the team out of recovery is a new incident. Record the recovery method and the holder. The account should be recoverable without a personal inbox."
        ],
        "checks": []
      },
      {
        "title": "Record the change and notify the client",
        "paragraphs": [
          "Write the account, the date, the reason, the approver, and the test result in one record. A later auditor should see the full change without reading a chat. Record the link to the ticket and the vault entry. The record is the evidence that the rule was followed.",
          "Tell the client when the change affects their access or their integrations. A client who discovers a broken connection will assume an outage. Record the notice and the contact. The message should say what changed and what the client must do.",
          "Notify the team in the channel they use at the start of the shift. An agent who tries an old credential will waste time and may lock the account. Record the notice and the time. The handover note should carry the change to the next shift.",
          "Keep the record for the period the client and the policy require. A short retention can leave the team unable to explain an old access decision. Record the retention and the owner. The evidence should outlive the rotation."
        ],
        "checks": []
      },
      {
        "title": "Review the rule each quarter",
        "paragraphs": [
          "Compare the scheduled rotations with the ones that actually happened. A rule that is skipped every month is a rule that no longer fits the work. Record the misses and the cause. Adjust the interval or the staffing rather than the wording alone.",
          "Check the access list against the current roster. A person who left the account should not still appear in the vault. Record the removal and the date. The review should catch the drift between the team list and the access list.",
          "Ask the agents whether the vault is usable during a live contact. A tool that takes ten minutes to open will be bypassed under pressure. Record the feedback and the fix. Security that slows the queue will lose to the queue.",
          "Set the next review date and the owner. A credential rule that is never revisited becomes a document nobody follows. Record the date and the approval. The quarterly check keeps the practice alive."
        ],
        "checks": []
      }
    ]
  },
  "outsourcedphilippines-build-a-weekly-capacity-check-for-a-philippine-support-queue": {
    "intro": "A queue can look calm while the backlog hides in a later step. A weekly capacity check compares demand, handling time, and available hours before the gap becomes a service miss. It should be short enough to run every week and specific enough to change a schedule. The check is not a forecast; it is a decision aid for the next seven days.",
    "sections": [
      {
        "title": "Define the unit of work",
        "paragraphs": [
          "Choose the unit that matches the queue, such as a contact, a ticket, or a completed document. A mixed queue may need two units rather than one blended number. Record the definition and the source. A unit that changes between weeks makes the trend meaningless.",
          "Separate new work from rework and from follow-up. Rework can consume capacity without appearing in the incoming volume. Record the category and the owner. A capacity check that ignores rework will overstate the available room.",
          "State the handling time as a range rather than a single average. A few complex cases can absorb the hours that a simple average hides. Record the median and the range for each work type. The plan should account for the tail as well as the middle.",
          "Write the inclusion rule for the week. Decide whether the check counts the work that arrived, the work that was completed, or the work that remained. Record the choice and the reason. A consistent rule is more useful than a perfect one."
        ],
        "checks": []
      },
      {
        "title": "Collect the queue data",
        "paragraphs": [
          "Pull the volume, the backlog, the age, and the completion counts from the system of record. Do not rebuild the numbers from memory or from a personal tracker. Record the source and the extraction time. The check should be reproducible by another lead.",
          "Break the volume down by day and by shift. A weekly total can hide a Monday surge or a night gap. Record the pattern and the peak. The schedule decision depends on when the work arrives, not only how much.",
          "Include the shrinkage that removes people from the queue. Leave, training, meetings, and broken equipment all reduce the available hours. Record the hours and the reason. A capacity plan that counts heads rather than hours will overpromise.",
          "Note any data gap or system change that affects the week. A new field or a missing export can make the comparison unsafe. Record the gap and the workaround. The reader should know when the number is weaker than usual."
        ],
        "checks": []
      },
      {
        "title": "Compare demand with available hours",
        "paragraphs": [
          "Multiply the expected volume by the handling time for each work type. Add the rework and the follow-up that the week is likely to bring. Record the calculation and the assumptions. A simple model with visible assumptions beats a complex one nobody can check.",
          "Subtract the shrinkage and the non-queue work from the scheduled hours. The result is the capacity the team can actually give the queue. Record the available hours and the source. A plan that ignores meetings will fail on the first busy Wednesday.",
          "Show the gap as hours and as a percentage of demand. A percentage alone can hide whether the gap is one shift or one full day. Record both and the period they cover. The team should see the size of the problem before choosing a response.",
          "Compare the result with the previous three weeks. A single week can be an anomaly, while a pattern needs a structural response. Record the trend and the change. The check should separate a spike from a slide."
        ],
        "checks": []
      },
      {
        "title": "Name the constraint",
        "paragraphs": [
          "Write the one constraint that limits the queue this week. It may be the headcount, a skill, a system, or an approval step. Record the constraint and the evidence. A plan that tries to fix everything at once will fix nothing.",
          "Check whether the constraint sits before or after the queue. A slow approval upstream can starve the team, while a slow review downstream can hide the backlog. Record the step and the owner. The capacity check should point to the right place.",
          "Ask the team where the work actually waits. The people on the queue see the stall before the report does. Record the answer and the example. The constraint should be confirmed with the floor, not only with the dashboard.",
          "Decide what the team will not do this week if the gap remains. A clear deferral is better than a silent overload. Record the deferred work and the client notice. The plan should protect the commitments that matter most."
        ],
        "checks": []
      },
      {
        "title": "Choose the action for the week",
        "paragraphs": [
          "Pick one or two actions that fit the constraint rather than a long wish list. A schedule change, a skill shift, and a small process fix are common options. Record the action, the owner, and the date. The action should be testable within the week.",
          "Set the trigger that would change the plan midweek. A volume spike, an absence, or a system outage may require a different response. Record the trigger and the fallback. The team should not wait for the next check to react.",
          "Tell the client only what the client needs to decide or to expect. A capacity note is not a confession of failure. Record the message and the contact. The client should hear about a changed commitment before the deadline.",
          "Keep the action list small enough to review at the next check. A list of ten actions will be abandoned by Wednesday. Record the status and the result. The weekly rhythm should build a habit of finishing what it starts."
        ],
        "checks": []
      },
      {
        "title": "Record the outcome and adjust",
        "paragraphs": [
          "At the next check, compare the action with the result. A schedule change that did not move the backlog is a lesson about the constraint. Record the comparison and the cause. The team should know whether the action worked.",
          "Update the handling time and the shrinkage with the new evidence. A model that never learns will keep giving the same answer. Record the change and the date. The check should get sharper each month.",
          "Review the deferred work and the client impact. A deferral that was never revisited becomes a hidden backlog. Record the item and the new date. The next plan should inherit the open commitments.",
          "Publish the one-page check where the team can see it. A private analysis will not change the shift. Record the location and the owner. The weekly capacity check should be a shared operating habit, not a monthly report."
        ],
        "checks": []
      }
    ]
  }
};
