import React, { useState } from "react";
import { usePayment } from "./PaymentContext";
import { 
  ShieldCheck, ArrowRight, DollarSign, Sparkles, 
  BookOpen, Star, Clock, Lock, RefreshCw, Send, CheckCircle2 
} from "lucide-react";
import { motion } from "motion/react";

export const Pricing: React.FC = () => {
  const { triggerPurchase } = usePayment();
  
  // Interactive Savings Calculator States
  const [marketExpense, setMarketExpense] = useState<number>(800);
  const [deliveryCount, setDeliveryCount] = useState<number>(4);

  // Estimates: 
  // - 15% savings on grocery bill because of seasonal items and smart shopping lists
  // - R$ 45 savings per delivery avoided
  const monthlySavings = (marketExpense * 0.15) + (deliveryCount * 45);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="py-16 md:py-24 bg-brand-cream/45 relative overflow-hidden" id="comprar">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary bg-brand-tint px-3 py-1.5 rounded-full select-none inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
            <span>Mude de vida hoje mesmo</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            Invista em você. Transforme sua saúde.
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3 font-sans max-w-xl mx-auto">
            Garanta agora o seu e-book e comece hoje a construir hábitos mais saudáveis com orientações simples, acessíveis e feitas para a vida real.
          </p>
        </div>

        {/* Outer Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Grocery & Delivery Savings Calculator (Very engaging!) */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-brand-primary mb-4 select-none">
                <span className="p-1 px-2.5 bg-brand-tint rounded-lg font-bold text-xs">Simulador</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Calculadora de Economia</span>
              </div>

              <h3 className="font-display font-black text-lg sm:text-xl text-brand-dark leading-snug">
                Quanto você economizará aplicando o guia?
              </h3>
              
              <p className="text-xs text-gray-400 leading-normal mt-1.5">
                Utilizando nossas técnicas de cozimento planejado, lista inteligente de safra e reaproveitamento integral, veja o retorno sobre seu investimento de R$ 22,89.
              </p>

              {/* Sliders */}
              <div className="mt-8 space-y-6">
                {/* Grocery Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-brand-dark">
                    <span>Gasto Mensal de Supermercado:</span>
                    <span className="text-brand-primary font-display text-sm">R$ {marketExpense}</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="2500"
                    step="50"
                    value={marketExpense}
                    onChange={(e) => setMarketExpense(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>R$ 300</span>
                    <span>R$ 2.500</span>
                  </div>
                </div>

                {/* Delivery Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-brand-dark">
                    <span>Lanches/Entregas evitados no mês:</span>
                    <span className="text-brand-primary font-display text-sm">{deliveryCount} pedidos</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={deliveryCount}
                    onChange={(e) => setDeliveryCount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400">
                    <span>Nenhum</span>
                    <span>15 vezes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Savings Output Indicator badge */}
            <div className="mt-8 p-4 bg-brand-cream/60 rounded-2xl border border-brand-primary/10">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold text-center md:text-left">
                Sua Economia Estimada:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-3 text-center md:text-left divide-x divide-gray-150">
                <div>
                  <span className="text-[10px] text-gray-400 block leading-none">No Mês</span>
                  <span className="text-xl font-display font-black text-brand-primary leading-tight mt-1 inline-block">
                    + R$ {monthlySavings.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="pl-4">
                  <span className="text-[10px] text-gray-400 block leading-none">No Ano (Total)</span>
                  <span className="text-xl font-display font-black text-brand-primary leading-tight mt-1 inline-block text-emerald-600">
                    + R$ {annualSavings.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <p className="text-[9px] text-gray-400 text-center md:text-left mt-3 leading-normal">
                💡 Nota: Mais de 89% dos leitores relatam recuperar o valor do e-book inteiramente em sua primeira ida à feira semanal aplicando o cronograma!
              </p>
            </div>

          </div>

          {/* Right Column: Premium High-Converting Pricing Card */}
          <div className="lg:col-span-6 bg-brand-dark text-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between border-4 border-brand-accent/20">
            {/* Top gold glow effect */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-accent via-[#fbbf24] to-transparent"></div>
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-brand-primary/50 text-white rounded-full text-[10px] font-black uppercase tracking-wider select-none border border-brand-primary">
                  Acesso Imediato • PDF Digital
                </span>
                
                <span className="text-[11px] text-brand-accent font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                  <span>Vagas Promocionais</span>
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-lg text-emerald-100">
                  Alimentação Inteligente
                </h4>
                <p className="text-xs text-gray-400 leading-normal font-normal">
                  Guia Prático Para Emagrecer Gastando Pouco
                </p>
              </div>

              {/* Price Indicator */}
              <div className="space-y-1 py-4 border-y border-white/5">
                <p className="text-xs text-gray-400 line-through">De R$ 47,99 por apenas</p>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">R$</span>
                  <span className="text-5xl font-display font-black tracking-tight text-white leading-none">
                    22,89
                  </span>
                  <span className="text-xs text-brand-accent font-medium ml-1">Pago único (R$)</span>
                </div>
                
                <p className="text-[10px] text-emerald-300 font-medium">
                  Sem mensalidades, sem assinaturas recorrentes ou cobranças adicionais.
                </p>
              </div>

              {/* Checklist list of features delivered */}
              <ul className="space-y-2 text-xs text-emerald-100/90 font-sans">
                {[
                  "E-book completo pronto para ler no celular, computador ou tablet.",
                  "Planilhas e Listas de feira econômicas para o Brasil.",
                  "Plano completo de reeducação de 30 dias passo a passo.",
                  "Suporte e atualizações vitalícias do PDF para sempre.",
                  "Controle de fome emocional e Higiene mental do sono.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-left">
                    <span className="text-brand-accent mt-0.5 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Main Checkout triggering Button */}
            <div className="mt-8 pt-4 space-y-4">
              <button
                type="button"
                onClick={triggerPurchase}
                className="w-full bg-brand-accent hover:bg-brand-accent/90 focus:ring-4 focus:ring-brand-accent/20 text-brand-dark py-4 px-6 rounded-2xl text-sm font-black transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2 group cursor-pointer"
                id="pricing-main-buy-button"
              >
                <span>Garantir meu e-book agora</span>
                <ArrowRight className="w-4 h-4 text-brand-dark group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2.5 text-[10px] text-gray-400 select-none">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Ambiente 100% Criptografado</span>
                </span>
                <span>•</span>
                <span>Envio Imediato por E-mail</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
