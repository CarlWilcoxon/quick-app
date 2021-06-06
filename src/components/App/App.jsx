import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../Home/Home";
import CalcApp from "../CalcPage/CalcApp/CalcApp";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calc">
            <CalcApp />
          </Route>
          {/* <Route path="/life">
            <LifePage />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
