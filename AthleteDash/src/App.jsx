import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { courses, participants } from "./data";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Dashboard courses={courses} participants={participants} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
