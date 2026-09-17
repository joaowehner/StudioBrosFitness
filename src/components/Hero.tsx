import React from 'react';
import Image from 'next/image';
import { getWhatsAppUrl, getAssetPath, STUDIO_DATA } from '@/data/studioData';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32 bg-[#080C0D]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-teal-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Carandá Bosque • Campo Grande/MS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Treinamento personalizado no{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400">
                Carandá Bosque.
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              No Studio Bros Fitness, você treina com acompanhamento profissional dedicado, hora marcada e um ambiente estruturado para atender com atenção e tranquilidade.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-black font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-teal-950/40 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-black text-transparent" />
                <span>Falar com o Studio</span>
              </a>

              <a
                href="#estrutura"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/10 transition-all duration-200"
              >
                <span>Conhecer o espaço</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Key Factual Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Capacidade controlada</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Acompanhamento presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>Credenciado Unisaúde MS</span>
              </div>
            </div>

          </div>

          {/* Real Photo Showcase - Editorial & Clean without floating cards */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F1516] shadow-2xl shadow-black/80 ring-1 ring-white/5">
              <div className="aspect-[4/5] relative">
                <Image
                  src={getAssetPath('/assets/images/bros_img_48.jpg')}
                  alt="Treinamento focado e personalizado no Studio Bros Fitness"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C0D]/80 via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
