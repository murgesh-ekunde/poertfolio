import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookOpen} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMessageAdd} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
        <a href='#' className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/>  </a>
        <a href='#about' onClick={() => setActiveNav('#about')} className= {activeNav ==='#about' ? 'active' : ''}><BiUserCircle/>  </a>
        <a href='#expereince' onClick={() => setActiveNav('#experience')} className= {activeNav ==='#experience' ? 'active' : ''}><BiBookOpen/> </a>
        <a href='#projects' onClick={() => setActiveNav('#projects')} className= {activeNav ==='#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/>  </a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className= {activeNav ==='#contact' ? 'active' : ''}><BiMessageAdd/> </a>
    </nav>
  )
}

export default Nav