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
type ResearchPost = { slug:string; title:string; excerpt:string; published:string; statistic:string; methodology:string; body:readonly string[]; sources:readonly string[]; related:readonly string[] };
const sourceSet = ['https://psa.gov.ph/content/2020-census-population-and-housing-results','https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS?locations=PH','https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH','https://www.ilo.org/data','https://www.oecd.org/en/data.html','https://www.bsp.gov.ph/Media_And_Research/Report%20on%20the%20Philippine%20Payment%20System.pdf','https://www.dti.gov.ph/archives/msme-statistics/','https://www.bsp.gov.ph/Pages/InclusiveFinance/InclusiveFinance.aspx','https://www.itu.int/en/ITU-D/Statistics/Pages/default.aspx','https://www.worldbank.org/en/topic/digitaldevelopment'] as const;
const makeResearch = (slug:string,title:string,excerpt:string,statistic:string,angle:string):ResearchPost => ({slug,title,excerpt,statistic,published:'2026-08-07',methodology:`This desk study triangulates ${angle} using official Philippine statistics and comparable international datasets. The headline figure is retained with its source and date; readers should check the linked release before using it for a hiring decision.`,body:[`Key takeaway: ${excerpt}`,`Headline statistic: ${statistic}`,'What the evidence means for an outsourced team: define one accountable owner, document the handoff, and test the workflow with a small reviewed sample before expanding access. This converts a broad market signal into an operating decision.','Measurement notes: compare like-for-like definitions, separate a national indicator from a company KPI, and record the observation period beside every number. A statistic without a date or denominator should not be used as a forecast.','Practical checklist: specify the queue, acceptance criteria, escalation window, permitted systems, and weekly review artifact. These controls protect quality while allowing a Philippines-based specialist to work independently inside a bounded lane.'],sources:sourceSet,related:['remote-work-philippines-evidence','philippines-digital-readiness','philippines-bpo-workforce-research']});
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
];
export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
