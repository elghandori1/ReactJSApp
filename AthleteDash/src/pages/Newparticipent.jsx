import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";

function Newparticipent({addParticipant}) {
    const { id, idCourse } = useParams();
    const [newP, setNewP] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

  const backDashoard = () => {
    navigate("/");
  };

  function HandleNew(){
     if (!newP.trim()) {
      setError("Le nom ne peut pas être vide");
      return;
    }

    const newParticipant={
        id:id,
        nom: newP.trim(),
      idCourse: idCourse
    }
    if (addParticipant) {
        addParticipant(newParticipant);
      }
    setError("");
    navigate("/");
  }

  return (
    <div className="form-container">
      <h1>Nouveau participant</h1>

      <div className="form-group">
        <label>ID participant</label>
        <input type="text" value={id || ""} readOnly />
      </div>

      <div className="form-group">
        <label>Nom</label>
        <input type="text" placeholder="Entrez le nom" value={newP} onChange={(e)=>setNewP(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>ID course</label>
        <input type="text" value={idCourse || ""} readOnly />
      </div>

      <div className="button-group">
        <button type="button" onClick={backDashoard}  className="cancel-btn">Cancel</button>
        <button type="submit" onClick={HandleNew} className="ok-btn">OK</button>
      </div>
      <div style={{color:"red",margin:"20px 0"}}>
        {error && error}
      </div>
  
    </div>
  );
}

export default Newparticipent;