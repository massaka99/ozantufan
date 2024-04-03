import React, { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import "./WorkoutModal.css";

const WorkoutModal = ({ plan, onClose }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  if (!plan || !plan.week) return null;

  return (
    <>
      <div className="workout-modal-backdrop" onClick={onClose}>
        <div className="workout-modal" onClick={(e) => e.stopPropagation()}>
          <h2>{plan.title}</h2>
          <div className="weekly-schedule">
            {Object.entries(plan.week).map(([day, exercises], index) => (
              <div key={index} className="daily-plan">
                <h3>{day}</h3>
                <ul>
                  {exercises.map((exercise, exerciseIndex) => (
                    <li key={exerciseIndex}>{exercise}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button onClick={() => setVideoModalOpen(true)}>Info</button>
          <button onClick={onClose}>Luk</button>
        </div>
      </div>
      {videoModalOpen && (
        <VideoModal
          videos={plan.videos}
          onClose={() => setVideoModalOpen(false)}
        />
      )}
    </>
  );
};

export default WorkoutModal;
