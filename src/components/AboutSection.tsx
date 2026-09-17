import React from 'react';
import { UserCheck, Clock, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="studio" className="py-16 md:py-24 bg-[#0A0F11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            Sobre o Studio
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Treinamento personalizado com hora marcada e atenção profissional.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            O Studio Bros Fitness oferece acompanhamento presencial dedicado de personal trainers em cada sessão. O foco é proporcionar supervisão técnica contínua, orientação postural e constância nos treinos, em um ambiente reservado e organizado no Carandá Bosque.
          </p>
        </div>

        {/* 3 Real Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0F1618] border border-white/5 hover:border-teal-500/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Acompanhamento Profissional
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Treinador presente orientando seus movimentos do início ao fim, ajustando cargas e supervisionando a execução técnica.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1618] border border-white/5 hover:border-teal-500/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Sessões com Hora Marcada
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Atendimento com capacidade controlada. Você chega no seu horário agendado, treina com tranquilidade e cumpre sua rotina com previsibilidade.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0F1618] border border-white/5 hover:border-teal-500/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Ambiente Reservado
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Espaço totalmente climatizado, com pesos livres e máquinas selecionadas, localizado na Rua Vitório Zeolla, no Carandá Bosque.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
