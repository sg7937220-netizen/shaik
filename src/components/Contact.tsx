import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Linkedin, Github, ExternalLink, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedText, setCopiedText] = useState(false);
  const introMessage = "Hi Shaik, saw your portfolio and would like to connect!";

  const handleCopyIntro = () => {
    navigator.clipboard.writeText(introMessage);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            06. Connect & Network
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Connect
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            I'm always interested in learning, building, collaborating, and exploring new ideas in technology and AI.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* LinkedIn Button */}
            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-blue-900/30 flex items-center gap-2.5 group"
            >
              <Linkedin className="w-5 h-5 text-white" />
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Button */}
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2.5 group"
            >
              <Github className="w-5 h-5 text-slate-200 group-hover:text-white" />
              <span>GitHub</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Connect Note Box */}
          <div className="mt-10 p-6 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-xl mx-auto text-left space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                Quick Connect Note
              </span>
              <button
                onClick={handleCopyIntro}
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono transition-colors"
              >
                {copiedText ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy note</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs font-mono bg-slate-950 p-3 rounded-lg border border-slate-800/80 text-slate-300">
              "{introMessage}"
            </p>
            <p className="text-[11px] text-slate-400 leading-normal">
              Feel free to reach out directly on LinkedIn for discussions around student projects, Python programming, or hackathon team formations!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
