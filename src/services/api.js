const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Students
  async getStudents() {
    const response = await fetch(`${API_URL}/students`);
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
  },

  async createStudent(data) {
    const response = await fetch(`${API_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create student');
    return response.json();
  },

  // Courses
  async getCourses() {
    const response = await fetch(`${API_URL}/courses`);
    if (!response.ok) throw new Error('Failed to fetch courses');
    return response.json();
  },

  async createCourse(data) {
    const response = await fetch(`${API_URL}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create course');
    return response.json();
  },

  // Admin
  async uploadAdminImage(file) {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_URL}/admin/upload-image`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to upload admin image');
    return response.json();
  },

  async getAdminImage(id) {
    const response = await fetch(`${API_URL}/admin/image/${id}`);
    if (!response.ok) throw new Error('Failed to get admin image');
    return response.json();
  },
};
