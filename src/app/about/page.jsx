"use client";  // บอกให้ Next.js รู้ว่านี่เป็น Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import phototest from '../public/10.png';
import Popup from './components/Popup'; // แก้ไขการนำเข้าให้ถูกต้อง
import frunkPhoto from '../public/frunk.jpg';
import AtomTonBomPhoto from '../public/AtomTonBom.jpg';
import BomPhoto from '../public/Bom.jpg';
import TonPhoto from '../public/Ton3.png';
import LioPhoto from '../public/Lio2.jpg';
import atomPhoto from '../public/atom.png';
function AboutPage() {
    const text = "Welcome to the About Page! This is a typing effect demo."; // ข้อความที่จะพิมพ์
    const [displayText, setDisplayText] = useState("");  // ข้อความที่จะแสดง
    const [index, setIndex] = useState(0);  // ตำแหน่งของตัวอักษร
    const [isAdding, setIsAdding] = useState(true);  // สถานะการพิมพ์หรือลบตัวอักษร

    useEffect(() => {
        if (isAdding) {
            if (index < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(displayText + text.charAt(index));  // แสดงตัวอักษรทีละตัว
                    setIndex(index + 1);
                }, 100);  // พิมพ์ตัวอักษรใหม่ทุก 100ms
                return () => clearTimeout(timeout);  // ล้าง timeout
            } else {
                // เมื่อพิมพ์ครบแล้ว รอ 1 วินาที แล้วเริ่มลบ
                setTimeout(() => setIsAdding(false), 1000);
            }
        } else {
            if (index > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, index - 1));  // ลบตัวอักษรทีละตัว
                    setIndex(index - 1);
                }, 100);  // ลบตัวอักษรทุก 100ms
                return () => clearTimeout(timeout);
            } else {
                // เมื่อลบครบแล้ว รอ 1 วินาที แล้วเริ่มพิมพ์ใหม่
                setTimeout(() => setIsAdding(true), 1000);
            }
        }
    }, [index, isAdding, displayText]);  // ทำงานทุกครั้งที่ index, isAdding หรือ displayText เปลี่ยน


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="container mx-auto">
            <h3>AboutPage</h3>
            <Image
                src={phototest}
                alt="Picture of the author"
                width={500}
                height={500}
                blurDataURL="data:..."
                placeholder="blur" // Optional blur-up while loading
            />
            {/* แสดงข้อความที่กำลังพิมพ์หรือลบ */}
            <div className="typing-text" style={{ fontSize: '24px', fontFamily: 'monospace' }}>
                {displayText}
            </div>

            <button onClick={openPopup}>Open Popup</button>
            {isPopupOpen && (
                <Popup message="This is a popup!" onClose={closePopup} />
            )}
                  <div className="container-sectiongrop">
        <section className="section-member">
          <div className="grop-section-member">
            <div className="topic-text">
              Member CST
            </div>

            <div className="text-center text-4xl pt-10">
              1 CST
            </div>

            <div className="gallery">
              <figure className="gallery__item gallery__item--1">
                <Image
                  className="member-Photo"
                  src={LioPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Lio</h4>
              </figure>
              <figure className="gallery__item gallery__item--2">
                <Image
                  className="member-Photo"
                  src={frunkPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Frunk</h4>
              </figure>
              <figure className="gallery__item gallery__item--3">
                <Image
                  className="member-Photo"
                  src={BomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Bom</h4>
              </figure>
              <figure className="gallery__item gallery__item--4">
                <Image
                  className="member-Photo"
                  src={TonPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Ton</h4>
              </figure>
              <figure className="gallery__item gallery__item--5">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Atom</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>6</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>7</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>8</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>9</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>10</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>11</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>12</h4>
              </figure>
              {/* <figure className ="gallery__item gallery__item--6">

              </figure> */}
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>13</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>14</h4>
              </figure>
            </div>
            <hr />
            <div className="text-center text-4xl pt-10">
              2 CST
            </div>

            <div className="gallery">
              <figure className="gallery__item gallery__item--1">
                <Image
                  className="member-Photo"
                  src={LioPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Lio</h4>
              </figure>
              <figure className="gallery__item gallery__item--2">
                <Image
                  className="member-Photo"
                  src={frunkPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Frunk</h4>
              </figure>
              <figure className="gallery__item gallery__item--3">
                <Image
                  className="member-Photo"
                  src={BomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Bom</h4>
              </figure>
              <figure className="gallery__item gallery__item--4">
                <Image
                  className="member-Photo"
                  src={TonPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Ton</h4>
              </figure>
              <figure className="gallery__item gallery__item--5">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>Atom</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>6</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>7</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>8</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>9</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>10</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>11</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>12</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">

              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>13</h4>
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  className="member-Photo"
                  src={atomPhoto}
                  alt="Picture of the author"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
                <h4>14</h4>
              </figure>
            </div>
          </div>
        </section>
      </div>
        </div>
    );
}

export default AboutPage;
