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
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about_icon'/>
              <h5>Companies</h5>
              <small>2</small>
            </article>

            <article className='about__card'>
              <TbFolderFilled className='about_icon'/>
              <h5>Projects</h5>
              <small>4 completed</small>
            </article>
          </div>
          <p>
          Skilled, well-organized and passionated developer graduated with a Master's Degree in Computer Engineering.<br/>
          I am currently working at Huawei as software developer and involved in developing applications based on microservice using Spring Framework.<br/> 
          I also have woking experience on Big Data frameworks such as Flink, Spark and MapReduce. Furthermore I am attracted by different technology 
          fields such as Algorithms, Mathematical Programming and Computer Vision.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About