import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  onHireMeClick: () => void;
  activeNav: string;
  setActiveNav: (item: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onHireMeClick,
  activeNav,
  setActiveNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', targetId: 'accueil' },
    { label: 'À propos', targetId: 'a-propos' },
    { label: 'Compétences', targetId: 'competences' },
    { label: 'Projets', targetId: 'projets' },
    { label: 'Contact', targetId: 'contact' },
  ];

  const handleNavClick = (item: { label: string; targetId: string }) => {
    setActiveNav(item.label);
    const element = document.getElementById(item.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#060713]/90 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          id="navbar-brand-logo"
          href="#accueil"
          onClick={() => setActiveNav('Accueil')}
          className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight group"
        >
          <span className="flex items-center justify-center text-purple-400 font-extrabold group-hover:scale-105 transition-transform duration-200">
            <Code2 className="w-6 h-6 text-purple-400 stroke-[2.5]" />
          </span>
          <span className="font-extrabold text-white text-lg sm:text-xl tracking-tight">
            CodeCraft
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav
          id="desktop-nav-menu"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
        >
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, '-').replace(/[àáâãäå]/g, 'a').replace(/[éèêë]/g, 'e')}`}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'hover:text-white text-slate-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-sm shadow-purple-500/50" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            id="hire-me-button"
            type="button"
            onClick={onHireMeClick}
            className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#8b5cf6] text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>Me recruter</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex md:hidden">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-t border-slate-800 px-4 py-3 bg-[#0a0d1d]/95 backdrop-blur-xl shadow-2xl flex flex-col gap-2.5"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              id={`mobile-nav-item-${item.label.toLowerCase().replace(/\s+/g, '-').replace(/[àáâãäå]/g, 'a').replace(/[éèêë]/g, 'e')}`}
              type="button"
              onClick={() => {
                handleNavClick(item);
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                activeNav === item.label
                  ? 'bg-purple-900/40 text-purple-300 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <button
              id="mobile-hire-me-button"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onHireMeClick();
              }}
              className="w-full justify-center flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm shadow-md cursor-pointer"
            >
              <span>Me recruter</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
