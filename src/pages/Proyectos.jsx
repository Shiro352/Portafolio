import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/carousel.css';// Asegúrate de que aquí está el CSS específico para el carrusel
import '../styles/base.css'; // Aquí va el CSS general que creamos
const DATA = {
  web: [
    { id: 1, title: "E-Commerce React", img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Landing Page Fintech", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "LinkedIn Clone", img: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80" },
  ],
  apps: [
    { id: 4, title: "App del Clima", img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80" },
  ],
  diseño: [
    { id: 5, title: "Prototipo UI/UX", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
  ]
};

const SECTIONS = ['web', 'apps', 'diseño'];

// Componente del Carrusel
const Carousel3D = ({ items, isActive }) => {
  const [angle, setAngle] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const cellCount = items.length;
  const radius = 600; 
  const theta = 360 / cellCount;

  const rotate = (dir) => {
    setAngle((prev) => prev + (dir * theta));
    setSelectedIndex((prev) => (prev - dir + cellCount) % cellCount);
  };

  const jumpTo = (index) => {
    let diff = index - selectedIndex;
    if (diff > cellCount / 2) diff -= cellCount;
    else if (diff < -cellCount / 2) diff += cellCount;
    setAngle((prev) => prev - (diff * theta));
    setSelectedIndex(index);
  };

  return (
    <div className={`section-container ${isActive ? 'active' : ''}`}>
      
      {/* 1. LATERAL IZQUIERDO */}
      <aside className="sidebar-list">
        <div className="sidebar-card">
          <h3>Trabajos</h3>
          <ul>
            {items.map((item, index) => (
              <li 
                key={item.id} 
                className={`sidebar-item ${index === selectedIndex ? 'active' : ''}`}
                onClick={() => jumpTo(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* 2. CONTENIDO CENTRAL (Carrusel) */}
      <main className="carousel-scene">
        <div className="carousel" style={{ transform: `translateZ(-600px) rotateY(${angle}deg)` }}>
          {items.map((item, index) => {
            const cellAngle = (360 / items.length) * index;
            return (
              <div 
                key={item.id} 
                className={`carousel-cell ${index === selectedIndex ? 'selected' : 'blurred'}`}
                style={{ transform: `rotateY(${cellAngle}deg) translateZ(600px)` }}
              >
                <div className="project-wrapper" style={{ transform: `rotateY(${-(angle + cellAngle)}deg)` }}>
                   <img src={item.img} alt={item.title} className="project-image" />
                   <h3 className="project-title">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-controls">
          <button onClick={() => rotate(1)}>◀</button>
          <button onClick={() => rotate(-1)}>▶</button>
        </div>
      </main>
    </div>
  );
};

export default function Proyectos() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isExiting, setIsExiting] = useState(false); // <--- Nuevo estado
  const navigate = useNavigate();

  // Esta función sustituye al navigate directo
  const handleBackToHome = () => {
    setIsExiting(true); // Activa la clase .active en el overlay
    
    // Esperamos 800ms (lo que dura tu transición en el CSS)
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="app-container" style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      
      {/* 1. Insertamos el overlay aquí para que se vea en esta página */}
      <div className={`transition-overlay ${isExiting ? 'active' : ''}`}></div>

      {/* 2. El botón ahora llama a nuestra función, no a navigate directamente */}
      <button onClick={handleBackToHome} className="back-btn">
        <i className="fa-solid fa-arrow-left"></i> Inicio
      </button>
      
      <nav className="main-nav">
        {SECTIONS.map((sec, idx) => (
          <button key={sec} className={idx === activeIdx ? 'active' : ''} onClick={() => setActiveIdx(idx)}>
            {sec}
          </button>
        ))}
      </nav>

      <div className="sections-wrapper" style={{ transform: `translateY(-${activeIdx * 100}vh)`, transition: '0.8s' }}>
        {SECTIONS.map((sec, idx) => (
          <section key={sec} style={{ height: '100vh', width: '100vw' }}>
            <Carousel3D items={DATA[sec]} isActive={idx === activeIdx} />
          </section>
        ))}
      </div>
    </div>
  );
}