'use client';
import React, { useState, useEffect } from 'react';
import Popup from './components/Popup'; // แก้ไขการนำเข้าให้ถูกต้อง
import ReactPlayer from 'react-player';//video

export default function Home() {
  const text = "Welcome to CST Website";
  const text2 = "Create by CST Students"; // ข้อความที่จะพิมพ์
  const [displayText, setDisplayText] = useState("");  // ข้อความที่จะแสดง
  const [displayText2, setDisplayText2] = useState(""); // ข้อความที่สอง
  const [index, setIndex] = useState(0);  // ตำแหน่งของตัวอักษร
  const [isAdding, setIsAdding] = useState(true);  // สถานะการพิมพ์หรือลบตัวอักษร

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // ทำงานที่ต้องการเมื่อขนาดหน้าจอเปลี่ยน
        console.log('หน้าจอถูกปรับขนาด');
        // อาจจะเรียกใช้ฟังก์ชันหรืออัปเดตสถานะที่นี่
      }, 250); // รอ 250 มิลลิวินาทีก่อนทำงาน
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    // พิมพ์ข้อความแรก
    if (isAdding) {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText + text.charAt(index));  // แสดงตัวอักษรทีละตัว
          setIndex(index + 1);
        }, 150);  // พิมพ์ตัวอักษรใหม่ทุก 100ms
        return () => clearTimeout(timeout);  // ล้าง timeout
      } else {
        // เมื่อพิมพ์ครบแล้ว รอ 1 วินาที แล้วเริ่มลบ
        setTimeout(() => setIsAdding(false), 2000);
      }
    } else {
      if (index > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, index - 1));  // ลบตัวอักษรทีละตัว
          setIndex(index - 1);
        }, 150);  // ลบตัวอักษรทุก 100ms
        return () => clearTimeout(timeout);
      } else {
        // เมื่อลบครบแล้ว รอ 1 วินาที แล้วเริ่มพิมพ์ใหม่
        setTimeout(() => setIsAdding(true), 100);
      }
    }
  }, [index, isAdding, displayText]);  // ทำงานทุกครั้งที่ index, isAdding หรือ displayText เปลี่ยน

  // พิมพ์ข้อความที่สอง
  useEffect(() => {
    // พิมพ์ข้อความที่สอง
    if (isAdding) {
      if (index < text2.length) {
        const timeout = setTimeout(() => {
          setDisplayText2(displayText2 + text2.charAt(index));  // แสดงตัวอักษรทีละตัว
          setIndex(index + 1);
        }, 150);  // พิมพ์ตัวอักษรใหม่ทุก 100ms
        return () => clearTimeout(timeout);  // ล้าง timeout
      } else {
        // เมื่อพิมพ์ครบแล้ว รอ 1 วินาที แล้วเริ่มลบ
        setTimeout(() => setIsAdding(false), 2000);
      }
    } else {
      if (index > 0) {
        const timeout = setTimeout(() => {
          setDisplayText2(displayText2.slice(0, index - 1));  // ลบตัวอักษรทีละตัว
          setIndex(index - 1);
        }, 150);  // ลบตัวอักษรทุก 100ms
        return () => clearTimeout(timeout);
      } else {
        // เมื่อลบครบแล้ว รอ 1 วินาที แล้วเริ่มพิมพ์ใหม่
        setTimeout(() => setIsAdding(true), 100);
      }
    }
  }, [index, isAdding, displayText2]);  // ทำงานทุกครั้งที่ index, isAdding หรือ displayText2 เปลี่ยน

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <main>
      {isPopupOpen && (<Popup onClose={closePopup} />)}
      <div className="content-centerdisplay">
        <div className="text-wellcom">{displayText}</div>
        <div className="text-detail">{displayText2}</div>
          <div className="container-cstvideo">
            <ReactPlayer
              className="cst-video"
              url='https://www.youtube.com/watch?v=29iQ9YPlCOQ'
              controls />
          </div>
        <button onClick={openPopup} className='btn-center'>Click Me</button>
      </div>
    </main>
  );
}
