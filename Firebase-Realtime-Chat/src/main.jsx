import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRfFDIdr1CXJ3DSzRWO_KW3B_FJufkl0I",
  authDomain: "chat-react-6d501.firebaseapp.com",
  projectId: "chat-react-6d501",
  storageBucket: "chat-react-6d501.appspot.com",
  messagingSenderId: "231495570234",
  appId: "1:231495570234:web:5eac00d0f22ac32dba3603",
  measurementId: "G-4QX0SC89G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Context = createContext(null);

const auth = getAuth(app);
const firestore = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    auth,
    firestore
  }}>
    <App />
  </Context.Provider> 
)
