import {
  SiCss,
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
  SiGithubcopilot,
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

export const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Outside', href: '#outside-the-ide' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: SiHtml5, description: 'Structuring semantic, accessible page content.' },
      { name: 'CSS', icon: SiCss, description: 'Building responsive layouts and polished visual systems.' },
      { name: 'JavaScript', icon: SiJavascript, description: 'Adding behavior, interactivity, and dynamic logic.' },
       { name: 'Typescript', icon: SiTypescript, description: 'Adding static typing to JavaScript for better code quality.' },
      { name: 'React', icon: SiReact, description: 'Composing reusable UI with component-driven architecture.' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Designing quickly with utility-first styling.' },
      { name: 'Bootstrap CSS', icon: SiTailwindcss, description: 'Building responsive layouts and polished visual systems.' },
     
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'PHP', icon: SiPhp, description: 'Creating server-side workflows and application logic.' },
      { name: 'Node.js', icon: SiNodedotjs, description: 'Running JavaScript on the server for APIs and tooling.' },
      { name: 'Express.js', icon: SiNodedotjs, description: 'Building web applications and APIs with a minimalist framework.' },
      { name: 'Supabase', icon: SiSupabase, description: 'Using a backend platform for auth, database, and APIs.' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', icon: SiMysql, description: 'Managing relational data with structured queries.' },
      { name: 'PostgreSQL', icon: SiPostgresql, description: 'Working with reliable relational storage and SQL features.' },
      { name: 'NoSQL', icon: SiFirebase, description: 'Storing and retrieving unstructured data with flexible schemas.' },
      
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'VS Code', icon: FiCode, description: 'Writing and debugging code in a fast editor.' },
      { name: 'Git', icon: SiGit, description: 'Tracking changes and coordinating version control.' },
      { name: 'GitHub', icon: SiGithub, description: 'Hosting code, collaboration, and project workflows.' },
      { name: 'GitHub Copilot', icon: SiGithubcopilot, description: 'AI pair programming assistant.' },
      { name: 'Codex', icon: FiCode, description: 'AI-powered code generation and assistance.' },
      
    ],
  },
];

export const projects = [
  {
    title: 'Health Sciences Library Portal',
    type: 'full-stack web-app',
    image: '/health-sciences-library-portal-preview.png',
    featured: true,
    description: 'Developed a backup system project that provides a fallback library portal that can be used when the main OPAC is unavailable.',
    detailsDescription:
      'A fallback portal designed to keep library services accessible when the main OPAC is unavailable. It focuses on continuity, clarity, and a simple user flow for students and staff who still need catalog access and library information. The portal is built with React for a responsive interface, Supabase for backend services, and Tailwind CSS for a consistent and fast UI design. The project emphasizes a clean, user-friendly experience, ensuring that essential library functions remain available even during system outages. The portal includes features such as user authentication, catalog search, and access to library resources, all while maintaining a lightweight and efficient design.',
    stack: ['React', 'Typescript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    keyFeatures: [
      'Fallback access to library information when the main OPAC is offline.',
      'Responsive design for accessibility on various devices.',
      'Reliable performance under typical usage scenarios.',
    ],
    github: 'https://github.com/airolo/hs-library-portal',
    live: 'https://hs-library-portal.vercel.app/login',
  },
  {
    title: 'Bounce Academy',
    type: 'E-commerce Web-App',
    image: '/bounce-academy-preview.png',
    featured: false,
    description: 'Developed an e-commerce website for sports apparel, including shirts, shorts, and hoodies.',
    detailsDescription:
      'A product-focused e-commerce website built for selling sports apparel such as shirts, shorts, and hoodies. The platform is designed to showcase product collections clearly, make browsing simple across devices, and provide a smooth shopping flow from discovery to checkout. It emphasizes clean product presentation, responsive layouts, and straightforward navigation for a better customer experience. The website is built using React for dynamic user interfaces, Tailwind CSS for rapid styling, and Vite for fast development and build processes. The project aims to create an engaging online shopping experience that encourages users to explore products and make purchases with ease.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    keyFeatures: [
      'Product catalog organized by apparel types like shirts, shorts, and hoodies.',
      'Responsive storefront optimized for desktop and mobile shoppers.',
      'Clear product-focused UI for faster browsing and purchase decisions.',
    ],
    github: 'https://github.com/airolo/bounce-academy',
    live: '#',
  },
  
];

export const experience = [
  {
    title: 'Bachelor of Science in Information Technology',
    organization: 'Divine Word College of Legazpi',
    description: 'Major in Web Development',
    period: '2021 - 2026',
    
  },
  {
    title: 'Software Engineering (OJT)',
    organization: 'Pixel 8: Web Solutions & Consultancy Inc.',
    period: 'January 26, 2026 - February 12, 2026',
    description: 'Developed a Mobile Application Inventory System using Vue.js, Quasar Framework, PHP, and Docker, implementing features such as CRUD operations, inventory viewing, restocking, and product management.',
    
  },
  {
    title: 'IT Support & Web Development (OJT)',
    organization: 'Bicol University Health Sciences Library',
    period: 'February 19, 2026 - May 11, 2026',
    description: 'Developed a backup system project that provides a fallback library portal that can be used when the main OPAC is unavailable. Provide technical assistance, troubleshoot hardware and software issues.',
  },
  
];

export const chatbotQuickActions = [
  { label: 'About Me', target: 'about', prompt: 'Tell me about yourself' },
  { label: 'Skills', target: 'skills', prompt: 'What technologies do you use?' },
  { label: 'Projects', target: 'projects', prompt: 'Show me your projects' },
  { label: 'Resume', target: 'resume', prompt: 'Can I download your resume?' },
  { label: 'Contact', target: 'contact', prompt: 'How can I contact you?' },
];

export const chatbotKnowledge = {
  greeting:
    "Hi! I'm Bradley. Ask me anything about my projects, skills, or contact information.",
  responses: [
    {
      match: ['tell me about yourself', 'about yourself', 'about me', 'who are you'],
      reply:
        'I am an Information Technology Full-Stack Developer focused on building clean, secure, and scalable systems with a minimalist product mindset.',
    },
    {
      match: ['what technologies do you use', 'technologies', 'skills', 'tech stack'],
      reply:
        'My core stack includes HTML, CSS, JavaScript, React, Tailwind CSS, PHP, Node.js, MySQL, Firebase, Git, GitHub, and VS Code.',
    },
    {
      match: ['show me your projects', 'projects', 'portfolio projects'],
      reply:
        'My featured project is the Health Sciences Library Portal, a full-stack React and Supabase web app. Use the Projects section to explore it.',
    },
    {
      match: ['how can i contact you', 'contact', 'email', 'linkedin', 'github'],
      reply:
        'You can reach out through the Contact section using the form or the social links for GitHub, LinkedIn, and email.',
    },
    {
      match: ['can i download your resume', 'resume', 'cv'],
      reply:
        'Yes. You can open the CV preview from the hero section and download my resume there.',
    },
  ],
};
