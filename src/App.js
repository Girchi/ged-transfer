import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {checkTokenAndGetUserInfo} from './utils/checkTokenAndGetUserInfo';

function App() {
  const[loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkTokenAndGetUserInfo()
      .then(result => {
        setLoggedIn(result);
      })
      .catch(err => {console.log(err)});
  }, [])

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Main />
    </div>
  );
}

export default App;
