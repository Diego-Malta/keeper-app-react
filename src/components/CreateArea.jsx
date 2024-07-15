import React, { useState } from 'react'

function CreateArea(props) {

  const [noteBox, setNoteBox] = useState({ title: "", content: "" })

  function handleChange(event) {

    const { name, value } = event.target

    setNoteBox(prevValues => {
      return { ...prevValues, [name]: value }
    })
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" name="title" placeholder="Title" value={noteBox.title} onChange={handleChange} />
        <textarea name="content" placeholder="Content" row="3" value={noteBox.content} onChange={handleChange} />
        <button onClick={() => {
          props.onAdd(noteBox)
          setNoteBox({ title: "", content: "" })
        }}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea