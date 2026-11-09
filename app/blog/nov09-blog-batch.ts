// 2026-11-09 batch.
export const nov09BlogPosts = [
  {
    "slug": "control-shared-mailbox-delegation-for-a-client-support-team",
    "title": "Control Shared Mailbox Delegation for a Client Support Team",
    "excerpt": "Map every client inbox, set delegation levels by task, and review membership on a fixed date so shared access stays intentional.",
    "minutes": 5,
    "publishedAt": "2026-11-09",
    "heroImage": "/daily09/outsourcedphilippines/control-shared-mailbox-delegation-for-a-client-support-team.webp"
  },
  {
    "slug": "turn-rejected-deliverables-into-a-brief-improvement-loop",
    "title": "Turn Rejected Deliverables into a Brief Improvement Loop",
    "excerpt": "Log each rejection, separate a defect from a preference, and rewrite one instruction so the next brief produces acceptable work.",
    "minutes": 6,
    "publishedAt": "2026-11-09",
    "heroImage": "/daily09/outsourcedphilippines/turn-rejected-deliverables-into-a-brief-improvement-loop.webp"
  },
  {
    "slug": "write-a-tool-outage-runbook-for-a-remote-support-lane",
    "title": "Write a Tool Outage Runbook for a Remote Support Lane",
    "excerpt": "Name the tools that carry live work, set a pause condition, and give the team a tested fallback before the next outage.",
    "minutes": 5,
    "publishedAt": "2026-11-09",
    "heroImage": "/daily09/outsourcedphilippines/write-a-tool-outage-runbook-for-a-remote-support-lane.webp"
  },
  {
    "slug": "keep-a-decision-log-inside-the-clients-project-tool",
    "title": "Keep a Decision Log Inside the Client's Project Tool",
    "excerpt": "Record the decision, the owner, and the effective date next to the work item so the team stops rebuilding rules from chat threads.",
    "minutes": 5,
    "publishedAt": "2026-11-09",
    "heroImage": "/daily09/outsourcedphilippines/keep-a-decision-log-inside-the-clients-project-tool.webp"
  },
  {
    "slug": "set-a-meeting-notes-standard-for-distributed-client-calls",
    "title": "Set a Meeting Notes Standard for Distributed Client Calls",
    "excerpt": "Use fixed fields, one owner per action, and a same-day publish rule so remote attendees can act on a call they never heard.",
    "minutes": 5,
    "publishedAt": "2026-11-09",
    "heroImage": "/daily09/outsourcedphilippines/set-a-meeting-notes-standard-for-distributed-client-calls.webp"
  }
];

export const nov09BlogBasics = {
  "control-shared-mailbox-delegation-for-a-client-support-team": {
    "intro": "A shared client inbox is convenient until everyone on the team can read, delete, or send from it. The account often grows one delegation request at a time, each reasonable on its own day, until the access list no longer matches the work. A short mailbox map and a review date turn that accumulated access into a controlled decision. The goal is not to remove convenience but to know who holds which permission and why.",
    "sections": [
      {
        "title": "Start from the mailbox map",
        "paragraphs": [
          "List every client mailbox the team touches, including aliases, distribution groups, and shared calendars that carry email. For each one, write the purpose, the owner at the client, and the people who currently have access. Do not rely on memory or a chat thread from onboarding, because permissions change quietly when someone covers a shift. Export the delegation list from the mail platform and compare it with the work the team actually performs.",
          "Mark the mailboxes that receive confidential material such as invoices, identity documents, or legal notices. A general support inbox and a finance inbox should not share the same membership by default. Note where a distribution group hides several recipients behind one address, since that pattern can send client mail to people outside the intended lane. The map becomes the reference for every later change, and it is easier to defend than a verbal account of who was added."
        ],
        "checks": []
      },
      {
        "title": "Set delegation levels by task",
        "paragraphs": [
          "Replace a single has-access label with the levels the work requires: read, send as, send on behalf, and full management. A coordinator who only triages incoming requests may need read and assign rights, while a team lead who answers as the client needs send-as permission. Write the minimum level beside each role. The distinction prevents a temporary coverage request from becoming permanent ownership of the mailbox.",
          "Ask the client to approve the level, not just the person, because the client owns the mailbox and the risk. Record the approval with a date and the name of the client contact. If the client cannot decide, default to the lowest level that still lets the work proceed and note the open question. A permission that exceeds the task is a finding, even when the person is trusted and the request sounded routine."
        ],
        "checks": []
      },
      {
        "title": "Separate personal and shared credentials",
        "paragraphs": [
          "A shared mailbox should never be accessed through one person's password or a password stored in a team document. Use the mail platform's delegation features and named accounts so the audit trail shows who read or sent a message. Shared credentials erase accountability and make removal difficult when a person leaves. If the client's plan does not support named delegation, raise it as a platform gap rather than working around it.",
          "Turn on multi-factor authentication for every named account that reaches the mailbox, and keep the recovery method with the client. Do not let a single recovery phone number sit with one coordinator who may be on leave. Document the fallback path and test it before an urgent message arrives. The access design should survive an absence without exposing the inbox to people who no longer hold the role."
        ],
        "checks": []
      },
      {
        "title": "Review membership on a fixed date",
        "paragraphs": [
          "Put a quarterly review on the calendar and tie it to the client's own access cycle when one exists. At the review, compare the current delegation list with the mailbox map and the active roster. Remove people who changed roles, left the account, or no longer need the level they hold. Ask the client to confirm the remaining list in writing.",
          "Treat a coverage arrangement as temporary by default and give it an end date. If a coordinator is covering for a colleague, record the start, the end, and the person who will confirm the removal. A coverage grant without an end date becomes the next review's cleanup item. The review stays short when the map and the approval record are already current."
        ],
        "checks": []
      },
      {
        "title": "Record the change in the client's record",
        "paragraphs": [
          "Keep the approved membership, the permission level, and the review date in one client-facing record. Store it where the account team and the client can both find it, such as the shared account folder or the client's project workspace. Link the record to the ticket or change request that granted access. A reviewer should be able to reconstruct the current state without opening the mail admin console.",
          "When a person is removed, record the date and the confirmation that access ended. A removal that is requested but not verified leaves a gap that the next review will discover. Ask the platform owner to export the delegation list after the change and attach it as evidence. The same record supports a client question and an internal audit without another round of messages."
        ],
        "checks": []
      },
      {
        "title": "Test the removal before an incident",
        "paragraphs": [
          "Run a small test after each significant change: have the removed account try to open the mailbox and confirm the denial. Ask a current delegate to send a test message and verify the sent item appears under the named account. A permission that appears removed in a list but still works in the client is a serious failure. Document the test result with the date and the tester.",
          "Repeat the test when the client changes mail platforms or adds a new domain. Migrations often carry old delegation rules forward without anyone noticing the inherited access. Put the test steps in the account runbook so a new lead can repeat them. The final check is simple: the people who need the inbox can use it, and everyone else cannot."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Cybersecurity and Infrastructure Security Agency, access and identity guidance",
        "url": "https://www.cisa.gov/topics/cybersecurity-best-practices"
      },
      {
        "name": "U.S. National Institute of Standards and Technology, access control guidance",
        "url": "https://csrc.nist.gov/projects/access-control"
      },
      {
        "name": "U.S. Small Business Administration, business email security",
        "url": "https://www.sba.gov/business-guide/manage-your-business/strengthen-your-cybersecurity"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "turn-rejected-deliverables-into-a-brief-improvement-loop": {
    "intro": "A rejected deliverable is easy to treat as a one-off correction. The file is fixed, the client is updated, and the team moves on to the next item. The brief that produced the rejection rarely changes, so the same defect returns under a different file name. A short improvement loop captures the reason, tests it against the instruction, and rewrites one sentence of the brief before the next batch.",
    "sections": [
      {
        "title": "Log the rejection at the moment it happens",
        "paragraphs": [
          "Create a simple log with the item, the client, the date, the reason the work was rejected, and the person who reviewed it. Fill it in when the rejection arrives, not at the end of the week when the detail has faded. Keep the log beside the delivery queue so it is part of the normal workflow. A rejection that is only mentioned in a chat message cannot be counted or compared.",
          "Ask the reviewer to quote the client's words when possible, because the reason often names a field or format the brief did not mention. If the client only said this is wrong, follow up with one specific question before closing the item. The answer turns a vague correction into evidence. The log should be short enough to complete in a minute and specific enough to support a real change."
        ],
        "checks": []
      },
      {
        "title": "Separate a defect from a preference",
        "paragraphs": [
          "Classify each rejection as a defect, a missing requirement, or a preference discovered late. A defect is a failure against the written brief, such as a wrong account number or a missing approval. A missing requirement is a gap in the brief itself, while a preference is a new choice the client did not state before. The three cases lead to different fixes, and mixing them hides the one that most needs attention.",
          "Review the classification with the person who did the work before changing anything. They can point to the instruction they followed, which is often the fastest way to find a brief that was ambiguous. If two reviewers disagree, keep the item open and discuss the wording, not the person. The log is a record of the process, not a performance file."
        ],
        "checks": []
      },
      {
        "title": "Trace the rejection to the brief",
        "paragraphs": [
          "Open the brief and find the sentence that was supposed to prevent the error. If no sentence covers it, the rejection is a gap rather than a discipline problem. If the sentence exists, ask whether a new team member could interpret it the same way the client does. Quote the sentence in the log so the connection between the failure and the instruction is visible.",
          "Trace the example as well, because a sample can contradict the written rule. A template that shows an old format teaches the team to reproduce it even when the instruction says otherwise. Note which example the person used and whether it was current. The fix may belong to the example rather than the text, and changing both at once makes the result hard to test."
        ],
        "checks": []
      },
      {
        "title": "Rewrite one instruction at a time",
        "paragraphs": [
          "Change one sentence, add one example, or set one field rule per cycle. A brief that is rewritten in several places at once cannot show which change prevented the next rejection. Write the new version with a date and keep the previous one available. If the change is a rule, state what the person should do instead of only naming what went wrong.",
          "Show the revised instruction to the person who made the error and ask whether it would have changed their work. A yes is useful evidence, and a no reveals another ambiguity. If the person says they would still have missed it, the issue may be a tool constraint or a missing check. The rewrite is complete only when the team can apply it without another explanation."
        ],
        "checks": []
      },
      {
        "title": "Test the revision on a small batch",
        "paragraphs": [
          "Apply the revised brief to the next small batch and review the same field or format that failed. Keep the batch size modest so a bad revision does not create a large cleanup. Record the result in the log beside the original rejection. A fix that works on one item is a hypothesis until a second reviewer applies it independently.",
          "If the same rejection appears again, do not rewrite the brief a third time in the same place. Look at the workflow around the instruction, such as a check that happens too late or a template that is hard to find. The loop should escalate from wording to process when wording is not enough. That progression keeps the team from polishing a document that the work never reaches."
        ],
        "checks": []
      },
      {
        "title": "Report the loop to the client",
        "paragraphs": [
          "Send the client a short monthly note with the rejection count, the main causes, and the instruction changed. Keep it factual and avoid turning the note into an apology for every item. The client sees that the feedback changed the process, which builds trust in the next batch. Ask the client to confirm the new requirement if their expectation was the source of the gap.",
          "Carry the revised instruction into onboarding so a new specialist starts with the current rule. Remove the old version from the shared folder or mark it clearly as retired. At the next review, compare the rejection count with the prior period and note any change in volume that could explain the result. The loop is working when the same cause stops appearing, not when the log simply grows."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "International Organization for Standardization, quality management principles",
        "url": "https://www.iso.org/quality-management"
      },
      {
        "name": "U.S. Small Business Administration, customer feedback and process improvement",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, productivity and output measures",
        "url": "https://www.bls.gov/productivity/"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "write-a-tool-outage-runbook-for-a-remote-support-lane": {
    "intro": "A tool outage rarely stops a remote support team all at once. One person cannot open the ticketing system, another can read email but not update the client record, and the queue keeps growing while everyone checks a status page. A short runbook tells the team what to pause, where to work, and who speaks to the client. It turns a confusing hour into a set of known decisions.",
    "sections": [
      {
        "title": "Name the tools and the work they carry",
        "paragraphs": [
          "List the tools the lane uses and the work that stops when each one is unavailable. A ticketing platform outage may block triage but leave email and phone support usable, while an identity provider outage can stop every system at once. Write the work, not just the product name. The list shows which outages need a pause and which need a fallback.",
          "Mark the tools the client owns separately from the tools the provider owns, because the response path differs. A client-owned system may have an account manager who can confirm the status, while a provider tool may need an internal platform contact. Record the escalation contact beside each tool and keep it current. A runbook with outdated contacts is only a list of names."
        ],
        "checks": []
      },
      {
        "title": "Set a safe pause condition",
        "paragraphs": [
          "Write the condition that tells the team to stop accepting new work in the affected lane. For example, pause intake when the source record cannot be updated and the client requires same-day confirmation. The condition should be specific enough that a coordinator can apply it without asking a manager. It should also state what work may continue, such as reading existing messages or answering routine questions from a verified source.",
          "Give the pause an owner who can declare and lift it. If everyone can pause the queue, the team may stop work on a minor glitch, and if nobody can, the team may push through an unsafe workaround. Name a primary and a backup, and record the time the pause began. The client should hear about the pause from one voice rather than from several guesses."
        ],
        "checks": []
      },
      {
        "title": "Define the fallback channel",
        "paragraphs": [
          "Choose a fallback that the team already knows how to use, such as a shared inbox, a phone bridge, or a temporary log in the client's document tool. Do not invent a new tool during the outage. Write the exact address, the access method, and the person who can grant permission. Test the fallback before it is needed, because a channel nobody can open is not a fallback.",
          "Set the rule for moving work back to the primary system once it returns. A common failure is leaving items in the fallback log and forgetting to reconcile them. Require a reconciliation step with a named owner and a completion time. The runbook should say how the team proves that every fallback item reached the real queue. Keep the reconciliation proof with the outage record for the next review.",
          "The fallback should also state what cannot be done there. Some work, such as changing a payment instruction or viewing a restricted record, may have to wait for the primary system even during an outage. Write that boundary into the runbook so a coordinator does not use the workaround to bypass a control. The fallback is for continuity, not for lowering the standard."
        ],
        "checks": []
      },
      {
        "title": "Assign the communication owner",
        "paragraphs": [
          "One person should own the client update, even if several people are troubleshooting. That person confirms the impact, the workaround, and the next update time in plain language. They should avoid promising a recovery time the team cannot control. A short, honest message protects the relationship better than silence followed by a rushed explanation. Name a backup so the update still goes out if the owner is unavailable.",
          "Keep the internal channel separate from the client message so the team can coordinate without drafting in public. The communication owner collects facts from the tool owner, the lane lead, and the client contact, then sends one summary. Record the timestamp and the recipients. At the end of the outage, the same owner sends the closing note and the reconciliation result."
        ],
        "checks": []
      },
      {
        "title": "Record work done during the outage",
        "paragraphs": [
          "The fallback log should capture the item, the source, the action taken, and the time. A coordinator may answer a request by phone and forget to enter it after the system returns, which makes the queue look smaller than the real demand. Add the fallback items to the primary queue before the team resumes normal work. The count also shows the outage's effect on the day's volume.",
          "Keep the log for the post-incident review and attach it to the client note if the client asks. Do not use the log to judge individual speed, because the outage changed the work itself. Use it to find the gaps in the runbook, such as a missing permission or an unreadable contact list. The record is evidence for improvement, not a scorecard."
        ],
        "checks": []
      },
      {
        "title": "Review the runbook after a drill",
        "paragraphs": [
          "Run a short drill on a quiet day: simulate the loss of one tool, open the fallback, and move a test item through the process. Time the steps and note where someone had to ask a question. A drill reveals whether the runbook works when the pressure is low, before a real outage tests it under pressure. Update the document with what the team learned.",
          "Review the runbook at least twice a year and whenever the client changes a system or the team changes a lead. Remove tools that are no longer used and add the new dependency before it fails. Ask the client to confirm the escalation contacts and the pause rule. A runbook that is read only after an outage is already behind the work it is meant to protect."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "U.S. Cybersecurity and Infrastructure Security Agency, incident response",
        "url": "https://www.cisa.gov/resources-tools/resources/federal-government-cybersecurity-incident-and-vulnerability-response-playbooks"
      },
      {
        "name": "U.S. National Institute of Standards and Technology, contingency planning",
        "url": "https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final"
      },
      {
        "name": "U.S. Small Business Administration, business continuity planning",
        "url": "https://www.sba.gov/business-guide/manage-your-business/prepare-for-emergencies"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "keep-a-decision-log-inside-the-clients-project-tool": {
    "intro": "Distributed teams lose decisions in familiar ways: a call changes an approval rule, someone mentions it in a thread, and the night shift never receives the update. The decision exists only in the memory of the people who attended. A decision log inside the client's project tool fixes the location problem. It records the rule, the owner, and the date where the work item already lives.",
    "sections": [
      {
        "title": "Capture the decision in one sentence",
        "paragraphs": [
          "Write the decision as a single sentence that a person can apply without reading the discussion. Start with the action or the rule, then name the scope. For example, refunds above a set amount require a second approval before the client is contacted. Avoid a sentence that describes the debate instead of the outcome. The one-sentence test forces the group to agree on what changed.",
          "If the group cannot state the decision in one sentence, the meeting is not finished. Ask what the team should do differently tomorrow and write the answer down. A decision that only says we will monitor the situation is not a decision unless it names who monitors and what triggers a follow-up. Keep the sentence in the tool before the call ends."
        ],
        "checks": []
      },
      {
        "title": "Record the owner and the effective date",
        "paragraphs": [
          "Every entry needs a named owner and the date the rule takes effect. The owner is the person who can answer a question or approve an exception, not the person who happened to type the note. The effective date prevents a future team from applying the rule to work completed before the change. Add the previous rule when the decision replaces one.",
          "Put the owner's role beside the name so the entry survives a departure. If the owner changes, append the new name and the date rather than overwriting the original. The log should show who decided and who now owns the answer. That small record prevents a new coordinator from treating an old name as the current authority. Review the owner field whenever the team roster changes."
        ],
        "checks": []
      },
      {
        "title": "Link the decision to the work item",
        "paragraphs": [
          "Attach the decision to the ticket, process step, or client record it affects. A decision stored only in a separate log is easy to miss when someone opens the work item. Use the tool's link or reference field so the connection travels with the task. If the tool cannot link, put the decision in the item's notes and keep the log as an index.",
          "Update the related template or checklist in the same pass. A decision that changes an approval step but leaves the old checklist in place creates a contradiction the team must resolve under time pressure. Add a short note to the checklist that points to the decision. The goal is one current instruction, not a growing set of documents. Check the linked item again when the decision is retired."
        ],
        "checks": []
      },
      {
        "title": "Separate a decision from a discussion",
        "paragraphs": [
          "A discussion explores options, while a decision names the chosen path. Keep the log for decisions only, and put the reasoning in a short note or a linked document. If the reasoning matters to a future reviewer, add two or three sentences explaining why the alternative was rejected. Do not paste the entire thread into the log. A short reason is easier to review than a long transcript.",
          "Mark a provisional decision clearly and give it a review date. A team may choose a temporary rule while waiting for client approval, and the log should show that the rule is not final. Without the marker, a later reader may treat a temporary choice as settled policy. The review date tells the team when to confirm or replace it."
        ],
        "checks": []
      },
      {
        "title": "Review the log at handover",
        "paragraphs": [
          "Start every shift handover by reading the decisions added since the last handover. The receiving person should be able to repeat the rule in their own words and point to the item it affects. If the rule is unclear, fix the entry before the handover ends. A handover that lists tasks but not decisions sends the next shift into the same ambiguity.",
          "Keep the log short enough to read in a few minutes. Archive decisions that are fully replaced, and mark them as retired rather than deleting the history. A new lead can then see how the rule evolved without reading every past message. The log is a working tool, so its readability matters as much as its completeness. Remove any entry that no longer affects the work.",
          "Give the handover a fixed reading order: new decisions first, then items awaiting a decision, then retired rules. That order helps the receiving person see what changed without scanning the whole log. If the handover is written, use the same three headings. A predictable structure makes the log usable at the end of a long shift. Add a line for questions that the next shift must answer."
        ],
        "checks": []
      },
      {
        "title": "Retire decisions that no longer apply",
        "paragraphs": [
          "Set a review date for decisions that depend on a client process, a tool, or a temporary condition. On the review date, confirm whether the rule still matches the work. If it does not, write the replacement and mark the old entry as retired with the date. A log full of stale rules is as confusing as no log at all.",
          "Tell the client which decisions changed and who owns the new rule. Ask them to confirm any decision that affects their approval or their customers. Update the onboarding pack at the same time so a new specialist does not learn a retired rule. The test of the log is whether the team can act correctly without asking someone who was in the room."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "Project Management Institute, project documentation and decision records",
        "url": "https://www.pmi.org/learning/library"
      },
      {
        "name": "International Organization for Standardization, knowledge management",
        "url": "https://www.iso.org/standards.html"
      },
      {
        "name": "U.S. National Archives, records management guidance",
        "url": "https://www.archives.gov/records-mgmt"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  },
  "set-a-meeting-notes-standard-for-distributed-client-calls": {
    "intro": "A client call produces value only if the people who were not on it can act on what was decided. In a distributed team, that includes the night shift, the specialist who covers the account tomorrow, and the manager who joins the next review. Notes written as a narrative summary rarely survive that handoff. A fixed standard turns a conversation into a record the team can use.",
    "sections": [
      {
        "title": "Choose the fields every note must carry",
        "paragraphs": [
          "Set a short template with the date, the attendees, the purpose, the decisions, and the actions. Add a separate field for open questions that were not resolved. The template should fit on one screen and take minutes to complete. A long form invites people to skip fields, while no structure produces a paragraph nobody can scan. Keep the template in the same tool where the notes are stored.",
          "Name the client contact and the internal owner in the header so a reader knows who can confirm the note. Include the meeting's topic rather than a generic title like weekly sync. If the call covers several accounts, split the note by account instead of blending them. The reader should be able to find the decision that affects their work without reading the whole document."
        ],
        "checks": []
      },
      {
        "title": "Write actions with an owner and a date",
        "paragraphs": [
          "Each action should name what will be done, who will do it, and when it is due. Avoid an action that starts with the team will review, because no person is accountable. If an action depends on the client, name the client contact and the date of the request. A list of verbs without owners is a wish list rather than a plan.",
          "Check the dates against the team's real calendar, including leave and client holidays. An action due on a day when the owner is off will slip, and the note will look accurate until someone checks. Put the time zone beside any deadline that crosses regions. The extra detail prevents the most common handoff failure. Confirm the owner has the access needed to complete the action."
        ],
        "checks": []
      },
      {
        "title": "Keep the note short enough to use",
        "paragraphs": [
          "Aim for a page that a colleague can read before their shift. Put the decisions and actions first, then a short context paragraph for anyone who needs the background. Do not transcribe the conversation or include every opinion. The note is a working record, and its length should match the decisions it carries. A longer call does not automatically require a longer note.",
          "Use plain language and define any internal shorthand the first time it appears. A new specialist should not need a glossary to understand an approval rule. If a topic needs a long explanation, link to a document rather than expanding the note. The reader can follow the link when the detail matters. Avoid acronyms that only the people in the meeting understand."
        ],
        "checks": []
      },
      {
        "title": "Publish notes within one business day",
        "paragraphs": [
          "Set a rule that notes go out before the end of the next business day, and sooner when the call changes same-day work. The person who took the notes owns the deadline. If the call ends late, send the decisions and actions first and add the context the next morning. A timely partial note is more useful than a complete note that arrives after the work moved.",
          "Route the note to a stable location, such as the client's project folder or the account channel, instead of a personal inbox. Tell the attendees where it will appear so they know where to check. If someone disagrees with a decision, ask them to reply in the same thread so the correction stays with the record. A note that is sent but not stored disappears at the next handover.",
          "Keep a small archive by client and month so a later question can be answered without searching a chat tool. Name the folder and the retention period, then remove drafts that were never sent. The archive should contain the final note and the decisions it carried, not every version. Add a short index that shows the call date and the topics covered. A clean archive makes the next audit or handover much faster and keeps the note from disappearing when a person leaves."
        ],
        "checks": []
      },
      {
        "title": "Handle a call with no decisions",
        "paragraphs": [
          "Some calls are updates rather than decisions, and the note should say so plainly. Record what was shared, what remains open, and the date of the next check. Do not invent an action to make the note look productive. A clear no-decision note prevents the team from searching for a change that never happened. It also keeps the record honest about what the call actually achieved.",
          "If the call revealed a problem but did not resolve it, write the open question and the person who will bring an answer. Give the question a date and a place on the next agenda. A note that lists an unresolved risk without an owner leaves the risk to chance. The absence of a decision is still a fact worth recording."
        ],
        "checks": []
      },
      {
        "title": "Audit the notes against the recording",
        "paragraphs": [
          "Once a month, compare a sample of notes with the call recording or the chat transcript. Check whether the decisions and owners match what was said. Note any action that was recorded but never assigned, and any decision that was discussed but omitted. The audit is a check on the standard, not a test of the note-taker's memory. Keep the sample small enough to finish in one sitting.",
          "Fix the template when the same field is consistently missing or unclear. Ask the people who receive the notes which part they actually use, and remove a field that nobody reads. Keep the audit brief and record the result with the date. The standard is working when a colleague can complete a task from the note without asking the attendees."
        ],
        "checks": []
      }
    ],
    "sources": [
      {
        "name": "Project Management Institute, communications management",
        "url": "https://www.pmi.org/learning/library"
      },
      {
        "name": "U.S. Small Business Administration, remote team management",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "International Labour Organization, teleworking and work organization",
        "url": "https://www.ilo.org/topics/telework"
      }
    ],
    "servicePath": "/services/operations-support",
    "serviceLabel": "operations support"
  }
};
