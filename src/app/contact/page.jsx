'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import "./components/contact.css";
import "./components/Mcontact.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const fetcher = async (url) => {
  try {
    console.log("Fetching data from:", `${API_URL}${url}`);
    const res = await fetch(`${API_URL}${url}`);
    if (!res.ok) throw new Error(`Failed to fetch data: ${res.statusText}`);
    const data = await res.json();
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default function ContactPage() {
  const { data, error, mutate } = useSWR('/data', fetcher);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting message to:", `${API_URL}/data`);
      const response = await fetch(`${API_URL}/data`, {
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
        console.log("Message saved successfully.");
        mutate(); // รีเฟรชข้อมูลหลังจากบันทึกข้อความใหม่
      } else {
        setStatus('Failed to save message');
        console.error("Failed to save message:", response.statusText);
      }
    } catch (error) {
      setStatus('Failed to save message');
      console.error("Submit error:", error);
    }
  };

  if (error) {
    console.error("Fetch error:", error);
    return <div>Failed to load</div>;
  }
  if (!data) return <div>Loading...</div>;

  return (
    <div className="centered-container">
      <div className="text-topic">ฝากข้อความถึงคนสร้างเว็ป</div>
      <form onSubmit={handleSubmit} className="box-contact">
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
        <button type="submit" className="btn-contact">
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-green-500">{status}</p>}
    </div>
  );
}
