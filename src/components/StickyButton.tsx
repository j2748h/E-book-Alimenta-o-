import React, { useState, useEffect } from "react";
import { usePayment } from "./PaymentContext";
import { ShoppingCart, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const StickyButton: React.FC = () => {
  const { triggerPurchase } = usePayment();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gray-150 p-4 shadow-2xl z-40 md:hidden flex items-center justify-between gap-4"
          id="mobile-sticky-bar"
        >
          {/* Left: Product & Price mini-badge */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-primary">E-book</span>
              <div className="flex text-amber-400">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
                ))}
              </div>
            </div>
            
            <div className="flex items-baseline gap-0.5 mt-0.5">
              <span className="text-[10px] font-bold text-gray-500">R$</span>
              <span className="text-xl font-display font-black text-brand-dark tracking-tight">22,89</span>
              <span className="text-[9px] text-[#22c55e] font-bold ml-1">51% OFF</span>
            </div>
          </div>

          {/* Right: Trigger Purchase Button */}
          <button
            type="button"
            onClick={triggerPurchase}
            className="flex-1 bg-brand-primary active:bg-brand-medium text-white px-5 py-3 rounded-xl text-xs font-black tracking-tight transition-all flex items-center justify-center gap-1.5 shadow-md shadow-brand-primary/20 cursor-pointer"
            id="sticky-mobile-buy-button"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-brand-cream" />
            <span>Comprar e-book</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
