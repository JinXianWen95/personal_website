import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      <button onClick={() => window.location.hash = '#'} className='footer__logo' aria-label="Back to Home">
        <span className="footer__logo-text">Xianwen</span>
      </button>

      <ul className='permalinks'>
        <li><button onClick={() => window.location.hash = '#'}>Home</button></li>
        <li><button onClick={() => window.location.hash = '#about'}>About</button></li>
        <li><button onClick={() => window.location.hash = '#experience'}>Skills</button></li>
        <li><button onClick={() => window.location.hash = '#services'}>Projects</button></li>
        <li><button onClick={() => window.location.hash = '#portfolio'}>Portfolio</button></li>
        <li><button onClick={() => window.location.hash = '#contact'}>Contact</button></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/profile.php?id=100003271742677" target='_blank' rel='noreferrer' className="social-link" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/xwjin95" target='_blank' rel='noreferrer' className="social-link" aria-label="Instagram">
          <FiInstagram />
        </a>
        <a href='https://linkedin.com/in/xianwen-jin-3060a1154' target='_blank' rel='noreferrer' className="social-link" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>

      <div className='footer__credits'>
        <div className='footer__line'></div>
        <div className='footer__copyright'>
          <small>&copy; {new Date().getFullYear()} Jin Xianwen. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer