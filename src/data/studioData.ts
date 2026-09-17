export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  cref?: string;
  instagram?: string;
  photo: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle?: string;
  roleOrContext: string;
  text: string;
  rating: number;
  source: 'Google' | 'Instagram';
  date?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  forWhom: string;
  benefits: string[];
  ctaLabel: string;
  whatsappMessage: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Atendimento' | 'Estrutura' | 'Convênios' | 'Metodologia';
}

export const BASE_PATH = '/StudioBrosFitness';

export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export const STUDIO_DATA = {
  name: 'STUDIO BROS FITNESS',
  brandName: 'Studio Bros Fitness',
  subtitle: 'Personal Trainer & Treinamento Personalizado',
  legalName: 'E. Lidio de Oliveira Santos e Cia Ltda - ME',
  cnpj: '55.298.299/0001-02',
  foundedDate: '27/05/2024',

  // Structured Legal Object
  legal: {
    companyName: 'E. Lidio de Oliveira Santos e Cia Ltda - ME',
    cnpj: '55.298.299/0001-02',
    cnpjFormatted: '55.298.299/0001-02',
    tradeName: 'Studio Bros Fitness',
  },
  
  // Confirmed Contact Details
  phoneLandline: '(67) 3253-2353',
  phoneWhatsApp: '(67) 99249-3221',
  whatsappRaw: '5567992493221',
  email: 'brosfitnessadm@gmail.com',
  instagram: '@brosfitnesscg',
  instagramUrl: 'https://www.instagram.com/brosfitnesscg/',

  // Contact helper
  contact: {
    phoneFormatted: '(67) 3253-2353',
    whatsappFormatted: '(67) 99249-3221',
    email: 'brosfitnessadm@gmail.com',
  },

  // Social helper
  social: {
    instagram: '@brosfitnesscg',
    instagramUrl: 'https://www.instagram.com/brosfitnesscg/',
  },
  
  // Confirmed Location
  address: {
    street: 'Rua Vitório Zeolla',
    number: '891',
    neighborhood: 'Carandá Bosque',
    city: 'Campo Grande',
    state: 'MS',
    postalCode: '79032-360',
    zip: '79032-360',
    fullFormatted: 'Rua Vitório Zeolla, 891 - Carandá Bosque, Campo Grande - MS, 79032-360',
    googleMapsUrl: 'https://maps.google.com/?q=Rua+Vitorio+Zeolla+891+Caranda+Bosque+Campo+Grande+MS',
    wazeUrl: 'https://waze.com/ul?q=Rua+Vitorio+Zeolla+891+Campo+Grande',
    coordinates: {
      lat: -20.4418,
      lng: -54.5822,
    },
  },
  
  // Working Hours
  hours: {
    weekdays: 'Segunda a Sexta: 06:00 às 21:00',
    saturday: 'Sábado: 07:00 às 12:00',
    sunday: 'Domingo: Fechado',
    note: 'Atendimento estritamente com horário pré-agendado para garantir exclusividade e ambiente reservado.',
    special: 'Atendimento estritamente com horário pré-agendado',
  },

  // Head Coach
  headCoach: {
    name: 'Elton Lidio de Oliveira Santos',
    title: 'Sócio-Proprietário & Especialista em Fisiologia do Exercício',
  },

  // Ratings
  ratingGoogle: {
    score: '5.0',
    total: 48,
  },

  // Taglines & Philosophy directly from brand communications
  taglines: {
    hero: 'Atendimento próximo. Ambiente reservado.',
    manifestoBadge: 'Constância é Luxo',
    manifestoLead: 'Não é sobre excessos. É sobre presença.',
    manifestoBody: 'Cuidar do corpo com regularidade, respeito e consciência é uma escolha de quem entende que saúde não é urgência, é patrimônio. No Bros, o tempo trabalha a favor de quem permanece.',
    quote: 'Quem tem direção não precisa de pressa.',
    welcome: 'O tipo de lugar que parece ter sido feito para você.',
    vitality: 'Sua saúde eleva seu potencial.',
  },

  // Key Verified Metrics
  metrics: [
    { value: '5.0', label: 'Avaliação Google', sublabel: 'Excelência unânime' },
    { value: '100%', label: 'Acompanhamento', sublabel: 'Personal dedicado em cada sessão' },
    { value: 'Zero', label: 'Superlotação', sublabel: 'Ambiente boutique sem filas de aparelho' },
    { value: '100%', label: 'Prescrição Científica', sublabel: 'Baseada em Fisiologia do Exercício' },
  ],

  // Verified Team
  trainers: [
    {
      id: 'elton',
      name: 'Prof. Elton Lidio',
      role: 'Sócio-Proprietário & Responsável Técnico',
      specialty: 'Especialista em Fisiologia do Exercício',
      instagram: '@eltonpersonal10',
      photo: getAssetPath('/assets/images/bros_img_15.jpg'),
      bio: 'Atleta, especialista em Fisiologia do Exercício e sócio-fundador do Studio Bros. Conduz avaliações corporais minuciosas e desenha periodizações que unem ciência, biomecânica e longevidade.',
    },
    {
      id: 'nicolly',
      name: 'Prof.ª Nicolly',
      role: 'Personal Trainer',
      specialty: 'Treinamento Feminino & Força',
      instagram: '@nicolly_souza',
      photo: getAssetPath('/assets/images/curated/feed_2.jpg'),
      bio: 'Especialista em acompanhamento postural, hipertrofia e fortalecimento funcional, com olhar atento à execução motora de cada movimento.',
    },
    {
      id: 'matheus',
      name: 'Prof. Matheus',
      role: 'Personal Trainer',
      specialty: 'Condicionamento Físico & Mobilidade',
      instagram: '@matheusdornelesjj',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
      bio: 'Foco em ganho de massa magra, flexibilidade e desenvolvimento de força funcional para rotinas exigentes.',
    },
    {
      id: 'augusto',
      name: 'Prof. Augusto',
      role: 'Personal Trainer',
      specialty: 'Biomecânica & Performance',
      instagram: '@augustochiella',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
      bio: 'Orientação personalizada com ênfase em correção técnica, prevenindo lesões e acelerando a evolução do aluno.',
    },
    {
      id: 'alex',
      name: 'Prof. Alex',
      role: 'Personal Trainer',
      specialty: 'Reabilitação Ativa & Força',
      instagram: '@alexdecastropersonaltrainer',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
      bio: 'Profissional dedicado ao treino de força consciente, melhora da postura e condicionamento físico para todas as idades.',
    },
    {
      id: 'ze',
      name: 'Prof. Zé',
      role: 'Personal Trainer',
      specialty: 'Musculação Personalizada & Resistência',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
      bio: 'Atendimento próximo focado no aluno, garantindo motivação constante, consistência e respeito ao ritmo biológico de cada um.',
    },
    {
      id: 'saul',
      name: 'Prof. Saul',
      role: 'Personal Trainer',
      specialty: 'Treinamento de Força & Hipertrofia',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
      bio: 'Acompanhamento rigoroso em sala de treino, ajustando cargas e cadências para estímulo neuromuscular eficiente.',
    },
    {
      id: 'marcelo',
      name: 'Prof. Marcelo',
      role: 'Personal Trainer',
      specialty: 'Condicionamento Metabólico & Saúde',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
      bio: 'Foco na integração de exercício físico como pilar de qualidade de vida, disposição diária e bem-estar integral.',
    },
  ] as Trainer[],

  // Verified Services & Programs
  services: [
    {
      id: 'personal-presencial',
      title: 'Personal Trainer Presencial',
      category: 'Exclusividade & Acompanhamento',
      shortDesc: 'Sessões de treino 100% acompanhadas por treinador qualificado em ambiente reservado.',
      fullDesc: 'O coração do Studio Bros. Diferente de academias tradicionais onde você disputa halteres ou treina desacompanhado, no Bros cada minuto da sua sessão tem a atenção técnica integral do seu treinador, corrigindo postura, controlando intervalos e ajustando estímulos.',
      forWhom: 'Quem busca resultado com segurança, valoriza privacidade e não quer perder tempo com treinos ineficientes.',
      benefits: [
        'Acompanhamento do início ao fim do treino',
        'Ambiente sem superlotação e sem filas de espera',
        'Correção biomecânica em tempo real',
        'Controle preciso de carga, cadência e descanso',
      ],
      ctaLabel: 'Consultar Horários Disponíveis',
      whatsappMessage: 'Olá! Gostaria de consultar a disponibilidade de horários para treino com Personal Trainer no Studio Bros.',
      icon: 'Dumbbell',
    },
    {
      id: 'avaliacao-fisiologica',
      title: 'Avaliação Física & Fisiologia',
      category: 'Ciência & Diagnóstico',
      shortDesc: 'Diagnóstico corporal minucioso com adipometria, bioimpedância e análise funcional.',
      fullDesc: '“Sem avaliação, você treina no escuro”. Liderada pelo Prof. Elton Lidio (Especialista em Fisiologia do Exercício), nossa avaliação mapeia seu percentual de gordura, distribuição de massa muscular, assimetrias e capacidade cardiorrespiratória antes de prescrever qualquer exercício.',
      forWhom: 'Novos alunos e praticantes que querem saber com precisão sua evolução corporal e parâmetros reais de saúde.',
      benefits: [
        'Mensuração detalhada de composição corporal (% de gordura e massa magra)',
        'Análise postural e rastreio de limitações articulares',
        'Relatório claro de evolução periódica',
        'Prescrição alinhada a exames e rotina médica',
      ],
      ctaLabel: 'Agendar Avaliação Física',
      whatsappMessage: 'Olá! Gostaria de agendar uma Avaliação Física com o Prof. Elton Lidio no Studio Bros.',
      icon: 'Activity',
    },
    {
      id: 'saude-longevidade',
      title: 'Saúde, Postura & Alívio de Dores',
      category: 'Qualidade de Vida',
      shortDesc: 'Treinamento direcionado para fortalecimento de coluna, alívio de dores crônicas e longevidade.',
      fullDesc: 'O exercício como remédio preventivo. Programa desenhado para quem convive com dores lombares, tensões cervicais ou sedentarismo prolongado, restabelecendo estabilidade de core, mobilidade articular e tônus muscular sem impactos agressivos.',
      forWhom: 'Profissionais com rotinas sedentárias, pessoas com dores articulares/coluna e quem busca envelhecer com vigor físico e autonomia.',
      benefits: [
        'Fortalecimento profundo de estabilizadores e core',
        'Exercícios seguros adaptados a diagnósticos ortopédicos',
        'Ganho de mobilidade e alívio de tensões crônicas',
        'Mais energia e disposição para o dia a dia',
      ],
      ctaLabel: 'Falar com um Especialista',
      whatsappMessage: 'Olá! Gostaria de informações sobre o acompanhamento no Studio Bros com foco em alívio de dores e saúde postural.',
      icon: 'HeartPulse',
    },
    {
      id: 'performance-esportiva',
      title: 'Condicionamento & Performance Esportiva',
      category: 'Rendimento & Desempenho',
      shortDesc: 'Periodização atlética para entusiastas de corrida, tênis, ciclismo e esportes de raquete.',
      fullDesc: 'Desenvolvimento de força explosiva, potência, resistência anaeróbica e prevenção de lesões esportivas. O Studio Bros combina musculação técnica com movimentos específicos para quem pratica esportes e quer performar no fim de semana ou em competições.',
      forWhom: 'Corredores, tenistas, praticantes de beach tennis, futevôlei e esportistas que querem evoluir de nível.',
      benefits: [
        'Treinamento de potência e capacidade neuromuscular',
        'Prevenção de lesões específicas do seu esporte',
        'Equipamentos de peso livre de alto impacto (Rino Force)',
        'Ajuste fino de volume compatível com o calendário esportivo',
      ],
      ctaLabel: 'Conhecer Programa de Performance',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o treinamento de força e performance esportiva no Studio Bros.',
      icon: 'Zap',
    },
  ] as ServiceItem[],

  // Confirmed Partner: Unisaúde MS
  healthPlanPartner: {
    name: 'Unisaúde MS',
    badge: 'Convênio Credenciado',
    title: 'Atendimento Credenciado Unisaúde MS',
    description: 'O Studio Bros Fitness é prestador credenciado da Unisaúde MS em Campo Grande. Beneficiários têm acesso à nossa estrutura boutique e aos nossos treinadores qualificados.',
    highlights: [
      'Facilidade de agendamento e autorização',
      'Treinamento em ambiente exclusivo no Carandá Bosque',
      'Acompanhamento profissional qualificado',
    ],
    cta: 'Tirar Dúvidas sobre o Convênio Unisaúde',
    whatsappMessage: 'Olá! Sou beneficiário Unisaúde MS e gostaria de saber como funciona o atendimento no Studio Bros Fitness.',
  },

  // Real Testimonials & Community Feedback
  testimonials: [
    {
      id: 't1',
      name: 'Estela Albuquerque',
      handle: '@estelaalbuquerque',
      roleOrContext: 'Aluna do Studio Bros',
      text: 'Treinar no Bros mudou completamente minha relação com a rotina de exercícios. O ambiente é acolhedor, os professores estão sempre do lado e você sente que cada minuto é aproveitado com respeito e foco.',
      rating: 5,
      source: 'Instagram',
    },
    {
      id: 't2',
      name: 'Tainá Cividini',
      handle: '@taina.cividini',
      roleOrContext: 'Aluna Bros Fitness',
      text: 'Studio Bros Fitness é simplesmente o melhor! O esforço só entrega sua recompensa a quem decide não desistir, e ter esse suporte de perto faz toda a diferença.',
      rating: 5,
      source: 'Instagram',
    },
    {
      id: 't3',
      name: 'Regina Higane Toda',
      handle: '@reginahiganetoda',
      roleOrContext: 'Aluna Studio Bros',
      text: 'Sensibilidade Brosfitness, muita gratidão! É um lugar onde você não é apenas mais um número em uma esteira. O carinho e os detalhes fazem você se sentir em casa.',
      rating: 5,
      source: 'Instagram',
    },
    {
      id: 't4',
      name: 'Ana Paula Garrido',
      handle: '@anapaulagarrido25',
      roleOrContext: 'Aluna e Parceira',
      text: 'Muita gratidão e orgulho dessa turma verde! A dedicação dos professores e a estrutura do Carandá Bosque são impecáveis.',
      rating: 5,
      source: 'Instagram',
    },
    {
      id: 't5',
      name: 'Jaqueline Dutra',
      handle: '@jaakelinedutra',
      roleOrContext: 'Aluna Bros Fitness',
      text: 'Os melhores de Campo Grande! Atendimento atencioso, treino de verdade e um ambiente reservado que faz você querer estar lá todos os dias.',
      rating: 5,
      source: 'Instagram',
    },
    {
      id: 't6',
      name: 'Kao Ye Oshiro',
      handle: '@kaoyeoshiro',
      roleOrContext: 'Aluno do Studio',
      text: 'Avaliação corporal precisa com o Elton e treinos com professores extremamente técnicos. Sem filas, sem barulho desnecessário, 100% focado no seu resultado.',
      rating: 5,
      source: 'Google',
    },
  ] as Testimonial[],

  // Frequently Asked Questions (Realistic & Honest)
  faqs: [
    {
      category: 'Atendimento',
      question: 'Como funciona o atendimento no Studio Bros Fitness?',
      answer: 'Nosso estúdio funciona com capacidade controlada e agendamento prévio. Cada aluno treina sob supervisão direta e próxima de um personal trainer, garantindo que os exercícios sejam executados com biomecânica correta, cargas adequadas e sem esperas para usar equipamentos.',
    },
    {
      category: 'Estrutura',
      question: 'O Studio Bros é uma academia comum ou aberta ao público geral?',
      answer: 'Não somos uma academia convencional de rede nem de musculação aberta. Somos um Studio Boutique de Personal Training. Nosso espaço é privativo, reservado e projetado para quem busca tranquilidade, privacidade e acompanhamento técnico contínuo.',
    },
    {
      category: 'Convênios',
      question: 'Como funciona o convênio com a Unisaúde MS?',
      answer: 'O Studio Bros é oficialmente credenciado à Unisaúde MS. Se você possui o plano, entre em contato pelo nosso WhatsApp informando seus dados para que possamos orientar sobre autorizações, horários disponíveis e início dos treinos.',
    },
    {
      category: 'Metodologia',
      question: 'Preciso fazer uma avaliação física antes de começar?',
      answer: 'Sim, recomendamos fortemente. Conforme ensina o Prof. Elton Lidio (especialista em Fisiologia do Exercício), “sem avaliação, você treina no escuro”. A avaliação permite mapear composição corporal, limitações articulares e histórico de saúde para prescrever exatamente o que seu corpo precisa.',
    },
    {
      category: 'Estrutura',
      question: 'O estúdio conta com estacionamento e vestiários?',
      answer: 'Sim. Estamos localizados na Rua Vitório Zeolla, 891, no Carandá Bosque, com vagas próprias em frente ao estúdio, fácil acesso, ambiente totalmente climatizado, vestiários confortáveis e projeto luminotécnico acolhedor.',
    },
    {
      category: 'Atendimento',
      question: 'Como faço para conhecer o espaço e agendar uma conversa?',
      answer: 'Basta clicar em qualquer um dos botões de WhatsApp deste site ou ligar para (67) 3253-2353. Nossa equipe agendará um horário tranquilo para apresentar o estúdio, esclarecer suas dúvidas e alinhar seus objetivos.',
    },
  ] as FaqItem[],

  // Studio Highlights (Environment & Differentiators)
  environmentFeatures: [
    {
      title: 'Ambiente Reservado & Exclusivo',
      description: 'Longe do caos de academias com centenas de pessoas. Aqui você encontra silêncio, foco e conforto acústico.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Jardim Biophilic & Conexão Natural',
      description: 'Nossa assinatura visual inclui parede de vegetação natural e projeto sensorial com aromatização exclusiva.',
      icon: 'Leaf',
    },
    {
      title: 'Equipamentos Selecionados Rino Force',
      description: 'Bumper plates profissionais, anilhas olímpicas, barras de precisão e máquinas de musculação ergonômicas.',
      icon: 'Award',
    },
    {
      title: 'Sala de Fisiologia & Avaliação',
      description: 'Espaço dedicado para medição de adipometria, bioimpedância e acompanhamento de metas com Elton Lidio.',
      icon: 'ClipboardCheck',
    },
    {
      title: 'Localização Nobre no Carandá Bosque',
      description: 'Rua Vitório Zeolla, 891. Região tranquila, segura e de fácil estacionamento na porta do estúdio.',
      icon: 'MapPin',
    },
    {
      title: 'Atendimento Próximo e Respeitoso',
      description: 'Treinadores que conhecem seu nome, suas limitações e celebram cada conquista da sua evolução pessoal.',
      icon: 'Users',
    },
  ],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Olá! Conheci o Studio Bros Fitness pelo site e gostaria de agendar uma visita e saber mais sobre os treinos com personal.';
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${STUDIO_DATA.whatsappRaw}?text=${encodeURIComponent(msg)}`;
}
