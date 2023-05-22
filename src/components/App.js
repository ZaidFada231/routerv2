import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import TriviaApp from "./trivia/TriviaApp";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/app1" element={<TriviaApp />} />
      </Routes>
    </Router>
  );
}

export default App;
