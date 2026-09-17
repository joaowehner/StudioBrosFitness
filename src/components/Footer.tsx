import React from 'react';
import Link from 'next/link';
import { BrosLogo } from './BrosLogo';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050708] border-t border-white/5 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <BrosLogo size="md" />
            </Link>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Treinamento personalizado com hora marcada no Carandá Bosque. Orientação profissional atenta, ambiente reservado e sem superlotação.
            </p>
            <div className="pt-1">
              <a
                href={STUDIO_DATA.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{STUDIO_DATA.social.instagram}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-white font-semibold text-xs uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#studio" className="hover:text-teal-300 transition-colors">O Studio</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-teal-300 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-teal-300 transition-colors">Estrutura</a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-teal-300 transition-colors">Equipe</a>
              </li>
              <li>
                <a href="#unisaude" className="hover:text-teal-300 transition-colors">Convênio Unisaúde</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-teal-300 transition-colors">Localização & Horários</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-300 transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 space-y-3">
            <p className="text-white font-semibold text-xs uppercase tracking-wider">
              Atendimento & Contato
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{STUDIO_DATA.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                  WhatsApp: {STUDIO_DATA.contact.phoneWhatsApp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${STUDIO_DATA.contact.phoneLandline.replace(/\D/g, '')}`} className="hover:text-teal-300">
                  Telefone Fixo: {STUDIO_DATA.contact.phoneLandline}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{STUDIO_DATA.contact.email}</span>
              </div>
              <p className="text-slate-400 pt-1 text-[11px]">
                {STUDIO_DATA.hours.weekdays} • Atendimento com hora marcada
              </p>
            </div>
          </div>

        </div>

        {/* Corporate / Legal Information */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            <span>{STUDIO_DATA.legal.companyName}</span> • <span>CNPJ: {STUDIO_DATA.legal.cnpjFormatted}</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Studio Bros Fitness. Todos os direitos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
