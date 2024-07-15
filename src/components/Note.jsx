// import React, { useState } from 'react'
import React from 'react'

function Note(props) {

  // const[isDeleted, setIsDeleted] = useState(false)
  
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>DELETE</button>
      {/* <button onClickDelete>DELETE</button> */}
    </div>
  )
}

export default Note