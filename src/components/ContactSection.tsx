import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Check, Copy } from 'lucide-react';

interface ContactSectionProps {
  onHireMeClick: () => void;
}

/* --- VRAIS LOGOS OFFICIELS BRANDING --- */

// Vrai logo officiel GitHub (Octocat)
export const GitHubLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Vrai logo officiel WhatsApp (bulle verte iconique + combiné)
export const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="#25D366"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
    />
    <path
      fill="#FFFFFF"
      d="M17.53 14.37C17.23 14.22 15.75 13.49 15.47 13.39C15.2 13.29 15 13.24 14.81 13.54C14.61 13.84 14.04 14.51 13.87 14.71C13.7 14.91 13.52 14.93 13.22 14.78C12.92 14.63 11.96 14.32 10.83 13.31C9.94 12.52 9.34 11.54 9.17 11.24C9 10.94 9.15 10.78 9.3 10.63C9.43 10.5 9.6 10.28 9.75 10.11C9.9 9.94 9.95 9.81 10.05 9.61C10.15 9.41 10.1 9.24 10.02 9.09C9.95 8.94 9.37 7.51 9.13 6.94C8.9 6.38 8.66 6.46 8.48 6.45C8.32 6.44 8.12 6.44 7.92 6.44C7.72 6.44 7.4 6.51 7.13 6.81C6.86 7.11 6.1 7.82 6.1 9.28C6.1 10.74 7.16 12.15 7.31 12.35C7.46 12.55 9.4 15.54 12.36 16.82C13.06 17.12 13.62 17.31 14.04 17.44C14.75 17.67 15.4 17.64 15.91 17.56C16.48 17.47 17.67 16.84 17.92 16.14C18.17 15.44 18.17 14.84 18.09 14.71C18.02 14.59 17.83 14.52 17.53 14.37Z"
    />
  </svg>
);

// Vrai logo officiel Gmail (enveloppe multi-couleur Google)
export const GmailLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path fill="#4285F4" d="M45 16.2v21.3c0 2.5-2 4.5-4.5 4.5H33V24.5l12-8.3z" />
    <path fill="#34A853" d="M15 42H7.5C5 42 3 40 3 37.5V16.2l12 8.3V42z" />
    <path fill="#EA4335" d="M33 11.5v13L45 16.2c0-3.3-3.7-5.2-6.3-3.4L33 11.5z" />
    <path fill="#FBBC05" d="M15 24.5v-13l-5.7 1.3C6.7 11 3 12.9 3 16.2l12 8.3z" />
    <path fill="#EA4335" d="M15 11.5l9 6.5 9-6.5V6H15v5.5z" />
  </svg>
);

export const ContactSection: React.FC<ContactSectionProps> = ({ onHireMeClick }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const whatsappNumber = '0848661120';
  const whatsappIntl = '+243 848 661 120';
  const whatsappLink = 'https://wa.me/243848661120?text=Bonjour%20Obed%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio%20pour%20discuter%20d%27un%20projet.';
  const githubUrl = 'https://github.com/obed-luku28';
  const emailAddress = 'obedlukusa.pro@gmail.com';

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="contact" className="relative z-20 w-full border-t border-slate-800/80 bg-[#060814] pt-16 sm:pt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* COLONNE DE GAUCHE : Appel à l'action */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase block">
                TRAVAILLONS ENSEMBLE
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Vous avez un projet en tête ?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl pt-1">
                Je suis toujours disponible pour échanger sur de nouvelles idées, collaborer sur des projets innovants ou concevoir votre prochaine solution web.
              </p>
            </div>

            {/* Boutons d'action : WhatsApp et Formulaire */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-md">
              {/* Bouton principal WhatsApp (dégradé vert-émeraude / bleu) */}
              <a
                id="contact-whatsapp-main-btn"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <WhatsAppLogo className="w-4.5 h-4.5" />
                <span>Discuter sur WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Bouton secondaire Formulaire */}
              <button
                id="contact-open-form-btn"
                type="button"
                onClick={onHireMeClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 hover:border-purple-500/40 text-sm font-medium transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <span>Formulaire</span>
              </button>
            </div>
          </div>

          {/* COLONNE DE DROITE : Informations de contact */}
          <div className="lg:col-span-5">
            <div
              id="contact-info-card"
              className="rounded-2xl bg-[#0a0e22]/90 border border-slate-800/90 p-6 sm:p-7 flex flex-col space-y-6 shadow-xl relative overflow-hidden backdrop-blur-sm"
            >
              {/* Titre de section */}
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase block">
                  ME REJOINDRE DIRECTEMENT
                </span>
                <div className="w-10 h-0.5 bg-purple-500/60 rounded-full mt-2" />
              </div>

              {/* Liste verticale épurée avec icône et texte */}
              <div className="space-y-4">
                {/* Ligne Gmail */}
                <a
                  id="contact-direct-email"
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-3.5 text-slate-300 hover:text-white transition-colors group cursor-pointer p-2.5 -mx-2.5 rounded-xl hover:bg-slate-900/60"
                  title="Envoyer un e-mail"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-red-500/50 group-hover:bg-red-950/20 transition-all shadow-sm">
                    <GmailLogo className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-red-300 truncate">
                      {emailAddress}
                    </span>
                    <span className="text-xs text-slate-400">
                      Gmail professionnel
                    </span>
                  </div>
                </a>

                {/* Ligne WhatsApp / Téléphone */}
                <div className="flex items-center justify-between gap-2 p-2.5 -mx-2.5 rounded-xl hover:bg-slate-900/60 transition-colors">
                  <a
                    id="contact-direct-whatsapp"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-slate-300 hover:text-emerald-400 transition-colors group cursor-pointer flex-1 min-w-0"
                    title="Écrire sur WhatsApp"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/20 transition-all shadow-sm">
                      <WhatsAppLogo className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300">
                        {whatsappIntl}
                      </span>
                      <span className="text-xs text-slate-400">
                        WhatsApp & Appel direct
                      </span>
                    </div>
                  </a>

                  {/* Bouton de copie rapide */}
                  <button
                    type="button"
                    onClick={() => copyToClipboard(whatsappNumber, 'whatsapp')}
                    title="Copier le numéro de téléphone"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                  >
                    {copied === 'whatsapp' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] text-emerald-400 font-medium">Copié</span>
                      </>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Sous-titre discret RESEAUX & CODE */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase block mb-3">
                  RÉSEAUX & CODE
                </span>

                {/* Ligne horizontale d'icônes compactes (GitHub, WhatsApp, Gmail, LinkedIn) */}
                <div className="flex items-center gap-3">
                  {/* GitHub */}
                  <a
                    id="social-github-link"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil GitHub d'Obed"
                    title="GitHub d'Obed"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/60 hover:bg-[#151932] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <GitHubLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    id="social-whatsapp-link"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contacter Obed sur WhatsApp"
                    title="WhatsApp d'Obed"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/60 hover:bg-emerald-950/30 flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <WhatsAppLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  {/* Gmail */}
                  <a
                    id="social-gmail-link"
                    href={`mailto:${emailAddress}`}
                    aria-label="Envoyer un e-mail via Gmail"
                    title="Gmail d'Obed"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/60 hover:bg-red-950/20 flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <GmailLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    id="social-linkedin-link"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil LinkedIn d'Obed"
                    title="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/60 hover:bg-[#0c1c38] text-blue-400 hover:text-blue-300 flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-md"
                  >
                    <svg className="w-4.5 h-4.5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* PIED DE PAGE (Footer) épuré avec copyright sans mention de coeur */}
      <footer className="w-full border-t border-slate-800/80 bg-[#04060f] py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-between">
          <p id="footer-copyright" className="text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Obed Développeur. Tous droits réservés.
          </p>
        </div>
      </footer>
    </section>
  );
};
