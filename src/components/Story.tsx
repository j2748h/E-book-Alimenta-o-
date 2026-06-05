import React from "react";
import { Heart, HeartHandshake, Shield, Sparkles, ArrowRight, UserCheck, Smile } from "lucide-react";
import { usePayment } from "./PaymentContext";

export const Story: React.FC = () => {
  const { triggerPurchase } = usePayment();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-[#fafdfb] to-[#edf6f1] overflow-hidden" id="proposito">
      {/* Dynamic background memoir textures */}
      <div className="absolute inset-0 bg-[#0c6946]/[0.01] bg-[radial-gradient(#0c694605_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center">
          
          {/* Left Column: Styled Text Card (No Image as requested) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            <div className="w-full max-w-[420px] bg-[#0c6946] text-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_24px_50px_rgba(6,30,20,0.15)] relative overflow-hidden border border-emerald-500/20 text-left">
              {/* Background gradient splash */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent opacity-11 rounded-full blur-2xl"></div>

              {/* Tag/Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-brand-accent text-[11px] font-black uppercase tracking-widest select-none mb-6">
                <Heart className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
                <span>Feito por pessoas reais 💚</span>
              </div>

              {/* Title Section */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-accent block">
                  Reflexão Sincera
                </span>
                
                <blockquote className="text-base sm:text-lg font-display font-medium italic leading-relaxed text-emerald-50 flex flex-col gap-2">
                  <span>
                    "Quantas vezes você deixou de cuidar de você porque achava que comer saudável significava gastar fortunas no mercado?"
                  </span>
                </blockquote>
              </div>



            </div>

          </div>

               {/* Right Column: Emphathy & Heartfelt Storytelling (Persuasive copywriting) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0c6946] bg-brand-tint px-4 py-1.5 rounded-full select-none border border-brand-primary/10 inline-block shadow-2xs">
              História de Superação Real
            </span>

            <div className="space-y-4">
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
                Por trás deste guia existe uma história que eu nunca pensei que contaria publicamente
              </h2>
              
              <h3 className="font-display font-bold text-lg sm:text-xl text-brand-primary leading-relaxed">
                Há pouco mais de 9 meses, eu pesava 158 kg.
              </h3>
            </div>

            <div className="text-sm sm:text-base text-gray-650 space-y-5 leading-relaxed font-sans text-left">
              <p className="font-medium opacity-95">
                Não era só o peso na balança que pesava — era a culpa, o cansaço, a falta de disposição para fazer coisas simples. Subir uma escada era difícil. Me olhar no espelho era difícil. E o pior: eu via minha família passando pelo mesmo.
              </p>
              <p className="font-medium opacity-95">
                Meus pais estavam com a saúde fragilizada. Colesterol alto, pressão descontrolada, cansaço constante. O médico foi direto: <strong className="text-brand-primary">precisam mudar a alimentação urgentemente</strong>. Mas quando fomos ao supermercado procurar os tais alimentos "saudáveis", "integrais" e "fit" que as embalagens prometiam — o preço derrubou qualquer esperança. Não fechava no orçamento. Simples assim.
              </p>
              <p className="font-medium opacity-95">
                Foi aí que eu decidi que a situação não podia continuar. Não por força de vontade sobrenatural. Foi por necessidade mesmo. Eu não tinha dinheiro para academia, nem para nutricionista particular, nem para comprar produto importado. Tinha ovos, feijão, frango, verdura de feira e muito tempo de pesquisa nas madrugadas.
              </p>
              <p className="font-medium opacity-95">
                Passei semanas estudando, testando, errando e ajustando. Muita coisa não funcionou de primeira. Teve semana que eu achei que estava indo bem e a balança não se mexeu. Teve dia que eu comi errado e me senti um fracasso. Mas continuei. Aos poucos, a alimentação da casa foi mudando. Não de uma vez — devagar, uma refeição por vez, uma semana por vez.
              </p>

              {/* Success Bullets in Slate Card */}
              <div className="bg-[#f0f9f3] p-6 rounded-[2rem] border border-brand-primary/10 space-y-3">
                <h4 className="font-display font-bold text-brand-dark text-base">
                  Em 6 meses aconteceu algo que eu não esperava tão rápido:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm font-medium text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">✔</span>
                    <span><strong>Emagreci de forma consistente</strong> saindo de 158 kg para um peso que me permite viver com mais disposição e saúde.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">✔</span>
                    <span><strong>Meus pais melhoraram os exames</strong> de colesterol, glicose e pressão arterial de forma espetacular.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">✔</span>
                    <span><strong>A família inteira passou a comer melhor</strong>, gastando o mesmo ou até menos do que antes no supermercado.</span>
                  </li>
                </ul>
                <p className="text-xs text-brand-primary/90 font-bold mt-2">
                  Não foi mágica. Foi método. E foi lento. Mas foi real.
                </p>
              </div>

              <p className="font-medium opacity-95">
                Esse guia é exatamente o que eu gostaria de ter tido quando comecei. Tudo que aprendi nesse processo — os acertos, os erros, as combinações de alimentos baratos que funcionam de verdade — está aqui, organizado de forma simples para qualquer pessoa conseguir aplicar.
              </p>
              <p className="font-medium opacity-95">
                Se eu, com 158 kg, sem dinheiro para academia e com uma família inteira para ajudar, consegui — <strong className="text-zinc-900">acredito que você também consegue.</strong>
              </p>
              
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-150">
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-bold italic">Escrito com a honestidade de quem viveu essa história na cozinha de casa.</p>
                  <p className="text-sm font-black text-brand-primary mt-1">Com carinho — O Autor 💙</p>
                </div>
              </div>
            </div>

            {/* Manipulative/Honest call-to-action banner for high conversion */}
            <div className="bg-brand-cream/60 p-6 rounded-[2rem] border border-brand-accent/30 text-left space-y-4 my-6 shadow-2xs">
              <h4 className="text-sm font-black text-brand-dark flex items-center gap-1.5 uppercase tracking-wide">
                <span>💡</span>
                Uma escolha honesta para a sua vida:
              </h4>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-semibold">
                Adquirir este e-book por apenas <strong className="text-brand-primary">R$ 22,89</strong> é investir em informação que vai economizar muito mais do que isso nas suas feiras ao longo do ano — e ainda apoiar uma família real, não uma grande corporação.
              </p>
              <p className="text-xs text-[#0a5236] font-bold">
                Sua saúde e a da sua família merecem esse cuidado.
              </p>
              
              <div className="pt-3 border-t border-brand-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] text-gray-400 font-bold">
                  Acesso imediato e seguro via e-mail.
                </span>
                <button
                  onClick={triggerPurchase}
                  className="w-full sm:w-auto text-center bg-[#0a5236] hover:bg-brand-primary active:scale-97 text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="story-inner-buy-btn"
                >
                  <span>Garantir Guia & Começar Agora</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* List of values (Beautifully redesigned) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-t border-gray-150 pt-6">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="p-2 rounded-xl bg-pink-50 text-pink-600 mt-0.5 flex-shrink-0">
                  <HeartHandshake className="w-4 h-4 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-brand-dark leading-none">Comunidade Viva 💚</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5 font-medium leading-relaxed">Não te vendemos um livro e sumimos. Você faz parte de um ideal de saúde real.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5 flex-shrink-0">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-brand-dark leading-none">Independência Editorial ✍️</h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5 font-medium leading-relaxed font-sans">Escrito com a honestidade de quem viveu a dor na cozinha de casa.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Narrative styled dividing brand badge lines */}
      <div className="absolute bottom-0 inset-x-0 flex items-center justify-center translate-y-1/2 pointer-events-none z-10 w-full">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[30px] md:h-[45px] text-white fill-current translate-y-[1px]">
          <path d="M0,40 C320,80 640,-20 960,40 C1120,60 1280,60 1440,20 L1440,60 L0,60 Z"></path>
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5 py-2 rounded-full border border-emerald-500/15 flex items-center gap-1.5 text-[#0c6946] text-[10px] font-black uppercase tracking-widest shadow-2xs z-20">
          <span>💰</span>
          <span>Simulação de Poupança & Compra</span>
        </div>
      </div>
    </section>
  );
};

