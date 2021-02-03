import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Services_Provider from "./Pages/Services_Provider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import CentralPage from "./Pages/CentralPage";
import CentralPageState from "./Pages/CentralPageState";
import Nation_stateData from "./Context/Nation_StateData";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Nation" component={CentralPage} exact />
          <Route path="/State" component={CentralPageState} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
