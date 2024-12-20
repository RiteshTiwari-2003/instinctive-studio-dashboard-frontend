import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChartPie, FaUserGraduate, FaBook, FaQuestionCircle, FaFileAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: FaChartPie },
    { path: '/students', label: 'Student', icon: FaUserGraduate },
    { path: '/chapter', label: 'Chapter', icon: FaBook },
    { path: '/help', label: 'Help', icon: FaQuestionCircle },
    { path: '/report', label: 'Report', icon: FaFileAlt },
    { path: '/settings', label: 'Settings', icon: FaCog },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="text-2xl font-bold mb-8 px-4">Admin Panel</div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center py-2 px-4 rounded transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
