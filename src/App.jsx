
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { useState } from 'react'

firebase.initializeApp({
  apiKey: "AIzaSyC8HyKutUGAK7f6RPsb839_Bqt2YuennaY",
  authDomain: "transportationalchat.firebaseapp.com",
  projectId: "transportationalchat",
  storageBucket: "transportationalchat.appspot.com",
  messagingSenderId: "347473593500",
  appId: "1:347473593500:web:a4f4bd7ba501029f8a5959",
  measurementId: "G-04V9PVL82N"
})

const auth = firebase.auth();

export default function App() {

  const [user, setUser] = useState(auth.currentUser)

  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account"
    })

    auth.signInWithPopup(provider);
  }
  return (
    <div>
      {user ? (
        <button onClick={() => auth.signOut}>Sign Out</button>
              ) : (
      <button onClick={signInWithGoogle}>Sign In</button>)}
    </div>
    )   
}
