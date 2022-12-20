import React, { useState, useEffect } from 'react';
import {db} from './firebase';
import {collection, query, orderBy, onSnapshot, where} from "firebase/firestore"
import { auth } from './firebase';


function EntryList(props) {
    const [displayedEntries, setDisplayedEntries] = useState([]); 

    useEffect(() => {
        const q = query(collection(db, 'entries'), 
            where('uid', '==', props.userId));
        onSnapshot(q, (querySnapshot) => {
            setDisplayedEntries(querySnapshot.docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                created: doc.data().created
            })))
        })
    })

    return (
        <section id="entry-list">
            <h2>your entries</h2>
           {displayedEntries.map((entry) => 
            <div className="entry" key={entry.id}>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <span className="date"></span>
            </div>
           )} 
           {displayedEntries.length === 0 && <p>no entries yet.</p>}
        </section>
    );
}

export default EntryList;
