import React from 'react'
import SocialMediaArea from './SocialMediaArea'

function Footer () {

  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
      <SocialMediaArea />
    </footer>
  )
}

export default Footer