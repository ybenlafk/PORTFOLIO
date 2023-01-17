import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import  { motion } from 'framer-motion'

const Navbar = () => {
  const [toggel, setToggel] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item)=> (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
      <HiMenuAlt4 onClick={()=> setToggel(true)}/>
      {toggel && (
        <motion.div 
        whileInView={{x : [300, 0]}}
        transition={{duration : 0.85, ease : 'easeInOut'}}
        >
          <HiX onClick={()=> setToggel(false)}/>
          <ul>
          {['home', 'about', 'work', 'skills', 'contact'].map((item)=> (
            <li key={item}>
              <a href={`#${item}`} onClick={()=> setToggel(false)}>{item}</a>
            </li>
          ))}
          </ul>
        </motion.div>
      )}
      </div>
    </nav>
  )
}

export default Navbar
