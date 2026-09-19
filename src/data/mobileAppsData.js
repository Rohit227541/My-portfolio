import {
  FaUtensils, FaCar, FaShoppingBag, FaDumbbell,
  FaCalendarCheck, FaTruck, FaBriefcase, FaUsers,
} from 'react-icons/fa'

// NOTE: These are application CATEGORIES with reference examples,
// not claims of having built those brands.
const mobileAppsData = [
  {
    icon: FaUtensils,
    title: 'Food Delivery Apps',
    description: 'Menu, cart, live order tracking and delivery partner flow.',
    reference: 'Reference category: similar to Swiggy / Zomato',
  },
  {
    icon: FaCar,
    title: 'Ride Booking Apps',
    description: 'Booking, driver assignment, fare calculation and trip tracking.',
    reference: 'Reference category: similar to Rapido / Uber',
  },
  {
    icon: FaShoppingBag,
    title: 'E-commerce Apps',
    description: 'Product browsing, offers, checkout and order history for shoppers.',
    reference: 'For retail and D2C businesses',
  },
  {
    icon: FaDumbbell,
    title: 'Gym & Fitness Apps',
    description: 'Gym discovery, memberships, attendance and member engagement.',
    reference: 'For gyms, trainers and fitness studios',
  },
  {
    icon: FaCalendarCheck,
    title: 'Service Booking Apps',
    description: 'Technician booking, complaints, AMC and job verification.',
    reference: 'For home services and maintenance businesses',
  },
  {
    icon: FaTruck,
    title: 'Delivery & Tracking Apps',
    description: 'Pickup, route status, delivery confirmation and partner app.',
    reference: 'For logistics and local delivery teams',
  },
  {
    icon: FaBriefcase,
    title: 'CRM & Business Apps',
    description: 'Leads, members, payments and reports accessible on mobile.',
    reference: 'For owners, managers and field teams',
  },
  {
    icon: FaUsers,
    title: 'Customer + Vendor + Partner Apps',
    description: 'Multi-role app ecosystems connected to one backend and admin panel.',
    reference: 'For marketplaces and service platforms',
  },
]

export default mobileAppsData
