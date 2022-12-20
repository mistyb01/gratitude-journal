import React from "react";
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

function Login(props) {
    auth.onAuthStateChanged(user => {
        if (user) {
            props.updateLoginStatus(true);
            props.updateUserInfo(user);
        } else {
            props.updateLoginStatus(false);
        }
    });

    return (
        <>
        <section className="login-buttons">

            {props.loginStatus ? 
                <>
                <p>logged in as {props.displayName}</p>
                <button id="signOutBtn" onClick={() => auth.signOut()}>Sign Out</button>
                </> :
                <button id="signInBtn" onClick={handleSignIn}>Sign in with Google</button>
            }

        </section>
        </>
    )
}

export default Login;