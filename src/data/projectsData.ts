import ecommerceImg from '../assets/images/ecommerce_platform_ui_1789067676308.jpg';
import taskImg from '../assets/images/task_management_ui_1789067692560.jpg';
import cryptoImg from '../assets/images/crypto_dashboard_ui_1789067707397.jpg';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  category: string;
}

export const defaultProjects: ProjectItem[] = [
  {
    id: 'vistahaven-immo',
    number: '01',
    title: 'VistaHaven Properties (Immo)',
    description: "Plateforme web d'exception en RD Congo : recherche de résidences de prestige, villas contemporaines avec moteur de recherche et design responsive.",
    image: 'https://obed-luku28.github.io/immo/assets/hero.jpg',
    tags: ['HTML5', 'CSS3 Modern', 'JavaScript', 'Responsive UI'],
    liveUrl: 'https://obed-luku28.github.io/immo/',
    githubUrl: 'https://github.com/obed-luku28/immo',
    category: 'Immobilier & Architecture / Web',
  },
  {
    id: 'ecommerce-platform',
    number: '02',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX',
    image: ecommerceImg,
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
    liveUrl: 'https://example.com/ecommerce-platform',
    githubUrl: 'https://github.com/obed-luku28',
    category: 'E-commerce / Full-Stack',
  },
  {
    id: 'task-management-app',
    number: '03',
    title: 'Task Management App',
    description: 'Collaborative task management application',
    image: taskImg,
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind'],
    liveUrl: 'https://example.com/task-management-app',
    githubUrl: 'https://github.com/obed-luku28',
    category: 'Productivity / SaaS',
  },
  {
    id: 'crypto-dashboard',
    number: '04',
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard',
    image: cryptoImg,
    tags: ['React', 'Chart.js', 'Crypto API', 'Tailwind'],
    liveUrl: 'https://example.com/crypto-dashboard',
    githubUrl: 'https://github.com/obed-luku28',
    category: 'Fintech / Dashboard',
  },
  {
    id: 'saas-analytics-platform',
    number: '05',
    title: 'SaaS Analytics Platform',
    description: 'Plateforme SaaS de métriques et analytics temps réel',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    liveUrl: 'https://example.com/saas-analytics',
    githubUrl: 'https://github.com/obed-luku28',
    category: 'Analytics / Cloud',
  },
  {
    id: 'realtime-chat-app',
    number: '06',
    title: 'Social & Chat Application',
    description: 'Application de messagerie instantanée collaborative avec salons privés',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Socket.io', 'Express', 'Tailwind'],
    liveUrl: 'https://example.com/chat-application',
    githubUrl: 'https://github.com/obed-luku28',
    category: 'Communication / Web',
  },
  {
    id: 'ai-creative-studio',
    number: '07',
    title: 'AI Creative Studio',
    description: 'Générateur de contenu et assistants interactifs propulsés par IA',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Next.js', 'AI API', 'Tailwind'],
    liveUrl: 'https://example.com/ai-studio',
    githubUrl: 'https://github.com/obed-luku28',
    category: 'Artificial Intelligence',
  },
];
