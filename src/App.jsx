import React from 'react';
import { useState } from "react";

import './App.css';
import AddEntry from './AddEntry';
import Login from './Login';
import EntryList from './EntryList';

function App() {
  const [displayName, setDisplayName] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [userId, setUserId] = useState('');
  const [showAdd, setShowAdd] = useState(false);

  function updateUserInfo(user) {
    setDisplayName(user.displayName);
    setUserId(user.uid);
  }

  function updateLoginStatus(bool) {
    setLoginStatus(bool);
  }

  return (
    <div className="layout-container">
      <header>
        <h1>thank you notes</h1>
        <Login loginStatus={loginStatus} displayName={displayName} updateUserInfo={updateUserInfo} updateLoginStatus={updateLoginStatus}/>
      </header>
        {/* if in random view, a 'list view' button replaces it (which is the default view)*/}

      <section id="functions">
        <button onClick={() => setShowAdd(!showAdd)}>{showAdd ? "cancel" : "new note"}</button>
        <button>view public notes</button>
      </section>

      <main className="layout-container">
        {loginStatus && showAdd && <AddEntry userId={userId}/> }
        {loginStatus && <EntryList userId={userId}/>}
      </main>

      <footer>
        <span>made with ♥ by <a href="https://mistyb01.github.io/portfolio" target="_blank">misty</a></span>
      </footer>
    </div>
  );
}

export default App;
