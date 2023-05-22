import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app1">Trivia App</Link>
          </li>
          <li>
            <Link to="/app2">App 2</Link>
          </li>
          <li>
            <Link to="/app3">App 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
