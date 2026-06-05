import React, { useState } from "react";
import { chaptersData } from "../data";
import { ChevronDown, ChevronUp, BookOpen, Check, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const BookInside: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<number>(1);

  const toggleChapter = (id: number) => {
    setActiveChapter(activeChapter === id ? 1 : id); // Lock first or toggle
  };

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-brand-cream/30 to-[#e9f5ee] overflow-hidden" id="conteudo">
      {/* Editorial aesthetic lines representing a notebook outline */}
      <div className="absolute inset-y-0 left-10 md:left-24 w-px border-l border-dashed border-emerald-500/10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0c6946] bg-brand-tint px-4 py-1.5 rounded-full select-none border border-brand-primary/10 inline-flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping"></span>
            Conteúdo Detalhado
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            O que você vai encontrar dentro do guia
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-sans max-w-xl mx-auto leading-relaxed">
            Abordamos a saúde de forma integrada. Da feira ao sono, com métodos passo a passo prontos para usar.
          </p>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Interactive list of Chapter triggers */}
          <div className="lg:col-span-7 space-y-4">
            {chaptersData.map((chapter) => {
              const isOpen = activeChapter === chapter.id;
              return (
                <div
                  key={chapter.id}
                  className={`border-[1.5px] rounded-[2rem] transition-all duration-305 overflow-hidden ${
                    isOpen
                      ? "bg-white border-brand-primary/45 shadow-[0_20px_45px_rgba(16,126,84,0.06)] scale-[1.01]"
                      : "bg-white/60 border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-xs"
                  }`}
                  id={`chapter-card-${chapter.id}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Chapter number bubble with brand-accent border on open */}
                      <span className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black font-display transition-all duration-300 ${
                        isOpen 
                          ? "bg-brand-primary text-white scale-110 shadow-sm" 
                          : "bg-brand-tint text-brand-primary group-hover:scale-105"
                      }`}>
                        {chapter.id}
                      </span>
                      <div>
                        <h3 className="font-display font-black text-base md:text-lg text-brand-dark leading-tight transition-colors duration-301 group-hover:text-brand-primary">
                          {chapter.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1.5 line-clamp-1 md:line-clamp-none font-medium">
                          {chapter.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expand Chevron Icon */}
                    <div className={`p-2 rounded-xl bg-gray-50 text-gray-500 transition-all duration-300 ${isOpen ? "rotate-180 bg-brand-tint text-brand-primary" : "group-hover:bg-gray-100"}`}>
                      <ChevronDown className="w-4 h-4 stroke-2" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 pt-1 md:px-8 md:pb-10 border-t border-gray-50 bg-[#fafdfc]/50">
                          {/* List of subtopics in each section */}
                          <ul className="space-y-3.5 pl-4 border-l-2 border-brand-primary/20">
                            {chapter.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3.5 text-xs md:text-sm text-gray-660 leading-relaxed font-medium">
                                <span className="p-0.5 rounded-full bg-brand-tint text-brand-primary mt-1 flex-shrink-0">
                                  <Check className="w-3.5 h-3.5 text-brand-primary stroke-3" />
                                </span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Rich Preview card of Chapter details and Cover miniature */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-brand-dark text-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_24px_50px_rgba(6,30,20,0.25)] relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-44 h-44 bg-brand-primary opacity-35 rounded-full blur-[70px] pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-brand-accent opacity-15 rounded-full blur-[65px] pointer-events-none"></div>

            <div className="flex items-center gap-2 text-xs font-black text-brand-accent mb-6 select-none uppercase tracking-wider">
              <span className="p-2 rounded-xl bg-brand-primary/45 border border-brand-primary/30 flex items-center justify-center"><BookOpen className="w-4 h-4 text-brand-accent fill-brand-accent/10" /></span>
              <span>Destaque Editorial</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-black text-xl md:text-2xl tracking-tight leading-tight">
                Como esse material foi construído?
              </h3>
              
              <div className="text-xs text-emerald-100/80 leading-relaxed space-y-3 font-normal">
                <p>
                  Este guia não foi escrito por acadêmicos distantes da realidade ou influenciadores ricos. Ele foi construído no fogo cruzado da necessidade real: criado por quem <strong>pesava 158 kg</strong>, que não tinha dinheiro para nutricionistas de grife ou produtos fit importados.
                </p>
                <p>
                  Cada dica, combinação de alimentos baratos de feira e estratégias de saciedade foram testadas exaustivamente na própria cozinha, trazendo resultados reais na perda de peso do autor e na melhora drástica de exames médicos de seus pais.
                </p>
              </div>

              <div className="p-4 bg-brand-medium/50 rounded-2xl border border-brand-primary/30 space-y-3">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  Garantia de Qualidade Extensiva:
                </p>
                <p className="text-[11px] text-emerald-100/70 leading-normal">
                  Garantimos que o conteúdo deste guia pode ser aplicado no primeiro dia útil após a compra. Se você não economizar nas primeiras compras com nossa lista econômica, peça seu dinheiro de volta em até 7 dias.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                <span className="text-gray-400">Páginas de leitura fáceis</span>
                <span className="font-bold text-brand-accent">Acesso vitalício</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
