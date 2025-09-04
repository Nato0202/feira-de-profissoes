import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "../menu/menu.jsx";
import './navbar.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      {/* Logo */}
        <div className="imglogodiv">
          <Link to="/" className="navbar__brand">
            <img className="logo-2" src="../../images/logo-2.png" alt="Logo" />
          </Link>
        </div>
      <div className="navbar__inner">
        <div className="abu">
        {/* Menu Desktop */}
        <nav className="navbar__desktop-menu">
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/history">História</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Inscrição</NavLink>
          <NavLink to="/search">Busca</NavLink>
        </nav>
        </div>
        {/* Busca */}
        <div className="navbar__search">
          <input type="text" placeholder="Pesquisar" className="navbar__search-input"/>
          <button aria-label="Pesquisar" className="navbar__search-button">🔎</button>
        </div>

        {/* Botão Hamburguer (só mobile) */}
        <button 
          className="navbar__hamburger" 
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>

        {/* Menu Hamburguer */}
        <HamburgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
      <div className="spacement"></div>
    </header>
  );
}
