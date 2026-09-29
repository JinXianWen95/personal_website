
import React from 'react'

import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials-glow">
      <a
        href="https://linkedin.com/in/xianwen-jin-3060a1154"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
        <span className="social-tooltip">LinkedIn</span>
      </a>

      <a
        href="https://github.com/JinXianWen95"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub"
      >
        <BsGithub />
        <span className="social-tooltip">GitHub</span>
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Instagram"
      >
        <BsInstagram />
        <span className="social-tooltip">Instagram</span>
      </a>
    </div>
  )
}

export default HeaderSocials
