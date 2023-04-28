import React from 'react';
import "./testimonials.css";
import CLIENT from '../../assets/client1.jpeg';
import CLIENT2 from '../../assets/client2.jpg';
import CLIENT3 from '../../assets/client3.jpg';
import { useTranslation } from 'react-i18next';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    CLIENT,
    CLIENT2,
    CLIENT3,
]

const Testimonials = () => {
  const { t } = useTranslation();
  const clients = t('testimonials.clients', { returnObjects: true });
  return (
    <section id='testimonials'>
      <h5>{t('testimonials.review')}</h5>
      <h2>{t('testimonials.header')}</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          clients.map(({name, work, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={ data[index] } alt="avatar" />
                </div>
                <h5 className='client__name'>{ name }</h5>
                <p className='client__work'> { work }</p>
                <small className='client__review'>
                  { review }
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials