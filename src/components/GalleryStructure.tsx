import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA } from '@/data/studioData';

export const GalleryStructure: React.FC = () => {
  return (
    <section id="estrutura" className="py-16 md:py-24 bg-[#0A0F11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            Estrutura
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Ambiente do Studio Bros
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Espaço projetado para oferecer tranquilidade, organização e aparelhos adequados para o treino diário.
          </p>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_DATA.gallery.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-[#0F1618] border border-white/5 hover:border-teal-500/20 transition-all duration-300 shadow-lg shadow-black/40 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.photo}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 bg-[#0B1012] border-t border-white/5">
                <p className="text-sm font-medium text-slate-200">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryStructure;
