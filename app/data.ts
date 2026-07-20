export const site = {
  domain: 'OutsourcedPhilippines.com',
  slug: 'outsourcedphilippines',
  brand: 'Outsourced Philippines',
  primary: 'outsourced Philippines staffing',
  audience: 'companies hiring Philippines-based remote staff and managed teams',
  angle: 'Philippines roles, planning, English communication, schedules, and quality systems',
  style: 'Philippines talent story',
  dark: '#06343b',
  color: '#0891b2',
  accent: '#f97316',
  heroImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
  alt: 'Philippines remote team working in business office',
  badge: 'PH team',
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

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
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
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
