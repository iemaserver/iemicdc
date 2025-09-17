import { Container } from "@/components/Container";

export default function Speakers() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Speakers</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Distinguished keynote speakers and industry experts for IEM ICDC 2026
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-center min-h-[400px] mt-12 animate-animate-appear">
        <div className="text-center space-y-6">
          <div className="text-6xl md:text-8xl">🎤</div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Coming Soon</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We are currently finalizing our lineup of distinguished speakers and industry experts. 
            Stay tuned for exciting announcements about our keynote speakers for IEM ICDC 2026!
          </p>
          <div className="mt-8">
            <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold">
              Announcements Coming Soon
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
