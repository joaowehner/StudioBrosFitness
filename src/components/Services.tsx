import React from 'react';
import { STUDIO_DATA, getWhatsAppUrl, ServiceItem } from '@/data/studioData';
import { Dumbbell, Activity, HeartPulse, Zap, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-6 h-6 text-teal-400" />,
    Activity: <Activity className="w-6 h-6 text-teal-400" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-teal-400" />,
    Zap: <Zap className="w-6 h-6 text-teal-400" />,
  };

  return (
    <section id="servicos" className="py-24 bg-[#0B1011] relative overflow-hidden border-t border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/25 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Dumbbell className="w-3.5 h-3.5 text-teal-400" />
            <span>Serviços & Modalidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Acompanhamento sob medida para o seu{' '}
            <span className="text-teal-400">momento e objetivo.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Sem pacotes genéricos. No Studio Bros, o programa de treino é desenhado a partir da sua rotina, do seu histórico e das metas reais que você deseja conquistar.
          </p>
        </div>

        {/* Services Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDIO_DATA.services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-teal-400/40 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* For whom */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-teal-400 mb-1">
                    Indicado Para
                  </span>
                  <p className="text-xs text-slate-300 leading-normal">
                    {service.forWhom}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-2.5 mb-8">
                  <span className="block text-xs font-semibold text-slate-200">
                    Diferenciais deste programa:
                  </span>
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile w-full inline-flex items-center justify-center gap-2 bg-teal-500/10 hover:bg-teal-500 text-teal-300 hover:text-black font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl border border-teal-500/30 hover:border-teal-400 transition-all duration-200 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
