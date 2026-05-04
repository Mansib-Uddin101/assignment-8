"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "UI Designer",
      quote: "I love the clean layout. It makes browsing through thousands of tech tools and books feel effortless.",
      avatar: "https://i.pravatar.cc/150?u=emma"
    },
    {
      id: 5,
      name: "Liam O'Connell",
      role: "CS Student",
      quote: "The ability to filter by 'Tech' and 'Science' is a lifesaver. I found a rare copy of a DSP textbook that I couldn't find anywhere else locally.",
      avatar: "https://i.pravatar.cc/150?u=liam"
    },
    {
      id: 6,
      name: "Sophia Martinez",
      role: "Data Scientist",
      quote: "Excellent platform for keeping up with the latest in Machine Learning. The borrowing periods are perfect for finishing a deep-dive technical read.",
      avatar: "https://i.pravatar.cc/150?u=sophia"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-5/6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Readers Say</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="h-full p-8 border border-gray-100 rounded-2xl bg-gray-50 flex flex-col justify-between">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;