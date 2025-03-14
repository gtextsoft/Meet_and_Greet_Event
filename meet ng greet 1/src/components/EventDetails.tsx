
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const EventDetails = () => {
  const events = [
    {
      city: "OTTAWA",
      date: "March 29, 2025",
      time: "11:00 AM",
      id: "ottawa"
    },
    {
      city: "MONTREAL",
      date: "April 5, 2025",
      time: "11:00 AM",
      id: "montreal"
    }
  ];

  return (
    <div className="py-16 bg-event-light" id="event-details">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-event-primary">
          Event Details
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="event-card border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-event-primary text-white p-4 text-center">
                  <h3 className="text-2xl font-bold">{event.city}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="mr-3 text-event-accent" size={20} />
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Clock className="mr-3 text-event-accent" size={20} />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-center mb-6">
                    <MapPin className="mr-3 text-event-accent" size={20} />
                    <span className="text-gray-700">Venue details will be shared upon registration</span>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-md">
                    <a 
                      href={`https://app.mailingboss.com/lists/66fbc2239ebe8/subscribe`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-center font-medium text-event-primary hover:text-event-accent transition-colors block w-full"
                    >
                      FREE but registration is compulsory
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
