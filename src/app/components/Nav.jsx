import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import "./Navbar.css";
import "./M600Navbar.css";
import logo from "../public/CST_Logo.png";
function Nav() {
  return (
    <div className="main-navbar">
      <div>
        <Image
          className="logo"
          src={logo}
          alt="Picture of the author"
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/game">Game</Link></li>
        <li><Link href="/about">Member</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav
