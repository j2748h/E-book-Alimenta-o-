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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e3f0e8] via-brand-cream/30 to-white pt-12 pb-24 md:pt-20 md:pb-36" id="hero">
      {/* Luxurious glowing decorative elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[130px] pointer-events-none animate-pulse duration-[6s]"></div>
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-brand-accent/8 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-brand-light/4 rounded-full blur-[90px] pointer-events-none"></div>
      
      {/* Decorative vertical grid lines for that premium editorial layout charm */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c694605_1px,transparent_1px)] bg-[size:100px_100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand, Title, Story & Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 md:space-y-10 text-center lg:text-left"
          >
            
            {/* Super Highlight Badge with highly-polished design */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary/10 hover:bg-brand-primary/15 border border-brand-primary/20 rounded-full text-brand-primary text-xs font-extrabold leading-none mx-auto lg:mx-0 select-none transition-all shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent fill-brand-accent animate-bounce" />
              <span>Oferta Especial: de <span className="line-through opacity-75">R$ 47,99</span> por apenas R$ 22,89</span>
            </div>

            {/* Title & E-book Identity with elegant luxury typography */}
            <div className="space-y-4">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6.5xl text-brand-dark tracking-tight leading-none">
                Alimentação <span className="text-brand-primary relative inline-block">Inteligente
                  <span className="absolute -bottom-2 inset-x-0 h-1.5 bg-brand-accent rounded-full opacity-60"></span>
                </span>
              </h1>
              <p className="font-display text-lg sm:text-2xl font-extrabold text-brand-medium/90 max-w-xl mx-auto lg:mx-0 leading-tight">
                Mais do que um e-book, o método real de quem saiu dos 158 kg e ajudou a salvar a saúde dos seus pais gastando muito pouco.
              </p>
            </div>

            {/* Story-centered Text */}
            <p className="text-sm sm:text-base text-gray-650 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal opacity-95">
              Este guia nasceu para provar que a reeducação alimentar é viável para qualquer bolso. 
              Sem produtos importados ou frescuras: apenas o cronograma prático, barato e real 
              que usei para mudar minha vida e dar mais anos de vida com saúde aos meus pais.
            </p>

            {/* Real Proof mini ribbon with polished layout */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-5 text-xs text-gray-500 font-semibold my-4">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs py-1.5 px-3 rounded-full border border-gray-100 shadow-2xs">
                <div className="flex text-amber-400">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <Star key={i + 3} className="w-3.5 h-3.5 text-gray-300" />
                  ))}
                </div>
                <span className="font-black text-brand-dark">3,5</span>
                <span className="text-gray-400 font-medium">(21+ avaliações)</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <a
                href="https://www.cssbuylatam.com/pt/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-50 hover:bg-[#d1fae5] text-[#065f46] hover:text-brand-dark text-xs font-extrabold rounded-2xl border border-emerald-100 shadow-sm transition-all active:scale-95 cursor-pointer"
                id="link-preview-ebook"
              >
                <Download className="w-4 h-4 text-brand-primary" />
                <span>Prévias do E-book</span>
              </a>
            </div>

            {/* CTAs with highly interactive premium feel */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5">
              <a
                href="https://p.hoopay.com.br/v/313034586501248"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-brand-primary hover:bg-[#0c6946] text-white font-black rounded-2xl transition-all shadow-[0_12px_24px_-8px_rgba(16,126,84,0.45)] hover:shadow-[0_16px_32px_-6px_rgba(16,126,84,0.6)] active:scale-97 text-center flex items-center justify-center gap-3.5 group cursor-pointer text-sm sm:text-base relative overflow-hidden"
                id="hero-buy-now"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                <span className="flex items-center gap-2 flex-wrap justify-center">
                  <span>Garantir e-book por R$ 22,89</span>
                  <span className="line-through text-xs text-emerald-250 font-bold opacity-80 text-[10px] sm:text-xs">R$ 47,99</span>
                </span>
                <span className="text-brand-accent font-black group-hover:translate-x-1.5 transition-transform text-lg">→</span>
              </a>

              <a
                href="#beneficios"
                onClick={handleScrollToBenefits}
                className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-white hover:bg-gray-50 text-brand-dark border border-gray-200/90 hover:border-gray-300 font-extrabold rounded-2xl transition-all shadow-xs hover:shadow-sm text-center flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap text-sm cursor-pointer group"
                id="hero-scroll-benefits"
              >
                <span>Quero conhecer o e-book</span>
                <ArrowDown className="w-4 h-4 text-gray-400 group-hover:translate-y-1.5 transition-all duration-300" />
              </a>
            </div>

            {/* Bullet points mapping */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-gray-200/60">
              <div className="flex items-center gap-3 text-left bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="text-2xl bg-amber-50 p-1.5 rounded-xl">💰</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-brand-dark leading-none">Super Econômico</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">Substitutos baratos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="text-2xl bg-emerald-50 p-1.5 rounded-xl">🏡</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-brand-dark leading-none">Higiene & Treino</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">Práticas em casa</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left col-span-2 md:col-span-1 bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
                <span className="text-2xl bg-teal-50 p-1.5 rounded-xl">🚀</span>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-brand-dark leading-none">Plano 30 Dias</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">Pequenas vitórias</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: E-book Cover Showcase and Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-12 lg:col-start-8 lg:col-end-13 flex flex-col items-center justify-center pt-4 sm:pt-0"
          >
            
            <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] px-2 sm:px-0">
              
              {/* Gold luxury shine backdrop */}
              <div className="absolute inset-x-8 -inset-y-4 bg-brand-accent/20 rounded-3xl blur-2xl transform rotate-3 pointer-events-none"></div>
              
              {/* Main cover 3D shadow container */}
              <motion.div 
                whileHover={{ rotateY: -6, rotateX: 3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative bg-zinc-950 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.2)] sm:shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-4 border-brand-cream/80 flex aspect-[3/4]"
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
                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 via-white/10 to-transparent"></div>
              </motion.div>

              {/* Float Badge: Gold Pricing tag */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 bg-brand-accent text-brand-dark font-display font-black shadow-md rounded-2xl p-3 sm:p-4 border-2 border-white transform rotate-3 select-none flex flex-col items-center justify-center">
                <span className="text-[9px] sm:text-[10px] text-brand-dark/75 line-through leading-none">De R$ 47,99</span>
                <span className="text-[9px] sm:text-[10px] text-brand-dark/95 tracking-wider uppercase font-bold leading-none mt-0.5 sm:mt-1">Por apenas</span>
                <div className="flex items-baseline gap-0.5 mt-0.5">
                  <span className="text-[10px] sm:text-xs font-extrabold">R$</span>
                  <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-brand-dark">22,89</span>
                </div>
                <span className="text-[8px] sm:text-[9px] bg-brand-dark text-white font-bold px-1.5 py-0.5 rounded-md mt-1 leading-none uppercase">
                  52% Desconto
                </span>
              </div>

              {/* Float Badge: Super Healthy guarantee */}
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-6 bg-brand-dark text-white font-sans text-[10px] sm:text-xs shadow-md rounded-2xl py-2 px-3 sm:py-2.5 sm:px-4 border border-brand-primary/30 flex items-center gap-1.5 sm:gap-2 select-none">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-primary flex items-center justify-center text-[9px] sm:text-[10px]">✓</div>
                <div>
                  <p className="font-bold leading-none">100% Digital</p>
                  <p className="text-[9px] sm:text-[10px] text-emerald-400 mt-0.5">Acesso vitalício</p>
                </div>
              </div>

            </div>

            {/* Quick mini-notice */}
            <p className="text-[10px] sm:text-[11px] text-gray-500 mt-8 sm:mt-12 text-center max-w-xs leading-normal px-4">
              🎁 Compra protegida com <strong>Garantia Estendida de 7 dias</strong>. Satisfação assegurada ou dinheiro de volta.
            </p>

          </motion.div>

        </div>
      </div>

      {/* Curved organic white wave bottom divider to create Section transition flow */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform translate-y-[1px] pointer-events-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(130%+1.3px)] h-[40px] md:h-[60px] text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c66,17.29,138.74-73.81,214.34-62.56V120H0V27.35A600.21,600.21,0,0,1,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
