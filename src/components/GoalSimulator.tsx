'use client';

import React, { useState } from 'react';
import { STUDIO_DATA } from '@/data/studioData';
import { Compass, Clock, Target, Calendar, ArrowRight, Check, MessageSquare } from 'lucide-react';

interface SimulatorState {
  goal: string;
  frequency: string;
  shift: string;
}

export default function GoalSimulator() {
  const [goal, setGoal] = useState('Alívio de dores e saúde postural');
  const [frequency, setFrequency] = useState('3 vezes na semana');
  const [shift, setShift] = useState('Manhã (06h às 10h)');

  const goals = [
    { id: 'dores', label: 'Alívio de Dores & Coluna', desc: 'Reabilitação, mobilidade e postura correta sem impactos agressivos' },
    { id: 'hipertrofia', label: 'Hipertrofia & Ganho de Força', desc: 'Estímulo muscular técnico com controle rigoroso de carga' },
    { id: 'emagrecimento', label: 'Emagrecimento & Metabolismo', desc: 'Composição corporal sustentável com avaliação fisiológica' },
    { id: 'performance', label: 'Performance Atlética', desc: 'Potência e prevenção para esportes (tênis, corrida, ciclismo)' },
    { id: 'unisaude', label: 'Beneficiário Unisaúde MS', desc: 'Atendimento qualificado credenciado pelo plano' },
  ];

  const frequencies = [
    { id: '2x', label: '2x na semana', sub: 'Mínimo para consistência ativa' },
    { id: '3x', label: '3x na semana', sub: 'Ritmo ideal recomendado' },
    { id: '4x', label: '4x ou mais', sub: 'Intensidade e aceleração' },
  ];

  const shifts = [
    { id: 'manha', label: 'Manhã', sub: '06h00 às 11h00' },
    { id: 'almoco', label: 'Meio do Dia', sub: '11h30 às 14h30' },
    { id: 'tarde-noite', label: 'Fim de Tarde / Noite', sub: '16h00 às 21h00' },
  ];

  // Generate customized WhatsApp link
  const generateSimulatorWhatsApp = () => {
    const text = `Olá Studio Bros! Montei meu perfil no simulador do site:
• Meu objetivo: ${goal}
• Frequência desejada: ${frequency}
• Horário de preferência: ${shift}

Gostaria de saber como iniciar e agendar uma visita ao estúdio no Carandá Bosque.`;
    return `https://wa.me/${STUDIO_DATA.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="simulador" className="relative py-24 sm:py-32 bg-dark-900 border-t border-dark-800 overflow-hidden">
      {/* Background decorations */}
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-brand-teal text-xs font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5 text-brand-teal" />
            <span>Simulador de Rotina Personalizada</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Descubra o formato ideal para <br className="hidden sm:inline" />
            <span className="text-gradient">sua rotina e seu objetivo</span>.
          </h2>

          <p className="text-dark-300 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Selecione seu foco principal, a frequência que cabe na sua semana e o horário de sua preferência. 
            Nossa equipe prepara um plano ajustado antes mesmo do seu primeiro treino.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-dark-950 p-6 sm:p-8 rounded-3xl border border-dark-800">
            {/* Step 1: Goal */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-teal">
                <Target className="w-4 h-4" />
                Passo 1: Qual é o seu foco principal?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((g) => {
                  const isSelected = goal === g.label;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.label)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-brand-teal/10 border-brand-teal text-white shadow-sm'
                          : 'bg-dark-900 border-dark-800 text-dark-300 hover:border-dark-700 hover:text-dark-100'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-sm text-white">{g.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />}
                      </div>
                      <span className="text-xs text-dark-400 mt-1 leading-snug">{g.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Frequency */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-teal">
                <Calendar className="w-4 h-4" />
                Passo 2: Quantos dias na semana pretende treinar?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {frequencies.map((f) => {
                  const isSelected = frequency === f.label;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFrequency(f.label)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-brand-teal/10 border-brand-teal text-white'
                          : 'bg-dark-900 border-dark-800 text-dark-300 hover:border-dark-700 hover:text-dark-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-white">{f.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-brand-teal" />}
                      </div>
                      <span className="text-[11px] text-dark-400 block mt-1">{f.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Shift */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-teal">
                <Clock className="w-4 h-4" />
                Passo 3: Qual período do dia você prefere?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {shifts.map((s) => {
                  const isSelected = shift === `${s.label} (${s.sub})`;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setShift(`${s.label} (${s.sub})`)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-brand-teal/10 border-brand-teal text-white'
                          : 'bg-dark-900 border-dark-800 text-dark-300 hover:border-dark-700 hover:text-dark-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-white">{s.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-brand-teal" />}
                      </div>
                      <span className="text-[11px] text-dark-400 block mt-1">{s.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-b from-dark-800 to-dark-950 border border-dark-700 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal to-brand-emerald" />

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-teal block mb-1">
                    Seu Perfil Personalizado
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Plano Sob Medida
                  </h3>
                  <p className="text-xs text-dark-400 mt-1">
                    Baseado nas respostas selecionadas no simulador
                  </p>
                </div>

                {/* Summary badges */}
                <div className="space-y-3 p-4 rounded-2xl bg-dark-900/90 border border-dark-800 text-sm">
                  <div className="flex items-center justify-between py-1 border-b border-dark-800">
                    <span className="text-dark-400 text-xs">Objetivo:</span>
                    <span className="text-white font-medium text-right text-xs sm:text-sm">{goal}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-dark-800">
                    <span className="text-dark-400 text-xs">Frequência:</span>
                    <span className="text-brand-teal font-medium text-xs sm:text-sm">{frequency}</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-dark-400 text-xs">Horário:</span>
                    <span className="text-white font-medium text-xs sm:text-sm">{shift}</span>
                  </div>
                </div>

                {/* What happens next */}
                <div className="space-y-2 text-xs text-dark-300">
                  <p className="font-semibold text-white">O que acontece a seguir?</p>
                  <ul className="space-y-1.5 list-disc list-inside text-dark-300">
                    <li>Sua mensagem chega pronta no WhatsApp da recepção técnica.</li>
                    <li>Verificamos a grade de horários livres no Carandá Bosque.</li>
                    <li>Você visita o estúdio e define o início do seu acompanhamento.</li>
                  </ul>
                </div>

                {/* Main WhatsApp CTA Button */}
                <a
                  href={generateSimulatorWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand-teal hover:bg-brand-tealLight text-dark-950 font-bold text-sm tracking-wide shadow-lg shadow-brand-teal/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Enviar Meu Perfil pelo WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-center text-[11px] text-dark-400">
                  Sem robôs ou mensagens automáticas vazias. Resposta direta da equipe Bros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
