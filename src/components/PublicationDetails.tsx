import Image from 'next/image';
import React from 'react';

const PublicationDetails = () => {
  return (
    <div className="flex items-center justify-center w-[80%]">
      <div className="bg-red-50 w-full p-8 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-semibold text-teal-800 mb-6">
          PUBLICATION & INDEXING DETAILS:
        </h1>
        <p className="text-lg text-teal-900 mb-4">
          The conference proceedings will be published in Springer Book series
          <strong>{" "}&quot;Lecture Notes in Networks and Systems&quot;</strong>
        </p>
        <div className="flex justify-center items-center mb-6">
          <Image
            src='/images/sp.png'
            width={300}
            height={100}
            alt='logo'
          />
        </div>
        <p className="text-teal-900 text-sm">
          Indexing: <strong>SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago</strong>  
          <br />
          {/* All books published in the series are submitted for consideration in {" "}
          <strong>Web of Science.</strong> */}
        </p>
      </div>
    </div>
  );
};

export default PublicationDetails;
