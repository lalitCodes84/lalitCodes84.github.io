import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/me-p.png'
import Img3 from "../../assets/img3.png"
import Img4 from "../../assets/img4.png"

const Portfolio = () => {
  return (
 <section id='portfolio'>
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>
   <div className="container portfolio__container">

   <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={Img4} alt="snapchat" />
       </div>
         <h3>Asos Eccomerce Clone</h3>
         <h5 className='h62'>Asos.com<br />

Tech Stack : HTML | CSS | Javascript | Basic Structuring
 </h5>
         <div className="portfolio__item-cta">
           <a href="https://github.com/lalitCodes84/Asos.comClone" className='btn' target='_blank'>Git Hub</a>
         <a href="https://lalitcodes84.github.io/Asos.comClone/"className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
         
     </article>


     <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={Img3} alt="Bluefly_Img" />
       </div>
         <h3>Bluefly Ecommerce</h3>
         <h5 className='h61'>Bluefly is one of the most popular E-commerce website. <br />
         Tech Stack : React.js | CSS | Ntlify | css | node.js
         
         </h5>
         <div className="portfolio__item-cta">
           <a href="https://github.com/lalitCodes84/Blue-Fly-Clone-" className='btn' target='_blank'>Git Hub</a>
         <a href="https://sensational-bombolone-51292b.netlify.app/"className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
         
     </article>

   </div>
 </section>

  )
}

export default Portfolio