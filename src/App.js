import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/homepage";
import Twostranitsa from "./pages/twostranitsa";
import Threestranitsa from "./pages/threestranitsa";
import NewPosts from "./pages/new-posts"; // Импортируем компонент с новыми постами

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/twostranitsa" element={<Twostranitsa />} />
        <Route path="/threestranitsa" element={<Threestranitsa />} />
        <Route path="/new-posts" element={<NewPosts />} />  {/* Новый маршрут */}
      </Routes>
    </Router>
  );
}

export default App;
