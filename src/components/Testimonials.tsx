import React from 'react';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { Star, Quote, MessageCircle, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const { testimonials, ratingGoogle } = STUDIO_DATA;
  const whatsappUrl = getWhatsAppUrl('Olá! Li os depoimentos no site do Studio Bros e gostaria de conhecer o espaço.');

  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 bg-dark-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-brand-teal text-xs font-semibold tracking-wide uppercase">
            <Quote className="w-3.5 h-3.5 text-brand-teal" />
            <span>Comunidade & Experiência Real</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Quem treina no Bros não troca por <br className="hidden sm:inline" />
            <span className="text-gradient">nenhuma academia comum</span>.
          </h2>

          <p className="text-dark-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Sem promessas vazias. Veja o que dizem os alunos que experimentaram a diferença 
            de treinar em um ambiente acolhedor, privativo e com atenção técnica real.
          </p>

          {/* Social Proof Metric Banner */}
          <div className="pt-4 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-dark-900/90 border border-dark-700 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">{ratingGoogle.score}</span>
              <span className="text-xs text-dark-400">no Google</span>
            </div>

            <div className="h-4 w-px bg-dark-700 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs text-dark-300">
              <CheckCircle className="w-4 h-4 text-brand-teal" />
              <span>100% Avaliações Verificadas</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-dark-900 border border-dark-800 hover:border-dark-700 transition-all duration-300 shadow-md hover:shadow-xl relative group"
            >
              <div className="space-y-4">
                {/* Header with stars & source */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-dark-800 border border-dark-700 text-dark-400">
                    {item.source}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-dark-200 text-sm sm:text-base leading-relaxed italic">
                  “{item.text}”
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-dark-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-emerald flex items-center justify-center text-dark-950 font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white truncate">{item.name}</h3>
                  <div className="flex items-center gap-2 text-xs text-dark-400">
                    {item.handle && (
                      <span className="text-brand-teal/80 hover:text-brand-teal font-mono">
                        {item.handle}
                      </span>
                    )}
                    <span>•</span>
                    <span className="truncate">{item.roleOrContext}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt to action */}
        <div className="mt-16 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-dark-900 hover:bg-dark-800 border border-dark-700 hover:border-brand-teal/50 text-white text-sm font-semibold transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-brand-teal" />
            <span>Converse com quem treina aqui e agende sua visita</span>
          </a>
        </div>
      </div>
    </section>
  );
}
