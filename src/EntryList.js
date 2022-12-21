import React, { useState, useEffect } from 'react';
import {db} from './firebase';
import {collection, query, orderBy, onSnapshot, where} from "firebase/firestore";

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
            <div className="entry" key={entry.id}>
                <div className="entry-heading">
                    <h3>{entry.title}</h3>
                    <span className="date">{entry.created.toDate().toDateString()}</span>
                </div>
                <p>{entry.description}</p>
            </div>
           )} 
           {displayedEntries.length === 0 && <p>no entries yet.</p>}
        </section>
    );
}

export default EntryList;
