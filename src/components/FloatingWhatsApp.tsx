'use client';

import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '@/data/studioData';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppUrl('Olá! Gostaria de tirar uma dúvida sobre os horários e treinos no Studio Bros Fitness.');

  useEffect(() => {
    // Show button after 1.5 seconds or 200px scroll
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50 flex items-end gap-3 font-sans">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/95 backdrop-blur-md border border-dark-700 shadow-2xl text-xs text-white animate-fadeIn">
          <span>Dúvidas sobre horários ou planos?</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-dark-400 hover:text-white p-0.5 rounded focus:outline-none"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-dark-950"
        aria-label="Conversar no WhatsApp com a recepção do Studio Bros"
      >
        {/* Radar ping pulse */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75" />
        
        {/* Status dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-brand-emerald border-2 border-dark-950" />

        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:rotate-12 transition-transform" />
      </a>
    </aside>
  );
}
