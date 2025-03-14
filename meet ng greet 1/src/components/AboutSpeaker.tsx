
import React from 'react';

const AboutSpeaker = () => {
  return (
    <div className="py-16 gradient-bg text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="rounded-full overflow-hidden border-4 border-event-gold max-w-xs mx-auto">
              <img 
                src="https://s3.amazonaws.com/cco-avatars/973255f7-af63-4cc1-bcdb-9032f7d440b5.png" 
                alt="Dr. Stephen Akintayo" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gold-text">Dr. Stephen Akintayo</span>
            </h2>
            <p className="text-lg mb-4">
              Dr. Stephen Akintayo is Africa's foremost entrepreneur, investor, and bestselling author, with a proven track record of transforming businesses and investment portfolios.
            </p>
            <p className="text-lg mb-4">
              As the CEO of Gtext Global, he has built multiple seven-figure businesses across real estate, technology, and education sectors, impacting thousands of entrepreneurs and investors worldwide.
            </p>
            <p className="text-lg mb-4">
              His bestselling books have helped countless individuals achieve financial freedom, and his investment strategies have created wealth for people across various income levels.
            </p>
            <p className="text-lg font-semibold gold-text">
              This is your rare opportunity to meet him in person and transform your business and investment journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSpeaker;
