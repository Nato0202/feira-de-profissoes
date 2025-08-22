import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "../menu/menu.jsx"; // Import com o novo nome
import './navbar.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/sobre" className="brand">
          <img src="/logo.png" alt="Logo" />
        </Link>

        <div className="search">
          <input type="text" placeholder="Pesquisar" />
          <button aria-label="Pesquisar">🔎</button>
        </div>

        <nav className="menu">
          <NavLink to="/inscricao">Inscrição</NavLink>
          <NavLink to="/login-qr">Login QR</NavLink>
          <NavLink to="/login">Login Aluno</NavLink>
          <NavLink to="/busca-visitante">Busca</NavLink>
          <NavLink to="/historia">História</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>

        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>

        <HamburgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
}
