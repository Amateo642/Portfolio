import React from 'react';
import "./experience.css";
import { BsCheckCircle } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id='experience'>
      <h5>{t("experience.skills")}</h5>
      <h2>{t("experience.header")}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("experience.frontend")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>{t("experience.backend")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Open source API</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JS</h4>
                <small className='text-light'>{t("experience.experienced")}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience