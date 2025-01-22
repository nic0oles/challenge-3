import React, { useState } from "react";
import "./VideoCard.css";
import Modal from "../Modal/Modal";

const VideoCard = ({ video, onDelete, fetchVideos }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true); // Abrir a modal para edição
  };

  const handleCloseModal = () => {
    setIsEditing(false); // Fechar a modal
  };

  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} />
      <h4>{video.title}</h4>
      <p>{video.description}</p>
      <div className="video-card-buttons">
        <button onClick={handleEdit} className="edit-button">Editar</button>
        <button onClick={() => onDelete(video.id)} className="delete-button">Excluir</button>
      </div>
      {isEditing && (
        <Modal
          video={video}
          onClose={handleCloseModal}
          fetchVideos={fetchVideos} // Passando a função fetchVideos
        />
      )}
    </div>
  );
};

export default VideoCard;
