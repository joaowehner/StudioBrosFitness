import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { ShieldCheck, CheckCircle2, ArrowRight, FileCheck, Stethoscope, Sparkles } from 'lucide-react';

export default function UnisaudeSection() {
  const { healthPlanPartner } = STUDIO_DATA;
  const whatsappUrl = getWhatsAppUrl(healthPlanPartner.whatsappMessage);

  return (
    <section id="convenio" className="relative py-24 sm:py-32 bg-dark-900 overflow-hidden border-t border-dark-800">
      {/* Subtle background ambient glow */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-dark-800/90 via-dark-800/60 to-dark-900 border border-dark-700/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Top highlight accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-emerald via-brand-teal to-brand-tealDark" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left copy column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/15 border border-brand-emerald/30 text-brand-emerald text-xs font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Credenciamento Oficial</span>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  Atendimento Credenciado <br />
                  <span className="text-gradient font-black">Unisaúde MS</span> no Carandá Bosque
                </h2>
                <p className="text-dark-200 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
                  Se você é beneficiário da Unisaúde MS em Campo Grande, o Studio Bros Fitness 
                  oferece estrutura de alto padrão e acompanhamento com treinadores qualificados, 
                  aliando saúde preventiva, reabilitação e qualidade de vida.
                </p>
              </div>

              {/* Pillars checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {healthPlanPartner.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-brand-emerald/20 text-brand-emerald flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-dark-100 leading-snug">{item}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded-full bg-brand-emerald/20 text-brand-emerald flex-shrink-0">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-dark-100 leading-snug">
                    Orientação completa sobre liberação e guias
                  </span>
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-teal text-dark-950 font-semibold text-sm hover:bg-brand-tealLight active:scale-[0.98] transition-all shadow-lg shadow-brand-teal/20"
                >
                  <span>{healthPlanPartner.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-dark-400 sm:max-w-[200px] leading-tight">
                  Atendimento humano e rápido via WhatsApp para checagem de matrícula.
                </span>
              </div>
            </div>

            {/* Right visual card column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-dark-600 bg-dark-900/90 p-6 sm:p-8 space-y-6 shadow-inner">
                {/* Header badge */}
                <div className="flex items-center justify-between border-b border-dark-700/60 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-emerald/15 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-dark-400">Parceria de Saúde</p>
                      <h4 className="font-heading font-bold text-white text-lg leading-tight">Unisaúde MS</h4>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald">
                    <Sparkles className="w-3 h-3" />
                    Ativo
                  </span>
                </div>

                <div className="space-y-3 text-sm text-dark-300">
                  <p className="font-medium text-white">Como iniciar seu atendimento:</p>
                  <ol className="space-y-2 text-xs sm:text-sm list-decimal list-inside text-dark-300">
                    <li>Entre em contato via WhatsApp com o número da sua carteirinha.</li>
                    <li>Nossa equipe verifica a cobertura e os horários disponíveis.</li>
                    <li>Agende sua primeira sessão e inicie seu acompanhamento no Studio Bros.</li>
                  </ol>
                </div>

                <div className="p-4 rounded-xl bg-dark-800/80 border border-dark-700 text-xs text-dark-300 flex items-center justify-between">
                  <div>
                    <span className="block text-white font-medium">Unidade Carandá Bosque</span>
                    <span className="text-dark-400">Rua Vitório Zeolla, 891</span>
                  </div>
                  <span className="text-brand-teal font-semibold text-xs">Campo Grande/MS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
