import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Lightbulb, Target, Cpu, Users, Wrench } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const iconList = [Target, Lightbulb, Wrench, Cpu, Users];

  return (
    <section id="hackathons" className="py-20 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            04. Collaborative Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Hackathons & Ideathons
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {PORTFOLIO_DATA.hackathons.purpose}
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.hackathons.pillars.map((pillar, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-900/40 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                  Focus Area 0{idx + 1}
                </div>
              </div>
            );
          })}

          {/* Collaborative Callout Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-900/40 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                Team Spirit
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Open to Future Collaborations
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Always enthusiastic about teaming up with fellow students, engineers, and creators for upcoming hackathons, ideathons, and prototype sprints.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <a
                href="#contact"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                Let's Build Together &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
