export interface Trainer {
  id: string;
  name: string;
  role: string;
  cref?: string;
  instagram?: string;
  photo: string;
  photoAlt?: string;
}

export interface GalleryItem {
  id: string;
  photo: string;
  caption: string;
  subtitle?: string;
  alt: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  benefits: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
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
  subtitle: 'Treinamento Personalizado no Carandá Bosque',
  
  // Confirmed Legal Entity
  legal: {
    companyName: 'E. Lidio de Oliveira Santos e Cia Ltda - ME',
    cnpj: '55.298.299/0001-02',
    cnpjFormatted: '55.298.299/0001-02',
    tradeName: 'Studio Bros Fitness',
    partners: [
      { name: 'Elton Lidio de Oliveira Santos', role: 'Sócio & Prof. de Educação Física' },
      { name: 'Vitor Rogerio de Oliveira Moura', role: 'Sócio-Administrador' },
    ],
  },
  
  // Confirmed Contact Details (Validated across Unisaúde MS & Official Channels)
  contact: {
    phoneLandline: '(67) 3253-2353',
    phoneWhatsApp: '(67) 99249-3221',
    whatsappRaw: '5567992493221',
    phoneSecondaryRegistration: '(67) 99269-6422', // Contato alternativo presente no registro empresarial
    email: 'brosfitnessadm@gmail.com',
  },

  // Social Channels
  social: {
    instagram: '@brosfitnesscg',
    instagramUrl: 'https://www.instagram.com/brosfitnesscg/',
    eltonInstagram: '@eltonpersonal10',
    eltonInstagramUrl: 'https://www.instagram.com/eltonpersonal10/',
  },
  
  // Confirmed Location
  address: {
    street: 'Rua Vitório Zeolla',
    number: '891',
    neighborhood: 'Carandá Bosque',
    city: 'Campo Grande',
    state: 'MS',
    postalCode: '79032-360',
    fullFormatted: 'Rua Vitório Zeolla, 891 - Carandá Bosque, Campo Grande - MS, CEP 79032-360',
    googleMapsUrl: 'https://maps.google.com/?q=Rua+Vitorio+Zeolla+891+Caranda+Bosque+Campo+Grande+MS',
  },
  
  // Working Hours (Appointment-based)
  hours: {
    weekdays: 'Segunda a Sexta: 06h às 21h',
    saturday: 'Sábado: Sob consulta e agendamento',
    sunday: 'Domingo: Fechado',
    policy: 'Atendimento com hora marcada para proporcionar acompanhamento próximo e ambiente reservado com capacidade controlada.',
  },

  // Ratings
  ratingGoogle: {
    score: '5.0',
    source: 'Google Avaliações',
    description: 'Avaliação máxima atribuída por alunos em Campo Grande/MS.',
  },

  // Confirmed Team Members & Collective Photo
  teamCollective: {
    photo: getAssetPath('/assets/images/bros_img_7.jpg'),
    title: 'Equipe Studio Bros Fitness',
    alt: 'Equipe de treinadores do Studio Bros Fitness reunida em frente ao painel verde oficial com logotipo da marca',
    description: 'Treinadores dedicados ao acompanhamento técnico presencial dos alunos, com supervisão direta de movimento e atendimento com hora marcada.',
  },

  trainers: [
    {
      id: 'elton',
      name: 'Prof. Elton Lidio',
      role: 'Sócio Fundador & Prof. de Educação Física',
      cref: 'CREF 003889-G/MS',
      instagram: '@eltonpersonal10',
      photo: getAssetPath('/assets/images/bros_img_15.jpg'),
      photoAlt: 'Prof. Elton Lidio em sua sala de avaliação física no Studio Bros Fitness',
    },
    {
      id: 'nicolly',
      name: 'Prof.ª Nicolly',
      role: 'Personal Trainer',
      instagram: '@nicolly_souza',
      photo: getAssetPath('/assets/images/curated/feed_2.jpg'),
      photoAlt: 'Prof.ª Nicolly em acompanhamento de treino presencial no Studio Bros Fitness',
    },
  ],

  coachesList: [
    { name: 'Prof. Matheus', instagram: '@matheusdornelesjj', role: 'Personal Trainer' },
    { name: 'Prof. Augusto', instagram: '@augustochiella', role: 'Personal Trainer' },
    { name: 'Prof. Alex', instagram: '@alexdecastropersonaltrainer', role: 'Personal Trainer' },
  ],

  // Confirmed Services (Direct, honest, non-medicalized)
  services: [
    {
      id: 'personal',
      title: 'Treinamento Personalizado',
      shortDesc: 'Acompanhamento presencial individual ou em pequenos grupos com hora marcada. Cada exercício é orientado de perto pelo treinador, com correção postural e ajuste contínuo de intensidade.',
      benefits: [
        'Supervisão direta em cada movimento',
        'Horários agendados com capacidade controlada',
        'Planejamento individualizado para seu objetivo',
      ],
      ctaLabel: 'Consultar Horários de Personal',
      whatsappMessage: 'Olá! Gostaria de consultar os horários disponíveis para treino com personal no Studio Bros Fitness.',
    },
    {
      id: 'avaliacao',
      title: 'Avaliação Física',
      shortDesc: 'Mapeamento de composição corporal e análise de mobilidade. Parâmetros essenciais para direcionar seus treinos com segurança e acompanhar sua evolução real.',
      benefits: [
        'Mapeamento de composição corporal',
        'Análise de postura e mobilidade para direcionamento do treino',
        'Acompanhamento periódico de evolução',
      ],
      ctaLabel: 'Agendar Avaliação Física',
      whatsappMessage: 'Olá! Gostaria de agendar uma avaliação física no Studio Bros Fitness.',
    },
    {
      id: 'condicionamento',
      title: 'Condicionamento & Saúde',
      shortDesc: 'Treinos focados em ganho de força muscular, mobilidade e disposição para o dia a dia. Ideal para quem busca manter uma rotina de exercícios com regularidade e bem-estar.',
      benefits: [
        'Ganho de tônus, força e mobilidade',
        'Exercícios adequados à sua individualidade',
        'Ambiente tranquilo e motivador',
      ],
      ctaLabel: 'Saber Mais no WhatsApp',
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o acompanhamento de condicionamento e saúde no Studio Bros Fitness.',
    },
  ] as ServiceItem[],

  // Confirmed Health Partner: Unisaúde MS (Factual & honest)
  unisaude: {
    title: 'Atendimento Credenciado Unisaúde MS',
    description: 'O Studio Bros Fitness é prestador credenciado da Unisaúde MS em Campo Grande. Se você é beneficiário do plano, entre em contato para verificar a disponibilidade de horários e as condições vigentes de atendimento.',
    ctaLabel: 'Consultar Convênio Unisaúde',
    whatsappMessage: 'Olá! Sou beneficiário Unisaúde MS e gostaria de consultar as condições de atendimento no Studio Bros Fitness.',
  },

  // Curated Gallery Highlights (100% authentic, verified facility & training photos)
  gallery: [
    {
      id: 'fachada',
      photo: getAssetPath('/assets/images/facade_night_clean.jpg'),
      caption: 'Fachada Noturna & Totem Iluminado',
      subtitle: 'Rua Vitório Zeolla, 891 - Carandá Bosque',
      alt: 'Fachada iluminada do Studio Bros Fitness à noite com totem e entrada no Carandá Bosque',
      featured: true,
    },
    {
      id: 'treino',
      photo: getAssetPath('/assets/images/curated/feed_2.jpg'),
      caption: 'Treino Orientado com Personal',
      subtitle: 'Supervisão presencial com pesos livres e anilhas',
      alt: 'Acompanhamento presencial de treino com anilhas Rino Force no Studio Bros Fitness',
      featured: false,
    },
    {
      id: 'avaliacao',
      photo: getAssetPath('/assets/images/bros_img_15.jpg'),
      caption: 'Sala de Avaliação Física Privativa',
      subtitle: 'Atendimento individual e planejamento técnico',
      alt: 'Sala de avaliação física privativa com equipamentos e certificados no Studio Bros Fitness',
      featured: false,
    },
    {
      id: 'aparelhos',
      photo: getAssetPath('/assets/images/bros_img_75.jpg'),
      caption: 'Aparelhos Articulados & Treino de Força',
      subtitle: 'Puxadores, cabos e pesos selecionados',
      alt: 'Área de treinamento com aparelhos de cabo e piso oficial BROS',
      featured: false,
    },
  ],

  // FAQ (Short, concise, directly answering real visitor questions)
  faqs: [
    {
      question: 'Como funciona o atendimento no Studio Bros Fitness?',
      answer: 'Nosso atendimento é realizado com acompanhamento de personal trainer e agendamento prévio. Cada aluno treina com supervisão direta, orientações de postura e controle de carga em um ambiente com capacidade controlada.',
    },
    {
      question: 'Preciso agendar para conhecer o estúdio?',
      answer: 'Sim. Para garantir um atendimento atencioso e respeitar a rotina dos treinos em andamento, pedimos que entre em contato pelo WhatsApp para agendarmos o melhor horário para recebê-lo.',
    },
    {
      question: 'Quais são os horários de funcionamento?',
      answer: 'Atendemos de segunda a sexta-feira, das 06h às 21h, sempre com sessões agendadas com personal trainer. Aos sábados, os atendimentos ocorrem sob consulta.',
    },
    {
      question: 'O Studio aceita o plano Unisaúde MS?',
      answer: 'Sim, somos prestadores credenciados da Unisaúde MS em Campo Grande. Para saber mais sobre como funciona o atendimento pelo convênio, entre em contato pelo nosso WhatsApp.',
    },
  ] as FaqItem[],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Olá! Gostaria de saber mais sobre os treinos com personal trainer no Studio Bros Fitness.';
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${STUDIO_DATA.contact.whatsappRaw}?text=${encodeURIComponent(msg)}`;
}
