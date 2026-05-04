import React from 'react';
import { BookOpen, Truck, ShieldCheck } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BookOpen size={40} className="text-blue-600" />,
      title: "Extensive Library",
      description: "Access a diverse collection of thousands of books across all genres and tech stacks."
    },
    {
      icon: <Truck size={40} className="text-blue-600" />,
      title: "Fast Shipping",
      description: "Enjoy lightning-fast delivery to your doorstep within 24 to 48 hours of ordering."
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-600" />,
      title: "Secure Checkout",
      description: "Your data is protected with industry-standard encryption for a safe shopping experience."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;