import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [userName, setuserName] = useState("");
  const handleLogin = () => {
    if (userName.trim() !== "") {
      onLogin(userName);
    }
  };
  return (
    <div className="game-container">
      <h2>Guessing Game</h2>
      <div className="input">
        <input
          type="text"
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>

      <button onClick={handleLogin} className="button">
        Start
      </button>
    </div>
  );
};

export default Login;
