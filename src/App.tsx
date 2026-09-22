import React, { useState } from 'react';
import { ArrowUpRight, Download, Check, Sparkles, Code2, ExternalLink } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { CodeWindow } from './components/CodeWindow';
import { TechBadge } from './components/TechBadge';
import { DoodleArrow } from './components/DoodleArrow';
import { HireMeModal } from './components/HireMeModal';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { techStackData } from './data/techStack';

export default function App() {
  const [activeNav, setActiveNav] = useState('Accueil');
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [downloadToast, setDownloadToast] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleDownloadCV = () => {
    setDownloadToast(true);
    setTimeout(() => {
      setDownloadToast(false);
    }, 3500);
  };

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projets');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060713] text-slate-100 relative overflow-x-hidden flex flex-col selection:bg-purple-600/30 selection:text-purple-200">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[900px] left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navigation Bar */}
      <Navbar
        onHireMeClick={() => setIsHireModalOpen(true)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Hero Section */}
      <main id="accueil" className="relative z-10 flex-1 flex items-center justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* LEFT COLUMN: Bio, Title, Description, Buttons, Tech Stack */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 z-20">
            
            {/* Developer Badge */}
            <div
              id="role-pill-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 shadow-sm backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-purple-300 uppercase">
                Je suis développeur web
              </span>
            </div>

            {/* Main Headline with Obed */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.12]">
                Bonjour, je suis{' '}
                <span className="text-[#8e76ff] drop-shadow-[0_0_25px_rgba(142,118,255,0.4)]">
                  Obed
                </span>
                <br />
                <span className="text-white">Je conçois des expériences pour le web.</span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Développeur web passionné, je conçois et développe des expériences
              numériques d&apos;exception avec les technologies modernes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* View My Work Button */}
              <button
                id="hero-view-work-btn"
                type="button"
                onClick={handleViewWork}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4361ee] via-[#4895ef] to-[#7209b7] hover:from-[#3f37c9] hover:to-[#560bad] text-white font-medium text-sm sm:text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Voir mes réalisations</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Download CV Button */}
              <button
                id="hero-download-cv-btn"
                type="button"
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0c0f1d] hover:bg-[#151930] text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 font-medium text-sm sm:text-base transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Télécharger le CV</span>
                <Download className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Technologies Section */}
            <div className="pt-4 sm:pt-6 w-full relative">
              <div className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-3.5 flex items-center gap-2">
                <span>Technologies avec lesquelles je travaille</span>
                {selectedTech && (
                  <span className="text-purple-400 font-normal lowercase tracking-normal">
                    • Sélectionné : {selectedTech}
                  </span>
                )}
              </div>

              {/* Icons List */}
              <div className="flex flex-wrap items-center gap-3">
                {techStackData.map((tech) => (
                  <TechBadge
                    key={tech.id}
                    tech={tech}
                    onClick={() => setSelectedTech(tech.name)}
                  />
                ))}
              </div>

              {/* Curved Doodle Arrow from the original image */}
              <div className="hidden lg:block absolute -right-10 bottom-6 text-slate-400/70 pointer-events-none select-none">
                <DoodleArrow className="w-14 h-14 text-slate-400/80 -rotate-12 scale-90" />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Hero Visual without the person */}
          {/* Features the large radiant purple disc, the top-right dot matrix, and the floating Code Card */}
          <div id="hero-code-section" className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[500px]">
            
            {/* Dot Matrix in top-right as in the original */}
            <div
              className="absolute top-2 right-4 sm:top-6 sm:right-6 grid grid-cols-4 gap-2.5 z-0 opacity-40 select-none"
              aria-hidden="true"
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-indigo-400/80"
                />
              ))}
            </div>

            {/* Glowing Purple / Indigo Backdrop Circle (as behind the person in the reference) */}
            <div className="absolute w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#6366f1] via-[#8b5cf6] to-[#a855f7] opacity-80 blur-sm shadow-[0_0_80px_rgba(139,92,246,0.5)] z-0" />
            
            {/* Secondary concentric inner aura */}
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] opacity-90 z-0" />

            {/* Floating Code Window (The centerpiece replacing the person) */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md">
              <CodeWindow />
            </div>

            {/* Floating Complementary Badge 1: Status */}
            <div className="absolute -bottom-4 left-0 sm:-left-4 z-20 px-3.5 py-2 rounded-xl bg-[#0e1122]/90 border border-slate-700/70 backdrop-blur-md shadow-xl flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-200">
                Disponible pour vos projets
              </span>
            </div>

            {/* Floating Complementary Badge 2: Experience / Craft */}
            <div className="hidden sm:flex absolute -top-4 right-0 z-20 px-3.5 py-1.5 rounded-xl bg-[#0e1122]/90 border border-purple-500/30 backdrop-blur-md shadow-xl items-center gap-2 text-xs text-purple-200 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Web Créatif &amp; Full-Stack</span>
            </div>

          </div>

        </div>
      </main>

      {/* Section À propos reproduisant fidèlement l'image fournie */}
      <AboutSection onLearnMoreClick={() => setIsHireModalOpen(true)} />

      {/* Section Projets reproduisant fidèlement l'image fournie */}
      <ProjectsSection onContactClick={() => setIsHireModalOpen(true)} />

      {/* Section Contact & Footer reproduisant fidèlement l'image fournie */}
      <ContactSection onHireMeClick={() => setIsHireModalOpen(true)} />

      {/* Floating CV Download Toast Notification */}
      {downloadToast && (
        <div
          id="download-cv-toast"
          className="fixed bottom-6 right-6 z-50 bg-[#12162a] border border-purple-500/40 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fadeIn"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Curriculum Vitae</div>
            <div className="text-[11px] text-slate-400">Obed_Developpeur_CV.pdf téléchargé</div>
          </div>
        </div>
      )}

      {/* Contact / Hire Me Modal */}
      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}
