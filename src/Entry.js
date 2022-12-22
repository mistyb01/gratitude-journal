import React from 'react';

function Entry(props) {
    return (
        <div className="entry" key={props.id}>
            <div className="entry-heading">
                <h3>{props.title}</h3>
                    <span className="date">{props.created.toDate().toDateString()}</span>
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default Entry;