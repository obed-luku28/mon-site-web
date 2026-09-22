import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { defaultProjects, ProjectItem } from '../data/projectsData';
import { WhatsAppLogo, GmailLogo } from './ContactSection';

interface ProjectsSectionProps {
  onContactClick?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onContactClick }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const displayedProjects = showAll ? defaultProjects : defaultProjects.slice(0, 3);

  const handleProjectClick = (project: ProjectItem, e: React.MouseEvent) => {
    // If it's the view link, let it be handled or open detail modal
    e.preventDefault();
    setSelectedProject(project);
  };

  return (
    <section
      id="projets"
      className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-800/60"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <div
          id="featured-projects-eyebrow"
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-purple-300 uppercase">
            FEATURED PROJECTS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-[1.2]">
          Some of My Recent Work
        </h2>

        {/* Small Purple Divider Bar matching design */}
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mt-2" />

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto pt-1 font-normal">
          Découvrez une sélection de projets récents, conçus avec passion, modernité et souci du détail.
        </p>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="group relative rounded-2xl bg-[#090c19] border border-slate-800/80 hover:border-purple-500/50 transition-all duration-300 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-purple-950/25"
          >
            {/* Top Media Area */}
            <div
              className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-800/80 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Number Badge (01, 02, 03) */}
              <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-slate-200 shadow-sm">
                {project.number}
              </div>

              {/* Project Preview Image */}
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c19] via-transparent to-transparent opacity-60" />
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium text-slate-400 bg-slate-800/60 border border-slate-700/50 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    id={`view-project-link-${project.id}`}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-purple-300 transition-colors group/btn cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  <button
                    id={`details-project-btn-${project.id}`}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800 border border-slate-700/40"
                  >
                    Détails
                  </button>
                </div>

                {project.githubUrl && (
                  <a
                    id={`github-project-link-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Code source pour ${project.title}`}
                    className="text-slate-500 hover:text-slate-300 transition-colors p-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots like in the image */}
      <div className="flex items-center justify-center gap-2 mt-10">
        <span className={`w-2.5 h-2.5 rounded-full transition-all ${!showAll ? 'bg-purple-500 w-6' : 'bg-slate-700'}`} />
        <span className={`w-2.5 h-2.5 rounded-full transition-all ${showAll ? 'bg-purple-500 w-6' : 'bg-slate-700'}`} />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      </div>

      {/* "Voir plus" / "Voir moins" Button */}
      <div className="mt-8 text-center flex flex-col items-center justify-center gap-3">
        <button
          id="toggle-more-projects-btn"
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0e1224] hover:bg-[#161c36] text-white border border-slate-700/80 hover:border-purple-500/60 text-sm font-medium transition-all duration-200 active:scale-[0.98] shadow-lg shadow-black/40 group cursor-pointer"
        >
          <Layers className="w-4 h-4 text-purple-400" />
          <span>{showAll ? 'Voir moins de projets' : 'Voir plus de projets'}</span>
          {showAll ? (
            <ChevronUp className="w-4 h-4 text-slate-400 group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
        <span className="text-xs text-slate-500">
          {showAll
            ? `Affichage de l'ensemble des ${defaultProjects.length} projets`
            : '3 projets affichés par défaut • Cliquez pour en découvrir davantage'}
        </span>
      </div>

      {/* Quick Project Details Modal */}
      {selectedProject && (
        <div
          id="project-detail-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            id="project-detail-modal"
            className="relative w-full max-w-xl bg-[#0c1022] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400">
                  PROJET {selectedProject.number} • {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Preview image */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-800 mb-4 bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {selectedProject.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">
                Technologies utilisées :
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-purple-300 bg-purple-950/60 border border-purple-500/30 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              {/* Ligne 1 : Actions principales */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Bouton 1 (Primaire) : Visiter le site web */}
                <a
                  id="modal-visit-website-btn"
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-950/30 cursor-pointer group"
                >
                  <span>Visiter le site web</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Bouton 2 (Secondaire) : Code GitHub */}
                <a
                  id="modal-github-code-btn"
                  href={selectedProject.githubUrl || 'https://github.com/obed-luku28'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white text-sm font-medium transition-colors cursor-pointer group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span>Code GitHub</span>
                </a>
              </div>

              {/* Ligne 2 : Section d'engagement / Contact */}
              <div className="pt-3 border-t border-slate-800/60">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-2.5">
                  INTERESSÉ PAR UN PROJET SIMILAIRE ?
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Bouton WhatsApp */}
                  <a
                    id="modal-contact-whatsapp"
                    href={`https://wa.me/243848661120?text=${encodeURIComponent(
                      `Bonjour Obed, je suis intéressé(e) par un projet similaire à "${selectedProject.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-emerald-950/20 hover:bg-emerald-900/35 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-300 hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <WhatsAppLogo className="w-4.5 h-4.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col text-left min-w-0">
                        <span className="text-xs font-bold text-white group-hover:text-emerald-300">
                          WhatsApp
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono truncate">
                          +243 848 661 120
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5" />
                  </a>

                  {/* Bouton Email */}
                  <a
                    id="modal-contact-email"
                    href={`mailto:obedlukusa.pro@gmail.com?subject=${encodeURIComponent(
                      `Projet similaire : ${selectedProject.title}`
                    )}&body=${encodeURIComponent(
                      `Bonjour Obed,\n\nJe vous contacte car je souhaite discuter d'un projet similaire à "${selectedProject.title}".\n\nVoici quelques précisions sur mon besoin :\n- ...\n\nBien cordialement.`
                    )}`}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/70 hover:border-red-500/50 text-slate-200 hover:text-white transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <GmailLogo className="w-4.5 h-4.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col text-left min-w-0">
                        <span className="text-xs font-bold text-white group-hover:text-red-300">
                          Email
                        </span>
                        <span className="text-[11px] text-slate-400 truncate">
                          obedlukusa.pro@gmail.com
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
