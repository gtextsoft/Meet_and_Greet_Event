
import React from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Ask Anything",
      description: "Bring your toughest questions—this session is tailored to YOU."
    },
    {
      title: "Actionable Insights",
      description: "Walk away with step-by-step strategies to implement immediately."
    },
    {
      title: "Network",
      description: "Connect with ambitious entrepreneurs and investors in your city."
    },
    {
      title: "Free Resources",
      description: "Exclusive access to Dr. Akintayo's books and investment checklists."
    }
  ];

  const topics = [
    {
      title: "Investments",
      description: "Discover high-yield opportunities and avoid costly pitfalls."
    },
    {
      title: "Real Estate",
      description: "Learn strategies to build a profitable portfolio in any market."
    },
    {
      title: "Business Growth",
      description: "Unlock frameworks to scale sustainably and dominate your industry."
    },
    {
      title: "Success Strategies",
      description: "Master mindset shifts and habits of top performers."
    },
    {
      title: "His Bestselling Books",
      description: "Learn from Dr. Akintayo's best-selling books and discover strategies that can transform your financial journey."
    }
  ];

  const attendees = [
    "Entrepreneurs looking to scale their businesses",
    "Investors seeking high-return opportunities",
    "Aspiring real estate moguls",
    "Anyone passionate about financial success and wealth-building"
  ];

  const bonuses = [
    "Photo Session with Dr. Akintayo",
    "Priority Access to his upcoming mentorship program",
    "Networking Toolkit"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-event-primary">
            This isn't just a meet up. It's a <span className="gold-text">masterclass</span> for turning ideas into empires
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't miss this rare opportunity to learn directly from one of Africa's top business minds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-event-primary">What You'll Learn</h3>
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-event-primary rounded-full p-1 flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-event-primary">{topic.title}</h4>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-event-primary">Why Attend?</h3>
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-event-primary rounded-full p-1 flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-event-primary">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-event-primary">Who Should Attend?</h3>
            <ul className="space-y-2 mb-10">
              {attendees.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-event-primary rounded-full p-1 mr-3 flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-event-light p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-event-primary">Special Bonus for Attendees</h3>
              <ul className="space-y-2">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-center">
                    <div className="text-event-gold mr-3">
                      <Check size={20} />
                    </div>
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
