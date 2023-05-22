import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import TriviaApp from "./trivia/TriviaApp";
import WeatherApp from "./weather/WeatherApp";
import NewsApp from "./news/NewsApp";
import Game from "./tictactoe/TicApp";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/app1" element={<TriviaApp />} />
        <Route path="/app2" element={<WeatherApp />} />
        <Route path="/app3" element={<NewsApp />} />
        <Route path="/app4" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
