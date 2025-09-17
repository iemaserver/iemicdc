import { Container } from "@/components/Container";
import Image from "next/image";
import { Calendar, Clock, MapPin, Users, Download, ExternalLink } from "lucide-react";

export default function Schedule() {
    const scheduleImages = [
        { src: "/images/schedule1.jpg", title: "Day 1 - Opening & Keynotes", day: "March 16, 2026" },
        { src: "/images/schedule2.jpg", title: "Day 1 - Technical Sessions", day: "March 16, 2026" },
        { src: "/images/schedule3.jpg", title: "Day 2 - Research Presentations", day: "March 17, 2026" },
        { src: "/images/schedule4.jpg", title: "Day 2 - Workshops & Panels", day: "March 17, 2026" },
        { src: "/images/schedule5.jpg", title: "Day 3 - Awards & Closing", day: "March 18, 2026" },
    ];

    const keyInfo = [
        { icon: <Calendar className="w-6 h-6" />, label: "Duration", value: "3 Days" },
        { icon: <Clock className="w-6 h-6" />, label: "Daily Hours", value: "9 AM - 6 PM" },
        { icon: <MapPin className="w-6 h-6" />, label: "Venue", value: "STPI Kolkata" },
        { icon: <Users className="w-6 h-6" />, label: "Expected", value: "200+ Participants" },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Schedule</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Complete program schedule for IEM ICDC 2026 - March 16-18, 2026
                    </p>
                </div>
            </div>

            <Container className="flex flex-col items-center justify-start gap-12 py-12 mt-12">
                
                {/* Key Information */}
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {keyInfo.map((info, index) => (
                            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="text-red-600 mb-3 flex justify-center">
                                    {info.icon}
                                </div>
                                <div className="text-sm text-gray-600 mb-1">{info.label}</div>
                                <div className="text-lg font-bold text-gray-800">{info.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Schedule Overview */}
                <div className="w-full max-w-4xl">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Three Days of Innovation</h2>
                        <div className="w-20 h-1 bg-white/40 mx-auto rounded-full mb-6"></div>
                        <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto">
                            Join us for an intensive three-day program featuring keynote speeches, technical sessions, 
                            research presentations, workshops, and networking opportunities with leading experts in the field.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                                <Download className="w-5 h-5" />
                                <span>Download Schedule</span>
                            </button>
                            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                                <ExternalLink className="w-5 h-5" />
                                <span>View Online</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Schedule Images */}
                <div className="w-full max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Detailed Program</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore the comprehensive schedule for each day of the conference, 
                            including all sessions, workshops, and special events.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {scheduleImages.map((schedule, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-gray-800 to-black p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">{schedule.title}</h3>
                                    <p className="text-gray-300 flex items-center space-x-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{schedule.day}</span>
                                    </p>
                                </div>
                                
                                {/* Image */}
                                <div className="relative group">
                                    <Image 
                                        src={schedule.src} 
                                        width={800} 
                                        height={600} 
                                        alt={schedule.title}
                                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                                            <ExternalLink className="w-4 h-4" />
                                            <span>View Details</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="w-full max-w-4xl">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Don&apos;t Miss Out!</h3>
                        <p className="text-red-100 mb-8 text-lg">
                            Register now to secure your spot at this premier conference
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/registrations" 
                                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Register Now
                            </a>
                            <a 
                                href="/venue" 
                                className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                View Venue
                            </a>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}