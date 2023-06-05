import React from 'react';
import './NoteContainer.css';
import Note from './Note';

function NoteContainer({ notes, deleteNotes }) {
    return (
        <div className='noteContainer'>
            {
                notes.map((note, index) => (
                    < Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNotes}
                    />
                ))
            }
        </div>
    );
}

export default NoteContainer;
