import React from 'react';
import { STUDIO_DATA } from '@/data/studioData';
import { Sparkles, Shield, XCircle, CheckCircle2, Clock, Dumbbell, HeartPulse, Compass } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-[#0B1011] relative overflow-hidden border-t border-b border-teal-500/10">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-500/25 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Manifesto Studio Bros</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            “Constância é luxo.{' '}
            <span className="text-teal-400">Não é sobre excessos. É sobre presença.”</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Cuidar do corpo com regularidade, respeito e consciência é uma escolha de quem entende que{' '}
            <strong className="text-white font-semibold">saúde não é urgência, é patrimônio</strong>. No Studio Bros, o tempo trabalha a favor de quem permanece.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="glass-card p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Direção sem Pressa</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Quem tem direção não precisa correr no escuro. Cada exercício tem um propósito biomecânico claro para seu corpo.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ambiente Reservado</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Capacidade estritamente limitada. Treine em um refúgio acolhedor no Carandá Bosque, sem olhares curiosos nem ruído estridente.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Embasamento Fisiológico</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Diagnóstico preciso de composição corporal, percentual de gordura e testes musculares antes de iniciar o plano.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Respeito ao seu Tempo</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Sessões com hora marcada que começam e terminam no horário, garantindo que o seu treino encaixe perfeitamente na sua rotina.
            </p>
          </div>
        </div>

        {/* Side-by-Side Reality Comparison: Academia Convencional vs. Studio Bros */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-teal-500/20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              A Diferença na Prática
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Por que quem experimenta o Studio Bros não volta para academias comuns
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* The Conventional Gym Pain Points */}
            <div className="pt-6 md:pt-0 md:pr-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-base mb-4">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Na Academia Tradicional de Rede</span>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400/80 font-bold">✕</span>
                  <span>Superlotação nos horários de pico e disputa constante por aparelhos e pesos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400/80 font-bold">✕</span>
                  <span>Instrutor geral cuidando de dezenas de alunos ao mesmo tempo, sem atenção individual.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400/80 font-bold">✕</span>
                  <span>Fichas padronizadas que ignoram dores, assimetrias e histórico de lesões.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400/80 font-bold">✕</span>
                  <span>Ambiente barulhento, impessoal e desmotivador para quem preza por foco.</span>
                </li>
              </ul>
            </div>

            {/* The Studio Bros Boutique Standard */}
            <div className="pt-6 md:pt-0 md:pl-8 space-y-4">
              <div className="flex items-center gap-2 text-teal-300 font-bold text-base mb-4">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>No Studio Bros Fitness (Carandá Bosque)</span>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Capacidade rigorosamente limitada:</strong> você treina sem interrupções nem filas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Personal ao seu lado:</strong> correção de postura e cadência em cada repetição.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Prescrição científica:</strong> avaliação física prévia pelo Prof. Elton Lidio (Fisiologia).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Boutique e acolhedor:</strong> jardim vertical, ambiente climatizado e conexão humana real.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-slate-400">
              Localizado na Rua Vitório Zeolla, 891 • Carandá Bosque, Campo Grande/MS • Convênio oficial Unisaúde MS
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Manifesto;
