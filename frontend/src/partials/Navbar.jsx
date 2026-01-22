import { useStore } from '../context/StoreContext';
import { useState, useEffect } from 'react';
import { Utensils, ShoppingBag, Menu as MenuIcon, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const { navigate, currentPage, appSettings, cartContent } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll pour l'effet de transparence luxe
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Accueil' },
    { id: 'menu', label: 'La Carte' },
    { id: 'about', label: 'L’Héritage' },
    { id: 'contact', label: 'Réservations' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-top-bar">
        <div className="container">
          <p><MapPin size={12} /> {appSettings.address} — Alger, Algérie</p>
        </div>
      </div>

      <div className="container nav-main">
        <div className="logo-prestige" onClick={() => navigate('home')}>
          <div className="logo-symbol">
            <Utensils size={24} />
          </div>
          <div className="logo-text">
            <span className="brand-name">{appSettings.name}</span>
            <span className="brand-sub">Haute Gastronomie</span>
          </div>
        </div>

        <div className={`nav-links-wrapper ${isMenuOpen ? 'mobile-active' : ''}`}>
          <ul className="nav-list">
            {links.map(link => (
              <li key={link.id}>
                <button 
                  onClick={() => { navigate(link.id); setIsMenuOpen(false); }}
                  className={`nav-link-btn ${currentPage === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div 
              className={`premium-cart-trigger ${currentPage === 'cart' ? 'active' : ''}`} 
              onClick={() => { navigate('cart'); setIsMenuOpen(false); }}
            >
              <div className="cart-icon-box">
                <ShoppingBag size={20} />
                {cartContent > 0 && <span className="gold-badge">{cartContent}</span>}
              </div>
              <span className="cart-text">Mon Panier</span>
            </div>
          </div>
        </div>

        <button className="luxury-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>
    </nav>
  );
};