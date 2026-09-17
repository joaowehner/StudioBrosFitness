'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrosLogo } from './BrosLogo';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { MessageCircle, Menu, X, MapPin, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Studio', href: '#studio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Unisaúde', href: '#unisaude' },
    { label: 'Localização & Horários', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Micro Status Bar */}
      <div className="bg-[#050808] border-b border-white/5 text-[11px] text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Treinamento Personalizado • Carandá Bosque
            </span>
            <span className="text-slate-700">|</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-teal-400" />
              Rua Vitório Zeolla, 891
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Atendimento com hora marcada
            </span>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${STUDIO_DATA.contact.phoneLandline.replace(/\D/g, '')}`}
              className="hover:text-teal-300 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              {STUDIO_DATA.contact.phoneLandline}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080C0D]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-[#080C0D]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg"
          >
            <BrosLogo size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-black font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0F11] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-teal-300 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-black font-semibold text-sm py-3 rounded-xl shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-black text-transparent" />
                <span>Agendar no WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
                <span>Fixo: {STUDIO_DATA.contact.phoneLandline}</span>
                <span className="text-emerald-400">Hora marcada</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
