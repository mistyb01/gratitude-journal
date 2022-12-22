import React, { useState, useEffect } from 'react';
import {db} from './firebase';
import {collection, query, orderBy, onSnapshot, where} from "firebase/firestore";
import Entry from './Entry';

function EntryList(props) {
    const [displayedEntries, setDisplayedEntries] = useState([
        // {title: "test", description: "description", date: "june 1, 2022"},
        // {title: "test", description: "description", date: "june 2, 2022"}
    ]); 

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
           {displayedEntries.map((entry) => 
            <Entry
                id={entry.id}
                title={entry.title}
                created={entry.created}
                description={entry.description}
            />
           )} 
           {displayedEntries.length === 0 && <p>no entries yet.</p>}
        </section>
    );
}

export default EntryList;
