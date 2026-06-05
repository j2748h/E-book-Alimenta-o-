import React from "react";
import { Check, X, ShieldAlert, Sparkles, Smile, Ban, Star, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f5fbf7] overflow-hidden border-t border-b border-brand-primary/5" id="para-quem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header decoration */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-700 bg-brand-tint px-4 py-1.5 rounded-full select-none border border-emerald-500/10 shadow-3xs inline-block">
            Decisão Inteligente & Transparente
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight mt-4">
            Este Guia Prático é para você?
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-sans max-w-xl mx-auto">
            Quero que sua compra seja <strong className="text-brand-primary">100% consciente</strong>. Veja com honestidade se o seu objetivo se alinha com o método real que testei na minha casa.
          </p>
        </div>

        {/* Comparison Blocks inside a responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: PARA QUEM É (Green Check Card) */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 border border-emerald-500/15 shadow-[0_20px_50px_rgba(12,105,70,0.06)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
            
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 bg-brand-tint rounded-2xl flex items-center justify-center text-brand-primary flex-shrink-0 border border-emerald-500/15 shadow-2xs">
                  <Smile className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl md:text-2xl text-brand-dark leading-none">
                    Esse guia É perfeito para...
                  </h3>
                  <p className="text-xs text-[#0c6946] font-bold mt-1.5 font-sans">
                    Pessoas que buscam saúde real e economia no prato de casa
                  </p>
                </div>
              </div>

              {/* List of Positive cases with deep-persuasion copywriting */}
              <div className="space-y-6">
                
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 bg-[#f0f9f3] text-emerald-600 rounded-lg mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      Quem quer economizar de verdade no supermercado
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Para quem percebeu que as compras estão caras e deseja aprender a substituir mercadorias superfaturadas por refeições simples de feira que alimentam com o triplo de nutrientes gastando muito menos.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 bg-[#f0f9f3] text-emerald-600 rounded-lg mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      Quem não consegue (ou não quer) seguir dietas caras e complexas
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Chega de receitas complicadas com ingredientes de nomes esquisitos. Nosso cronograma foca em alimentos básicos nacionais (ovos, saladas, legumes locais, carnes comuns) que você encontra em qualquer mercadinho de bairro. No mercado comum, você vai fazer milagres.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 bg-[#f0f9f3] text-emerald-600 rounded-lg mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      Quem deseja melhorar a alimentação de toda a família
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Seus pais ou as pessoas na sua casa andam sem energia, enfrentando colesterol, gordura no fígado ou pressão desregulada? Esse método foi criado no colo da cozinha familiar exatamente para resgatar exames normais com amor e comida limpa.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 bg-[#f0f9f3] text-emerald-600 rounded-lg mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      Quem tem pouco tempo e uma rotina corrida
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Não exigimos que você vire refém do fogão. As substituições e preparos práticos são organizados para durar poucos minutos, garantindo que você coma de forma inteligente mesmo se tiver uma rotina exaustiva de trabalho ou estudos.
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 bg-[#f0f9f3] text-emerald-600 rounded-lg mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      Quem quer reatar a saúde sem custos de academia
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Comece exatamente onde você está hoje, sem ser forçado a comprar mensalidades absurdamente caras. Mostramos como a alteração certa de pratos e hábitos diários elementares é responsável por 80% do resultado do nosso bem-estar físico.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Card 2: PARA QUEM NÃO É (Red Warning Card) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#121614] to-[#040806] text-white rounded-[2.5rem] p-8 md:p-10 border border-zinc-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Background geometric flare */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-red-600 opacity-[0.05] rounded-full blur-3xl"></div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 bg-red-950/40 rounded-2xl flex items-center justify-center text-red-500 flex-shrink-0 border border-red-500/20 shadow-2xs">
                  <Ban className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white leading-none">
                    Esse guia NÃO é para...
                  </h3>
                  <p className="text-xs text-red-400 font-bold mt-1.5 font-sans">
                    Seja honesto consigo mesmo antes de comprar
                  </p>
                </div>
              </div>

              {/* The Honest Truth */}
              <div className="space-y-6">
                
                <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-red-400 font-extrabold text-xs uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-red-500" />
                    <span>NÃO É PARA QUEM PROCURA SOLUÇÕES MILAGROSAS</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-305/90 leading-relaxed font-sans font-medium">
                    Se você acredita em pílulas mágicas que derretem gordura dormindo, shakes industriais milagrosos que prometem emagrecer 10 kg em uma semana sem esforço, ou se está em busca de chás "seca-barriga" misteriosos, <strong className="text-white">por favor, não adquira este guia</strong>.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-zinc-400 font-sans font-medium leading-relaxed">
                  <p>
                    Comer saudável de forma barata exige mudar as escolhas certas no mercado e preparar sua comida simples com inteligência nutritiva.
                  </p>
                  <p>
                    O método que <strong className="text-brand-accent">me permitiu sair dos 158 kg</strong> e mudou os exames dos meus pais é sustentável, extremamente econômico e comprovado por quem viveu a dor na sola do sapato — mas exige atitude honesta de aplicar o passo a passo.
                  </p>
                  <p className="text-zinc-300 italic text-xs pt-2 border-t border-white/5">
                    "Prefiro perder uma venda do que decepcionar alguém que busca atalhos mentirosos."
                  </p>
                </div>

              </div>
            </div>

            {/* Micro value reinforcement card inside dark container */}
            <div className="mt-8 bg-emerald-950/25 p-4 rounded-xl border border-emerald-500/10 text-left">
              <span className="text-[10px] text-brand-accent font-black uppercase tracking-widest block mb-1">
                Compromisso de Valor
              </span>
              <p className="text-[11px] text-emerald-100/70 leading-relaxed font-medium">
                Pelo custo irrisório de <strong>R$ 22,89</strong>, você obtém um segredo prático que protege seu bolso das falsas promessas e economiza ao longo do tempo.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
