import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { FiCode, FiTerminal } from 'react-icons/fi';

export const navigationLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'PHP', icon: SiPhp },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'NoSQL', icon: SiFirebase },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'VS Code', icon: FiCode },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Terminal', icon: FiTerminal },
    ],
  },
];

export const projects = [
  {
    title: 'Health Sciences Library Portal',
    image: '/health-sciences-library-portal-preview.png',
    description:
      'A fallback library portal that keeps catalog access available when the main OPAC is offline.',
    detailsDescription:
      'A backup system built during my OJT at the Bicol University Health Sciences Library, so students and staff still have a working catalog when the main OPAC goes down. React handles the interface, Supabase handles auth and data, and Tailwind CSS keeps the UI consistent across devices.',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    keyFeatures: [
      'Fallback catalog and library information when the main OPAC is offline.',
      'User authentication and catalog search.',
      'Responsive layout for desktop and mobile.',
    ],
    github: 'https://github.com/airolo/hs-library-portal',
    live: 'https://hs-library-portal.vercel.app/login',
  },
  {
    title: 'Bounce Academy',
    image: '/bounce-academy-preview.png',
    description: 'An e-commerce storefront for sports apparel — shirts, shorts, and hoodies.',
    detailsDescription:
      'A storefront built around a clear browse-to-checkout flow. Products are grouped by apparel type, the catalog is responsive, and the layout stays deliberately plain so the products carry the page.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    keyFeatures: [
      'Catalog organized by apparel type.',
      'Responsive storefront for desktop and mobile.',
      'Streamlined navigation from browsing to cart.',
    ],
    github: 'https://github.com/airolo/bounce-academy',
    live: 'https://bounce-academy.vercel.app',
    liveDisabled: true,
  },
  {
    title: 'MySchedMate',
    image: '/myschedmate.jpg',
    description: 'A scheduling app for student assistants juggling tasks, appointments, and shifts.',
    detailsDescription:
      'A scheduling web app that puts tasks, appointments, and meetings in one place. The interface stays minimal so creating and editing a schedule takes a couple of clicks, on any device.',
    stack: ['PHP', 'JavaScript', 'Tailwind CSS'],
    keyFeatures: [
      'Create and manage schedules, tasks, and appointments.',
      'Responsive calendar-based interface.',
      'Works cleanly on phone and desktop.',
    ],
    github: '#',
    live: 'https://myschedmate.vercel.app',
    liveDisabled: true,
  },
];

export const experience = [
  {
    period: '2021 — 2026',
    title: 'Bachelor of Science in Information Technology',
    organization: 'Divine Word College of Legazpi',
    description: 'Major in Web Development.',
  },
  {
    period: 'January 2026 — February 2026',
    title: 'Software Engineering (OJT)',
    organization: 'Pixel 8: Web Solutions & Consultancy Inc.',
    description:
      'Developed a Mobile Application Inventory System using Vue.js, Quasar, PHP, and Docker — covering CRUD operations, inventory viewing, restocking, and product management.',
  },
  {
    period: 'February 2026 — May 2026',
    title: 'IT Support & Web Development (OJT)',
    organization: 'Bicol University Health Sciences Library',
    description:
      'Built the Health Sciences Library Portal as a fallback system for when the main OPAC is unavailable, and handled day-to-day hardware and software troubleshooting for staff and students.',
  },
];

export const hobbies = [
  { label: 'Gym', src: '/gym.jpg' },
  { label: 'Basketball', src: '/basketball.jpg' },
  { label: 'Running', src: '/running.jpg' },
  { label: 'Gaming', src: '/gaming.jpg' },
];
