import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy, ArrowRight, Bot, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BROKER10_REGISTER_URL, INDICATOR_NAME, YOUTUBE_TUTORIAL_URL, INDICATOR_CODE, YOUTUBE_CHANNEL_URL } from '../indicatorData';
import { Link } from 'react-router-dom';

export function FunnelPage() {
  const [step, setStep] = useState<number>(1);
  const [copied, setCopied] = useState(false);
  const [isResuming, setIsResuming] = useState(false);

  useEffect(() => {
    const savedStep = localStorage.getItem('indicator_funnel_step');
    if (savedStep) {
      const parsed = parseInt(savedStep, 10);
      if (parsed > 1 && parsed <= 4) {
        setStep(parsed);
        setIsResuming(true);
      }
    }
  }, []);

  const advanceStep = (nextStep: number) => {
    setStep(nextStep);
    setIsResuming(false);
    localStorage.setItem('indicator_funnel_step', nextStep.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(INDICATOR_CODE);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const renderProgress = () => {
    return (
      <div className="w-full mb-10 max-w-2xl mx-auto">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 z-0"></div>
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-[#00FF66] -translate-y-1/2 z-0 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(0,255,102,0.6)]" 
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="relative z-10 flex flex-col items-center gap-2">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-500 ${
                  step > s 
                    ? 'bg-[#00FF66] text-black shadow-[0_0_15px_rgba(0,255,102,0.4)]' 
                    : step === s 
                      ? 'bg-black border-2 border-[#00FF66] text-[#00FF66] shadow-[0_0_20px_rgba(0,255,102,0.2)]'
                      : 'bg-[#0a0a0a] border-2 border-white/10 text-white/30'
                }`}
              >
                {step > s ? <Check className="w-4 h-4" strokeWidth={3} /> : s}
              </div>
              <span className={`text-[9px] sm:text-[10px] font-semibold tracking-widest hidden sm:block ${
                step >= s ? 'text-[#00FF66]' : 'text-white/30'
              }`}>
                {s === 1 && 'CONTA'}
                {s === 2 && 'CÓDIGO'}
                {s === 3 && 'INSTALAÇÃO'}
                {s === 4 && 'CONCLUÍDO'}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#00FF66]/30 selection:text-white">
      
      {/* Premium Header */}
      <header className="w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-white hover:text-[#00FF66] transition-colors text-sm font-semibold flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <span className="tracking-widest">HEXOR GPT</span>
          </Link>
          <span className="text-[10px] text-white/40 tracking-widest uppercase hidden sm:block">
            Processo de Liberação
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start pt-12 pb-24 px-5">
        <div className="w-full max-w-2xl text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {step < 4 ? "Seu indicador está a poucos passos de ser instalado." : "Tudo pronto!"}
          </h1>
          {isResuming && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 text-[#00FF66] text-xs font-semibold tracking-wide">
              👋 Bem-vindo de volta! Você está no passo {step} de 4.
            </div>
          )}
        </div>

        {renderProgress()}

        <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect behind content */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[#00FF66]/10 blur-[120px] pointer-events-none"></div>

          <AnimatePresence mode="wait">
            
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="relative z-10 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[#00FF66] font-bold tracking-[0.15em] text-[10px]">01</span>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-wide">Crie sua conta na Broker10</h2>
                </div>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  Para liberar o indicador, primeiro você precisa ter uma conta na Broker10.
                </p>

                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-8">
                  <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                    POR QUE PRECISO DA CONTA?
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    O indicador será utilizado diretamente na plataforma de trading. Por isso, você precisa ter uma conta ativa para conseguir acessar a plataforma e instalar o indicador.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-sm font-medium text-gray-300 mb-4">Pronto para começar?</p>
                  <a
                    href={BROKER10_REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center p-4 w-full sm:w-2/3 bg-white hover:bg-gray-100 text-black rounded-xl transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.2)] active:scale-[0.98] font-bold text-sm tracking-wide mb-8"
                  >
                    CRIAR CONTA NA BROKER10 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="w-full h-px bg-white/10 mb-8 relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                      Você já criou sua conta?
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-2/3">
                    <button
                      onClick={() => advanceStep(2)}
                      className="flex-1 py-4 bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] rounded-xl text-xs font-bold tracking-wide hover:bg-[#00FF66]/20 transition-all shadow-[0_0_20px_-5px_rgba(0,255,102,0.15)] active:scale-[0.98]"
                    >
                      SIM, JÁ CRIEI ✓
                    </button>
                    <a
                      href={BROKER10_REGISTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 bg-transparent border border-white/10 text-gray-400 rounded-xl text-xs font-bold tracking-wide hover:bg-white/5 hover:text-white transition-colors flex items-center justify-center"
                    >
                      AINDA NÃO
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="relative z-10 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[#00FF66] font-bold tracking-[0.15em] text-[10px]">02</span>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-wide">Pegue seu indicador</h2>
                </div>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  Sua conta está criada. Agora copie o código do Hexor GPT abaixo.
                </p>

                <div 
                  onClick={handleCopy}
                  className="group relative w-full bg-[#000] border border-white/10 hover:border-[#00FF66]/40 rounded-2xl mb-8 overflow-hidden cursor-pointer transition-colors shadow-inner"
                >
                  <div className="flex justify-between items-center px-4 py-3 bg-[#111] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      <span className="ml-2 text-[10px] text-gray-500 font-mono tracking-widest">{INDICATOR_NAME}.lua</span>
                    </div>
                    <button className="flex items-center gap-1 text-[10px] font-bold tracking-widest text-[#00FF66] opacity-80 group-hover:opacity-100 transition-opacity">
                      {copied ? (
                        <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5"/> COPIADO</span>
                      ) : (
                        <span className="flex items-center gap-1"><Copy className="w-3.5 h-3.5"/> COPIAR CÓDIGO</span>
                      )}
                    </button>
                  </div>
                  <div className="p-5 overflow-auto max-h-[300px] text-[12px] sm:text-[13px] font-mono text-gray-300 custom-scrollbar leading-relaxed">
                    <pre className="m-0 whitespace-pre-wrap break-all pointer-events-none">{INDICATOR_CODE}</pre>
                  </div>
                  
                  {/* Click overlay */}
                  <div className="absolute inset-0 bg-[#00FF66]/0 group-hover:bg-[#00FF66]/[0.02] transition-colors"></div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-6 mb-4">
                    <AnimatePresence>
                      {copied && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 text-[#00FF66] text-sm font-semibold tracking-wide"
                        >
                          <CheckCircle2 className="w-4 h-4" /> CÓDIGO COPIADO
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <p className="text-sm font-medium text-gray-300 mb-4">Já copiou o código?</p>
                  <button
                    onClick={() => {
                      if(!copied) handleCopy(); // Just in case they click without copying
                      advanceStep(3);
                    }}
                    className="group relative flex items-center justify-center p-4 w-full sm:w-2/3 bg-white hover:bg-gray-100 text-black rounded-xl transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.2)] active:scale-[0.98] font-bold text-sm tracking-wide"
                  >
                    SIM, JÁ COPIEI <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="relative z-10 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[#00FF66] font-bold tracking-[0.15em] text-[10px]">03</span>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-wide">Instale o Indicador</h2>
                </div>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  Agora é só seguir o tutorial abaixo. Abra a Broker10 em outra aba e acompanhe o passo a passo.
                </p>

                <div className="bg-[#111] p-2 rounded-3xl border border-white/5 mb-8 shadow-2xl">
                  <div className="w-full bg-[#050505] rounded-2xl overflow-hidden aspect-[9/16] sm:aspect-video relative max-h-[500px] mx-auto flex justify-center border border-white/10">
                    <iframe
                      src={YOUTUBE_TUTORIAL_URL}
                      title="Tutorial"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full object-cover sm:object-contain bg-black"
                    ></iframe>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-sm font-medium text-gray-300 mb-4">Já instalou o indicador?</p>
                  <button
                    onClick={() => advanceStep(4)}
                    className="flex items-center justify-center py-4 w-full sm:w-2/3 bg-gradient-to-r from-[#00FF66]/20 to-[#00FF66]/10 border border-[#00FF66]/40 text-[#00FF66] rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_-5px_rgba(0,255,102,0.25)] hover:from-[#00FF66]/30 hover:to-[#00FF66]/20 active:scale-[0.98]"
                  >
                    SIM, JÁ INSTALEI ✓
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center text-center py-10"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#00FF66] blur-[40px] opacity-20 rounded-full"></div>
                  <div className="relative w-20 h-20 rounded-full bg-[#0a0a0a] border border-[#00FF66]/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,102,0.15)]">
                    <Check className="w-10 h-10 text-[#00FF66]" strokeWidth={2.5} />
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
                  INDICADOR LIBERADO
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 max-w-sm mx-auto">
                  Pronto! O Hexor GPT está pronto para você utilizar.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
                  Faça bom proveito do indicador e acompanhe as aulas para aprender cada vez mais sobre como utilizá-lo.
                  <br/><br/>
                  <span className="text-[#00FF66] font-semibold">Bons trades e bons estudos. 🚀</span>
                </p>

                <div className="w-full h-px bg-white/5 mb-10"></div>

                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Quer aprender mais?</p>
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center p-4 w-full sm:w-2/3 bg-white hover:bg-gray-100 text-black rounded-xl transition-all duration-300 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.2)] active:scale-[0.98] font-bold text-sm tracking-wide"
                >
                  IR PARA O CANAL DO YOUTUBE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
