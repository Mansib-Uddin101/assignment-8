"use client";

import Card from '@/components/Card';
import React, { useState, useEffect } from 'react';

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); // Track selected category

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://assignment-8-zeta-rust.vercel.app/data.json");
      const data = await res.json();
      setAllBooks(data);
    };
    fetchData();
  }, []);

  const categories = ["All", ...new Set(allBooks.map(book => book.category))];

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className='w-11/12 mx-auto my-10'>
      <div className="pb-8 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">All Book Collections</h1>
        <div className='w-full max-w-xl'>
          <input
            type="text"
            placeholder="Search by book title..."
            className="block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        <aside className="w-full md:w-1/5">
          <div className="p-4 border border-gray-200 rounded-lg bg-white sticky top-4">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === category 
                      ? "bg-[#00D3BB] text-white" 
                      : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => <Card book={book} key={book.id} />)
            ) : (
              <p className="col-span-full text-center py-20 text-gray-500">
                No books found in this category.
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default AllBooks;