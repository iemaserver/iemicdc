import { Container } from "@/components/Container";

export default function Schedule() {
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

            <Container className="flex flex-col items-center justify-start gap-0 px-20 mt-12">
            <img src={"/images/schedule1.jpg"} alt="" />
            <img src={"/images/schedule2.jpg"} alt="" />
            <img src={"/images/schedule3.jpg"} alt="" />
            <img src={"/images/schedule4.jpg"} alt="" />
            <img src={"/images/schedule5.jpg"} alt="" />
        </Container>
        </>
    )
}