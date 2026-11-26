// Central content store. Anything marked `placeholder: true` must be replaced
// with verified company information before launch.

export const company = {
  name: 'InnovateTech',
  founded: 2023,
  tagline: 'Innovating Technology. Transforming Businesses.',
  email: 'enquiries@innovatetech.example',
  emailPlaceholder: true,
  location: 'Office address to be confirmed',
  locationPlaceholder: true,
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const pillars = [
  {
    id: 'sap',
    code: 'SAP',
    title: 'SAP Consulting',
    icon: 'database',
    summary:
      'Finance-led SAP delivery, from S/4HANA implementation and FI/CO design to treasury, migration and long-term application support.',
    services: [
      { name: 'SAP S/4HANA Implementation', desc: 'Greenfield, brownfield and selective transitions planned around your finance and operations calendar.' },
      { name: 'SAP FI/CO Consulting', desc: 'Financial accounting and controlling design that reflects how your business actually reports and decides.' },
      { name: 'SAP FICO Configuration', desc: 'Company codes, ledgers, charts of accounts, cost objects and posting logic configured and documented.' },
      { name: 'SAP CO-PA and Controlling', desc: 'Margin analysis, cost centre and product costing set up to give management a reliable view of profitability.' },
      { name: 'SAP FSCM and Treasury', desc: 'Credit, collections, dispute management, cash and liquidity processes connected end to end.' },
      { name: 'SAP Public Cloud and Private Cloud', desc: 'Guidance on choosing and adopting the right S/4HANA Cloud edition and its extension model.' },
      { name: 'SAP System Migration', desc: 'ECC to S/4HANA conversions with structured cut-over planning, mock loads and reconciliation.' },
      { name: 'SAP Application Management and Support', desc: 'Ongoing incident, change and enhancement support with clear service levels and documentation.' },
    ],
  },
  {
    id: 'digital',
    code: 'DX',
    title: 'Digital Transformation',
    icon: 'workflow',
    summary:
      'Process, finance and integration programmes that remove manual effort and give leaders data they can trust.',
    services: [
      { name: 'Enterprise Process Optimization', desc: 'Map, measure and redesign record-to-report, order-to-cash and procure-to-pay processes.' },
      { name: 'Finance Transformation', desc: 'Faster, more controlled close and reporting through better process, data and system design.' },
      { name: 'System Integration', desc: 'Reliable interfaces between SAP, banks, CRM, payroll and industry platforms.' },
      { name: 'Business Process Automation', desc: 'Automate repetitive approvals, postings and reconciliations with appropriate controls in place.' },
      { name: 'Data Migration and Reconciliation', desc: 'Extract, cleanse, load and prove every balance, so go-live figures stand up to audit.' },
    ],
  },
  {
    id: 'enterprise',
    code: 'ET',
    title: 'Enterprise Technology',
    icon: 'layers',
    summary:
      'Independent technology advice and support that keeps your enterprise landscape aligned with business priorities.',
    services: [
      { name: 'Technology Advisory', desc: 'Objective guidance on platforms, vendors and roadmaps before you commit budget.' },
      { name: 'ERP Consulting', desc: 'Selection, fit-gap assessment and implementation assurance for ERP programmes.' },
      { name: 'IT Strategy', desc: 'A practical technology strategy tied to business goals, risk appetite and investment cycles.' },
      { name: 'Enterprise Application Support', desc: 'Stable, well-run business applications with structured monitoring and change control.' },
      { name: 'Cloud Transformation', desc: 'Plan and execute workload moves to public, private or hybrid cloud with minimal disruption.' },
    ],
  },
];

export const whyUs = [
  { icon: 'finance', title: 'Finance-first SAP depth', text: 'Our core is SAP finance: FI/CO, CO-PA, FSCM and treasury. We design systems around the numbers your business runs on.' },
  { icon: 'users', title: 'Senior-led engagements', text: 'Experienced consultants stay involved from first workshop to go-live, so decisions are made by the people accountable for them.' },
  { icon: 'compass', title: 'Independent advice', text: 'We recommend what fits your organisation, its scale and its budget, without pushing a preferred product or oversized programme.' },
  { icon: 'file', title: 'Documented and transferable', text: 'Every design decision, configuration and process change is recorded so your teams can own the solution after we leave.' },
  { icon: 'shield', title: 'Controls built in', text: 'Segregation of duties, audit trails and reconciliations are part of the design from the start, not added before audit.' },
  { icon: 'flex', title: 'Flexible engagement models', text: 'Project delivery, staff augmentation, advisory retainers or managed support, shaped to how you prefer to work.' },
];

export const approach = [
  { step: 'Discover', icon: 'search', text: 'We study your current processes, systems, data and constraints, and agree measurable objectives with your stakeholders.', outputs: ['Current-state assessment', 'Stakeholder objectives', 'Risk and dependency log'] },
  { step: 'Design', icon: 'pen', text: 'We define the target processes, solution architecture and roadmap, validated in workshops with the people who will use them.', outputs: ['Target operating model', 'Solution blueprint', 'Phased roadmap'] },
  { step: 'Implement', icon: 'rocket', text: 'We configure, integrate, migrate and test in controlled cycles, with structured cut-over planning and user readiness.', outputs: ['Configured solution', 'Test evidence', 'Cut-over plan'] },
  { step: 'Optimize', icon: 'gauge', text: 'After go-live we stabilise, measure against the agreed objectives and keep improving performance and adoption.', outputs: ['Hypercare support', 'Performance review', 'Improvement backlog'] },
];

export const industries = [
  { icon: 'factory', name: 'Manufacturing', text: 'Product costing, plant controlling and integrated supply-chain finance.' },
  { icon: 'retail', name: 'Retail and Consumer Goods', text: 'High-volume postings, margin visibility and omnichannel integration.' },
  { icon: 'bank', name: 'Financial Services', text: 'Regulatory reporting, strong controls and treasury management.' },
  { icon: 'energy', name: 'Energy and Utilities', text: 'Asset-intensive accounting, project controlling and compliance.' },
  { icon: 'pharma', name: 'Pharma and Life Sciences', text: 'Validated processes, batch costing and audit-ready documentation.' },
  { icon: 'truck', name: 'Logistics and Distribution', text: 'Intercompany flows, freight costing and real-time profitability.' },
  { icon: 'briefcase', name: 'Professional Services', text: 'Project-based revenue recognition, resource costing and billing.' },
  { icon: 'cpu', name: 'Technology and Telecom', text: 'Subscription billing, revenue accounting and rapid scaling.' },
];

export const values = [
  { icon: 'shield', title: 'Integrity', text: 'We give honest assessments, including when the answer is to do less.' },
  { icon: 'target', title: 'Precision', text: 'Enterprise systems demand accuracy. We test, reconcile and document carefully.' },
  { icon: 'handshake', title: 'Partnership', text: 'We work alongside client teams and measure success by their outcomes.' },
  { icon: 'spark', title: 'Curiosity', text: 'We keep learning as SAP and enterprise technology evolve, and share what we learn.' },
  { icon: 'users', title: 'Accountability', text: 'We take ownership of what we commit to and are clear about progress and risk.' },
];

export const serviceOptions = pillars.map((p) => ({
  group: p.title,
  options: p.services.map((s) => s.name),
}));
