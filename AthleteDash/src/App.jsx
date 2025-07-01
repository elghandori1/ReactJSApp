import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Newparticipent from "./pages/Newparticipent";
import { courses, participants } from "./data";
function App() {
  const [participantList, setParticipantList] = useState(participants);
  const addParticipant = (newParticipant) => {
    setParticipantList(prev => [...prev, newParticipant]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Dashboard courses={courses} participants={participantList} />}
        ></Route>
        <Route path="/newparticipant/:id/:idCourse" element={<Newparticipent addParticipant={addParticipant}/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
