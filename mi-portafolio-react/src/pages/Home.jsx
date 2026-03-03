
import Card from '../components/Card';
import React, { useState, useEffect } from 'react';

export default function Home({ onNavigate }) {
  // Empezamos con el overlay activo (pantalla negra)
  const [isTransitioning, setIsTransitioning] = useState(true);
  useEffect(() => {
    // En cuanto el componente se monta, esperamos un momento mínimo y quitamos la pantalla negra
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 10); // Un pequeño delay para que el ojo note que se abre
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {/* La bola negra que se encoge al entrar */}
      <div className={`transition-overlay ${isTransitioning ? 'active' : ''}`}></div>
      
      {/* El resto de tus tarjetas... */}
      <div className="container">
         {/* Tu código de las 3 tarjetas aquí */}
         {/* Le pasamos a cada tarjeta a dónde debe navegar */}
            <Card 
                icon="fa-graduation-cap" 
                title="Carrera + Estudios" 
                onClick={() => onNavigate('/carrera')} 
            />
            <Card 
                icon="fa-user" 
                title="Perfil" 
                onClick={() => onNavigate('/perfil')} 
            />
            <Card 
                icon="fa-layer-group" 
                title="Proyectos" 
                onClick={() => onNavigate('/proyectos')} 
            />
      </div>
    </div>
  );
}

/*import React from 'react';
import Card from '../components/Card';

const Home = ({ onNavigate }) => {
    return (
        <div className="container">
            {/* Le pasamos a cada tarjeta a dónde debe navegar }
            <Card 
                icon="fa-graduation-cap" 
                title="Carrera + Estudios" 
                onClick={() => onNavigate('/carrera')} 
            />
            <Card 
                icon="fa-user" 
                title="Perfil" 
                onClick={() => onNavigate('/perfil')} 
            />
            <Card 
                icon="fa-layer-group" 
                title="Proyectos" 
                onClick={() => onNavigate('/proyectos')} 
            />
        </div>
    );
};

export default Home;*/