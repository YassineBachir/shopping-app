import React from 'react';

export default function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center items-center mb-5">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-1/3 p-2 text-lg border border-gray-300 rounded-l-md shadow-md transition duration-300 focus:border-blue-500 focus:shadow-lg focus:outline-none"
      />
      <button
        className="p-2 text-lg border border-l-0 border-blue-600 rounded-r-md bg-blue-600 text-white cursor-pointer shadow-md transition duration-300 hover:bg-purple-700 focus:outline-none"
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
