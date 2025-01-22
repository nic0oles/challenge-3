import React from "react";
import "./Home.css";
import VideoCard from "../../components/VideoCard/VideoCard";

const Home = ({ videos, categories, onDelete }) => {
  return (
    <div className="home">
      <div className="featured-video">
        <h2>Vídeo em Destaque</h2>
        {videos.length > 0 ? (
          <iframe
            src={videos[0].video}
            title={videos[0].title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Nenhum vídeo em destaque.</p>
        )}
      </div>
      {categories.map((category) => {
        const videosByCategory = videos.filter(
          (video) => video.category.toLowerCase() === category.name.toLowerCase()
        );

        return (
          <div key={category.id} className="category-section">
            <h3>{category.name}</h3>
            {videosByCategory.length > 0 ? (
              <div className="video-list">
                {videosByCategory.map((video) => (
                  <VideoCard key={video.id} video={video} onDelete={onDelete} />
                ))}
              </div>
            ) : (
              <p>Nenhum vídeo nesta categoria.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
