import React from 'react'
import './about.css'

import ME from '../../assets/Lalit-a.png'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
       <div className="about__me-image">
         <img src={ME} alt="About Image" />
       </div>
        </div>
        <div className="about__content">
          <p>Javascript is my native language 😌<br /> <br />
I am learning MERN Stack, Data Structure, Algorithms, and soft skills at Masai School. I have a passion for Web3. To grow my skills I focus on solidity Development and Functional programming.
I joined Masai School and started my journey in the Tech-World. <br /> <br />
Apart, from coding, I love Travelling and Interacting with new people.</p>
        </div>
      </div>
    </section>
  )
}

export default About