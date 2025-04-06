import TypingText from "@/components/animata/text/typing-text";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";

export default function Venue() {
  return (
    <Container className="flex flex-col items-center justify-center py-4">
      <div className="w-full h-[70vh] flex flex-col items-center justify-start gap-8">
        <h1 className="font-bold text-primary text-4xl">
          Software Technology Parks Of India
        </h1>
        <div className="w-[80%] flex items-center justify-center gap-10">
          <div className="w-[45%] h-[100%] text-sm text-gray-700">
            <div className="w-full h-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1197348936703!2d88.43605467500232!3d22.574624679490306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757fbb7d6185%3A0x65dd6bf7ac6d562!2sSoftware%20Technology%20Parks%20of%20India!5e0!3m2!1sen!2sin!4v1741356229020!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <span>Ph No. 033 2367 3598</span>
            <br />
            <span>
              Plot No- 5/1, Salt Lake Bypass, DP Block, Sector V,
              <br /> Bidhannagar, Kolkata, West Bengal 700091
            </span>
          </div>
          <div className="">
            <Image src={"/images/venue.jpg"} width={500} height={500} alt="" />
          </div>
        </div>
      </div>

      {/* Location Section */}
    </Container>
  );
}
