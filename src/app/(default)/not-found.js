import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="text-center my-48">
      <head>
        <title>Page Not Found</title>
      </head>
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">Oops! The page you are looking for might have been removed or is temporarily unavailable.</p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      
      <div className='space-x-10'>
      <Link href="/" className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Home
      </Link>
      <Link  href="/contact" className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Contact Us
      </Link>
      </div>
    </div>
  );
}
