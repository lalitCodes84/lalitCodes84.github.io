import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Lalit Sharma.jpg'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
   <header>
  
       <div className="container header__container">
           <h3>Hello I'm</h3>
           <h1>Lalit Sharma</h1>
           <h4 className="text-light">Full Stack Web Developer</h4>
           <CTA/>
           <HeaderSocials/>
           <div className="me">
             <img src={ME} alt="me" />
           </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
   </header>
  )
}

export default Header