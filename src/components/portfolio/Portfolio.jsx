import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio 1.jpg';
import IMG2 from '../../assets/portfolio 2.jpg';
import IMG3 from '../../assets/portfolio 3.jpg';
import IMG4 from '../../assets/portfolio 4.jpg';
import IMG5 from '../../assets/portfolio 5.jpg';
import { useTranslation } from 'react-i18next';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'K-pop - voting game, Beauty contest.',
    github: 'https://github.com/Amateo642/K-pop.choice',
    demo: 'https://kpop-game.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Books search app using Google books api.',
    github: 'https://github.com/Amateo642/Library',
    demo: 'https://library-amateo642.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Template bussiness CRM.',
    github: 'https://github.com/Amateo642/react-admin-panel',
    demo: 'https://react-admin-panel-neon.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project of the agro-industrial complex VOHA.',
    github: 'https://github.com/Amateo642/Voha',
    demo: 'https://voha.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Betting application template (MVP). Example test for a middle position.',
    github: 'https://github.com/Amateo642/match-tracker',
    demo: 'https://amateo642.github.io/match-tracker/'
  }
]

const Portfolio = () => {
  const { t } = useTranslation();
  const works = t('portfolio.works', { returnObjects: true });
  return (
    <section id='portfolio' className='section'>
      <h5>{t('portfolio.recent')}</h5>
      <h2>{t('portfolio.header')}</h2>

      <div className="container portfolio__container">
        {
          works.map(({title}, index) => {
            return (
              <article key={data[index].id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={data[index].image} alt={data[index].title} />
                </div>
                <h3>
                  {title}
                </h3>
                <div className="portfolio__item-cta">
                  <a href={data[index].github} className='btn' target='_blank'>{t('portfolio.github')}</a>
                  <a href={data[index].demo} className='btn btn-primary' target='_blank'>{t('portfolio.demo')}</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;