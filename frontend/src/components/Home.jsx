import { useStore } from '../context/StoreContext';
import ProductCard from './ProductCard';
import { ChevronRight, Award, UtensilsCrossed } from 'lucide-react';

export default function Home() {
  const { navigate, products } = useStore();

  return (
    <div className="page-fade luxury-home">
      {/* SECTION HERO : L'ENTRÉE AU PALAIS */}
      <section className="hero-luxury">
        <div className="hero-video-overlay"></div>
        <div className="container hero-content-premium">
          <div className="prestige-tag">
            <Award size={14} className="gold-text" />
            <span>Haute Gastronomie Algérienne</span>
          </div>
          
          <h1 className="hero-title-main">
            L'Art de la Table <br/>
            <span className="gold-gradient-text">Signé L'Arôme</span>
          </h1>
          
          <p className="hero-subtitle">
            Une immersion sensorielle au cœur de l'héritage algérien. 
            Découvrez une cuisine d'exception où tradition séculaire et 
            modernité se rencontrent dans une harmonie parfaite.
          </p>

          <div className="hero-actions-luxury">
            <button className="btn-luxury-gold" onClick={() => navigate('menu')}>
              Découvrir La Carte
              <ChevronRight size={18} />
            </button>
            <button className="btn-luxury-outline" onClick={() => navigate('about')}>
              Notre Héritage
            </button>
          </div>
        </div>
      </section>

      {/* SECTION SUGGESTIONS : LES PÉPITES DU PALAIS */}
      <section className="container py-luxury">
        <div className="section-header-center">
          <UtensilsCrossed size={24} className="gold-text mb-sm" />
          <h2 className="luxury-section-title">Les Suggestions du Grand Chef</h2>
          <div className="divider-gold-center"></div>
          <p className="section-subtitle">
            Une sélection rigoureuse de nos créations les plus emblématiques ce mois-ci.
          </p>
        </div>

        <div className="grid-premium">
          {products.slice(0, 3).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="view-all-container">
          <button className="btn-link-gold" onClick={() => navigate('menu')}>
            Voir l'intégralité de la carte <span>— Exploration</span>
          </button>
        </div>
      </section>
    </div>
  );
};