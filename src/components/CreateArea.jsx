import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';


function CreateArea(props) {

  const [note, setNote] = useState({ title: "", content: "" })
  const [isExpanded, setExpanded] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setNote(prevNote => {
      return { ...prevNote, [name]: value }
    })
  }

  function expand(){
    setExpanded(!isExpanded)
  }

  function submitNote(event) {
    props.onAdd(note)
    setNote({ title: "", content: "" })
    event.preventDefault()
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input type="text" name="title" placeholder="Type a title..." value={note.title} onChange={handleChange} />}
        <textarea name="content" placeholder="Take a note here..." row={isExpanded ? 3 : 1} value={note.content} onChange={handleChange} onClick={expand}/>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea