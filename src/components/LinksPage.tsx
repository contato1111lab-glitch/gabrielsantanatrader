import React from 'react';
import { PageConfig } from '../types';
import { motion } from 'motion/react';
import { Rocket, BarChart2, Bot, Music } from 'lucide-react';

interface LinksPageProps {
  config: PageConfig;
}

const IconMap = {
  rocket: Rocket,
  chart: BarChart2,
  bot: Bot,
  music: Music,
};

export function LinksPage({ config }: LinksPageProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center relative overflow-x-hidden selection:bg-blue-500/30">
      {/* Very subtle background glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/5 via-[#050505] to-[#050505] pointer-events-none" />

      <main className="w-full max-w-[414px] mx-auto flex flex-col items-center pb-16 relative z-10 px-5">
        {/* Header Image with smooth fade */}
        <div className="relative w-full h-[280px] sm:h-[320px] flex justify-center mt-6 mb-10">
          <img
            src="https://i.ibb.co/RpWdGkYm/gabriel.png"
            alt="Profile"
            className="w-full max-w-[320px] h-full object-cover object-top opacity-95 drop-shadow-2xl"
            style={{ 
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' 
            }}
          />
        </div>

        {/* Links List */}
        <div className="w-full flex flex-col gap-4">
          {config.links.map((link, index) => {
            const Icon = IconMap[link.icon as keyof typeof IconMap] || Rocket;
            const isPrimary = index === 0;

            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={
                  isPrimary 
                    ? "group flex items-center p-4 w-full bg-gradient-to-br from-[#1d4ed8] to-[#1e3a8a] border border-blue-400/20 rounded-2xl transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(29,78,216,0.35)] active:scale-[0.98] hover:brightness-110 hover:-translate-y-0.5"
                    : "group flex items-center p-4 w-full bg-[#121212] border border-white/5 rounded-2xl transition-all duration-300 shadow-sm active:scale-[0.98] hover:bg-[#181818] hover:border-white/10 hover:-translate-y-0.5"
                }
              >
                <div className={
                  isPrimary
                    ? "flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-white/15 shrink-0 mr-4 shadow-inner"
                    : "flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-[#1a1a1a] border border-white/5 shrink-0 mr-4"
                }>
                  <Icon className={
                    isPrimary 
                      ? "w-6 h-6 text-white" 
                      : "w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                  } />
                </div>
                
                <div className="flex-1 text-left">
                  <span className={
                    isPrimary
                      ? "font-semibold text-white text-[15px] tracking-wide"
                      : "font-medium text-gray-200 group-hover:text-white text-[15px] tracking-wide transition-colors duration-300"
                  }>
                    {link.title}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </main>

      {/* Footer Minimalist */}
      <footer className="w-full py-8 mt-auto flex flex-col items-center justify-center relative z-10">
        <a 
          href="https://compounds.digital/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[9px] tracking-[0.3em] font-bold text-[#333333] hover:text-gray-500 transition-colors"
        >
          COMPOUNDS
        </a>
      </footer>
    </div>
  );
}
