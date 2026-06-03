import React from "react";
import { benefitsData } from "../data";
import { Apple, CalendarDays, Zap, Moon, Smile, DollarSign, HeartHandshake, CheckCircle2 } from "lucide-react";

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

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={benefit.id}
              className="group relative bg-brand-cream/30 hover:bg-brand-tint/40 border border-emerald-900/5 hover:border-brand-primary/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/5 flex flex-col justify-between"
              id={`benefit-${benefit.id}`}
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-white rounded-xl shadow-xs border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {renderIcon(benefit.iconName)}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg text-brand-dark leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-3 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Dynamic checkmark bullet indicator on hover */}
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-brand-primary opacity-60 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4 text-brand-primary stroke-2" />
                <span>Pronto para praticar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic bottom message */}
        <div className="mt-12 bg-brand-dark text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary opacity-25 rounded-full blur-2xl"></div>
          
          <div className="space-y-1 relative z-10 text-center md:text-left">
            <h4 className="font-display font-extrabold text-base sm:text-lg tracking-tight">
              Pronto para economizar enquanto ganha saúde?
            </h4>
            <p className="text-xs text-emerald-100/80">
              O investimento promocional de apenas <strong className="text-white">R$ 22,89</strong> (de <span className="line-through">R$ 47,99</span>) se paga logo no primeiro carrinho de feira inteligente!
            </p>
          </div>

          <a
            href="#conteudo"
            className="w-full md:w-auto bg-brand-accent hover:bg-brand-accent/90 text-brand-dark text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md hover:scale-102 flex items-center justify-center gap-1 flex-shrink-0"
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
