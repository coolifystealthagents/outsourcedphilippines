// 2026-11-23 batch.
export const nov23ResearchPosts = [
  {
    "slug": "outsourcedphilippines-what-philippine-energy-statistics-mean-for-business-continuity-planning",
    "title": "What Philippine Energy Statistics Mean for Business Continuity Planning",
    "excerpt": "National energy data describes the grid and the market, not the backup power at one site. Continuity planning needs the public context beside a local outage test and a shift-level fallback.",
    "statistic": "The Department of Energy and the Philippine Statistics Authority publish generation, consumption, and electrification data, while the World Bank tracks regional access indicators. These sources describe the grid and the market at a national or regional level. They do not measure the backup power at a specific site, the condition of a building's wiring, or the duration of a local outage. A continuity plan that treats a national access figure as a site guarantee will miss the risk that matters.",
    "methodology": "This desk review examines public energy sources and the operational questions a distributed support team should answer. It separates a national indicator from a site survey and from a live transfer test. The note does not certify a location or predict an outage. It proposes a record that keeps the public context, the local test, and the fallback decision visible beside the service plan.",
    "body": [
      "Begin with the definition of the indicator. Electrification access, installed capacity, and actual generation measure different parts of the system, and a headline can refer to any of them. Record the definition, the geography, and the reference period before the figure informs a plan. A number without its definition is a slogan rather than evidence.",
      "Separate the generation mix from reliability. A country can report adequate total capacity while a local distribution area still experiences frequent interruptions. Record the source of the reliability claim and the area it covers. The continuity question is not whether the country has power but whether the team's location keeps power through a shift.",
      "Map the team's locations to the grid and to the weather risks that affect them. A site near a flood-prone substation has a different exposure from one on a hospital circuit. Record the location, the known hazard, and the source. The map should be reviewed when an agent moves or a new site is added.",
      "Treat a national access figure as a starting point, not a substitute for a site check. Ask each site about the utility, the backup source, the transfer method, and the last test. Record the answers and the date. A site that has a generator but no fuel is not covered.",
      "Plan backup power by shift and by task. A voice queue needs enough runtime to finish the current call and reach a stable state, while a batch role may need a longer window. Record the required runtime for each role and the device that provides it. A single runtime target for every role will either waste money or fail the critical one.",
      "Test the transfer and the return, not only the battery. An automatic transfer switch can fail at the moment it is needed, and a manual switch may take longer than the team expects. Record the test time, the result, and the person who observed it. The plan should include what the agent does during the gap.",
      "Record outages and their service effect. Track the start, the duration, the systems lost, the calls dropped, and the work deferred. Record the cause at the level the team can verify. A pattern in one site or one utility points to a local fix rather than a national trend.",
      "Review the plan with the provider and the client. The client should know which work pauses, which continues, and who authorizes a failover. Record the approval and the review date. A continuity plan that only the provider has read is not a shared plan."
    ],
    "dataSections": [
      {
        "heading": "National indicator",
        "text": "Record the energy indicator, its definition, geography, and reference period. Use it as context for the grid, not as proof of a site's backup power. Note the source and the year beside the figure. A later reviewer should see which decision the context informed."
      },
      {
        "heading": "Site exposure",
        "text": "Map each work location to its utility, known hazard, backup source, and last transfer test. Update the map when an agent moves. Record the person who confirmed the site details. The map should show the gap before an outage exposes it."
      },
      {
        "heading": "Runtime by role",
        "text": "Set the backup runtime each role needs to finish a contact and reach a stable state. Test the transfer and the return. Record the runtime observed and the person who checked it. A test that only confirms the battery charges is not a continuity test."
      },
      {
        "heading": "Outage record",
        "text": "Track duration, systems lost, calls dropped, and work deferred. Review the pattern by site and by utility. Record the cause at the level the team can verify. A recurring pattern should change the backup plan, not only the outage log."
      }
    ],
    "faqs": [
      {
        "question": "Does a national electrification rate prove a home office has reliable power?",
        "answer": "No. It describes access at a population level. A site check, a backup source, and a transfer test are still needed for the specific role."
      },
      {
        "question": "How much backup runtime should a support team require?",
        "answer": "Enough for the role to finish the current contact and reach a stable state, plus a margin. The requirement should be set per role and tested."
      },
      {
        "question": "Should the client approve the continuity plan?",
        "answer": "Yes. The client should know which work pauses, which continues, and who authorizes a failover during an outage."
      }
    ],
    "sources": [
      "https://www.doe.gov.ph/",
      "https://psa.gov.ph/",
      "https://openstat.psa.gov.ph/",
      "https://www.iea.org/data-and-statistics",
      "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=PH",
      "https://www.erc.gov.ph/",
      "https://www.ngcp.ph/"
    ],
    "related": [
      "philippines-bpo-workforce-research",
      "philippines-remote-onboarding-research",
      "remote-work-philippines-evidence"
    ],
    "published": "2026-11-23",
    "updated": "2026-11-23",
    "hero": "/images/november-23/outsourcedphilippines-what-philippine-energy-statistics-mean-for-business-continuity-planning.webp",
    "thumbnail": "/images/november-23/outsourcedphilippines-what-philippine-energy-statistics-mean-for-business-continuity-planning.webp"
  },
  {
    "slug": "outsourcedphilippines-reading-world-bank-logistics-data-for-order-support-planning",
    "title": "Reading World Bank Logistics Data for Order Support Planning",
    "excerpt": "The Logistics Performance Index compares countries on trade and transport processes. An order support team needs the lane, the exception path, and the local queue, not only the national score.",
    "statistic": "The World Bank publishes the Logistics Performance Index and related trade and transport indicators for the Philippines and its peers. The index combines customs, infrastructure, international shipments, logistics competence, tracking, and timeliness into a comparative score. It describes a country's logistics environment at the time of the survey. It does not measure the performance of a specific carrier, warehouse, or client account.",
    "methodology": "This desk review examines public logistics sources and the questions an order support team should ask before using them. It separates the national index from a lane-level measure and from the client's own order data. The note does not rank a provider or predict a delivery time. It proposes a record that keeps the index, the lane evidence, and the service decision together.",
    "body": [
      "Read the index by component before using the overall score. Customs, infrastructure, and timeliness can move in different directions, and an average can hide the part that affects the client. Record the component scores and the year. An order team that only cites the rank will miss the specific bottleneck.",
      "Separate the country score from the lane the order actually travels. A national improvement may not reach a secondary port or an inland route. Record the origin, the destination, the carrier, and the service type. The lane record is the evidence the support team can act on.",
      "Map the support work to the order stages. An agent may confirm an address, correct a document, trace a shipment, or explain a delay. Each stage needs a different source and a different escalation. Record the stage, the owner, and the system of record. A generic order support queue will blur work that needs different controls.",
      "Use the public data to frame a question, not to promise a delivery. Ask which lane or process is most exposed and what the client's own history shows. Record the question and the evidence that would answer it. A country index cannot commit a carrier to a date.",
      "Measure the local queue instead of relying on the index. Track the orders touched, the first-pass completeness, the handoffs, the exception rate, and the time to resolve. Record the definitions and the period. These measures show whether the support lane is improving inside the environment the index describes.",
      "Write the exception path before the peak. A missing document, a customs hold, and a failed delivery attempt each need a named owner and a response window. Record the trigger, the action, and the client contact. An agent who has to invent the path under pressure will guess.",
      "Compare the index over time with caution. The survey methodology and the sample can change between editions, and a rank is relative to the countries included. Record the edition and the comparison set. A one-place move may reflect the peer group rather than a real change in the lane.",
      "Keep the evidence with the account plan. A later reviewer should see the index edition, the lane data, the queue measures, and the decisions they supported. Record the review date and the owner. The note should be refreshed when a carrier, a route, or the client's volume changes."
    ],
    "dataSections": [
      {
        "heading": "Index edition",
        "text": "Record the Logistics Performance Index edition, the component scores, and the comparison set. Use the component that matches the client's lane. Note the survey period and the countries included. A rank without that context is easy to misread."
      },
      {
        "heading": "Lane evidence",
        "text": "Record the origin, destination, carrier, service type, and the client's own transit history for the lane. Add the documents and handoffs that the lane requires. Note the source and the date of the history. The lane record should be specific enough to test a delay claim."
      },
      {
        "heading": "Queue measures",
        "text": "Track orders touched, first-pass completeness, exception rate, handoffs, and time to resolve with clear definitions. Record the period and the queue the measures cover. Compare the result with the previous period rather than a single target. The measure should show where the work waits."
      },
      {
        "heading": "Exception path",
        "text": "Name the trigger, the owner, the response window, and the client contact for each common order exception. Record the authority limit for a credit, a reship, or a cancellation. Test the path with a real exception before the peak. An agent should not have to invent the route under pressure."
      }
    ],
    "faqs": [
      {
        "question": "Can the Logistics Performance Index predict a delivery date?",
        "answer": "No. It compares national logistics environments. A delivery date depends on the lane, the carrier, the documents, and the client's own history."
      },
      {
        "question": "Which index component matters most for order support?",
        "answer": "The one that matches the bottleneck in the lane. Customs, infrastructure, tracking, and timeliness affect different stages of the order."
      },
      {
        "question": "What should an order support team measure locally?",
        "answer": "Order completeness, exception rate, handoffs, time to resolve, and the reasons for delay, using definitions the client can review."
      }
    ],
    "sources": [
      "https://lpi.worldbank.org/",
      "https://data.worldbank.org/indicator/LP.LPI.OVRL.XQ?locations=PH",
      "https://psa.gov.ph/",
      "https://www.dti.gov.ph/",
      "https://www.unescap.org/",
      "https://www.wto.org/",
      "https://www.customs.gov.ph/"
    ],
    "related": [
      "philippines-bpo-workforce-research",
      "philippines-remote-onboarding-research",
      "remote-work-philippines-evidence"
    ],
    "published": "2026-11-23",
    "updated": "2026-11-23",
    "hero": "/images/november-23/outsourcedphilippines-reading-world-bank-logistics-data-for-order-support-planning.webp",
    "thumbnail": "/images/november-23/outsourcedphilippines-reading-world-bank-logistics-data-for-order-support-planning.webp"
  },
  {
    "slug": "outsourcedphilippines-what-philippine-tourism-statistics-mean-for-hospitality-support-staffing",
    "title": "What Philippine Tourism Statistics Mean for Hospitality Support Staffing",
    "excerpt": "Visitor arrivals and accommodation data show national seasonality, not a single hotel's booking curve. Hospitality support staffing needs the client's segment, channel mix, and peak-week evidence.",
    "statistic": "The Philippine Statistics Authority and the Department of Tourism publish visitor arrivals, accommodation, and tourism expenditure data. The World Tourism Organization provides comparable international indicators, and the World Bank tracks arrivals for the Philippines. These sources describe national and regional patterns over a reference period. They do not measure the booking volume, the channel mix, or the service level of one hotel or travel account.",
    "methodology": "This desk review examines public tourism sources and the staffing questions a hospitality support team should answer. It separates the national arrival figure from the client's segment and from the local booking queue. The note does not forecast occupancy or recommend a headcount. It proposes a record that keeps the public context beside the client's own demand evidence.",
    "body": [
      "Start with the definition and the period. Visitor arrivals, same-day visitors, overnight tourists, and accommodation guests are different measures, and a headline may combine them. Record the definition and the reference period before the figure informs a plan. A peak month in one measure may not be a peak in another.",
      "Separate the national arrival total from the client's segment. A destination that attracts group tours has a different demand shape from one that serves business travelers. Record the segment, the source market, and the channel. The national figure is context for the segment, not a substitute for it.",
      "Map seasonality to the support work. A booking peak may increase reservation changes, cancellation requests, and multilingual contacts at the same time. Record the months, the expected contact types, and the skills required. A headcount plan that only looks at arrival volume will miss the change in contact mix.",
      "Plan language and channel coverage before the peak. A rise in one source market may need a language the current team does not cover. A shift in channel may move work from email to chat. Record the language, the channel, and the training lead time. The plan should name the gap before the season starts.",
      "Treat the public figure as context and test it against the client's records. Ask for the booking pace, the cancellation rate, the average stay, and the contact volume by week. Record the source and the date. A client that cannot share the data can still describe the pattern and the known events.",
      "Measure the local queue during the peak. Track the contacts per booking, the first-response time, the resolution time, and the rework rate. Record the definitions and the comparison week. The measure should show whether the team absorbed the peak or deferred the work.",
      "Protect the team during the busy weeks. A peak plan that relies on overtime every night will produce errors and absences. Record the rest rule, the break coverage, and the backup for a sudden absence. The staffing plan should be sustainable for the length of the season, not only for the first week.",
      "Review the plan after the season. Compare the forecast with the actual volume, the contact mix, the service level, and the cost. Record the difference and the reason. The next season should start from evidence rather than from the same calendar guess."
    ],
    "dataSections": [
      {
        "heading": "Definition and period",
        "text": "Record whether the figure counts arrivals, overnight tourists, or accommodation guests, and note the reference period. Add the source and the geography. A change in definition can move the apparent peak. Keep the definition with the figure when it informs a staffing plan."
      },
      {
        "heading": "Client segment",
        "text": "Record the source market, the channel mix, and the booking pattern for the specific hotel or travel account. Add the language coverage and the contact types the account receives. Note the client contact who confirmed the pattern. The segment record should be narrow enough to test against the queue."
      },
      {
        "heading": "Peak work mix",
        "text": "Map the expected contact types, languages, and channels to the skills and training lead time needed for the peak. Record the months and the expected change in volume. Add the backup for each critical skill. The plan should show the gap before the season starts."
      },
      {
        "heading": "Season review",
        "text": "Compare forecast and actual volume, service level, rework, and cost after the season. Record the cause of each gap. Ask the team where the plan failed under pressure. The next season should start from that evidence rather than the same calendar guess."
      }
    ],
    "faqs": [
      {
        "question": "Can national visitor arrivals set a hotel support headcount?",
        "answer": "No. The national figure describes a market. The client's segment, channel mix, booking pace, and contact volume determine the staffing need."
      },
      {
        "question": "What should a hospitality support team track during a peak?",
        "answer": "Contacts per booking, first-response time, resolution time, rework, language coverage, and the shifts lost to absence."
      },
      {
        "question": "When should peak planning start?",
        "answer": "Early enough to train for the language and channel mix. A plan that starts in the peak week can only add overtime."
      }
    ],
    "sources": [
      "https://psa.gov.ph/",
      "https://www.tourism.gov.ph/",
      "https://openstat.psa.gov.ph/",
      "https://www.unwto.org/tourism-data",
      "https://data.worldbank.org/indicator/ST.INT.ARVL?locations=PH",
      "https://www.dole.gov.ph/",
      "https://www.boi.gov.ph/"
    ],
    "related": [
      "philippines-bpo-workforce-research",
      "philippines-remote-onboarding-research",
      "remote-work-philippines-evidence"
    ],
    "published": "2026-11-23",
    "updated": "2026-11-23",
    "hero": "/images/november-23/outsourcedphilippines-what-philippine-tourism-statistics-mean-for-hospitality-support-staffing.webp",
    "thumbnail": "/images/november-23/outsourcedphilippines-what-philippine-tourism-statistics-mean-for-hospitality-support-staffing.webp"
  },
  {
    "slug": "outsourcedphilippines-how-philippine-msme-data-frames-outsourcing-demand",
    "title": "How Philippine MSME Data Frames Outsourcing Demand",
    "excerpt": "MSME counts describe the shape of the business population, not the number of firms that will buy support. The useful question is which segment, task, and buying process the data can illuminate.",
    "statistic": "The Department of Trade and Industry publishes Philippine MSME statistics built from establishment counts and employment bands. The Philippine Statistics Authority and international sources provide additional business and labor context. These sources describe how many establishments fall into a size class and where they operate. They do not measure how many firms are ready to outsource, what they would buy, or how long a sales cycle would take.",
    "methodology": "This desk review examines public MSME sources and the questions a service provider should ask before using them. It separates an establishment count from a buyer segment and from a local sales pipeline. The note does not size a market or forecast demand. It proposes a record that keeps the public context, the segment hypothesis, and the local evidence together.",
    "body": [
      "Read the MSME definition before the headline. The size bands depend on employment or asset thresholds, and a change in the definition can move firms between classes. Record the definition, the source, and the year. A count without the definition cannot be compared with another release.",
      "Separate an establishment count from outsourcing demand. A firm may be small, growing, and still prefer to hire locally or use a software tool instead of a service. Record the assumption that connects the count to a need. The assumption is a hypothesis to test, not a finding of the data.",
      "Map the client profile to the data. If the service fits professional services, e-commerce, or clinics, use the segment that matches rather than the whole MSME total. Record the segment, the geography, and the employment band. The narrower profile is more useful for a sales conversation.",
      "Use the data to frame a service hypothesis. A firm with a small back office may need a bounded task such as invoice preparation or inbox triage. Record the task, the expected volume, and the acceptance rule. The hypothesis should be testable with a sample, not a promise about the whole segment.",
      "Measure the local sales cycle instead of inferring it from the count. Track the qualified conversations, the discovery calls, the proposals, the closed engagements, and the time between stages. Record the source and the period. These measures show whether the segment is reachable and ready.",
      "Do not use the establishment count as a quota or a market-size claim. A large count can hide a long sales cycle, a low budget, or a preference for a different model. Record the evidence behind any market statement. A number that is not tied to a buying process will mislead the plan.",
      "Record the assumptions in one note with the date and the owner. List the segment, the task, the geography, the evidence, and the open questions. A later reader should see which parts came from public data and which came from the team's judgment. The note should be refreshed when a new release appears.",
      "Review the note when a new statistical release or a client segment changes. Mark any break in the series and update the source date. Record the change and the decision it affected. The goal is a disciplined question, not a permanent forecast."
    ],
    "dataSections": [
      {
        "heading": "MSME definition",
        "text": "Record the size bands, the thresholds, the source, and the year. A change in the definition can move firms between classes. Note the geography and the sector coverage. Compare only releases that use the same definition."
      },
      {
        "heading": "Segment hypothesis",
        "text": "Name the segment, the task, the geography, and the need that connects the public count to a possible service. Record the assumption as a hypothesis, not a finding. Note the evidence that would confirm or reject it. A narrow statement is easier to test with a real prospect."
      },
      {
        "heading": "Local pipeline",
        "text": "Track qualified conversations, discovery calls, proposals, closed engagements, and the time between stages. Record the source and the period. Add the main reason a prospect declines. The pipeline measure is more useful than the establishment count for a sales plan."
      },
      {
        "heading": "Assumption note",
        "text": "Separate public evidence from team judgment, record the owner and date, and refresh the note when a new release appears. List the open questions beside the assumptions. Mark the claims that need a client conversation. The note should be usable in a planning meeting without the original analyst."
      }
    ],
    "faqs": [
      {
        "question": "Does a high MSME count mean strong demand for outsourcing?",
        "answer": "No. It counts establishments. Demand depends on the segment, the task, the budget, the buying process, and the alternative the firm already uses."
      },
      {
        "question": "How should a provider use MSME statistics?",
        "answer": "To frame a narrow segment and task hypothesis, then test it with discovery calls, proposals, and a bounded work sample."
      },
      {
        "question": "What local evidence is more useful than the count?",
        "answer": "Qualified conversations, proposal rate, closed engagements, sales-cycle length, and the reasons a prospect declines."
      }
    ],
    "sources": [
      "https://www.dti.gov.ph/archives/msme-statistics/",
      "https://psa.gov.ph/",
      "https://openstat.psa.gov.ph/",
      "https://data.worldbank.org/",
      "https://www.ilo.org/data",
      "https://www.oecd.org/en/data.html",
      "https://www.adb.org/"
    ],
    "related": [
      "philippines-bpo-workforce-research",
      "philippines-remote-onboarding-research",
      "remote-work-philippines-evidence"
    ],
    "published": "2026-11-23",
    "updated": "2026-11-23",
    "hero": "/images/november-23/outsourcedphilippines-how-philippine-msme-data-frames-outsourcing-demand.webp",
    "thumbnail": "/images/november-23/outsourcedphilippines-how-philippine-msme-data-frames-outsourcing-demand.webp"
  },
  {
    "slug": "outsourcedphilippines-reading-philippine-digital-government-indicators-for-document-work",
    "title": "Reading Philippine Digital Government Indicators for Document Work",
    "excerpt": "Digital government indices describe access and service maturity, not whether a client's document packet is complete. Document support needs an acceptance rule and a local exception path.",
    "statistic": "The Department of Information and Communications Technology, the Philippine Statistics Authority, and international bodies publish digital access and e-government indicators. The World Bank and the International Telecommunication Union provide comparable connectivity measures for the Philippines. These sources describe national access, use, and online service maturity. They do not measure the completeness of a specific document packet or the quality of a support team's review.",
    "methodology": "This desk review examines public digital government and connectivity sources and the questions a document support team should answer. It separates a national indicator from a document-level acceptance rule and from a local workflow measure. The note does not certify a team or predict a processing time. It proposes a record that keeps the public context beside the client's own evidence.",
    "body": [
      "Read the indicator and its scope before using the number. An access rate, an online-service index, and a user-experience score measure different things. Record the definition, the geography, and the year. A high access rate does not mean every applicant can complete a digital form without help.",
      "Separate digital access from document readiness. A person may have a connection and still submit an incomplete packet, an unreadable scan, or a mismatched name. Record the document requirement and the evidence that shows completion. The public indicator is context for the channel, not a substitute for the acceptance rule.",
      "Map the document work to the queue. A support agent may collect, check, correct, route, or follow up on a packet. Each step needs a different source and a different authority. Record the step, the owner, and the system of record. A single document queue will hide work that needs separate controls.",
      "Define the evidence for a complete record. Name the required fields, the supporting file, the date, the identity check, and the reviewer. Record the rule and one example of a passing packet and one of a failing packet. A rule that lives only in a senior agent's memory cannot be trained or audited.",
      "Design the exception path for the common failures. A missing signature, a mismatched address, and an expired document each need a clear response and a client contact. Record the trigger, the action, and the response window. The agent should not have to decide whether to guess or to stop.",
      "Measure the local workflow instead of the national index. Track first-pass completeness, correction reasons, time to complete, handoffs, and reopened packets. Record the definitions and the period. These measures show whether the support lane is reducing rework or only moving it.",
      "Keep the public context beside the record. A later reviewer should see the indicator, the date, the document rule, and the local measures. Record the source and the owner. The note should explain which decisions the context informed and which it could not.",
      "Review the note each year and when the client's process changes. A new portal, a new requirement, or a new identity rule can make the old evidence irrelevant. Record the review and the change. The goal is a defensible document lane, not a citation of a national score."
    ],
    "dataSections": [
      {
        "heading": "Indicator scope",
        "text": "Record whether the source measures access, use, or online-service maturity, with the geography and year. Add the population the indicator covers. Note the collection method if the source provides it. A score without its scope cannot support a document decision."
      },
      {
        "heading": "Acceptance rule",
        "text": "Name the required fields, supporting file, date, identity check, and reviewer for a complete document packet. Add one passing example and one failing example. Record the version of the rule. The standard should be trainable and auditable without the author in the room."
      },
      {
        "heading": "Exception path",
        "text": "Set the trigger, action, response window, and client contact for missing signatures, mismatched addresses, and expired documents. Record the authority to return, correct, or escalate a packet. Test the path with a real case. The agent should not have to guess when the rule runs out."
      },
      {
        "heading": "Workflow measure",
        "text": "Track first-pass completeness, correction reasons, time to complete, handoffs, and reopened packets with clear definitions. Record the period and the queue. Compare the result with the previous month. The measure should show whether rework is falling or only moving to another step."
      }
    ],
    "faqs": [
      {
        "question": "Does a digital government index prove a document process is ready for outsourcing?",
        "answer": "No. It describes national access and service maturity. The client's document rule, system access, and exception path still need a local review."
      },
      {
        "question": "What makes a document packet complete?",
        "answer": "The required fields, the supporting file, the date, the identity check, and the reviewer, defined in a rule with passing and failing examples."
      },
      {
        "question": "Which local measures matter most?",
        "answer": "First-pass completeness, correction reasons, time to complete, handoffs, and reopened packets, using definitions the client can review."
      }
    ],
    "sources": [
      "https://www.dict.gov.ph/",
      "https://psa.gov.ph/",
      "https://openstat.psa.gov.ph/",
      "https://www.oecd.org/en/data.html",
      "https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH",
      "https://www.itu.int/en/ITU-D/Statistics/Pages/default.aspx",
      "https://www.dole.gov.ph/"
    ],
    "related": [
      "philippines-bpo-workforce-research",
      "philippines-remote-onboarding-research",
      "remote-work-philippines-evidence"
    ],
    "published": "2026-11-23",
    "updated": "2026-11-23",
    "hero": "/images/november-23/outsourcedphilippines-reading-philippine-digital-government-indicators-for-document-work.webp",
    "thumbnail": "/images/november-23/outsourcedphilippines-reading-philippine-digital-government-indicators-for-document-work.webp"
  }
];
