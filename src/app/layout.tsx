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
    default: 'Studio Bros Fitness | Treinamento Personalizado no Carandá Bosque',
    template: '%s | Studio Bros Fitness',
  },
  description:
    'Treinamento personalizado com hora marcada na Rua Vitório Zeolla, 891 - Carandá Bosque, Campo Grande/MS. Acompanhamento de perto por personal trainers e credenciado Unisaúde MS.',
  keywords: [
    'personal trainer campo grande ms',
    'studio bros fitness',
    'academia caranda bosque',
    'treino personalizado campo grande',
    'unisaude ms studio bros',
    'elton lidio personal trainer',
    'avaliacao fisica campo grande',
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
  icons: {
    icon: [
      { url: getAssetPath('/favicon.svg'), type: 'image/svg+xml' },
      { url: getAssetPath('/favicon.png'), sizes: '32x32', type: 'image/png' },
      { url: getAssetPath('/favicon.ico'), sizes: 'any' },
    ],
    apple: [
      { url: getAssetPath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Studio Bros Fitness | Treinamento Personalizado no Carandá Bosque',
    description:
      'Treinamento com acompanhamento profissional próximo e hora marcada no Carandá Bosque, Campo Grande/MS. Credenciado Unisaúde MS.',
    url: 'https://joaowehner.github.io/StudioBrosFitness/',
    siteName: 'Studio Bros Fitness',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://joaowehner.github.io/StudioBrosFitness/assets/images/bros_img_15.jpg',
        width: 1200,
        height: 630,
        alt: 'Área de Musculação e Pesos Livres do Studio Bros Fitness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Bros Fitness | Treinamento Personalizado no Carandá Bosque',
    description:
      'Acompanhamento profissional próximo e hora marcada no Carandá Bosque. Credenciado Unisaúde MS.',
    images: ['https://joaowehner.github.io/StudioBrosFitness/assets/images/bros_img_15.jpg'],
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
    alternateName: 'Studio Bros Fitness Carandá Bosque',
    legalName: STUDIO_DATA.legal.companyName,
    taxID: STUDIO_DATA.legal.cnpj,
    url: 'https://joaowehner.github.io/StudioBrosFitness/',
    telephone: '+55-67-3253-2353',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${STUDIO_DATA.address.street}, ${STUDIO_DATA.address.number}`,
      addressLocality: STUDIO_DATA.address.city,
      addressRegion: STUDIO_DATA.address.state,
      postalCode: STUDIO_DATA.address.postalCode,
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
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
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
      <body className="font-sans bg-[#080C0D] text-slate-100 antialiased selection:bg-teal-500/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
