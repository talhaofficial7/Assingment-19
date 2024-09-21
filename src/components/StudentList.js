// src/components/StudentList.js
import React from 'react';

function StudentList({ students, deleteStudent, updateStudent }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Roll No</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.rollNo}</td>
            <td>
              <button onClick={() => deleteStudent(student.id)} className="btn btn-danger me-2">Delete</button>
              <button onClick={() => updateStudent({ ...student, name: "Updated" })} className="btn btn-warning">Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
