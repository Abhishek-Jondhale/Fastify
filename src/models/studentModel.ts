
import { Student } from '../interfaces/studentInterface';

export class StudentModel {

  private static students: Student[] = [
    { id: 1, name: 'yash', class: '10th' },
    { id: 2, name: 'ram', class: '10th' },
    { id: 3, name: 'sham', class: '12th' },
    { id: 4, name: 'dhiraj', class: '11th' },
    { id: 5, name: 'sanket', class: '12th' },
  ];

  static getAllStudents(): Student[] {
    return this.students;
  }

  static getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  static getStudentsByClass(className: string): Student[] {
    return this.students.filter(student => student.class === className);
  }
}
