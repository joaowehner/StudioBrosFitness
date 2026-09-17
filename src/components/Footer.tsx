import React from 'react';
import BrosLogo from './BrosLogo';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { Phone, MapPin, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const { legal, contact, address, hours, social } = STUDIO_DATA;
  const whatsappUrl = getWhatsAppUrl();

  const navigation = [
    { label: 'O Studio', href: '#manifesto' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Programas', href: '#servicos' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Convênio Unisaúde', href: '#convenio' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <footer className="bg-dark-950 text-dark-300 border-t border-dark-800 relative z-10 font-sans">
      {/* Top CTA Banner */}
      <div className="border-b border-dark-800 bg-gradient-to-r from-dark-900 via-dark-800/40 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Pronto para treinar com foco, respeito e método?
              </h3>
              <p className="text-dark-300 text-sm sm:text-base max-w-xl">
                Venha tomar um café conosco no Carandá Bosque e conhecer o espaço.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-teal hover:bg-brand-tealLight text-dark-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-brand-teal/20 active:scale-[0.98] flex-shrink-0"
            >
              Agendar Visita ao Studio
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="inline-block" aria-label="Voltar ao início">
              <BrosLogo />
            </a>
            <p className="text-sm text-dark-300 leading-relaxed">
              Studio Boutique de Treinamento Personalizado no Carandá Bosque. 
              Ambiente privativo, sem lotação, com foco integral em saúde, 
              biomecânica precisa e longevidade física.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-dark-300 hover:text-brand-teal hover:border-brand-teal transition-colors"
                aria-label="Instagram Studio Bros"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-800 flex items-center justify-center text-dark-300 hover:text-brand-teal hover:border-brand-teal transition-colors"
                aria-label="WhatsApp Studio Bros"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-dark-400 hover:text-brand-teal transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Atendimento & Contato
            </h4>
            <div className="space-y-3 text-sm text-dark-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                <span>
                  {address.street}, {address.number} — {address.neighborhood}
                  <br />
                  {address.city}/{address.state} • CEP {address.zip}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>
                  WhatsApp: <strong className="text-white">{contact.whatsappFormatted}</strong> | Fixo: {contact.phoneFormatted}
                </span>
              </div>

              <div className="pt-2 border-t border-dark-800">
                <span className="block text-xs font-mono text-dark-400 uppercase tracking-wider mb-1">
                  Horários
                </span>
                <p className="text-white text-xs sm:text-sm">{hours.weekdays}</p>
                <p className="text-dark-400 text-xs">{hours.saturday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-16 pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-400 font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {legal.companyName} • CNPJ {legal.cnpjFormatted}
            </p>
            <p className="text-dark-300">
              {legal.tradeName} — Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4 text-dark-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              Credenciado Unisaúde MS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
