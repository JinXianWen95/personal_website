import React from 'react'
import './portfolio.css'
import PORTFOLIO from '../../assets/portfolio.png'
import websiteIcon from '../../assets/websiteIcon.jpg'
import remytutor from '../../assets/remytutor.png'
import tsp from '../../assets/TSPgrasp.png'


const data = [
  {
    id: 1,
    image: websiteIcon,
    title: 'Personal Website',
    github: 'https://github.com/JinXianWen95/personal_website'
  },

  {
    id: 2,
    image: remytutor,
    title: 'Teaching Platform RemyTutor',
    github: 'https://github.com/JinXianWen95/RemyTutor'
  },
  
  {
    id: 3,
    image: tsp,
    title: 'TSP Cplex Solver',
    github: 'https://github.com/JinXianWen95/TSP_CPLEX_SOLVER'
  },
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        
        {
          data.map(({id,image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt='' />
                </div>
              <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio