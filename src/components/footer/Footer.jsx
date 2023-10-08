import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Xianwen</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/profile.php?id=100003271742677" target='_blank'><FaFacebookF /></a>
        <a href="https://instagram.com/xwjin95?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'><FiInstagram /></a>
        <a href='https://linkedin.com/in/xianwen-jin-3060a1154' target='_blank'><FaLinkedin /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
