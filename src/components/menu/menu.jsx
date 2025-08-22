import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

const HamburgerMenu = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay para fechar o menu ao clicar fora */}
      {isOpen && (
        <div className="menu-overlay" onClick={onClose} />
      )}
      
      {/* Menu lateral */}
      <nav className={`hamburger-menu ${isOpen ? 'hamburger-menu--open' : ''}`}>
        <div className="hamburger-menu__header">
          <h3 className="hamburger-menu__title">Menu</h3>
          <button 
            className="hamburger-menu__close" 
            onClick={onClose}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>
        
        <div className="hamburger-menu__content">
          <NavLink 
            to="/inscricao" 
            className="hamburger-menu__link"
            onClick={handleLinkClick}
          >
            Inscrição
          </NavLink>
          
          <NavLink 
            to="/login-qr" 
            className="hamburger-menu__link"
            onClick={handleLinkClick}
          >
            Login QR
          </NavLink>
          
          <NavLink 
            to="/login" 
            className="hamburger-menu__link"
            onClick={handleLinkClick}
          >
            Login Aluno
          </NavLink>
          
          <NavLink 
            to="/busca-visitante" 
            className="hamburger-menu__link"
            onClick={handleLinkClick}
          >
            Busca
          </NavLink>
          
          <NavLink 
            to="/historia" 
            className="hamburger-menu__link"
            onClick={handleLinkClick}
          >
            História
          </NavLink>
          
          <NavLink 
            to="/sobre" 
            className="hamburger-menu__link"
            onClick={handleLinkClick}
          >
            Sobre
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;
