import { useStore } from '../context/StoreContext';
import { Star, ChevronRight, Eye } from 'lucide-react';

export default function ProductCard({ product }) {
  const { navigate } = useStore();

  // Image de haute qualité ou placeholder élégant
  const imageUrl = product?.images?.[0]?.src || 'https://via.placeholder.com/600x400/111/D4AF37?text=Gastronomie';
  
  // Nettoyage de la description pour un aperçu propre
  const rawDescription = product?.description?.replace(/<[^>]*>?/gm, '') || '';
  const shortDescription = rawDescription.length > 70 
    ? rawDescription.substring(0, 70) + "..." 
    : rawDescription;

  // Formatage du prix en Dinars Algériens
  const formattedPrice = new Intl.NumberFormat('fr-DZ').format(product.price);

  return (
    <div className="luxury-product-card" onClick={() => navigate('detail', product)}>
      <div className="product-visual">
        <img src={imageUrl} alt={product.name} loading="lazy" className="product-img" />
        <div className="product-overlay">
          <span className="view-label"><Eye size={16} /> Explorer</span>
        </div>
        {product.categories?.[0] && (
          <div className="luxury-badge">{product.categories[0].name}</div>
        )}
      </div>

      <div className="product-content">
        <div className="product-meta">
          <div className="luxury-rating">
            <Star size={12} fill="var(--gold-primary)" color="var(--gold-primary)" />
            <span>{product.average_rating || '5.0'}</span>
          </div>
        </div>

        <h3 className="product-title">{product.name}</h3>
        
        <p className="product-description">
          {shortDescription}
        </p>

        <div className="product-footer">
          <span className="luxury-price-tag">{formattedPrice} <small>DA</small></span>
          <button className="btn-discover">
            <span>Détails</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}