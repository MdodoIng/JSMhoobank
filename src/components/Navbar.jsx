import React, { useState } from 'react'
import { logo, menu, close } from '../assets/index'
import { navLinks } from '../constants/index'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <nav className='
    nav_container
    '>
      <div className='nav_base 
      '>

        <img src={logo} alt="logo" />

        <ul className='nav_links'>
          {navLinks.map((nav, index) => (
            <div key={nav.id}>
              <li className='compact' style={index === navLinks.length - 1 ? { marginRight: '0px' } : { marginRight: '40px' }}>

                <a href={`#${nav.id}`}>{nav.title}</a></li></div>))}</ul>



        <div className='nav_mobile'>

          <button type='button' className='Menu_btn'>
            <img src={!toggle ? menu : close} alt='' onClick={() => setToggle((prev) => !prev)} />
          </button>

          '
          <div className='nav_mobile_container black-gradient' style={!toggle ? { display: 'none' } : { display: "block" }} >

            <ul>



              {navLinks.map((nav, index) => (
                <li key={index} className='lists text-dimWhite '
                style={index === navLinks.length -1 ? {marginBottom: "0"}: {marginBottom:'40px'}}>




                  <a href={`#${nav.title}`}>{nav.title}</a>
                </li>))} </ul> </div> </div>

      </div>
    </nav>
  )
}

export default Navbar