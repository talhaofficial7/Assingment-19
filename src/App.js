// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { id: students.length + 1, ...student }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((student) => student.id === updatedStudent.id ? updatedStudent : student));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Student Management App</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} updateStudent={updateStudent} />
    </div>
  );
}

export default App;
