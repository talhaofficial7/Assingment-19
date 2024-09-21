// src/components/StudentForm.js
import React, { useState } from 'react';

function StudentForm({ addStudent }) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    rollNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(inputs);
    setInputs({ name: '', email: '', rollNo: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        className="me-2"
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        className="me-2"
      />
      <input
        type="text"
        placeholder="Enter Roll No"
        name="rollNo"
        value={inputs.rollNo}
        onChange={handleChange}
        className="me-2"
      />
      <button type="submit" className="btn btn-primary">Add Student</button>
    </form>
  );
}

export default StudentForm;
