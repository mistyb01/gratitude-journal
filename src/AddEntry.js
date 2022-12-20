import React from 'react';

import {db} from './firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore';

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    await addDoc(collection(db, 'entries'), {
      title: 'entry title',
      description: 'fluffy pancakes',
      created: Timestamp.now()
    })
  } catch(err) {
    alert(err);
  }
}

function AddEntry() {
    return (
        <div>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default AddEntry;