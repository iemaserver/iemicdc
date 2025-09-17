import { Container } from "@/components/Container";
import { promises as fs } from 'fs';
import Image from "next/image";

export default async function Awardees() {
    const data: any = await fs.readFile(process.cwd() + '/data.json', 'utf8')
    const parsedData = JSON.parse(data)

    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Awardees</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Celebrating excellence and outstanding contributions to the field
                    </p>
                </div>
            </div>

            <Container className="flex flex-col items-center justify-start gap-20 p-10 mt-12 animate-animate-appear">
            {
                parsedData.Awardees.map(({ title, name, designation, description, image }: any, index: number) => <div key={index} className="flex flex-col items-center justify-start gap-12">
                    <h2 className="w-full text-center md:text-4xl text-2xl text-primary font-bold">{title}</h2>
                    <div className={`flex ${index%2 && "flex-row-reverse"} items-start justify-between w-[80%] gap-10 h-full`}>
                        <Image src={image} width={500} height={500} alt="" className="w-[40vw] h-[40vh]" />
                        <div className="flex flex-col items-center justify-start">
                            <h3 className="w-full text-left md:text-3xl text-xl text-gray-700 font-semibold">{name}</h3>
                            <h4 className="w-full text-left md:text-xl text-lg text-gray-500 mb-2">{designation}</h4>
                            <span className="text-gray-600 md:text text text-justify" dangerouslySetInnerHTML={{__html: description}}></span>
                        </div>
                    </div>
                </div>)
            }
        </Container>
        </>
    )
}