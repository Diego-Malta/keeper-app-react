import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditNoteIcon from '@mui/icons-material/EditNote';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
      {/* <button onClick={() => { props.onEdit(props.id) }}><EditNoteIcon /></ button> */}
      <button><EditNoteIcon /></ button>
    </div>
  )
}

export default Note