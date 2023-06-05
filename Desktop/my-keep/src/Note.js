import React from 'react'
import './Note.css'
import DeleteIcon from '@mui/icons-material/Delete';

function Note({ title, content, onDelete, id }) {


    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}><DeleteIcon fontSize='large' /></button>
        </div>
    )
}

export default Note