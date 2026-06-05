import React from "react";
import { usePayment } from "./PaymentContext";
import { BookOpen, ShoppingCart, Percent } from "lucide-react";

export const Header: React.FC = () => {
  const { triggerPurchase } = usePayment();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo and Brand Name */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-primary text-white font-bold shadow-md shadow-brand-primary/20 transition-transform group-hover:scale-105">
              <BookOpen className="w-5 h-5 text-brand-cream" />
              <div className="absolute -top-1 -right-1 bg-brand-accent h-3.5 w-3.5 rounded-full border-2 border-white flex items-center justify-center">
                <span className="block h-1 w-1 bg-brand-dark rounded-full"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-base md:text-lg text-brand-dark tracking-tight leading-tight">
                Alimentação <span className="text-brand-primary">Inteligente</span>
              </span>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase leading-none mt-0.5">
                O Guia de Emagrecimento
              </span>
            </div>
          </a>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#beneficios" className="hover:text-brand-primary transition-colors py-2 relative group uppercase tracking-wider text-[11px] font-black">
              Benefícios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#conteudo" className="hover:text-brand-primary transition-colors py-2 relative group uppercase tracking-wider text-[11px] font-black">
              Conteúdo
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#habitos" className="hover:text-brand-primary transition-colors py-2 relative group uppercase tracking-wider text-[11px] font-black">
              Dicas Práticas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#depoimentos" className="hover:text-brand-primary transition-colors py-2 relative group uppercase tracking-wider text-[11px] font-black">
              Depoimentos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#proposito" className="hover:text-brand-primary transition-colors py-2 relative group uppercase tracking-wider text-[11px] font-black">
              História
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end">
              <div className="flex items-center gap-1.5 text-xs text-[#0c6946] font-extrabold bg-[#eefaf4] px-3 py-1 rounded-full select-none border border-brand-primary/10 animate-pulse">
                <Percent className="w-3.5 h-3.5 text-brand-primary" />
                <span>R$ 25,10 economizados</span>
              </div>
            </div>

            <a
              href="https://p.hoopay.com.br/v/313034586501248"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#0a5236] hover:bg-brand-primary text-white text-xs md:text-sm font-black rounded-xl transition-all shadow-md hover:shadow-brand-primary/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-center"
              id="header-buy-button"
            >
              <ShoppingCart className="w-4 h-4 text-brand-cream" />
              <span className="flex items-center gap-2 flex-wrap justify-center">
                <span>Garantir e-book • R$ 22,89</span>
                <span className="line-through text-[10px] text-emerald-300 font-extrabold opacity-95">R$ 47,99</span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
