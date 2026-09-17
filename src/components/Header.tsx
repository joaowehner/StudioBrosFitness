'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrosLogo } from './BrosLogo';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { MessageCircle, Menu, X, Clock, MapPin, Phone } from 'lucide-react';

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
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Unisaúde', href: '#unisaude' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      {/* Micro Status Bar */}
      <div className="bg-[#050808] border-b border-teal-950/40 text-[11px] text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ambiente Reservado • Capacidade Controlada
            </span>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-teal-400" />
              Rua Vitório Zeolla, 891 • Carandá Bosque
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-teal-400" />
              Seg a Sex: 06h às 21h • Sáb: 07h às 12h
            </span>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${STUDIO_DATA.phoneLandline.replace(/\D/g, '')}`}
              className="hover:text-teal-300 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              {STUDIO_DATA.phoneLandline}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080C0D]/90 backdrop-blur-md border-b border-teal-500/15 py-3 shadow-lg shadow-black/40'
            : 'bg-[#080C0D]/70 backdrop-blur-sm border-b border-white/5 py-4'
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
              className="btn-tactile inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-black font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200 border border-teal-300/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle (Min 44x44px hit area) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-4">
            <div className="pb-4 border-b border-white/10">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                Navegação
              </span>
            </div>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-200 hover:text-teal-300 py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                Rua Vitório Zeolla, 891 - Carandá Bosque
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                Seg a Sex: 06h às 21h • Sáb: 07h às 12h
              </p>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-tactile w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-black font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-teal-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar Diretamente no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
