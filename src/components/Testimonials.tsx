import React, { useState } from "react";
import { testimonialsData } from "../data";
import { Star, MessageCircle, Quote, X, CheckCircle2, Send, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Testimonials: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [liked, setLiked] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [rating, setRating] = useState<number>(5);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name || !age || !state || !city || !liked || !suggestion) {
      setErrorMsg("Por favor, preencha todos os campos do formulário.");
      return;
    }

    setIsSubmitting(true);

    // Simulate clean, fast loading animation as requested
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // Reset state values
    setName("");
    setAge("");
    setState("");
    setCity("");
    setLiked("");
    setSuggestion("");
    setRating(5);
    setSubmitted(false);
    setIsSubmitting(false);
    setErrorMsg("");
  };

  return (    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#f7faf8] to-white border-y border-gray-100 relative" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#ca8a04] bg-amber-500/10 px-4 py-1.5 rounded-full select-none inline-flex items-center gap-1.5 border border-amber-500/15 shadow-2xs">
            <span>★</span>
            <span>Aprovado por quem pratica</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight mt-4">
            Depoimentos de quem já aprovou
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-4 font-sans max-w-xl mx-auto leading-relaxed">
            Descubra histórias reais de pessoas de todo o Brasil que transformaram seu prato diário sem comprometer o orçamento.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[2rem] p-6 md:p-8 border border-emerald-950/[0.04] hover:border-brand-primary/20 relative shadow-xs hover:shadow-[0_20px_45px_rgba(16,126,84,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-${testimonial.id}`}
            >
              {/* Quotation ornament */}
              <div className="absolute right-6 top-6 text-brand-tint pointer-events-none">
                <Quote className="w-12 h-12 fill-brand-tint opacity-35 stroke-1" />
              </div>

              {/* Main review content */}
              <div>
                {/* Stars Rating indicator */}
                <div className="flex items-center gap-0.5 text-brand-accent mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-brand-accent text-brand-accent stroke-1" 
                    />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i + testimonial.rating} 
                      className="w-4 h-4 text-gray-200 stroke-1" 
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic pr-4 font-medium opacity-95">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Profile card footer */}
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-tint text-brand-primary flex items-center justify-center font-display font-semibold select-none text-xs">
                  {testimonial.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-display font-black text-xs md:text-sm text-brand-dark leading-none">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-gray-400">
                    <span className="font-bold text-brand-primary">{testimonial.role}</span>
                    <span>•</span>
                    <span className="font-semibold text-gray-500">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Trust bar & Action call for reviews */}
        <div className="mt-12 flex flex-col gap-8 items-center">
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-brand-accent hover:bg-yellow-400 text-brand-dark font-black rounded-2xl transition-all shadow-md hover:shadow-brand-accent/20 text-sm flex items-center gap-2.5 cursor-pointer relative overflow-hidden group"
            id="btn-leave-testimonial"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            <MessageCircle className="w-5 h-5 text-brand-dark fill-brand-dark/10" />
            <span>Dar Depoimento ou Sugestão</span>
          </motion.button>

          <div className="w-full bg-white rounded-[2rem] border border-gray-150 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xs">
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl md:text-3xl font-display font-black text-brand-primary">100%</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5 font-bold">Seguro & Digital</p>
            </div>
            <div className="border-l border-gray-150 flex flex-col justify-center items-center">
              <p className="text-2xl md:text-3xl font-display font-black text-brand-primary">21+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5 font-bold">Famílias Impactadas</p>
            </div>
            <div className="border-l border-gray-150 flex flex-col justify-center items-center">
              <p className="text-2xl md:text-3xl font-display font-black text-brand-primary">7 dias</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5 font-bold">Garantia Total</p>
            </div>
            <div className="border-l border-gray-150 flex flex-col justify-center items-center">
              <span className="text-[10px] text-gray-400 line-through leading-none">R$ 47,99</span>
              <p className="text-xl md:text-3xl font-display font-black text-brand-primary leading-tight">R$ 22,89</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5 font-bold">Sem Taxas Ocultas</p>
            </div>
          </div>
        </div>

      </div>

      {/* Testimonial Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xs">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl text-gray-800 flex flex-col max-h-[92vh] overflow-hidden"
              id="testimonial-modal-card"
            >
              {/* Header */}
              <div className="bg-brand-dark px-5 py-4 text-white flex items-center justify-between border-b border-white/5 flex-shrink-0 select-none">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
                  <span className="font-display font-bold text-sm tracking-tight">Dar Meu Depoimento / Sugestão</span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Voltar para o site"
                  id="close-testimonial-modal"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Scrollable Container */}
              <div className="overflow-y-auto p-5 sm:p-6 flex-1 text-left">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-100 font-semibold leading-relaxed">
                        ⚠️ Houve um problema: {errorMsg}
                      </div>
                    )}

                    {/* Inputs Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                          Meu Nome Completo
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Mariana Souza"
                          className="w-full bg-gray-50 text-gray-800 text-xs rounded-xl px-3 py-2.5 border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-hidden transition-all placeholder-gray-400 font-medium"
                          maxLength={50}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                          Minha Idade
                        </label>
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          placeholder="Ex: 34"
                          className="w-full bg-gray-50 text-gray-800 text-xs rounded-xl px-3 py-2.5 border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-hidden transition-all placeholder-gray-400 font-medium"
                          min="1"
                          max="120"
                        />
                      </div>
                    </div>

                    {/* Inputs Row 2 */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                          Cidade
                        </label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Ex: Santos"
                          className="w-full bg-gray-50 text-gray-800 text-xs rounded-xl px-3 py-2.5 border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-hidden transition-all placeholder-gray-400 font-medium"
                          maxLength={40}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                          Estado (UF)
                        </label>
                        <input
                          type="text"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="Ex: SP"
                          className="w-full bg-gray-50 text-gray-800 text-xs rounded-xl px-3 py-2.5 border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-hidden transition-all placeholder-gray-400 font-medium"
                          maxLength={2}
                        />
                      </div>
                    </div>

                    {/* Custom Star Rating selection from 0 to 5 */}
                    <div>
                      <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1.5">
                        Quantas estrelas você dá para o e-book? ({rating} de 5)
                      </label>
                      <div className="flex items-center gap-1 bg-gray-50 p-2 rounded-xl border border-gray-100 max-w-fit">
                        {[0, 1, 2, 3, 4, 5].map((starValue) => {
                          const isActive = rating >= starValue && starValue > 0;
                          return (
                            <button
                              type="button"
                              key={starValue}
                              onClick={() => setRating(starValue)}
                              className="p-1 hover:scale-115 transition-transform cursor-pointer"
                              title={`${starValue} estrelas`}
                            >
                              {starValue === 0 ? (
                                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-lg border leading-none ${rating === 0 ? 'bg-red-500 text-white border-red-500' : 'bg-gray-105 text-gray-500 border-gray-200'}`}>
                                  0 Estrelas
                                </span>
                              ) : (
                                <Star
                                  className={`w-5 h-5 ${
                                    isActive
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-gray-300 stroke-1"
                                  }`}
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Interactive review text */}
                    <div>
                      <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                        O que você mais gostou no material?
                      </label>
                      <textarea
                        rows={3}
                        value={liked}
                        onChange={(e) => setLiked(e.target.value)}
                        placeholder="Ex: Gostei muito das dicas realistas que não sugerem ingredientes caros e que ajudam a economizar..."
                        className="w-full bg-gray-50 text-gray-800 text-xs rounded-xl px-3 py-2 border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-hidden transition-all placeholder-gray-400 font-medium resize-none"
                        maxLength={500}
                      />
                    </div>

                    {/* Suggestions */}
                    <div>
                      <label className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">
                        O que você criaria ou adicionaria para melhorar?
                      </label>
                      <textarea
                        rows={2}
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        placeholder="Ex: Sugiro criarem uma tabela simples de substituições rápidas no próximo volume..."
                        className="w-full bg-gray-50 text-gray-800 text-xs rounded-xl px-3 py-2 border border-gray-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-hidden transition-all placeholder-gray-400 font-medium resize-none"
                        maxLength={500}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-200 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#1c1917] border-t-transparent rounded-full animate-spin"></div>
                            <span>Enviando Depoimento...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 fill-current" />
                            <span>Enviar Depoimento para Análise</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                ) : (
                  /* Success Frame */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-505 flex items-center justify-center border border-emerald-100">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500 animate-bounce" />
                    </div>
                    
                    <h3 className="font-display font-black text-lg text-brand-dark leading-tight">
                      Agradecemos o seu envio!
                    </h3>
                    
                    <p className="text-xs text-gray-650 leading-relaxed max-w-sm mx-auto">
                      O depoimento do cliente está sendo carregado e passará por uma análise até ser adicionado ao site.
                    </p>

                    <div className="pt-4 max-w-xs w-full">
                      <button
                        onClick={handleClose}
                        className="w-full py-2.5 bg-brand-dark text-white rounded-xl text-xs font-bold transition-all hover:bg-brand-primary active:scale-95 cursor-pointer"
                      >
                        Voltar para a página principal
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
