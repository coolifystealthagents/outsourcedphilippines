import './sector-scenarios.css';
const scenarios = [
  [
    "Ecommerce operations",
    "Work from order status, delivery records, and the store\u2019s return policy. Separate routine updates from damaged-item claims, refunds, and account changes.",
    "An order-support queue with source links and exceptions routed to the store owner.",
    "ecommerce-operations"
  ],
  [
    "Professional-services teams",
    "Prepare meeting materials, update client records, and track follow-ups against the team\u2019s calendar and approved templates.",
    "A daily handoff naming completed items, outstanding inputs, and decisions needed.",
    "executive-administration"
  ],
  [
    "Property operations",
    "Log maintenance requests and coordinate availability using the property team\u2019s instructions. Route spending decisions and unusual tenant requests to the designated manager.",
    "A current request register with appointments, vendor replies, and unresolved approvals.",
    "real-estate-administration"
  ]
];
export function SectorScenarios() { return <section className="sector-scenarios" aria-labelledby="sector-examples-title"><p className="sector-scenarios__label">Practical service examples</p><h2 id="sector-examples-title">Start with the records your business already uses.</h2><div className="sector-scenarios__grid">{scenarios.map(([title,work,output,slug])=><article key={slug}><h3>{title}</h3><p>{work}</p><p><strong>Prepared output: </strong>{output}</p><a href={`/services/${slug}`}>Review the service scope →</a></article>)}</div><p>Agree the coverage window, source-system access, review owner, and escalation rules before assigning live work.</p></section>; }
