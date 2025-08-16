import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <span className="brand-icon">🚀</span>
            <span className="brand-text">Proxytest</span>
          </Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            🏠 홈
          </Link>
          
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            📖 소개
          </Link>
          
          <Link 
            to="/api-test" 
            className={`nav-link ${isActive('/api-test') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            🔧 API 테스트
          </Link>
          
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            📧 문의
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      <style jsx>{`
        .navigation {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }
        
        .nav-brand a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          transition: transform 0.3s ease;
        }
        
        .nav-brand a:hover {
          transform: scale(1.05);
        }
        
        .brand-icon {
          font-size: 2rem;
          margin-right: 10px;
        }
        
        .brand-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .nav-menu {
          display: flex;
          gap: 30px;
          align-items: center;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 25px;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.2);
          transition: left 0.3s ease;
          border-radius: 25px;
        }
        
        .nav-link:hover::before {
          left: 0;
        }
        
        .nav-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .nav-link.active {
          background: rgba(255,255,255,0.2);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .nav-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          padding: 5px;
        }
        
        .hamburger {
          width: 25px;
          height: 3px;
          background: white;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }
        
        .hamburger.active:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.active:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            flex-direction: column;
            padding: 20px;
            gap: 15px;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          }
          
          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-toggle {
            display: flex;
          }
          
          .nav-link {
            width: 100%;
            text-align: center;
            padding: 15px;
            border-radius: 10px;
          }
          
          .nav-link:hover {
            transform: none;
          }
        }
        
        @media (max-width: 480px) {
          .nav-container {
            padding: 0 15px;
          }
          
          .brand-text {
            font-size: 1.2rem;
          }
          
          .brand-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navigation; 