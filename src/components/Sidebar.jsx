import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="text-2xl font-bold mb-8">Student Dashboard</div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/courses" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/assignments" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Assignments
            </Link>
          </li>
          <li>
            <Link to="/grades" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Grades
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
