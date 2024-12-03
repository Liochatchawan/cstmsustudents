"use client";  // บอกให้ Next.js รู้ว่านี่เป็น Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import frunkPhoto from '../public/frunk.jpg';
import BomPhoto from '../public/Bom.jpg';
import TonPhoto from '../public/Ton3.png';
import LioPhoto from '../public/Lio2.jpg';
import atomPhoto from '../public/atom.png';
import piePhoto from '../public/Pie.jpg';
import pitchaPhoto from '../public/Pitcha.jpg'
import blackPhoto from '../public/black.jpg'
import oumPhoto from '../public/Oum.jpg'
import topPhoto from '../public/Top.jpg'
function AboutPage() {
    return (
        <div>
            <div className="container-sectiongrop">
                <section className="section-member">
                    <div className="grop-section-member">
                        <div className="topic-text">
                            Member CST
                        </div>
                        <div className="text-center text-2xl mt-2 mb-2">
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
                                    src={oumPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>Oum</h4>
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
                                    src={piePhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>Pie</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--6">
                                <Image
                                    className="member-Photo"
                                    src={pitchaPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>Pitcha</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--6">
                                <Image
                                    className="member-Photo"
                                    src={topPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>Top</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--6">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>Pao</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--6">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>Kon</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--6">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>Pete</h4>
                            </figure>
                        </div>


                        <hr />

                        
                        <div className="text-center text-2xl mt-2 mb-2">
                            2 CST
                        </div>

                        <div className="gallery">
                            <figure className="gallery__item gallery__item--1">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>1</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--2">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>2</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--3">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>3</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--4">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>4</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--5">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>5</h4>
                            </figure>
                            <figure className="gallery__item gallery__item--6">
                                <Image
                                    className="member-Photo"
                                    src={blackPhoto}
                                    alt="Picture of the author"
                                    blurDataURL="data:..."
                                    placeholder="blur" // Optional blur-up while loading
                                />
                                <h4>6</h4>
                            </figure>
                            
                        </div>
                    </div>
                </section>
            </div> 
        </div>
    );
}

export default AboutPage;
