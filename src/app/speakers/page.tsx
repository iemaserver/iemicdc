import { Container } from "@/components/Container";
import { DataBox } from "@/components/DataBox";
import Image from "next/image";
import { promises as fs } from "fs";

export default async function About() {
  const data: any = await fs.readFile(process.cwd() + "/data.json", "utf-8");
  const parsedData = JSON.parse(data);

  return (
    <Container className="flex flex-col items-center justify-start gap-16 md:py-20 py-10 animate-animate-appear">
      {parsedData.Speakers.map(
        (
          {
            name,
            description,
            image,
          }: { name: string; description: string; image: string },
          index: number
        ) => (
          <div
            className={` w-[80%] flex ${index%2 ? "md:flex-row-reverse": "md:flex-row"} flex-col gap-6 md:gap-0 items-center justify-between`}
            key={name}
          >
            <Image src={image} width={400} height={400} alt={image} />
            <DataBox title={name} data={description} />
          </div>
        )
      )}
    </Container>
  );
}
