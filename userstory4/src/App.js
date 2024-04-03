import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/workouts" component={WorkoutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
