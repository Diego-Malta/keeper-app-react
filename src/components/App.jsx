import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'
import savedNotes from '../notes'

function App() {

  const[notes, setNotes] = useState(savedNotes)
  // const [newNotes, setNewNotes] = useState([{ title: "", content: "" }])
  // const [notes, setNotes] = useState([])

  function addNote(note) {
    const { title, content} = note

    //check if title and content are not empty
    if (title && content) setNotes([...notes, note])
  }

  function deleteNote(id){
    setNotes(prevValues => prevValues.filter((value, index) => index !== id))
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.length > 0 && 
        notes.map((note, index) =>
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        )
      }
      <Footer />
    </div>
  );
}

export default App;