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
const makeResearch = (slug:string,title:string,excerpt:string,statistic:string,angle:string):ResearchPost => ({slug,title,excerpt,statistic,published:'2026-08-09',methodology:`This desk study triangulates ${angle} using official Philippine statistics and comparable international datasets. The headline figure is retained with its source and date; readers should check the linked release before using it for a hiring decision.`,body:[`Key takeaway: ${excerpt}`,`Headline statistic: ${statistic}`,'What the evidence means for an outsourced team: define one accountable owner, document the handoff, and test the workflow with a small reviewed sample before expanding access. This converts a broad market signal into an operating decision.','Measurement notes: compare like-for-like definitions, separate a national indicator from a company KPI, and record the observation period beside every number. A statistic without a date or denominator should not be used as a forecast.','Practical checklist: specify the queue, acceptance criteria, escalation window, permitted systems, and weekly review artifact. These controls protect quality while allowing a Philippines-based specialist to work independently inside a bounded lane.'],dataSections:[{heading:'Evidence context',text:`The ${angle} evidence is contextual rather than a promise of individual performance. Record the dataset definition, geography, period, and denominator before translating it into an operating hypothesis.`},{heading:'Operating implication',text:'Turn the hypothesis into a bounded work lane with a named reviewer, examples of accepted work, an exception queue, and a weekly quality sample.'}],faqs:[{question:'How should a buyer use this research?',answer:'Use it to frame questions and design a role test, then validate the specific workflow with current records and an accountable reviewer.'},{question:'Does a national indicator predict a candidate?',answer:'No. It provides context only; practical assessment, references, and a controlled first batch are still required.'}],sources:sourceSet,related:['remote-work-philippines-evidence','philippines-digital-readiness','philippines-bpo-workforce-research']});
export const researchPosts: ReadonlyArray<ResearchPost> = [
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
];
export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
