import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';


function CreateArea(props) {

  const [note, setNote] = useState({ title: "", content: "" })
  const [isExpanded, setIsExpanded] = useState(false)

  function handleChange(event) {

    const { name, value } = event.target

    setNote(prevNote => {
      return { ...prevNote, [name]: value }
    })
  }

  function submitNote(event) {
    props.onAdd(note)
    setNote({ title: "", content: "" })
    event.preventDefault()
  }

  return (
    <div>
      <form className="create-note" onSubmit={e => e.preventDefault()}>
        <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Content" row="3" value={note.content} onChange={handleChange} />
        <Zoom in={true}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea