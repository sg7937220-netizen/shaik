import React from 'react';
import { ArrowDown, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import heroVisualImg from '../assets/images/hero_network_visual_1790681295658.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle ambient grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status note with zero-pill discipline */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>B.Tech 1st Semester</span>
              <span aria-hidden="true">·</span>
              <span>Aspiring AI Engineer</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
              Hi, I'm <span className="text-blue-400">Shaik Ghousepeer</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
              B.Tech Student <span className="text-slate-500">|</span> Aspiring AI Engineer <span className="text-slate-500">|</span> Python & Gen AI Enthusiast
            </p>

            {/* Supporting text */}
            <p className="text-base text-slate-400 max-w-xl leading-relaxed">
              Building my foundation in AI, Python, web development, and Generative AI through projects, hackathons, and continuous learning.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-blue-900/30 flex items-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-200 font-semibold text-sm rounded-xl border border-slate-700/80 transition-all flex items-center gap-2"
              >
                <span>Connect With Me</span>
              </a>
            </div>

            {/* Current Learning Footnote */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block">Core Language</span>
                <span className="font-semibold text-slate-200">Python 3</span>
              </div>
              <div>
                <span className="text-slate-500 block">Current Focus</span>
                <span className="font-semibold text-slate-200">Gen AI & Web</span>
              </div>
              <div>
                <span className="text-slate-500 block">Activities</span>
                <span className="font-semibold text-slate-200">Hackathons</span>
              </div>
              <div>
                <span className="text-slate-500 block">Stage</span>
                <span className="font-semibold text-slate-200">1st Semester</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Abstract Visual Asset */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative subtle border frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/60 shadow-2xl p-2">
                {/* Visual Image with Fallback */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src={heroVisualImg}
                    alt="Abstract neural node network graphic representing AI and computational learning"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                    onError={(e) => {
                      // Fallback in case of image load issue
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle code overlay card */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-300 space-y-1 shadow-lg">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800">
                      <span className="flex items-center gap-1.5 text-blue-400">
                        <Terminal className="w-3.5 h-3.5" />
                        student_profile.py
                      </span>
                      <span className="text-emerald-400 font-sans">Active Learner</span>
                    </div>
                    <div className="text-slate-400 pt-1">
                      <span className="text-blue-400">status</span> = <span className="text-amber-300">"B.Tech 1st Sem"</span>
                    </div>
                    <div className="text-slate-400">
                      <span className="text-blue-400">focus</span> = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"AI"</span>, <span className="text-emerald-300">"Web"</span>]
                    </div>
                  </div>
                </div>

                {/* Subtitle tag beneath visual */}
                <div className="py-2.5 px-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    Engineering Fundamentals
                  </span>
                  <span>Curiosity & Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
