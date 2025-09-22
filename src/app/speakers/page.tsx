import { Container } from "@/components/Container";
import { Mic, Users, Star, Calendar } from "lucide-react";

export default function Speakers() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <h1 className="text-4xl md:text-6xl font-bold">Speakers</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            World-renowned experts and visionary leaders will share their insights at IEM ICDC 2026
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-center gap-12 py-20 mt-12 min-h-[60vh]">
        
        {/* Coming Soon Section */}
        <div className="w-full max-w-4xl text-center">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-12 md:p-16">
            
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-full shadow-lg">
                <Mic className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Main Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Distinguished Speakers Coming Soon
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We are curating an exceptional lineup of keynote speakers, industry pioneers, and academic leaders 
              who will inspire and share cutting-edge insights at IEM ICDC 2026.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <Users className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Industry Leaders</h3>
                <p className="text-gray-600 text-sm">Visionaries from top tech companies</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <Star className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Academic Excellence</h3>
                <p className="text-gray-600 text-sm">Renowned researchers and professors</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <Calendar className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Keynote Sessions</h3>
                <p className="text-gray-600 text-sm">Inspiring talks across all three days</p>
              </div>
            </div>

            {/* Speaker Categories Preview */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Technology Innovation</h4>
                    <p className="text-gray-600 text-sm">Latest advancements in emerging technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Research Excellence</h4>
                    <p className="text-gray-600 text-sm">Groundbreaking research methodologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Industry Insights</h4>
                    <p className="text-gray-600 text-sm">Real-world applications and case studies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Future Trends</h4>
                    <p className="text-gray-600 text-sm">Vision for tomorrow&apos;s technology landscape</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Cards */}
            {/* <div className="flex justify-center mb-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-sm">
                <Star className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-green-800 text-lg">Announcements</h4>
                <p className="text-green-600 mt-2">Coming very soon</p>
              </div>
            </div> */}

            {/* Call to Action */}
            {/* <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
              <Mic className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-4">Be the First to Know</h3>
              <p className="text-red-100 mb-6">
                Register now and receive exclusive updates about our speaker announcements, 
                including early access to speaker profiles and session details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/registrations" 
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Register for Updates
                </a>
                <a 
                  href="/papers" 
                  className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Your Paper
                </a>
              </div>
            </div> */}

          </div>
        </div>

        {/* Additional Information */}
        {/* <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl border border-gray-800 text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Why Our Speakers Matter</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              IEM ICDC 2026 will feature thought leaders who are shaping the future of technology and innovation. 
              Our carefully selected speakers will provide invaluable insights, practical knowledge, and inspiration 
              to help attendees advance their research and careers in the digital age.
            </p>
          </div>
        </div> */}

      </Container>
    </>
  );
}
