import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import StudentTable from './StudentTable';
import AddStudentForm from './AddStudentForm';
import AdminImageUpload from './AdminImageUpload';

const MainContent = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const location = useLocation();

  const handleAddStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: Date.now(),
      avatar: 'https://via.placeholder.com/40'
    };
    setStudents([...students, studentWithId]);
    setShowAddForm(false);
  };

  // Show admin content on the admin page
  const showAdminContent = location.pathname === '/admin';
  // Show student content on the students page or dashboard
  const showStudentContent = location.pathname === '/students' || location.pathname === '/';

  if (showAdminContent) {
    return (
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Admin Dashboard</h1>
          <AdminImageUpload />
        </div>
      </div>
    );
  }

  if (!showStudentContent) {
    return null;
  }

  return (
    <>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
            <div className="flex items-center space-x-4">
              {/* Search Box */}
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search students..."
                  className="pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => searchInputRef.current.focus()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaSearch />
                </button>
              </div>
              <button
                onClick={() => setShowAddForm(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Student
              </button>
            </div>
          </div>

          {/* Student Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <StudentTable 
              students={students} 
              searchQuery={searchQuery}
            />
          </div>
        </div>

        {/* Add Student Form Modal */}
        {showAddForm && (
          <AddStudentForm
            onClose={() => setShowAddForm(false)}
            onSubmit={handleAddStudent}
          />
        )}
      </div>
    </>
  );
};

export default MainContent;
