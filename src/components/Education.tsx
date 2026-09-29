import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Clock, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/80 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            05. Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Academic pathway currently underway, establishing core scientific and computational fundamentals.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-blue-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {PORTFOLIO_DATA.education.degree}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {PORTFOLIO_DATA.education.academicFocus}
                  </p>
                </div>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 self-start sm:self-center text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Enrolled & Active</span>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                  Academic Status
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.education.status}.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                  Curriculum Scope
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.education.overview}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Status: First Year Undergraduate</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Foundational Engineering Coursework</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
