import React, { useState, useEffect } from 'react'; 
import './Header.css'
import { Link } from 'react-router-dom';

function Header({ isLogin = false }) {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 




  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };



  
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); 
      }
    }

    window.addEventListener('resize', handleResize);      
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`hideCellphone ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <Link to="/">
          <button id='nomepsi'>
            <p>Letícia</p>
          </button>
        </Link>
      </div>

      

      
      { !isLogin && isMobile && (
        <button
          className="hamburger"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776; 
        </button>
      )}

      
      {!isLogin && (
        <nav
          className={`botoes-home ${menuOpen || !isMobile ? "open" : ""}`}
          role="group"
          aria-label="Basic example"
        >
          <Link to="/login">
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </Link>
          <a href="#Bio">
            <button type="button" className="btn btn-primary">
              Sobre
            </button>
          </a>
          <a href="#terapia">
            <button type="button" className="btn btn-primary">
              Porque fazer terapia
            </button>
          </a>
          <a href="#servicos">
            <button type="button" className="btn btn-primary">
              Serviços
            </button>
          </a>
          <a href="#blog">
            <button type="button" className="btn btn-primary">
              Artigos
            </button>
          </a>
          <a href="#faq">
            <button type="button" className="btn btn-primary">
              FAQ
            </button>
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
