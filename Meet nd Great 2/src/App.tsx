
import { Calendar, Clock, MapPin, Camera, Users, Gift, BookOpen, Target, Building2, BrainCircuit, Award, Briefcase, Globe, Star, CheckCircle, TrendingUp, Lightbulb } from 'lucide-react';
import Header from './components/Header';

function App() {

  return (
    <div className="min-h-screen ">
      <Header />
      {/* Hero Section */}
      <div 
        className="relative bg-center h-[80vh]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(29, 27, 27, 0)), url("https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
              <span className="mx-2 text-yellow-500 font-semibold">EXCLUSIVE EVENT</span>
              <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet & Greet with Dr. Stephen Akintayo
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Your Exclusive Opportunity to Connect with Africa's Leading Business Visionary
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 inline-block text-center"
                href="https://app.mailingboss.com/lists/67d2f952cd552/subscribe"
              >
                Reserve My Seat Now - Only 200 Spots
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Timer Banner */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-4">
          <Clock className="w-6 h-6 text-yellow-500" />
          <p className="text-lg font-semibold">Early Bird Registration Closing Soon!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Event Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300">
            <Calendar className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Date</h3>
              <p>March 29, 2025</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300">
            <Clock className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Time</h3>
              <p>11:00 AM</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300">
            <MapPin className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p>Las Vegas</p>
            </div>
          </div>
        </div>

        {/* About Dr. Stephen Section */}
        <div id="about" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
              <img 
                src="https://s3.amazonaws.com/cco-avatars/973255f7-af63-4cc1-bcdb-9032f7d440b5.png"
                alt="Dr. Stephen Akintayo"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-white font-semibold">International Business Leader</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Dr. Stephen Akintayo</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">CEO of Stephen Akintayo Consulting International and Gtext Group and Investment Limited, leading firms in Nigeria offering services in Digital Marketing, Real Estate, and Business Consulting.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">A graduate of Microbiology from Olabisi Onabanjo University with advanced studies in Digital Marketing from the Digital Marketing Institute and Harvard University.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Trusted by multinational organizations including Guarantee Trust Bank, PZ Cussons, MTN, and Chivita, demonstrating his expertise in business development and consulting.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Started his entrepreneurial journey while still in university, organizing a groundbreaking Student Trade Fair that showcased his early business acumen.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">A visionary leader who has transformed the African business landscape through innovative approaches to digital marketing and real estate investment internationally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className="mb-16 bg-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-4">"Dr. Akintayo's mentorship transformed my small business into a multi-million dollar enterprise in just 18 months."</p>
              <p className="font-semibold">- Sarah Johnson, CEO</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-4">"His real estate strategies helped me build a property portfolio worth $5M in under 3 years."</p>
              <p className="font-semibold">- Michael Chang, Investor</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-4">"The most impactful business event I've ever attended. Worth every minute!"</p>
              <p className="font-semibold">- Lisa Martinez, Entrepreneur</p>
            </div>
          </div>
        </div> */}

        {/* Who Should Attend Section */}
        <div id="who-should-attend" className="mb-16 bg-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Who Should Attend?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition duration-300">
              <Briefcase className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Entrepreneurs</h3>
              <p className="text-gray-600">Ready to scale their businesses to new heights</p>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <Target className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Investors</h3>
              <p className="text-gray-600">Seeking high-return opportunities</p>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <Building2 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Real Estate Enthusiasts</h3>
              <p className="text-gray-600">Aspiring to build profitable portfolios</p>
            </div>
            <div className="text-center transform hover:scale-105 transition duration-300">
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Wealth Builders</h3>
              <p className="text-gray-600">Passionate about financial success</p>
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div id="topics" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <Building2 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Investments</h3>
              <p className="text-gray-600">Master high-yield opportunities and risk management strategies</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <Target className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Real Estate</h3>
              <p className="text-gray-600">Build and scale your property portfolio strategically</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <BrainCircuit className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Business Growth</h3>
              <p className="text-gray-600">Implement proven frameworks for sustainable scaling</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Success Mindset</h3>
              <p className="text-gray-600">Develop the psychology of high achievers</p>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div id="why-attend" className="mb-16 bg-gray-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Why Attend?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Ask Anything</h3>
                <p className="text-gray-300">Get personalized answers to your most pressing business questions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Target className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Actionable Insights</h3>
                <p className="text-gray-300">Gain practical strategies you can implement immediately</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Elite Network</h3>
                <p className="text-gray-300">Connect with successful entrepreneurs and investors</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 transform hover:scale-105 transition duration-300">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Exclusive Resources</h3>
                <p className="text-gray-300">Get privileged access to Dr. Akintayo's premium content</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bonuses Section */}
        <div id="bonuses" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Special Bonuses for Attendees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <Camera className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-lg mb-4">VIP Photo Session</h3>
              <p className="text-gray-600 mb-4">Exclusive one-on-one photo opportunity with Dr. Akintayo</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Professional Photography</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Digital Copy Provided</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <Gift className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-lg mb-4">Priority Mentorship Access</h3>
              <p className="text-gray-600 mb-4">First access to the exclusive mentorship program</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Early Bird Pricing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Reserved Spots</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <Users className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-lg mb-4">Elite Networking Kit</h3>
              <p className="text-gray-600 mb-4">Comprehensive resources for maximum networking impact</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Digital Business Cards</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Connection Strategy Guide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Don't Miss This Life-Changing Opportunity!</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for this exclusive event and take your first step towards transforming your business journey. Limited slots available!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://app.mailingboss.com/lists/67d2f952cd552/subscribe"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Secure Your Spot Now
            </a>
            <p className="text-yellow-500">
              <Clock className="w-5 h-5 inline-block mr-2" />
              Only 200 Spots Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Remove entire handleRegister function declaration