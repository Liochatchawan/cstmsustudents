import React, { useState } from 'react';
import './Popup.css'; // นำเข้า CSS สำหรับ Popup
import './M600Popup.css';
const Popup = ({ message, onClose }) => {

  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(''); // เก็บข้อความผลลัพธ์
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const answer = '2', answer2 = '3'; // ค่าที่คุณต้องการเช็ค


  const handleSubmit = () => {
    if(inputValue === ''){
      setResult('ใส่คำตอบด้วยสิน้องรัก')
    }else if (inputValue === answer || inputValue === answer2) {
      setResult('😢เก่งแค่ไหนเขาก็ไม่รักหรอกน้อง😢'); // แสดงผล Right ถ้า input ตรงกับค่าที่กำหนด
    } else {
      setResult('ตอบส่ำนี้กะบ่ถืกไปหาอ่านหนังสือสอบผุ่น'); // แสดงผล Wrong ถ้า input ไม่ตรงกับค่าที่กำหนด
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="detail">
          {/* <div className="ex">1+1 = ได้เท่าไหร่น้องๆ</div> */}
          <div className="ex">1+1 = ได้เท่าไหร่น้องๆ</div>
          
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="ตอบมาเลยน้องๆ"
          />

          <div className = "answerPopup">{result}</div> {/* แสดงผลลัพธ์หลังจากกด Submit */}
          <button className="btn-submit" onClick={handleSubmit}>Submit</button>
        </div>
        <br />
        {/* <button onClick={onClose} className="btnAfterPopup">X</button> */}
      </div>
    </div>
  );
};

export default Popup;
