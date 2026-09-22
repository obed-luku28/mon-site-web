import React from 'react';
import { Calendar, Code2, Smile, Trophy, User, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMoreClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  const stats = [
    {
      id: 'stat-experience',
      icon: Calendar,
      value: '4+',
      label: "Années d'expérience",
      enLabel: 'Years Experience',
    },
    {
      id: 'stat-projects',
      icon: Code2,
      value: '50+',
      label: 'Projets réalisés',
      enLabel: 'Projects Completed',
    },
    {
      id: 'stat-clients',
      icon: Smile,
      value: '30+',
      label: 'Clients satisfaits',
      enLabel: 'Happy Clients',
    },
    {
      id: 'stat-satisfaction',
      icon: Trophy,
      value: '100%',
      label: 'Satisfaction client',
      enLabel: 'Client Satisfaction',
    },
  ];

  const skillsData = [
    {
      id: 'html',
      name: 'HTML',
      level: 95,
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Logo HTML5">
          <path d="M4 2L5.6 20L12 22L18.4 20L20 2H4Z" fill="#E44D26" />
          <path d="M12 3.8V20.2L16.9 18.6L18.2 3.8H12Z" fill="#F16529" />
          <path d="M12 7.8H8.4L8.7 11H12V13.8H8.9L9.2 16.5L12 17.3V19.5L7.1 18.1L6.5 11.8L6.4 7.8H12V7.8Z" fill="#EBEBEB" />
          <path d="M12 7.8V10.2H15.4L15.1 13.8H12V16.6L14.8 15.8L15 13.8H17.4L17 18.1L12 19.5V7.8Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 'react',
      name: 'React.js',
      level: 85,
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Logo React">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#61DAFB" strokeWidth="1.3" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.3" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.3" />
        </svg>
      ),
    },
    {
      id: 'css',
      name: 'CSS',
      level: 90,
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Logo CSS3">
          <path d="M4 2L5.6 20L12 22L18.4 20L20 2H4Z" fill="#1572B6" />
          <path d="M12 3.8V20.2L16.9 18.6L18.2 3.8H12Z" fill="#33A9DC" />
          <path d="M12 7.8H8.4L8.7 11.2H12V13.8H8.9L9.2 16.5L12 17.3V19.5L7.1 18.1L6.5 11.8L6.4 7.8H12V7.8Z" fill="#EBEBEB" />
          <path d="M12 7.8V10.2H17.3L17.1 12H12V14.4H14.8L14.6 16.6L12 17.3V19.5L16.9 18.1L17.5 11.8L17.6 7.8H12Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      level: 80,
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Logo Next.js">
          <circle cx="12" cy="12" r="10.5" fill="#000000" stroke="#475569" strokeWidth="1" />
          <path d="M8 8V16M8 8L15.6 16.8M16 8V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      level: 90,
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-label="Logo JavaScript">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7.5 16.5C7.5 17.7 8.3 18.6 9.8 18.6C10.8 18.6 11.5 18.1 11.9 17.3L10.5 16.4C10.3 16.8 10.1 17 9.7 17C9.2 17 9 16.7 9 16.1V11.8H7.5V16.5Z" fill="#000000" />
          <path d="M13.2 17.1C13.7 17.6 14.5 17.9 15.4 17.9C16.5 17.9 17.2 17.3 17.2 16.4C17.2 15.4 16.6 15 15.5 14.5C14.2 14 13.4 13.4 13.4 12.2C13.4 11.1 14.3 10.2 15.6 10.2C16.6 10.2 17.3 10.5 17.8 11.1L16.6 12.1C16.3 11.7 15.9 11.5 15.5 11.5C15 11.5 14.7 11.8 14.7 12.2C14.7 12.7 15.1 13 16 13.4C17.4 14 18.5 14.6 18.5 16.1C18.5 17.6 17.3 18.8 15.2 18.8C14 18.8 13 18.3 12.3 17.3L13.2 17.1Z" fill="#000000" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="a-propos"
      className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-800/60"
    >
      {/* Background soft ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Part: About Me + 4 Stat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text & Bio */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-5">
          {/* Pill Badge */}
          <div
            id="about-pill-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 backdrop-blur-sm"
          >
            <span className="text-[11px] font-bold tracking-widest text-indigo-300 uppercase">
              À propos de moi
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-[1.2]">
            Passionné par la création de solutions numériques
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
            Avec plus de 4 ans d&apos;expérience dans le développement web, j&apos;aide les entreprises et les porteurs de projets à donner vie à leurs idées grâce à un code propre, performant et centré sur l&apos;utilisateur.
          </p>

          {/* Button */}
          <div className="pt-2">
            <button
              id="learn-more-about-btn"
              type="button"
              onClick={onLearnMoreClick}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0d1020] hover:bg-[#151930] text-slate-200 hover:text-white border border-slate-700/80 hover:border-purple-500/50 text-sm font-medium transition-all duration-200 active:scale-[0.98] shadow-lg shadow-black/40 group cursor-pointer"
            >
              <span>En savoir plus sur moi</span>
              <User className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: 2x2 Stat Cards Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                id={stat.id}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#0b0e1b]/80 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-purple-950/20 flex items-center gap-4.5"
              >
                {/* Icon square */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-600/20 border border-indigo-500/25 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 group-hover:border-indigo-400/40 transition-all">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                </div>

                {/* Stat texts */}
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Part: Skills Showcase from Image */}
      <div id="competences" className="mt-20 pt-16 border-t border-slate-800/50">
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30">
            <span className="text-[11px] font-bold tracking-widest text-purple-300 uppercase">
              Mes Compétences
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technologies que je maîtrise
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mt-2" />
        </div>

        {/* 3 Columns Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="group p-4 sm:p-4.5 rounded-xl bg-[#0b0e1b]/70 border border-slate-800/70 hover:border-purple-500/40 hover:bg-[#0f1325]/80 transition-all duration-200 hover:shadow-lg hover:shadow-purple-950/20"
            >
              <div className="flex items-center justify-between mb-3 text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-white tracking-tight text-sm">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-xs sm:text-sm text-slate-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              {/* Progress bar container */}
              <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 transition-all duration-500 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
