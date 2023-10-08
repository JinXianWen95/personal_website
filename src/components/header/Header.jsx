import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me_1.jpg'
import HeaderSocials from './HeaderSocials'
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jin Xianwen</h1>
        <h5 className="text-light">Software and Data Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header