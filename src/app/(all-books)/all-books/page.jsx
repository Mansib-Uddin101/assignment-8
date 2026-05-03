"use client";

import Card from '@/components/Card';
import React, { useState, useEffect } from 'react';

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://assignment-8-zeta-rust.vercel.app/data.json");
      const data = await res.json();
      setAllBooks(data);
    };
    fetchData();
  }, []);

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-5/6 mx-auto my-10'>
      <div className="pb-8 flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-3xl font-bold">All Book Collections</h1>
        <div className='w-full'>

        <input
          type="text"
          
          placeholder="Search by book title..."
          className="block w-full  px-4 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <Card book={book} key={book.id} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default AllBooks;