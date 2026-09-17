import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA, Trainer, getAssetPath } from '@/data/studioData';
import { Users, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipe" className="py-24 bg-[#0B1011] relative overflow-hidden border-t border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/25 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-teal-400" />
            <span>Corpo Técnico de Personal Trainers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Treinadores dedicados ao seu lado,{' '}
            <span className="text-teal-400">do primeiro minuto ao último.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Profissionais apaixonados pelo movimento humano, liderados pelo Prof. Elton Lidio. Uma equipe coesa que compartilha a mesma filosofia: segurança biomecânica, atenção humana e entrega de resultados sem atalhos.
          </p>
        </div>

        {/* Highlight Team Banner (4K Photo from Studio Plant Wall) */}
        <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 bg-slate-900 shadow-2xl mb-16 img-crisp">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <Image
              src={getAssetPath('/assets/images/bros_img_7.jpg')}
              alt="Equipe completa de professores e sócios do Studio Bros Fitness reunida em frente ao letreiro acrílico e jardim vertical"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C0D] via-transparent to-transparent opacity-80" />
          </div>

          <div className="p-6 sm:p-8 bg-[#0F1516]/95 backdrop-blur-md border-t border-teal-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block mb-1">
                Família Bros Fitness
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Equipe Unida por um Mesmo Propósito
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Elton Lidio, Nicolly, Zé, Matheus, Augusto, Alex, Saul e Marcelo.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Atendimento 100% Supervisionado
              </span>
            </div>
          </div>
        </div>

        {/* Lead Technical Coach Spotlight (Elton Lidio) */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-teal-500/30 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden border border-teal-500/20 img-crisp">
              <Image
                src={getAssetPath('/assets/images/bros_img_15.jpg')}
                alt="Prof. Elton Lidio, especialista em Fisiologia do Exercício"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>

            <div className="md:col-span-8 flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="badge-emerald">Responsável Técnico</span>
                <span className="text-xs text-slate-400">• Sócio-Proprietário</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Prof. Elton Lidio
              </h3>

              <p className="text-teal-400 font-semibold text-sm mb-4">
                Especialista em Fisiologia do Exercício & Prescrição Científica
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                “O corpo atlético e saudável que você busca é consequência direta de constância, técnica e respeito à fisiologia.” Elton é o responsável por conduzir as avaliações corporais e estruturar os parâmetros científicos aplicados por toda a equipe do Studio Bros.
              </p>

              <div className="grid grid-cols-2 gap-3 w-full max-w-md text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Avaliação de Composição Corporal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Fisiologia Clínica do Exercício</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Periodização para Longevidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Atleta de Tênis & Corrida</span>
                </div>
              </div>

              {STUDIO_DATA.trainers[0].instagram && (
                <a
                  href={`https://instagram.com/${STUDIO_DATA.trainers[0].instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-teal-300 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>{STUDIO_DATA.trainers[0].instagram}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_DATA.trainers.slice(1).map((trainer: Trainer) => (
            <div
              key={trainer.id}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-teal-400/40 transition-all duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 font-bold text-base mb-4">
                  {trainer.name.replace('Prof. ', '').replace('Prof.ª ', '').charAt(0)}
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {trainer.name}
                </h4>

                <span className="block text-xs font-semibold text-teal-400 mb-3">
                  {trainer.specialty || trainer.role}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {trainer.bio}
                </p>
              </div>

              {trainer.instagram && (
                <div className="pt-3 border-t border-white/5">
                  <a
                    href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>{trainer.instagram}</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
