import React, { useState } from "react";
import { usePayment } from "./PaymentContext";
import { Link2, Save, HelpCircle, Check, Sparkles, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const PaymentToolbar: React.FC = () => {
  const { paymentLink, setPaymentLink } = usePayment();
  const [inputValue, setInputValue] = useState(paymentLink);
  const [showNotification, setShowNotification] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sync state when paymentLink updates initially
  React.useEffect(() => {
    setInputValue(paymentLink);
  }, [paymentLink]);

  const handleSave = () => {
    if (!inputValue || inputValue.trim() === "") {
      setPaymentLink("COLOQUE_AQUI_SEU_LINK_DE_PAGAMENTO");
    } else {
      setPaymentLink(inputValue.trim());
    }
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const isPlaceholder = paymentLink === "COLOQUE_AQUI_SEU_LINK_DE_PAGAMENTO" || !paymentLink;

  return (
    <div className="relative z-40 bg-zinc-900 text-zinc-100 shadow-xl border-b border-zinc-800" id="payment-config-toolbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3">
        <div className="flex items-center justify-between flex-wrap gap-3">
          
          {/* Header Description */}
          <div className="flex items-center gap-2.5">
            <div className={`p-1.5 rounded-lg flex items-center justify-center ${isPlaceholder ? "bg-amber-500 text-amber-950 animate-pulse" : "bg-brand-primary text-white"}`}>
              <Link2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-400">Configurador de Afiliado/Vendedor</span>
                {isPlaceholder && (
                  <span className="bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full text-[9px] animate-pulse">
                    Link de Fábrica Ativo
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-300">
                {isPlaceholder 
                  ? "Seus botões de compra abrem o Simulador de Checkout Seguro. Insira um link real abaixo para mudar isso."
                  : "Seus botões de compra estão redirecionando para seu link personalizado abaixo!"
                }
              </p>
            </div>
          </div>

          {/* Form control input */}
          <div className="flex items-center gap-2 w-full md:w-auto min-w-[280px] md:min-w-[400px]">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ex: https://pay.kiwify.com.br/abcdef"
                className="w-full bg-zinc-800 text-zinc-100 placeholder-zinc-500 text-xs rounded-lg pl-3 pr-8 py-1.5 border border-zinc-700 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-hidden"
              />
              {inputValue !== paymentLink && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-amber-500" title="Alterações não salvas"></span>
              )}
            </div>
            <button
              onClick={handleSave}
              className="bg-brand-primary hover:bg-brand-medium text-white px-3.5 py-1.5 rounded-lg text-xs font-bold font-sans transition-all flex items-center gap-1 active:scale-95 flex-shrink-0"
              id="btn-save-link"
            >
              <Save className="w-3.5 h-3.5" />
              Salvar Link
            </button>
          </div>

        </div>
      </div>

      {/* Embedded Save Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-[-45px] bg-brand-medium text-white flex items-center gap-2 px-4 py-2 rounded-full text-xs shadow-xl font-medium tracking-tight z-50 pointer-events-none"
          >
            <Check className="w-4 h-4 text-brand-light" />
            <span>Link de vendas atualizado com sucesso no site!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
