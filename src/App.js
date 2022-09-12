import { useState } from 'react';
import './App.css';
import firebase from './Components/firebase';

function App() {

  const auth = firebase.auth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwprd, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  return (
    <>
      <label htmlFor="email">
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="pass">
        <input type="password" name="pass" id="pass" />
      </label>
    </>
  );
}

export default App;
