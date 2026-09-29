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
    description: 'A futuristic portfolio website built with React, featuring a holographic design system with animated backgrounds, typewriter effects, and an AI-powered career assistant chatbot.',
    stack: ['React', 'CSS', 'AI Chatbot'],
  },
  {
    id: 2,
    image: remytutor,
    title: 'Teaching Platform RemyTutor',
    github: 'https://github.com/JinXianWen95/RemyTutor',
    description: 'A collaborative web-based teaching platform developed during the Master\'s program, enabling students to book tutoring sessions, manage course materials, and track progress.',
    stack: ['Java', 'Spring Boot', 'JavaScript'],
  },
  {
    id: 3,
    image: tsp,
    title: 'TSP Optimization Engine',
    github: 'https://github.com/JinXianWen95/TspCplexSolver',
    description: 'Traveling Salesman Problem solver using IBM ILOG CPLEX Optimization Studio. Implemented Linear Integer Programming models and metaheuristics including 2-opt, Local Branching, and Variable Neighborhood Search.',
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