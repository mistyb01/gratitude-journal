import React, { useState } from 'react';
import {db} from './firebase';
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import Form from './Form';

/* 
writing the update function

- three states: isEditing (true/false, toggles the edit UI), newTitle, newDescription
*/
function Entry(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(props.title);
    const [newContent, setNewContent] = useState(props.description);
  
    function handleChange(e) {
      e.target.name === 'title' ? setNewTitle(e.target.value) : setNewContent(e.target.value);
    }

    const handleDelete = async (e) => {
        let id = e.target.id;
        const taskDocRef = doc(db, 'entries', id)
        try{
          await deleteDoc(taskDocRef)
        } catch (err) {
          alert(err)
        }
    }

    function handleCancel() {
        // reset changes
        setNewTitle(props.title);
        setNewContent(props.description);
        
        setIsEditing(!isEditing);
    }

    const handleEdit = async (e) => {
        setIsEditing(!isEditing);
    }
  

    return (
        <div className="entry" key={props.id}>
        {isEditing &&
            <>
            <div className="entry-heading">
                <h3>editing entry</h3>
            </div>
            <Form
                entryTitle={newTitle}
                entryContent={newContent}
                handleChange={handleChange}
                handleSubmit={handleEdit}
                handleCancel={handleCancel}
            />
            </>
        }
        {!isEditing &&
            <>
            <div className="entry-heading">
                <h3>{props.title}</h3>
                <div className="entry-corner">
                    <button className="icon-button" id={props.id} onClick={handleEdit}>📝</button>
                    <button className="icon-button" id={props.id} onClick={handleDelete}>✖</button>
                </div>
            </div>
            <p>{props.description}</p>
            <span className="date">{props.created.toDate().toDateString()}</span>
            </>
        }
    </div>
    );
}

export default Entry;