import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import PersonalProfilePage from "./pages/PersonalProfilePage";
import DietPlansPage from "./pages/DietPlansPage";
import ProgressTrackingPage from "./pages/ProgressTrackingPage";
import BMICalculatorPage from "./pages/BMICalculatorPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/workouts" component={WorkoutPage} />
          <Route path="/personal-profile" component={PersonalProfilePage} />
          <Route path="/diet-plans" component={DietPlansPage} />
          <Route path="/progress-tracking" component={ProgressTrackingPage} />
          <Route path="/bmi-calculator" component={BMICalculatorPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
