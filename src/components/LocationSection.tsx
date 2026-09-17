import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA, getAssetPath } from '@/data/studioData';
import { MapPin, Clock, Phone, Navigation, Car, ExternalLink, ShieldCheck, Compass } from 'lucide-react';

export default function LocationSection() {
  const { address, contact, hours } = STUDIO_DATA;
  const wazeUrl = 'https://waze.com/ul?q=Rua%20Vitorio%20Zeolla%20891%20Campo%20Grande%20MS';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Rua+Vit%C3%B3rio+Zeolla+891+Carand%C3%A1+Bosque+Campo+Grande+MS';

  return (
    <section id="localizacao" className="relative py-24 sm:py-32 bg-dark-950 border-t border-dark-800 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-brand-teal text-xs font-semibold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5 text-brand-teal" />
            <span>Localização Nobre & Fácil Acesso</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            No coração do <span className="text-gradient">Carandá Bosque</span>
          </h2>

          <p className="text-dark-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Localizado em uma das regiões mais nobres e tranquilas de Campo Grande, com estacionamento 
            próprio em frente ao estúdio e ambiente com total privacidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Information card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Facade photo preview */}
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-dark-700 group shadow-xl">
              <Image
                src={getAssetPath('/assets/images/bros_img_77.jpg')}
                alt="Fachada do Studio Bros Fitness na Rua Vitório Zeolla, Carandá Bosque"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-brand-teal block">
                  Fachada Exclusiva
                </span>
                <p className="text-white font-heading font-semibold text-lg">
                  Studio Bros Fitness
                </p>
                <p className="text-xs text-dark-300">
                  Rua Vitório Zeolla, 891 • Carandá Bosque
                </p>
              </div>
            </div>

            {/* Practical contact & logistics details */}
            <div className="p-6 rounded-2xl bg-dark-900 border border-dark-800 space-y-5 flex-1">
              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 text-brand-teal flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-dark-400">Endereço</h4>
                  <p className="text-white font-medium text-sm sm:text-base mt-0.5">
                    {address.street}, {address.number}
                  </p>
                  <p className="text-xs text-dark-300">
                    {address.neighborhood} • {address.city}/{address.state} • CEP {address.zip}
                  </p>
                </div>
              </div>

              {/* Opening hours */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 text-brand-teal flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-dark-400">Horários de Atendimento</h4>
                  <p className="text-white font-medium text-sm mt-0.5">
                    {hours.weekdays}
                  </p>
                  <p className="text-xs text-dark-300">
                    {hours.saturday}
                  </p>
                  <p className="text-[11px] text-brand-teal/90 mt-1 font-mono">
                    {hours.special}
                  </p>
                </div>
              </div>

              {/* Telephones */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 text-brand-teal flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-dark-400">Contatos Telefônicos</h4>
                  <p className="text-white font-medium text-sm mt-0.5">
                    WhatsApp: <span className="text-brand-teal font-semibold">{contact.whatsappFormatted}</span>
                  </p>
                  <p className="text-xs text-dark-300">
                    Fixo: {contact.phoneFormatted}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Styled Map Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-dark-700 bg-dark-900 flex flex-col justify-between shadow-2xl relative min-h-[460px]">
            {/* Top Bar on Map */}
            <div className="p-5 bg-dark-900/90 backdrop-blur border-b border-dark-800 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brand-teal animate-ping" />
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Carandá Bosque — Campo Grande/MS</h4>
                  <p className="text-xs text-dark-400">Rua Vitório Zeolla, 891 • Vagas exclusivas na porta</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                Região Segura & Nobre
              </span>
            </div>

            {/* Visual Vector Grid & Map Canvas */}
            <div className="relative flex-1 bg-[#0a0f10] p-6 sm:p-10 flex items-center justify-center overflow-hidden">
              {/* Grid Lines simulating city blocks */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#142022_1px,transparent_1px),linear-gradient(to_bottom,#142022_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
              
              {/* Stylized Street Curves */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50,200 Q300,100 600,280 T1200,150" fill="none" stroke="#2DD4BF" strokeWidth="3" />
                <path d="M100,-50 Q250,250 400,600" fill="none" stroke="#64748b" strokeWidth="2" />
                <path d="M500,-50 Q550,300 700,600" fill="none" stroke="#64748b" strokeWidth="2" />
                <path d="M-50,450 Q400,400 900,500" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="6,6" />
              </svg>

              {/* Central Map Pin Focus Card */}
              <div className="relative z-10 max-w-md w-full p-6 sm:p-8 rounded-3xl bg-dark-950/95 border border-brand-teal/40 shadow-2xl backdrop-blur-md text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center text-brand-teal mx-auto shadow-inner">
                  <MapPin className="w-7 h-7 animate-bounce" />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-brand-teal uppercase tracking-widest">
                    Ponto de Referência
                  </span>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                    Studio Bros Fitness
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-200 max-w-xs mx-auto">
                    Rua Vitório Zeolla, 891 — Carandá Bosque
                    <br />
                    Próximo à Av. Nelly Martins e Av. Mato Grosso
                  </p>
                </div>

                {/* Practical Amenities Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-dark-300">
                  <span className="px-2.5 py-1 rounded-md bg-dark-900 border border-dark-800">
                    ✓ Estacionamento frontal
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-dark-900 border border-dark-800">
                    ✓ Ar-condicionado integral
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-dark-900 border border-dark-800">
                    ✓ Acessível & Reservado
                  </span>
                </div>

                {/* Route Buttons */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-teal hover:bg-brand-tealLight text-dark-950 font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Navegar no Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-dark-800 hover:bg-dark-700 text-white font-bold text-xs border border-dark-700 hover:border-brand-teal transition-all active:scale-95 cursor-pointer"
                  >
                    <Car className="w-4 h-4 text-brand-teal" />
                    <span>Navegar no Waze</span>
                    <ExternalLink className="w-3.5 h-3.5 text-dark-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Direct Address Bar */}
            <div className="p-4 bg-dark-900/90 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between text-xs text-dark-400 gap-2">
              <span>Coordenadas GPS: -20.4418, -54.5822</span>
              <span className="text-dark-300 font-medium">Bairro Carandá Bosque • Campo Grande / MS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
