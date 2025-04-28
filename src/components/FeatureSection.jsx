import React from 'react';

const FeatureSection = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="text-4xl text-blue-500 mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
          <p>Experience lightning-fast speeds with our optimized platform.</p>
        </div>
        <div className="text-center">
          <div className="text-4xl text-blue-500 mb-4">🔒</div>
          <h3 className="text-xl font-bold mb-2">Secure</h3>
          <p>Your data is always protected with state-of-the-art security features.</p>
        </div>
        <div className="text-center">
          <div className="text-4xl text-blue-500 mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Mobile Friendly</h3>
          <p>Access everything from any device, wherever you are.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
