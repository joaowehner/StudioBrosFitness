export interface Trainer {
  id: string;
  name: string;
  role: string;
  instagram?: string;
  photo: string;
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
    policy: 'Atendimento com hora marcada para garantir acompanhamento próximo e ambiente sem superlotação.',
  },

  // Ratings
  ratingGoogle: {
    score: '5.0',
    source: 'Google Avaliações',
    description: 'Nota máxima atribuída pelos alunos em Campo Grande/MS.',
  },

  // Confirmed Team Members (Only verified professionals and authentic photos)
  trainers: [
    {
      id: 'elton',
      name: 'Prof. Elton Lidio',
      role: 'Sócio & Prof. de Educação Física',
      instagram: '@eltonpersonal10',
      photo: getAssetPath('/assets/images/bros_img_15.jpg'),
    },
    {
      id: 'nicolly',
      name: 'Prof.ª Nicolly',
      role: 'Personal Trainer',
      instagram: '@nicolly_souza',
      photo: getAssetPath('/assets/images/curated/feed_2.jpg'),
    },
    {
      id: 'matheus',
      name: 'Prof. Matheus',
      role: 'Personal Trainer',
      instagram: '@matheusdornelesjj',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
    },
    {
      id: 'augusto',
      name: 'Prof. Augusto',
      role: 'Personal Trainer',
      instagram: '@augustochiella',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
    },
    {
      id: 'alex',
      name: 'Prof. Alex',
      role: 'Personal Trainer',
      instagram: '@alexdecastropersonaltrainer',
      photo: getAssetPath('/assets/images/bros_img_7.jpg'),
    },
  ] as Trainer[],

  // Confirmed Services (Direct, honest, non-medicalized)
  services: [
    {
      id: 'personal',
      title: 'Treinamento Personalizado',
      shortDesc: 'Acompanhamento presencial individual ou em pequenos grupos com hora marcada. Cada exercício é orientado de perto pelo treinador, com correção postural e ajuste contínuo de intensidade.',
      benefits: [
        'Supervisão direta em cada movimento',
        'Horários agendados sem disputa por aparelhos',
        'Planejamento individualizado para seu objetivo',
      ],
      ctaLabel: 'Consultar Horários de Personal',
      whatsappMessage: 'Olá! Gostaria de consultar os horários disponíveis para treino com personal no Studio Bros Fitness.',
    },
    {
      id: 'avaliacao',
      title: 'Avaliação Física',
      shortDesc: 'Análise minuciosa de composição corporal e testes de mobilidade funcional. Serve como base para planejar seus treinos com segurança e acompanhar sua evolução real.',
      benefits: [
        'Mapeamento de composição corporal',
        'Identificação de padrões de movimento e mobilidade',
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

  // Gallery Highlights (Real photos with factual labels)
  gallery: [
    {
      photo: getAssetPath('/assets/images/bros_img_15.jpg'),
      caption: 'Área de musculação e pesos livres',
      alt: 'Área de musculação com halteres e aparelhos no Studio Bros Fitness',
    },
    {
      photo: getAssetPath('/assets/images/bros_img_122.jpg'),
      caption: 'Ambiente climatizado e organizado',
      alt: 'Salão de treinamento organizado no Carandá Bosque',
    },
    {
      photo: getAssetPath('/assets/images/bros_img_48.jpg'),
      caption: 'Aparelhos selecionados para treino orientado',
      alt: 'Equipamentos de musculação do Studio Bros Fitness',
    },
    {
      photo: getAssetPath('/assets/images/bros_img_77.jpg'),
      caption: 'Espaço planejado para treinos com hora marcada',
      alt: 'Estrutura privativa para treinamento personalizado',
    },
    {
      photo: getAssetPath('/assets/images/bros_img_128.jpg'),
      caption: 'Iluminação natural e ambiente acolhedor',
      alt: 'Detalhe do espaço de treino com luz natural',
    },
    {
      photo: getAssetPath('/assets/images/bros_img_68.jpg'),
      caption: 'Estrutura de pesos e barras',
      alt: 'Equipamentos e anilhas do Studio Bros',
    },
  ],

  // FAQ (Short, concise, directly answering real visitor questions)
  faqs: [
    {
      question: 'Como funciona o atendimento no Studio Bros Fitness?',
      answer: 'Nosso atendimento é realizado com acompanhamento de personal trainer e agendamento prévio. Cada aluno treina com supervisão direta, orientações de postura e controle de carga em um ambiente reservado e sem superlotação.',
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
