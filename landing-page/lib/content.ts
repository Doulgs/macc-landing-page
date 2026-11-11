import { Crosshair, HardHat, Layers3, Ruler, ShieldCheck, Snowflake } from "lucide-react";

export const navigation = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre nós" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export const services = [
  {
    id: "climatizacao",
    icon: Snowflake,
    shortTitle: "Climatização central",
    image: { src: "/visual/central.webp", alt: "Ilustração de unidades de tratamento de ar de um sistema central" },
    title: "Climatização e ar-condicionado central",
    description: "Instalação, manutenção e adequação de sistemas para ambientes comerciais e industriais.",
    items: [
      "Montagem e instalação de ar-condicionado central",
      "Manutenção preventiva e corretiva",
      "Ventilação e distribuição de ar",
      "Adequações e melhorias em instalações existentes",
    ],
    action: "Orçar climatização",
    message: "Olá! Conheci a MACC pelo site e gostaria de um orçamento para climatização ou ar-condicionado central.",
  },
  {
    id: "fabricacao",
    icon: Layers3,
    shortTitle: "Fabricação metálica",
    image: { src: "/visual/oficina.webp", alt: "Ilustração de uma chapa metálica sendo conformada em uma dobradeira" },
    title: "Funilaria e fabricação metálica",
    description: "Fabricação e montagem sob medida, de acordo com as especificações de cada projeto.",
    items: [
      "Dutos metálicos sob medida",
      "Calhas e componentes em chapas metálicas",
      "Portas de contenção",
      "Estruturas, fechamentos e peças personalizadas",
    ],
    action: "Orçar fabricação metálica",
    message: "Olá! Conheci a MACC pelo site e gostaria de um orçamento para fabricação ou montagem metálica sob medida.",
  },
];

export const advantages = [
  { icon: HardHat, title: "Equipe especializada", text: "Profissionais preparados para executar serviços técnicos de climatização e fabricação metálica." },
  { icon: Ruler, title: "Soluções sob medida", text: "Dimensões, materiais e montagem definidos conforme a aplicação do projeto." },
  { icon: Crosshair, title: "Qualidade de execução", text: "Atenção ao encaixe, aos acabamentos e aos detalhes técnicos de cada instalação." },
  { icon: ShieldCheck, title: "Compromisso com o projeto", text: "Organização e foco na segurança durante a execução do escopo acordado." },
];

export const projects = [
  { image: "central", category: "Climatização", title: "Instalações de ar-condicionado central", alt: "Ilustração de unidades de tratamento de ar em uma sala de máquinas" },
  { image: "ventilacao", category: "Distribuição de ar", title: "Dutos e sistemas de ventilação", alt: "Ilustração de dutos galvanizados suspensos em um galpão industrial" },
  { image: "oficina", category: "Funilaria industrial", title: "Fabricação em chapas metálicas", alt: "Ilustração de um técnico operando uma dobradeira de chapas" },
  { image: "componentes", category: "Sob medida", title: "Estruturas e componentes personalizados", alt: "Ilustração de portas e painéis metálicos em uma oficina" },
];

export const steps = [
  { title: "Contato inicial", text: "Você apresenta a necessidade e o tipo de serviço que procura." },
  { title: "Análise do projeto", text: "A MACC avalia as características do local e as especificações técnicas." },
  { title: "Proposta personalizada", text: "A equipe define a solução e prepara o orçamento conforme o escopo." },
  { title: "Execução", text: "Com a proposta aprovada, a MACC realiza os serviços combinados." },
];

export const questions = [
  { question: "A MACC faz instalação e manutenção?", answer: "Sim. A MACC monta e instala sistemas de ar-condicionado central e realiza manutenção preventiva e corretiva. A equipe também avalia adequações em sistemas de ventilação e distribuição de ar." },
  { question: "Vocês fabricam peças metálicas sob medida?", answer: "Sim. A MACC fabrica dutos, calhas, portas de contenção, fechamentos, estruturas e componentes metálicos de acordo com as especificações do projeto." },
  { question: "A MACC atende comércio e indústria?", answer: "Sim. A equipe atende projetos comerciais e industriais de climatização, ventilação, funilaria e montagem metálica." },
  { question: "Como faço para solicitar um orçamento?", answer: "Use o botão de orçamento para falar com a equipe pelo WhatsApp. Informe o serviço desejado, a cidade e uma breve descrição do que você precisa." },
  { question: "Que informações ajudam na análise do projeto?", answer: "Informe o tipo de ambiente, as dimensões aproximadas, o uso do espaço e o serviço desejado. Se tiver fotos, plantas ou especificações, compartilhe esse material com a equipe." },
];
