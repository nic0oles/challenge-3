import React, { useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ video, onClose, fetchVideos }) => {
  const [formData, setFormData] = useState({
    title: video.title,
    category: video.category,
    image: video.image,
    video: video.video,
    description: video.description,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envia a edição para o servidor
    fetch(`http://localhost:3000/videos/${video.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        fetchVideos(); // Atualizar a lista de vídeos na página inicial
        onClose(); // Fechar a modal
        navigate("/"); // Navegar para a página inicial, que agora está com os dados atualizados
      })
      .catch((error) => console.error("Erro ao editar vídeo:", error));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Editar Vídeo</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Categoria"
            required
          />
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
            required
          />
          <button type="submit">Salvar</button>
        </form>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
