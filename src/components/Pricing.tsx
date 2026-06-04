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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-cream/40 to-white relative overflow-hidden text-left" id="comprar">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-primary/6 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0c6946] bg-brand-tint px-4 py-1.5 rounded-full select-none inline-flex items-center gap-1.5 border border-brand-primary/10 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
            <span>Mude de vida hoje mesmo</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            Invista em você. Transforme sua saúde.
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-sans max-w-xl mx-auto leading-relaxed">
            Garanta agora o seu e-book e comece hoje a construir hábitos mais saudáveis com orientações simples, acessíveis e feitas para a vida real.
          </p>
        </div>

        {/* Outer Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Grocery & Delivery Savings Calculator (Very engaging!) */}
          <div className="lg:col-span-6 bg-[#fafdfb] p-6 md:p-8 rounded-[2.5rem] border border-gray-150 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-brand-primary mb-4 select-none">
                <span className="p-1 px-3 bg-brand-tint border border-brand-primary/10 rounded-lg font-black text-[10px] uppercase tracking-wider text-brand-primary">Simulador</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Calculadora de Economia</span>
              </div>

              <h3 className="font-display font-black text-xl text-brand-dark leading-snug">
                Quanto você economizará aplicando o guia?
              </h3>
              
              <p className="text-xs text-gray-500 leading-relaxed mt-2 font-medium">
                Utilizando nossas técnicas de cozimento planejado, lista inteligente de safra e reaproveitamento integral, veja o retorno sobre seu investimento de R$ 22,89.
              </p>

              {/* Sliders */}
              <div className="mt-8 space-y-6">
                {/* Grocery Slider */}
                <div className="space-y-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-3xs">
                  <div className="flex justify-between items-baseline text-xs font-bold text-brand-dark">
                    <span className="text-gray-600">Gasto de Supermercado:</span>
                    <span className="text-brand-primary font-display text-base font-black">R$ {marketExpense}</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="2500"
                    step="50"
                    value={marketExpense}
                    onChange={(e) => setMarketExpense(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary transition-all"
                  />
                  <div className="flex justify-between text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                    <span>R$ 300</span>
                    <span>R$ 2.500</span>
                  </div>
                </div>

                {/* Delivery Slider */}
                <div className="space-y-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-3xs">
                  <div className="flex justify-between items-baseline text-xs font-bold text-brand-dark">
                    <span className="text-gray-600">Lanches evitados/mês:</span>
                    <span className="text-brand-primary font-display text-base font-black">{deliveryCount} pedidos</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={deliveryCount}
                    onChange={(e) => setDeliveryCount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary transition-all"
                  />
                  <div className="flex justify-between text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                    <span>Nenhum</span>
                    <span>15 vezes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Savings Output Indicator badge */}
            <div className="mt-8 p-5 bg-brand-cream/60 rounded-[1.8rem] border border-brand-primary/10">
              <p className="text-[10px] text-[#0c6946] uppercase tracking-widest font-black text-center md:text-left">
                Sua Economia Estimada:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-3 text-center md:text-left divide-x divide-gray-150">
                <div>
                  <span className="text-[10px] text-gray-400 block leading-none font-bold">No Mês</span>
                  <span className="text-xl sm:text-2xl font-display font-black text-brand-primary leading-tight mt-1 inline-block">
                    + R$ {monthlySavings.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="pl-4">
                  <span className="text-[10px] text-gray-400 block leading-none font-bold">No Ano (Total)</span>
                  <span className="text-xl sm:text-2xl font-display font-black text-emerald-650 leading-tight mt-1 inline-block text-emerald-600">
                    + R$ {annualSavings.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-gray-400 text-center md:text-left mt-4 leading-relaxed font-medium">
                💡 Nota: Mais de 89% dos leitores relatam recuperar o valor do e-book inteiramente em sua primeira ida à feira semanal aplicando o cronograma!
              </p>
            </div>
                {/* Meliuz Cashback Referral Integration Card */}
            <div className="mt-6 p-5 bg-rose-50/60 hover:bg-rose-50 border border-rose-100/80 rounded-[1.8rem] transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-rose-500/10 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                  💸
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest font-black text-rose-600 bg-rose-100 px-2.5 py-1 rounded-full select-none">
                    Dica Extra de Economia
                  </span>
                  <h4 className="font-display font-black text-sm text-zinc-900 mt-2">
                    Ganhe Cashback com o Aplicativo Méliuz!
                  </h4>
                  <p className="text-[11px] text-gray-550 leading-relaxed font-medium mt-1">
                    Além de economizar com o nosso e-book, você pode receber dinheiro extra de volta (cashback) direto na sua conta bancária a cada compra de supermercado ou farmácia usando o aplicativo <strong>Méliuz</strong>!
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-rose-100/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[10px] text-gray-400 font-bold text-center sm:text-left">
                  Ganhe cashback real nas suas compras semanais.
                </span>
                <a
                  href="https://www.meliuz.com.br/i/ref_14de32c8?ref_source=81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-black text-[10px] sm:text-xs uppercase tracking-wider px-4 py-3 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  id="meliuz-ref-link"
                >
                  <span>Ativar Méliuz & Poupar ↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium High-Converting Pricing Card */}
          <div className="lg:col-span-6 bg-brand-dark text-white rounded-[2.5rem] p-6 md:p-8 shadow-[0_24px_60px_rgba(6,30,20,0.3)] relative overflow-hidden flex flex-col justify-between border-4 border-brand-accent/20">
            {/* Top gold glow effect */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent via-[#f59e0b] to-transparent"></div>
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-brand-primary/50 text-white rounded-full text-[10px] font-black uppercase tracking-widest select-none border border-brand-primary/40">
                  Acesso Imediato • PDF Digital
                </span>
                
                <span className="text-[11px] text-brand-accent font-black flex items-center gap-1 select-none">
                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                  <span className="uppercase tracking-wider">Vagas Promocionais</span>
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-black text-2xl text-emerald-100 tracking-tight leading-none">
                  Alimentação Inteligente
                </h4>
                <p className="text-xs text-gray-400 leading-normal font-bold">
                  Guia Prático Para Emagrecer Gastando Pouco
                </p>
              </div>

              {/* Price Indicator */}
              <div className="space-y-2 py-5 border-y border-white/5">
                <p className="text-xs text-emerald-200/70 font-semibold uppercase tracking-wider">De R$ 47,99 por apenas</p>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">R$</span>
                  <span className="text-5xl sm:text-6xl font-display font-black tracking-tight text-white leading-none">
                    22,89
                  </span>
                  <span className="text-[10px] bg-brand-primary text-white font-extrabold px-1.5 py-0.5 rounded-md ml-2 leading-none uppercase tracking-wider">
                    Pago único
                  </span>
                </div>
                
                <p className="text-[10px] text-emerald-300 font-bold mt-1">
                  Sem mensalidades, sem assinaturas recorrentes ou cobranças adicionais.
                </p>
              </div>

              {/* Checklist list of features delivered */}
              <ul className="space-y-3.5 text-xs text-emerald-150 font-medium font-sans">
                {[
                  "E-book completo pronto para ler no celular, computador ou tablet.",
                  "Planilhas e Listas de feira econômicas para o Brasil.",
                  "Plano completo de reeducação de 30 dias passo a passo.",
                  "Suporte e atualizações vitalícias do PDF para sempre.",
                  "Controle de fome emocional e Higiene mental do sono.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-left leading-relaxed">
                    <span className="text-brand-accent mt-0.5 font-bold flex-shrink-0">✓</span>
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
                className="w-full bg-brand-accent hover:bg-yellow-400 text-brand-dark py-4 sm:py-5 px-6 rounded-2xl text-sm sm:text-base font-black transition-all shadow-lg hover:shadow-brand-accent/20 active:scale-97 flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-wider relative overflow-hidden"
                id="pricing-main-buy-button"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                <span>Garantir meu e-book agora</span>
                <ArrowRight className="w-5 h-5 text-brand-dark group-hover:translate-x-1.5 transition-transform stroke-3" />
              </button>

              <div className="flex items-center justify-center gap-2.5 text-[10px] text-gray-450 select-none">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-bold">Ambiente 100% Criptografado</span>
                </span>
                <span>•</span>
                <span className="font-bold">Envio Imediato por E-mail</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
