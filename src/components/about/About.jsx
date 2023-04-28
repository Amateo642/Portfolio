import React from 'react';
import './about.css';
import ME from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa';
import { MdOutlineTask } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id='about' className='section'>
      <h5>{t("about.header")}</h5>
      <h2>{t("about.me")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ ME } alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>{t("about.experience")}</h5>
              <small>{t("about.practice")}</small>
            </article>

            <article className='about__card'>
              <MdOutlineTask className='about__icon'/>
              <h5>{t("about.projects")}</h5>
              <small>{t("about.completed")}</small>
            </article>
          </div>

          <p>
          {t("about.text")}
          </p>

          <a href="#contact" className='btn btn-primary'>{t("about.talk")}</a>
        </div>
      </div>
    </section>
  )
}

export default About