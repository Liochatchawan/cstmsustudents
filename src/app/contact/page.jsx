"use client"

import React from 'react'

// async function fetchMessage() {
//   const res = await fetch(`http://localhost:3000/api/hello?timestamp=${new Date().getTime()}`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   const data = await res.json();
//   return data.message;
// }


// pages/survey.js
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/submitSurvey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const result = await res.json();
      alert('Survey submitted successfully! ID: ' + result.id);
      setFormData({ name: '', email: '', feedback: '' }); // Clear form
    } else {
      alert('Failed to submit survey');
    }
  };

  return (
    <div className="flex justify-center">
      <div className="comingsoon">
                Contact <br />Coming Soon
            </div>
      {/* <form onSubmit={handleSubmit} className="justify-center text-2xl">
        <h1>Survey Form</h1>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea name="feedback" value={formData.feedback} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

