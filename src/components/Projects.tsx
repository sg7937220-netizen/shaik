import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { CheckCircle2, CreditCard, GraduationCap, ArrowRight, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'voter-eligibility':
        return CheckCircle2;
      case 'atm-management':
        return CreditCard;
      case 'student-grade-calculator':
        return GraduationCap;
      default:
        return Code2;
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            03. Practical Implementation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Beginner Python Projects
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Practical Python programs built to reinforce algorithmic logic, conditional control flow, user input parsing, and modular state management. Click "View Project" to launch the interactive in-browser simulator and inspect the Python source code.
          </p>
        </div>

        {/* Projects 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-xl shadow-black/20"
              >
                <div>
                  {/* Top metadata & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/50 border border-blue-900/40 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Unboxed category tag (zero-pill rule) */}
                    <span className="text-xs font-mono text-slate-400">
                      Python 3
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies Used (Unboxed Text with Separator) */}
                  <div className="pt-4 border-t border-slate-800/80 mb-6">
                    <div className="text-[11px] font-mono uppercase text-slate-500 mb-1.5">
                      Technology:
                    </div>
                    <div className="text-xs font-mono text-slate-300 flex items-center gap-2">
                      <span>Python</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400">CLI & Logic Simulation</span>
                    </div>
                  </div>
                </div>

                {/* View Project Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>View Project & Code</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Honest note regarding repositories */}
        <div className="mt-10 p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl text-center text-xs text-slate-400">
          <p>
            All projects are authentic student works coded in Python. You can inspect the source code and run live simulated test cases directly inside each project card modal.
          </p>
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
