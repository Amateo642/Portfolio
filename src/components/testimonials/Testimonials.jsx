import React from 'react'
import "./testimonials.css"
import CLIENT from '../../assets/client1.jpeg'
import CLIENT2 from '../../assets/client2.jpeg'
import CLIENT3 from '../../assets/client3.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: CLIENT,
    name: 'Kim Jisoo',
    review: 'Wow, tnx for this beautiful game-contest. Was happy to participate.'
  },
  {
    avatar: CLIENT2,
    name: 'Sana Minatozaki',
    review: 'Quality work. Thanks for the invitation to take part in the competition.'
  },
  {
    avatar: CLIENT3,
    name: 'Yoo Jimin',
    review: 'Amazing, wonderful, losing my head. I advise everyone. Very competent company. Best value for money'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={ avatar } alt="avatar" />
                </div>
                <h5 className='client__name'>{ name }</h5>
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