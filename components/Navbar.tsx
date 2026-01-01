'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Logo size="medium" showText={false} />
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive('/about') ? 'active' : ''}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/programs" className={isActive('/programs') ? 'active' : ''}>
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/impact" className={isActive('/impact') ? 'active' : ''}>
                Impact
              </Link>
            </li>
            <li>
              <Link href="/get-involved" className={isActive('/get-involved') ? 'active' : ''}>
                Get Involved
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

