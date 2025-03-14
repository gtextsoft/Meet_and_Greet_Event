
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-event-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold gold-text">Meet & Greet with Dr. Stephen Akintayo</h3>
            <p className="text-sm mt-1">Transform your business and investment journey</p>
          </div>
          
          <div className="text-sm text-gray-300">
            <p>© {currentYear} Dr. Stephen Akintayo. All rights reserved.</p>
            <p className="mt-1">Event organized by Gtext Global</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
