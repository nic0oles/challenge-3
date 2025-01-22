import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NewVideo from "./pages/NewVideo/NewVideo";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Carregar vídeos
    fetch("http://localhost:3000/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Erro ao carregar vídeos:", error));

    // Carregar categorias
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Erro ao carregar categorias:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/videos/${id}`, { method: "DELETE" })
      .then(() => setVideos((prev) => prev.filter((video) => video.id !== id)))
      .catch((error) => console.error("Erro ao deletar vídeo:", error));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home videos={videos} categories={categories} onDelete={handleDelete} />}
        />
        <Route
          path="/novo-video"
          element={<NewVideo categories={categories} setVideos={setVideos} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
