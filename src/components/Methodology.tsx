import React from 'react';
import Image from 'next/image';
import { getWhatsAppUrl, getAssetPath } from '@/data/studioData';
import { ClipboardCheck, Activity, Target, ArrowRight, MessageCircle, FileText, CheckCircle } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-[#080C0D] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/25 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Activity className="w-3.5 h-3.5 text-teal-400" />
            <span>Fisiologia & Método Científico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            “Sem avaliação, você treina no escuro.{' '}
            <span className="text-teal-400">Com ela, cada gota de suor tem direção.”</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            No Studio Bros, seu treinamento não parte de palpites nem de planilhas genéricas de internet. Toda prescrição é fundamentada em fisiologia do exercício, análise biomecânica e testes corporais minuciosos conduzidos pelo Prof. Elton Lidio.
          </p>
        </div>

        {/* 2-Column Layout: Photo of Elton in his office + 3 Step Method */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Office Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-teal-500/20 bg-slate-900 shadow-2xl img-crisp aspect-[3/4]">
              <Image
                src={getAssetPath('/assets/images/bros_img_15.jpg')}
                alt="Prof. Elton Lidio em sua sala de avaliação física e fisiologia do exercício no Studio Bros Fitness"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080C0D] via-transparent to-transparent opacity-80" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-[#0F1516]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-white">Prof. Elton Lidio</span>
                  <span className="text-xs text-teal-400">• Sócio-Proprietário</span>
                </div>
                <p className="text-xs text-slate-300">
                  Especialista em Fisiologia do Exercício. Responsável técnico pelo protocolo de avaliação e acompanhamento fisiológico do Studio Bros.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Steps */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1 */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border-l-4 border-l-teal-400">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                  Etapa 01 • Diagnóstico Corporal
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  Fisiologia
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Avaliação Física & Mapeamento de Saúde
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Medição de percentual de gordura corporal, massa magra, histórico clínico, assimetrias articulares e capacidade cardiorrespiratória. Você descobre exatamente onde seu corpo está e o que precisa ser trabalhado.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-teal-400" /> Adipometria & Dobras
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-teal-400" /> Rastreio Postural
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-teal-400" /> Análise de Mobilidade
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border-l-4 border-l-emerald-400">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Etapa 02 • Prescrição
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Personalização
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Periodização Individual Sob Medida
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Desenho do cronograma semanal de treinamento com volume, cadência e intensidade calibrados para sua rotina, garantindo evolução consistente sem risco de sobrecarga ou lesão.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-emerald-400" /> Volume Inteligente
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-emerald-400" /> Prevenção Ortopédica
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-emerald-400" /> Foco em Longevidade
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border-l-4 border-l-teal-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                  Etapa 03 • Execução Técnica
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-500/10 text-teal-200 border border-teal-500/20">
                  Presencial
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Acompanhamento Próximo em Cada Repetição
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Seu treinador está presente ao seu lado em cada série. Ele corrige a trajetória articular, controla intervalos de descanso e estimula você a superar seus limites com total segurança.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-teal-300" /> Correção em Tempo Real
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-teal-300" /> Reavaliações Periódicas
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3 text-teal-300" /> Feedback Contínuo
                </span>
              </div>
            </div>

            {/* Micro CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma Avaliação Física e entender como funciona o acompanhamento fisiológico no Studio Bros.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-semibold text-sm border-b border-teal-400/40 hover:border-teal-400 pb-1 transition-all"
              >
                <span>Agendar Avaliação Física no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Methodology;
