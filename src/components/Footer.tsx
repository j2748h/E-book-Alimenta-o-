import React from "react";
import { BookOpen, ShieldCheck, Heart, AlertTriangle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-zinc-300 py-12 md:py-16 border-t border-brand-primary/10" id="global-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white font-bold">
                <BookOpen className="w-4 h-4 text-brand-cream" />
              </div>
              <span className="font-display font-black text-white text-base tracking-tight leading-none">
                Alimentação <span className="text-brand-accent">Inteligente</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-sans">
              Um projeto dedicado a democratizar a alimentação saudável no Brasil. Criado com dedicação e propósito familiar para caber na nossa realidade financeira.
            </p>
          </div>

          {/* Quick Scroll Anchors Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Páginas</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-brand-accent transition-colors">Início</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-brand-accent transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#conteudo" className="hover:text-brand-accent transition-colors">O que você vai ler</a>
              </li>
              <li>
                <a href="#habitos" className="hover:text-brand-accent transition-colors">Dicas Práticas</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-brand-accent transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          {/* Right Trust seals and digital symbols */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Segurança</h4>
            
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 bg-brand-medium/30 p-2.5 rounded-lg border border-brand-primary/20">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                <span>Compra protegida com criptografia SSL avançada.</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-medium/30 p-2.5 rounded-lg border border-brand-primary/20">
                <Heart className="w-4 h-4 text-red-400 stroke-red-400" />
                <span>7 dias de garantia incondicional e total.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Informational Health Consult & Affiliate Disclaimer (Crucial for high compliance!) */}
        <div className="border-t border-white/5 pt-8 space-y-4 text-[10px] text-zinc-500 leading-normal font-sans">
          <div className="flex gap-2 items-start">
            <AlertTriangle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
            <p>
              <strong>Atenção Médica Recomendada:</strong> As informações contidas neste e-book não substituem o aconselhamento, diagnóstico ou tratamento de profissionais de saúde, nutricionistas ou médicos registrados. Sempre consulte o seu profissional clínico antes de iniciar qualquer plano de exercícios físicos ou modificação profunda em seu cardápio alimentar habitual.
            </p>
          </div>
          
          <p className="text-center md:text-left">
            Este site é um modelo virtual de vendas customizável de alta taxa de conversão desenvolvido e calibrado para as regras do programa nacional de afiliados e infoprodutores do Brasil. Os resultados individuais de emagrecimento ou bem-estar podem variar sensivelmente com base nos fatores metabólicos, disciplina pessoal e histórico de saúde de cada usuário.
          </p>

          <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-[10px]">
            <p>© {new Date().getFullYear()} Alimentação Inteligente. Todos os direitos reservados. Feito com amor.</p>
            <div className="flex gap-4">
              <span>Termos de Uso</span>
              <span>Políticas de Privacidade</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
