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
    { loginStatus && 
    <>
      <header>
        <h1>thank you notes</h1>
        <p>logged in as {displayName}</p>
      </header>

      <section className="menu">
        <button onClick={() => setShowAdd(!showAdd)}>{showAdd ? "cancel" : "new note"}</button>
        <Login loginStatus={loginStatus} displayName={displayName} updateUserInfo={updateUserInfo} updateLoginStatus={updateLoginStatus}/>
      </section>

      <main className="layout-container">
        { showAdd && <AddEntry userId={userId}/> }
        <EntryList userId={userId}/>
      </main>
    </>
    }
    { !loginStatus &&
    <>
    <header>
        <h1>thank you notes</h1>
      </header>

      <section className="menu">
        <Login loginStatus={loginStatus} displayName={displayName} updateUserInfo={updateUserInfo} updateLoginStatus={updateLoginStatus}/>
      </section>

      <main className="layout-container">
      </main>
    </>
    } 
      <footer>
        <span>made with ♥ by <a href="https://mistyb01.github.io/portfolio" target="_blank">misty</a></span>
      </footer>
    </div>
  );
}

export default App;
