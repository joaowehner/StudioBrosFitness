import React from 'react';
import { STUDIO_DATA, getWhatsAppUrl } from '@/data/studioData';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Mail } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-[#0A0F11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            Localização & Horários
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Onde estamos e horários de atendimento
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Fácil acesso no bairro Carandá Bosque, com estrutura preparada para receber você no seu horário marcado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#0F1618] border border-white/5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Endereço</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    {STUDIO_DATA.address.fullFormatted}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Bairro Carandá Bosque • Campo Grande/MS
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STUDIO_DATA.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <span>Abrir rota no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#0F1618] border border-white/5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">Horários de Atendimento</h3>
                  <p className="text-sm text-slate-300">
                    {STUDIO_DATA.hours.weekdays}
                  </p>
                  <p className="text-xs text-slate-400">
                    {STUDIO_DATA.hours.saturday}
                  </p>
                  <p className="text-xs text-slate-500">
                    {STUDIO_DATA.hours.sunday}
                  </p>
                </div>
              </div>
              <p className="text-xs text-emerald-400/90 pt-1 border-t border-white/5">
                {STUDIO_DATA.hours.policy}
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#0F1618] border border-white/5 space-y-4">
              <h3 className="text-sm font-semibold text-white">Canais de Contato</h3>
              
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>WhatsApp: {STUDIO_DATA.contact.phoneWhatsApp}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Fixo: {STUDIO_DATA.contact.phoneLandline}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{STUDIO_DATA.contact.email}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-black font-semibold text-xs py-3 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-transparent" />
                  <span>Falar com o Studio no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 h-full">
            <div className="relative w-full h-[400px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-[#0C1214] shadow-xl">
              <iframe
                title="Localização do Studio Bros Fitness no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.7493721385415!2d-54.58503432391295!3d-20.44859058106093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e8a0815cb539%3A0x6b4ef8ff7ef993a4!2sR.%20Vit%C3%B3rio%20Zeolla%2C%20891%20-%20Carand%C3%A1%20Bosque%2C%20Campo%20Grande%20-%20MS%2C%2079032-360!5e0!3m2!1spt-BR!2sbr!4v1711000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationSection;
