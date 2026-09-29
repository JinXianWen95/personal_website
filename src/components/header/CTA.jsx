import React from 'react'
import CV from '../../assets/cv_jin_xianwen.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-secondary'>
        <span className='btn-icon' aria-hidden="true">↓</span>
        Download CV
      </a>
      <a href="#contact" className='btn btn-primary'>
        <span className='btn-icon' aria-hidden="true">&gt;</span>
        Let's Talk
      </a>
    </div>
  )
}

export default CTA