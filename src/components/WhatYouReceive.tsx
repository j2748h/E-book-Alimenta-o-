import React from "react";
import { 
  BookOpen, 
  CalendarRange, 
  Utensils, 
  Dumbbell, 
  Moon, 
  ShoppingCart, 
  Brain, 
  Zap, 
  Lightbulb, 
  Infinity as InfinityIcon, 
  RefreshCw, 
  Gift, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { motion } from "motion/react";
import { usePayment } from "./PaymentContext";

export const WhatYouReceive: React.FC = () => {
  const { triggerPurchase } = usePayment();

  const items = [
    {
      id: "ebook",
      icon: <BookOpen className="w-6 h-6 text-brand-primary" />,
      tag: "Guia Principal",
      title: 'E-book Completo "Alimentação Inteligente"',
      desc: "Aprenda a melhorar sua alimentação sem dietas caras, utilizando alimentos simples, acessíveis e presentes na realidade das famílias brasileiras.",
      emoji: "📖",
      bgColor: "bg-emerald-50",
      borderColor: "border-brand-primary/10"
    },
    {
      id: "plan",
      icon: <CalendarRange className="w-6 h-6 text-brand-primary" />,
      tag: "Constância",
      title: "Plano Completo de 30 Dias",
      desc: "Um passo a passo diário para ajudar você a criar hábitos saudáveis, melhorar sua rotina e manter a consistência sem complicação.",
      emoji: "📅",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-500/10"
    },
    {
      id: "economic-guide",
      icon: <Utensils className="w-6 h-6 text-brand-primary" />,
      tag: "Nutrição Econômica",
      title: "Guia de Alimentação Econômica",
      desc: "Descubra como montar refeições equilibradas, nutritivas e econômicas utilizando ingredientes fáceis de encontrar e muito baratos.",
      emoji: "🥗",
      bgColor: "bg-green-50",
      borderColor: "border-green-500/10"
    },
    {
      id: "workouts",
      icon: <Dumbbell className="w-6 h-6 text-amber-600" />,
      tag: "Atividade Física",
      title: "10 Exercícios Simples Para Fazer em Casa",
      desc: "Treinos rápidos, práticos e fáceis guiados detalhadamente para quem tem pouco tempo ou não deseja pagar mensalidade de academia.",
      emoji: "🏃",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-500/10"
    },
    {
      id: "sleep",
      icon: <Moon className="w-6 h-6 text-indigo-600" />,
      tag: "Foco & Energia",
      title: "Método para Dormir Melhor e Recuperar Energia",
      desc: "Aprenda técnicas práticas testadas para melhorar a qualidade do sono profundo, acordar com mais disposição e regular seus hormônios.",
      emoji: "😴",
      bgColor: "bg-indigo-50/60",
      borderColor: "border-indigo-500/10"
    },
    {
      id: "grocery-list",
      icon: <ShoppingCart className="w-6 h-6 text-brand-primary" />,
      tag: "Mercado Inteligente",
      title: "Lista Inteligente de Compras Econômicas",
      desc: "Saiba exatamente quais alimentos comprar nas safras certas para economizar muito sem abrir mão do valor e da qualidade nutricional.",
      emoji: "🛒",
      bgColor: "bg-emerald-50",
      borderColor: "border-brand-primary/10"
    },
    {
      id: "emotional-hunger",
      icon: <Brain className="w-6 h-6 text-rose-600" />,
      tag: "Mente Saudável",
      title: "Estratégias Para Controlar a Fome Emocional",
      desc: "Aprenda a diferenciar com clareza a fome física da ansiedade alimentar, evitando decisões impulsivas e descontroles na rotina.",
      emoji: "🧠",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-500/10"
    },
    {
      id: "satiety-table",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      tag: "Saciedade Prolongada",
      title: "Tabela de Alimentos de Alta Saciedade",
      desc: "Conheça alimentos simples e super baratos do dia a dia brasileiro que ajudam você a se sentir saciado por muito mais tempo.",
      emoji: "🍎",
      bgColor: "bg-amber-50/80",
      borderColor: "border-amber-500/10"
    },
    {
      id: "organization",
      icon: <Lightbulb className="w-6 h-6 text-brand-primary" />,
      tag: "Produtividade",
      title: "Dicas Práticas de Organização Alimentar",
      desc: "Métodos simples para planejar refeições da semana, armazenar alimentos de forma ideal, reduzir o desperdício doméstico e economizar tempo.",
      emoji: "💡",
      bgColor: "bg-green-50",
      borderColor: "border-green-500/10"
    },
    {
      id: "lifetime",
      icon: <InfinityIcon className="w-6 h-6 text-teal-600" />,
      tag: "Acesso Seguro",
      title: "Acesso Vitalício Para Sempre",
      desc: "Adquira uma única vez e consulte o material completo quando e onde quiser, diretamente pelo seu celular, tablet ou computador.",
      emoji: "♻️",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-500/10"
    },
    {
      id: "updates",
      icon: <RefreshCw className="w-6 h-6 text-brand-primary" />,
      tag: "Evolução Contínua",
      title: "Atualizações Futuras Gratuitas",
      desc: "Sempre que novas melhorias, tabelas de safras orçamentárias ou bônus forem adicionados, você receberá tudo gratuitamente sem taxas extras.",
      emoji: "🔄",
      bgColor: "bg-emerald-50",
      borderColor: "border-brand-primary/10"
    },
    {
      id: "bonus",
      icon: <Gift className="w-6 h-6 text-rose-500" />,
      tag: "Super Dinheiro de Volta",
      title: "Bônus Extra: Guia de Cashback & Economia",
      desc: "Descubra segredos práticos do nosso e-book para economizar ainda mais na feira aplicando o cashback Méliuz de forma inteligente.",
      emoji: "🎁",
      bgColor: "bg-rose-50/70",
      borderColor: "border-rose-500/10"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[repeating-linear-gradient(-45deg,#0c694603,#0c694603_15px,transparent_15px,transparent_30px)] bg-[#f6fbf8] overflow-hidden text-left" id="o-que-recebe">
      {/* Decorative premium glowing backgrounds */}
      <div className="absolute top-10 right-0 w-[450px] h-[450px] bg-brand-primary/6 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-[110px] pointer-events-none"></div>
      
      {/* Postal box decorative border lines */}
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-red-500/10 via-brand-primary/10 to-red-500/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary bg-brand-tint px-4 py-1.5 rounded-full select-none border border-brand-primary/10 inline-flex items-center gap-1.5 shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
            <span>Entrega imediata e segura</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            O que você recebe imediatamente após a compra
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-sans max-w-xl mx-auto leading-relaxed">
            Tenha acesso imediato em seu e-mail ao material didático mais prático do mercado, desenhado para caber na sua rotina e no bolso.
          </p>
        </div>

        {/* Deliverology Bento-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`group bg-white rounded-[2rem] p-6 sm:p-8 border-[1.5px] ${item.borderColor} hover:border-brand-primary/25 shadow-xs hover:shadow-[0_24px_50px_rgba(16,126,84,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              id={`receive-item-${item.id}`}
            >
              <div className="space-y-5">
                {/* Header line: custom rounded bubble icon & category tag */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-wider text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Title and Descriptions */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-brand-dark tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                    <span className="mr-1.5">{item.emoji}</span> {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Bullet Point Check */}
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-[11px] font-bold text-brand-primary/80 group-hover:text-brand-primary transition-colors">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Pronto para baixar</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Bottom Trust & Call-To-Action Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-brand-dark via-brand-medium to-[#082216] text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-[0_24px_60px_rgba(6,30,20,0.25)] border border-white/5"
            id="receive-cta-card"
          >
            {/* Ambient luxury light beams */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-accent opacity-15 rounded-full blur-2xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Text column */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-primary/40 border border-brand-primary/25 rounded-full text-brand-accent text-[11px] font-black uppercase tracking-wider select-none leading-none">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Compra 100% Protegida</span>
                </div>
                
                <h3 className="font-display font-black text-2xl sm:text-3.5xl text-white tracking-tight leading-none">
                  💚 Tudo isso por apenas <span className="text-brand-accent text-3xl sm:text-4xl block sm:inline mt-1 sm:mt-0">R$ 22,89</span>
                </h3>
                
                <p className="text-xs sm:text-sm text-emerald-150/90 leading-relaxed font-medium">
                  Um investimento menor do que muitos pedidos de delivery e que pode ajudar você e sua família a economizar de verdade durante anos!
                </p>

                {/* Warranty Notice Ribbon */}
                <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-3 text-[11px] text-emerald-100/85">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    <strong>🔒 Garantia Incondicional de 7 Dias:</strong> Experimente com total tranquilidade.
                  </span>
                </div>
              </div>

              {/* Interactive Big Button Column */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
                <button
                  onClick={triggerPurchase}
                  className="w-full bg-brand-accent hover:bg-yellow-400 text-brand-dark py-4 sm:py-5 px-6 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-lg hover:shadow-brand-accent/20 active:scale-97 flex items-center justify-center gap-2 group cursor-pointer uppercase tracking-wider relative overflow-hidden"
                  id="receive-block-buy-button"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                  <span>Quero Garantir Tudo Agora</span>
                  <ArrowRight className="w-4.5 h-4.5 text-brand-dark group-hover:translate-x-1 transition-transform stroke-3" />
                </button>
                <span className="text-[10px] text-emerald-200/70 uppercase tracking-widest font-black select-none">
                  Download PDF Imediato • Sem mensalidades
                </span>
              </div>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Dynamic separator dividing WhatYouReceive from Story */}
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-center translate-y-1/2 pointer-events-none z-10">
        <div className="w-full border-t border-dashed border-emerald-500/10 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1.5 rounded-full border border-emerald-500/15 flex items-center gap-1.5 text-[#0c6946] text-[10px] font-black uppercase tracking-widest shadow-2xs">
            <span>💚</span>
            <span>Uma História Real de Superação</span>
          </div>
        </div>
      </div>
    </section>
  );
};
