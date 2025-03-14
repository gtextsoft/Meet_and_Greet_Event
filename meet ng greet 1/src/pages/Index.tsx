
import React from 'react';
import Hero from '@/components/Hero';
import EventDetails from '@/components/EventDetails';
import Benefits from '@/components/Benefits';
import AboutSpeaker from '@/components/AboutSpeaker';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <AboutSpeaker />
      <Benefits />
      <EventDetails />
      <Footer />
    </div>
  );
};

export default Index;
