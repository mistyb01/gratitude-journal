import React, { useState } from 'react';

function Form(props) { 
    return (
        <form onSubmit={props.handleSubmit}>
              <div className="form-fields">
                <label htmlFor="title">title</label>
                <input name="title" type="text" value={props.entryTitle} 
                onChange={props.handleChange}/>
              </div>
              <div className="form-fields">
                <label htmlFor="description">description</label>
                <textarea name="description" rows="3" value={props.entryContent} 
                onChange={props.handleChange}/>
              </div>
              <button type="submit">submit</button>
            </form>
    );
}

export default Form;