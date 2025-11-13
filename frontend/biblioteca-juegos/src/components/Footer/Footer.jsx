// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
// Importamos los íconos que viste en la maqueta
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        {/* Usamos el nombre del proyecto */}
        <h3 className="footer-sitename">GameTracker</h3>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-column">
          <h4>Topic</h4>
          <a href="#">Inicio</a>
          <a href="#">Comunidad</a>
          <a href="#">Iniciar Sesión</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;