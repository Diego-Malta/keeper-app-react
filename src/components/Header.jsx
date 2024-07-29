import React from 'react'
import HighlightIcon from '@mui/icons-material/Highlight'
import SocialMediaArea from './SocialMediaArea'

function Header() {
  return (
    <header>
      <h1><HighlightIcon />Keeper</h1>
      <SocialMediaArea />
    </header>
  )
}

export default Header