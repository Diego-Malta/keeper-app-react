import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'
// import notes from '../notes'

function App() {

  // const[newNotes, setNewNotes] = useState(notes)
  // const [newNotes, setNewNotes] = useState([{ title: "", content: "" }])
  const [newNotes, setNewNotes] = useState([])

  function addNote(note) {
    const { title, content} = note

    //check if title and content are not empty
    if (title && content) setNewNotes([...newNotes, note])
  }

  function deleteNote(id){
    // console.log("Your note will be deleted!")
    // console.log("The id is: " + id)

    setNewNotes(prevValues => prevValues.filter((value, index) => index !== id))
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {newNotes.length > 0 && 
        newNotes.map((note, index) =>
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