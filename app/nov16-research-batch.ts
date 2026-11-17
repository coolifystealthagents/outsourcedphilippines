// 2026-11-16 batch.
export const nov16ResearchPosts = [
  {
    "slug": "reading-the-ftc-health-breach-notification-rule-for-health-support-teams",
    "title": "Reading the FTC Health Breach Notification Rule for Health Support Teams",
    "excerpt": "How a Philippines-based support lane can map health data, recognize a reportable event, and preserve evidence when a client is not covered by HIPAA.",
    "published": "2026-11-16",
    "updated": "2026-11-16",
    "statistic": "The FTC's Health Breach Notification Rule covers vendors of personal health records and related entities that are not regulated by HIPAA, and it requires notification after a breach of unsecured identifiable health information. The rule set out who must be told, what the notice must contain, and when it must be sent.",
    "methodology": "This note reviews the FTC's rule text and business guidance, the HHS breach notification resources, and the Electronic Code of Federal Regulations. It asks how an operations lead running a Philippines-based support lane can map a client's health data flow, recognize a reportable event, and preserve evidence without claiming to give legal advice. It does not decide whether a specific incident is reportable, and it does not replace counsel.",
    "body": [
      "Begin with the client's regulatory position. A support team may serve a health app, a wearable vendor, or a clinic that is covered by HIPAA. The obligations differ, and the same incident can trigger more than one regime. Ask the client which rule it believes applies before the team handles a single record. Write the answer in the account file and revisit it when the service changes.",
      "Read the definition of a personal health record carefully. The FTC rule is not limited to a formal medical chart; it can reach an app or service that stores identifiable health information and is offered to consumers. A support lane that manages exports, account recovery, or data deletion may touch that system even if it never provides clinical advice. Map the actual data flow rather than the label on the contract.",
      "Identify the unsecured information the team can see. A record is unsecured when it is not protected by a reasonable security measure, and the analysis is fact-specific. The team should know which fields are sensitive, where they are stored, and who can export them. A screenshot, a chat message, or a temporary file can move data outside the protected system. Inventory those paths before an incident.",
      "Define what counts as a breach for the client's service. The rule is triggered by unauthorized acquisition of unsecured information, but the facts of each event matter. A misdirected email, a stolen laptop, and a compromised account are different scenarios. The team should escalate all three to the same owner without deciding the legal outcome. The owner and counsel make the reportability call.",
      "Set the clock from the discovery point. The rule requires notice without unreasonable delay and within a set period after discovery, and the client's own policy may be stricter. Write the deadline in the runbook with the start event clearly defined. Do not let a weekend or a time-zone gap quietly consume the window. A named person should own the clock and the escalation.",
      "Build a notice path that the support team can support. The client usually sends the notice, but the team may need to supply the facts, the affected population, and the remediation steps. Prepare a template with placeholders rather than writing from scratch under pressure. Review the template with counsel and with the client's privacy lead. Keep the final notice in the incident file.",
      "Preserve evidence before cleanup. A restore, a password reset, or a deleted mailbox can remove the record of what happened. Capture logs, message headers, file listings, and the timeline in a controlled folder. Restrict access to the incident owner and counsel. Do not forward the raw evidence through ordinary chat channels.",
      "Separate the customer-facing message from the regulatory notice. A support reply should acknowledge the issue and explain the next step without making a legal conclusion. The regulatory notice has specific content requirements and a different audience. Draft both, but have the client approve the regulated one. Mixing the two can create a statement the client did not authorize.",
      "Consider the vendor and subcontractor chain. If a backup provider, a transcription tool, or another support vendor touched the data, the client may need to notify them or include them in the assessment. List every processor in the data flow and its contact. A missing vendor can turn a contained event into a late notice. Review the list when a tool is added or retired.",
      "Document the decision even when the answer is no notice. A reasoned record of why an event was not reportable protects the client if the question returns. Note the facts known at the time, the advice received, and the person who decided. Update the record if new facts appear. An undocumented decision looks like an oversight later.",
      "Train the lane with a tabletop exercise. Give the team a realistic scenario, such as a misdirected export or a compromised inbox, and walk through the first hour. Time the escalation, the evidence capture, and the client contact. Note where the team waited for permission or guessed. Fix the runbook before the next exercise.",
      "Close with a review that feeds the next version. After any real event or drill, ask whether the data map was accurate, the clock started at the right moment, and the notice path worked. Assign one change and a date to test it. Keep the record with the client's privacy documents. The goal is a response the team can execute, not a policy that only looks complete.",
      "Use a data inventory that matches the service rather than the org chart. The team may touch records in a support inbox, a billing system, and a marketing tool that the client's privacy notice never mentions. List each system with the data it holds and the person who can export it. A system missing from the inventory is a system missing from the breach assessment. Review the inventory when a tool is added or a workflow changes.",
      "Test the client's contact list before an incident. The privacy lead may have left, the after-hours number may be stale, and the legal contact may sit in another time zone. Send a short verification note each quarter and record the response. Ask who can approve a notice when the primary contact is unavailable. A list that looks complete in a policy is not the same as a list that works on a Saturday.",
      "Keep the post-incident review separate from the blame conversation. Ask what the team saw, when it saw it, and which step slowed the response. Look for a missing permission, an unclear owner, or a template that required information nobody had. Assign one fix and a date to test it. Share the lesson with the lane without exposing client details."
    ],
    "dataSections": [
      {
        "heading": "Confirm scope",
        "text": "Write the client's regulatory position and the systems the lane can access. Note whether the FTC rule, HIPAA, or another regime applies. Record the person who confirmed it. Update the note when the service changes. Do not assume the label on the contract settles the question."
      },
      {
        "heading": "Map the data",
        "text": "List the fields, the stores, and the people who can export them. Include screenshots, chat, and temporary files. Mark the paths that leave the protected system. Review the map with the client. Keep it short enough to use during an incident."
      },
      {
        "heading": "Define a breach",
        "text": "Write the events that must be escalated, such as a misdirected message or a stolen device. Separate escalation from the legal decision. Name the owner and counsel. Record the decision and its basis. Do not let the team decide reportability alone."
      },
      {
        "heading": "Set the clock",
        "text": "Define discovery and the notice deadline. Put both in the runbook with the client's stricter rule if one exists. Name the person who owns the clock. Check time zones and holidays. Test the path with a drill."
      },
      {
        "heading": "Write the notice path",
        "text": "Prepare a template with the required facts and placeholders. Get client and counsel approval before an incident. Assign drafting and review roles. Keep the final notice in the incident file. Do not improvise the regulated message."
      },
      {
        "heading": "Keep the record",
        "text": "Store the timeline, evidence, advice, and decision together. Restrict access. Record the reason for a no-notice decision. Review the file after closure. Use it to update the map and the runbook."
      }
    ],
    "faqs": [
      {
        "question": "Does the FTC rule apply to every support team that handles health data?",
        "answer": "No. It applies to vendors of personal health records and related entities that are not covered by HIPAA, and the facts of the service matter. A team should ask the client which regime applies and record the answer. Counsel should confirm any close call."
      },
      {
        "question": "Can the support team decide whether an incident is reportable?",
        "answer": "The team can recognize and escalate an event, but the legal decision belongs to the client and its counsel. Give them the facts, the timeline, and the affected data. Document the decision. Do not send a regulatory notice without approval."
      },
      {
        "question": "What should the team preserve first?",
        "answer": "Preserve logs, message headers, file listings, and a timeline before resetting accounts or deleting mailboxes. Store the evidence in a restricted folder. Record who collected it and when. Cleanup can wait until the owner confirms."
      },
      {
        "question": "How often should the runbook be tested?",
        "answer": "A tabletop exercise at least once a year, and after a change in tools, vendors, or client contacts, is a practical baseline. Time the escalation and the first client contact. Fix any step that required a guess. Keep the exercise record."
      }
    ],
    "sources": [
      "https://www.ftc.gov/business-guidance/resources/health-breach-notification-rule",
      "https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html",
      "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-318",
      "https://www.ftc.gov/business-guidance/privacy-security"
    ],
    "related": [
      "philippines-data-privacy-workflow-research",
      "philippines-operations-escalation-research",
      "philippines-knowledge-transfer-research"
    ],
    "hero": "/daily10/outsourcedphilippines/reading-the-ftc-health-breach-notification-rule-for-health-support-teams.webp",
    "thumbnail": "/daily10/outsourcedphilippines/reading-the-ftc-health-breach-notification-rule-for-health-support-teams.webp"
  },
  {
    "slug": "using-census-county-business-patterns-to-size-a-support-market",
    "title": "Using Census County Business Patterns to Size a Support Market",
    "excerpt": "A practical way to read establishment counts, employment, and geography in County Business Patterns without turning a public dataset into a false demand forecast.",
    "published": "2026-11-16",
    "updated": "2026-11-16",
    "statistic": "The U.S. Census Bureau's County Business Patterns series reports the number of establishments and employees by industry and geography, which can help a team frame how many businesses in a target sector might need a particular support function.",
    "methodology": "This note reviews the County Business Patterns documentation and API, the Bureau of Labor Statistics Quarterly Census of Employment and Wages, and the Occupational Employment and Wage Statistics program. It asks how an operations lead can size a potential client market without confusing employer counts with demand, jobs with people, or a national total with a local market. The result is a planning frame rather than a sales forecast.",
    "body": [
      "Start with the decision, not the dataset. A team may be testing whether a sector has enough employers to support a specialized service, comparing two metros, or checking whether a client's industry is concentrated. Each question needs a different table and a different geography. Write the question before opening the data so a broad release is not asked to settle a narrow point.",
      "Choose an industry classification that matches the work. County Business Patterns uses the North American Industry Classification System, which groups employers by their primary activity. A support service may sell to several industries, so one code may not cover the market. Pick the closest group, state the mismatch, and avoid summing unrelated codes without a reason.",
      "Decide on the geography before comparing places. A national total can hide a metro concentration, and a county figure can be too small to publish without suppression. Use the narrowest level that the release supports and label the choice. If a county is suppressed, do not substitute a neighboring county silently. Record the gap in the note.",
      "Read establishment counts and employment counts as different measures. An establishment is a physical location, while employment counts jobs. A chain with many small locations can look large in establishment counts and modest in employment. A single large employer can dominate a county. Use both measures and say which one the decision depends on.",
      "Look at the establishment size classes. A market made of many small firms may buy a standardized service, while a market with a few large firms may prefer a custom contract. The size mix also affects sales effort and support load. Record the dominant class rather than only the total. The shape of the market matters as much as its size.",
      "Check the publication lag and the reference year. County Business Patterns is released after the reference period, and the most recent year may not describe the current market. Note the year beside every figure. If the decision is sensitive to recent change, pair the data with a more current indicator. Do not present an old count as a live measure.",
      "Pair employer data with wage data from a separate source. The Bureau of Labor Statistics publishes employment and wage estimates through the Occupational Employment and Wage Statistics program and a quarterly census of employment and wages. Those series answer different questions from County Business Patterns. Keep the sources in separate columns and avoid dividing one by another to invent a new statistic.",
      "Use the data to size a search, not to promise a result. A county with many establishments may still have few buyers for a specialized service, and a small county may hold one ideal client. The count frames the universe; it does not prove demand. Test the frame with conversations, referrals, and a small outreach sample. Record what the sample showed.",
      "Consider remote delivery when reading the geography. A Philippines-based support lane can serve a client in another state or country, so the relevant market may be larger than the team's own city. Use the geography of the client base, not the vendor's office, when the service is remote. State that assumption explicitly because it changes every count.",
      "Watch for suppression and noise in small areas. Statistical agencies suppress cells that could identify a single employer, and small counts can be volatile. A missing value is not zero. Treat a suppressed cell as unknown and choose a larger geography if the decision needs a number. Document the substitution.",
      "Build a one-page market note with the industry, geography, year, measures, and limits. Add the source URL and the access date so a reviewer can repeat the pull. Write one sentence about what would change the conclusion. Keep the note beside the account plan rather than in a personal file. A short, sourced note is easier to challenge and improve.",
      "Set a review date and a test. If the team uses the note to choose a target sector, record the outreach result after a set number of conversations. Compare the result with the original frame. Update the note when a new release appears or the service changes. The data is useful when it sharpens a decision, not when it decorates a slide.",
      "Compare the public frame with the client's own account list. The team may already serve a handful of firms in a sector and know where referrals come from. Put those names, industries, and locations beside the public counts. A pattern that the public data cannot show may be the most useful market signal. Record the comparison without turning one client into a trend.",
      "Record the access date and the exact table for every figure. A colleague should be able to repeat the pull without guessing which release or filter was used. Note whether the figure is a count, an estimate, or a suppressed cell. Keep the query or the download link beside the note. A number without its table is hard to defend in a planning meeting.",
      "Use the market note carefully in a sales conversation. A public count can show that a sector is large, but it cannot show that a specific company needs help. Lead with the client's workflow and use the data as context. Avoid implying that a government series endorses the service. The note is an internal planning aid, not a marketing claim."
    ],
    "dataSections": [
      {
        "heading": "Pick the industry",
        "text": "Use the closest NAICS group and write why it fits. Note the codes that were excluded. Record the mismatch when the service spans sectors. Review the choice with someone who knows the offer. Do not average unrelated industries."
      },
      {
        "heading": "Choose the geography",
        "text": "Pick the area that contains the client base. Use the narrowest supported level. Label a national or regional substitute. Check for suppressed counties. Keep the geography consistent across sources."
      },
      {
        "heading": "Read the size mix",
        "text": "Compare establishment counts with employment. Look at the size classes. Note whether a few employers dominate. Use the mix to shape the sales approach. Record the dominant class beside the total."
      },
      {
        "heading": "Check the period",
        "text": "Write the reference year and the release date. Note the lag. Pair the count with a current indicator when recency matters. Do not present an old year as a live measure. Review the note when a new release appears."
      },
      {
        "heading": "Pair with wage data",
        "text": "Keep employer counts and wage estimates in separate columns. Note the source, definition, and geography for each. Do not divide one by the other. Use both to frame a range. Test the range with real conversations."
      },
      {
        "heading": "Write the limit",
        "text": "State what the data cannot prove about demand, budget, or fit. Put the limit beside the conclusion. Ask whether the decision changes if the limit is material. Collect local evidence before committing. Review the note when the target changes."
      }
    ],
    "faqs": [
      {
        "question": "Can County Business Patterns tell me how many clients will buy my service?",
        "answer": "No. It counts establishments and employment by industry and place. It does not measure buying intent, budget, or fit. Use it to frame the size of a market, then test demand with outreach and conversations."
      },
      {
        "question": "Why are some county figures missing?",
        "answer": "Statistical agencies suppress cells that could identify a single employer or that fail disclosure rules. A missing figure is not zero. Use a larger geography or another source, and record the substitution in your note."
      },
      {
        "question": "Should I use establishment counts or employment counts?",
        "answer": "Use both. Establishments describe locations, while employment describes jobs. A market can look large by one measure and small by the other. State which measure the decision depends on and why."
      },
      {
        "question": "How current is the data?",
        "answer": "County Business Patterns is released after the reference period, so the latest available year may lag the current market. Write the year beside every figure and pair it with a more current indicator when recency matters."
      }
    ],
    "sources": [
      "https://www.census.gov/programs-surveys/cbp.html",
      "https://www.census.gov/data/developers/data-sets/cbp-nonemp-zbp/cbp-api.html",
      "https://www.bls.gov/cew/",
      "https://www.bls.gov/oes/"
    ],
    "related": [
      "philippines-sales-development-research",
      "philippines-msme-outsourcing-needs",
      "philippines-workforce-planning-data"
    ],
    "hero": "/daily10/outsourcedphilippines/using-census-county-business-patterns-to-size-a-support-market.webp",
    "thumbnail": "/daily10/outsourcedphilippines/using-census-county-business-patterns-to-size-a-support-market.webp"
  },
  {
    "slug": "what-cisa-cyber-essentials-says-about-small-team-security",
    "title": "What CISA Cyber Essentials Says About Small Team Security",
    "excerpt": "How a small Philippines-based support lane can turn CISA's baseline practices into a maintainable inventory, identity, patch, backup, and response routine.",
    "published": "2026-11-16",
    "updated": "2026-11-16",
    "statistic": "CISA's Cyber Essentials guidance organizes basic cyber hygiene into six areas, including inventory and control of hardware and software, identity and access management, data protection, configuration and patch management, incident response, and training. It is written for organizations that do not have a large security staff.",
    "methodology": "This note reviews CISA's Cyber Essentials guidance, the Secure by Design initiative, and the NIST Cybersecurity Framework. It asks how an operations lead can translate a baseline written for broad organizations into a small support lane that handles client systems. It does not audit a specific environment and does not claim that any baseline prevents every attack.",
    "body": [
      "Treat the guidance as a baseline, not a certification. Cyber Essentials describes practices that reduce common risk, and it does not promise that a team will stop a determined attacker. Read each area as a question about the lane's actual tools. A support team with five client systems needs a smaller inventory than an enterprise, but it still needs one.",
      "Inventory the devices and applications the team uses for client work. Include laptops, phones, browsers, extensions, and the client's own tools. Note who owns each item and whether it is approved. An unlisted tool is a blind spot in every other control. Review the list when a new client or tool arrives.",
      "Control identities before adding more passwords. Use named accounts, multi-factor authentication, and a password manager that the team can audit. Remove access when a person leaves or changes roles. Shared credentials make it hard to know who did what. If a client requires a shared account, record the exception and the compensating check.",
      "Patch on a cadence the team can keep. Set a schedule for operating systems, browsers, and the applications that touch client data. Track the exceptions instead of pretending they do not exist. A patch that breaks a client workflow needs a documented workaround and a review date. The cadence matters more than a one-time cleanup.",
      "Back up the work and test a restore. A backup that has never been restored is an assumption. Choose the files that matter, store a copy outside the primary system, and restore a sample on a schedule. Record the result and the person who verified it. The backup is part of the service, not an IT afterthought.",
      "Write a short incident response path. Name who the team calls, how the client is told, and how evidence is preserved. Include a lost device, a compromised account, and a misdirected message. Practice the first hour with a tabletop exercise. A path that only exists in a policy document will not survive a real event.",
      "Train the team on the specific risks they face. Phishing, payment change requests, and fake client instructions are more relevant to a support lane than a general security lecture. Use real examples from the account, with sensitive details removed. Ask people to demonstrate the reporting step, not just recall it. Repeat the training when the tools change.",
      "Review vendor and client access separately. A client may grant broad access that the task does not need. Ask for the minimum role and confirm it in writing. Review the access list each quarter and remove what is unused. A vendor's security promise does not transfer responsibility for the permissions the team holds.",
      "Measure a few things that show the baseline is working. Count devices without a patch, accounts without multi-factor authentication, and restores tested. Track the time to disable a departed worker's access. Use the measures to choose one fix, not to create a dashboard nobody reads. A small set of honest measures is more useful than a broad score.",
      "Write down the exceptions and the reason. A small team will always have a device that cannot be patched or a client tool that lacks single sign-on. Record the risk, the compensating control, and the review date. An undocumented exception looks like neglect. A documented one shows the team made a deliberate trade-off.",
      "Adapt the guidance to the client's contract. A client may require a specific framework, a security questionnaire, or an audit right. Map the baseline to those requirements instead of running two separate programs. Keep the evidence in one place so a review does not become a scavenger hunt. Note where the client's rule is stricter.",
      "Set a quarterly review and one improvement. Read the inventory, the access list, and the restore record together. Choose one gap that would matter most if it failed. Fix it and record the result before the next review. The goal is a baseline the team can maintain, not a perfect program that collapses under a busy month.",
      "Decide which controls the client owns and which the lane owns. A client may manage the main application while the team manages laptops, browsers, and shared mailboxes. Write the split in the account file so a review does not assume coverage that does not exist. Ask the client to confirm the boundary each year. A clear ownership line prevents two teams from waiting for each other.",
      "Keep a simple evidence folder for the baseline. Store the inventory, the access review, the patch exceptions, and the restore record in one place. Use dates and owner names rather than a score. A reviewer should be able to see what was checked and what was not. The folder is also useful when a client sends a security questionnaire.",
      "Review the baseline after a near miss, not only after an incident. A suspicious message that was reported quickly or a patch that was delayed without harm still contains a lesson. Ask which step worked and which step was luck. Change one thing and test it. A near miss is cheaper evidence than a breach."
    ],
    "dataSections": [
      {
        "heading": "Inventory devices",
        "text": "List every device, browser, extension, and client tool used for work. Name the owner and approval state. Remove what is unapproved. Review the list when a client or tool changes. Keep it where the team can see it."
      },
      {
        "heading": "Control identities",
        "text": "Use named accounts and multi-factor authentication. Record shared-account exceptions and compensating checks. Remove access on role change or departure. Review the list each quarter. Test one removal end to end."
      },
      {
        "heading": "Patch on a cadence",
        "text": "Set a schedule the team can keep. Track exceptions with a workaround and review date. Check that client tools are covered. Record the completion. Do not rely on a one-time cleanup."
      },
      {
        "heading": "Back up and test",
        "text": "Choose the files that matter and store a separate copy. Restore a sample on a schedule. Record who verified the content. Keep the result with the service record. Treat a failed restore as an incident."
      },
      {
        "heading": "Prepare a response",
        "text": "Write the first-hour path for a lost device, a compromised account, and a misdirected message. Name the contacts and the evidence steps. Practice with a tabletop exercise. Update the path after a change. Keep it short."
      },
      {
        "heading": "Train the team",
        "text": "Use real account examples with sensitive details removed. Ask people to show the reporting step. Repeat training when tools change. Record attendance and questions. Keep the session practical rather than general."
      }
    ],
    "faqs": [
      {
        "question": "Is Cyber Essentials a compliance standard?",
        "answer": "No. It is a set of baseline practices intended to reduce common risk. A client or regulator may require a specific framework, and that requirement should be mapped separately. Treat Cyber Essentials as a starting point for the lane."
      },
      {
        "question": "How large does a team need to be for these controls?",
        "answer": "The practices apply to small teams as well as large ones, but the implementation can be simpler. A five-person lane can use a short inventory, named accounts, a patch calendar, and a tested backup. The scale changes, not the need."
      },
      {
        "question": "What should a small team do first?",
        "answer": "Start with an inventory and a named-account review. Those two steps make patching, access removal, and incident response easier to reason about. Add a restore test next. Choose one improvement per quarter rather than a full program at once."
      },
      {
        "question": "Does multi-factor authentication solve account risk?",
        "answer": "It reduces the risk of a stolen password being used alone, but it does not replace access review, patching, or user training. Attackers can target the recovery path or a shared account. Use it as one layer among several."
      }
    ],
    "sources": [
      "https://www.cisa.gov/resources-tools/resources/cyber-essentials",
      "https://www.cisa.gov/securebydesign",
      "https://www.nist.gov/cyberframework",
      "https://www.cisa.gov/topics/cybersecurity-best-practices"
    ],
    "related": [
      "philippines-cybersecurity-outsourcing-controls",
      "philippines-data-privacy-workflow-research",
      "philippines-operations-escalation-research"
    ],
    "hero": "/daily10/outsourcedphilippines/what-cisa-cyber-essentials-says-about-small-team-security.webp",
    "thumbnail": "/daily10/outsourcedphilippines/what-cisa-cyber-essentials-says-about-small-team-security.webp"
  },
  {
    "slug": "using-bls-employment-projections-to-plan-support-coverage",
    "title": "Using BLS Employment Projections to Plan Support Coverage",
    "excerpt": "How to read ten-year occupational projections, separate growth from replacement demand, and use the result as a planning range rather than a headcount promise.",
    "published": "2026-11-16",
    "updated": "2026-11-16",
    "statistic": "The U.S. Bureau of Labor Statistics Employment Projections program publishes ten-year projections of employment by occupation and industry, including annual openings that combine projected growth with replacement needs.",
    "methodology": "This note reviews the BLS Employment Projections program, the Occupational Outlook Handbook, the Occupational Employment and Wage Statistics program, and state-level projection resources. It asks how an operations lead can use a long-range projection to plan support coverage without treating it as a forecast for one role, one client, or one hiring market.",
    "body": [
      "Read the projection as a direction, not a forecast for one role. The Bureau of Labor Statistics publishes a ten-year horizon with assumptions about the economy, and the further the date, the wider the uncertainty. Use it to frame a conversation about demand, not to justify a headcount. Write the horizon and the release date beside the number.",
      "Separate growth from replacement demand. An occupation can have little net growth and still produce many openings because people leave or retire. The annual openings figure combines both. A team planning coverage should care about the total openings in the relevant occupation, not only the growth rate. Record which component the decision depends on.",
      "Check the occupation code against the actual work. A support lane may combine tasks from several occupations, and no single code describes it perfectly. Use the closest code as an anchor and note the mismatch. If the role changes, revisit the mapping. A precise-looking code can hide a broad difference in duties.",
      "Look at the industry projection as well as the occupation. A growing industry may hire more support staff even if the occupation total is flat. The industry view shows where the demand sits. Use both views when the client's sector is narrow. Record which one drove the conclusion.",
      "Use state or metro projections when the hiring market is local. National projections smooth over regional differences that matter for recruiting and wages. If a local projection is unavailable, say so and use the national figure as context. Do not present a national number as a local one.",
      "Compare the projection with current job postings and the team's own funnel. A projection describes a long trend; postings and applications describe the present. If the two disagree, the difference may be a skills mismatch, a schedule problem, or a sourcing issue. Write both readings in the planning note.",
      "Do not convert a projection into a wage. Employment projections do not set pay, and wage data comes from a separate survey with its own definitions. Keep the two sources separate. If the team needs a budget range, use the wage survey and label its geography and period. A projection is not a price list.",
      "Account for automation and task change. The projections include assumptions about productivity and technology, but the effect on a specific support task can be uneven. A task may shrink while a related review or exception role grows. Map the task, not just the occupation title. Record the assumption the plan depends on.",
      "Check the education and training categories. The projections describe the typical entry path for an occupation, and a support role may require different experience. Use the category as context, not as a hiring requirement. A mismatch can explain why a candidate pool looks small. Adjust the requirement or the sourcing plan.",
      "Build a coverage model with ranges. Use the projection to set a low and high expectation for demand, then test both against the team's capacity and the client's service level. A single-point forecast invites false confidence. A range makes the trade-off visible. Record the assumptions behind each end of the range.",
      "Review the model when a new projection is released. The bureau updates the series periodically, and the assumptions can change. Compare the new release with the prior one and note what moved. Do not silently replace the old note. A short change log keeps the planning history readable.",
      "Close with a decision and a review date. State what the team will do differently because of the projection, such as widening a search, changing a training plan, or revisiting a service line. Name the person who will check the result. The projection is useful only when it changes a choice the team can observe.",
      "Use the projection to test a training plan. If the occupation outlook suggests steady replacement demand, a short internal training path may be more useful than a long search for an exact match. Identify the tasks a new hire can learn in the first month and the tasks that need experience. Record the training cost beside the hiring cost. The comparison turns a projection into an operating choice.",
      "Check for overlap between occupation codes before adding their openings. Two codes may describe adjacent work, and summing them can double-count the same labor market. Read the definitions and choose the one that best matches the lane. If the work spans both, present a range rather than a single total. Note the overlap in the planning note.",
      "Record the difference between projected openings and the team's actual applicant flow. A projection may suggest a healthy market while the team sees few qualified applicants. The gap can point to a schedule, a language requirement, or a sourcing channel. Write the observed numbers for a fixed period. Do not dismiss the local evidence because the national trend looks favorable.",
      "Do not use the projection to set a service-level promise. A long-range estimate cannot tell the team how quickly a specific role will be filled. Keep hiring assumptions separate from client commitments. If a client asks for a start date, base it on the current funnel and a named fallback. Review the promise when the funnel changes.",
      "Write a short assumptions page beside the model. List the occupation code, the geography, the horizon, the wage source, and the funnel period. Add the one assumption that would change the recommendation if it were wrong. Ask a colleague to challenge that assumption before the plan is shared. A model with visible assumptions is easier to repair than one that looks authoritative."
    ],
    "dataSections": [
      {
        "heading": "Read the projection",
        "text": "Write the occupation code, the horizon, and the release date. Note the headline growth and the annual openings. Check the assumptions. Record which figure the decision uses. Keep the source link."
      },
      {
        "heading": "Separate growth and replacement",
        "text": "Use annual openings to capture both components. Do not read growth alone as hiring demand. Note the replacement share if published. Compare with current postings. Record the difference."
      },
      {
        "heading": "Check the geography",
        "text": "Prefer a state or metro projection when the hire is local. Label a national substitute. Do not present a national figure as local. Note the period. Review the choice with the hiring owner."
      },
      {
        "heading": "Map the tasks",
        "text": "List the tasks in the lane and compare them with the occupation description. Note the mismatch. Use the closest code as an anchor. Revisit the map when scope changes. Record the assumption."
      },
      {
        "heading": "Pair with wages",
        "text": "Keep projections and wage estimates in separate columns. Note each source and period. Do not derive a wage from a projection. Use both to frame a range. Test the range with actual offers."
      },
      {
        "heading": "Write the limit",
        "text": "State what the projection cannot say about one client, one city, or one skill. Put the limit beside the conclusion. Ask whether the decision changes if the limit is material. Collect local evidence before committing. Review the note on the next release."
      }
    ],
    "faqs": [
      {
        "question": "Can a national projection tell me how many support staff to hire?",
        "answer": "No. It describes a broad occupational or industry trend over a ten-year horizon. Your lane, client, location, and schedule are more specific. Use the projection as context and test the actual hiring funnel before committing to a headcount."
      },
      {
        "question": "Why do annual openings exceed projected growth?",
        "answer": "Annual openings combine growth with replacement demand, which includes people who leave an occupation or retire. An occupation can have little net growth and still need many new workers. Read both components before drawing a conclusion."
      },
      {
        "question": "Should I use the occupation or the industry projection?",
        "answer": "Use both when the client's sector is narrow. The occupation view describes the work, while the industry view describes where demand sits. Record which one drove your conclusion and note any mismatch."
      },
      {
        "question": "How often should the projection be reviewed?",
        "answer": "Review it when a new release appears and when the role, location, or service line changes. Keep the prior note and record what moved. A short change log is more useful than replacing the old figure without explanation."
      }
    ],
    "sources": [
      "https://www.bls.gov/emp/",
      "https://www.bls.gov/ooh/",
      "https://www.bls.gov/oes/",
      "https://www.bls.gov/cew/"
    ],
    "related": [
      "philippines-workforce-planning-data",
      "philippines-virtual-assistant-role-design-research",
      "philippines-work-queue-design-research"
    ],
    "hero": "/daily10/outsourcedphilippines/using-bls-employment-projections-to-plan-support-coverage.webp",
    "thumbnail": "/daily10/outsourcedphilippines/using-bls-employment-projections-to-plan-support-coverage.webp"
  },
  {
    "slug": "reading-eeoc-background-check-guidance-for-offshore-hiring",
    "title": "Reading EEOC Background Check Guidance for Offshore Hiring",
    "excerpt": "What a support-team lead should know about job-relatedness, disclosure, adverse action, vendor oversight, and record handling when screening offshore candidates.",
    "published": "2026-11-16",
    "updated": "2026-11-16",
    "statistic": "The U.S. Equal Employment Opportunity Commission explains that when an employer uses a third party to obtain a background report, the federal Fair Credit Reporting Act requires a disclosure, written authorization, and specific steps before taking adverse action.",
    "methodology": "This note reviews EEOC background check guidance, Federal Trade Commission resources on consumer reports, and U.S. Department of Labor guidance. It asks how a team hiring Philippines-based support staff can make screening decisions that are job-related, consistent, documented, and respectful of the candidate. It is not legal advice and does not substitute for counsel in the hiring location.",
    "body": [
      "Start by identifying what the check is for. A criminal record check, an employment verification, and a credit report are different products with different rules. The role may justify one and not another. Write the purpose before choosing a vendor. A check that cannot be tied to the job is hard to defend.",
      "Use a clear and separate disclosure. The federal consumer reporting rules require a standalone disclosure that the employer may obtain a consumer report for employment purposes. Do not bury it in the application or add unrelated waivers. Give the candidate a copy and obtain written authorization. Keep the signed form with the hiring record.",
      "Apply the same standard to every candidate for the role. A check applied only to some applicants can create a discrimination risk even when the intent is benign. Write the rule and the exceptions before the search starts. Record who approved an exception. Consistency is easier to show when the rule is written.",
      "Consider the job-relatedness of the check. The EEOC guidance asks whether a screening criterion is relevant to the position and whether a less discriminatory alternative exists. A support role may need a confidentiality check but not a credit history. Document the reasoning. Do not copy a check from another role without review.",
      "Follow the adverse action process if the report may lead to a decision. The candidate usually gets a pre-adverse notice, a copy of the report, and a chance to respond before the final decision. The exact steps depend on the law and the vendor. Build the sequence into the hiring workflow. Do not improvise it in an email.",
      "Protect the report and the decision record. Background reports contain sensitive data and should be visible only to the people who need them. Store them in the hiring system, not in a shared drive or a chat thread. Set a retention period with counsel. Delete the report when the period ends.",
      "Check the vendor's practices as carefully as the candidate's record. Ask how the vendor obtains data, how it handles disputes, and where it stores reports. A vendor that cannot explain its process creates risk for the employer. Review the contract and the security terms. Record the review date.",
      "Account for the hiring location and the candidate's location. A Philippines-based candidate may be subject to local data privacy rules as well as the client's policy. The vendor may not have coverage in every country. Confirm the scope before promising a check. Consult local counsel when the answer is unclear.",
      "Separate the client's requirement from the employer's obligation. A client may ask for a check that the employer cannot lawfully run or that is broader than the role needs. Discuss the requirement before the search. Offer a lawful alternative when possible. Record the client's decision and the advice received.",
      "Write a short candidate communication. Explain what is checked, how long it takes, and who to contact with a question. Avoid jargon and do not promise an outcome. A clear note reduces anxiety and support requests. Keep it consistent with the disclosure and the adverse action steps.",
      "Audit a sample of hires each year. Check that the disclosure was signed, the report was stored correctly, and the adverse action steps were followed when needed. Look for checks that were run without a recorded purpose. Fix the process, not just the file. Keep the audit note with the hiring policy.",
      "Close with a review and a named owner. Assign one person to keep the policy current and to answer questions from recruiters and clients. Review the policy when the role, the vendor, or the law changes. Record the review date and the change. A background check process is a compliance system, not a one-time form.",
      "Keep the screening criteria in the job description and the interview guide. A criterion that appears only in a vendor portal is hard to explain to a candidate or a reviewer. Write the requirement in plain language and link it to the task. Remove criteria that the role does not need. A short, visible list is easier to apply consistently.",
      "Tell the candidate how to dispute an inaccurate report. The vendor usually has a process, and the employer should be able to point to it. Keep the contact information with the disclosure and the adverse action notice. A dispute that cannot find a path becomes a complaint. Record the question and the answer in the hiring file.",
      "Review the process when the client changes, not only when the law changes. A new client may add a screening requirement, a new market may change the vendor's coverage, and a new role may make an old check irrelevant. Revisit the purpose, the disclosure, and the vendor scope together. Record the decision. A policy that is never revisited slowly stops matching the work.",
      "Keep the candidate experience in view. A long silence after a check can feel like a rejection, and a vague request for documents can create avoidable anxiety. Send a short status note with the expected timeline and a contact for questions. Do not ask for more information than the process requires. A clear process protects the employer and respects the candidate."
    ],
    "dataSections": [
      {
        "heading": "Classify the check",
        "text": "Write the purpose and the product, such as a criminal record check or employment verification. Confirm it is relevant to the role. Note the vendor and the geography. Review the choice when the role changes. Do not bundle unrelated checks."
      },
      {
        "heading": "Use a compliant disclosure",
        "text": "Keep the disclosure separate from the application. Give the candidate a copy and obtain written authorization. Store the signed form. Do not add unrelated waivers. Review the form with counsel."
      },
      {
        "heading": "Apply one standard",
        "text": "Write the rule before the search. Record exceptions and the approver. Apply the check to every candidate for the role. Keep the evidence. Review the rule each year."
      },
      {
        "heading": "Handle adverse action",
        "text": "Build the pre-adverse notice, report copy, response window, and final decision into the workflow. Follow the vendor and legal steps. Record dates and recipients. Do not improvise by email. Keep the file."
      },
      {
        "heading": "Protect the record",
        "text": "Store reports in the hiring system with restricted access. Set a retention period with counsel. Delete on schedule. Keep only the decision note. Audit a sample each year."
      },
      {
        "heading": "Review the vendor",
        "text": "Ask how data is obtained, disputed, and stored. Check coverage in the candidate's country. Review security terms and the contract. Record the review date. Replace a vendor that cannot explain its process."
      }
    ],
    "faqs": [
      {
        "question": "Does EEOC guidance apply to hiring in the Philippines?",
        "answer": "The guidance explains U.S. federal standards for employers covered by those laws. A Philippines-based hire may also be subject to local rules, and the client's policy may add requirements. Treat the guidance as one input and confirm the applicable law with counsel."
      },
      {
        "question": "Can I run a background check without telling the candidate?",
        "answer": "The federal consumer reporting rules require a clear disclosure and written authorization before a third party obtains a report for employment purposes. Some checks and jurisdictions have additional rules. Build the notice and consent into the process rather than adding them later."
      },
      {
        "question": "What is adverse action?",
        "answer": "It is the step that follows a report that may lead to a decision not to hire or to withdraw an offer. The candidate usually receives a notice, a copy of the report, and a chance to respond before the final decision. The exact sequence depends on the law and the vendor."
      },
      {
        "question": "Should every support role require the same check?",
        "answer": "No. The check should be tied to the job and applied consistently to candidates for that role. A role that handles sensitive data may justify a different check from one that does not. Document the reasoning and review it when the scope changes."
      }
    ],
    "sources": [
      "https://www.eeoc.gov/background-checks/what-employers-need-know",
      "https://www.ftc.gov/business-guidance/resources/using-consumer-reports-what-employers-need-know",
      "https://www.dol.gov/agencies/whd",
      "https://www.ftc.gov/business-guidance/privacy-security"
    ],
    "related": [
      "philippines-recruitment-sourcing-research",
      "philippines-virtual-assistant-role-design-research",
      "philippines-data-privacy-workflow-research"
    ],
    "hero": "/daily10/outsourcedphilippines/reading-eeoc-background-check-guidance-for-offshore-hiring.webp",
    "thumbnail": "/daily10/outsourcedphilippines/reading-eeoc-background-check-guidance-for-offshore-hiring.webp"
  }
];
