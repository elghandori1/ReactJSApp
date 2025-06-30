import { useState } from "react";
import "../App.css";

function Dashboard({courses,participants}) {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [participantList, setParticipantList] = useState(participants);

  const goToFirstCourse = () => setCurrentCourseIndex(0);
  const goToLastCourse = () => setCurrentCourseIndex(courses.length - 1);

  const goToPreviousCourse = () => {
    if (currentCourseIndex > 0) {
      setCurrentCourseIndex(currentCourseIndex - 1);
    }
  };

  const goToNextCourse = () => {
    if (currentCourseIndex < courses.length - 1) {
      setCurrentCourseIndex(currentCourseIndex + 1);
    }
  };

  const currentCourse = courses[currentCourseIndex];

  const filteredParticipants = participantList.filter(
    (p) => p.idCourse === currentCourse.id
  );

  function RemoveParticipent(id) {
    const updatedList = participantList.filter((part) => part.id !== id);
    setParticipantList(updatedList);
  }

  return (
    <div className="container">
      <h3>Compétition d'Athlétisme</h3>

      {/* Course Info Section */}
      <div className="course-info">
        <div className="form-group row-align">
          <label>Course ID</label>
          <input type="text" readOnly value={currentCourse?.id || 0} />
          <div className="nav-buttons">
            <button onClick={goToFirstCourse}>{"|<"}</button>
            <button onClick={goToPreviousCourse}>{"<<"}</button>
            <button onClick={goToNextCourse}>{">>"}</button>
            <button onClick={goToLastCourse}>{">|"}</button>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Course Name</label>
            <input type="text" readOnly value={currentCourse?.nom || ""} />
          </div>
          <div className="form-group">
            <label>Distance</label>
            <input
              type="text"
              readOnly
              value={`${currentCourse?.distance || 0} km`}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Catégorie</label>
          <div className="radio-group">
            <label className="custom-radio">
              <input
                type="radio"
                name="category"
                checked={currentCourse.categorie === "H"}
                readOnly
              />
              Homme
            </label>
            <label className="custom-radio">
              <input
                type="radio"
                name="category"
                checked={currentCourse.categorie === "F"}
                readOnly
              />
              Femme
            </label>
          </div>
        </div>
      </div>

      {/* Participants Section */}
      <div className="participants-section">
        <div className="section-header">
          <h3>Participants</h3>
          <button className="add-button">Nouveau participant</button>
        </div>

        <table className="participants-table">
          <thead>
            <tr>
              <th>ID Participant</th>
              <th>Nom</th>
              <th>ID Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredParticipants.length > 0 ? (
              filteredParticipants.map((elm, i) => (
                <tr key={i}>
                  <td>{elm.id}</td>
                  <td>{elm.nom}</td>
                  <td>{elm.idCourse}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Êtes-vous sûr de vouloir supprimer ce participant ?"
                          )
                        ) {
                          RemoveParticipent(elm.id);
                        }
                      }}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Aucun participant trouvé</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
