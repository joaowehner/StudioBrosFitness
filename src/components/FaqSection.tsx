'use client';

import React, { useState } from 'react';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export default function FaqSection() {
  const { faqs } = STUDIO_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappUrl = getWhatsAppUrl('Olá! Tenho uma dúvida sobre o funcionamento do Studio Bros Fitness.');

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-dark-900 border-t border-dark-800 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-brand-teal text-xs font-semibold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-brand-teal" />
            <span>Perguntas Frequentes & Transparência</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Tudo o que você precisa saber <br className="hidden sm:inline" />
            <span className="text-gradient">antes de começar</span>.
          </h2>

          <p className="text-dark-300 text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Respostas claras e diretas sobre nossa proposta boutique, funcionamento com personal trainer e convênios.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-dark-950/90 border-brand-teal/40 shadow-lg shadow-brand-teal/5'
                    : 'bg-dark-950/50 border-dark-800 hover:border-dark-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-teal">
                      {faq.category}
                    </span>
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-dark-700 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-teal text-dark-950 border-brand-teal' : 'text-dark-400 bg-dark-900'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-dark-200 text-sm sm:text-base leading-relaxed border-t border-dark-800/80 pt-4 font-sans animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-dark-950 border border-dark-800 text-center space-y-4">
          <p className="text-dark-200 text-sm sm:text-base font-medium">
            Tem alguma pergunta específica sobre sua condição física ou rotina?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-900 hover:bg-dark-800 border border-dark-700 hover:border-brand-teal text-white text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4 text-brand-teal" />
            <span>Falar com a Recepção Técnica no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
