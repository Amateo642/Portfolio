import React from 'react'
import "./navigation.css"
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { GiBookshelf } from 'react-icons/gi'
import { RiServiceLine } from 'react-icons/ri'
import { MdContactMail } from 'react-icons/md'
import { useState } from 'react'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookshelf/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Navigation