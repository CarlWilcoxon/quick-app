import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Home() {
  return (
    <Router forceRefresh={true}>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calc">Calculator</Link>
          </li>
          <li>
            <Link to="/life">Life</Link>
          </li>
          <li>
            <Link to="/match">Match</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default Home;
