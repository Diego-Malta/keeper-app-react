import React, { useState } from 'react'
import { Delete, EditNote, ExpandMore, ExpandLess } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function Note(props) {

  const [isExpanded, setExpanded] = useState(false)

  function handleClick(event) {
    // console.log(event.target)
    props.onDelete(props.id)
  }

  function expandContent() {
    setExpanded(!isExpanded)
  }

  function ContentArea(){
    return (
      <div>
        <p>{props.content}</p>
        <IconButton aria-label="delete" onClick={handleClick}><Delete /></IconButton>
        {/* <IconButton onClick={() => { props.onEdit(props.id) }}><EditNoteIcon /></ IconButton> */}
        {/* Edit button still to have function ↓*/}
        <IconButton><EditNote /></ IconButton>
      </div>
    )
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <IconButton onClick={expandContent}>{isExpanded ? <ExpandLess /> : <ExpandMore />}</IconButton>
      {isExpanded && <ContentArea />}
    </div>
  )
}

export default Note