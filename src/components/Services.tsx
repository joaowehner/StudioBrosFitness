import React from 'react';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { Check, MessageCircle, Dumbbell, Activity, HeartPulse } from 'lucide-react';

const icons = [Dumbbell, Activity, HeartPulse];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-[#080C0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            Como Funciona
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Serviços oferecidos no Studio Bros
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Formatos claros de atendimento para quem busca orientação profissional contínua e resultados consistentes.
          </p>
        </div>

        {/* Services Grid (3 cards only, 25-40 words each) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDIO_DATA.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0C1214] border border-white/5 hover:border-teal-500/20 transition-all duration-200"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-slate-300">
                    {service.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-teal-500/15 text-slate-200 hover:text-teal-300 border border-white/10 hover:border-teal-500/30 text-xs font-semibold py-3 rounded-xl transition-all duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-teal-400" />
                  <span>{service.ctaLabel}</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
