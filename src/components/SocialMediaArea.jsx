import React from "react";
import { LinkedIn, GitHub } from '@mui/icons-material'

function SocialMediaArea() {
  return (
    <div className='social-media'>
      <a href="https://linkedin.com/in/diego-moreira91">
        <LinkedIn />
      </a>
      <a href="https://github.com/Diego-Malta">
        <GitHub />
      </a>
    </div>
  )
}

export default SocialMediaArea