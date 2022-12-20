import React from "react";
import { useState } from "react";
import { auth } from './firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

function handleSignIn() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function handleSignOut() {
    auth.signOut();
}

function Login() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [displayName, setDisplayName] = useState('');

    auth.onAuthStateChanged(user => {
        if (user) {
            setLoginStatus(true);
            setDisplayName(user.displayName);
        } else {
            setLoginStatus(false);
    
        }
    });

    return (
        <>
        <section id="login-buttons">

            {loginStatus ? 
                <>
                <p>Welcome, {displayName}</p>
                <button id="signOutBtn" onClick={handleSignOut}>Sign Out</button>
                </> :
                <button id="signInBtn" onClick={handleSignIn}>Sign in with Google</button>
        }

        </section>
        </>
    )
}

export default Login;