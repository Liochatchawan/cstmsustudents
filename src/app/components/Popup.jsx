import React, { useState } from 'react';
import './Popup.css'; // นำเข้า CSS สำหรับ Popup
import './M600Popup.css';

const Popup = ({ message, onClose }) => {
  const [randomNumber, setRandomNumber] = useState(null); // เก็บตัวเลขสุ่ม
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(''); // เก็บข้อความผลลัพธ์

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 3) + 1;
    setRandomNumber(number);
    return number; // ส่งค่ากลับไปใช้ใน handleSubmit
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const answer = '2', answer2 = '2'; // ค่าที่คุณต้องการเช็ค

  const handleSubmit = () => {
    // ตรวจสอบว่าค่าที่ป้อนเป็นตัวเลขหรือไม่
    if (isNaN(inputValue)) {
      setResult(['โจทย์ยังไม่อ่าน', 'ทีแชทเขายังอ่านทุกตัวอักษร']);
      return; // ออกจากฟังก์ชันทันทีหากค่าไม่ใช่ตัวเลข
    }

    // สุ่มตัวเลขใหม่ทุกครั้งที่มีการ Submit
    const randomNum = generateRandomNumber();

    if (inputValue === '') {
      if (randomNum === 1) {
        setResult('ใส่คำตอบด้วยสิน้องรัก');
      } else if (randomNum === 2) {
        setResult(['ไม่ใส่คำตอบนี่','มันเหมือนกับการอ่านไม่ตอบไหมอ่ะ']);
      } else {
        setResult(['ไม่ใส่คำตอบ','ระวังเขาไม่ใส่ใจนะครับ']);
      }
    } else if (inputValue === answer || inputValue === answer2) {
      if (randomNum === 1) {
        setResult('😢เก่งแค่ไหนเขาก็ไม่รักหรอกน้อง😢'); // แสดงผล Right ถ้า input ตรงกับค่าที่กำหนด
      } else if (randomNum === 2) {
        setResult('😢ฉลาดปานนี้คือยังถืกเขาตั้ว😢');
      } else {
        setResult(['😢ตอบถูกไม่ได้แปลว่า😢','😢เขาจะตอบแชทเรานะ😢']);
      }
    } else {
      if (randomNum === 1) {
        setResult('ตอบส่ำนี้กะบ่ถืกไปหาอ่านหนังสือสอบผุ่น'); // แสดงผล Wrong ถ้า input ไม่ตรงกับค่าที่กำหนด
      } else if (randomNum === 2) {
        setResult('ส่ำพอเนาะเขาจังบ่เอา');
      } else {
        setResult('ใบลาออกคือคำตอบนะครับ');
      }
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="detail">
          <div className="ex">1+1 = ได้เท่าไหร่น้องๆ</div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="ตอบมาเลยน้องๆ"
          />
          <div className="answerPopup">
            {Array.isArray(result) ? result.map((line, index) => (
              <div key={index}>{line}</div> // แสดงแต่ละบรรทัดแยกกัน
            )) : result}
          </div>
          <button className="btn-submit" onClick={handleSubmit}>Submit</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Popup;
