import React from 'react'
import './contact.css'
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const  form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_911djvi', 'template_t8rpfra', form.current, 'WExbGxpbCA7ruGBL7')
  
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            < AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>KitlyaevDD@mail.ru</h5>
            <a href="mailto:KitlyaevDD@mail.ru">Send a message</a>
          </article>

          <article className="contact__option">
            < FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>+79681967114</h5>
            <a href="https://t.me/Amateo642">Send a message</a>
          </article>

          <article className="contact__option">
            < AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Amateo.dk_official</h5>
            <a href="https://www.instagram.com/amateo.dk_official/?hl=ru">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact