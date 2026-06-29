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
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: SiHtml5, description: 'Structuring semantic, accessible page content.' },
      { name: 'CSS', icon: SiCss, description: 'Building responsive layouts and polished visual systems.' },
      { name: 'JavaScript', icon: SiJavascript, description: 'Adding behavior, interactivity, and dynamic logic.' },
      { name: 'React', icon: SiReact, description: 'Composing reusable UI with component-driven architecture.' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Designing quickly with utility-first styling.' },
      { name: 'Typescript', icon: SiTypescript, description: 'Adding static typing to JavaScript for better code quality.' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'PHP', icon: SiPhp, description: 'Creating server-side workflows and application logic.' },
      { name: 'Node.js', icon: SiNodedotjs, description: 'Running JavaScript on the server for APIs and tooling.' },
      { name: 'Supabase', icon: SiSupabase, description: 'Using a backend platform for auth, database, and APIs.' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', icon: SiMysql, description: 'Managing relational data with structured queries.' },
      { name: 'PostgreSQL', icon: SiPostgresql, description: 'Working with reliable relational storage and SQL features.' },
      
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: SiGit, description: 'Tracking changes and coordinating version control.' },
      { name: 'GitHub', icon: SiGithub, description: 'Hosting code, collaboration, and project workflows.' },
      { name: 'VS Code', icon: FiCode, description: 'Writing and debugging code in a fast editor.' },
      { name: 'GitHub Copilot', icon: SiGithubcopilot, description: 'AI pair programming assistant.' },
    ],
  },
];

export const projects = [
  {
    title: 'MySchedMate',
    description: 'A Capstone Project for student assistant management system with QR attendance tracking, role-based workflows, and clean scheduling tools.',
    stack: ['PHP', 'Tailwind CSS', 'MySQL', 'QR Attendance'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    title: 'Bounce Academy',
    description: 'A basketball apparel e-commerce platform focused on product discovery, cart flow, and a premium monochrome storefront.',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'Supabase', 'E-commerce'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    title: 'Health Sciences Library Portal',
    description: 'Developed a full-stack e-commerce web app using React and Supabase, leveraging GitHub Copilot to accelerate development while manually designing system architecture, database schema, and business logic.',
    stack: ['React', 'Typescript', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/airolo/hs-library-portal',
    live: 'https://hs-library-portal.vercel.app/login',
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
    description: 'Supported day-to-day development tasks, collaborated with teams, and strengthened practical delivery skills.',
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
    "Hi! I'm Bradley Soloria. Ask me anything about my projects, skills, or contact information.",
  responses: [
    {
      match: ['tell me about yourself', 'about yourself', 'about me', 'who are you'],
      reply:
        'I am an Information Technology Software Engineer focused on building clean, secure, and scalable systems with a minimalist product mindset.',
    },
    {
      match: ['what technologies do you use', 'technologies', 'skills', 'tech stack'],
      reply:
        'My core stack includes HTML, CSS, JavaScript, React, Tailwind CSS, PHP, Node.js, MySQL, Firebase, Git, GitHub, and VS Code.',
    },
    {
      match: ['show me your projects', 'projects', 'portfolio projects'],
      reply:
        'I have featured MySchedMate, Bounce Academy, and Library Portal System. Use the Projects section to explore each one.',
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
