'use client';

import Image from 'next/image';
import "./components/contact.css";
import "./components/Mcontact.css";
import igPhoto from '../public/IG.png';

export default function ContactPage() {
  return (
    <div className='Main'>
      <section className='section-contact'>
        <h1>CONTACT</h1>
        <div className='photo-details'>
          <Image
            className="contact-photo"
            src={igPhoto}
            alt="Picture of the author"
            blurDataURL="data:..."
            placeholder="blur"
          />
          <div className='inner-photo-details'>
            <p>Button for contact about this website</p>
            <a
              href="https://www.instagram.com/lio_3030x/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact"
            >
              IG
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
