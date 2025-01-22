import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Aluraflix</h1>
      <nav>
        <Link to="/" className="button">
          Home
        </Link>
        <Link to="/novo-video" className="button">
          Novo Vídeo
        </Link>
      </nav>
    </header>
  );
};

export default Header;
