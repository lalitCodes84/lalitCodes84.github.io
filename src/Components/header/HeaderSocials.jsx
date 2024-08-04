import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgMail} from 'react-icons/cg'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/lalit-sharma-813b4a257/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/lalitCodes84" target="_blank"><FaGithub/></a>

        <a href="mailto:vickysharma71za@gmail.com" target="_blank"><CgMail/></a>

    </div>
  )
}

export default HeaderSocials