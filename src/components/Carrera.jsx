import React, { useEffect, useRef } from 'react';
import '../styles/Carrera.css'; 

const Carrera = ({ onNavigate }) => {
  // 1. Referencia al contenedor principal para hacer scroll solo aquí
  const scrollContainerRef = useRef(null);

  // 2. Función para volver al inicio con tu transición
  const handleGoBack = () => {
    if (onNavigate) {
      onNavigate('/');
    } else {
      window.history.back();
    }
  };

  // 3. Efecto de Auto-Scroll Cinematográfico
  useEffect(() => {
    // Función matemática para acelerar y frenar suavemente
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    // Lógica del scroll adaptada para un contenedor interno (no la ventana entera)
    const customSmoothScroll = (container, targetPosition, duration) => {
      const startPosition = container.scrollTop;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        // Mueve el scroll interno del div
        container.scrollTo(0, startPosition + (distance * ease));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Lanzamos la animación medio segundo después de montar el componente
    const scrollTimer = setTimeout(() => {
      const container = scrollContainerRef.current;
      if (!container) return; // Por si el componente se desmonta rápido

      const timelineItems = container.querySelectorAll('.timeline-item');
      if (timelineItems.length > 0) {
        const lastItem = timelineItems[timelineItems.length - 1];
        
        // Calculamos dónde está la última tarjeta respecto al contenedor
        // offsetTop nos da la posición del elemento desde el inicio del contenedor
        const targetY = lastItem.offsetTop - (container.clientHeight / 2) + (lastItem.offsetHeight / 2)+100;
        
        // Viaje fluido de 3000ms (3 segundos)
        customSmoothScroll(container, targetY, 3500);
      }
    }, 500);

    return () => clearTimeout(scrollTimer); // Limpiamos el timer al salir
  }, []);

  return (
    // ¡IMPORTANTE! Asignamos la referencia al div principal
    <div className="carrera-container" ref={scrollContainerRef}>
      
      {/* Fondo animado */}
      <div className="bg-pattern"></div>

      {/* Botón Volver (con fixed para que no se mueva al hacer scroll) */}
      <button 
        className="back-btn" 
        onClick={handleGoBack} 
        style={{ position: 'fixed', top: '40px', left: '50px', zIndex: 1000 }}
      >
        <i className="fas fa-arrow-left"></i> Volver al Inicio
      </button>

      {/* Contenedor del contenido */}
      <div className="page-wrapper">
        <h1 className="page-title">Carrera y Estudios</h1>

        <div className="timeline">
          
          {/* ITEM 1: Trabajo Actual */}
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <span className="date-badge">2023 - Presente</span>
              <h3 className="timeline-title">Estudiante</h3>
              <h4 className="timeline-subtitle">
                <i className="fas fa-briefcase"></i> Universidad Politècnica de València
              </h4>
              <p className="timeline-text">
                Estudios con el sello de calidad Europeo en Ingenieria Informatica en la Universidad Politenica de Valencia. Actualmente en el último año de carrera, con especialización en Tecnologias de la Computacion.
              </p>
            </div>
          </div>

          {/* ITEM 2: Universidad */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <span className="date-badge">2023 - Presente</span>
              <h3 className="timeline-title"> Miembro Activo de la Delegacion de Estudiantes</h3>
              <h4 className="timeline-subtitle">
                <i className="fas fa-graduation-cap"></i>Universitat Politècnica de València
              </h4>
              <p className="timeline-text">
                Miembro muy activo en la representación estudiantil, participando en la organización de eventos académicos, talleres y actividades de integración para fomentar un ambiente universitario dinámico y colaborativo.
              </p>
            </div>
          </div>
          
          {/* ITEM 3: Prácticas */}
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <span className="date-badge">2024 - Presente</span>
              <h3 className="timeline-title">Camarero</h3>
              <h4 className="timeline-subtitle">
                <i className="fas fa-briefcase"></i>Pastamania</h4>
              <p className="timeline-text">
               Camarero en Pastamania, donde he desarrollado habilidades de atención al cliente, trabajo en equipo y gestión del tiempo, contribuyendo a una experiencia positiva para los clientes en un entorno dinámico.
              </p>
            </div>
          </div>
          
          {/* ITEM 3: Prácticas */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <span className="date-badge">2023 - 2025</span>
              <h3 className="timeline-title">Coordinador de Zona</h3>
              <h4 className="timeline-subtitle">
                <i className="fas fa-briefcase"></i>RITSI</h4>
              <p className="timeline-text">
               Coordinador de la zona de Levante en la Reunion de Estudiantes de Ingenierias Tecnicas Y Superiores de la Informatica. Organización de eventos, coordinación con otras delegaciones y representación de los estudiantes de informática a nivel nacional.
              </p>
            </div>
          </div>
          

          {/* ITEM 3: Prácticas */}
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <span className="date-badge">2024-2025</span>
              <h3 className="timeline-title">Coordinador de Infraestructuras en la Delegacion</h3>
              <h4 className="timeline-subtitle">
                <i className="fas fa-briefcase"></i>Universitat Politecnica de Valencia</h4>
              <p className="timeline-text">
              Gestion de las infraestructuras fisicas del Campus y creacion e implementacion de infraestructuras digitales para mejorar la experiencia de los estudiantes en la universidad.
              </p>
            </div>
          </div>

          {/* ITEM 3: Prácticas */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <span className="date-badge">2025-2025</span>
              <h3 className="timeline-title">Gestion y Mantenimiento de paginas web</h3>
              <h4 className="timeline-subtitle">
                <i className="fas fa-briefcase"></i>Fundacion Servipoli</h4>
              <p className="timeline-text">
               Gestion , modificacion y actualizacion de las paginas web del SIE de la UPV. Desarrollo de nuevas funcionalidades y mantenimiento general de las mismas.
              </p>
            </div>
          </div>

          {/* ITEM 5: ACTUALIDAD (Con estilos neón verdes inline) */}
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="glass-card">
              <span 
                className="date-badge" 
                style={{ 
                  background: 'rgba(37, 211, 102, 0.2)', 
                  borderColor: 'rgba(37, 211, 102, 0.5)', 
                  color: '#86efac' 
                }}
              >
                <i 
                  className="fas fa-circle" 
                  style={{ 
                    fontSize: '0.6rem', 
                    marginRight: '8px', 
                    animation: 'pulse 1.5s infinite' 
                  }}
                ></i> 
                Actualidad
              </span>
              <h3 className="timeline-title">Buscando Nuevos Retos</h3>
              <h4 className="timeline-subtitle">
                <i className="fas fa-rocket"></i> Disponibilidad Inmediata
              </h4>
              <p className="timeline-text">
                Actualmente me encuentro desarrollando proyectos personales (como este portfolio) y en búsqueda activa de una oportunidad laboral donde pueda aportar valor, seguir creciendo como desarrollador y trabajar con tecnologías modernas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Carrera;