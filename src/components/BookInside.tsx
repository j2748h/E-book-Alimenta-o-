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
    <section className="py-16 md:py-24 bg-brand-cream/30 border-y border-gray-100" id="conteudo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary bg-brand-tint px-3 py-1.5 rounded-full select-none">
            Conteúdo Detalhado
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            O que você vai encontrar dentro do guia
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3 font-sans max-w-xl mx-auto">
            Abordamos a saúde de forma integrada. Da feira ao sono, com métodos passo a passo prontos para usar.
          </p>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive list of Chapter triggers */}
          <div className="lg:col-span-7 space-y-3">
            {chaptersData.map((chapter) => {
              const isOpen = activeChapter === chapter.id;
              return (
                <div
                  key={chapter.id}
                  className={`border rounded-2xl transition-all ${
                    isOpen
                      ? "bg-white border-brand-primary/30 shadow-md shadow-brand-primary/3"
                      : "bg-white/60 border-gray-100 hover:bg-white hover:border-gray-200"
                  }`}
                  id={`chapter-card-${chapter.id}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      {/* Chapter number bubble */}
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-display ${
                        isOpen 
                          ? "bg-brand-primary text-white" 
                          : "bg-brand-tint text-brand-primary"
                      }`}>
                        {chapter.id}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-sm md:text-base text-brand-dark leading-tight">
                          {chapter.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1 md:line-clamp-none">
                          {chapter.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Expand Chevron Icon */}
                    <div className={`p-1.5 rounded-lg bg-gray-50 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pt-1 md:px-6 md:pb-8 border-t border-gray-50">
                          {/* List of subtopics in each section */}
                          <ul className="space-y-3 pl-3">
                            {chapter.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-600">
                                <span className="p-0.5 rounded-full bg-brand-tint text-brand-primary mt-1 flex-shrink-0">
                                  <Check className="w-3 h-3 text-brand-primary stroke-3" />
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
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-brand-dark text-white p-6 md:p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-30 rounded-full blur-xl pointer-events-none"></div>

            <div className="flex items-center gap-2 text-xs font-bold text-brand-accent mb-4 select-none">
              <span className="p-1 rounded-md bg-brand-primary/40"><BookOpen className="w-4 h-4 text-brand-accent fill-brand-accent/10" /></span>
              <span>Destaque Editorial</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-black text-xl md:text-2xl tracking-tight leading-tight">
                Como esse material foi construído?
              </h3>
              
              <div className="text-xs text-emerald-100/80 leading-relaxed space-y-3 font-normal">
                <p>
                  Não acreditamos em fórmulas prontas ou receitas com ingredientes importados de nomes difíceis. 
                  Pesquisamos intensamente a realidade econômica das famílias brasileiras para projetar uma 
                  <strong> reeducação prática</strong> baseada em alimentos populares de alto teor nutritivo.
                </p>
                <p>
                  Unindo reeducação alimentar, rotinas físicas de 15 minutos sem equipamentos e higiene psicológica (sono e ansiedade), você se liberta do cansaço crônico e economiza mensalmente.
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
