import React from 'react';


const AItools = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">AI Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">AI-Powered Ad Creative Generator</h2>
          <p className="text-center">Generate high-converting ad creatives with the power of AI.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">AI-Driven Content Creation</h2>
          <p className="text-center">Generate high-quality content for your campaigns with AI-driven tools.</p>
        </div>
      </div>
    </div>
  );
};

export default AItools;