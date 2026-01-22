import { useStore } from '../context/StoreContext';
import { MapPin, Phone, Clock, Instagram, Facebook, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const { appSettings, navigate } = useStore();
  
  return (
    <footer className="footer-luxury">
      <div className="footer-shimmer"></div>
      
      <div className="container footer-grid-premium">
        {/* Colonne 1: L'Héritage */}
        <div className="footer-section brand-column">
          <h2 className="footer-logo">{appSettings.name}</h2>
          <p className="footer-manifesto">
            L'excellence de la gastronomie algérienne, où chaque plat raconte 
            une histoire de passion, d'élégance et de tradition séculaire depuis 1998.
          </p>
          <div className="luxury-socials">
            <a href="#facebook" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#instagram" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#twitter" aria-label="Twitter"><Mail size={18} /></a>
          </div>
        </div>

        {/* Colonne 2: Exploration */}
        <div className="footer-section">
          <h4 className="footer-heading">Exploration</h4>
          <ul className="footer-links">
            <li onClick={() => navigate('about')}>Notre Héritage</li>
            <li onClick={() => navigate('menu')}>La Carte Signature</li>
            <li onClick={() => navigate('contact')}>Privatisation</li>
            <li>Mentions Légales</li>
          </ul>
        </div>

        {/* Colonne 3: Conciergerie */}
        <div className="footer-section">
          <h4 className="footer-heading">Conciergerie</h4>
          <div className="contact-info-list">
            <div className="contact-item">
              <MapPin size={16} className="gold-icon" />
              <span>{appSettings.address}, Alger</span>
            </div>
            <div className="contact-item">
              <Phone size={16} className="gold-icon" />
              <span>{appSettings.phone}</span>
            </div>
            <div className="contact-item">
              <Clock size={16} className="gold-icon" />
              <span>{appSettings.hours}</span>
            </div>
            <div className="contact-item">
              <Globe size={16} className="gold-icon" />
              <span>Service de Livraison Premium (DA)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container legal-content">
          <p>&copy; 2026 {appSettings.name}. Établissement de Haute Gastronomie.</p>
          <div className="divider-gold"></div>
          <p className="developer-credit">Conçu avec excellence pour le Palais.</p>
        </div>
      </div>
    </footer>
  );
};