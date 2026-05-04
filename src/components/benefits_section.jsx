import React from 'react';
import { BookOpen, Clock, ShieldCheck } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BookOpen size={40} className="text-blue-600" />,
      title: "Extensive Library",
      description: "Access a diverse collection of thousands of books across all genres and tech stacks."
    },
    {
      icon: <Clock size={40} className="text-blue-600" />,
      title: "Extended Borrowing",
      description: "Borrow your favorite titles for up to 30 days with easy one-click renewals from your dashboard."
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-600" />,
      title: "Secure Checkout",
      description: "Your data is protected with industry-standard encryption for a safe shopping experience."
    }
  ];

  return (
    <section className="py-16">
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