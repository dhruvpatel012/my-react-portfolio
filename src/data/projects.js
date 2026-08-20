import {
  LuShoppingBag,
  LuTrendingUp,
  LuTimer,
  LuCloudSun,
  LuLeaf,
  LuMessageSquare,
} from 'react-icons/lu'

// Centralized project showcase data consumed by ProjectCard components.
export const projectsData = [
  {
    id: 'skymart',
    category: 'REACT E-COMMERCE',
    title: 'SkyMart',
    description:
      'Responsive React e-commerce application featuring product search, filtering, cart management, user authentication, and a demo checkout flow.',
    technologies: ['React 19', 'Tailwind CSS', 'React Router', 'React Hook Form'],
    github: 'https://github.com/dhruvpatel012/skymart-ecommerce',
    live: 'https://skymart-ecommerce-neon.vercel.app',
    icon: LuShoppingBag,
  },
  {
    id: 'fintrack-pro',
    category: 'PERSONAL FINANCE',
    title: 'FinTrack Pro',
    description:
      'Personal finance management dashboard built with JavaScript for tracking income, expenses, transactions, and financial analytics in real time.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'LocalStorage'],
    github: 'https://github.com/dhruvpatel012/FineTrackPro',
    live: 'https://fine-track-pro.vercel.app',
    icon: LuTrendingUp,
  },
  {
    id: 'productivemind',
    category: 'PRODUCTIVITY',
    title: 'ProductiveMind',
    description:
      'All-in-one productivity dashboard designed to organize study sessions, daily goals, schedules, tasks, and focus time in a single interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'LocalStorage'],
    github: 'https://github.com/dhruvpatel012/Productivity-Dashboard',
    live: 'https://productivity-dashboard-js.vercel.app',
    icon: LuTimer,
  },
  {
    id: 'skycast',
    category: 'WEATHER APP',
    title: 'SkyCast',
    description:
      'Responsive weather application featuring city search, real-time conditions, hourly forecasts, 7-day outlook, and dynamic weather visuals.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WeatherAPI', 'Lucide'],
    github: 'https://github.com/dhruvpatel012/Weather-App',
    live: 'https://skycast-weather-app-js.vercel.app',
    icon: LuCloudSun,
  },
  {
    id: 'two-leaves-a-bud',
    category: 'RESPONSIVE UI',
    title: 'Two Leaves & A Bud',
    description:
      'Premium tea brand landing page built with pure HTML and CSS, featuring product showcases, customer reviews, journal sections, and responsive UI.',
    technologies: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design'],
    github: 'https://github.com/dhruvpatel012/Two-Leaves-A-Bud_Project',
    live: 'https://two-leaves-a-bud-project.vercel.app',
    icon: LuLeaf,
  },
  {
    id: 'slack-clone',
    category: 'FRONTEND RECREATION',
    title: 'Slack Website Clone',
    description:
      "Responsive frontend recreation of Slack's landing page featuring interactive navigation, modal dialogs, carousels, and modular CSS architecture.",
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Responsive Design'],
    github: 'https://github.com/dhruvpatel012/slack-platform-ui',
    live: 'https://slack-platform-ui.vercel.app',
    icon: LuMessageSquare,
  },
]
