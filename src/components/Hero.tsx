import React from "react";
import { usePayment } from "./PaymentContext";
import { ArrowDown, Flame, ShieldAlert, Sparkles, Star, Download, Gift } from "lucide-react";
import { motion } from "motion/react";

// Import our generated ebook cover dynamically
const ebookCoverImg = "/src/assets/images/ebook_cover_1780495703760.png";

export const Hero: React.FC = () => {
  const { triggerPurchase } = usePayment();

  const handleScrollToBenefits = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("beneficios");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-brand-cream/40 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-gray-100" id="hero">
      {/* Decorative gradient glowing bubbles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand, Title, Story & Action */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Super Highlight Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 rounded-full text-brand-primary text-xs font-bold leading-none mx-auto lg:mx-0 select-none">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent fill-brand-accent animate-spin" />
              <span>Oferta Especial: de <span className="line-through opacity-75">R$ 47,99</span> por apenas R$ 22,89</span>
            </div>

            {/* Title & E-book Identity */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-brand-dark tracking-tight leading-none">
                Alimentação <span className="text-brand-primary relative inline-block">Inteligente</span>
              </h1>
              <p className="font-display text-lg sm:text-xl font-bold text-brand-medium/90 max-w-xl mx-auto lg:mx-0 leading-snug">
                Mais do que um e-book, um projeto criado por um filho que queria ajudar sua família.
              </p>
            </div>

            {/* Story-centered Text */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
              Este guia nasceu para mostrar que viver com mais saúde não precisa ser caro. 
              Com orientações simples, práticas e acessíveis, ele ajuda famílias brasileiras a 
              melhorarem a alimentação, criarem hábitos saudáveis e cuidarem melhor da rotina.
            </p>

            {/* Real Proof mini ribbon */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-xs text-gray-500 font-medium my-4">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-gray-700">4.9/5</span>
                <span>(1.240+ avaliações)</span>
              </div>
              <span className="text-gray-300">|</span>
              <a
                href="https://www.cssbuylatam.com/pt/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-brand-primary hover:text-brand-medium text-xs font-bold rounded-xl border border-emerald-100 transition-all active:scale-95 cursor-pointer shadow-xs"
                id="link-preview-ebook"
              >
                <Download className="w-3.5 h-3.5 text-brand-primary" />
                <span>Prévias do E-book</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={triggerPurchase}
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-medium text-white font-black rounded-2xl transition-all shadow-lg hover:shadow-brand-primary/30 active:scale-95 text-center flex items-center justify-center gap-2 group cursor-pointer"
                id="hero-buy-now"
              >
                <span className="flex items-center gap-2 flex-wrap justify-center">
                  <span>Garantir e-book por R$ 22,89</span>
                  <span className="line-through text-xs text-emerald-300 font-semibold opacity-85">R$ 47,99</span>
                </span>
                <span className="text-brand-accent font-bold group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href="#beneficios"
                onClick={handleScrollToBenefits}
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-gray-50 text-brand-dark border border-gray-200 font-bold rounded-2xl transition-all shadow-sm text-center flex items-center justify-center gap-2 active:scale-95"
                id="hero-scroll-benefits"
              >
                <span>Quero conhecer o e-book</span>
                <ArrowDown className="w-4 h-4 text-gray-400 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Bullet points mapping */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t border-gray-200/50">
              <div className="flex items-center gap-2 text-left bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
                <span className="text-xl">💰</span>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark leading-none">Super Econômico</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Substitutos baratos</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
                <span className="text-xl">🏡</span>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark leading-none">Higiene & Treino</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Práticas em casa</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left col-span-2 md:col-span-1 bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
                <span className="text-xl">🚀</span>
                <div>
                  <h4 className="text-xs font-bold text-brand-dark leading-none">Plano 30 Dias</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Pequenas vitórias</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: E-book Cover Showcase and Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-[340px] md:max-w-[400px]">
              
              {/* Gold luxury shine backdrop */}
              <div className="absolute inset-x-8 -inset-y-4 bg-brand-accent/20 rounded-3xl blur-2xl transform rotate-3 pointer-events-none"></div>
              
              {/* Main cover 3D shadow container */}
              <motion.div 
                whileHover={{ rotateY: -6, rotateX: 3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative bg-zinc-950 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-4 border-brand-cream/80 flex aspect-[3/4]"
                id="hero-cover-container"
              >
                <img 
                  src={ebookCoverImg} 
                  alt="Alimentação Inteligente - E-book Cover" 
                  className="w-full h-full object-cover select-none" 
                  referrerPolicy="no-referrer"
                  id="hero-cover-image"
                />
                
                {/* Book spine simulation overlay */}
                <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-black/50 via-white/10 to-transparent"></div>
              </motion.div>

              {/* Float Badge: Gold Pricing tag */}
              <div className="absolute -bottom-6 -right-4 bg-brand-accent text-brand-dark font-display font-black shadow-lg rounded-2xl p-4 border-2 border-white transform rotate-3 select-none flex flex-col items-center justify-center">
                <span className="text-[10px] text-brand-dark/75 line-through leading-none">De R$ 47,99</span>
                <span className="text-[10px] text-brand-dark/95 tracking-wider uppercase font-bold leading-none mt-1">Por apenas</span>
                <div className="flex items-baseline gap-0.5 mt-0.5">
                  <span className="text-xs font-extrabold">R$</span>
                  <span className="text-2xl font-black tracking-tight leading-none">22,89</span>
                </div>
                <span className="text-[9px] bg-brand-dark text-white font-bold px-1.5 py-0.5 rounded-md mt-1 leading-none uppercase">
                  52% Desconto
                </span>
              </div>

              {/* Float Badge: Super Healthy guarantee */}
              <div className="absolute -top-4 -left-6 bg-brand-dark text-white font-sans text-xs shadow-md rounded-2xl py-2.5 px-4 border border-brand-primary/30 flex items-center gap-2 select-none">
                <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-[10px]">✓</div>
                <div>
                  <p className="font-bold leading-none">100% Digital</p>
                  <p className="text-[10px] text-emerald-400 mt-0.5">Acesso vitalício</p>
                </div>
              </div>

            </div>

            {/* Quick mini-notice */}
            <p className="text-[11px] text-gray-500 mt-12 text-center max-w-xs leading-normal">
              🎁 Compra protegida com <strong>Garantia Estendida de 7 dias</strong>. Satisfação assegurada ou dinheiro de volta.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
