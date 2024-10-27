'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import "./components/contact.css";
import "./components/Mcontact.css";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ContactPage() {
  const { data, error, mutate } = useSWR('/api/data', fetcher);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, message }),
    });

    if (response.ok) {
      setStatus('Message saved successfully!');
      setUsername('');
      setMessage('');
      mutate(); // รีเฟรชข้อมูลหลังจากบันทึกข้อความใหม่
    } else {
      setStatus('Failed to save message');
    }
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="centered-container">
      {/* <h1 className="text-2xl font-bold mb-4">Data from MongoDB:</h1>
      <pre className="bg-white p-4 rounded shadow-md w-full max-w-md mb-8 overflow-auto">{JSON.stringify(data, null, 2)}</pre> */}

      <div className="text-topic">ฝากข้อความถึงคนสร้างเว็ป</div>
      <form onSubmit={handleSubmit}
        className="box-contact">
        <h3 className="text-inbox">Username</h3>
        
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-name"
          />
        
        <label className="text-inbox">Message</label>
        
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="input-message"
          />
        
        <button
          type="submit"
          className="btn-contact"
        >
          Submit
        </button>
      </form>

      {status && <p className="mt-4 text-green-500">{status}</p>}
    </div>
  );
}
