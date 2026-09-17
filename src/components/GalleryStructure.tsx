import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA } from '@/data/studioData';
import { MapPin, Dumbbell, Stethoscope, Sparkles } from 'lucide-react';

export const GalleryStructure: React.FC = () => {
  const featuredItem = STUDIO_DATA.gallery.find((item) => item.featured) || STUDIO_DATA.gallery[0];
  const detailItems = STUDIO_DATA.gallery.filter((item) => !item.featured);

  const getIcon = (id: string) => {
    switch (id) {
      case 'fachada':
        return <MapPin className="w-4 h-4 text-teal-400" />;
      case 'treino':
        return <Dumbbell className="w-4 h-4 text-teal-400" />;
      case 'avaliacao':
        return <Stethoscope className="w-4 h-4 text-teal-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <section id="estrutura" className="py-16 md:py-24 bg-[#0A0F11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            Estrutura & Ambiente
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Ambiente planejado para o seu treino
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Fotografia autêntica do espaço na Rua Vitório Zeolla, 891. Sem imagens genéricas de banco, sem renders.
          </p>
        </div>

        {/* Editorial Curated Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Featured Wide Facility Card (Fachada Noturna & Totem) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden bg-[#0F1618] border border-white/10 hover:border-teal-500/30 transition-all duration-300 shadow-2xl shadow-black/60 group">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-black/40">
              <Image
                src={featuredItem.photo}
                alt={featuredItem.alt}
                fill
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F11] via-transparent to-black/20" />
              
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080C0D]/80 backdrop-blur-md border border-white/10 text-xs font-medium text-teal-300">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>Carandá Bosque</span>
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-[#0D1315] border-t border-white/5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {featuredItem.caption}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {featuredItem.subtitle}
                </p>
              </div>
              <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-white/5">
                Localização com estacionamento frontal e identificação visual na Rua Vitório Zeolla.
              </p>
            </div>
          </div>

          {/* 3 Detail Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {detailItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#0F1618] border border-white/10 hover:border-teal-500/30 transition-all duration-300 shadow-lg shadow-black/40 group"
              >
                {/* Thumbnail */}
                <div className="relative w-24 sm:w-28 aspect-square rounded-xl overflow-hidden shrink-0 bg-[#141C1F] border border-white/5">
                  <Image
                    src={item.photo}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    {getIcon(item.id)}
                    <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider">
                      Espaço Real
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug truncate">
                    {item.caption}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GalleryStructure;
