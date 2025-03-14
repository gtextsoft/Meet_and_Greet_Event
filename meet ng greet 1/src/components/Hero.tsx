
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToEventDetails = () => {
    const element = document.getElementById('event-details');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="gradient-bg text-white py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            Meet & Greet with <span className="gold-text">Dr. Stephen Akintayo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Your Exclusive Opportunity to Connect with a Business Visionary
          </p>
          
          <div className="bg-black/30 p-6 rounded-lg max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <p className="text-lg mb-4 font-medium text-left">
              Join Africa's foremost entrepreneur, investor, and bestselling author, Dr. Stephen Akintayo, 
              for an exclusive, interactive meet-and-greet event! This is your rare opportunity to sit 
              face-to-face with a business titan, dive deep into his wealth of knowledge, and get 
              personalized answers to your burning questions about:
            </p>
            <ul className="text-left space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-event-gold font-bold mr-2">•</span>
                <span><strong className="text-event-gold">Investments:</strong> Discover high-yield opportunities and avoid costly pitfalls.</span>
              </li>
              <li className="flex items-start">
                <span className="text-event-gold font-bold mr-2">•</span>
                <span><strong className="text-event-gold">Real Estate:</strong> Learn strategies to build a profitable portfolio in any market.</span>
              </li>
              <li className="flex items-start">
                <span className="text-event-gold font-bold mr-2">•</span>
                <span><strong className="text-event-gold">Business Growth:</strong> Unlock frameworks to scale sustainably and dominate your industry.</span>
              </li>
              <li className="flex items-start">
                <span className="text-event-gold font-bold mr-2">•</span>
                <span><strong className="text-event-gold">Success Strategies:</strong> Master mindset shifts and habits of top performers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-event-gold font-bold mr-2">•</span>
                <span><strong className="text-event-gold">His Bestselling Books:</strong> Learn from Dr. Akintayo's best-selling books and discover strategies that can transform your financial journey.</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={scrollToEventDetails}
              className="bg-event-gold text-event-primary hover:bg-yellow-500 px-8 py-6 text-lg rounded-md font-semibold"
            >
              SECURE YOUR <b>FREE</b> SPOT NOW
            </Button>
          </div>
          <p className="text-sm mt-4 animate-fade-in text-gray-300" style={{ animationDelay: '0.4s' }}>
            200 Slots Available – Register Now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
