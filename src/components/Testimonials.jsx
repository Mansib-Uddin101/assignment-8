import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Software Developer",
      quote: "The technical book selection here is unmatched. I found exactly what I needed for my React project.",
      avatar: "https://i.pravatar.cc/150?u=alex"
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Avid Reader",
      quote: "The interface is so smooth, and the category filtering makes finding new stories incredibly easy.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      id: 3,
      name: "David Chen",
      role: "University Student",
      quote: "The borrowing process is seamless. It's saved me so much money on semester textbooks, and the return policy is super flexible.",
      avatar: "https://i.pravatar.cc/150?u=david"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-5/6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="p-8 border border-gray-100 rounded-2xl bg-gray-50 flex flex-col justify-between">
              <p className="text-gray-700 italic mb-6">"{review.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;