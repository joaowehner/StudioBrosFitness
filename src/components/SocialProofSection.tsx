import React from 'react';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { Star, MessageCircle, ExternalLink } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0A0F11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F1618] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span>Avaliações no Google</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-4xl font-extrabold text-white">5.0</span>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O Studio Bros Fitness é avaliado com nota máxima no Google por alunos que treinam diariamente no Carandá Bosque, destacando o ambiente acolhedor, a atenção dos treinadores e a pontualidade dos atendimentos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={STUDIO_DATA.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              <span>Ver no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-black font-semibold text-xs px-5 py-3 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
              <span>Agendar Visita</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
