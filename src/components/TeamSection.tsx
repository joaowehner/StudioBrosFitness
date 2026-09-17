import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA } from '@/data/studioData';
import { InstagramIcon } from './Icons';
import { Users, Award, ShieldCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipe" className="py-16 md:py-24 bg-[#080C0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            Equipe Técnica
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Treinadores dedicados ao seu resultado
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Acompanhamento presencial próximo, correção biomecânica e planejamento individualizado conduzido por profissionais de Educação Física.
          </p>
        </div>

        {/* Master Collective Team Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0C1214] border border-white/10 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Collective Photo - Preserves Full Composition & All 9 Members */}
            <div className="lg:col-span-7 relative bg-black/40 p-2 sm:p-4 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[620px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={STUDIO_DATA.teamCollective.photo}
                  alt={STUDIO_DATA.teamCollective.alt}
                  fill
                  priority={false}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
              </div>
            </div>

            {/* Collective Description & Values */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-400">
                <Users className="w-3.5 h-3.5" />
                <span>Foto Oficial da Equipe</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {STUDIO_DATA.teamCollective.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {STUDIO_DATA.teamCollective.description}
                </p>
              </div>

              {/* Verified Coaches Mention */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Treinadores da Equipe Studio Bros:
                </p>
                <div className="flex flex-wrap gap-2">
                  {STUDIO_DATA.coachesList.map((coach, idx) => (
                    <a
                      key={idx}
                      href={`https://www.instagram.com/${coach.instagram.replace('@', '')}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-teal-500/15 border border-white/10 hover:border-teal-500/30 text-xs font-medium text-slate-300 hover:text-teal-300 transition-colors"
                    >
                      <InstagramIcon className="w-3 h-3 text-teal-400" />
                      <span>{coach.name}</span>
                      <span className="text-[10px] text-slate-500">({coach.instagram})</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Confirmed Individual Profiles with Authentic Media */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Acompanhamento Individual Confirmado
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Profissionais com registro e atuação verificada em sala de treinamento e avaliação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDIO_DATA.trainers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden bg-[#0C1214] border border-white/10 hover:border-teal-500/30 transition-all duration-300"
              >
                {/* Photo Column */}
                <div className="relative w-full sm:w-48 aspect-[4/5] sm:aspect-auto shrink-0 bg-[#141C1F]">
                  <Image
                    src={member.photo}
                    alt={member.photoAlt || member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 200px"
                  />
                </div>

                {/* Info Column */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white">
                        {member.name}
                      </h4>
                      {member.cref && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-teal-500/15 text-teal-300 border border-teal-500/30">
                          <Award className="w-3 h-3" />
                          {member.cref}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {member.id === 'elton'
                        ? 'Responsável técnico pelo estúdio, condução das avaliações físicas privativas e prescrição de treinamento com foco em mobilidade e força.'
                        : 'Acompanhamento presencial com supervisão contínua de movimentos, progressão de sobrecarga e motivação técnica durante o treino.'}
                    </p>
                  </div>

                  {member.instagram && (
                    <div className="pt-3 border-t border-white/5">
                      <a
                        href={`https://www.instagram.com/${member.instagram.replace('@', '')}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 transition-colors font-medium"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>{member.instagram}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
