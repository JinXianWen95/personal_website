import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'

export const Nav = () => {
  const [activeNav, setActiveNav] = React.useState('#')
  const [isExpanded, setIsExpanded] = React.useState(false)

  const navItems = [
    { path: '#', label: 'Home', icon: <BiHomeSmile /> },
    { path: '#about', label: 'About', icon: <BiUser /> },
    { path: '#experience', label: 'Skills', icon: <BiBookBookmark /> },
    { path: '#services', label: 'Projects', icon: <RiServiceLine /> },
    { path: '#contact', label: 'Contact', icon: <TiContacts /> },
  ]

  return (
    <nav className={isExpanded ? 'nav-expanded' : ''}>
      {navItems.map(item => (
        <a
          key={item.path}
          href={item.path}
          onClick={() => {
            setActiveNav(item.path)
            setIsExpanded(false)
          }}
          className={activeNav === item.path ? 'active' : ''}
          title={item.label}
          aria-label={item.label}
        >
          {item.icon}
          <span className="nav__label">{item.label}</span>
        </a>
      ))}
      <button
        className="nav__toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Toggle navigation"
        title="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  )
}

export default Nav