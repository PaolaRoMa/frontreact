import './App.css';
import React from 'react';
import logo from './Logo.jpg';


function App() {
  return (
    <div className="App">
      <header>
      <img src={logo} alt="Logo de PetTracer" className="logo" />
      <title>PetTrace</title>
      <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Acerca de nosotros</a></li>
            <li><a href="/contact">Contactanos</a></li>
            <li><a href="/contact">Regístrate</a></li>
            <li><a href="/contact">Refugios</a></li>
            {/* Agrega más elementos según necesites */}
          </ul>
        </nav>
      </header>
      <main>
        {/* Contenido principal de la página */}
        <h1>Bienvenido a PetTrace</h1>
        <p>¡Si necesitas encontrar al dueño de un perrito perdido o si tu mascota se perdió, estas en el lugar correcto!</p>
      </main>
    </div>
  );
}

export default App;
