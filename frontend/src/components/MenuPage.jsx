import { useStore } from '../context/StoreContext';
import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Filter, Utensils } from 'lucide-react';

export default function MenuPage() {
  const { products, categories } = useStore();
  
  // Initialize with 'all' for a more standard logic
  const [activeFilter, setActiveFilter] = useState('all');

  // 1. Filter out 'uncategorized' and empty categories at the data level
  const validCategories = useMemo(() => {
    return categories.filter(cat => 
      cat.slug !== 'uncategorized' && 
      cat.name.toLowerCase() !== 'uncategorized'
    );
  }, [categories]);

  // 2. Logic to filter products based on active category ID
  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.categories?.some(cat => cat.id === activeFilter));

  return (
    <div className="menu-luxury-page page-fade">
      {/* HEADER DE LA CARTE */}
      <section className="menu-hero">
        <div className="container">
          <div className="menu-header-content">
            <Utensils size={30} className="gold-text mb-md" />
            <h1 className="luxury-title-large">La Carte Signature</h1>
            <div className="divider-gold"></div>
            <p className="menu-description">
              Une odyssée culinaire à travers les saveurs de l’Algérie, 
              confectionnée avec les ingrédients les plus nobles de notre terroir.
            </p>
          </div>
        </div>
      </section>

      {/* FILTRES PRESTIGE */}
      <div className="container">
        <div className="filter-wrapper">
          <div className="filter-label">
            <Filter size={14} /> <span>Affiner la sélection :</span>
          </div>
          <div className="filter-list">
            {/* Manual 'Tous' button to ensure it always exists and is styled */}
            <button 
              onClick={() => setActiveFilter('all')}
              className={`luxury-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            >
              Tous les Mets
            </button>

            {validCategories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`luxury-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLE DE PRODUITS */}
        <section className="grid-premium py-md">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))
          ) : (
            <div className="no-products">
              <div className="divider-gold" style={{ margin: '0 auto 1rem' }}></div>
              <p>Nos chefs préparent actuellement de nouvelles créations pour cette sélection.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};