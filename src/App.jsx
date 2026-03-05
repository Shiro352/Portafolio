import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import './styles/base.css'; // Asegúrate de que aquí está todo el CSS que creamos
import Proyectos from './pages/proyectos';
import Portfolio from './components/Portfolio';
import Carrera from './components/carrera'; // Asegúrate de que la ruta es correcta según tu estructura
// Creamos un componente interno para poder usar useNavigate()
const AppContent = () => {
    const navigate = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Esta es la función mágica que coordina la animación y el cambio de página
    const navigateWithTransition = (path) => {
        setIsTransitioning(true); // 1. La bola negra crece
        
        setTimeout(() => {
            navigate(path); // 2. Cambiamos de página "por debajo" de la bola negra
            setIsTransitioning(false); // 3. La bola negra se encoge revelando la nueva página
        }, 800); // 800ms coincide con la transición de tu CSS
    };

    return (
        <>
            {/* El fondo sutil siempre está presente */}
            <div className="bg-pattern"></div>
            
            {/* Aquí es donde React intercambia las páginas */}
            <Routes>
                <Route path="/" element={<Home onNavigate={navigateWithTransition} />} />
                
                {/* Pantallas de prueba para que veas que funciona (luego las crearás bien) */}
                <Route path="/carrera" element={<Carrera onNavigate={navigateWithTransition} />} />
                <Route path="/portfolio" element={<Portfolio onNavigate={navigateWithTransition} />} />
                {/* <Route path="/proyectos" element={<Proyectos />} /> */}
            </Routes>

            {/* La bola negra de transición, ¡siempre lista en la capa superior! */}
            <div className={`transition-overlay ${isTransitioning ? 'active' : ''}`}></div>
        </>
    );
};

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}