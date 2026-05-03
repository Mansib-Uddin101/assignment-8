import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="mb-8">
        <h1 className="text-9xl font-extrabold text-gray-100 relative">
          404
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#00c2b8]">
            Chapter Missing
          </span>
        </h1>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Oops! This page is checked out.
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
      The book or page you are looking for doesn't exist in our library. 
      </p>

      <Link
        href="/"
        className="bg-[#00c2b8] hover:bg-[#00a8a0] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-sm"
      >
        Return to Home
      </Link>

      <div className="mt-12 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
};

export default NotFound;