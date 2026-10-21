import {
  LuLeaf,
  LuShoppingBag,
  LuTimer,
  LuTrendingUp,
  LuCloudSun,
} from 'react-icons/lu'

// Exactly five resume projects as specified in portfolio_update_spec.md
export const projectsData = [
  {
    id: 'kisan-ai',
    category: 'Crop Disease Detection Platform',
    title: 'KisanAI',
    description:
      'Full-stack platform classifying crop leaf diseases from photos with confidence, severity analysis, and treatment advisories. Features React client, FastAPI backend with JWT & bcrypt, and MongoDB Atlas persistence (Vercel & Render).',
    technologies: ['React', 'Tailwind CSS', 'Python', 'FastAPI', 'MongoDB Atlas'],
    github: 'https://github.com/dhruvpatel012/KisanAI',
    live: 'https://kisan-ai-sandy.vercel.app/login',
    icon: LuLeaf,
  },
  {
    id: 'skymart',
    category: 'E-Commerce Platform',
    title: 'SkyMart',
    description:
      'Responsive storefront featuring product search, category filters, sorting, URL-synced pagination, product details, and persistent slide-over cart. Client-side authentication and demo checkout flow with no backend or payment gateway.',
    technologies: ['React', 'Tailwind CSS', 'React Router', 'Context API', 'LocalStorage'],
    github: 'https://github.com/dhruvpatel012/skymart-ecommerce',
    live: 'https://skymart-ecommerce-neon.vercel.app/',
    icon: LuShoppingBag,
  },
  {
    id: 'productivemind',
    category: 'Productivity Dashboard',
    title: 'ProductiveMind',
    description:
      'Productivity workspace with a Pomodoro timer, task manager, daily goals tracker, and hourly planner saved in LocalStorage. Integrates Open-Meteo weather and DummyJSON quote APIs with responsive layouts across devices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'CSS Grid', 'Flexbox', 'LocalStorage'],
    github: 'https://github.com/dhruvpatel012/Productivity-Dashboard',
    live: 'https://productivity-dashboard-js.vercel.app/',
    icon: LuTimer,
  },
  {
    id: 'fintrack-pro',
    category: 'Personal Finance Dashboard',
    title: 'FinTrack Pro',
    description:
      'Browser-based finance dashboard for tracking income and expenses with search, filtering, and transaction add/edit/delete operations. Visualizes cash flow with an interactive Chart.js bar chart and LocalStorage persistence.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'LocalStorage'],
    github: 'https://github.com/dhruvpatel012/FineTrackPro',
    live: 'https://fine-track-pro.vercel.app/',
    icon: LuTrendingUp,
  },
  {
    id: 'skycast',
    category: 'Weather Forecast App',
    title: 'SkyCast',
    description:
      'Responsive weather app with city search, browser geolocation, hourly and 7-day forecasts, and light/dark modes. Uses a Vercel Serverless Function to proxy WeatherAPI.com requests so API keys remain secure.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WeatherAPI.com', 'Vercel Serverless Functions'],
    github: 'https://github.com/dhruvpatel012/Weather-App',
    live: 'https://skycast-weather-app-js.vercel.app/',
    icon: LuCloudSun,
  },
]
