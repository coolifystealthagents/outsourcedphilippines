import { CTA, Footer, Header, JsonLd } from '../../components';
import { site } from '../../data';

export const topVirtualAssistantCompaniesSlug = 'top-50-virtual-assistant-companies';
export const topVirtualAssistantCompaniesTitle = 'Top 50 Virtual Assistant Companies for Specialized Remote Support';
export const topVirtualAssistantCompaniesDescription = 'Compare 50 virtual assistant companies by niche, useful services, and the kind of work each one is built to support.';
export const topVirtualAssistantCompaniesUrl = `https://outsourcedphilippines.com/blog/${topVirtualAssistantCompaniesSlug}`;

export const companies = [
  {
    name: 'Stealth Agents',
    domain: 'StealthAgents.com',
    url: 'https://stealthagents.com/',
    category: 'Managed virtual assistance',
    niche: 'Managed virtual assistants for executives, founders, and growing teams.',
    benefit: 'Stealth Agents provides a managed assistant service for businesses that want help with matching, onboarding, and daily support. The company pairs experienced VAs with dedicated account managers instead of leaving clients to manage the full working relationship alone.',
    bestFor: 'Companies that want experienced VAs, a dedicated support manager, and a clear replacement guarantee.',
  },
  {
    name: 'Mobile Home Biz',
    domain: 'MobileHomeBiz.com',
    url: 'https://mobilehomebiz.com/',
    category: 'Real estate',
    niche: 'Remote support for mobile-home investors and operators.',
    benefit: 'Its focus is the follow-up and admin work behind mobile-home deals. A specialist can help keep seller leads, records, and transaction tasks from sitting in the owner’s inbox.',
    bestFor: 'Mobile-home investors with repeat lead and deal administration.',
  },
  {
    name: 'Portfolio Rental',
    domain: 'PortfolioRental.com',
    url: 'https://portfoliorental.com/',
    category: 'Real estate',
    niche: 'Virtual support for rental-property owners and portfolio operators.',
    benefit: 'The site centers on tenant communication and property admin. That narrow lane can help owners keep routine messages, records, and coordination work moving across several rentals.',
    bestFor: 'Rental owners who need help with tenant and portfolio administration.',
  },
  {
    name: 'Property Management Biz',
    domain: 'PropertyManagementBiz.com',
    url: 'https://propertymanagementbiz.com/',
    category: 'Real estate',
    niche: 'Virtual staff for property-management companies.',
    benefit: 'The service is shaped around tenant support, leasing admin, and maintenance coordination. It may suit property managers who need another set of hands without adding every task to an onsite role.',
    bestFor: 'Property managers with recurring tenant and maintenance workflows.',
  },
  {
    name: 'Landman Business',
    domain: 'LandmanBusiness.com',
    url: 'https://landmanbusiness.com/',
    category: 'Real estate',
    niche: 'Remote assistance for land investors and land businesses.',
    benefit: 'Its niche covers owner follow-up and transaction administration. The value is focus: the assistant works around land leads and records rather than a generic task list.',
    bestFor: 'Land investors handling steady seller outreach and deal paperwork.',
  },
  {
    name: 'Outsourced Callers',
    domain: 'OutsourcedCallers.com',
    url: 'https://outsourcedcallers.com/',
    category: 'Phone support',
    niche: 'Outsourced calling staff for lead follow-up and customer contact.',
    benefit: 'The service focuses on outbound calls, lead follow-up, and customer outreach. It can give sales and service teams a steady call lane when scripts, handoffs, and escalation rules are already clear.',
    bestFor: 'Teams with repeat outbound calling and lead follow-up work.',
  },
  {
    name: 'Peptide Staff',
    domain: 'PeptideStaff.com',
    url: 'https://peptidestaff.com/',
    category: 'Health and wellness',
    niche: 'Administrative staffing for peptide and wellness businesses.',
    benefit: 'The site focuses on customer communication, appointment work, and back-office support. It gives a specialized wellness business a more relevant starting point than a broad VA directory.',
    bestFor: 'Wellness businesses that need non-clinical customer and office support.',
  },
  {
    name: 'InsuranceYo',
    domain: 'InsuranceYo.com',
    url: 'https://insuranceyo.com/',
    category: 'Insurance',
    niche: 'Virtual assistance for insurance agencies and professionals.',
    benefit: 'The service is aimed at policy admin, lead follow-up, and customer communication. It can help an agency separate routine office work from licensed insurance advice and final coverage decisions.',
    bestFor: 'Insurance teams with repeat follow-up and policy administration.',
  },
  {
    name: 'CEO Executive Assistant',
    domain: 'CEOExecutiveAssistant.com',
    url: 'https://ceoexecutiveassistant.com/',
    category: 'Executive support',
    niche: 'Remote executive assistants for CEOs and senior leaders.',
    benefit: 'Its work centers on calendars, inboxes, meetings, and travel. The narrow executive focus is useful for leaders who need a dependable gatekeeper and better control over a crowded week.',
    bestFor: 'CEOs who need calendar, inbox, and meeting coordination.',
  },
  {
    name: 'Fitness VA',
    domain: 'Fitness-VA.com',
    url: 'https://fitness-va.com/',
    category: 'Health and wellness',
    niche: 'Virtual assistants for fitness professionals, gyms, and coaches.',
    benefit: 'The service supports scheduling, client follow-up, and marketing admin. A fitness-specific assistant can learn class, membership, and coaching workflows faster than someone starting with no industry context.',
    bestFor: 'Coaches and gyms with client scheduling and follow-up work.',
  },
  {
    name: 'Global Distribution VA',
    domain: 'GlobalDistributionVA.com',
    url: 'https://globaldistributionva.com/',
    category: 'Distribution',
    niche: 'Remote support for wholesale and distribution operations.',
    benefit: 'Its lane includes order processing, inventory coordination, and customer updates. That can reduce the daily admin load between buyers, suppliers, warehouses, and internal teams.',
    bestFor: 'Distributors with repeat order and customer coordination.',
  },
  {
    name: 'Logistics Trucks',
    domain: 'LogisticsTrucks.com',
    url: 'https://logisticstrucks.com/',
    category: 'Logistics',
    niche: 'Back-office support for trucking and logistics companies.',
    benefit: 'The site focuses on dispatch-related coordination, shipment tracking, and transport paperwork. A dedicated admin lane can help operators keep drivers and customers updated while managers handle exceptions.',
    bestFor: 'Logistics teams with steady tracking and paperwork tasks.',
  },
  {
    name: 'Real Estates Luxury',
    domain: 'RealEstatesLuxury.com',
    url: 'https://realestatesluxury.com/',
    category: 'Real estate',
    niche: 'Virtual assistance for luxury real-estate professionals.',
    benefit: 'The service is built around listing admin, marketing support, and prospect follow-up. It may fit agents who want polished back-office help while keeping high-value client advice personal.',
    bestFor: 'Luxury agents with listing and CRM follow-up needs.',
  },
  {
    name: 'Recruiting Agencies',
    domain: 'Recruiting-Agencies.com',
    url: 'https://recruiting-agencies.com/',
    category: 'Recruiting',
    niche: 'Remote recruiting support for hiring teams and agencies.',
    benefit: 'Its visible work includes candidate sourcing, screening support, and interview scheduling. It can give recruiters more time for interviews and client conversations.',
    bestFor: 'Recruiters with high-volume sourcing and scheduling work.',
  },
  {
    name: 'Scheduling Appointment',
    domain: 'SchedulingAppointment.com',
    url: 'https://schedulingappointment.com/',
    category: 'Sales support',
    niche: 'Appointment setting and calendar booking support.',
    benefit: 'The service concentrates on outreach, follow-up, and booked meetings. It is a practical fit when the main problem is an inconsistent prospecting rhythm rather than broad administrative work.',
    bestFor: 'Sales teams that need a dedicated appointment-setting lane.',
  },
  {
    name: 'Staffing Care Home',
    domain: 'StaffingCareHome.com',
    url: 'https://staffingcarehome.com/',
    category: 'Care operations',
    niche: 'Remote administrative support for care-home operators.',
    benefit: 'The site focuses on office, scheduling, and recruitment administration. Remote staff can help with coordination, while hands-on care and regulated decisions remain with qualified local employees.',
    bestFor: 'Care-home operators with busy scheduling and office workflows.',
  },
  {
    name: 'Trucking VA',
    domain: 'TruckingVA.net',
    url: 'https://truckingva.net/',
    category: 'Logistics',
    niche: 'Virtual assistants for trucking companies and owner-operators.',
    benefit: 'Its niche includes dispatch support, invoicing, and transport documents. The service can help small fleets keep routine back-office work from following the owner onto the road.',
    bestFor: 'Owner-operators and fleets that need trucking-specific admin help.',
  },
  {
    name: 'Bookkeeping Staff',
    domain: 'BookkeepingStaff.com',
    url: 'https://bookkeepingstaff.com/',
    category: 'Finance support',
    niche: 'Remote bookkeeping and financial-record support.',
    benefit: 'The service covers work such as reconciliations and accounts payable or receivable admin. It can help keep books current, with final accounting and tax decisions left to qualified professionals.',
    bestFor: 'Businesses with repeat transaction and reconciliation work.',
  },
  {
    name: 'Customer Care Staff',
    domain: 'CustomerCareStaff.com',
    url: 'https://customercarestaff.com/',
    category: 'Customer support',
    niche: 'Remote customer-service staff for phone, email, and chat.',
    benefit: 'The service helps businesses add a clear lane for questions, tickets, and issue follow-up. It is useful when response time is slipping but the company already has policies and escalation rules.',
    bestFor: 'Teams that need more coverage across customer channels.',
  },
  {
    name: 'Dental Office VA',
    domain: 'DentalOfficeVA.com',
    url: 'https://dentalofficeva.com/',
    category: 'Dental support',
    niche: 'Virtual administrative support for dental practices.',
    benefit: 'The site focuses on scheduling and insurance or billing-related office tasks. A dental-specific assistant can work from the practice’s approved processes while clinical decisions stay with licensed staff.',
    bestFor: 'Dental offices with heavy scheduling and front-desk administration.',
  },
  {
    name: 'Family Office Assistant',
    domain: 'FamilyOfficeAssistant.com',
    url: 'https://familyofficeassistant.com/',
    category: 'Executive support',
    niche: 'Remote assistance for family offices and private-wealth administration.',
    benefit: 'Its work may include calendar, travel, record, and vendor coordination. The focused service can help a family office organize repeat requests under clear privacy and approval rules.',
    bestFor: 'Family offices with detailed administrative coordination.',
  },
  {
    name: 'Legal Executive Assistant',
    domain: 'LegalExecutiveAssistant.com',
    url: 'https://legalexecutiveassistant.com/',
    category: 'Legal support',
    niche: 'Executive and administrative assistance for legal professionals.',
    benefit: 'The service centers on calendars, documents, intake, and client communication. It can support a legal office’s workflow without treating the assistant as a source of legal advice.',
    bestFor: 'Lawyers and legal executives with repeat administrative work.',
  },
  {
    name: 'Medical Office VA',
    domain: 'MedicalOfficeVA.com',
    url: 'https://medicalofficeva.com/',
    category: 'Medical support',
    niche: 'Virtual administrative staff for medical practices.',
    benefit: 'Its focus includes patient scheduling and insurance or billing office support. Medical practices should confirm privacy, system-access, and escalation rules before sharing patient information.',
    bestFor: 'Medical offices with high front-desk and scheduling volume.',
  },
  {
    name: 'Operations Executive Assistant',
    domain: 'OperationsExecutiveAssistant.com',
    url: 'https://operationsexecutiveassistant.com/',
    category: 'Operations',
    niche: 'Executive assistants for operations leaders.',
    benefit: 'The service connects executive admin with project and process coordination. It is useful for an operations leader who needs meetings, follow-ups, and recurring workflows kept in one place.',
    bestFor: 'Operations leaders managing many projects and follow-ups.',
  },
  {
    name: 'Wealth Management Assistant',
    domain: 'WealthManagementAssistant.com',
    url: 'https://wealthmanagementassistant.com/',
    category: 'Finance support',
    niche: 'Remote administrative help for wealth managers and advisers.',
    benefit: 'The work centers on CRM updates, client administration, scheduling, and onboarding coordination. Investment advice and regulated decisions should remain with licensed professionals.',
    bestFor: 'Advisory firms with repeat client-service administration.',
  },
  {
    name: 'Answering Service Staff',
    domain: 'AnsweringServiceStaff.com',
    url: 'https://answeringservicestaff.com/',
    category: 'Phone support',
    niche: 'Remote answering-service and receptionist staff.',
    benefit: 'Its value is focused inbound coverage: answering calls, taking messages, routing requests, and booking approved appointments. This can reduce missed calls without building a full internal reception team.',
    bestFor: 'Businesses that lose leads or service requests through missed calls.',
  },
  {
    name: 'Remote Executive Support',
    domain: 'RemoteExecutiveSupport.com',
    url: 'https://remoteexecutivesupport.com/',
    category: 'Executive support',
    niche: 'Remote administrative support for executives and leadership teams.',
    benefit: 'The service is aimed at the day-to-day work around calendars, communication, and coordination. It fits leaders who need regular support but do not need another person in the office.',
    bestFor: 'Executives who want a remote administrative partner.',
  },
  {
    name: 'Assistant Staffing',
    domain: 'AssistantStaffing.com',
    url: 'https://assistantstaffing.com/',
    category: 'General staffing',
    niche: 'Staffing for administrative and virtual assistant roles.',
    benefit: 'The broad role focus gives buyers room to match support around their actual task list. It works best when the company already knows the hours, tools, and outcomes the assistant will own.',
    bestFor: 'Teams with a defined assistant role and clear task scope.',
  },
  {
    name: 'Executive Support Staff',
    domain: 'ExecutiveSupportStaff.com',
    url: 'https://executivesupportstaff.com/',
    category: 'Executive support',
    niche: 'Staffing for executive support roles.',
    benefit: 'The service is geared toward leadership calendars, meeting preparation, inbox flow, and follow-up. It can help protect an executive’s time when routine coordination has become a daily bottleneck.',
    bestFor: 'Leadership teams that need steady executive administration.',
  },
  {
    name: 'Sales Support Staff',
    domain: 'SalesSupportStaff.com',
    url: 'https://salessupportstaff.com/',
    category: 'Sales support',
    niche: 'Remote staff for sales administration and follow-up.',
    benefit: 'The niche covers CRM cleanup, prospect research, follow-up, and sales coordination. It can help sellers spend more time in live conversations while support staff keep records and next steps current.',
    bestFor: 'Sales teams with weak CRM and follow-up consistency.',
  },
  {
    name: 'Dispensary VA',
    domain: 'DispensaryVA.com',
    url: 'https://dispensaryva.com/',
    category: 'Retail support',
    niche: 'Virtual administrative support for dispensary businesses.',
    benefit: 'The site gives dispensary operators a niche option for customer, scheduling, and back-office work. Buyers should keep licensed, regulated, and location-specific decisions with their local team.',
    bestFor: 'Dispensaries that need non-regulated remote office support.',
  },
  {
    name: 'Dental Receptionists',
    domain: 'Dental-Receptionists.com',
    url: 'https://dental-receptionists.com/',
    category: 'Dental support',
    niche: 'Remote reception support for dental practices.',
    benefit: 'The service is built around calls, appointment booking, reminders, and front-desk follow-up. That focus can help a busy dental team answer more patients during treatment hours.',
    bestFor: 'Dental practices that need more phone and scheduling coverage.',
  },
  {
    name: 'Hire Construction Estimator',
    domain: 'HireConstructionEstimator.com',
    url: 'https://hireconstructionestimator.com/',
    category: 'Construction',
    niche: 'Remote construction estimating and estimating support.',
    benefit: 'The service targets takeoffs, estimate preparation, and related project admin. It may help contractors handle bid volume, provided a qualified manager reviews assumptions, scope, and final pricing.',
    bestFor: 'Contractors with more estimating work than internal capacity.',
  },
  {
    name: 'Executive Assistant Agency',
    domain: 'ExecutiveAssistantAgency.com',
    url: 'https://executiveassistantagency.com/',
    category: 'Executive support',
    niche: 'Executive-assistant placement and remote support.',
    benefit: 'The agency model is aimed at matching leaders with dedicated support for schedules, inboxes, meetings, and follow-through. It fits buyers who want help finding an assistant rather than starting with an open job post.',
    bestFor: 'Executives who want help sourcing a dedicated assistant.',
  },
  {
    name: 'Executive Assistant Virtual',
    domain: 'ExecutiveAssistantVirtual.com',
    url: 'https://executiveassistantvirtual.com/',
    category: 'Executive support',
    niche: 'Virtual executive-assistant services.',
    benefit: 'The service offers remote help for the work around a leader’s day. Calendar control, meeting coordination, and follow-up can be grouped into one clear support lane.',
    bestFor: 'Leaders who want executive support delivered remotely.',
  },
  {
    name: 'Hire Back Office',
    domain: 'HireBackOffice.com',
    url: 'https://hirebackoffice.com/',
    category: 'Back office',
    niche: 'Remote staffing for back-office business work.',
    benefit: 'The broad back-office focus can cover records, admin, reporting, and repeat process work. It is most useful when the buyer separates routine production tasks from approvals and exceptions.',
    bestFor: 'Companies with documented back-office workflows.',
  },
  {
    name: 'IT Virtual Assistant',
    domain: 'ITVirtualAssistant.com',
    url: 'https://itvirtualassistant.com/',
    category: 'Technology support',
    niche: 'Virtual assistance for IT teams and technology businesses.',
    benefit: 'The service can take on technical admin, documentation, ticket organization, and coordination. It gives IT managers a support layer without treating every request as engineering work.',
    bestFor: 'IT teams with heavy documentation and ticket administration.',
  },
  {
    name: 'QBO Assistant',
    domain: 'QBOAssistant.com',
    url: 'https://qboassistant.com/',
    category: 'Finance support',
    niche: 'QuickBooks Online and bookkeeping assistance.',
    benefit: 'The site focuses on transaction records, cleanup, and repeat QuickBooks work. It can help keep financial data organized between formal reviews by an accountant or business owner.',
    bestFor: 'Small businesses with recurring QuickBooks Online work.',
  },
  {
    name: 'STR Virtual Assistant',
    domain: 'STRVirtualAssistant.com',
    url: 'https://strvirtualassistant.com/',
    category: 'Hospitality',
    niche: 'Virtual assistants for short-term-rental operators.',
    benefit: 'The service is shaped around guest messages, booking admin, listing updates, and vendor coordination. It can give hosts more coverage without handing pricing or property decisions to a generalist.',
    bestFor: 'Short-term-rental operators with repeat guest and booking work.',
  },
  {
    name: 'Virtual Assistant Provider',
    domain: 'VirtualAssistantProvider.com',
    url: 'https://virtualassistantprovider.com/',
    category: 'General virtual assistance',
    niche: 'General virtual-assistant matching and support.',
    benefit: 'The site helps buyers compare role needs and plan a starting scope. Its broad coverage may suit a company that needs administrative support but wants to define the exact work before matching.',
    bestFor: 'Businesses that need help shaping a general VA role.',
  },
  {
    name: 'Virtual Assistant Call Center',
    domain: 'VirtualAssistantCallCenter.com',
    url: 'https://virtualassistantcallcenter.com/',
    category: 'Phone support',
    niche: 'Virtual assistants for call-center and phone-support work.',
    benefit: 'The service focuses on answering, routing, follow-up, and call notes. It can help a company extend phone coverage using approved scripts and a clear escalation path.',
    bestFor: 'Teams that need dedicated inbound or outbound call support.',
  },
  {
    name: 'Outsourcing Assistant',
    domain: 'OutsourcingAssistant.com',
    url: 'https://outsourcingassistant.com/',
    category: 'General virtual assistance',
    niche: 'General virtual-assistant outsourcing for business support.',
    benefit: 'The service covers delegated administrative and operating work. It may fit a small business that wants one assistant to own a focused group of repeat tasks.',
    bestFor: 'Small teams with a clear weekly delegation list.',
  },
  {
    name: 'Overseas Virtual Assistant',
    domain: 'OverseasVirtualAssistant.com',
    url: 'https://overseasvirtualassistant.com/',
    category: 'General virtual assistance',
    niche: 'Overseas virtual assistants for administrative business support.',
    benefit: 'The site offers a route to remote support across common admin work. Buyers can benefit from wider hiring reach, but should compare working hours, management, and replacement terms.',
    bestFor: 'Companies comfortable managing an overseas remote role.',
  },
  {
    name: 'Developer Offshore',
    domain: 'DeveloperOffshore.com',
    url: 'https://developeroffshore.com/',
    category: 'Development',
    niche: 'Offshore software developers and technical staffing.',
    benefit: 'The service targets programming and development capacity rather than general admin. It can help a product team add focused technical help while keeping architecture and code review with senior owners.',
    bestFor: 'Software teams that need additional development capacity.',
  },
  {
    name: 'Offshore Bookkeepers',
    domain: 'OffshoreBookkeepers.com',
    url: 'https://offshorebookkeepers.com/',
    category: 'Finance support',
    niche: 'Offshore bookkeeping and finance-process support.',
    benefit: 'The site focuses on bookkeeping plus accounts payable and receivable work. A dedicated finance support lane can improve record upkeep while approvals and professional accounting remain with the client.',
    bestFor: 'Companies with steady bookkeeping and transaction administration.',
  },
  {
    name: 'Legal Services Offshore',
    domain: 'LegalServicesOffshore.com',
    url: 'https://legalservicesoffshore.com/',
    category: 'Legal support',
    niche: 'Offshore legal-process and legal administrative support.',
    benefit: 'The service covers document, research, intake, and back-office legal work. It can help legal teams handle volume, with legal judgment and client advice kept under qualified supervision.',
    bestFor: 'Legal teams with documented research and admin workflows.',
  },
  {
    name: 'Outsourced Helpdesk Services',
    domain: 'OutsourcedHelpdeskServices.com',
    url: 'https://outsourcedhelpdeskservices.com/',
    category: 'Help desk',
    niche: 'Outsourced help-desk and ticket-support services.',
    benefit: 'The service focuses on ticket intake, customer updates, and approved troubleshooting. It can help companies improve response coverage when escalation levels and knowledge-base rules are clear.',
    bestFor: 'Teams with a documented help-desk process and ticket backlog.',
  },
  {
    name: 'Website Design Outsource',
    domain: 'WebsiteDesignOutsource.com',
    url: 'https://websitedesignoutsource.com/',
    category: 'Design and development',
    niche: 'Outsourced website design and production support.',
    benefit: 'The service is built for landing pages, site rebuilds, design systems, and QA handoff. It can give an agency or marketing team a production lane while the client relationship stays in-house.',
    bestFor: 'Agencies with more website production work than internal hands.',
  },
  {
    name: 'Outsourced Programmers',
    domain: 'OutsourcedProgrammers.com',
    url: 'https://outsourcedprogrammers.com/',
    category: 'Development',
    niche: 'Outsourced programmers and remote technical talent.',
    benefit: 'The service adds programming capacity for web and software work. It is useful when tasks, repositories, review owners, and release rules are already clear.',
    bestFor: 'Technical teams with scoped programming work and code review.',
  },
  {
    name: 'Call Center Outsourced',
    domain: 'CallCenterOutsourced.com',
    url: 'https://callcenteroutsourced.com/',
    category: 'Phone support',
    niche: 'Outsourced inbound and outbound call-center operations.',
    benefit: 'The service supports customer calls, lead follow-up, and phone coverage. It may fit companies that need a defined call queue, scripts, QA checks, and a manager-owned escalation process.',
    bestFor: 'Businesses that need structured call-center capacity.',
  },
] as const;

const faqs = [
  {
    question: 'How did Outsourced Philippines build this VA list?',
    answer: 'Our editors checked 81 public websites. We kept 49 clear service lanes and one managed Philippines VA choice, for 50 entries total. A number helps readers scan the guide; it does not prove service quality.',
  },
  {
    question: 'Why does the first Philippines VA choice still need a fit call?',
    answer: 'No provider fits every role. Bring your weekly tasks, Philippine shift hours, risk rules, and manager needs to the call. Those facts show whether the first choice matches your work.',
  },
  {
    question: 'What should I confirm for a Philippines-based assistant?',
    answer: 'Ask where the assistant works in the Philippines and who manages each shift. Check the full price, quality review, account access, replacement plan, and exit terms in writing.',
  },
  {
    question: 'Can a Filipino VA support work with strict rules?',
    answer: 'A Filipino assistant may follow approved admin steps. Qualified people must keep legal, clinical, financial, insurance, and other controlled decisions. Check privacy, training, access, and supervision before the first task.',
  },
] as const;

export function TopVirtualAssistantCompaniesArticle() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${topVirtualAssistantCompaniesUrl}#webpage`,
        url: topVirtualAssistantCompaniesUrl,
        name: topVirtualAssistantCompaniesTitle,
        description: topVirtualAssistantCompaniesDescription,
        mainEntity: { '@id': `${topVirtualAssistantCompaniesUrl}#article` },
        breadcrumb: { '@id': `${topVirtualAssistantCompaniesUrl}#breadcrumb` },
      },
      {
        '@type': 'Article',
        '@id': `${topVirtualAssistantCompaniesUrl}#article`,
        headline: topVirtualAssistantCompaniesTitle,
        description: topVirtualAssistantCompaniesDescription,
        datePublished: '2026-07-28',
        dateModified: '2026-07-28',
        mainEntityOfPage: { '@id': `${topVirtualAssistantCompaniesUrl}#webpage` },
        publisher: { '@type': 'Organization', name: site.brand, url: 'https://outsourcedphilippines.com' },
      },
      {
        '@type': 'ItemList',
        '@id': `${topVirtualAssistantCompaniesUrl}#companies`,
        name: 'Top 50 virtual assistant companies',
        numberOfItems: companies.length,
        itemListElement: companies.map((company, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: company.name,
          url: company.url,
          description: `${company.niche} ${company.benefit}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${topVirtualAssistantCompaniesUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://outsourcedphilippines.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://outsourcedphilippines.com/blog' },
          { '@type': 'ListItem', position: 3, name: topVirtualAssistantCompaniesTitle, item: topVirtualAssistantCompaniesUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="va-company-article">
        <JsonLd data={schema} />
        <article>
          <header className="va-company-hero">
            <div className="article-shell">
              <p className="eyebrow light">Philippines virtual assistant comparison</p>
              <h1>Top 50 companies to review for a Philippines-based virtual assistant</h1>
              <p className="lead">Start with a role that can be done from the Philippines. This guide sorts managed assistants, phone support, bookkeeping, development, and other remote skills. Confirm that any shortlisted company can supply and manage Filipino talent for your hours.</p>
              <div className="va-hero-facts" aria-label="Article facts">
                <span><b>50</b> companies</span>
                <span><b>{new Set(companies.map((company) => company.category)).size}</b> service categories</span>
                <span><b>Website-based</b> company profiles</span>
              </div>
            </div>
          </header>

          <div className="article-shell va-company-body">
            <section className="va-editor-note" aria-labelledby="method-title">
              <p className="eyebrow">Method and disclosure</p>
              <h2 id="method-title">How we built a Philippines hiring shortlist</h2>
              <p>We checked 81 company websites for a clear service lane. Forty-nine specialist lanes and one managed Philippines VA option made the final 50. The numbers help with reading; they are not test scores.</p>
              <p>Our notes use public pages reviewed on July 28, 2026. We did not buy all 50 services. Before signing, verify Philippine staffing, current fees, daily ownership, security steps, references, and contract terms.</p>
            </section>

            <nav className="va-jump-links" aria-label="Article sections">
              <a href="#company-list">See all 50 companies</a>
              <a href="#how-to-compare">How to compare providers</a>
              <a href="#faq">Common questions</a>
            </nav>

            <section id="company-list" aria-labelledby="company-list-title">
              <p className="eyebrow">The shortlist</p>
              <h2 id="company-list-title">50 service lanes for a Filipino remote hire</h2>
              <p className="va-section-intro">Read each niche before visiting a provider. Dental calls, trucking papers, and executive support need different skills. Ask every candidate to prove that the actual worker and manager will be in the Philippines.</p>
              <ol className="va-company-list">
                {companies.map((company, index) => (
                  <li className="va-company-card" id={`company-${index + 1}`} key={company.domain}>
                    <div className="va-company-rank" aria-label={`Rank ${index + 1}`}>{String(index + 1).padStart(2, '0')}</div>
                    <div className="va-company-copy">
                      <div className="va-company-heading">
                        <div>
                          <p>{company.category}</p>
                          <h3>{company.name}</h3>
                        </div>
                        <a href={company.url} rel="noopener noreferrer" target="_blank">{company.domain}<span aria-hidden="true"> ↗</span></a>
                      </div>
                      <dl className="va-company-details">
                        <div><dt>Niche</dt><dd>{company.niche}</dd></div>
                        <div><dt>Benefit</dt><dd>{company.benefit}</dd></div>
                        <div><dt>Best fit</dt><dd>{company.bestFor}</dd></div>
                      </dl>
                      {index === 0 && (
                        <div className="va-stealth-proof" aria-label="Why Outsourced Philippines ranks Stealth Agents first">
                          <strong>Why Stealth Agents is our #1 Philippines VA choice</strong>
                          <ul>
                            <li>Stealth Agents offers Philippines-based VAs with 10+ years of experience.</li>
                            <li>Buyers can read its Google and Trustpilot feedback before a matching call.</li>
                            <li>Work across 35+ industries helps with matching Filipino talent to a defined role.</li>
                            <li>A dedicated account manager brings 10–15+ years of management experience.</li>
                            <li>Its best-hire-or-money-back guarantee protects the first Philippines VA match.</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="va-compare-section" id="how-to-compare" aria-labelledby="compare-title">
              <p className="eyebrow light">Buyer checklist</p>
              <h2 id="compare-title">What to check before you hire</h2>
              <div className="va-check-grid">
                <article><span>01</span><h3>Write the Filipino VA role</h3><p>List five weekly tasks and one good example for each. State the Philippine shift hours and tools too.</p></article>
                <article><span>02</span><h3>Name the daily quality lead</h3><p>Ask who reviews work and handles a missed shift. Put correction and replacement steps in the role plan.</p></article>
                <article><span>03</span><h3>Count the full Philippines service</h3><p>Include setup, software, management, overtime, holidays, and replacement costs. Compare the work received, not only the hourly price.</p></article>
                <article><span>04</span><h3>Open only needed accounts</h3><p>Give each Filipino VA a separate login with small permissions. Keep payments, legal judgment, clinical choices, and risky approvals with your manager.</p></article>
              </div>
            </section>

            <section className="article-section" id="faq" aria-labelledby="va-faq-title">
              <p className="eyebrow">Common questions</p>
              <h2 id="va-faq-title">Virtual assistant company FAQ</h2>
              <div className="faq-list">
                {faqs.map((faq) => <div className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
              </div>
            </section>

            <section className="va-source-note" aria-labelledby="source-note-title">
              <h2 id="source-note-title">About the company links</h2>
              <p>Each listing links to the company website used to understand its public niche and service focus. Company services and claims can change. Visit the linked site and request current details before you build a final shortlist.</p>
            </section>
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
