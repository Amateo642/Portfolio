import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/avatar.png';
import HeaderSocials from './HeaderSocials';
import Languages from './Languages';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Languages/>
      <div className="container header__container">
        <h5>{t('header.greetings')}</h5>
        <h1>{t('header.amateo')}</h1>
        <h5 className='text-light'>{t('header.developer')}</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>{t('header.scroll')}</a>
      </div>
    </header>
  )
}

export default Header