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

      <section id="functions">
        <button>new note</button>
        <button>random note</button> {/* if in random view, a 'list view' button replaces it (which is the default view)*/}
        <button>view public notes</button>
      </section>

      <main className="layout-container">
        {loginStatus && <AddEntry userId={userId}/> }
        {loginStatus && <EntryList userId={userId}/>}
      </main>

      <footer>
        <span>made with ♥ by <a href="https://mistyb01.github.io/portfolio" target="_blank">misty</a></span>
      </footer>
    </div>
  );
}

export default App;
