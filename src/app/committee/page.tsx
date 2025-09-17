import { Container } from "@/components/Container";
import { promises as fs } from 'fs';
import { Users, Crown, Award, Star } from 'lucide-react';

const getCommitteeIcon = (title: string) => {
  if (title.toLowerCase().includes('chair') || title.toLowerCase().includes('general')) {
    return <Crown className="w-6 h-6 text-red-600" />;
  }
  if (title.toLowerCase().includes('advisory')) {
    return <Star className="w-6 h-6 text-blue-600" />;
  }
  if (title.toLowerCase().includes('program')) {
    return <Award className="w-6 h-6 text-green-600" />;
  }
  return <Users className="w-6 h-6 text-purple-600" />;
};

const CommitteeModule = ({ title, list }: { title: string; list: Array<string> }) => {
  const icon = getCommitteeIcon(title);
  
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8 mb-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
          {icon}
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item, index) => (
          <div 
            key={index} 
            className="group flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all duration-200"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
            <span className="text-gray-700 group-hover:text-gray-800 font-medium text-sm md:text-base leading-relaxed">
              {item}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-right">
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {list.length} Member{list.length !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
};

export default async function Committee() {
  let data: any = await fs.readFile(process.cwd() + '/data_new.json', 'utf8')
  data = JSON.parse(data)

  const committeeEntries = Object.entries(data.Committees);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Committee</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the distinguished organizing committee of IEM ICDC 2026
          </p>
        </div>
      </div>

      <Container className="flex flex-col items-center justify-start py-8 mt-12">
        
        {/* Stats Section */}
        <div className="w-full max-w-6xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">{committeeEntries.length}</div>
              <div className="text-red-100 text-sm mt-1">Committees</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">
                {Object.values(data.Committees).flat().length}
              </div>
              <div className="text-blue-100 text-sm mt-1">Total Members</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">3</div>
              <div className="text-purple-100 text-sm mt-1">Days Event</div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="w-full max-w-4xl mb-12">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Organizing Committee</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Meet the distinguished members of our organizing committee who are working tirelessly to make IEM ICDC 2026 a grand success. 
              Our diverse team brings together expertise from academia and industry to deliver an exceptional conference experience.
            </p>
          </div>
        </div>

        {/* Committee Sections */}
        <div className="w-full max-w-6xl">
          {Object.entries(data.Committees).map(([key, list]: [string, any]) => (
            <CommitteeModule key={key} title={key} list={list} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-4xl mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="text-red-100 mb-8 text-lg">
              Have questions about the conference? Our organizing committee is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@iemicdc2026.com" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Committee
              </a>
              <a 
                href="/venue" 
                className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Venue Details
              </a>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}
