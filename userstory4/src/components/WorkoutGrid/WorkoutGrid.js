import React, { useState } from "react";
import WorkoutModal from "../WorkoutModal/WorkoutModal";
import "./WorkoutGrid.css";

// 10 træningsplaner med en ugentlig plan:
const workoutPlans = [
  {
    id: 1,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },
  {
    id: 2,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },

  {
    id: 3,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },

  {
    id: 4,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },

  {
    id: 5,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },
  {
    id: 6,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },
  {
    id: 7,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },
  {
    id: 8,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },
  {
    id: 9,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },
  {
    id: 10,
    title: "Nybegynder",
    week: {
      Mandag: ["20 min løbebånd", "15 min cykling"],
      Tirsdag: ["Hvile dag"],
      Onsdag: ["3 sets assisteret pull-ups", "3 sets dumbbell press"],
      Torsdag: ["Hvile dag"],
      Fredag: ["30 min svømning", "15 min lænd/mave træning"],
      Lørdag: ["Hvile dag"],
      Søndag: ["Yoga"],
    },
    videos: [
      { id: "JK6Cd1nJx0w", description: "BREEEEEEAD" },
      { id: "1Qjp308z6EY", description: "hallo bro" },
    ],
  },
  // Flere planer kan tilføjes
];

const WorkoutGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div className="workout-grid">
      {workoutPlans.map((plan) => (
        <div
          key={plan.id}
          className="workout-plan"
          onClick={() => openModal(plan)}
        >
          {plan.title}
        </div>
      ))}
      {isModalOpen && (
        <WorkoutModal
          plan={selectedPlan}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default WorkoutGrid;
