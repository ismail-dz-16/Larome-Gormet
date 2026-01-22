import { useStore } from '../context/StoreContext';
import { MapPin, Phone, Clock, Send, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const { appSettings } = useStore();

  return (
    <div className="luxury-contact-page page-fade">
      {/* Visual Atmosphere Overlays */}
      <div className="zellige-texture-overlay"></div>
      <div className="ambient-glow"></div>

      {/* HEADER PRESTIGE */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-title-center">
            <h1 className="luxury-title-large gold-gradient-text">Réservations & Conciergerie</h1>
            <div className="divider-gold-center"></div>
            <p className="luxury-subtitle">
              Sollicitez une table, privatisez nos salons ou renseignez-vous sur l'excellence de nos services.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-lg">
        <div className="luxury-contact-grid">
          
          {/* Formulaire de demande (The "Letter" to the Maître d'Hôtel) */}
          <div className="luxury-form-container">
            <div className="form-inner-border">
              <h3 className="form-title-premium">Demande de Renseignement</h3>
              <p className="form-intro-text">Un membre de notre équipe vous répondra dans les plus brefs délais.</p>
              
              <form className="luxury-form" onSubmit={(e) => e.preventDefault()}>
                <div className="luxury-input-group">
                  <label className="gold-text">Nom & Prénom</label>
                  <input type="text" placeholder="Votre illustre nom" required />
                </div>
                
                <div className="luxury-input-group">
                  <label className="gold-text">Coordonnées Électroniques</label>
                  <input type="email" placeholder="votre@email.dz" required />
                </div>
                
                <div className="luxury-input-group">
                  <label className="gold-text">Objet de votre demande</label>
                  <textarea 
                    placeholder="Comment pouvons-nous sublimer votre expérience chez L'Arôme ?" 
                    rows="5" 
                    required
                  ></textarea>
                </div>

                <button className="btn-luxury-gold-full">
                  <span>Transmettre au Maître d'Hôtel</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Informations de l'Établissement (The Sidebar) */}
          <div className="luxury-info-sidebar">
             <div className="info-card-premium">
               {/* Privilege Badge */}
               <div className="privilege-badge">
                 <ShieldCheck size={14} />
                 <span>Service Prioritaire</span>
               </div>

               <div className="info-item-lux">
                 <div className="icon-box-gold"><MapPin size={24} /></div>
                 <div className="info-content">
                   <span className="info-label">Le Palais</span>
                   <p className="info-value">{appSettings?.address || "Adresse en cours de chargement..."}</p>
                   <p className="info-sub">Alger, Algérie</p>
                 </div>
               </div>

               <div className="info-item-lux">
                 <div className="icon-box-gold"><Phone size={24} /></div>
                 <div className="info-content">
                   <span className="info-label">Ligne Directe</span>
                   <p className="info-value">{appSettings?.phone || "+213 (0) ..."}</p>
                   <p className="info-sub">Conciergerie dédiée</p>
                 </div>
               </div>

               <div className="info-item-lux">
                 <div className="icon-box-gold"><Clock size={24} /></div>
                 <div className="info-content">
                   <span className="info-label">Heures de Réception</span>
                   <p className="info-value">{appSettings?.hours || "Service Continu"}</p>
                   <p className="info-sub">Disponible sept jours sur sept</p>
                 </div>
               </div>
             </div>
             
             {/* Decorative Map Frame */}
             <div className="map-placeholder-luxury">
               <div className="map-inner-glow">
                 <MapPin size={30} className="gold-text-shimmer" />
                 <p>Géolocalisation du Palais</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};