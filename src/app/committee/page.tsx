import { Container } from "@/components/Container";
import { Separator } from "@/components/Separator";
import { promises as fs } from 'fs';

const CommitteeModule = ({ title, list }: { title: string; list: Array<string> }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
      <h1 className="md:text-2xl text-xl font-bold text-primary mb-4">{title}</h1>
      <Separator />
      <ul className="list-disc mt-4 text-gray-700 space-y-2 ml-4">
        {list.map((item, index) => (
          <li key={index} className="md:text-base text-sm leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default async function Committee() {

    let data: any = await fs.readFile(process.cwd() + '/data_new.json', 'utf8')
    data = JSON.parse(data)

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Committee</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the distinguished committee of IEM ICDC 2026
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start gap-8 py-8 mt-12">
      <div className="w-[90%] max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="md:text-4xl text-3xl font-bold text-primary mb-4">
            Organizing Committee
          </h1>
          <p className="text-gray-600 md:text-lg text-base max-w-2xl mx-auto leading-relaxed">
            Meet the distinguished members of our organizing committee who are working tirelessly to make IEM ICDC 2026 a grand success.
          </p>
        </div>
        {Object.keys(data.Committees).map((key: string) => <CommitteeModule key={key} title={key} list={data.Committees[key]} />)}
      </div>
    </Container>
    </>
  );
}
