import React from "react";
import WorkoutGrid from "../components/WorkoutGrid/WorkoutGrid";
import "./WorkoutPage.css";

const WorkoutPage = () => {
  return (
    <div className="workout-container">
      <h1 className="workout-header">Dine skræddersyede træningsplaner</h1>
      <WorkoutGrid />
    </div>
  );
};

export default WorkoutPage;
