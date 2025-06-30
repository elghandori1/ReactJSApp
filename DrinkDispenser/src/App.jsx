import React, { useState } from "react";
import dispensers from './data';

function App() {
  const [index, setIndex] = useState(0);
  const current = dispensers[index];
  const [dispenserList, setDispenserList] = useState(dispensers);

  const currentDispenser = dispenserList[index];

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < dispenserList.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleBuy = (drinkIndex) => {
    const updatedDispenserList = [...dispenserList];
    const current = updatedDispenserList[index];

    if (current.nombreVerre > 0 && current.boissons[drinkIndex].qte > 0) {
      current.nombreVerre=current.nombreVerre-1,
      current.boissons[drinkIndex] = {
        ...current.boissons[drinkIndex],
        qte: current.boissons[drinkIndex].qte - 1,
      };
      setDispenserList(updatedDispenserList);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", border: "1px solid #ccc" }}>
      <h1>Drink Dispenser</h1>

      <div style={rowStyle}>
        <label>ID:</label>
        <input type="text" value={currentDispenser.id} readOnly style={inputStyle} />
        <button onClick={handlePrevious} disabled={index === 0} style={btnStyle}>
         {"|<"}
        </button>
        <button onClick={handleNext} disabled={index === dispenserList.length - 1} style={btnStyle}>
         {">|"}
        </button>
      </div>

      <div style={rowStyle}>
        <label>Marque:</label>
        <input type="text" value={currentDispenser.marque} readOnly style={inputStyle} />
      </div>

      <div style={rowStyle}>
        <label>Nombre de verres:</label>
        <input type="text" value={currentDispenser.nombreVerre} readOnly style={{...inputStyle,color:(current.nombreVerre<=0 ?'red':'')}} />
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={thStyle}>Boisson</th>
            <th style={thStyle}>Prix</th>
            <th style={thStyle}>qte</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentDispenser.boissons.map((boisson, i) => (
            <tr key={i}>
              <td style={tdStyle}>{boisson.nom}</td>
              <td style={tdStyle}>{boisson.prix} €</td>
              <td style={tdStyle}>{boisson.qte}</td>
              <td style={tdStyle}>
                <button onClick={() => handleBuy(i)} disabled={boisson.qte <= 0 || current.nombreVerre===0} style={btnStyle}>
                  {boisson.qte <= 0 ? "Sold Out" : "Buy"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const rowStyle = { marginBottom: "10px" };
const inputStyle = { marginLeft: "10px", padding: "5px", width: "200px"};
const thStyle = { border: "1px solid #ccc", padding: "8px", backgroundColor: "#f0f0f0" };
const tdStyle = { border: "1px solid #ccc", padding: "6px", textAlign: "center" };
const btnStyle = { marginLeft: "5px", padding: "4px 8px" };

export default App;