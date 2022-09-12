import { useState } from 'react';
import './App.css';
import firebase from './Components/firebase';

function App() {
  const auth = firebase.auth();

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [passwprd, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      console.log(email + ' ' + passwprd);
      setLoading(true);
      let res = await auth.signInWithEmailAndPassword(email, passwprd);
      console.log('🚀 || file: App.js || line 19 || submitHandler || res', res);
      setUser(res.user);
      console.log('🚀 || file: App.js || line 21 || handleSignIn || res', res);
      setLoading(false);
    } catch (error) {
      setError('Failed' + error.message);
      console.log(error);
      console.log(email + ' ' + passwprd);
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      let res = await auth.signOut();
      console.log('🚀 || file: App.js || line 35 || handleSignOut || res', res);
      setUser(null);
      setLoading(false);
    } catch {
      setError('Failed' + error.message);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : user === null ? (
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label htmlFor="pass">
            Password:
            <input
              type="password"
              name="pass"
              id="pass"
              value={passwprd}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleSignIn}>Log In</button>
          {error ? <h1>{error}</h1> : <></>}
        </div>
      ) : (
        <>
          <h2>{user.uid} is Signed in</h2>
          <button onClick={handleSignOut}>Log Out</button>
        </>
      )}
    </>
  );
}

export default App;
