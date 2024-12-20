import { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function TestApi() {
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
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createTestStudent = async () => {
    try {
      const newStudent = {
        name: 'Test Student',
        cohort: 'AY 2024-25',
        courses: []
      };
      const created = await api.createStudent(newStudent);
      setStudents(prev => [...prev, created]);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">API Test</h2>
      <button
        onClick={createTestStudent}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Create Test Student
      </button>
      <div className="space-y-2">
        {students.map(student => (
          <div key={student.id} className="border p-2 rounded">
            <p>Name: {student.name}</p>
            <p>Cohort: {student.cohort}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
