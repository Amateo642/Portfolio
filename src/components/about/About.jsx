import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import { FaAward } from 'react-icons/fa'
import { MdOutlineTask } from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

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
              <h5>Experience</h5>
              <small>2+ years practice</small>
            </article>

            <article className='about__card'>
              <MdOutlineTask className='about__icon'/>
              <h5>Projects</h5>
              <small>Many completed of varying complexity</small>
            </article>
          </div>

          <p>
          Graduated from Kalmyk State University with a degree in "Information Technology".
          Having worked in the banking sector, I came to the conclusion that I want to do what I like.
          I have always liked to deal with websites, their design. 
          So I went back to basics and started taking courses to brush up on my student knowledge.
          Over time, my friends and acquaintances began to ask me to make projects for them. 
          Design a landing page, a page with congratulations on the occasion of a birthday, a site for their store, a database of their favorite games, series or actors.
          Each time, seeing the joy and smiles of friends, accepting gratitude, I became more confident in my abilities.
          I decided to monetize my hobby. Why not, if everyone is happy.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About