import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { GitHubLogo, WhatsAppLogo, GmailLogo } from './ContactSection';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // reset after brief feedback
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        id="hire-me-modal-card"
        className="relative w-full max-w-md bg-[#0e111d] border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50"
      >
        {/* Close button */}
        <button
          id="close-hire-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Message envoyé !</h3>
            <p className="text-slate-300 text-sm">
              Merci pour votre message ! Obed vous répondra sous 24 heures.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition-colors"
            >
              Fermer
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Collaborons ensemble</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Travailler avec Obed</h3>
            <p className="text-slate-400 text-sm mb-6">
              Vous avez un projet d&apos;application web moderne, rapide et responsive ? Échangeons ensemble.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Votre nom
                </label>
                <input
                  id="hire-input-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jean Dupont"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Adresse e-mail
                </label>
                <input
                  id="hire-input-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jean.dupont@exemple.fr"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Description du projet / Message
                </label>
                <textarea
                  id="hire-input-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Parlez à Obed de ce que vous souhaitez réaliser..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-500 resize-none"
                />
              </div>

              <button
                id="submit-hire-btn"
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-500 text-white font-medium text-sm shadow-lg shadow-purple-600/30 hover:brightness-110 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer ma demande</span>
              </button>

              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <span className="text-[11px] text-slate-400 text-center uppercase tracking-wider font-semibold">
                  Ou contactez-moi directement
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    id="modal-quick-whatsapp"
                    href="https://wa.me/243848661120?text=Bonjour%20Obed%2C%20je%20souhaite%20discuter%20d%27un%20projet."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/40 text-xs font-medium transition-colors cursor-pointer"
                  >
                    <WhatsAppLogo className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  <a
                    id="modal-quick-github"
                    href="https://github.com/obed-luku28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-medium transition-colors cursor-pointer"
                  >
                    <GitHubLogo className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <a
                  id="modal-quick-email"
                  href="mailto:obedlukusa.pro@gmail.com"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-red-500/40 hover:bg-red-950/20 text-xs font-medium transition-colors cursor-pointer"
                >
                  <GmailLogo className="w-4 h-4" />
                  <span>obedlukusa.pro@gmail.com</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
