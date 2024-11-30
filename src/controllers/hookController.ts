import { Student } from '../interfaces/hookInterface';

const students: Student[] = [
  { id: 1, name: 'Yash', class: 'Math' },
  { id: 2, name: 'Sham', class: 'Science' },
];

export const findStudentById = (id: number): Student | undefined => {
  return students.find(student => student.id === id);
};
