export const site = {
  domain: 'OutsourcedPhilippines.com',
  slug: 'outsourcedphilippines',
  brand: 'Outsourced Philippines',
  primary: 'outsourced Philippines staffing',
  audience: 'companies hiring Filipino talent based in the Philippines',
  angle: 'Filipino roles, planning, working hours, access rules, and quality checks',
  style: 'Philippines role room',
  dark: '#16382f',
  color: '#c7b8f7',
  accent: '#e35f3e',
  heroImage: '/philippines-team-workroom.jpg',
  serviceImage: '/philippines-team-workroom.jpg',
  alt: 'Colleagues discussing work around monitors in an open office',
  badge: 'PH only',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'Operations Support',
    desc: 'Operations Support for teams using outsourced Philippines staffing with clear SOPs, weekly review, and measurable handoffs.',
    buyerProblem: 'Work keeps sitting with the owner because no one has turned repeat tasks into a clear handoff plan.',
    bestTasks: ['daily task board cleanup', 'vendor follow-up and reminders', 'SOP updates from recorded steps', 'weekly status reports'],
    controls: ['owner approval list for exceptions', 'sample-work review before more access', 'Friday scorecard for speed, accuracy, and blockers'],
    launchPlan: ['Pick 5 recurring admin tasks', 'Record one sample walkthrough', 'Give tool access only for those tasks', 'Review output daily for the first week'],
    faqs: [
      { question: 'What operations work should a Philippines staff member start with?', answer: 'Start with repeat work that has examples: updates, follow-up, SOP cleanup, reporting, and task-board hygiene. Keep vendor decisions and money approval with your manager.' },
      { question: 'How do we avoid a messy handoff?', answer: 'Use one task list, one sample file, one review owner, and a short daily note. Do not hand over ten unrelated jobs on day one.' },
    ],
  },
  {
    slug: 'customer-support',
    title: 'Customer Support',
    desc: 'Customer Support for teams using outsourced Philippines staffing with clear SOPs, weekly review, and measurable handoffs.',
    buyerProblem: 'Tickets, chats, and follow-up messages need faster replies, but the team still needs clear rules for refunds, complaints, and edge cases.',
    bestTasks: ['ticket triage and tagging', 'first replies from approved macros', 'order-status updates', 'daily complaint and refund summary'],
    controls: ['approved answer bank', 'escalation rules for refunds and angry customers', 'QA review of first 20 replies'],
    launchPlan: ['Choose 10 common customer questions', 'Write approved replies', 'Set refund and complaint escalation rules', 'Review the first replies before solo coverage'],
    faqs: [
      { question: 'Can outsourced Philippines staff handle live customer support?', answer: 'Yes, if the answers, escalation rules, and coverage hours are clear. Start with common questions before giving complex complaint ownership.' },
      { question: 'Who should approve refunds or policy exceptions?', answer: 'Keep those decisions with your manager until the rules are written and tested. The support hire can collect facts and draft the reply.' },
    ],
  },
  {
    slug: 'admin-support',
    title: 'Admin Support',
    desc: 'Admin Support for teams using outsourced Philippines staffing with clear SOPs, weekly review, and measurable handoffs.',
    buyerProblem: 'Calendar, inbox, document, and CRM tasks are small on their own, but together they pull leaders away from sales and client work.',
    bestTasks: ['calendar cleanup', 'inbox sorting', 'CRM data updates', 'meeting notes and follow-up drafts'],
    controls: ['private-email boundaries', 'send-draft approval rules', 'daily done-list with links to completed work'],
    launchPlan: ['List the admin tasks that repeat weekly', 'Write what the assistant can send versus draft', 'Share safe templates and examples', 'Review the done-list each afternoon'],
    faqs: [
      { question: 'What admin work is safe to delegate first?', answer: 'Start with scheduling support, inbox sorting, document formatting, CRM updates, and follow-up drafts. Keep legal, pricing, hiring, and payment decisions with the owner.' },
      { question: 'How much access should the assistant get?', answer: 'Give the least access needed for the first tasks. Add more access only after the first week of clean work.' },
    ],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Reporting and QA',
    desc: 'Reporting and QA for teams using outsourced Philippines staffing with clear SOPs, weekly review, and measurable handoffs.',
    buyerProblem: 'Managers need clean numbers and quality checks, but they do not need another meeting or a complicated dashboard.',
    bestTasks: ['daily KPI pull', 'spreadsheet cleanup', 'call or ticket QA sampling', 'weekly issue log'],
    controls: ['source link for every number', 'QA checklist with pass/fail reasons', 'manager review before reports go to clients'],
    launchPlan: ['Pick the five numbers you trust', 'Build one report template', 'QA ten sample items together', 'Send the first weekly report to the manager only'],
    faqs: [
      { question: 'Can a Philippines staff member own reporting?', answer: 'They can prepare reports, check data, and flag problems. A manager should still approve client-facing numbers and decisions.' },
      { question: 'What makes QA work well offshore?', answer: 'Use a short checklist, real examples, source links, and a weekly review. Vague quality notes create rework.' },
    ],
  },
] as const;

export const blogPosts = [
  {
    slug: 'outsourced-Philippines-staffing-planning',
    title: 'Outsourced Philippines: What does it plan?',
    excerpt: 'A plain-English guide to staffing details, scope, and hidden planning.',
    minutes: 6,
  },
  {
    slug: 'outsourced-Philippines-staffing-tasks-to-outsource',
    title: 'Outsourced Philippines: What tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'outsourced-Philippines-staffing-provider-questions',
    title: 'Outsourced Philippines: Questions to ask before hiring',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'outsourced-Philippines-staffing-onboarding-checklist',
    title: 'Outsourced Philippines: First week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, and reporting.',
    minutes: 9,
  },
] as const;

export const blogDetails = {
  'outsourced-Philippines-staffing-provider-questions': {
    takeaways: [
      'Ask who employs the worker, who manages the work, and who handles a poor fit. Those may be three different people.',
      'Request a live example of the weekly report, quality check, and escalation path before you sign.',
      'Agree on tool access, password handling, and the process for removing access when the work ends.',
      'Put replacement terms, notice periods, fees, and data return rules in writing.',
    ],
    questionRows: [
      {
        question: 'Who is responsible for the worker?',
        usefulAnswer: 'The provider names the employer, day-to-day manager, payroll owner, and the person you contact when attendance or quality slips.',
        warning: 'Everyone helps with that, but no one person owns it.',
      },
      {
        question: 'How do you check quality?',
        usefulAnswer: 'You see the scorecard, sample size, review owner, and the exact steps used when work misses the mark.',
        warning: 'We hire great people, so quality problems are rare.',
      },
      {
        question: 'How is access controlled?',
        usefulAnswer: 'Each worker gets an individual account, limited permissions, multi-factor authentication, and a written removal checklist.',
        warning: 'The team shares a login because it is faster.',
      },
      {
        question: 'What happens if the fit is poor?',
        usefulAnswer: 'The agreement states the review period, correction plan, replacement process, fees, and expected handoff time.',
        warning: 'We will work something out if that happens.',
      },
    ],
    sections: [
      {
        title: 'Start with the service model',
        paragraphs: [
          'Two firms can both sell Philippines staffing while doing very different work. One may recruit a person and leave management to you. Another may employ the worker, track attendance, run quality checks, and provide backup. Neither model is automatically better. The right choice depends on how much management your team can handle.',
          'Ask the provider to draw the working relationship on one page. The page should name the employer, your manager, the provider manager, the payroll owner, and the person who can approve a replacement. If the answer stays vague, the service will probably feel vague after launch too.',
        ],
        checks: ['Who signs the worker agreement?', 'Who approves leave and schedule changes?', 'Who gives daily task feedback?', 'Who owns a missed shift or repeated quality problem?'],
      },
      {
        title: 'Ask to see the management system',
        paragraphs: [
          'A polished sales call tells you very little about the week after hiring. Ask for blank versions of the tools the provider says it uses: a weekly report, a quality scorecard, an attendance note, and an escalation record. Blank samples protect client details while showing whether a real process exists.',
          'Use one sample task from your own business during the call. Ask how the provider would train it, check the first attempts, record corrections, and decide when the worker can handle it alone. You are listening for names and actions, not broad promises about talent.',
        ],
        checks: ['What does the first five-day plan include?', 'How many work samples are checked at the start?', 'Where are corrections recorded?', 'When does a manager step in?'],
      },
      {
        title: 'Set access and data rules before day one',
        paragraphs: [
          'Write down which systems the role needs and which actions stay with your manager. A support worker may need to read an order but not issue a refund. An admin assistant may prepare an invoice but not change bank details. These limits matter more than a general promise that data is secure.',
          'CISA recommends strong, unique passwords and multi-factor authentication. NIST also provides a privacy risk framework for identifying and managing data risk. Ask the provider how those ideas show up in the actual setup: individual accounts, limited permissions, access reviews, device rules, and removal of access at the end of the engagement.',
        ],
        checks: ['Does every worker have an individual account?', 'Is multi-factor authentication required where available?', 'Who reviews permissions?', 'How quickly is access removed after a role ends?'],
      },
      {
        title: 'Read the exit terms before the price sheet',
        paragraphs: [
          'The monthly rate is only one part of the cost. Ask about setup charges, software seats, overtime, holiday coverage, replacement fees, notice periods, and any minimum term. Then ask what happens to your files, passwords, process notes, and unfinished work when the agreement ends.',
          'A useful proposal makes the exit boring. It states who returns company property, who transfers work, how access is removed, when the final invoice is due, and whether a replacement changes the contract term. If those details are missing, request them before signing.',
        ],
        checks: ['What is included in the monthly price?', 'Which charges can change?', 'How does a replacement affect fees or term?', 'How are files and open tasks returned?'],
      },
    ],
    callScript: [
      'Please show us who owns recruiting, employment, payroll, daily management, quality checks, and replacement decisions.',
      'Please send blank samples of the weekly report, scorecard, and escalation record you would use for this role.',
      'For our first task, explain the training steps, review sample, approval limit, and rule for handing the task back to our manager.',
      'Please list every fee, the notice period, replacement terms, and the steps used to return data and remove access when the work ends.',
    ],
    faqs: [
      {
        question: 'Should I choose a provider or hire a Philippines freelancer directly?',
        answer: 'Choose based on the support you need. Direct hiring gives you more control but leaves recruiting, management, payroll setup, and replacement planning with your team. A provider may handle some or all of that work. Ask for the exact split in writing.',
      },
      {
        question: 'What proof should a staffing provider share?',
        answer: 'Ask for process proof rather than private client data. Blank scorecards, report templates, training checklists, security rules, and replacement terms show how the service works without exposing another client.',
      },
      {
        question: 'How should I compare provider prices?',
        answer: 'Compare the full monthly cost and the work included. Add setup fees, software, overtime, management, quality review, replacement charges, and contract limits. A lower rate may require more management from your team.',
      },
      {
        question: 'What should happen before a worker receives tool access?',
        answer: 'Confirm the task list, approval limits, individual account, permissions, multi-factor authentication, device rules, and access removal owner. Start with the least access needed for the first tasks.',
      },
    ],
    sources: [
      {
        name: 'U.S. Small Business Administration: Hire and manage employees',
        url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees',
        note: 'General employer planning, payroll, benefits, and employee management guidance.',
      },
      {
        name: 'CISA: Use strong passwords',
        url: 'https://www.cisa.gov/secure-our-world/use-strong-passwords',
        note: 'Plain guidance on unique passwords, password managers, and multi-factor authentication.',
      },
      {
        name: 'NIST Privacy Framework',
        url: 'https://www.nist.gov/privacy-framework',
        note: 'A framework for identifying and managing privacy risk.',
      },
    ],
  },
} as const;

export const stats = [
  { label: 'Talent source', value: 'Philippines', note: 'the staffing model is limited to Filipino talent based in the Philippines' },
  { label: 'Pilot shape', value: 'One role', note: 'a narrow first lane is easier to teach and review' },
  { label: 'Start with', value: 'Clear tasks', note: 'finished examples beat a vague job description' },
] as const;

export const staffingOffer = {
  partner: 'a Philippines staffing partner',
  promise: 'Get a role brief built around the work you want a Filipino team member to handle.',
  fit: [
    'business owners who want Filipino talent but need help turning tasks into one clear role',
    'teams that want onboarding notes, access limits, and a named review path',
    'companies planning Philippines-based support for admin, operations, customer service, bookkeeping, development, or marketing work',
  ],
  included: [
    'a role brief that turns the task list into a focused starting scope',
    'matching notes based on skills, working hours, tools, and communication needs',
    'onboarding notes for examples, scorecards, reporting, and safe tool access',
    'a review path so quality, attendance, and fit questions have a named owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'Turn the loose task list into one role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match Filipino talent', body: 'A Philippines staffing partner can compare the role with Filipino talent based on the work, hours, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with examples, limited access, frequent review, and a short scorecard so quality is easy to see.' },
  { step: '4', title: 'Widen the lane', body: 'Once the first tasks are steady, add more work only where the handoff still makes sense.' },
] as const;

export const staffingFitNote = 'Every role depends on its tasks, working hours, skills, tools, and review needs. Send the details and a Philippines staffing partner can discuss Filipino talent that fits the brief.';
