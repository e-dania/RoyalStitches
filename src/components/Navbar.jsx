import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
   <nav className="bg-customRed px-6 py-4 border-b border-customRed flex items-center justify-between">
  
  <a href="index.html" className="text-2xl font-bold text-white hover:text-gray-200 transition duration-300">
    Royal Stitches
  </a>

  <div className="space-x-6">
    <a href="products.html" className="text-white hover:text-gray-200 transition duration-300">
      Shop
    </a>
    <a href="about.html" className="text-white hover:text-gray-200 transition duration-300">
      About
    </a>
    <a href="contact.html" className="text-white hover:text-gray-200 transition duration-300">
      Contact
    </a>
  </div>
</nav>

    </>
  )
}

export default Navbar
