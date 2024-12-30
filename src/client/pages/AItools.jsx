import React from 'react';
import { Link } from 'react-router-dom';


const AItools = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">AI Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md justify-items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">Ad Creative Generator</h2>
          <p className="text-center mb-8">Generate high-converting ad creatives with the power of AI.</p>
          <div className="mt-8">
            <Link to="/creativegenerator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </Link>
          </div>
        </div>
      
        
        <div className="bg-white p-6 rounded-lg shadow-md justify-items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">AI Driven Content Creation</h2>
          <p className="text-center mb-8">Generate High Quality Content for Your Campaign using AI</p>
          <div className="mt-8">
            <Link to="/creativegenerator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AItools;