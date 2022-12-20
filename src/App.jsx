import React from 'react';
import { useState } from "react";

import './App.css';
import AddEntry from './AddEntry';
import Login from './Login';

function App() {
  const [displayName, setDisplayName] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  function updateUserInfo(user) {
    setDisplayName(user.displayName);
  }

  function updateLoginStatus(bool) {
    setLoginStatus(bool);
  }

  return (
    <main>
    <Login loginStatus={loginStatus} displayName={displayName} updateUserInfo={updateUserInfo} updateLoginStatus={updateLoginStatus}/>
    <AddEntry/>
    </main>
  );
}

export default App;
