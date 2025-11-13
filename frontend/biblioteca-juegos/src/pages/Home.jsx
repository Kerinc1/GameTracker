// src/pages/Home.jsx
import React from 'react';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import GameShowcase from '../components/GameShowcase/GameShowcase'; 
import PopularGames from '../components/PopularGames/PopularGames';


const Home = () => {
  return (
    <main className="home-page">
      <HeroCarousel />
      <GameShowcase />
      <PopularGames />
      
      
      {/* Aquí irá el resto del contenido de la Home,
          como los grids de juegos ('BibliotecaJuegos') */}
    </main>
  );
};

export default Home;