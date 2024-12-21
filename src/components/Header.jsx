import React, { useState, useRef } from 'react';
import { FaBell, FaEnvelope, FaChevronDown, FaCamera } from 'react-icons/fa';
import { api } from '../services/api';
import adminDefaultImage from '../assets/images/admin.jpg';

const Header = () => {
  const academicYears = ["AY 2024-25", "AY 2023-24", "AY 2022-23"];
  const classes = ["CBSE 9", "CBSE 10", "CBSE 11", "CBSE 12"];
  const [adminImage, setAdminImage] = useState(adminDefaultImage);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const response = await api.uploadAdminImage(file);
        if (response.imageUrl) {
          setAdminImage(`${import.meta.env.VITE_API_URL}${response.imageUrl}`);
        } else {
          setAdminImage(adminDefaultImage);
        }
      } catch (error) {
        console.error('Failed to upload image:', error);
        setAdminImage(adminDefaultImage);
      }
    }
  };

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
            <div className="relative group">
              <img
                src={adminImage}
                alt="VISHAL PULIKOTTIL"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={handleImageClick}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaCamera className="text-white text-sm" />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <span className="text-gray-700 font-medium">VISHAL PULIKOTTIL</span>
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
