import React, { useState } from "react";
import "./NewVideo.css";
import { useNavigate } from "react-router-dom";

const NewVideo = ({ categories, setVideos }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newVideo) => {
        setVideos((prev) => [...prev, newVideo]);
        navigate("/"); // Redireciona para a página inicial
      })
      .catch((error) => console.error("Erro ao adicionar vídeo:", error));
  };

  return (
    <div className="new-video">
      <h2>Novo Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="URL da imagem"
          required
        />
        <input
          type="url"
          name="video"
          value={formData.video}
          onChange={handleChange}
          placeholder="URL do vídeo"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descrição"
        ></textarea>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default NewVideo;
