import React, { useState } from "react";

const Game = ({ userName }) => {
  const [secreteNumber, setsecreteNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);

    if (!isNaN(userGuess)) {
      if (userGuess === secreteNumber) {
        setMessage(
          `Congratulations, ${userName}! You guessed the correct number`
        );
      } else if (userGuess < secreteNumber) {
        setMessage("Try a higher number.");
      } else {
        setMessage("Try a lower number");
      }
      setGuess("");
    }
  };
  return (
    <div className="game-container">
      <h2>Welcome, {userName}!</h2>
      <p>Guess the secret number (between 1 and 100):</p>
      <div className="input">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
      </div>

      <button onClick={handleGuess} className="button">
        Submit Guess
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Game;
