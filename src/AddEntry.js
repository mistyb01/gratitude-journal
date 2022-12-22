import React, { useState } from 'react';

import {db} from './firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import Form from './Form';

function AddEntry(props) {
  const [entryTitle, setTitle] = useState('');
  const [entryContent, setContent] = useState('');

  function handleChange(e) {
    e.target.name === 'title' ? setTitle(e.target.value) : setContent(e.target.value);
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
          <Form
            entryTitle={entryTitle}
            entryContent={entryContent}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </section>
    )
}

export default AddEntry;