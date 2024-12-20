import React, { useState } from 'react';
import StudentTable from './StudentTable';
import AddStudentForm from './AddStudentForm';

const MainContent = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    const studentWithId = {
      ...newStudent,
      id: Date.now(),
      status: 'Active',
      avatar: 'https://via.placeholder.com/40',
      email: `${newStudent.name.toLowerCase().replace(' ', '.')}@example.com`,
      rollNo: `${new Date().getFullYear()}${Math.floor(Math.random() * 1000)}`,
    };
    setStudents([...students, studentWithId]);
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add new Student
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <StudentTable students={students} />
        </div>

        {showAddForm && (
          <AddStudentForm
            onClose={() => setShowAddForm(false)}
            onSubmit={handleAddStudent}
          />
        )}
      </div>
    </div>
  );
};

export default MainContent;
