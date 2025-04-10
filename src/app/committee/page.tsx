import { Container } from "@/components/Container";
import { Separator } from "@/components/Separator";
import { promises as fs } from 'fs';

const CommitteeModule = ({ title, list }: { title: string; list: Array<string> }) => {
  return (
    <>
      <h1 className="md:text-4xl text-xl font-bold text-primary mt-10 mb-4">{title}</h1>
      <Separator />
      <ul className=" list-disc mt-6 text-gray-700 space-y-2">
        {list.map((item, index) => (
          <li key={index} className="md:text-lg text-sm">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default async function Committee() {

    let data: any = await fs.readFile(process.cwd() + '/data.json', 'utf8')
    data = JSON.parse(data)

  return (
    <Container className="flex flex-col items-center justify-start gap-6 animate-animate-appear">
      <div className="w-[80%]">
        {Object.keys(data.Committees).map((key: string) => <CommitteeModule key={key} title={key} list={data.Committees[key]} />)}
      </div>
    </Container>
  );
}
