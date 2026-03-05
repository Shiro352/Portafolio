import React from 'react';
import '../styles/Portfolio.css';
import fotoPerfil from  './Profile.jpeg'

const Portfolio = ({ onNavigate }) => {
    // 1. PRIMERO LA LÓGICA Y LAS FUNCIONES (AQUÍ VA)
  const handleGoBack = () => {
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.history.back();
    }
  };
    return (
    <>
    
        
      {/* Fondo animado */}
      <div className="bg-pattern"></div>

      {/* Contenedor principal */}
      <div className="portfolio-container">
        {/* BOTÓN DE VOLVER */}
        <button className="back-btn" onClick={handleGoBack}>
          <i className="fas fa-arrow-left"></i>
          Volver al Inicio
        </button>
        <div className="layout-grid">
          
          {/* COLUMNA IZQUIERDA: Tarjeta de Perfil */}
          <aside className="glass-card profile-card">
            <img 
              src={fotoPerfil} 
              alt="Foto de perfil" 
              className="profile-photo" 
            />
            
            <h1 className="profile-name">Bilel Dhraief</h1>
            <h2 className="profile-title">Ingeniero Informático</h2>
            
            <div className="contact-list">
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>+34 627 86 83 22</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>bileldhraief604@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Alcoi, España</span>
              </div>
            </div>

            <div className="social-menu">
              <a href="https://www.linkedin.com/in/bilel-dhraief-0147aa267/" className="social-btn linkedin" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Shiro352" className="social-btn github" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/bilel_dhr/" className="social-btn instagram" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </aside>

          {/* COLUMNA DERECHA: Tarjeta Sobre Mí */}
          <main className="glass-card about-card">
            <h2 className="section-title">Sobre mí</h2>
            
            <p className="about-text">
              ¡Hola! Soy un apasionado por la tecnología y el desarrollo de software. Con una sólida formación en ingeniería informática, y un gran grado de adaptabilidad e intereses por mejorar. Tengo grandes habilidades sociales y trabajo bien con personas.
            </p>
            <p className="about-text">
              Actualmente me enfoco en explorar nuevas tecnologías, optimizar el rendimiento de las aplicaciones y ampliar mis horizontes del mundo de la informática. Cuando no estoy programando, me encontrarás entrenando, fotografiando aquello que me parece bello o descubriendo música nueva.
            </p>

            <h3 className="skills-title">Habilidades Destacadas</h3>
            <div className="skills-container">
              <span className="skill-tag">JavaScript / TypeScript</span>
              <span className="skill-tag">React & Next.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">CSS Avanzado & Animaciones</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C/C++</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Organizado</span>
              <span className="skill-tag">Trabajador</span>
              <span className="skill-tag">Innovador</span>
            </div>
          </main>

        </div>
      </div>
    </>
  );
};

export default Portfolio;