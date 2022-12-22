import React, { useState } from 'react';
import {db} from './firebase';
import { doc, updateDoc, deleteDoc} from "firebase/firestore";

/* 
writing the update function

- three states: isEditing (true/false, toggles the edit UI), newTitle, newDescription
*/
function Entry(props) {

    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = async (e) => {
        let id = e.target.id;
        const taskDocRef = doc(db, 'entries', id)
        try{
          await deleteDoc(taskDocRef)
        } catch (err) {
          alert(err)
        }
    }

    const handleEdit = async (e) => {
        setIsEditing(!isEditing);
    }
  
    return (
        <div className="entry" key={props.id}>
        {isEditing &&
            <div className="entry-heading">
                <h3>editing</h3>
                <button className="icon-button" id={props.id} onClick={handleEdit}>📝</button>
            </div>
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