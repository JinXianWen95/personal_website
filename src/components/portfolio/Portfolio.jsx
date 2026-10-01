import React from 'react'
import './portfolio.css'
import websiteIcon from '../../assets/websiteIcon.jpg'
import remytutor from '../../assets/remytutor.png'
import tsp from '../../assets/TSPgrasp.png'

const data = [
  {
    id: 1,
    image: websiteIcon,
    title: 'Personal Website',
    github: 'https://github.com/JinXianWen95/personal_website',
    description: 'Full React portfolio with a custom holographic design system, real-time AI career assistant via OpenRouter API, and an EmailJS contact form. Demonstrates modern frontend architecture, component design, and third-party API integration.',
    stack: ['React', 'CSS3', 'OpenRouter API', 'EmailJS'],
  },
  {
    id: 2,
    image: remytutor,
    title: 'Teaching Platform RemyTutor',
    github: 'https://github.com/JinXianWen95/RemyTutor',
    description: 'Collaborative teaching platform for booking tutoring sessions, managing course materials, and tracking student progress. Built with Java Spring Boot backend and JavaScript frontend during Master\'s program.',
    stack: ['Java', 'Spring Boot', 'JavaScript'],
  },
  {
    id: 3,
    image: tsp,
    title: 'TSP Optimization Engine',
    github: 'https://github.com/JinXianWen95/TspCplexSolver',
    description: 'Traveling Salesman Problem solver built with IBM ILOG CPLEX Optimization Studio. Implemented exact Linear Integer Programming models alongside metaheuristics — 2-opt, Local Branching, and Variable Neighborhood Search — to compare exact and heuristic solution quality at scale.',
    stack: ['C', 'CPLEX', 'Algorithms'],
  },
]

export const Portfolio = () => {
  const [activeProject, setActiveProject] = React.useState(null)

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, description, stack }) => (
          <article
            key={id}
            className={`portfolio__item hologram ${activeProject === id ? 'active' : ''}`}
            onMouseEnter={() => setActiveProject(id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className='portfolio__item-image'>
              <img src={image} alt={`${title} project`} loading="lazy" />
              <div className='portfolio__item-overlay'>
                <div className='portfolio__item-tags'>
                  {stack.map((tag) => (
                    <span key={tag} className='portfolio__item-tag'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <h3>{title}</h3>
            <p className='portfolio__item-description'>{description}</p>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn btn-primary' target='_blank' rel='noreferrer'>
                <span>View on GitHub</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio