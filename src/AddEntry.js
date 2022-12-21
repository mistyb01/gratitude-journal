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
        <section className="add-entry-form">
          <h3>add an entry</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-fields">
                <label htmlFor="title">title</label>
                <input name="title" type="text" value={entryTitle} onChange={handleChange}/>
              </div>
              <div className="form-fields">
                <label htmlFor="description">description</label>
                <textarea name="description" rows="3" value={entryContent} onChange={handleChange}/>
              </div>
              <button type="submit">submit</button>
            </form>
        </section>
    )
}

export default AddEntry;