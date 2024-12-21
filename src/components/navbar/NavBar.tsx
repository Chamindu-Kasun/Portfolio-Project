"use client";
import React from 'react'

const NavBar: React.FC = () => {
  const sections = ["About", "Projects", "Testimonials", "Contact"];

  return (
    <div className='app_navbar'>
      <div className='app_navbar_items'>
        {
          sections.map((section, index) => (
            <div key={index}>
              <text className='app_navbar_item_text'>{section}</text>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NavBar