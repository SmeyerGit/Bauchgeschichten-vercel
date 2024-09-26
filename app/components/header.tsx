import React from 'react';
import './header.css'; // Import der CSS-Datei

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Zur Erleninsel</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Über uns</a></li>
          <li><a href="/services">Leistungen</a></li>
          <li><a href="/contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
