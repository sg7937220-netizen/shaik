import React from 'react';
import { BookOpen, Lightbulb, Code2, Users, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Learning by Building",
      description:
        "Applying newly learned Python algorithms and web technologies directly into interactive scripts and functional micro-projects."
    },
    {
      icon: Lightbulb,
      title: "Generative AI Exploration",
      description:
        "Exploring how modern LLMs and Prompt Engineering function, preparing for modern AI engineering paradigms."
    },
    {
      icon: Users,
      title: "Hackathons & Ideathons",
      description:
        "Testing ideas under pressure, working alongside fellow students, and learning practical problem-solving in collaborative sprints."
    },
    {
      icon: Compass,
      title: "Strong Academic Fundamentals",
      description:
        "Currently pursuing the first semester of B.Tech, grounding engineering concepts in mathematics, logic, and computational theory."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            01. Background & Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {PORTFOLIO_DATA.profile.aboutDescription}
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-900/50 flex items-center justify-center text-blue-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Current Mindset Banner */}
        <div className="mt-10 p-6 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">
              Authentic Student Commitment
            </h4>
            <p className="text-xs text-slate-400">
              Focused on steady discipline, clean fundamentals, and transparent progress over exaggerated claims.
            </p>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0"
          >
            Explore What I've Built &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
