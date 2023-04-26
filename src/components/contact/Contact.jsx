import React from 'react';
import './contact.css';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const  form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_911djvi', 'template_t8rpfra', form.current, 'WExbGxpbCA7ruGBL7')
  
    e.target.reset()
  };

  const { t, i18n } = useTranslation();

  return (
    <section id='contact' className='section'>
      <h5>{t('contacts.touch')}</h5>
      <h2>{t('contacts.header')}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            < AiOutlineMail className='contact__option-icon'/>
            <h4>{t('contacts.social.email')}</h4>
            <h5>KitlyaevDD@mail.ru</h5>
            <a href="mailto:KitlyaevDD@mail.ru">{t('contacts.social.message')}</a>
          </article>

          <article className="contact__option">
            < FaTelegramPlane className='contact__option-icon'/>
            <h4>{t('contacts.social.telegram')}</h4>
            <h5>+79681967114</h5>
            <a href="https://t.me/Amateo642">{t('contacts.social.message')}</a>
          </article>

          <article className="contact__option">
            < AiOutlineInstagram className='contact__option-icon'/>
            <h4>{t('contacts.social.instagram')}</h4>
            <h5>Amateo.dk_official</h5>
            <a href="https://www.instagram.com/amateo.dk_official/?hl=ru">{t('contacts.social.message')}</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('contacts.mail.name')} required />
          <input type="email" name='email' placeholder={t('contacts.mail.email')} required/>
          <textarea name="message" rows="7" placeholder={t('contacts.mail.message')}></textarea>
          <button type='submit' className='btn btn-primary'>{t('contacts.button')}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact