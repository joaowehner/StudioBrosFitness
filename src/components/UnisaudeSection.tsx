import React from 'react';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export const UnisaudeSection: React.FC = () => {
  return (
    <section id="unisaude" className="py-14 md:py-18 bg-[#080C0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Convênio Credenciado</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {STUDIO_DATA.unisaude.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {STUDIO_DATA.unisaude.description}
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl(STUDIO_DATA.unisaude.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 hover:border-teal-500/30 text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-teal-400" />
              <span>{STUDIO_DATA.unisaude.ctaLabel}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UnisaudeSection;
