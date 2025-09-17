import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Conference",
  description: "Learn about IEM ICDC 2026 - International Conference on Computational Intelligence, Data Science and Cloud Computing. Discover our mission, vision, and the exciting research areas we cover in AI, data science, and cloud computing.",
  keywords: [
    "About IEM ICDC 2026",
    "Conference Information",
    "Research Areas",
    "Computational Intelligence",
    "Data Science Conference",
    "Cloud Computing Research",
    "AI Conference India",
    "Academic Research"
  ],
  openGraph: {
    title: "About IEM ICDC 2026 - Conference Details",
    description: "Learn about IEM ICDC 2026 - International Conference on Computational Intelligence, Data Science and Cloud Computing. Discover our mission, vision, and research areas.",
    images: ["/images/A1.jpeg"],
  },
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About IEM ICDC 2026</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about the International Conference on Computational Intelligence, Data Science and Cloud Computing
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start gap-16 md:pb-20 pb-10 mt-12">
        
        {/* Host Institute Section */}
        <div className="w-full max-w-7xl">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex md:flex-row flex-col">
              {/* Content */}
              <div className="flex-1 p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">About The Host Institute</h2>
                  </div>
                  
                  <div className="text-gray-700 space-y-4 text-base md:text-lg leading-relaxed">
                    <p>
                      The IEM group is an acclaimed educational group amongst the industry-centred academic training organisations of today. IEM has set sublime standards in addressing the technical and managerial resource shortage in the new era of dynamic globalisation.
                    </p>
                    <p>
                      The IEM group has risen to fame for its strong foundation in teaching and R&D in multifaceted areas. It aims to serve the future generation as well as the Nation through its commitment towards self-sufficiency and unmatchable excellence.
                    </p>
                    <p>
                      IEM is one of the top-ranked engineering colleges in Kolkata and Eastern India which provides the best engineering course with 100% job assistance.
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-red-600">15+</div>
                        <div className="text-sm text-gray-600">Years of Excellence</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-red-600">100%</div>
                        <div className="text-sm text-gray-600">Job Assistance</div>
                      </div>
                      <div className="text-center col-span-2 md:col-span-1">
                        <div className="text-2xl md:text-3xl font-bold text-red-600">Top</div>
                        <div className="text-sm text-gray-600">Ranked in Eastern India</div>
                      </div>
                    </div>
                    
                    <Link 
                      href="https://iem.edu.in/" 
                      target="_blank"
                      className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-200 mt-4"
                    >
                      <span>Visit IEM Website</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="md:w-80 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-200/30 to-red-300/30 rounded-2xl blur-xl"></div>
                  <Image 
                    src="/images/iem-logo.png" 
                    width={250} 
                    height={250} 
                    alt="IEM Logo" 
                    className="relative z-10 object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Section */}
        <div className="w-full max-w-7xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-xl border border-gray-800 overflow-hidden text-white">
            <div className="flex md:flex-row-reverse flex-col">
              {/* Content */}
              <div className="flex-1 p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                    <h2 className="text-2xl md:text-3xl font-bold">About The Conference</h2>
                  </div>
                  
                  <div className="text-gray-300 space-y-4 text-base md:text-lg leading-relaxed">
                    <p>
                      <span className="text-white font-semibold">IEM ICDC 2026: 4th International Conference on Computational Intelligence, Data Science and Cloud Computing</span> is an endeavour in enticing interest for Computational Intelligence and Data Science applications in diverse domains.
                    </p>
                    <p>
                      As the world is moving towards industry 4.0, Computational Intelligence, Data Science and Cloud Computing are becoming more and more relevant in our society in all possible ways.
                    </p>
                    <p>
                      The most substantial new findings about AI and Robotics, Image processing and NLP, Cloud Computing and big data analytics as well as in Cyber security, Blockchain and IoT and various allied fields will be presented in the three-day event.
                    </p>
                    
                    {/* Conference Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Insightful Invited Talks</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Innovative Technical Sessions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Hybrid Event Format</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Global Participation</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-gray-400 italic">
                        The general chair, the convener, along with the entire team invite researchers and industry personnel around the world to take part in the upcoming event to make the event a grand success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="md:w-80 bg-gradient-to-br from-red-900/30 to-red-800/30 flex items-center justify-center p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl"></div>
                  <Image 
                    src="/images/logo.png" 
                    width={250} 
                    height={250} 
                    alt="Conference Logo" 
                    className="relative z-10 object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Us?</h3>
            <p className="text-red-100 mb-8 text-lg">
              Be part of the premier conference in computational intelligence and data science
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/papers" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Your Paper
              </Link>
              <Link 
                href="/registrations" 
                className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}
