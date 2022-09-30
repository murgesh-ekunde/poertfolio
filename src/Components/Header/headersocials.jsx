import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


function headersocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/murgesh-ekunde-525b97100/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
        <a href="https://github.com/murgesh-ekunde" target="_blank" rel="noreferrer"> <BsGithub/> </a>
    </div>
  )
}

export default headersocials