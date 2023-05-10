import React from 'react'
import Logo from '../img/bl.png'

const Footer = () => {
  return (
    <footer id='Footer'>
      <img src={Logo} alt='' />
      <span>
        Made by Omansh Arora {new Date().getFullYear()}
        <a href='https://omansharora.netlify.app/'>
          https://omansharora.netlify.app/
        </a>
      </span>
    </footer>
  )
}

export default Footer
