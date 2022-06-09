import React from 'react';
import '@styles/NotFound.scss'
const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>¡Ups! Página no encontrada</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>Lo sentimos, no pudimos encontrar la página que buscas</h2>
                <a href="/">Ir a la página de inicio</a>
            </div>
        </div>
    );
};

export default NotFound;