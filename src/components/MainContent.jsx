import { useState, useEffect } from 'react';
import { api } from '../services/api';
import StudentTable from './StudentTable';

function MainContent() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

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
    <main className="flex-1 overflow-auto p-6">
      <div className="bg-white rounded-lg shadow">
        <StudentTable students={students} />
      </div>
    </main>
  );
}

export default MainContent;
