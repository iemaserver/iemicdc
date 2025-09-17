import { Container } from "@/components/Container";
import { Separator } from "@/components/Separator";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const CreateTable = ({
  datas,
}: {
  datas: Array<{ col1: string; col2: string; className?: string }>;
}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-primary">
      <tbody>
        {datas.map(({ col1, col2, className }, id) => (
          <tr key={id} className="odd:bg-white even:bg-gray-50 border-b">
            <th
              scope="row"
              className={twMerge(
                `px-6 py-4 font-medium md:text-lg text-sm text-gray-700 whitespace-nowrap md:text-nowrap text-wrap`,
                className
              )}
            >
              {col1}
            </th>
            <td className="px-6 py-4 md:text-lg text-xs">{col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Registration() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Registration</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Secure your place at IEM ICDC 2026 with our flexible registration options
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start gap-4 py-10 mt-12 animate-animate-appear">
      <h1 className="md:text-4xl text-2xl text-primary font-bold w-[80%]">
        Registration Details
      </h1>
      <Separator />
      <ul className=" list-disc md:w-[75%] w-[80%] text-gray-700 space-y-6">
        <li>Registration fee per accepted paper</li>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
          <CreateTable
            datas={[
              { col1: "Indian Student", col2: "8,000 INR" },
              { col1: "Indian Researcher", col2: "9,000 INR" },
              { col1: "Indian Author from Industry", col2: "10,000 INR" },
              { col1: "Foreign Author", col2: "250 USD" },
              {
                col1: "Charges for per extra page, above 10 pages per paper",
                col2: "",
                className: "font-bold",
              },
              { col1: "Indian Author", col2: "400 INR" },
              { col1: "Foreign Author", col2: "50 USD" },
              {
                col1: "For participation (other than registered authors)",
                col2: "",
                className: "font-bold",
              },
              { col1: "Indian Participant", col2: "3,000 INR" },
              { col1: "Foreign Participant", col2: "100 USD" },
            ]}
          />
        </div>

        <li>Bank Details For Indian Payments</li>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
          <CreateTable
            datas={[
              {
                col1: "In the Favour of",
                col2: "Institute of Engineering and Management Trust",
              },
              { col1: "Bank Name", col2: "IDBI Bank" },
              { col1: "Branch", col2: "Sector V, Kolkata" },
              // { "col1": "Foreign Author", col2: "150 USD" },
              { col1: "A/C No", col2: "184104000054214" },
              { col1: "IFSC Code", col2: "IBKL0000184" },
            ]}
          />
        </div>

        <li>Bank Details For International Payments</li>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
          <CreateTable
            datas={[
              {
                col1: "In the Favour of",
                col2: "Institute of Engineering and Management Trust",
              },
              { col1: "Bank Name", col2: "Indian Overseas Bank" },
              { col1: "Branch", col2: "Sector V, Kolkata" },
              // { "col1": "Foreign Author", col2: "150 USD" },
              { col1: "A/C No", col2: "164201000000488" },
              { col1: "IFSC Code", col2: "IOBA0001642" },
            ]}
          />
        </div>
      </ul>
    </Container>
    </>
  );
}
