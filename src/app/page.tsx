import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import GalleryStructure from '@/components/GalleryStructure';
import TeamSection from '@/components/TeamSection';
import SocialProofSection from '@/components/SocialProofSection';
import UnisaudeSection from '@/components/UnisaudeSection';
import LocationSection from '@/components/LocationSection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080C0D] text-slate-100 selection:bg-teal-500/30 selection:text-white relative">
      {/* 1. Header Fixo & Micro Status Bar */}
      <Header />

      {/* 2. Hero: Proposta Factual + CTA + Foto Real */}
      <Hero />

      {/* 3. O Studio: Proposta e 3 Fatos Verificados */}
      <AboutSection />

      {/* 4. Serviços: 3 Formatos Reais de Treinamento */}
      <Services />

      {/* 5. Estrutura: Galeria Visual com Legendas Reais */}
      <GalleryStructure />

      {/* 6. Equipe: Treinadores Reais e Fotos Autênticas */}
      <TeamSection />

      {/* 7. Prova Social: Nota 5.0 Google e Reconhecimento Real */}
      <SocialProofSection />

      {/* 8. Convênio Unisaúde MS (Bloco Direto e Transparente) */}
      <UnisaudeSection />

      {/* 9. Localização, Horários & Mapa Interativo */}
      <LocationSection />

      {/* 10. FAQ: 4 Perguntas Essenciais */}
      <FaqSection />

      {/* 11. CTA Final com Convite ao WhatsApp */}
      <FinalCtaSection />

      {/* 12. Rodapé Institucional com Dados Legais Completos */}
      <Footer />

      {/* 13. Atendimento Flutuante no WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
