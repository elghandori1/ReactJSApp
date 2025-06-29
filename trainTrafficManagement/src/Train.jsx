import React, { useState } from "react";

function Train({ data }) {
  const [trainId, setTrainId] = useState("");
  const [trainsList, setTrainsList] = useState(data); 
  const [trainName, setTrainName] = useState("");
  const [departCity, setDepartCity] = useState("");
  const [finalCity, setFinalCity] = useState("");
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [newCity, setNewCity] = useState('');
  const [error, setError] = useState("");

  function searchTrain() {
    if (!trainId.trim()) {
      setError("Please enter a train ID");
      return;
    }
    const train = trainsList.find((trainItem) => trainItem.id === trainId);
    if (train) {
      setTrainName(train.name);
      setDepartCity(train.villes[0].nameV);
      setFinalCity(train.villes[train.villes.length - 1].nameV);
      setSelectedTrain(train);
      setError("");
    } else {
      setTrainName("");
      setDepartCity("");
      setFinalCity("");
      setSelectedTrain(null);
      setError("Train not found");
    }
  }

  function handleAddCity() {
    if (!trainId.trim()) {
      setError("Please select a train first");
      return;
    }
    if (!newCity.trim()) {
      setError("Please enter name of a new city");
      return;
    }

    const updatedTrains = trainsList.map(train => {
      if (train.id === trainId) {
        return {
          ...train,
          villes: [
            ...train.villes,
            {
              nameV: newCity,
              ordreP: train.villes.length + 1
            }
          ]
        };
      }
      return train;
    });

    setTrainsList(updatedTrains);
    const updatedTrain = updatedTrains.find(train => train.id === trainId);
    setSelectedTrain(updatedTrain);
    setNewCity('');
    setError("");
  }

  function handleRemoveCity(cityName) {
    const updatedTrains = trainsList.map(train => {
      if (train.id === trainId) {
        return {
          ...train,
          villes: train.villes.filter(city => city.nameV !== cityName)
        };
      }
      return train;
    });

    setTrainsList(updatedTrains);
    const updatedTrain = updatedTrains.find(train => train.id === trainId);
    setSelectedTrain(updatedTrain);
    
    if (updatedTrain) {
      setDepartCity(updatedTrain.villes[0]?.nameV || '');
      setFinalCity(updatedTrain.villes[updatedTrain.villes.length - 1]?.nameV || '');
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto',border:'1px solid' }}>
      <h1>Train Traffic Management</h1>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>Train ID:</label>
        <input
          type="text"
          value={trainId}
          onChange={(e) => setTrainId(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button 
          onClick={searchTrain}
          style={{ padding: '5px 10px', cursor: 'pointer' }}
        >
          Search
        </button>
      </div>
      
      {error && <p style={{ color: "red", margin: '10px 0' }}>{error}</p>}
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Train Name:</label>
        <input 
          type="text" 
          value={trainName} 
          readOnly 
          style={{ padding: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Departure City:</label>
        <input 
          type="text" 
          value={departCity} 
          readOnly 
          style={{ padding: '5px' }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Destination City:</label>
        <input 
          type="text" 
          value={finalCity} 
          readOnly 
          style={{ padding: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>New City:</label>
        <input 
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button 
          onClick={handleAddCity}
          style={{ padding: '5px 10px', cursor: 'pointer' }}
        >
          Add City
        </button>
      </div>

      <div>
        <h3>Cities List</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>City Name</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Order</th>
              <th style={{ padding: '8px', border: '1px solid #ddd' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedTrain && selectedTrain.villes.map((city, i) => (
              <tr key={i}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  {city.nameV}
                </td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  {city.ordreP}
                </td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <button
                    style={{ padding: '3px 6px', cursor: 'pointer' }}
                    onClick={() => handleRemoveCity(city.nameV)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Train;