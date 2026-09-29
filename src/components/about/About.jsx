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
            Software & Data Engineer with 5+ years of professional experience.<br/>
            Master's Degree in Computer Engineering from University of Padua.<br/>
            Currently Software Engineer at Intesa Sanpaolo on secure authentication systems and Flink streaming pipelines.<br/>
            Previous: Software Engineer at Huawei (CodeArts Pipeline) and Technical Consultant at Technology Reply (mainframe-to-cloud migration).<br/>
            Expertise in Java, Spring Boot, Apache Flink, Apache Kafka, IBM CDC, Kubernetes, Oracle SQL, and real-time distributed systems.
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