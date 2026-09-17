import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA, getWhatsAppUrl, getAssetPath } from '@/data/studioData';
import { MessageCircle, ArrowDown, Star, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-[#080C0D]">
      {/* Subtle Biophilic Ambient Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(45, 212, 191, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Strategic Copy & Conversion Hook */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/25 text-teal-300 text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Studio Personal Trainer • Carandá Bosque, Campo Grande</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              O treinamento personalizado que trata a sua saúde como{' '}
              <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                patrimônio.
              </span>
            </h1>

            {/* Verified Tagline & Context */}
            <div className="mb-6 space-y-2">
              <p className="text-xl sm:text-2xl font-semibold text-teal-100/90 tracking-tight">
                {STUDIO_DATA.taglines.hero}
              </p>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                Longe da superlotação de academias tradicionais. No Studio Bros, cada minuto da sua sessão é conduzido por treinadores qualificados, com prescrição baseada em fisiologia do exercício e respeito à sua individualidade.
              </p>
            </div>

            {/* Trust Markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-[11px] leading-tight text-slate-300">
                  <span className="font-bold text-white">5.0 no Google</span>
                  <span className="block text-slate-400">Avaliações reais</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <div className="text-[11px] leading-tight text-slate-300">
                  <span className="font-bold text-white">100% Personal</span>
                  <span className="block text-slate-400">Sem treino sozinho</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="text-[11px] leading-tight text-slate-300">
                  <span className="font-bold text-white">Unisaúde MS</span>
                  <span className="block text-slate-400">Prestador credenciado</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma visita e saber mais sobre o treinamento personalizado no Studio Bros Fitness.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/35 transition-all duration-200 border border-teal-300/40"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar Visita no WhatsApp</span>
              </a>

              <a
                href="#studio"
                className="btn-tactile inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base px-6 py-4 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all duration-200"
              >
                <span>Conhecer o Espaço</span>
                <ArrowDown className="w-4 h-4 text-teal-400" />
              </a>
            </div>

            {/* Micro location confirmation */}
            <p className="text-xs text-slate-400 mt-5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Rua Vitório Zeolla, 891 • Carandá Bosque • Vagas exclusivas em frente</span>
            </p>
          </div>

          {/* Right Column: Hero Visual Asset (Authentic High-End Studio Photography) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-500/30 via-emerald-500/10 to-transparent rounded-3xl blur-xl opacity-70" />

              {/* Main Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-teal-500/20 bg-slate-900 shadow-2xl aspect-[4/5] img-crisp">
                <Image
                  src={getAssetPath('/assets/images/bros_img_48.jpg')}
                  alt="Aluna em treinamento no Studio Bros Fitness sob iluminação chevron no Carandá Bosque"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Lighting gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C0D] via-transparent to-transparent opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080C0D]/60 via-transparent to-transparent opacity-60" />

                {/* Floating Bottom Card: Editorial Quote */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0F1516]/85 backdrop-blur-md border border-teal-500/20 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
                      Filosofia Bros
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Carandá Bosque
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-100 italic leading-snug">
                    “Quem tem direção não precisa de pressa.”
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Treinamento guiado por metas reais, respeitando sua fisiologia.
                  </p>
                </div>
              </div>

              {/* Secondary Floating Badge: Fisiologia do Exercício */}
              <div className="absolute -top-4 -right-3 sm:-right-5 bg-[#0F1516]/95 backdrop-blur-md border border-teal-500/30 p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0">
                  <span className="text-teal-300 font-bold text-sm">MS</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">
                    Prof. Elton Lidio
                  </span>
                  <span className="block text-[11px] text-teal-300/90 font-medium">
                    Fisiologia do Exercício
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
