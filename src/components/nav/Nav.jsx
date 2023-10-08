import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'
import {useState} from 'react'
import { NavHashLink } from 'react-router-hash-link';

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
//     <nav>
//       <NavHashLink
//         className="navHash"
//         to="#"
//         activeClassName="active"><BiHomeSmile />
//       </NavHashLink>
//       <NavHashLink
//         to="#about"
//         activeClassName="active"><BiUser />
//       </NavHashLink>
//       <NavHashLink
//         to="#experience"
//         activeClassName="active"><BiBookBookmark />
//       </NavHashLink>
//       <NavHashLink
//         to="#services"
//         activeClassName="active"><RiServiceLine />
//       </NavHashLink>
//       <NavHashLink
//         to="#contact"
//         activeClassName="active"><TiContacts />
//       </NavHashLink>
// </nav>
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeSmile /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts /></a>
    </nav>
  )
}

export default Nav
