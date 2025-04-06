import { Container } from "@/components/Container";
import { DataBox } from "@/components/DataBox";
import Image from "next/image";

export default function About() {
  return (
    <Container className="flex flex-col items-center justify-start gap-10 md:py-20 py-10 animate-animate-appear">
      <div className=" w-[80%] flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
        <Image src="/images/S4.png" width={400} height={400} alt="SP2" />
        <DataBox
          title="Prof. Michael Hinchey"
          data="Michael Gerard Hinchey (born 1969) is an Irish computer scientist and former Director of the Irish Software Engineering Research Centre, a multi-university research centre headquartered at the University of Limerick, Ireland. He now serves as Head of Department of the Department of Computer Science & Information Systems at University of Limerick. 
                <br /> <br />
                Mike Hinchey studied at the University of Limerick as an undergraduate (was the leading student in his graduating year[2]), Oxford University (at Wolfson College) for his MSc and Cambridge University (at St John's College) for his PhD.
          <br /> <br />
Hinchey has been a promulgator of formal methods throughout his career, especially CSP and the Z notation. He was Director of the NASA Software Engineering Laboratory at NASA Goddard Space Flight Center and is the founding editor-in-chief of the NASA journal Innovations in Systems and Software Engineering, launched in 2005. "
        />
      </div>

      <div className=" w-[80%] flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
        <DataBox
          title="Dr. Michael Sheng"
          data="Dr. Michael Sheng
                Distinguished Professor & Head of School of Computing, Macquarie University
                Vice Chair, IEEE Technical Community on Services Computing
                Member, ACS Technical Advisory Board on IoT.
                <br /> <br />
                Dr. Michael Sheng is a Distinguished Professor and Head of the School of Computing at Macquarie University, with a strong background in services computing and the Internet of Things (IoT). Before joining Macquarie, he spent 10 years at the University of Adelaide, where he held senior leadership roles, including Interim Head and Deputy Head of the School of Computer Science.
                <br /><br />
                Dr. Sheng holds a PhD in Computer Science from UNSW and conducted postdoctoral research at CSIRO's ICT Centre (now Data61). He is ranked among the Top 5 authors worldwide in Services Computing and Top 20 in Web of Things by Microsoft Academic. His contributions to the field have earned him numerous awards, including the AMiner Most Influential Scholar Award in IoT, an ARC Future Fellowship, and the Chris Wallace Award for Outstanding Research.
                A recognized leader in his field, Dr. Sheng serves as Vice Chair of the IEEE Technical Community on Services Computing and is a member of the ACS Technical Advisory Board on IoT. His work continues to shape the direction of research and development in computing technologies."
        />
        <Image src="/images/S1.png" width={400} height={400} alt="SP2" />
      </div>

      <div className=" w-[80%] flex md:flex-row flex-col-reverse gap-6 md:gap-0 items-center justify-between">
        <Image src="/images/S2.png" width={400} height={400} alt="SP1" />
        <DataBox
          title="Prof. Amlan Chakrabarti"
          data="Professor Dr. Amlan Chakrabarti
Professor and Director, A.K. Choudhury School of IT, University of Calcutta
Adjunct Professor, IIIT Delhi
Chief Coordinator, International Center of Excellence for Data Science, AI, and Futuristic Technologies, Government of West Bengal
<br /><br />
Professor Dr. Amlan Chakrabarti is an accomplished academic and researcher with over 20 years of experience in engineering education and research. He is the Director of the A.K. Choudhury School of IT at the University of Calcutta and an Adjunct Professor at IIIT Delhi. He also serves as the Chief Coordinator of the International Center of Excellence for Data Science, AI, and Futuristic Technologies, an initiative by the Government of West Bengal aimed at advancing research and innovation in emerging technologies.
<br /><br />
With a Ph.D. in Quantum Computing from the University of Calcutta and postdoctoral research at Princeton University, Professor Chakrabarti is an expert in quantum computing, machine learning, computer vision, and cyber-physical systems. He has published over 200 research papers and received numerous awards, including the Young Scientist Award, the BOYSCAST Fellowship, and recognition as a Senior Member of IEEE.
Professor Chakrabarti is passionate about fostering innovation through collaboration and education, with a commitment to advancing science and technology for global impact."
        />
      </div>

      <div className=" w-[80%] flex md:flex-row flex-col-reverse gap-6 md:gap-0 items-center justify-between">
        <DataBox
          title="Dr. Indranil Mitra"
          data='Dr. Indranil Mitra, PhD, MBA, IPR, F-RSS (UK), FRSA (UK)
          Partner @ PwC | AI Whisperer | Digital Transformation Leader | Data Science & Emerging Technologies Expert
          
          Dr. Indranil Mitra is a seasoned leader with over 27 years of experience in data science, AI, and digital transformation. As a partner at PwC, he specializes in DARQ technologies (Distributed Ledgers, AI, Extended Reality, Quantum Computing) and Digital 2.0 (Machine Learning, Blockchain, IoT, Cloud Robotics, RPA), helping organizations leverage these technologies to drive innovation and solve complex business challenges.
          <br /><br />
          Dr. Mitra is a recognized expert in cognitive science and emerging technologies, with a particular focus on sectors like energy, utilities, government, and homeland security. His expertise spans digital transformation, advanced analytics, and predictive modeling, particularly in areas like plant optimization, digital government, and forensics analytics.
          <br /><br />
          An "AI Whisperer", Dr. Mitra bridges the gap between cutting-edge technology and real-world applications, empowering teams and organizations to innovate in high-risk and cross-domain environments. He holds a PhD, MBA, and prestigious fellowships with the Royal Society of Statistics (RSS, UK) and the Royal Society of Arts (FRSA, UK).
Known for his leadership in digital transformation, Dr. Mitra is a LinkedIn Top Voice, constantly exploring the intersection of technology, society, and human behavior. He is passionate about learning and advancing the future of AI and emerging technologies across industries.'
        />
        <Image src="/images/S3.png" width={400} height={400} alt="SP1" />
      </div>

      <div className=" w-[80%] flex md:flex-row flex-col-reverse gap-6 md:gap-0 items-center justify-between">
        <Image src="/images/S5.png" width={400} height={400} alt="SP1" />
        <DataBox
          title="Dr Anbuthambi Bhojarajan"
          data={`Dr. Anbuthambi B currently holds the position of Head of Strategy, L&T EduTech, of Larsen & Toubro Ltd. With an impressive career spanning over two decades in the fields of Education, Skill Development, and IT/ITES Industries, he possesses an exceptional wealth of knowledge and expertise. Dr. Anbu earned a Bachelor's degree in Computer Application, a Master's in Business Administration, and a Postgraduate degree in Business Management from XLRI, Jamshedpur, where he achieved the distinction of being a rank holder. He has attained a PhD in Management, with a research focus on employability skills. As an accomplished author, he has authored books including "The Post-Pandemic Graduate" and "India in 2047."

Dr. Anbu's expertise in collaborating with Industry, Academia, and Government to nurture the next generation talent pool and bridge the skill gap between Industry and Academia is evident through his significant role as the former President of ICT Academy, a successful public-private partnership social enterprise in India. He has been recognized for his contributions, receiving the prestigious Power To Empower 2013 award, a National Skill Enterprise Challenge conducted by NSDC. Dr. Anbuthambi serves as a member on the governing and academic councils of various higher educational institutions across India.`}
        />
      </div>
    </Container>
  );
}
