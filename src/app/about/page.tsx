import { Container } from "@/components/Container";
import { DataBox } from "@/components/DataBox";
import Image from "next/image";

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

      <Container className="flex flex-col items-center justify-start gap-10 md:pb-20 pb-10 mt-12 animate-animate-appear">
        <div className=" md:w-[80%] w-[90%] flex md:flex-row md:gap-0 gap-4 flex-col items-center justify-between">
        <DataBox
          title="About The Host Institute"
          data="The IEM group is an acclaimed educational group amongst the
          industry-centred academic training organisations of today. IEM has set
          sublime standards in addressing the technical and managerial resource
          shortage in the new era of dynamic globalisation. The IEM group has
          risen to fame for its strong foundation in teaching and R&D in
          multifaceted areas. <br /> <br /> It aims to serve the future generation as well as
          the Nation through its commitment towards self-sufficiency and
          unmatchable excellence. IEM is one of the top-ranked engineering
          colleges in Kolkata and Eastern India which provides the best
          engineering course with 100% job assistance. Contact today to know the
          course details of computer science engineering, mechanical
          engineering, electrical and electronics engineering, electronics and
          communication engineering.<a style={{'color':'blue'}} href='https://iem.edu.in/' target='__blank'>For more information, visit here!</a>"
        />
        <Image src="/images/iem-logo.png" width={400} height={400} alt="SP2" />
      </div>

      <div className=" md:w-[80%] w-[90%] flex md:flex-row md:gap-0 gap-4 flex-col-reverse items-center justify-between">
        <Image src="/images/logo.png" width={400} height={400} alt="SP1" />
        <DataBox
          title="About The Conference"
          data="IEM ICDC 2026: 5th International Conference on Computational
          Intelligence, Data Science and Cloud Computing is an endeavour in
          enticing interest for Computational Intelligence and Data Science
          applications in diverse domains. As the world is moving towards
          industry 4.0, Computational Intelligence, Data Science and Cloud
          Computing are becoming more and more relevant in our society in all
          possible ways. The most substantial new findings about AI and
          Robotics, Image processing and NLP, Cloud Computing and big data
          analytics as well as in Cyber security, Blockchain and IoT and various
          allied fields will be presented in the three-day event comprised of
          insightful invited talks, and innovative technical sessions. <br /><br /> The
          general chair, the convener, along with the entire team invite
          researchers and industry personnel around the world to take part in
          the upcoming event to make the event a grand success. The conference
          is being organized as a hybrid event, where participants can present
          their research papers, attend technical sessions and the keynote
          speeches, both in offline as well as online mode"
        />
      </div>
    </Container>
    </>
  );
}
