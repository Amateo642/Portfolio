import React from 'react'
import "./footer.css"
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Amateo</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/amateo.dk_official/?hl=ru" target="_blank"><AiOutlineInstagram/></a>
        <a href="https://github.com/Amateo642" target="_blank"><AiFillGithub/></a>
        <a href="https://t.me/Amateo642" target="_blank"><FaTelegramPlane/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Amateo portfolio. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer