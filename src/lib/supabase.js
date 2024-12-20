import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Student API functions
export const studentApi = {
  async getAll() {
    const { data, error } = await supabase
      .from('students')
      .select(`
        *,
        student_courses (
          course:courses (*)
        )
      `);
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from('students')
      .select(`
        *,
        student_courses (
          course:courses (*)
        )
      `)
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(student) {
    const { data, error } = await supabase
      .from('students')
      .insert([student])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, student) {
    const { data, error } = await supabase
      .from('students')
      .update(student)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id) {
    const { error } = await supabase
      .from('students')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};

// Course API functions
export const courseApi = {
  async getAll() {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        student_courses (
          student:students (*)
        )
      `);
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        student_courses (
          student:students (*)
        )
      `)
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(course) {
    const { data, error } = await supabase
      .from('courses')
      .insert([course])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, course) {
    const { data, error } = await supabase
      .from('courses')
      .update(course)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id) {
    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
