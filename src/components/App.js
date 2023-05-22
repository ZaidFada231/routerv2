import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import TriviaApp from "./trivia/TriviaApp";
import WeatherApp from "./weather/WeatherApp";
import NewsApp from "./news/NewsApp";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/app1" element={<TriviaApp />} />
        <Route path="/app2" element={<WeatherApp />} />
        <Route path="/app3" element={<NewsApp />} />
      </Routes>
    </Router>
  );
}

export default App;
