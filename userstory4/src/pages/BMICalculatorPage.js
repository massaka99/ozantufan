import React, { useState } from "react";
import "./BMICalculatorPage.css";

const BMICalculatorPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight && height) {
      const result = (weight / (height / 100) ** 2).toFixed(2);
      setBMI(result);
      determineCategory(result);
    } else {
      alert("Indtast venligst både din vægt og højde.");
    }
  };

  const determineCategory = (bmi) => {
    if (bmi < 18.5) {
      setCategory("Undervægtig");
    } else if (bmi >= 18.5 && bmi <= 25) {
      setCategory("Normalvægtig");
    } else if (bmi > 25 && bmi <= 30) {
      setCategory("Overvægtig");
    } else if (bmi > 30) {
      setCategory("Svært overvægtig");
    }
  };

  return (
    <div className="bmi-calculator-container">
      <h2>BMI Beregner</h2>
      <form onSubmit={calculateBMI}>
        <div className="input-group">
          <label>Vægt (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Vægt i kg"
          />
        </div>
        <div className="input-group">
          <label>Højde (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Højde i cm"
          />
        </div>
        <button type="submit" className="calculate-btn">
          Beregn
        </button>
        {bmi && (
          <div className="result">
            <h3>Din BMI: {bmi}</h3>
            <p>{category}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BMICalculatorPage;
