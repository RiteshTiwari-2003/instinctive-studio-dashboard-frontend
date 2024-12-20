import React from 'react';
import { FaBell, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const academicYears = ["AY 2024-25", "AY 2023-24", "AY 2022-23"];
  const classes = ["CBSE 9", "CBSE 10", "CBSE 11", "CBSE 12"];

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-800">
            <FaBell className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaEnvelope className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Ritesh Tiwari"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700 font-medium">Ritesh Tiwari</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <div className="relative">
            <select className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {academicYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {classes.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
            <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
