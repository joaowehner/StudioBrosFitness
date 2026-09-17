import React from 'react';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#090E10] border-t border-white/5 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Pronto para treinar com acompanhamento profissional?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Entre em contato pelo WhatsApp para consultar a disponibilidade de horários para personal trainer ou agendar uma visita para conhecer o espaço no Carandá Bosque.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-black font-semibold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-teal-950/40 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-black text-transparent" />
            <span>Falar com o Studio no WhatsApp</span>
          </a>

          <a
            href={`tel:${STUDIO_DATA.contact.phoneLandline.replace(/\D/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-sm sm:text-base px-6 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>Ligar para {STUDIO_DATA.contact.phoneLandline}</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-teal-400" />
          <span>{STUDIO_DATA.address.fullFormatted}</span>
        </div>

      </div>
    </section>
  );
};

export default FinalCtaSection;
