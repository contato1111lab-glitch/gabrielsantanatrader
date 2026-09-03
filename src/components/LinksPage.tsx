import React from 'react';
import { PageConfig } from '../types';
import { motion } from 'motion/react';
import { Rocket, BarChart2, Music, Bot, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LinksPageProps {
  config: PageConfig;
}

const IconMap = {
  rocket: Rocket,
  chart: BarChart2,
  music: Music,
  bot: Bot,
};

export function LinksPage({ config }: LinksPageProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#00FF66]/30 selection:text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00FF66]/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00FF66]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <main className="flex-1 w-full max-w-2xl mx-auto flex flex-col items-center pt-8 pb-20 px-5 relative z-10">
        
        {/* Profile/Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[320px] sm:h-[400px] flex justify-center mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
          <img
            src="https://i.ibb.co/RpWdGkYm/gabriel.png"
            alt="Profile"
            className="w-full max-w-[380px] h-full object-cover object-top opacity-90 drop-shadow-2xl grayscale-[20%]"
            style={{ 
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)' 
            }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center w-full mb-10 -mt-16 sm:-mt-20 relative z-20"
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            SEU NOVO INDICADOR DE TRADING
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Tenha acesso ao Hexor GPT e aprenda como instalar e utilizar o indicador na sua plataforma.
          </p>
        </motion.div>

        {/* CTAs */}
        <div className="w-full flex flex-col gap-5 relative z-20">
          
          {/* Primary CTA: Funnel */}
          {config.hasFunnel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link 
                to="/indicador"
                className="group relative flex flex-col items-center justify-center p-5 w-full bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-[#00FF66]/30 rounded-3xl transition-all duration-300 shadow-[0_8px_32px_-12px_rgba(0,255,102,0.25)] hover:border-[#00FF66]/60 hover:shadow-[0_8px_40px_-8px_rgba(0,255,102,0.4)] hover:-translate-y-1 active:scale-[0.98] overflow-hidden"
              >
                {/* Glow effect inside button */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF66]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center gap-3">
                  <Bot className="w-6 h-6 text-[#00FF66]" />
                  <span className="font-extrabold text-white text-[15px] sm:text-base tracking-widest uppercase">
                    LIBERAR MEU INDICADOR
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#00FF66] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          )}

          {/* Secondary Links from Config */}
          {config.links.map((link, index) => {
            const Icon = IconMap[link.icon as keyof typeof IconMap] || Rocket;
            const isBroker = link.id === 'broker';

            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                className={
                  isBroker 
                    ? "group flex items-center p-4 w-full bg-white hover:bg-gray-100 border border-transparent rounded-2xl transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.2)] active:scale-[0.98] hover:-translate-y-0.5 text-black"
                    : "group flex items-center p-4 w-full bg-[#0a0a0a] hover:bg-[#111] border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 text-white"
                }
              >
                <div className={
                  isBroker
                    ? "flex items-center justify-center w-12 h-12 rounded-xl bg-black/5 border border-black/10 shrink-0 mr-4 shadow-sm"
                    : "flex items-center justify-center w-12 h-12 rounded-xl bg-[#151515] border border-white/5 shrink-0 mr-4"
                }>
                  <Icon className={
                    isBroker
                      ? "w-5 h-5 text-black" 
                      : "w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                  } />
                </div>
                
                <div className="flex-1 text-left">
                  <span className={
                    isBroker
                      ? "font-bold text-[13px] sm:text-sm tracking-wide"
                      : "font-semibold text-[13px] sm:text-sm tracking-wide text-gray-300 group-hover:text-white transition-colors"
                  }>
                    {link.title}
                  </span>
                  {link.description && (
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed opacity-90">
                      {link.description}
                    </p>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
