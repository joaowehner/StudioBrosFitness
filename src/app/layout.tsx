import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { STUDIO_DATA, getAssetPath } from '@/data/studioData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#080C0D',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: {
    default: 'Studio Bros Fitness | Personal Trainer & Studio Boutique em Campo Grande/MS',
    template: '%s | Studio Bros Fitness',
  },
  description:
    'Treinamento personalizado exclusivo com hora marcada no Carandá Bosque. Sem lotação, com avaliação fisiológica por especialista e acompanhamento contínuo. Credenciado Unisaúde MS.',
  keywords: [
    'personal trainer campo grande ms',
    'studio bros fitness',
    'academia caranda bosque',
    'treino personalizado campo grande',
    'unisaude ms academia',
    'elton lidio personal trainer',
    'musculacao boutique campo grande',
    'avaliacao fisica fisiologia exercicio',
  ],
  authors: [{ name: 'Studio Bros Fitness' }, { name: 'Elton Lidio' }],
  creator: 'Studio Bros Fitness',
  publisher: 'Studio Bros Fitness',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://joaowehner.github.io/StudioBrosFitness/'),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Studio Bros Fitness | Personal Trainer no Carandá Bosque - Campo Grande/MS',
    description:
      'Constância é luxo. Treinamento personalizado com hora marcada, avaliação fisiológica minuciosa e estrutura boutique privativa. Credenciado Unisaúde MS.',
    url: 'https://joaowehner.github.io/StudioBrosFitness/',
    siteName: 'Studio Bros Fitness',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://joaowehner.github.io/StudioBrosFitness/assets/images/bros_img_7.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipe de Treinadores do Studio Bros Fitness no Carandá Bosque',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Bros Fitness | Personal Trainer no Carandá Bosque',
    description:
      'Studio boutique de treinamento personalizado. Estrutura sem lotação, fisiologia do exercício e credenciado Unisaúde MS.',
    images: ['https://joaowehner.github.io/StudioBrosFitness/assets/images/bros_img_7.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'BR-MS',
    'geo.placename': 'Campo Grande',
    'geo.position': '-20.4485906;-54.5828456',
    'ICBM': '-20.4485906, -54.5828456',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['ExerciseGym', 'HealthClub', 'LocalBusiness'],
    name: STUDIO_DATA.brandName,
    alternateName: 'Bros Fitness Carandá Bosque',
    legalName: STUDIO_DATA.legal.companyName,
    taxID: STUDIO_DATA.legal.cnpj,
    url: 'https://brosfitness.com.br',
    telephone: '+55-67-3253-2353',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${STUDIO_DATA.address.street}, ${STUDIO_DATA.address.number}`,
      addressLocality: STUDIO_DATA.address.city,
      addressRegion: STUDIO_DATA.address.state,
      postalCode: STUDIO_DATA.address.zip,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -20.4485906,
      longitude: -54.5828456,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '07:00',
        closes: '11:00',
      },
    ],
    founder: {
      '@type': 'Person',
      name: STUDIO_DATA.headCoach.name,
      jobTitle: STUDIO_DATA.headCoach.title,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '48',
    },
    sameAs: [
      STUDIO_DATA.social.instagramUrl,
    ],
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href={getAssetPath('/favicon.ico')} sizes="any" />
      </head>
      <body className="font-sans bg-dark-950 text-dark-50 antialiased selection:bg-brand-teal/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
