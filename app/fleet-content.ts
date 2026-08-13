export const fleetServices = [
  {
    "slug": "executive-administration",
    "title": "Executive Administration",
    "summary": "Executive Administration delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "executive administration queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "ecommerce-operations",
    "title": "Ecommerce Operations",
    "summary": "Ecommerce Operations delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "ecommerce operations queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "real-estate-administration",
    "title": "Real Estate Administration",
    "summary": "Real Estate Administration delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "real estate administration queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "healthcare-administration",
    "title": "Healthcare Administration",
    "summary": "Healthcare Administration delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "healthcare administration queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "legal-administrative-support",
    "title": "Legal Administrative Support",
    "summary": "Legal Administrative Support delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "legal administrative support queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "bookkeeping-support",
    "title": "Bookkeeping Support",
    "summary": "Bookkeeping Support delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "bookkeeping support queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "customer-experience",
    "title": "Customer Experience",
    "summary": "Customer Experience delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "customer experience queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "digital-marketing-operations",
    "title": "Digital Marketing Operations",
    "summary": "Digital Marketing Operations delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "digital marketing operations queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "sales-development-support",
    "title": "Sales Development Support",
    "summary": "Sales Development Support delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "sales development support queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "project-coordination",
    "title": "Project Coordination",
    "summary": "Project Coordination delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "project coordination queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  }
] as const;
type ResearchPost = { slug:string; title:string; excerpt:string; published:string; statistic:string; methodology:string; body:readonly string[]; dataSections:readonly {heading:string; text:string}[]; faqs:readonly {question:string; answer:string}[]; sources:readonly string[]; related:readonly string[] };
const sourceSet = ['https://psa.gov.ph/content/2020-census-population-and-housing-results','https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=PH','https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH','https://www.ilo.org/data','https://www.oecd.org/en/data.html','https://www.bsp.gov.ph/Media_And_Research/Report%20on%20the%20Philippine%20Payment%20System.pdf','https://www.dti.gov.ph/archives/msme-statistics/','https://www.bsp.gov.ph/Pages/InclusiveFinance/InclusiveFinance.aspx','https://www.itu.int/en/ITU-D/Statistics/Pages/default.aspx','https://www.worldbank.org/en/topic/digitaldevelopment'] as const;
const makeResearch = (slug:string,title:string,excerpt:string,statistic:string,angle:string,publishedOrRecord:string|{published:string}='2026-08-09'):ResearchPost => { const published = typeof publishedOrRecord === 'string' ? publishedOrRecord : publishedOrRecord.published; return {slug,title,excerpt,statistic,published,methodology:`This desk study triangulates ${angle} using official Philippine statistics and comparable international datasets. The headline figure is retained with its source and date; readers should check the linked release before using it for a hiring decision.`,body:[`Key takeaway: ${excerpt}`,`Headline statistic: ${statistic}`,'What the evidence means for an outsourced team: define one accountable owner, document the handoff, and test the workflow with a small reviewed sample before expanding access. This converts a broad market signal into an operating decision.','Measurement notes: compare like-for-like definitions, separate a national indicator from a company KPI, and record the observation period beside every number. A statistic without a date or denominator should not be used as a forecast.','Practical checklist: specify the queue, acceptance criteria, escalation window, permitted systems, and weekly review artifact. These controls protect quality while allowing a Philippines-based specialist to work independently inside a bounded lane.'],dataSections:[{heading:'Evidence context',text:`The ${angle} evidence is contextual rather than a promise of individual performance. Record the dataset definition, geography, period, and denominator before translating it into an operating hypothesis.`},{heading:'Operating implication',text:'Turn the hypothesis into a bounded work lane with a named reviewer, examples of accepted work, an exception queue, and a weekly quality sample.'}],faqs:[{question:'How should a buyer use this research?',answer:'Use it to frame questions and design a role test, then validate the specific workflow with current records and an accountable reviewer.'},{question:'Does a national indicator predict a candidate?',answer:'No. It provides context only; practical assessment, references, and a controlled first batch are still required.'}],sources:sourceSet,related:['remote-work-philippines-evidence','philippines-digital-readiness','philippines-bpo-workforce-research']}; };
const makeAug11Research = (slug:string,title:string,excerpt:string,statistic:string,angle:string):ResearchPost => ({slug,title,excerpt,statistic,published:'2026-08-12',methodology:`This evidence review compares ${angle} across Philippine public data and international statistical documentation. It distinguishes what the source measures from what an operations leader may reasonably test in a support role.`,body:[`The evidence points to a specific management question: ${excerpt}`,`The source signal is: ${statistic}`,'For a Philippines-based service lane, the useful conclusion is not a blanket performance claim. It is a narrower hypothesis that can be checked against defined records, a named owner, and an agreed exception path.','Interpretation depends on the source definition, geography, observation period, and denominator. Those details should travel with the finding whenever it is used in staffing or operations planning.','A decision-ready research note should leave the reader with a testable scope, an accountable reviewer, and a clear boundary between administrative support and professional judgment.'],dataSections:[{heading:'What the evidence supports',text:`The ${angle} sources provide context for planning, not a guarantee about an individual or vendor. Their value is in sharpening the question asked of a proposed support lane.`},{heading:'What to test next',text:'Test one representative work sample, record the acceptance criteria and review result, and escalate exceptions instead of treating an aggregate indicator as an outcome forecast.'}],faqs:[{question:'What is the practical use of this research?',answer:'It helps an owner ask a more precise staffing question and define the evidence needed to evaluate a bounded support lane.'},{question:'Can the cited indicators predict service quality?',answer:'No. They provide context; service quality must be evaluated with role-specific samples, review, and accountable oversight.'}],sources:sourceSet,related:['remote-work-philippines-evidence','philippines-digital-readiness','philippines-bpo-workforce-research']});
export const researchPosts: ReadonlyArray<ResearchPost> = [
 makeAug11Research('philippines-sales-appointment-support-research','Philippines Appointment Support: Evidence for a Reviewable Sales Lane','Appointment-setting support is easier to evaluate when contact eligibility, disposition, and handoff evidence are separated from sales judgment.','The DTI MSME statistics resource describes the scale and composition of Philippine businesses, while the ILO data catalogue supplies labor indicators with defined populations.','business context, contact qualification, and handoff quality'),
 makeAug11Research('philippines-customer-service-research','Philippines Customer Service Support: What Public Evidence Can Tell Operators','Customer-service support planning should connect workforce context with queue definitions, response measures, and escalation ownership.','The World Bank publishes Philippines internet-use indicators as a time series, useful context for digitally mediated service work but not a service-quality forecast.','digital access, service queues, and escalation design'),
 makeAug11Research('philippines-executive-scheduling-support-research','Philippines Executive Travel Support: Separating Research from Decisions','Travel administration can gather options and maintain records while itinerary, purchase, and risk decisions remain with the traveler or owner.','The PSA census provides a national population baseline; it does not measure travel-support performance or predict an individual’s judgment.','administrative preparation, decision boundaries, and exception handling'),
 makeAug11Research('philippines-invoice-records-research','Philippines Finance Reconciliation Support: Evidence and Control Boundaries','Reconciliation support should make source records, unmatched items, and reviewer decisions visible without delegating financial judgment.','The Bangko Sentral ng Pilipinas payment-system report documents the infrastructure context in which transaction records and exception queues operate.','payment records, reconciliation evidence, and review authority'),
 makeAug11Research('philippines-healthcare-intake-admin-research','Philippines Healthcare Privacy Administration: Narrowing the Safe Work Lane','Healthcare administration is more defensible when access is limited to defined records and clinical or privacy exceptions move quickly to the accountable professional.','The ITU ICT statistics programme provides comparable digital-access context; it cannot establish compliance for a particular healthcare workflow.','digital access, privacy-aware administration, and escalation'),
 makeAug11Research('philippines-legal-document-intake-research','Philippines Legal Records Administration: Evidence Without Legal Judgment','Legal records support can improve findability and completeness when administrative preparation is clearly separated from legal advice and conclusions.','The OECD and ILO data catalogues model the importance of definitions and metadata when interpreting evidence across populations and periods.','records administration, provenance, and professional boundaries'),
 makeAug11Research('philippines-project-risk-register-research','Philippines Project Status Reporting: Turning Signals into Owner Decisions','Status reporting is useful when source updates, risk definitions, and owner actions are visible together rather than reduced to a generic progress label.','World Bank digital-development material treats infrastructure as an enabler of participation, providing context for distributed coordination dependencies.','project evidence, risk visibility, and decision support'),
 makeAug11Research('philippines-property-transaction-records-research','Philippines Real Estate Transaction Administration: Records Before Decisions','Transaction administration can organize dates, documents, and missing items while approvals and regulated decisions remain with the responsible party.','The PSA census is a population measure, not a real-estate forecast; it illustrates why context indicators must not be over-read.','transaction records, deadlines, and decision ownership'),
 makeAug11Research('philippines-recruiting-candidate-research','Philippines Recruitment Sourcing: Measuring Evidence Quality Before Outreach','Recruitment sourcing should be assessed by source traceability, fit evidence, and handoff quality rather than by an unqualified contact count.','ILO labor indicators offer contextual workforce measures with explicit definitions and periods, useful for framing sourcing questions.','workforce evidence, sourcing quality, and handoff controls'),
 makeAug11Research('philippines-social-channel-moderation-research','Philippines Social Media Operations: Evidence for Bounded Support','Social-media support is safer to assess when asset preparation, monitoring, and escalation are distinct from account-owner approval and public judgment.','ITU digital indicators provide context for online participation and access while leaving editorial and account decisions to the accountable owner.','digital participation, asset handling, and approval boundaries'),
 makeResearch('remote-work-philippines-evidence','Remote Work in the Philippines: Evidence for Distributed Team Planning','Remote staffing decisions are stronger when internet access, labor-market, and household evidence are read together.','The 2020 Philippine Census recorded 109,035,343 people, providing the population baseline used by many workforce and connectivity indicators.','distributed-work feasibility and labor-market scale'),
 makeResearch('philippines-digital-readiness','Philippines Digital Readiness: Signals for Remote Operations','Connectivity is an operating dependency: assess the workflow, fallback channel, and access controls before assigning work remotely.','Internet-user, broadband, and digital-development indicators are published as time series rather than a single permanent readiness score.','connectivity, access, and digital service availability'),
 makeResearch('philippines-bpo-workforce-research','Philippines BPO Workforce Research: What Buyers Should Measure','BPO market size alone does not describe fit; buyers should measure role specificity, review capacity, and continuity controls.','The ILOSTAT data catalogue provides standardized labor indicators that can be compared by sex, age, status, and period.','employment structure and service-lane design'),
 makeResearch('philippines-msme-outsourcing-needs','Philippines MSME Outsourcing Needs: A Research-Based Framework','MSME demand is best translated into narrow, repeatable work lanes instead of a vague request for general support.','The Philippine Department of Trade and Industry maintains an MSME statistics resource for the country’s business base.','business population, task repeatability, and owner capacity'),
 makeResearch('philippines-digital-payments-operations','Digital Payments in the Philippines: Back-Office Work Implications','Payment growth increases the need for reconciliation, exception handling, and documented approvals.','The Bangko Sentral ng Pilipinas publishes a national payment-system report covering digital-payment adoption and infrastructure.','payment rails, controls, and reconciliation workflows'),
 makeResearch('women-workforce-philippines','Women in the Philippine Workforce: Implications for Inclusive Hiring','Gender-disaggregated labor data helps teams design fair sourcing, scheduling, and progression practices.','ILO data can be filtered by sex and labor-force measure, allowing workforce comparisons without collapsing groups into one average.','inclusive workforce planning and role progression'),
 makeResearch('philippines-education-workforce-signals','Education and Skills Signals for Philippine Support Roles','Education statistics are useful for screening hypotheses, but practical role tests remain the better measure of workflow fit.','The OECD Data Explorer provides comparable education and skills indicators with definitions and metadata.','skills evidence, assessment design, and training'),
 makeResearch('philippines-business-continuity-research','Philippines Business Continuity: Research Signals for Distributed Teams','A continuity plan should name alternate channels, owners, recovery priorities, and a safe pause condition.','The World Bank digital-development evidence base treats resilient digital infrastructure as an enabler of continuity and inclusion.','resilience, infrastructure dependency, and recovery planning'),
 makeResearch('philippines-cybersecurity-outsourcing-controls','Cybersecurity Controls for Philippines-Based Support Work','Security is a workflow property: least privilege, logging, review, and offboarding should be designed before access is granted.','ITU’s ICT statistics programme provides internationally comparable material for understanding digital-access and security context.','access governance and operational risk'),
 makeResearch('philippines-ecommerce-operations-research','Philippines Ecommerce Operations: Where Structured Support Helps','Ecommerce support is measurable when catalog, order, customer, and exception queues have explicit definitions.','BSP financial-inclusion resources connect digital access with the broader ecosystem in which online commerce operates.','queue design, digital commerce, and service quality'),
 makeResearch('philippines-outsourced-content-operations-research','Philippines Outsourced Content Operations: Evidence for Reliable Publishing','A daily publishing routine is more reliable when briefs, source checks, image metadata, review ownership, and release evidence are treated as one operating system.','The ILO, World Bank, and Philippine government data portals provide complementary sources for evaluating digital work conditions and service-lane design.','content workflow controls, digital work, and publishing reliability'),
 makeResearch('philippines-executive-assistance-research','Philippines Executive Assistance Research: Designing a Reliable Support Lane','Executive support works best when recurring preparation, decision-ready summaries, and escalation rules are documented.','Official labor and digital-access datasets provide context, but service quality still depends on a clearly bounded executive workflow.','executive administration, task repeatability, and approval design'),
 makeResearch('philippines-customer-support-outsourcing-data','Philippines Customer Support Outsourcing: Evidence and Operating Measures','Customer support research should connect labor context with response-time, quality, and escalation measures.','ILO labor indicators and World Bank digital-development data offer context for comparing support operating environments.','customer experience, service metrics, and continuity'),
 makeResearch('philippines-bookkeeping-support-research','Philippines Bookkeeping Support: Controls for Distributed Finance Work','Bookkeeping support becomes safer when source records, reconciliation rules, and reviewer sign-off are explicit.','BSP payment-system material and DTI MSME statistics help frame the transaction and business context for finance workflows.','bookkeeping, reconciliation, and review controls'),
 makeResearch('philippines-real-estate-admin-research','Philippines Real Estate Administration: Research for Repeatable Back-Office Work','Real-estate administration can be delegated when records, deadlines, and exception ownership are visible.','Census and labor datasets provide population and workforce context for planning a distributed administrative lane.','real-estate records, queue ownership, and deadline control'),
 makeResearch('philippines-healthcare-admin-research','Philippines Healthcare Administration: Evidence for Bounded Support Tasks','Healthcare administration requires narrow task definitions, privacy-aware access, and a fast escalation path for exceptions.','International labor and ICT datasets provide context, while local compliance and client policy govern the actual workflow.','healthcare administration, privacy, and escalation'),
 makeResearch('philippines-legal-admin-support-research','Philippines Legal Administrative Support: A Research-Based Workflow Model','Legal support should separate administrative preparation from legal judgment and preserve an auditable handoff.','ILO, OECD, and ITU data help describe workforce and digital context without substituting for professional legal review.','legal administration, evidence handling, and boundaries'),
 makeResearch('philippines-sales-development-support-research','Philippines Sales Development Support: Measuring a Safe Prospecting Lane','Sales development is easier to manage when research, data hygiene, and approved outreach are separated into measurable queues.','DTI MSME statistics and digital-development indicators help frame the business and connectivity context for sales operations.','prospecting, data quality, and approval controls'),
 makeResearch('philippines-project-coordination-research','Philippines Project Coordination: Research Signals for Better Handoffs','Project coordination benefits from a single queue, explicit owners, and a recurring status artifact that exposes risk early.','World Bank and ILO datasets provide broad infrastructure and labor context for distributed coordination work.','project coordination, handoffs, and risk visibility'),
 makeResearch('philippines-marketing-operations-research','Philippines Marketing Operations: Evidence for Repeatable Campaign Support','Marketing operations can be delegated when briefs, source assets, QA checks, and approval gates are defined before execution.','ITU digital-access indicators and OECD data provide context for digital-work planning and skills assessment.','marketing operations, QA, and campaign governance'),
 makeResearch('philippines-data-entry-quality-research','Philippines Data Entry Quality: How to Design a Verifiable Work Queue','Data-entry quality depends more on field definitions, sampling, and exception handling than on raw throughput.','Census, labor, and ICT datasets illustrate why denominators and observation periods must accompany operational metrics.','data quality, sampling, and exception management'),
 makeResearch('philippines-remote-onboarding-research','Remote Onboarding in the Philippines: A Practical Evidence Framework','Remote onboarding is stronger when access, examples, feedback cadence, and the first accepted batch are planned together.','World Bank digital-development and ITU ICT resources provide a starting point for assessing remote-work dependencies.','onboarding, access controls, and learning loops'),
 makeResearch('philippines-knowledge-process-outsourcing-research','Philippines Knowledge Process Outsourcing: What the Evidence Can and Cannot Show','Knowledge work requires role-specific assessment and review capacity; national indicators are context, not a hiring guarantee.','OECD skills data and ILO labor indicators support a disciplined comparison of workforce signals and role tests.','knowledge work, assessment, and review capacity'),
 makeResearch('philippines-outsourcing-continuity-checklist','Philippines Outsourcing Continuity: A Research Checklist for Owners','Continuity planning should identify alternate channels, minimum service levels, and the exact condition that pauses work.','World Bank digital-development and BSP payment-system sources illustrate why infrastructure and transaction dependencies belong in the plan.','business continuity, dependency mapping, and recovery controls'),
 makeResearch('philippines-operations-documentation-research','Philippines Operations Documentation: Evidence for Repeatable Handoffs','Documentation creates leverage when it records the decision boundary, examples, and exception path—not every conceivable detail.','World Bank digital-development and ILO resources provide context for designing documented distributed work.','documentation, handoffs, and process control'),
 makeResearch('philippines-quality-assurance-outsourcing-research','Philippines Outsourcing Quality Assurance: Designing the Review Loop','A small, consistent review sample can expose drift earlier than a large volume report.','OECD and ILO data catalogues support careful interpretation of workforce and skills context.','quality assurance, sampling, and feedback cadence'),
 makeResearch('philippines-virtual-assistant-role-design-research','Philippines Virtual Assistant Role Design: From Tasks to Outcomes','A useful assistant brief names recurring tasks, output standards, tools, and approval limits.','Census, labor, and digital-access datasets provide background for role and workflow planning.','role design, task decomposition, and owner approval'),
 makeResearch('philippines-sop-management-research','Philippines SOP Management: Keeping Distributed Work Current','Standard operating procedures need an owner, a review date, and a visible change log to remain useful.','ITU and World Bank digital-development resources frame documentation as part of digital operations.','SOP governance, change control, and operational clarity'),
 makeResearch('philippines-research-assistant-workflow','Philippines Research Assistant Workflows: Source Traceability by Design','Research support is safer when every claim has a source note, access date, and reviewer checkpoint.','The ILO, OECD, and World Bank data portals illustrate why definitions and source provenance matter.','research operations, source traceability, and review'),
 makeResearch('philippines-calendar-management-research','Philippines Calendar Management: A Bounded Executive Support Model','Calendar support can be delegated when preferences, conflict rules, and approval boundaries are explicit.','Population, labor, and ICT indicators provide context but do not replace a role-specific work sample.','calendar operations, preferences, and escalation'),
 makeResearch('philippines-lead-management-research','Philippines Lead Management: Data Hygiene Before Outreach','Lead operations should separate record cleanup, research, routing, and approved outreach into distinct queues.','DTI MSME statistics and digital-development indicators offer business-context inputs for sales operations.','lead data, routing, and consent-aware workflow'),
 makeResearch('philippines-analytics-reporting-research','Philippines Analytics Reporting: Building Decision-Ready Recurring Packs','Recurring reports become useful when metric definitions, source refresh dates, and commentary ownership are fixed.','World Bank, ITU, and OECD data resources show why definitions and dates matter in comparative analysis.','reporting, metric governance, and decision support'),
 makeResearch('philippines-ecommerce-catalog-research','Philippines Ecommerce Catalog Operations: Designing a Clean Queue','Catalog support improves when attributes, image rules, and exception ownership are explicit.','DTI MSME statistics and BSP inclusive-finance resources provide context for digital commerce operations.','catalog quality, ecommerce workflow, and exception handling'),
 makeResearch('philippines-inbox-management-research','Philippines Inbox Management: A Research-Based Triage Model','Inbox support should classify, draft, route, and escalate without silently making the owner’s decisions.','Labor and digital-access datasets provide context for planning bounded administrative support.','inbox triage, decision boundaries, and executive support'),
 makeResearch('philippines-accounts-receivable-support-research','Philippines Accounts Receivable Support: Reconciliation Before Follow-Up','Receivables support is safer when records, matching rules, and approval limits are separated from collection judgment.','BSP payment-system reporting and DTI MSME statistics frame the transaction and business context.','reconciliation, records, and financial workflow controls'),
 makeResearch('philippines-client-onboarding-research','Philippines Client Onboarding Support: Evidence for a Controlled Handoff','Client onboarding needs a checklist, owner, source-of-truth record, and explicit exception path.','World Bank digital-development and ILO resources provide context for distributed service operations.','onboarding, handoffs, and service continuity'),
 makeResearch('philippines-workforce-planning-data','Philippines Workforce Planning Data: Reading the 2025 Labor Force Signals','The PSA reported a 63.6% labor-force participation rate and 95.0% employment rate in October 2025; use these as context, not a candidate-quality proxy.','In October 2025, the Philippines labor-force participation rate was 63.6% and the employment rate was 95.0%.','labor-market context, role testing, and capacity planning','2026-08-10'),
 makeResearch('philippines-digital-payments-operations-data','Philippines Digital Payments Operations: What 52.8% Means for Back-Office Controls','BSP reported that digital payments reached 52.8% of retail-payment volume in 2023, increasing the value of reconciliation and exception queues.','Digital payments were 52.8% of total retail-payment volume in 2023, above the BSP roadmap target of 50%.','payments operations, reconciliation, and approval controls','2026-08-10'),
 makeResearch('philippines-invoice-processing-research','Philippines Invoice Processing: Designing a Reviewable Capture Queue','Invoice support should separate capture, matching, exception routing, and approval so throughput never silently becomes financial judgment.','The PSA OpenSTAT Labor Force Survey monthly series is updated through May 2026, showing why operational research needs a stated observation period.','invoice capture, reconciliation, and evidence dates','2026-08-10'),
 makeResearch('philippines-remote-meeting-coordination','Philippines Remote Meeting Coordination: Evidence for a Bounded Support Lane','Meeting support is measurable when agendas, action owners, follow-up dates, and unresolved decisions are captured consistently.','The 2020 Census counted 109,035,343 people in the Philippines, a baseline used alongside labor and connectivity datasets rather than as a staffing forecast.','meeting operations, handoffs, and owner visibility','2026-08-10'),
 makeResearch('philippines-content-calendar-research','Philippines Content Calendar Operations: Building a Daily Publishing Control Loop','A content calendar becomes reliable when source validation, brief completeness, image metadata, and release ownership are visible in one queue.','The BSP recorded 929.6 million InstaPay and PESONet transactions by December 2023, illustrating the scale at which digital operations require exception controls.','content operations, source traceability, and release QA','2026-08-10'),
 makeResearch('philippines-back-office-automation-research','Philippines Back-Office Automation: Where Human Review Still Matters','Automation should remove repetitive checks while preserving human ownership for exceptions, approvals, and ambiguous records.','BSP reported 52.8% digital-payment volume in 2023, a useful context signal for designing digitally supported back-office workflows.','automation boundaries, exception handling, and review design','2026-08-10'),
 makeResearch('philippines-data-privacy-workflow-research','Philippines Data Privacy Workflows: Access Controls for Distributed Support','Privacy-aware support starts with minimum necessary access, documented purposes, audit trails, and a clear incident escalation path.','The PSA describes the Labor Force Survey as a nationwide household survey and notes confidentiality obligations under the Philippine Statistical Act and Data Privacy Act.','privacy controls, access governance, and escalation','2026-08-10'),
 makeResearch('philippines-quality-sampling-research','Philippines Quality Sampling: How Small Reviews Expose Workflow Drift','A repeatable sample can detect drift sooner than a large undifferentiated productivity report.','The PSA OpenSTAT key-indicator matrix contains monthly data from April 2005 through May 2026, demonstrating the importance of consistent definitions over time.','quality sampling, KPI definitions, and feedback loops','2026-08-10'),
 makeResearch('philippines-supplier-operations-research','Philippines Supplier Operations: Evidence for Structured Vendor Follow-Up','Supplier support works best when request status, promised dates, documents, and escalation triggers are explicit.','BSP reported 100.9 million PESONet transactions worth ₱10.1 trillion in 2024, highlighting the need for controlled transaction records.','vendor operations, transaction evidence, and escalation','2026-08-10'),
 makeResearch('philippines-recruiting-coordinator-research','Philippines Recruiting Coordination: Separating Scheduling from Selection','A recruiting coordinator can own scheduling and record hygiene while selection decisions remain with the accountable hiring owner.','In October 2025, PSA estimated 51.16 million Filipinos aged 15 and over were in the labor force; the figure is context, not a hiring guarantee.','recruiting operations, decision boundaries, and candidate records','2026-08-10'),
 makeResearch('philippines-customer-onboarding-checklist','Philippines Customer Onboarding Checklists: Designing a Visible Handoff','Onboarding quality improves when required inputs, owner approvals, system updates, and exception states are explicit.','The 2024 BSP annual report records 1.4 billion InstaPay transactions, showing why customer-facing payment workflows need clear operational ownership.','customer onboarding, workflow state, and handoff quality','2026-08-10'),
 makeResearch('philippines-reporting-cadence-research','Philippines Reporting Cadence: Turning Distributed Work into Decision-Ready Packs','A reporting cadence should distinguish source refresh, calculation, commentary, and executive decision so stale evidence is visible.','The PSA OpenSTAT labor indicators are updated monthly, an example of why each recurring report should carry a refresh date.','reporting governance, freshness, and decision support','2026-08-10'),
 makeResearch('philippines-knowledge-base-research','Philippines Knowledge Base Operations: Keeping Procedures Findable','Knowledge-base support needs ownership, review dates, change notes, and links back to the approved source of truth.','The BSP’s 2023 digital-payment share rose from 42.1% in 2022 to 52.8% in 2023, showing why procedures must keep pace with changing workflows.','knowledge management, change control, and source ownership','2026-08-10'),
 makeResearch('philippines-client-reporting-support','Philippines Client Reporting Support: A Traceable Evidence Model','Client reporting is safer when every number has a definition, source, period, reviewer, and visible correction path.','The PSA’s monthly Labor Force Survey series distinguishes participation, employment, unemployment, and underemployment rather than collapsing them into one score.','client reporting, definitions, and correction control','2026-08-10'),
 makeResearch('philippines-work-queue-design-research','Philippines Work Queue Design: Turning Recurring Tasks into Reviewable Units','A recurring support queue becomes manageable when each item has an owner, definition of done, exception state, and review sample.','BSP reported that digital payments represented 52.8% of retail-payment volume in 2023, a useful context signal for designing traceable digital queues.','queue design, acceptance criteria, and review sampling',{published:'2026-08-10'}),
 makeResearch('philippines-document-control-research','Philippines Document Control: Keeping Distributed Operations Auditable','Document control works when versions, owners, source links, and approval states are visible instead of buried in chat.','The PSA describes the Labor Force Survey as a nationwide household survey, illustrating why a published statistic needs a defined population and method.','document governance, versioning, and source traceability',{published:'2026-08-10'}),
 makeResearch('philippines-customer-service-qa-research','Philippines Customer Service QA: Measuring a Useful Review Sample','Customer-service QA should sample for accuracy, policy fit, tone, and escalation—not just count handled tickets.','The 2020 Census counted 109,035,343 people in the Philippines, a population baseline that should not be mistaken for a customer-service forecast.','service QA, sampling, and escalation design',{published:'2026-08-10'}),
 makeResearch('philippines-purchase-order-support-research','Philippines Purchase Order Support: Controls for a Clean Approval Handoff','Purchase-order support is safer when preparation, matching, exception routing, and approval remain separate steps.','BSP reported 100.9 million PESONet transactions worth ₱10.1 trillion in 2024, showing why transaction workflows benefit from clear records and controls.','purchase orders, matching, and approval boundaries',{published:'2026-08-10'}),
 makeResearch('philippines-crm-data-hygiene-research','Philippines CRM Data Hygiene: Building a Verifiable Cleanup Lane','CRM cleanup should define duplicate rules, required fields, evidence notes, and a safe route for ambiguous records.','DTI maintains an MSME statistics resource, providing business-context inputs while leaving record-level quality to the operating workflow.','CRM hygiene, duplicate handling, and exception queues',{published:'2026-08-10'}),
 makeResearch('philippines-calendar-follow-up-research','Philippines Calendar Follow-Up: Converting Meetings into Owned Actions','Meeting follow-up creates value when decisions, owners, due dates, and unresolved questions are captured in one visible record.','The 2024 BSP annual report records 1.4 billion InstaPay transactions, a context signal for why recurring digital operations need explicit ownership.','meeting follow-up, action ownership, and handoffs',{published:'2026-08-10'}),
 makeResearch('philippines-knowledge-transfer-research','Philippines Knowledge Transfer: Designing the First Reviewed Work Batch','Knowledge transfer is stronger when examples, access boundaries, feedback timing, and the first accepted batch are documented together.','In October 2025, PSA estimated 51.16 million Filipinos aged 15 and over were in the labor force; the figure is context, not a hiring guarantee.','onboarding, examples, and feedback loops',{published:'2026-08-10'}),
 makeResearch('philippines-return-refund-operations-research','Philippines Returns and Refunds Operations: Separating Preparation from Approval','Returns support should classify requests, gather evidence, and route exceptions while refund decisions remain with the accountable owner.','BSP’s digital-payment share rose from 42.1% in 2022 to 52.8% in 2023, reinforcing the need for evidence and reconciliation around payment exceptions.','returns, evidence capture, and approval controls',{published:'2026-08-10'}),
 makeResearch('philippines-vendor-documentation-research','Philippines Vendor Documentation: Making Follow-Up Easy to Audit','Vendor follow-up is easier to review when requests, promised dates, documents, and escalation triggers share one source of truth.','BSP reported 100.9 million PESONet transactions in 2024, a scale signal that supports disciplined transaction-record design.','vendor records, due dates, and escalation',{published:'2026-08-10'}),
 makeResearch('philippines-content-source-review-research','Philippines Content Source Review: A Traceable Daily Publishing Lane','Content research is safer when every claim has a source, date, interpretation note, and named reviewer before release.','The PSA OpenSTAT key-indicator matrix contains monthly data through May 2026, demonstrating why article claims should carry an observation period.','content QA, source notes, and release gates',{published:'2026-08-10'}),
 makeResearch('philippines-service-reporting-research','Philippines Service Reporting: Separating Volume from Quality','Service reporting should show volume beside accuracy, aging, exceptions, and review findings so activity does not substitute for outcomes.','The PSA’s monthly labor indicators distinguish participation, employment, unemployment, and underemployment, a useful model for keeping operational metrics defined.','service reporting, metric definitions, and quality controls',{published:'2026-08-10'}),
 makeResearch('philippines-operations-escalation-research','Philippines Operations Escalation: Designing a Safe Exception Path','Escalation rules should identify the trigger, required evidence, response owner, and safe pause condition before work begins.','The PSA’s October 2025 labor-force participation rate was 63.6%; a national indicator supplies context, not a forecast of individual capacity or quality.','exception handling, response ownership, and safe pauses',{published:'2026-08-10'}),
 makeResearch('philippines-appointment-setting-research','Philippines Appointment Setting: Designing a Consent-Aware Scheduling Queue','Appointment-setting support is strongest when research, scheduling, reminders, and owner-approved outreach are separated into clear stages.','The PSA OpenSTAT labor indicators are published with observation periods, a useful reminder to timestamp every recurring activity report.','appointment setting, consent, and calendar operations','2026-08-10'),
 makeResearch('philippines-social-media-operations-research','Philippines Social Media Operations: A Reviewable Publishing Workflow','Social media support can be bounded with an approved content queue, source notes, brand rules, and an escalation path for sensitive replies.','The ITU ICT statistics programme emphasizes comparable definitions and periods, principles that also improve channel-level content reporting.','social publishing, brand governance, and response review','2026-08-10'),
 makeResearch('philippines-real-estate-transaction-admin-research','Philippines Real Estate Administration: Keeping Transaction Support Traceable','Real-estate administration benefits from separate queues for document preparation, status updates, deadline tracking, and licensed decisions.','The 2020 Philippine Census counted 109,035,343 people, a national context measure that should not be treated as a property-market forecast.','real-estate administration, records, and escalation','2026-08-10'),
 makeResearch('philippines-healthcare-privacy-admin-research','Philippines Healthcare Administration: Designing a Privacy-Aware Support Lane','Healthcare administration requires minimum-necessary access, explicit records handling, and fast escalation for clinical or privacy-sensitive decisions.','The PSA identifies the Labor Force Survey as a nationwide household survey with confidentiality obligations, illustrating why source and access boundaries need to be explicit.','healthcare administration, privacy, and safe handoffs','2026-08-10'),
 makeResearch('philippines-legal-records-admin-research','Philippines Legal Administrative Support: Separating Preparation from Legal Judgment','Legal support workflows should organize records, calendars, and drafts while reserving legal advice and final decisions for qualified owners.','ILO and OECD data catalogues provide workforce context but cannot establish legal competence for an individual or service provider.','legal administration, confidentiality, and approval boundaries','2026-08-10'),
 makeResearch('philippines-finance-reconciliation-support-research','Philippines Bookkeeping Support: Building a Reviewable Reconciliation Lane','Bookkeeping support is safer when data entry, matching, exception notes, and approval are visible as separate steps.','BSP reported 100.9 million PESONet transactions worth ₱10.1 trillion in 2024, a context signal for the value of controlled transaction records.','bookkeeping, reconciliation, and financial controls','2026-08-10'),
 makeResearch('philippines-ecommerce-customer-care-research','Philippines Ecommerce Customer Care: Measuring the Exception Queue','Ecommerce customer care improves when order status, returns evidence, response standards, and refund approvals are tracked separately.','BSP reported that digital payments represented 52.8% of retail-payment volume in 2023, reinforcing the need for evidence around payment-related support cases.','customer care, order operations, and exception handling','2026-08-10'),
 makeResearch('philippines-sales-development-research','Philippines Sales Development Support: Data Hygiene Before Approved Outreach','Sales-development support should verify records, research fit, and route approved opportunities without making unapproved claims or contact decisions.','DTI maintains an MSME statistics resource that can frame market context while leaving record-level qualification to the defined workflow.','sales operations, data quality, and owner approval','2026-08-10'),
 makeResearch('philippines-project-status-reporting-research','Philippines Project Status Reporting: Making Risks Visible in Distributed Work','A status report becomes decision-ready when it carries source dates, owners, blocked items, next actions, and a consistent definition of risk.','World Bank digital-development and ILO resources provide broad context, but project reporting still depends on current source records and named owners.','project reporting, risk visibility, and handoffs','2026-08-10'),
 makeResearch('philippines-executive-travel-support-research','Philippines Executive Travel Support: A Bounded Planning Workflow','Travel support can own research, itinerary drafts, and record updates while approvals, payment, and policy exceptions remain with the executive owner.','The OECD Data Explorer publishes indicators with metadata, a useful model for attaching assumptions and dates to travel-planning records.','travel planning, preferences, and approval controls','2026-08-10'),
 makeResearch('philippines-recruitment-sourcing-research','Philippines Recruitment Sourcing: Separating Research from Candidate Decisions','Recruiting support should source and organize public information while selection, compliance, and offer decisions remain with the accountable hiring team.','In October 2025, PSA estimated 51.16 million Filipinos aged 15 and over were in the labor force; that aggregate is context, not a candidate-quality proxy.','recruiting research, record hygiene, and decision boundaries','2026-08-10'),
 makeResearch('philippines-sop-audit-research','Philippines SOP Audits: Turning Documentation into an Operating Control','An SOP audit is useful when it checks ownership, current examples, exception paths, and approval evidence instead of merely counting documents.','The PSA OpenSTAT key-indicator matrix contains monthly series, demonstrating why operational documents and reports need visible review dates.','SOP governance, audit sampling, and process ownership','2026-08-10'),
 makeResearch('philippines-accounts-payable-research','Philippines Accounts Payable Support: Designing a Controlled Invoice Lane','Accounts-payable support is safer when invoice capture, matching, exception routing, and approval remain separate.','BSP reported 100.9 million PESONet transactions worth ₱10.1 trillion in 2024, a context signal for disciplined transaction records.','accounts payable, invoice matching, and approval controls','2026-08-10'),
 makeResearch('philippines-helpdesk-triage-research','Philippines Helpdesk Triage: Measuring a Safe First-Line Queue','Helpdesk triage can be bounded with severity definitions, evidence fields, response targets, and an explicit escalation owner.','The ITU ICT statistics programme publishes comparable digital-access indicators with defined periods, a useful model for timestamped support metrics.','helpdesk operations, severity, and escalation','2026-08-10'),
 makeResearch('philippines-podcast-production-research','Philippines Podcast Production Support: Building a Reviewable Media Workflow','Podcast support becomes repeatable when research, show notes, asset handling, publishing checks, and approval are separate stages.','The World Bank digital-development evidence base treats digital infrastructure as an enabler of participation, not a substitute for workflow QA.','media production, asset control, and publishing review','2026-08-10'),
 makeResearch('philippines-event-coordination-research','Philippines Event Coordination: Turning Logistics into a Visible Work Queue','Event coordination needs one source of truth for vendors, deadlines, attendee questions, approvals, and exceptions.','The PSA OpenSTAT labor indicators are published by observation period, reinforcing the value of dated status records in recurring operations.','event logistics, deadline tracking, and exception ownership','2026-08-10'),
 makeResearch('philippines-property-management-admin-research','Philippines Property Management Administration: Separating Records from Decisions','Property-management support can organize maintenance requests, notices, and records while owner decisions and regulated judgments stay with the accountable party.','The 2020 Philippine Census counted 109,035,343 people, a national context measure rather than a property-market forecast.','property administration, records, and decision boundaries','2026-08-10'),
 makeResearch('philippines-insurance-claims-processing-research','Philippines Insurance Claims Support: Evidence Before Escalation','Claims support should capture documents, classify status, and identify missing evidence without making coverage or settlement decisions.','The PSA identifies the Labor Force Survey as a nationwide household survey, illustrating why published evidence needs a defined population and method.','claims administration, evidence capture, and escalation','2026-08-10'),
 makeResearch('philippines-sales-operations-reporting-research','Philippines Sales Operations Reporting: Keeping Pipeline Evidence Traceable','Sales reporting is more useful when source refresh, stage definitions, owner actions, and exceptions are visible beside volume.','DTI maintains an MSME statistics resource that can frame business context while record-level pipeline quality remains a workflow responsibility.','sales operations, metric definitions, and data quality','2026-08-10'),
 makeResearch('philippines-digital-asset-library-research','Philippines Digital Asset Library Support: Making Creative Files Findable','Asset-library support works when naming, metadata, version status, rights notes, and archive rules are explicit.','The OECD Data Explorer publishes indicators with metadata, a useful model for attaching definitions and dates to operational records.','asset management, metadata, and version control','2026-08-10'),
 makeResearch('philippines-translation-qa-research','Philippines Translation QA: Designing a Consistent Review Loop','Translation QA should separate glossary preparation, first-pass review, issue logging, and final approval so language decisions remain visible.','ILO data catalogues provide standardized indicators and definitions, demonstrating why review work benefits from a shared terminology base.','translation operations, terminology, and review sampling','2026-08-10'),
 makeResearch('philippines-website-content-audit-research','Philippines Website Content Audits: Evidence for a Safer Update Queue','Website-content audits become actionable when each finding has a URL, evidence note, priority, owner, and approval state.','The PSA OpenSTAT key-indicator matrix contains monthly data through May 2026, showing why audit observations should carry a date.','content auditing, evidence capture, and release control','2026-08-10'),
 makeResearch('philippines-training-coordination-research','Philippines Training Coordination: Making Learning Operations Reviewable','Training support can own scheduling, attendance records, materials, and follow-up while curriculum and performance decisions remain with the accountable owner.','The OECD Data Explorer provides skills indicators with definitions and metadata, useful context for designing role-specific learning records.','training operations, records, and learning feedback','2026-08-10'),
];
export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
