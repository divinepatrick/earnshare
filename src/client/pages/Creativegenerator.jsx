import React, { useState } from 'react';

const CreativeGenerator = () => {
  const [formData, setFormData] = useState({ title: '', description: '', audience: '' });
  const [generatedAd, setGeneratedAd] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedAd('');

    try {
      const response = await fetch('/api/generate-ad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate ad');
      }

      const data = await response.json();
      setGeneratedAd(data.adContent);
    } catch (error) {
      console.error(error);
      setGeneratedAd('Error generating ad. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">AI-Powered Ad Creative Generator</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Ad Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Ad Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full px-3 py-2 border rounded"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="audience" className="block text-gray-700 font-bold mb-2">
            Target Audience
          </label>
          <input
            type="text"
            id="audience"
            value={formData.audience}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Ad'}
        </button>
      </form>
      {generatedAd && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Generated Ad</h2>
          <pre className="whitespace-pre-wrap">{generatedAd}</pre>
        </div>
      )}
    </div>
  );
};

export default CreativeGenerator;
