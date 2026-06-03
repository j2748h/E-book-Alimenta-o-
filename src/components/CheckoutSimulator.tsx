import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, ShieldCheck, CreditCard, Sparkles, AlertCircle, 
  Copy, Check, Heart, Lock, HelpCircle 
} from "lucide-react";
import { usePayment } from "./PaymentContext";

export const CheckoutSimulator: React.FC = () => {
  const { isSimulatorOpen, setIsSimulatorOpen, paymentLink, setPaymentLink } = usePayment();
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [error, setError] = useState<string | null>(null);
  
  // States for Credit Card form
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [installments, setInstallments] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  // States for PIX
  const [pixCopied, setPixCopied] = useState(false);
  const pixCode = "00020126580014br.gov.bcb.pix0136alimentacaointeligente-2289520400005303986540522.895802BR5925Alimentacao Inteligente6009Sao Paulo62070503***6304CA3A";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2000);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
      setError("Por favor, preencha todos os campos do cartão para simular.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setPurchaseSuccess(true);
    }, 1800);
  };

  if (!isSimulatorOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xs">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative w-full max-w-2xl overflow-hidden bg-white shadow-2xl rounded-2xl sm:rounded-3xl text-gray-800 flex flex-col max-h-[92vh] sm:max-h-[88vh]"
          id="checkout-modal-container"
        >
          {/* Top banner / Info bar */}
          <div className="bg-brand-dark px-4 sm:px-6 py-2.5 sm:py-3 text-white text-xs flex flex-wrap items-center justify-between gap-1 sm:gap-2 border-b border-brand-primary/20">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-emerald-300">Modo de Simulação Ativo</span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-emerald-100/90 font-mono truncate max-w-[200px] sm:max-w-xs">
              Link Atual: {paymentLink.length > 30 ? `${paymentLink.slice(0, 30)}...` : paymentLink}
            </p>
          </div>

          {/* Close button */}
          <button 
            onClick={() => {
              setIsSimulatorOpen(false);
              setPurchaseSuccess(false);
              setError(null);
            }} 
            className="absolute top-12 sm:top-14 right-3 sm:right-4 p-1.5 sm:p-2 transition-colors rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 z-10"
            aria-label="Fechar checkout"
            id="close-checkout"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-5 overflow-y-auto flex-1">
            {/* Left side: Plan & Value Summary */}
            <div className="md:col-span-2 bg-brand-cream/60 p-6 md:p-8 flex flex-col justify-between border-r border-gray-100">
              <div>
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-primary bg-brand-tint rounded-full">
                  Sua Compra
                </span>

                <div className="mt-4 flex items-start gap-3">
                  <div className="w-12 h-16 bg-brand-medium rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center p-1 shadow-md border border-brand-accent/30 flex-shrink-0">
                    ALI INT
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm tracking-tight text-brand-dark leading-tight">
                      Alimentação Inteligente
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      O Guia Prático Para Emagrecer Gastando Pouco
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 border-t border-dashed border-gray-200 pt-4">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>E-book Digital (PDF)</span>
                    <span>R$ 47,00</span>
                  </div>
                  <div className="flex justify-between text-xs font-medium text-brand-primary">
                    <span>Desconto Especial (51% OFF)</span>
                    <span>- R$ 24,11</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Acesso Imediato</span>
                    <span className="text-emerald-600 font-medium">Grátis</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Total a pagar</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-base font-bold text-brand-dark">R$</span>
                  <span className="text-3xl font-display font-extrabold text-brand-dark tracking-tight">22,89</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-1 font-mono">Pago uma única vez, sem mensalidade.</p>

                {/* Testimonial preview inside checkout of trust */}
                <div className="mt-6 bg-white p-3 rounded-xl border border-brand-primary/10 text-[11px] italic text-gray-600 relative">
                  <span className="absolute -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-white font-bold text-[9px]">★</span>
                  “Gostei porque é simples, prático e cabe no meu orçamento!”
                </div>
              </div>
            </div>

            {/* Right side: Payment Method & Details */}
            <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
              {!purchaseSuccess ? (
                <>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <h3 className="font-display font-bold text-lg text-brand-dark">
                        Checkout Seguro
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">
                      Escolha um dos métodos de pagamento para continuar a simulação.
                    </p>

                    {/* Method Selector Tabs */}
                    <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl mb-6">
                      <button
                        type="button"
                        onClick={() => { setPaymentMethod("pix"); setError(null); }}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          paymentMethod === "pix"
                            ? "bg-white text-brand-dark shadow-xs"
                            : "text-gray-500 hover:text-brand-dark"
                        }`}
                        id="tab-pix"
                      >
                        <span className="text-[10px] px-1.5 py-0.2 bg-brand-tint text-brand-primary rounded-md font-bold">PIX</span>
                        Aprovação Imediata
                      </button>
                      <button
                        type="button"
                        onClick={() => { setPaymentMethod("card"); setError(null); }}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-tight transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          paymentMethod === "card"
                            ? "bg-white text-brand-dark shadow-xs"
                            : "text-gray-500 hover:text-brand-dark"
                        }`}
                        id="tab-card"
                      >
                        <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                        Cartão de Crédito
                      </button>
                    </div>

                    {/* PIX Form Content */}
                    {paymentMethod === "pix" && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                        id="pix-payment-content"
                      >
                        <div className="bg-emerald-50 rounded-2xl p-4 flex flex-col items-center text-center border border-emerald-100">
                          {/* Simulated QR Code */}
                          <div className="bg-white p-3 rounded-xl shadow-inner border border-gray-100 relative group">
                            <div className="w-32 h-32 flex flex-wrap p-2 items-center justify-center bg-gray-950 rounded-lg">
                              {/* Pure CSS retro QR simulation */}
                              <div className="grid grid-cols-6 gap-1 w-full h-full opacity-90">
                                {[...Array(36)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className={`rounded-xs ${
                                      (i % 3 === 0 || i < 6 || i > 30 || i % 7 === 1) && i !== 14 && i !== 22
                                        ? "bg-emerald-900" 
                                        : "bg-white"
                                    }`}
                                  ></div>
                                ))}
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl p-2">
                              <p className="text-[10px] text-brand-medium font-semibold">Exemplo real de QR Code dinâmico do PIX</p>
                            </div>
                          </div>

                          <p className="text-xs font-medium text-brand-dark mt-3">
                            Escaneie o QR Code acima ou use o Pix Copia e Cola:
                          </p>
                          <p className="text-[10px] bg-white text-gray-500 border border-gray-200 py-1.5 px-3 rounded-lg font-mono tracking-tight text-center max-w-full truncate mt-1 select-all">
                            {pixCode}
                          </p>

                          <button
                            type="button"
                            onClick={handleCopyPix}
                            className="mt-3 flex items-center gap-1.5 text-xs text-white bg-brand-primary hover:bg-brand-medium px-4 py-2 rounded-xl transition-all font-semibold active:scale-95 shadow-sm"
                            id="btn-copy-pix"
                          >
                            {pixCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                Copiado com sucesso!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                Copiar código PIX
                              </>
                            )}
                          </button>
                        </div>

                        <div className="space-y-2 text-[11px] text-gray-500">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary"></span>
                            <span>Liberado na hora: Seu e-book será enviado por e-mail imediatamente.</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary"></span>
                            <span>Sem taxas extras: Pague apenas os R$ {Number("22.89").toFixed(2).replace('.', ',')}.</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setPurchaseSuccess(true)}
                            className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-dark py-2.5 px-4 rounded-xl text-center text-xs font-bold transition-all flex items-center justify-center gap-2"
                            id="btn-simulate-pix-payment"
                          >
                            <Sparkles className="w-4 h-4 text-brand-dark" />
                            Simular Aprovação do PIX (R$ 22,89)
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {paymentMethod === "card" && (
                      <motion.form
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        onSubmit={handleCardSubmit}
                        className="space-y-4"
                        id="card-payment-form"
                      >
                        {error && (
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-red-50 text-red-700 border border-red-100 p-3 rounded-xl text-[11px] flex items-start gap-2"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{error}</span>
                          </motion.div>
                        )}
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                              Número do Cartão (Simulação)
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                maxLength={19}
                                placeholder="4532 0154 8832 9901"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="w-full text-xs bg-gray-50 focus:bg-white border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-lg py-2 px-3 pl-9 outline-hidden transition-all"
                                required
                              />
                              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                              Nome Escrito no Cartão
                            </label>
                            <input
                              type="text"
                              placeholder="MARIA DA SILVA SANTOS"
                              value={cardName}
                              onChange={(e) => setCardName(e.target.value.toUpperCase())}
                              className="w-full text-xs bg-gray-50 focus:bg-white border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-lg py-2 px-3 outline-hidden transition-all placeholder:text-gray-300"
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                                Validade
                              </label>
                              <input
                                type="text"
                                maxLength={5}
                                placeholder="12/30"
                                value={cardExpiry}
                                onChange={(e) => setCardExpiry(e.target.value)}
                                className="w-full text-xs bg-gray-50 focus:bg-white border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-lg py-2 px-3 text-center outline-hidden transition-all"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                                CVV / Código
                              </label>
                              <input
                                type="password"
                                maxLength={4}
                                placeholder="123"
                                value={cardCvv}
                                onChange={(e) => setCardCvv(e.target.value)}
                                className="w-full text-xs bg-gray-50 focus:bg-white border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-lg py-2 px-3 text-center outline-hidden transition-all"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">
                              Parcelamento
                            </label>
                            <select
                              value={installments}
                              onChange={(e) => setInstallments(e.target.value)}
                              className="w-full text-xs bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-lg py-2 px-3 outline-hidden transition-all"
                            >
                              <option value="1">1x de R$ 22,89 (Sem Juros)</option>
                              <option value="2">2x de R$ 11,85</option>
                              <option value="3">3x de R$ 8,05</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-brand-primary hover:bg-brand-medium text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:scale-100"
                          id="btn-simulate-card-payment"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Processando Simulação Segura...
                            </>
                          ) : (
                            <>
                              <Lock className="w-3.5 h-3.5 text-emerald-300" />
                              Pagar com Cartão (Simulado)
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </div>

                  {/* Trust Footer */}
                  <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between gap-2 text-[10px] text-gray-400">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Conexão SSL Criptografada</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-red-500 stroke-red-500" />
                      <span>7 dias de garantia total</span>
                    </div>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-8"
                  id="checkout-success-view"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center text-emerald-600 mb-4 animate-bounce">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-dark">
                    Compra Realizada (Simulada)!
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 max-w-sm">
                    Parabéns! Se esta fosse uma venda real, seu cliente acabaria de receber o e-book 
                    <strong className="text-brand-dark"> Alimentação Inteligente</strong> por e-mail.
                  </p>

                  <div className="bg-brand-cream/80 border border-brand-primary/20 p-4 rounded-2xl text-left text-xs text-brand-dark space-y-2 mt-6 max-w-md w-full">
                    <p className="font-bold flex items-center gap-1.5 text-brand-medium">
                      <Sparkles className="w-4 h-4 text-brand-accent fill-brand-accent" />
                      Próximo passo para vender de verdade:
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[11px]">
                      Para que as pessoas possam comprar o seu e-book de verdade e você receber os pagamentos:
                    </p>
                    <ol className="list-decimal pl-4 space-y-1 text-gray-600 text-[11px] font-medium">
                      <li>
                        Torne-se um afiliado oficial na plataforma Hoopay e ganhe <strong className="text-brand-primary">47% de comissão</strong> por venda clicando <a href="https://dashboard.hoopay.com.br/product_affiliate/976c9ed7-1a56-4d4b-9802-29403d96d412" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-bold">aqui</a>.
                      </li>
                      <li>Copie o link de afiliação ou sua própria página de checkout.</li>
                      <li>
                        Cole o link na <strong className="text-brand-primary">Barra de Configuração Superior do Site</strong> e clique em salvar.
                      </li>
                    </ol>
                  </div>

                  {/* Inline link tool */}
                  <div className="mt-6 w-full max-w-sm">
                    <label className="block text-[10px] font-bold text-left text-gray-500 uppercase mb-1">
                      Defina seu link de afiliado/vendedor agora:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ex: https://checkout.kiwify.com.br/xxxxx"
                        value={paymentLink === "COLOQUE_AQUI_SEU_LINK_DE_PAGAMENTO" ? "" : paymentLink}
                        onChange={(e) => setPaymentLink(e.target.value)}
                        className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 focus:border-brand-primary outline-hidden"
                      />
                      <button
                        onClick={() => {
                          setIsSimulatorOpen(false);
                          setPurchaseSuccess(false);
                        }}
                        className="bg-brand-primary hover:bg-brand-medium text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
