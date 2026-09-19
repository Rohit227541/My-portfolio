const projectsData = [
  {
    id: 'trustgates',
    title: 'TrustGates',
    category: 'fintech',
    type: 'Payment Gateway / FinTech',
    tagline: 'Secure payment gateway platform for modern businesses.',
    description:
      'TrustGates is a payment gateway platform that handles merchant onboarding, payment collection (payin), settlements (payout) and transaction tracking through secure backend APIs.',
    problem:
      'Businesses needed a single platform to manage merchants, accept payments and track payin/payout flows with clean APIs for integration.',
    solution:
      'Built a merchant-facing platform with authentication, payment workflows and REST API integration, backed by a Node.js + MySQL backend for reliable transaction handling.',
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
    tech: ['React', 'Node.js', 'MySQL', 'REST API'],
    role: 'Full Stack Developer — frontend, backend APIs, payment workflows and deployment.',
    developmentType: 'Company Project',
    team: 'Kodexive team',
    image: '/trustgate.jpg',
    demo: 'https://trustgates.co.in/',
    github: null,
  },
  {
    id: 'zymgoo',
    title: 'ZymGoo',
    category: 'crm',
    type: 'Gym Discovery + CRM + Mobile App',
    tagline: "India's gym discovery and management platform connecting gyms and members.",
    description:
      'ZymGoo lets users search, compare and contact verified gyms across 50+ cities in India, while gym owners manage listings, leads, members, billing and marketing through a CRM with member and partner mobile apps on Google Play and the App Store.',
    problem:
      'Gyms needed visibility to get new members, plus a simple system to manage leads, memberships, billing and marketing in one place.',
    solution:
      'Built gym listings with search, filters and comparison for members, a CRM with lead management, WhatsApp alerts, billing and analytics for owners, and mobile applications for members and partners.',
    features: [
      'Gym Listings',
      'Gym Discovery & Compare',
      'Lead Management',
      'Member CRM',
      'WhatsApp Alerts',
      'Billing & Renewals',
      'Member Application',
    ],
    tech: ['React', 'Node.js', 'MySQL', 'REST API', 'Mobile Application'],
    role: 'Full Stack Developer — discovery flows, CRM modules, backend APIs and mobile app integration.',
    developmentType: 'Company Project',
    team: 'Kodexive team',
    image: '/zymgoo.jpg',
    demo: 'https://zymgoo.com/',
    github: null,
  },
  {
    id: 'kodexive',
    title: 'Kodexive Website',
    category: 'websites',
    type: 'Company Website',
    tagline: 'Official website of Kodexive Technologies Pvt. Ltd. — web, app & digital marketing services.',
    description:
      'Official company website presenting web development, mobile app development, digital marketing and blockchain services, with service pages, project showcases, enquiry flows and SEO-optimized content.',
    problem:
      'The company needed a professional online presence that explains its services across industries and converts visitors into enquiries.',
    solution:
      'Built a fast, responsive, SEO-friendly business website with clear service structure, project sections and contact/enquiry flows.',
    features: [
      'Service Pages',
      'Project Showcase',
      'Enquiry & Contact Flows',
      'Responsive Design',
      'SEO Pages',
      'Industry Sections',
    ],
    tech: ['Web Development', 'Responsive Design', 'SEO'],
    role: 'Developer — worked on website pages, content structure and deployment with the Kodexive team.',
    developmentType: 'Company Project',
    team: 'Kodexive team',
    image: '/kodexive.jpg',
    demo: 'https://kodexive.com/',
    github: null,
  },
  {
    id: 'easybulksms',
    title: 'EasyBulkSMS',
    category: 'websites',
    type: 'Marketing Platform Website',
    tagline: 'Bulk SMS, WhatsApp marketing and digital marketing services platform.',
    description:
      'Platform website for bulk SMS, OTP, WhatsApp marketing, voice solutions and digital marketing services — with product pages, enquiry forms and SEO content. Part of Kodexive Technologies.',
    problem:
      'Businesses needed a clear place to discover messaging services (SMS, WhatsApp, voice, OTP) and request demos or quotes.',
    solution:
      'Built a service-platform website with product/solution pages, lead enquiry forms and SEO-optimized content for each offering.',
    features: [
      'Bulk SMS & OTP Pages',
      'WhatsApp Marketing Pages',
      'Voice & IVR Sections',
      'Enquiry & Demo Forms',
      'SEO Content',
      'Responsive Design',
    ],
    tech: ['Web Development', 'Responsive Design', 'SEO'],
    role: 'Developer — worked on website pages, enquiry flows and deployment with the Kodexive team.',
    developmentType: 'Company Project',
    team: 'Kodexive team',
    image: '/easybulk.jpg',
    demo: 'https://easybulksms.co.in/',
    github: null,
  },
]

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fintech', name: 'FinTech' },
  { id: 'crm', name: 'CRM & Apps' },
  { id: 'websites', name: 'Websites' },
]

export default projectsData
