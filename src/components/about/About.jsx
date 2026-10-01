import React from 'react'
import './about.css'
import ME from '../../assets/me_picture.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {TbFolderFilled} from 'react-icons/tb'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me hologram'>
          <div className='about__me-image'>
            <img src={ME} alt='Jin Xianwen' loading="lazy" />
            <div className="about__image-glitch"></div>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card hologram'>
              <RiAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>

            <article className='about__card hologram'>
              <FiUsers className='about_icon'/>
              <h5>Companies</h5>
              <small>3</small>
            </article>

            <article className='about__card hologram'>
              <TbFolderFilled className='about_icon'/>
              <h5>Projects</h5>
              <small>3+</small>
            </article>
          </div>
          <p className="about__description">
            Software & Data Engineer with 5+ years of professional experience building reliable, scalable backend and streaming systems.<br/>
            MSc in Computer Engineering from the University of Padua.<br/>
            Currently a Software Engineer at Intesa Sanpaolo, developing secure authentication services on Flink streaming pipelines that serve millions of active users.<br/>
            Previously at Huawei on the CodeArts Pipeline platform and at Technology Reply on CDC-based mainframe-to-cloud migration for PSD2 open banking.<br/>
            Specializes in Java, Spring Boot, Apache Flink, Apache Kafka, IBM CDC, Kubernetes, Oracle SQL, and real-time distributed systems.
          </p>
          <a href='#contact' className='btn btn-primary terminal-prompt'>
            <span className="terminal-prompt__symbol">&gt;</span>
            <span className="terminal-prompt__text">Let's Talk</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About