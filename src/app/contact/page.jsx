'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import "./components/contact.css";
import "./components/Mcontact.css";

// URL API โดยตรงสำหรับการเรียกข้อมูล
// const API_URL = "https://cstmsustudents.vercel.app/api/data";
const API_URL = '/api/proxy/data';
console.log("Base URL:", API_URL);  // ตรวจสอบว่า URL ถูกต้อง


// ฟังก์ชัน fetcher พร้อม Timeout สำหรับการดึงข้อมูล
const fetcher = async (url) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout ที่ 5 วินาที

  try {
    console.log("Fetching data from:", url);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

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
  // ดึงข้อมูลจาก API โดยตรง
  const { data, error, mutate } = useSWR(API_URL, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 3) return; // ลองดึงข้อมูลใหม่ไม่เกิน 3 ครั้ง
      setTimeout(() => revalidate({ retryCount }), 5000); // ลองใหม่หลังจาก 5 วินาที
    }
  });
  
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  // ตั้ง timeout เพื่อแจ้งว่าการโหลดใช้เวลานาน
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTimeout(true);
    }, 5000); // แจ้งหลังจาก 5 วินาที

    return () => clearTimeout(timer);
  }, []);

  // ฟังก์ชัน handleSubmit สำหรับส่งข้อความ
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Submitting message to:", API_URL);
      const response = await fetch(API_URL, {
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

  // แสดงผลเมื่อเกิดข้อผิดพลาดหรือกำลังโหลดข้อมูล
  if (error) {
    console.error("Fetch error:", error);
    return <div>Failed to load data. Please try again later.</div>;
  }
  if (!data && !loadingTimeout) return <div>Loading...</div>;
  if (!data && loadingTimeout) return <div>Loading took too long. Try refreshing.</div>;

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
