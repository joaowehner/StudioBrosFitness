import React from 'react';
import Image from 'next/image';
import { STUDIO_DATA } from '@/data/studioData';
import { InstagramIcon } from './Icons';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipe" className="py-16 md:py-24 bg-[#080C0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            Equipe
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
            Profissionais do Studio Bros
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Treinadores dedicados ao acompanhamento técnico dos alunos em sala de treino.
          </p>
        </div>

        {/* Real Team Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {STUDIO_DATA.trainers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col rounded-2xl overflow-hidden bg-[#0C1214] border border-white/5 hover:border-teal-500/20 transition-colors"
            >
              <div className="relative aspect-square w-full bg-[#131A1D]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {member.role}
                  </p>
                </div>

                {member.instagram && (
                  <div className="pt-3 mt-2 border-t border-white/5">
                    <a
                      href={`https://www.instagram.com/${member.instagram.replace('@', '')}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-400 transition-colors"
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
    </section>
  );
};

export default TeamSection;
