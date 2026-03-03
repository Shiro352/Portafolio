import React from 'react';

// Recibe el icono, el texto y la función de qué hacer al hacer clic
const Card = ({ icon, title, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            {/* Usamos las clases de FontAwesome dinámicamente */}
            <i className={`fa-solid ${icon}`}></i>
            <span>{title}</span>
        </div>
    );
};

export default Card;