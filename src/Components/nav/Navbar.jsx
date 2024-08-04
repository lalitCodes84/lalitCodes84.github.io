import React from 'react'
import "./nav.css";
const Navbar = () => {
  return (
  <div className='flex' style={{height:"80px",color:"white",width:"100%"}}>
<h2 style={{marginLeft:"2vw",width:"60%"}}>Lalit Codes</h2>
<ul className='flex1' style={{marginRight:"2vw", gap:"2rem",width:"40%"}}>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
  </ul>
  </div>
  )
}

export default Navbar