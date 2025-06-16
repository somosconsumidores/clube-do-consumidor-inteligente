
import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Assistants from '../components/Assistants';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Hero />
      <Benefits />
      <Assistants />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
