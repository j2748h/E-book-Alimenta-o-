export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  details: string[];
}

export interface PracticalTip {
  id: string;
  title: string;
  description: string;
  badge: string;
  emoji: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  location: string;
  avatarUrl: string;
}

export const benefitsData: Benefit[] = [
  {
    id: "eat-better",
    title: "Aprenda a comer melhor",
    description: "Descubra como combinar ingredientes simples e nutritivos para criar refeições ricas em vitaminas e minerais sem mistério.",
    iconName: "Apple",
  },
  {
    id: "organize-meals",
    title: "Organize sua alimentação",
    description: "Métodos práticos de planejamento semanal de marmitas e porções, economizando tempo precioso no seu dia a dia.",
    iconName: "CalendarDays",
  },
  {
    id: "boost-energy",
    title: "Melhore sua disposição",
    description: "Diga adeus à fadiga constante controlando picos de glicemia com alimentos que liberam energia aos poucos.",
    iconName: "Zap",
  },
  {
    id: "sleep-well",
    title: "Durma melhor e recupere o corpo",
    description: "Compreenda a forte ligação entre o relógio biológico intestinal e o sono profundo restaurador de alta qualidade.",
    iconName: "Moon",
  },
  {
    id: "healthy-habits",
    title: "Crie hábitos saudáveis",
    description: "Passos graduais e realistas para mudar sua mentalidade em relação à comida, sem neuras ou privações extremas.",
    iconName: "Smile",
  },
  {
    id: "save-money",
    title: "Economize nas compras",
    description: "Guia completo de seleção de alimentos sazonais, marcas inteligentes e compras a granel que poupam seu bolso.",
    iconName: "DollarSign",
  },
];

export const chaptersData: Chapter[] = [
  {
    id: 1,
    title: "Alimentação saudável sem dietas caras",
    description: "Aprenda a focar no que realmente importa: comida de verdade que custa pouco e nutre muito.",
    details: [
      "Substitutos baratos para superalimentos caros da moda.",
      "Como montar um prato nutricionalmente perfeito com arroz, feijão e vegetais.",
      "Guia prático das proteínas acessíveis (ovos, cortes magros e vegetais)."
    ],
  },
  {
    id: 2,
    title: "Exercícios simples para fazer em casa",
    description: "Ative seu metabolismo sem precisar pagar mensalidades caras de academia.",
    details: [
      "Treinos de peso corporal de 15 minutos adaptáveis para qualquer idade.",
      "A importância do movimento diário e como implementá-lo sem sofrimento.",
      "Como treinar flexibilidade e força usando a estrutura do seu lar."
    ],
  },
  {
    id: 3,
    title: "Sono de qualidade e recuperação",
    description: "Aprenda a reidratar seu cérebro e restaurar suas células todas as noites.",
    details: [
      "Higiene do sono passo a passo para um descanso profundo.",
      "Chás e alimentos calmantes recomendados antes de deitar.",
      "Como o sono desregulado ativa hormônios do apetite e gera ganho de peso."
    ],
  },
  {
    id: 4,
    title: "Controle da fome emocional",
    description: "Aprenda a diferenciar a fome real da necessidade de conforto psíquico.",
    details: [
      "Técnicas de respiração e mindfulness para desarmar a ansiedade.",
      "Gatilhos comuns que nos fazem assaltar a geladeira e como superá-los.",
      "Substituições inteligentes para as fissuras de doces e salgados."
    ],
  },
  {
    id: 5,
    title: "Plano de 30 dias para criar hábitos",
    description: "Um cronograma de pequenas vitórias diárias para reprogramar sua rotina de vez.",
    details: [
      "Metas semanais graduais e fáceis de bater.",
      "Rastreador visual de constância para manter você no rumo certo.",
      "Como lidar com deslizes temporários sem abandonar o progresso."
    ],
  },
  {
    id: 6,
    title: "Lista de compras econômica",
    description: "O mapa do tesouro para encher o carrinho sem esvaziar a conta bancária.",
    details: [
      "Lista básica de supermercado organizada por categorias essenciais.",
      "Truques psicológicos dos supermercados que fazem você gastar mais.",
      "Sazonalidade: calendário dos meses mais baratos de frutas e legumes no Brasil."
    ],
  },
];

export const practicalTipsData: PracticalTip[] = [
  {
    id: "water",
    title: "Beba mais água ao longo do dia",
    description: "Mantenha uma garrafa sempre visível no trabalho. A desidratação leve é frequentemente confundida com fome e causa cansaço extremo.",
    badge: "Hidratação",
    emoji: "💧",
    imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "chew",
    title: "Mastigue devagar",
    description: "Sua saciedade demora cerca de 20 minutos para sinalizar ao cérebro. Saboreie cada garfada e facilite a digestão natural.",
    badge: "Presença",
    emoji: "🍽️",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "movement",
    title: "Inclua caminhadas e movimentos",
    description: "Suba escadas, faça pausas ativas a cada hora e caminhe após as refeições. Dez minutos diários contam muito para o coração.",
    badge: "Atividade",
    emoji: "🚶",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "sleep",
    title: "Durma melhor para ter energia",
    description: "Desligue telas 1 hora antes de dormir. O sono regula os hormônios Grelina e Leptina, fundamentais para controlar a compulsão alimentar.",
    badge: "Descanso",
    emoji: "🌙",
    imageUrl: "https://images.unsplash.com/photo-1511295742364-92767fa62d9f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "planning",
    title: "Planeje suas refeições",
    description: "Escolha um dia da semana para preparar as bases do seu menu. Ter alimentos saudáveis prontos evita pedir fast-food caro por cansaço.",
    badge: "Economia & Foco",
    emoji: "📝",
    imageUrl: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80&w=600",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "mariana",
    name: "Mariana Souza",
    role: "34 anos",
    text: "Comprei porque o preço era acessível e gostei bastante da linguagem. Não parece aqueles materiais cheios de termos difíceis. Consegui aplicar várias dicas já na primeira semana e até comecei a organizar melhor minhas refeições. Se pudesse sugerir algo para uma próxima versão, eu adicionaria mais exemplos de pratos prontos para café da manhã, almoço e jantar. Acho que ajudaria quem não tem muita criatividade na cozinha. No geral, valeu muito a pena pelo valor.",
    rating: 2,
    location: "São Paulo - SP",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "jorge",
    name: "Jorge Mendes",
    role: "52 anos",
    text: "O que mais gostei foi a parte sobre hábitos e sono. Eu procurava algo apenas sobre emagrecimento, mas percebi que dormir melhor e me organizar ajudou muito mais do que eu imaginava. Uma ideia para melhorar ainda mais seria incluir alguns vídeos ou links para demonstrações dos exercícios. Às vezes eu ficava na dúvida se estava executando o movimento corretamente. Mesmo assim, achei o conteúdo muito útil e fácil de seguir.",
    rating: 4,
    location: "Belo Horizonte - MG",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "carla",
    name: "Carla Pinheiro",
    role: "41 anos",
    text: "Gostei porque o guia é realista. Ele não manda comprar alimentos caros nem seguir dietas impossíveis. As dicas cabem no orçamento da minha família. A única sugestão que eu daria seria adicionar uma tabela de substituições. Por exemplo: se a pessoa não tiver aveia, banana ou batata-doce em casa, quais alimentos parecidos ela pode usar no lugar. Também seria interessante ter um WhatsApp ou canal para tirar dúvidas rápidas dos leitores. Achei um excelente começo e espero ver futuras atualizações.",
    rating: 3,
    location: "Curitiba - PR",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
];
