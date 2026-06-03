import React from "react";
import { Sparkles } from "lucide-react";

export const PaymentToolbar: React.FC = () => {
  return (
    <div className="relative z-40 bg-zinc-950 text-zinc-100 shadow-lg border-b border-zinc-800" id="payment-config-toolbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 md:py-3.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          
          {/* Header Description */}
          <div className="flex items-center gap-3 text-center sm:text-left flex-1">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
              <Sparkles className="w-4 h-4 fill-amber-400/20" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-400">Programa de Afiliados</span>
                <span className="bg-emerald-500/20 text-emerald-300 font-extrabold px-2.5 py-0.5 rounded-full text-[10px] border border-emerald-500/30">
                  Comissão Especial: 47% do Valor
                </span>
              </div>
              <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                Promova o e-book com maior conversão de saúde e emagrecimento econômico e fature alto com pagamentos imediatos!
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center flex-shrink-0">
            <a 
              href="https://dashboard.hoopay.com.br/product_affiliate/976c9ed7-1a56-4d4b-9802-29403d96d412" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 active:scale-95 shadow-lg shadow-amber-500/15 cursor-pointer hover:shadow-amber-500/25"
              id="toolbar-btn-affiliate-signup"
            >
              <Sparkles className="w-3.5 h-3.5 fill-zinc-950/20 animate-bounce" />
              <span>Quero ser Afiliado ↗</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
