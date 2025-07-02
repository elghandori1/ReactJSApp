import React, { useState } from "react";
import './App.css';

function CubeDice() {
  const [diceNumber, setDiceNumber] = useState(0); 
  const [isRolling, setIsRolling] = useState(false);
  
  const rollDice = () => {
    setDiceNumber(0)
    setIsRolling(true);

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(randomNum);
      setIsRolling(false);
    }, 2000);
  };

  return (
    <div className="dice-container">
      <h1 className="dice-title">Cube Dice</h1>

      <div className={`dice ${isRolling ? 'rolling' : ''}`}>
        <img
          src={diceNumber === 0 ? "/assets/images/init.PNG"
              : `/assets/images/face${diceNumber}.PNG`
          }
          alt={diceNumber === 0 ? "Initial Dice Face" : `Dice showing ${diceNumber}`}
          className="dice-image"
        />
      </div>

      <p className="dice-value">
        Number: <strong style={{"color":"red"}}>{diceNumber || '-'}</strong>
      </p>

      <div className="dice-button-container">
        <button
          className="dice-button"
          onClick={rollDice}
          disabled={isRolling}
        >
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    </div>
  );
}

export default CubeDice;