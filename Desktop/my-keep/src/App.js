import React, { useState } from 'react';
import Header from './Header';
import './App.css'
import CreateNote from './CreateNote';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NoteContainer from './NoteContainer';
function App() {

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  function addNote(newNote) {
    if (newNote.title !== "" && newNote.content !== "") {

      setNotes((prevValue) => {
        return [newNote, ...prevValue];
      });
      // console.log(newNote);
    }
    else {
      alert("Please fill title and content field : 😊")
    }

  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <CreateNote onAdd={addNote} />
      {
        notes.length === 0 && (
          <div className="empty">
            <LightbulbIcon className='icon' sx={{ fontSize: 200 }} />
            <div className="empty__text">
              <h1>Notes you add appear here</h1>
            </div>
          </div>
        )
      }
      <NoteContainer notes={notes.filter(note => ((note.title).toLowerCase()).includes(search.toLowerCase()))} deleteNotes={deleteNotes} />
    </div >
  );
}

export default App;
