import React from 'react'
import "./services.css"
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Eye-pleasing design.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Intuitive Navigation.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Nothing extra, splashy.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Clear understanding of the structure.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Competent integration, without screaming advertisement.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>User-friendly.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Safety. I don't write in constructors, your data will be in my private, working repository.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>I'll pick the perfect domain for you.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Competent deployment. You will not spend a fortune on maintaining the site.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Clean, readable code.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>There is just an idea? Don't worry, I'll create the rest.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>Visualize all your wishes.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>I'll pick a theme if you don't have the full picture ur site.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>If I see that something can be improved, we are always in touch.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>You are always right. I never impose my professional view in conflict situations.</p>
            </li>
            <li>
            <div className='service__list-icon'>< AiOutlineCheck /></div>
              <p>The main thing is your desire. I'll do the rest.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services