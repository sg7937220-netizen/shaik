import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Globe, Sparkles, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ElementType> = {
    Programming: Code,
    'Web Development': Globe,
    'Artificial Intelligence': Sparkles,
    'Development Skills': Wrench,
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            02. Technical Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Skills & Learning Stack
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Technologies and core capabilities I am actively studying and developing skills in during my first semester. Rather than claiming advanced mastery, I focus on practical understanding and iterative project application.
          </p>
        </div>

        {/* 4 Category Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skills.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || Code;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                    <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-blue-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        Active Growth Area
                      </span>
                    </div>
                  </div>

                  {/* Clean unboxed item list (Strict zero-pill discipline) */}
                  <ul className="space-y-3.5">
                    {group.items.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start justify-between gap-3 text-sm">
                        <div className="flex items-start gap-2.5">
                          <span className="text-blue-500 font-mono text-xs pt-0.5" aria-hidden="true">
                            0{sIdx + 1}.
                          </span>
                          <div>
                            <span className="font-medium text-slate-100 block">
                              {skill.name}
                            </span>
                            <span className="text-xs text-slate-400 block mt-0.5">
                              {skill.status}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Category 0{idx + 1}</span>
                  <span>Foundational Track</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Note */}
        <div className="mt-8 text-center text-xs text-slate-500 font-mono">
          <span>Continuous study</span>
          <span className="mx-2">·</span>
          <span>Hands-on practice</span>
          <span className="mx-2">·</span>
          <span>Open to feedback</span>
        </div>
      </div>
    </section>
  );
};
