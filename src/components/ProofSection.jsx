import React from 'react';

const ProofSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
      <div className="flex justify-center gap-8">
        <div className="text-lg font-medium">
          "This tool has transformed how we manage our business!"
        </div>
        <div className="text-lg font-medium">
          "We’ve seen a huge increase in productivity thanks to this solution."
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl">Trusted by:</h3>
        <div className="flex justify-center gap-6 mt-4">
          <img src="image1.png" alt="Logo 1" className="h-12" />
          <img src="image2.png" alt="Logo 2" className="h-12" />
          <img src="image3.png" alt="Logo 3" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
