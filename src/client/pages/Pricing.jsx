import React from 'react';

const Pricing = () => {
  const plans = [
    { id: 1, name: 'Basic Plan', price: '$10/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { id: 2, name: 'Standard Plan', price: '$20/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
    { id: 3, name: 'Premium Plan', price: '$30/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Pricing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map(plan => (
          <div key={plan.id} className="border p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="list-disc list-inside">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-sm">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;