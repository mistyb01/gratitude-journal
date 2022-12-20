import React, { useState } from 'react';

import {db} from './firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore';



function AddEntry(props) {
  const [entryTitle, setTitle] = useState('');
  const [entryContent, setContent] = useState('');

  function handleChange(e) {
    e.target.id == 'title' ? setTitle(e.target.value) : setContent(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'entries'), {
        title: entryTitle,
        description: entryContent,
        created: Timestamp.now(),
        uid: props.userId
      });
      setTitle('');
      setContent('');
    } catch(err) {
      alert(err);
    }
    
  }

    return (
        <div>
          <h3>add new entry</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">title</label>
                <input id="title" type="text" value={entryTitle} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="description">description</label>
                <input id="description" type="text" value={entryContent} onChange={handleChange}/>
              </div>
              <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddEntry;