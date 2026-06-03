import React from "react";
import { practicalTipsData } from "../data";
import { CheckCircle, Eye, HelpCircle, LucideIcon } from "lucide-react";

export const PracticalTips: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="habitos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary bg-brand-tint px-3 py-1.5 rounded-full select-none">
            Estilo de Vida Acessível
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            Pequenos hábitos, grandes resultados
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3 font-sans max-w-xl mx-auto">
            O emagrecimento definitivo não acontece em dietas restritivas de 7 dias, mas sim 
            na soma lógica de micro-hábitos que você consegue manter com facilidade.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practicalTipsData.map((tip) => (
            <div
              key={tip.id}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`tip-card-${tip.id}`}
            >
              {/* Photo top placeholder container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  id={`tip-image-${tip.id}`}
                />
                
                {/* Floating Badge (Glassmorphism effect) */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-brand-dark font-display font-extrabold text-[11px] shadow-sm uppercase tracking-wider">
                  <span className="mr-0.5">{tip.emoji}</span>
                  <span>{tip.badge}</span>
                </span>
                
                {/* Visual shade gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-4 text-white text-[10px] uppercase font-mono tracking-widest font-bold">
                  Método Prático
                </div>
              </div>

              {/* Card body content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-lg text-brand-dark tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-3 leading-relaxed">
                    {tip.description}
                  </p>
                </div>

                {/* Bottom trust indicator */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>Capítulo {tip.id === "water" || tip.id === "chew" ? "1" : tip.id === "movement" ? "2" : tip.id === "sleep" ? "3" : "5"}</span>
                  </span>
                  <span className="text-brand-primary font-bold">Conselho prático</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Motivational alert strip */}
        <div className="mt-12 bg-amber-50 border border-amber-200/50 rounded-2xl p-4 flex items-start gap-3 text-brand-dark text-xs max-w-3xl mx-auto">
          <span className="text-lg flex-shrink-0">⚠️</span>
          <div>
            <p className="font-bold text-[#854d0e]">Você sabia?</p>
            <p className="text-amber-800 leading-normal mt-0.5">
              Cerca de 70% dos fracassos em rotinas de hábitos ocorrem devido à fadiga por complicação — ou seja, tentar mudar tudo de uma vez com soluções caras. Nosso e-book foca em simplificar ao extremo para garantir constância desde o primeiro dia.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
