import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {checkTokenAndGetUserInfo} from './utils/checkTokenAndGetUserInfo';

function App() {
  const[loggedIn, setLoggedIn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
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
        modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}
        setShowQr={setShowQr}
      />
      <Main loggedIn={loggedIn} setModalIsOpen={setModalIsOpen} showQr={showQr} setShowQr={setShowQr} />
    </div>
  );
}

export default App;
