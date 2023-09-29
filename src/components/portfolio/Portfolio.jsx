import React from 'react'
import './portfolio.css'
import PORTFOLIO from '../../assets/portfolio.png'


const data = [
  {
    id: 1,
    image: PORTFOLIO,
    title: 'Title1',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 2,
    image: PORTFOLIO,
    title: 'Title2',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  
  {
    id: 3,
    image: PORTFOLIO,
    title: 'Title3',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 4,
    image: PORTFOLIO,
    title: 'Title4',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 5,
    image: PORTFOLIO,
    title: 'Title5',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        
        {
          data.map(({id,image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt='' />
                </div>
              <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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