import React from 'react'
import Link from 'next/link'
import "./Navbar.css";
function Nav() {
  return (
    <div class="main-navbar">
      <h1>CST</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/game">Game</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav
