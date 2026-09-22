import React from 'react';

export interface TechItem {
  id: string;
  name: string;
  category: string;
  bg: string;
  icon: React.ReactNode;
}

export const techStackData: TechItem[] = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Markup',
    bg: '#E34F26',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M4 2L5.6 20L12 22L18.4 20L20 2H4Z" fill="#E44D26" />
        <path d="M12 3.8V20.2L16.9 18.6L18.2 3.8H12Z" fill="#F16529" />
        <path d="M12 7.8H8.4L8.7 11H12V13.8H8.9L9.2 16.5L12 17.3V19.5L7.1 18.1L6.5 11.8L6.4 7.8H12V7.8Z" fill="#EBEBEB" />
        <path d="M12 7.8V10.2H15.4L15.1 13.8H12V16.6L14.8 15.8L15 13.8H17.4L17 18.1L12 19.5V7.8Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Styling',
    bg: '#1572B6',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M4 2L5.6 20L12 22L18.4 20L20 2H4Z" fill="#1572B6" />
        <path d="M12 3.8V20.2L16.9 18.6L18.2 3.8H12Z" fill="#33A9DC" />
        <path d="M12 7.8H8.4L8.7 11.2H12V13.8H8.9L9.2 16.5L12 17.3V19.5L7.1 18.1L6.5 11.8L6.4 7.8H12V7.8Z" fill="#EBEBEB" />
        <path d="M12 7.8V10.2H17.3L17.1 12H12V14.4H14.8L14.6 16.6L12 17.3V19.5L16.9 18.1L17.5 11.8L17.6 7.8H12Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Language',
    bg: '#F7DF1E',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M7 16.5C7 17.8 7.8 18.8 9.5 18.8C10.6 18.8 11.4 18.3 11.8 17.4L10.3 16.5C10.1 16.9 9.8 17.2 9.4 17.2C8.9 17.2 8.6 16.9 8.6 16.2V11.5H7V16.5Z" fill="#000000" />
        <path d="M13 17.2C13.5 17.7 14.3 18 15.2 18C16.4 18 17.1 17.4 17.1 16.5C17.1 15.5 16.5 15.1 15.4 14.6C14.1 14.1 13.2 13.5 13.2 12.3C13.2 11.2 14.1 10.3 15.4 10.3C16.4 10.3 17.1 10.6 17.6 11.2L16.4 12.2C16.1 11.8 15.7 11.6 15.3 11.6C14.8 11.6 14.5 11.9 14.5 12.3C14.5 12.8 14.9 13.1 15.8 13.5C17.2 14.1 18.4 14.7 18.4 16.2C18.4 17.7 17.2 18.9 15.1 18.9C13.8 18.9 12.8 18.4 12.1 17.4L13 17.2Z" fill="#000000" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Language',
    bg: '#3178C6',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M6 10.5H12V12H9.8V18.5H8.2V12H6V10.5Z" fill="white" />
        <path d="M13.2 16.9C13.6 17.3 14.3 17.6 15.1 17.6C16.2 17.6 16.8 17.1 16.8 16.3C16.8 15.4 16.2 15 15.2 14.6C14 14.1 13.2 13.6 13.2 12.4C13.2 11.3 14.1 10.5 15.3 10.5C16.2 10.5 16.9 10.8 17.4 11.3L16.4 12.3C16.1 11.9 15.7 11.8 15.3 11.8C14.9 11.8 14.6 12 14.6 12.4C14.6 12.8 15 13.1 15.8 13.4C17.1 14 18.1 14.6 18.1 16C18.1 17.4 17 18.5 15.1 18.5C13.9 18.5 13 18 12.3 17.2L13.2 16.9Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    category: 'Framework',
    bg: '#20232A',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js / Node',
    category: 'Backend / SSR',
    bg: '#000000',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#1C1C1E" stroke="#339933" strokeWidth="1.2" />
        <path d="M8 8V16M8 8L16 16M16 8V13" stroke="#83CD29" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    bg: '#F05032',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect x="12" y="2" width="14" height="14" rx="2" transform="rotate(45 12 2)" fill="#F05032" />
        <path d="M12 6.5V13M12 13L15 16M12 13L9.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="6.5" r="1.4" fill="white" />
        <circle cx="15" cy="16" r="1.4" fill="white" />
        <circle cx="9.5" cy="10.5" r="1.4" fill="white" />
      </svg>
    ),
  },
];
