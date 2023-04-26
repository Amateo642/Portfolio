import React from 'react';
import "./services.css";
import { AiOutlineCheck } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id='services' className='section'>
      <h5>{t("services.offer")}</h5>
      <h2>{t("services.header")}</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>{t("services.design.header")}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.design.design")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.design.navigation")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.design.splashy")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.design.structure")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.design.integration")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.design.friendly")}</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t("services.web.header")}</h3>
          </div>

          <ul className='service__list'>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.web.safety")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.web.domain")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.web.deployment")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.web.clean")}</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t("services.content.header")}</h3>
          </div>

          <ul className='service__list'>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.content.idea")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.content.visualize ")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.content.theme")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.content.improved")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.content.right")}</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>{t("services.content.desire")}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services