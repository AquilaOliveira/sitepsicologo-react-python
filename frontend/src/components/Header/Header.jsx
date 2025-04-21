import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className="hideCellphone">
      <div className="logo">
        <p>Letícia</p>
      </div>
      <nav className="botoes-home" role="group" aria-label="Basic example">
        <a href="#Bio">
          <button type="button" className="btn btn-primary">Sobre</button>
        </a>
        <a href="#terapia">
          <button type="button" className="btn btn-primary">Porque fazer terapia</button>
        </a>
        <a href="#servicos">
          <button type="button" className="btn btn-primary">Serviços</button>
        </a>
        <a href="#blog">
          <button type="button" className="btn btn-primary">Artigos</button>
        </a>
        <a href="#faq">
          <button type="button" className="btn btn-primary">FAQ</button>
        </a>
        <a href="#contato">
          <button type="button" className="btn btn-primary">Agendamento</button>
        </a>
      </nav>
    </header>
  );
}

export default Header;
