import React from 'react';
import "./footer.css";
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <a href="#" className='footer__logo'>Amateo</a>

      <ul className='permalinks'>
        <li><a href="#">{t('footer.home')}</a></li>
        <li><a href="#about">{t('footer.about')}</a></li>
        <li><a href="#experience">{t('footer.experience')}</a></li>
        <li><a href="#services">{t('footer.services')}</a></li>
        <li><a href="#portfolio">{t('footer.portfolio')}</a></li>
        <li><a href="#testimonials">{t('footer.testimonials')}</a></li>
        <li><a href="#contact">{t('footer.contact')}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/amateo.dk_official/?hl=ru" target="_blank"><AiOutlineInstagram/></a>
        <a href="https://github.com/Amateo642" target="_blank"><AiFillGithub/></a>
        <a href="https://t.me/Amateo642" target="_blank"><FaTelegramPlane/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Amateo portfolio. {t('footer.copyright')}</small>
      </div>
    </footer>
  )
}

export default Footer