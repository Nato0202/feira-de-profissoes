import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
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
      </div>
    </header>
  );
}
