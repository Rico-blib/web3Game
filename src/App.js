
import { useState } from 'react';
import './App.css';
import Game from './Components/Game';
import Login from './Components/Login';


function App() {
  const [userName, setUserName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (user) => {
    setUserName(user);
    setLoggedIn(true);
  }
  return (
    <div className="App">
      {loggedIn ? (
        <Game userName={userName}/>
      ): (
        <Login onLogin={handleLogin}/>
       )}
    </div>
  );
}

export default App;
