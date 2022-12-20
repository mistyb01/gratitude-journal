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
        <h1>memory box</h1>
        <Login loginStatus={loginStatus} displayName={displayName} updateUserInfo={updateUserInfo} updateLoginStatus={updateLoginStatus}/>
      </header>

      <main className="layout-container">
        {loginStatus && <AddEntry userId={userId}/> }
        {loginStatus && <EntryList userId={userId}/>}
      </main>
    </div>
  );
}

export default App;
