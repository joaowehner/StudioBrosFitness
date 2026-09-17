import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Methodology from '@/components/Methodology';
import Services from '@/components/Services';
import GalleryStructure from '@/components/GalleryStructure';
import TeamSection from '@/components/TeamSection';
import UnisaudeSection from '@/components/UnisaudeSection';
import Testimonials from '@/components/Testimonials';
import GoalSimulator from '@/components/GoalSimulator';
import LocationSection from '@/components/LocationSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 text-dark-50 selection:bg-brand-teal/30 selection:text-white relative">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Brand Manifesto & Anti-Gym Contrast */}
      <Manifesto />

      {/* Science & Physiology Pillar with Elton Lidio */}
      <Methodology />

      {/* Signature Modalities & Programs */}
      <Services />

      {/* Bento Facility Gallery & Architecture */}
      <GalleryStructure />

      {/* Team of Coaches */}
      <TeamSection />

      {/* Accredited Health Partner: Unisaúde MS */}
      <UnisaudeSection />

      {/* Real Testimonials & Social Proof */}
      <Testimonials />

      {/* Interactive Goal & Schedule Simulator */}
      <GoalSimulator />

      {/* Location, Facade, Opening Hours & Google Maps */}
      <LocationSection />

      {/* Frequent Questions (FAQ) */}
      <FaqSection />

      {/* Institutional Legal Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Channel */}
      <FloatingWhatsApp />
    </main>
  );
}
