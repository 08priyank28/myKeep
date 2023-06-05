import React, { useState } from 'react'
import './CreateNote.css'
import AddIcon from '@mui/icons-material/Add';

function CreateNote({ onAdd }) {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [expanded, setExpand] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    function submitButton(event) {
        onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        setExpand(false);
        event.preventDefault();
    }
    function handleExpand() {
        setExpand(true);
    }
    return (
        <div className='createNote'>
            <form>
                {
                    expanded && (
                        <input name='title' value={note.title} type="text" placeholder='Title' onChange={handleChange} />
                    )
                }
                <p>
                    <textarea
                        className='scroll'
                        value={note.content}
                        name="content"
                        onClick={handleExpand}
                        placeholder='Take a note...'
                        onChange={handleChange}
                        rows={expanded ? 3 : 1}
                    ></textarea>
                </p>
                {expanded ? <button onClick={submitButton}><AddIcon fontSize='large' /></button> : null}
            </form>
        </div>
    )
}

export default CreateNote