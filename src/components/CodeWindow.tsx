import React, { useState } from 'react';
import { Copy, Check, Terminal, Play, Sparkles } from 'lucide-react';

interface CodeSnippet {
  filename: string;
  code: string;
  output?: Record<string, unknown>;
}

const snippets: Record<string, CodeSnippet> = {
  'developer.js': {
    filename: 'developer.js',
    code: `const developpeur = {
  nom: 'Obed',
  competences: ['HTML', 'CSS',
    'JavaScript', 'React'],
  passion: 'Concevoir pour
    le web'
};`,
    output: {
      statut: 'Disponible immédiatement',
      experience: '5+ ans',
      specialite: 'Applications Web Modernes',
      localisation: 'Télétravail / France & Monde'
    }
  },
  'skills.ts': {
    filename: 'skills.ts',
    code: `interface ProfilObed {
  langages: string[];
  frameworks: string[];
  focus: string;
}

const obed: ProfilObed = {
  langages: ['TypeScript', 'JS'],
  frameworks: ['React', 'Next.js', 'Tailwind'],
  focus: 'UI pixel-perfect & Haute performance'
};`,
    output: {
      codePropre: true,
      scorePerformance: '99/100',
      responsive: true
    }
  }
};

export const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'developer.js' | 'skills.ts'>('developer.js');
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group w-full max-w-md mx-auto sm:max-w-lg transition-all duration-300">
      {/* Subtle outer glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

      {/* Main Window Card */}
      <div
        id="code-editor-card"
        className="relative rounded-2xl bg-[#0d101d]/95 backdrop-blur-xl border border-slate-700/60 shadow-2xl shadow-black/80 overflow-hidden font-mono"
      >
        {/* Window Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111425]/90 border-b border-slate-800/80 select-none">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold text-xs">{'</>'}</span>
            <span className="text-slate-200 text-xs font-medium tracking-wide">Code</span>

            {/* Subtle Tab selector */}
            <div className="ml-3 hidden sm:flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-md border border-slate-800 text-[11px]">
              <button
                type="button"
                onClick={() => setActiveTab('developer.js')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  activeTab === 'developer.js'
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                developer.js
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('skills.ts')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  activeTab === 'skills.ts'
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                skills.ts
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Copy button */}
            <button
              id="copy-code-button"
              type="button"
              onClick={handleCopy}
              className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
              title={copied ? "Code copié !" : "Copier le code"}
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Run / Toggle Output button */}
            <button
              id="toggle-code-output"
              type="button"
              onClick={() => setShowOutput(!showOutput)}
              className={`p-1 rounded text-xs flex items-center gap-1 transition-colors ${
                showOutput
                  ? 'text-purple-300 bg-purple-900/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={showOutput ? "Afficher le code" : "Exécuter l'objet"}
            >
              {showOutput ? <Terminal className="w-3.5 h-3.5" /> : <Play className="w-3 h-3 text-emerald-400" />}
            </button>

            {/* Green Live Dot as seen in image */}
            <span
              className="relative flex h-2.5 w-2.5"
              title="Système en ligne"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
        </div>

        {/* Window Content */}
        {!showOutput ? (
          <div className="p-4 sm:p-5 text-[13px] sm:text-sm leading-relaxed overflow-x-auto text-slate-200 selection:bg-purple-900/60">
            {activeTab === 'developer.js' ? (
              <div className="space-y-1">
                <div>
                  <span className="text-purple-400 font-semibold">const </span>
                  <span className="text-sky-300">developpeur</span>
                  <span className="text-slate-400"> = {'{'}</span>
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-teal-300">nom</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-amber-300">&apos;Obed&apos;</span>
                  <span className="text-slate-400">,</span>
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-teal-300">competences</span>
                  <span className="text-slate-400">: [</span>
                  <span className="text-amber-300">&apos;HTML&apos;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-amber-300">&apos;CSS&apos;</span>
                  <span className="text-slate-400">,</span>
                </div>
                <div className="pl-8 sm:pl-10">
                  <span className="text-amber-300">&apos;JavaScript&apos;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-amber-300">&apos;React&apos;</span>
                  <span className="text-slate-400">],</span>
                </div>
                <div className="pl-4 sm:pl-6">
                  <span className="text-teal-300">passion</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-amber-300">&apos;Concevoir pour</span>
                </div>
                <div className="pl-8 sm:pl-10">
                  <span className="text-amber-300">le web&apos;</span>
                </div>
                <div>
                  <span className="text-slate-400">{'}'};</span>
                </div>
              </div>
            ) : (
              <div className="space-y-1 text-xs sm:text-sm">
                <div>
                  <span className="text-purple-400 font-semibold">interface </span>
                  <span className="text-amber-300">ProfilObed </span>
                  <span className="text-slate-400">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-teal-300">langages</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-sky-300">string</span>
                  <span className="text-slate-400">[];</span>
                </div>
                <div className="pl-4">
                  <span className="text-teal-300">frameworks</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-sky-300">string</span>
                  <span className="text-slate-400">[];</span>
                </div>
                <div className="pl-4">
                  <span className="text-teal-300">focus</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-sky-300">string</span>
                  <span className="text-slate-400">;</span>
                </div>
                <div><span className="text-slate-400">{'}'}</span></div>
                <div className="pt-2">
                  <span className="text-purple-400 font-semibold">const </span>
                  <span className="text-sky-300">obed</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-amber-300">ProfilObed </span>
                  <span className="text-slate-400">= {'{ ... }'};</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-4 sm:p-5 text-xs font-mono bg-black/40 text-emerald-400">
            <div className="flex items-center gap-2 mb-2 text-slate-400 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Sortie console :</span>
            </div>
            <pre className="text-slate-300 whitespace-pre-wrap">
              {JSON.stringify(snippets[activeTab].output, null, 2)}
            </pre>
          </div>
        )}

        {/* Footer status bar */}
        <div className="px-4 py-2 bg-[#090b14]/80 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400" />
            UTF-8
          </span>
          <span>JavaScript (ES2024)</span>
        </div>
      </div>
    </div>
  );
};
