import React, { useState } from 'react';
import StudentTable from './StudentTable';
import AddStudentForm from './AddStudentForm';

const MainContent = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await api.getStudents();
      setStudents(data || []);
    } catch (err) {
      console.error('Error fetching students:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return (
    <div className="flex-1 p-6">
      <div className="animate-pulse">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="flex-1 p-6">
      <div className="text-red-500">Error: {error}</div>
    </div>
  );

  return (
    <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
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
    </main>
  );
}

export default MainContent;
