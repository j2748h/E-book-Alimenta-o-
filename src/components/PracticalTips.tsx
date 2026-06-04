import React from "react";
import { practicalTipsData } from "../data";
import { 
  CheckCircle, 
  Droplet, 
  Utensils, 
  Footprints, 
  Moon, 
  ClipboardList 
} from "lucide-react";
import { motion } from "motion/react";

const getTipIcon = (id: string) => {
  switch (id) {
    case "water":
      return <Droplet className="w-6 h-6 sm:w-7 sm:h-7 text-sky-600" id="tip-icon-water" />;
    case "chew":
      return <Utensils className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" id="tip-icon-chew" />;
    case "movement":
      return <Footprints className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" id="tip-icon-movement" />;
    case "sleep":
      return <Moon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" id="tip-icon-sleep" />;
    case "planning":
      return <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" id="tip-icon-planning" />;
    default:
      return <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary" id="tip-icon-default" />;
  }
};

const getTipBgClass = (id: string) => {
  switch (id) {
    case "water":
      return "bg-sky-50 border-sky-100 text-sky-600";
    case "chew":
      return "bg-amber-50 border-amber-100 text-amber-600";
    case "movement":
      return "bg-emerald-50 border-emerald-100 text-emerald-600";
    case "sleep":
      return "bg-indigo-50 border-indigo-100 text-indigo-600";
    case "planning":
      return "bg-teal-50 border-teal-100 text-teal-600";
    default:
      return "bg-brand-tint border-brand-primary/10 text-brand-primary";
  }
};

export const PracticalTips: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#f2faf5] via-white to-white" id="habitos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary bg-brand-tint px-4 py-1.5 rounded-full select-none border border-brand-primary/10 inline-block shadow-2xs">
            Estilo de Vida Acessível
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            Pequenos hábitos, grandes resultados
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-sans max-w-xl mx-auto leading-relaxed">
            O emagrecimento definitivo não acontece em dietas restritivas de 7 dias, mas sim 
            na soma lógica de micro-hábitos que você consegue manter com facilidade.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practicalTipsData.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-[2rem] p-6 md:p-8 border border-gray-150/80 shadow-xs hover:shadow-[0_24px_50px_-16px_rgba(16,126,84,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              id={`tip-card-${tip.id}`}
            >
              {/* Miniature & Badge Section */}
              <div className="flex gap-4 items-start mb-6">
                <div 
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110 shadow-2xs ${getTipBgClass(tip.id)}`}
                  id={`tip-miniature-container-${tip.id}`}
                >
                  {getTipIcon(tip.id)}
                </div>
                <div className="flex flex-col gap-1.5 justify-center py-1">
                  <span className="inline-flex items-center gap-1 self-start px-2.5 py-1 bg-brand-tint rounded-full text-brand-primary font-display font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider">
                    <span className="mr-0.5">{tip.emoji}</span>
                    <span>{tip.badge}</span>
                  </span>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-gray-400 font-bold">
                    Método Prático
                  </div>
                </div>
              </div>

              {/* Card body content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-xl text-brand-dark tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-3 leading-relaxed">
                    {tip.description}
                  </p>
                </div>

                {/* Bottom trust indicator */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Capítulo {tip.id === "water" || tip.id === "chew" ? "1" : tip.id === "movement" ? "2" : tip.id === "sleep" ? "3" : "5"}</span>
                  </span>
                  <span className="text-brand-primary font-bold">Conselho prático</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Motivational alert strip with clean premium styling */}
        <div className="mt-16 bg-amber-500/[0.08] hover:bg-amber-500/[0.12] border border-amber-500/20 rounded-[2rem] p-6 md:p-8 flex items-start gap-4 text-brand-dark text-xs sm:text-sm max-w-3xl mx-auto transition-all duration-300">
          <span className="text-2xl flex-shrink-0 animate-bounce">⚠️</span>
          <div>
            <p className="font-black text-lg text-amber-800 font-display tracking-tight leading-none">Você sabia?</p>
            <p className="text-amber-900 leading-relaxed mt-2 text-xs sm:text-[13px] font-medium opacity-90">
              Cerca de 70% dos fracassos em rotinas de hábitos ocorrem devido à fadiga por complicação — ou seja, tentar mudar tudo de uma vez com soluções caras. Nosso e-book foca em simplificar ao extremo para garantir constância desde o primeiro dia.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
