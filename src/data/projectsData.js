const projectsData = [
  {
    id: 'trustgates',
    title: 'TrustGates',
    category: 'fintech',
    type: 'Payment Gateway / FinTech',
    tagline: 'Payment gateway platform with merchant management and payment workflows.',
    description:
      'TrustGates is a payment gateway platform that handles merchant onboarding, payment collection (payin), settlements (payout) and transaction tracking through secure backend APIs.',
    problem:
      'Businesses needed a single platform to manage merchants, accept payments, track payin/payout flows and expose clean APIs for integration.',
    solution:
      'Built a merchant-facing dashboard with authentication, payment workflows and REST API integration, backed by a Node.js + MySQL backend for reliable transaction handling.',
    features: [
      'Merchant Login',
      'Merchant Dashboard',
      'Payin',
      'Payout',
      'API Integration',
      'Payment Flow',
      'Authentication',
      'Backend APIs',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'MySQL', 'REST API'],
    role: 'Full Stack Developer — frontend dashboard, backend APIs, payment workflows and deployment.',
    developmentType: 'Client Project',
    team: 'Collaborative build',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    demo: null,
    github: null,
  },
  {
    id: 'servicego',
    title: 'ServiceGO',
    category: 'crm',
    type: 'CRM + Mobile Application',
    tagline: 'Service management platform for technicians and service businesses.',
    description:
      'ServiceGO is a service management CRM with a mobile application for field work — covering complaints, orders, technicians, AMC, parts, payments and job verification.',
    problem:
      'Service businesses struggled to track complaints, assign technicians, manage AMC contracts, track spare parts and verify completed jobs.',
    solution:
      'Built a centralized CRM with technician management, QR-based job verification, notifications and payment tracking, extended to a mobile app for technicians in the field.',
    features: [
      'Complaints',
      'Orders',
      'Technician Management',
      'AMC',
      'Parts Management',
      'Payments',
      'QR System',
      'Notifications',
      'Job Verification',
    ],
    tech: ['React', 'Node.js', 'MySQL', 'Mobile Application'],
    role: 'Full Stack Developer — CRM modules, backend APIs, mobile app integration and deployment.',
    developmentType: 'Client Project',
    team: 'Collaborative build',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    demo: null,
    github: null,
  },
  {
    id: 'zymgoo',
    title: 'ZymGoo',
    category: 'crm',
    type: 'Gym Discovery + CRM + Mobile App',
    tagline: 'Gym discovery and management platform connecting gyms and members.',
    description:
      'ZymGoo connects gyms and members — users discover gyms while gym owners manage leads, members, marketing and operations through a CRM with a member mobile app.',
    problem:
      'Gyms needed visibility to get new members, plus a simple system to manage leads, memberships and marketing in one place.',
    solution:
      'Built gym listings and discovery flows for members, a CRM for leads/members/marketing for gym owners, and a member-facing mobile application.',
    features: [
      'Gym Listings',
      'Gym Discovery',
      'Leads',
      'Members',
      'CRM',
      'Marketing',
      'Member Application',
    ],
    tech: ['React', 'Node.js', 'Database', 'Mobile Application'],
    role: 'Full Stack Developer — discovery flows, CRM modules, backend and mobile app integration.',
    developmentType: 'Client Project',
    team: 'Collaborative build',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    demo: null,
    github: null,
  },
]

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fintech', name: 'FinTech' },
  { id: 'crm', name: 'CRM & Apps' },
]

export default projectsData
