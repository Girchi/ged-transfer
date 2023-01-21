import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { checkTokenAndGetUserInfo } from './utils/checkTokenAndGetUserInfo';
import { getAuthClient } from "./utils/auth";
const auth = getAuthClient();

function App() {
  const[loggedIn, setLoggedIn] = useState(false);
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    auth.eventListener();
    checkTokenAndGetUserInfo()
      .then(result => {
        setLoggedIn(result);
      })
      .catch(err => {console.log(err)});
  }, [])

  return (
    <div className="App min-w-[420px]">
      <Header 
        loggedIn={loggedIn} setLoggedIn={setLoggedIn}
        setShowQr={setShowQr}
      />
      <Main loggedIn={loggedIn} setLoggedIn={setLoggedIn} showQr={showQr} setShowQr={setShowQr} />
    </div>
  );
}

export default App;
