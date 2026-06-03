import React from "react";
import { testimonialsData } from "../data";
import { Star, MessageCircle, Quote, ThumbsUp } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-cream/30 border-y border-gray-100" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#ca8a04] bg-amber-100 px-3 py-1.5 rounded-full select-none inline-flex items-center gap-1">
            <span>★</span>
            <span>Aprovado por quem pratica</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            Depoimentos de quem já aprovou
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3 font-sans max-w-xl mx-auto">
            Descubra histórias reais de pessoas de todo o Brasil que transformaram seu prato diário sem comprometer o orçamento.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[2rem] p-6 md:p-8 border border-emerald-950/5 relative shadow-sm hover:shadow-lg hover:border-brand-primary/10 transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-${testimonial.id}`}
            >
              {/* Quotation ornament */}
              <div className="absolute right-6 top-6 text-brand-tint pointer-events-none">
                <Quote className="w-12 h-12 fill-brand-tint opacity-50 stroke-1" />
              </div>

              {/* Main review content */}
              <div>
                {/* 5 Stars Rating indicator */}
                <div className="flex items-center gap-0.5 text-[#e2b43b] mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-brand-accent text-[#e2b43b] stroke-1" 
                    />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-gray-700 leading-relaxed italic pr-6">
                  {testimonial.text}
                </p>
              </div>

              {/* Profile card footer */}
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-3">
                <div>
                  <h4 className="font-display font-bold text-xs md:text-sm text-brand-dark leading-none">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1 text-[10px] text-gray-400">
                    <span className="font-medium text-brand-primary">{testimonial.role}</span>
                    <span>•</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Trust metrics bar */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xs">
          <div>
            <p className="text-xl md:text-2xl font-display font-black text-brand-primary">100%</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Seguro & Digital</p>
          </div>
          <div className="border-l border-gray-150">
            <p className="text-xl md:text-2xl font-display font-black text-brand-primary">1.240+</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Famílias Impactadas</p>
          </div>
          <div className="border-l border-gray-150">
            <p className="text-xl md:text-2xl font-display font-black text-brand-primary">7 dias</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Garantia Total</p>
          </div>
          <div className="border-l border-gray-150 flex flex-col justify-center items-center">
            <span className="text-[10px] text-gray-400 line-through leading-none">R$ 47,99</span>
            <p className="text-lg md:text-2.5xl font-display font-black text-brand-primary leading-tight">R$ 22,89</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Sem Taxas Ocultas</p>
          </div>
        </div>

      </div>
    </section>
  );
};
