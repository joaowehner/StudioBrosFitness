import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA, getWhatsAppUrl, getAssetPath } from '@/data/studioData';
import { Building2, Sparkles, Wind, Car, Dumbbell, ShieldCheck, HeartHandshake, Eye, MessageCircle } from 'lucide-react';

export const GalleryStructure: React.FC = () => {
  const galleryItems = [
    {
      src: getAssetPath('/assets/images/bros_img_77.jpg'),
      alt: 'Fachada do Studio Bros Fitness na Rua Vitório Zeolla com totem luminoso no Carandá Bosque',
      title: 'Fachada & Totem Noturno',
      subtitle: 'Rua Vitório Zeolla, 891 • Estacionamento na porta',
      span: 'col-span-1 md:col-span-2 lg:col-span-7',
      aspect: 'aspect-[16/10]',
    },
    {
      src: getAssetPath('/assets/images/bros_img_7.jpg'),
      alt: 'Equipe de Personal Trainers do Studio Bros reunida em frente ao jardim vertical',
      title: 'Espaço Biophilic & Identidade Bros',
      subtitle: 'Jardim vertical com letreiro acrílico 3D',
      span: 'col-span-1 md:col-span-2 lg:col-span-5',
      aspect: 'aspect-square lg:aspect-auto',
    },
    {
      src: getAssetPath('/assets/images/curated/feed_2.jpg'),
      alt: 'Treinamento acompanhado com barra olímpica e anilhas Rino Force',
      title: 'Acompanhamento Individual',
      subtitle: 'Biomecânica e anilhas profissionais',
      span: 'col-span-1 lg:col-span-4',
      aspect: 'aspect-[4/5]',
    },
    {
      src: getAssetPath('/assets/images/curated/feed_4.jpg'),
      alt: 'Área de pesos livres, halteres e kettlebells no Studio Bros',
      title: 'Área de Pesos Livres & Funcional',
      subtitle: 'Halteres, kettlebells e piso emborrachado',
      span: 'col-span-1 lg:col-span-4',
      aspect: 'aspect-[4/5]',
    },
    {
      src: getAssetPath('/assets/images/bros_img_15.jpg'),
      alt: 'Consultório de Fisiologia do Exercício e Avaliação Física do Prof. Elton Lidio',
      title: 'Sala de Fisiologia & Avaliação',
      subtitle: 'Adipometria, bioimpedância e relatórios',
      span: 'col-span-1 lg:col-span-4',
      aspect: 'aspect-[4/5]',
    },
  ];

  return (
    <section id="estrutura" className="py-24 bg-[#080C0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/25 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Building2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Estrutura & Experiência Boutique</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Cada detalhe pensado para o seu{' '}
            <span className="text-teal-400">foco, conforto e privacidade.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Esqueça o ambiente frio e impessoal de academias comuns. No Studio Bros, o espaço foi desenhado com projeto luminotécnico aconchegante, vegetação biophilic, climatização de precisão e aparelhos de peso livre profissionais.
          </p>
        </div>

        {/* Editorial Photo Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden border border-teal-500/20 bg-slate-900 group shadow-xl img-crisp ${item.span} ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C0D] via-[#080C0D]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Text Card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Highlights Grid (6 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {STUDIO_DATA.environmentFeatures.map((feat, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-teal-500/30 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center text-teal-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-teal-500/30 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Venha tomar um café e vivenciar essa atmosfera presencialmente.
            </h4>
            <p className="text-sm text-slate-300">
              Estamos na Rua Vitório Zeolla, 891 no Carandá Bosque. Agendamos uma visita tranquila sem compromisso.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Gostaria de agendar uma visita para conhecer pessoalmente o Studio Bros no Carandá Bosque.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-black font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-teal-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Visita</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default GalleryStructure;
