import React from "react";
import { benefitsData } from "../data";
import { Apple, CalendarDays, Zap, Moon, Smile, DollarSign, HeartHandshake, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const Benefits: React.FC = () => {
  // Helper to map string dynamic names to components safely
  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-brand-primary";
    switch (iconName) {
      case "Apple":
        return <Apple className={iconClass} />;
      case "CalendarDays":
        return <CalendarDays className={iconClass} />;
      case "Zap":
        return <Zap className="w-6 h-6 text-brand-accent fill-brand-accent/20" />;
      case "Moon":
        return <Moon className="w-6 h-6 text-slate-600 fill-slate-100" />;
      case "Smile":
        return <Smile className={iconClass} />;
      case "DollarSign":
        return <DollarSign className="w-6 h-6 text-emerald-600" />;
      default:
        return <HeartHandshake className={iconClass} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary bg-brand-tint px-3 py-1.5 rounded-full select-none">
            Transformação Garantida
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            Benefícios que você vai ter
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3 font-sans max-w-xl mx-auto">
            Mais do que dicas soltas na internet, este e-book estrutura hábitos fundamentais 
            que cabem na sua rotina e, principalmente, no seu bolso.
          </p>
        </div>

        {/* Bento Grid layout with stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-[#f9fdfa] border border-brand-primary/8 hover:border-brand-primary/20 rounded-[2rem] p-6 md:p-8 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(16,126,84,0.12)] hover:-translate-y-1.5 flex flex-col justify-between"
              id={`benefit-${benefit.id}`}
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-14 h-14 bg-white rounded-2xl shadow-xs border border-gray-150 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {renderIcon(benefit.iconName)}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-brand-dark leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-3 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Dynamic checkmark bullet indicator on hover */}
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand-primary opacity-65 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4 text-brand-primary stroke-2" />
                <span>Pronto para praticar</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic bottom message */}
        <div className="mt-12 bg-gradient-to-r from-brand-dark via-brand-medium to-brand-dark text-white rounded-[2rem] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-accent opacity-15 rounded-full blur-2xl"></div>
          
          <div className="space-y-2 relative z-10 text-center lg:text-left max-w-2xl">
            <h4 className="font-display font-black text-lg sm:text-xl tracking-tight text-white flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              Pronto para economizar enquanto ganha saúde?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-150/90 leading-relaxed font-sans">
              O investimento promocional de apenas <strong className="text-white bg-white/10 px-2 py-0.5 rounded-md">R$ 22,89</strong> (de <span className="line-through opacity-80">R$ 47,99</span>) se paga logo no primeiro carrinho de feira inteligente!
            </p>
          </div>

          <a
            href="#conteudo"
            className="w-full lg:w-auto bg-brand-accent hover:bg-yellow-400 text-brand-dark text-xs sm:text-sm font-black px-7 py-4 rounded-xl transition-all shadow-md hover:shadow-brand-accent/20 hover:scale-103 flex items-center justify-center gap-1.5 flex-shrink-0 relative z-10 cursor-pointer uppercase tracking-wider"
            id="benefits-peek-inside"
          >
            <span>Ver o que vem no guia</span>
            <span className="font-bold">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
};
