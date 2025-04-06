"use client";
import GithubCardShiny from "@/components/animata/card/github-card-shiny";
import Carousel from "@/components/Carousel";
import { Container } from "@/components/Container";
import { DataBox } from "@/components/DataBox";
import { Separator } from "@/components/Separator";
import {
  Bot,
  CalendarCheck,
  CalendarDays,
  Cpu,
  ImageIcon,
  ShieldHalf,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({
  track,
  Avatar,
  id,
}: {
  track: string;
  Avatar: React.ReactNode;
  id: string;
}) => {
  const router = useRouter();
  return (
    <GithubCardShiny
      onClick={() => router.push(`/papers#${id}`)}
      className="md:w-[35%] w-[80%] h-[35vh] cursor-pointer px-0 py-2 bg-gray-100 text-primary shadow-sm"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-2">
        {Avatar}
        <h1 className="text-lg text-center h-[10vh] font-bold">{track}</h1>
      </div>
    </GithubCardShiny>
  );
};

export default function Home() {
  return (
    <Container className=" flex flex-col items-center justify-start gap-10">
      <Carousel />

      {/* <Image src={'/images/logo.png'} width={50} height={50} alt="" className=" cursor-pointer md:h-auto h-[20vh] object-fit w-auto" /> */}
      <img src="../../public/images/logo.png" alt="" />
      {/* <Image fill={true} /> */}

      <div className="md:w-full flex flex-col items-center w-[80%]">
        <DataBox
          title="Welcome To IEM-ICDC 2025!"
          data="IEM-ICDC 2025: International Conference on Computational Intelligence,
          Data Science and Cloud Computing is an endeavour in enticing interest
          for Computational Intelligence and Data Science applications in
          diverse domains. As the world is moving towards industry 4.0,
          Computational Intelligence, Data Science and Cloud Computing are
          becoming more and more relevant in our society in all possible ways.
          <br />
          <br />
          The most substantial new findings about AI and Robotics, Image
          processing and NLP, Cloud Computing and big data analytics as well as
          in Cyber security, Blockchain and IoT and various allied fields will
          be presented in the three-day event comprised of insightful invited
          talks, innovative technical sessions and informative workshops. The
          general chair, the convener, along with the entire team invite
          researchers and industry personnel around the world to take part in
          the upcoming event to make the event a grand success."
        />
      </div>

      <Separator />

      <div className="md:w-full w-[100%] flex flex-col items-center justify-start gap-4">
        <h1 className="w-full md:text-4xl text-2xl text-center text-primary font-bold after:w-fit after:absolute relative after:bottom-0 after:left-0 after:h-[2px] after:bg-primary">
          Our Keynote Speakers
        </h1>
        <div className="md:w-[60%] w-full flex md:grid md:grid-cols-2 flex-col items-center justify-between">
          <div className=" flex flex-col items-center justify-start gap-3">
            <Image src="/images/S4.png" width={200} height={200} alt="SP1" />
            <p className=" text-sm text-gray-700 text-center md:w-[20vw] w-full">
              Prof. Michael Hinchey <br /> Michael Gerard Hinchey is an Irish
              computer scientist and former Director of the Irish Software
              Engineering Research Centre, a multi-university research centre
              headquartered at the University of Limerick, Ireland.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-start gap-3">
            <Image src="/images/S1.png" width={200} height={200} alt="SP1" />
            <p className=" text-sm text-gray-700 text-center md:w-[20vw] w-full">
              Dr. Michael Sheng <br /> Distinguished Professor & Head of School
              of Computing, Macquarie University Vice Chair, IEEE Technical
              Community on Services Computing Member, ACS Technical Advisory
              Board on IoT.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-start gap-3">
            <Image src="/images/S2.png" width={200} height={200} alt="SP1" />
            <p className=" text-sm text-gray-700 text-center md:w-[20vw] w-full">
              Professor Dr. Amlan Chakrabarti <br /> Professor and Director,
              A.K. Choudhury School of IT, University of Calcutta Adjunct
              Professor, IIIT Delhi Chief Coordinator, International Center of
              Excellence for Data Science, AI, and Futuristic Technologies,
              Government of West Bengal
            </p>
          </div>
          <div className=" flex flex-col items-center justify-start gap-3">
            <Image src="/images/S3.png" width={200} height={200} alt="SP3" />
            <p className=" text-sm text-gray-700 text-center md:w-[20vw] w-full">
              Dr. Indranil Mitra, <br /> PhD, MBA, IPR, F-RSS (UK), FRSA (UK)
              Partner @ PwC | AI Whisperer | Digital Transformation Leader |
              Data Science & Emerging Technologies Expert
            </p>
          </div>
          <div className=" col-span-2 flex flex-col items-center justify-start gap-3">
            <Image src="/images/S5.png" width={200} height={200} alt="SP5" />
            <p className=" text-sm text-gray-700 text-center md:w-[20vw] w-full">
              Dr. Anbuthambi Bhojarajan <br /> currently holds the position of
              Head of Strategy, L&T EduTech, of Larsen & Toubro Ltd.
            </p>
          </div>
        </div>
      </div>

      <Separator />

      <div className="w-[100%] flex flex-col items-center justify-center gap-3">
        <h1 className="w-full md:text-4xl text-2xl text-center text-primary font-bold after:w-fit after:absolute relative after:bottom-0 after:left-0 after:h-[2px] after:bg-primary">
          Our Technical Partners
        </h1>
        <div className="w-full md:w-[60%] flex md:flex-row flex-col items-center justify-center md:gap-20 gap-10 my-4">
          <Image src="/images/logo2.png" width={200} height={200} alt="SP4" />
          <Image
            src="/images/logo3.png"
            width={200}
            height={200}
            alt="SP5"
            className=" col-span-2"
          />
        </div>
        <div className=" w-full md:w-[60%] flex md:flex-row flex-col items-center justify-center md:gap-20 gap-10 my-4">
          <Image src="/images/SP1.jpg" width={200} height={200} alt="SP1" />
          <Image src="/images/SP2.jpg" width={300} height={200} alt="SP2" />
          <Image src="/images/SP3.jpeg" width={200} height={200} alt="SP3" />
        </div>
        <div className="w-full md:w-[60%] flex md:flex-row flex-col items-center justify-center md:gap-20 gap-10 my-4">
          <Image src="/images/SP4.jpeg" width={200} height={200} alt="SP4" />
          <Image
            src="/images/SP5.jpeg"
            width={200}
            height={200}
            alt="SP5"
            className=" col-span-2"
          />
          <Image src="/images/technical_sponsor.jpeg" width={200} height={200} alt="SP5" />
        </div>
      </div>

      <Separator />

      <div className="w-[80%] space-y-6 my-10">
        <h1 className="w-full text-center md:text-4xl text-2xl text-primary font-bold mb-10">
          Tracks Of The Conference
        </h1>
        <div className="w-full flex md:flex-row flex-col items-center justify-center gap-4">
          <Card
            id="track1"
            track="AI And Robotics"
            Avatar={<Bot className="size-[60%]" />}
          />

          <Card
            id="track2"
            track="Image Processing And NLP"
            Avatar={<ImageIcon className="size-[60%]" />}
          />

          <Card
            id="track3"
            track="Cloud Computing And Big Data Analytics"
            Avatar={<Cpu className="size-[60%]" />}
          />

          <Card
            id="track4"
            track="Cyber Security, Blockchain And IoT"
            Avatar={<ShieldHalf className="size-[60%]" />}
          />
        </div>
      </div>

      <Separator />

      <div className=" space-y-3 text-center w-[80%]" id="importantDates">
        <h1 className="md:text-4xl text-2xl font-bold text-primary mb-10">
          Important Dates
        </h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-primary">
            <thead className="text-primary uppercase bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 flex items-center justify-start gap-2 md:text-lg text-sm font-extrabold"
                >
                  <CalendarCheck className="" />
                  <p className="">Event</p>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 md:text-lg text-sm font-bold"
                >
                  <div className="flex items-center justify-start gap-2">
                    <CalendarDays />
                    <p>Date</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium md:text-lg text-sm text-gray-700 whitespace-nowrap text-wrap md:text-nowrap"
                >
                  Deadline for full paper Submission
                </th>
                <td className="px-6 py-4 md:text-lg text-sm">
                  <span className=" text-pink-600">SUBMISSION CLOSED</span>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium md:text-lg text-sm text-gray-700 whitespace-nowrap text-wrap md:text-nowrap"
                >
                  Acceptance notification for papers
                </th>
                <td className="px-6 py-4 md:text-lg text-sm">March 11, 2025</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium md:text-lg text-sm text-gray-700 whitespace-nowrap text-wrap md:text-nowrap"
                >
                  Deadline for camera ready paper submission:
                </th>
                <td className="px-6 py-4 md:text-lg text-sm">March 20, 2025</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium md:text-lg text-sm text-gray-700 whitespace-nowrap text-wrap md:text-nowrap"
                >
                  Deadline for paper and participation registration
                </th>
                <td className="px-6 py-4 text-lg">March 17, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
