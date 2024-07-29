import React, { useState } from 'react'
import { Delete, EditNote, ExpandMore, ExpandLess } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function Note({id, title, content, onDelete}) {

  const [isExpanded, setExpanded] = useState(false)

  function handleClick(e) {
    // console.log(e.target)
    onDelete(id)
  }

  function expandContent() {
    setExpanded(!isExpanded)
  }

  function ContentArea(){
    return (
      <div>
        <p>{content}</p>
        <IconButton aria-label="delete" onClick={handleClick}><Delete /></IconButton>
        {/* <IconButton onClick={() => { onEdit(id) }}><EditNoteIcon /></ IconButton> */}
        {/* Edit button still to have function ↓*/}
        <IconButton><EditNote /></ IconButton>
      </div>
    )
  }

  return (
    <div className='note'>
      <h1>{title}</h1>
      <IconButton onClick={expandContent}>{isExpanded ? <ExpandLess /> : <ExpandMore />}</IconButton>
      {isExpanded && <ContentArea />}
    </div>
  )
}

export default Note