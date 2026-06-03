import React from "react";
import { Heart, HeartHandshake, Shield, Sparkles } from "lucide-react";

export const Story: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="proposito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image overlapping and gold border frames */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-[340px] md:max-w-[400px]">
              
              {/* Gold luxury border behind content */}
              <div className="absolute inset-x-8 -inset-y-4 rounded-3xl border-2 border-dashed border-brand-accent transform -rotate-3 pointer-events-none"></div>

              {/* Happy cooking family photo */}
              <div className="relative bg-white p-3 rounded-[2rem] shadow-xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600"
                  alt="Família feliz reunida cozinhando comida saudável"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover rounded-[1.5rem]"
                  id="story-family-image"
                />
                
                {/* Micro-badge overlay on photo */}
                <div className="absolute bottom-6 right-6 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md opacity-90 select-none">
                  Propósito Familiar
                </div>
              </div>

              {/* Tiny floating overlap statistics */}
              <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white rounded-2xl p-4 shadow-xl border border-brand-primary/30 max-w-[200px] text-left select-none">
                <div className="flex items-center gap-1.5 text-brand-accent mb-1.5">
                  <Heart className="w-4 h-4 fill-brand-accent text-brand-accent stroke-0" />
                  <span className="text-xs font-bold font-display">Sem fins corporativos</span>
                </div>
                <p className="text-[10px] text-emerald-100/70 leading-normal font-sans">
                  Todo o valor líquido arrecadado sustenta a produção de materiais didáticos independentes.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Heartfelt story text */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary bg-brand-tint px-3 py-1.5 rounded-full select-none">
              História de Família
            </span>

            <div className="space-y-4">
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-none">
                Cada compra apoia uma história
              </h2>
              
              <h3 className="font-display font-bold text-base md:text-lg text-brand-primary">
                A história do “Alimentação Inteligente”
              </h3>
            </div>

            <div className="text-sm md:text-base text-gray-650 space-y-4 leading-relaxed font-sans text-left">
              <p>
                Ao adquirir este e-book, você não está apenas investindo na sua saúde. 
                Você também apoia o sonho de uma família que acredita que conhecimento pode transformar vidas.
              </p>
              <p>
                Esse guia foi originado pela necessidade real de um filho em ajudar seus próprios pais a terem uma 
                rotina mais saudável, sem que tivessem de sofrer com orçamentos apertados. O que começou em uma 
                cozinha simples expandiu-se e hoje já orienta dezenas de lares.
              </p>
            </div>

            {/* List of values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-t border-gray-150 pt-6">
              <div className="flex items-start gap-2">
                <div className="p-1 rounded-lg bg-pink-50 text-pink-600 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark leading-none">Comunidade Viva</h4>
                  <p className="text-[10px] text-gray-400 mt-1">Conectamos pessoas com o mesmo objetivo de saúde.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark leading-none">Independência Editorial</h4>
                  <p className="text-[10px] text-gray-400 mt-1">Escrito por pessoas reais, sem agendas comerciais.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
