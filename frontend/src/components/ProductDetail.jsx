import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Star, ShoppingBag, ArrowLeft, Loader2, Award, CheckCircle } from 'lucide-react';
import parse from 'html-react-parser';
import { WC_CONFIG } from '../context/Data';
import axios from 'axios';

export default function ProductDetail() {
  const { selectedProduct, navigate, refreshCart } = useStore();
  const [isAdding, setIsAdding] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!selectedProduct) return (
    <div className="container py-lg luxury-text-center">
      <h2 className="gold-text">Mets introuvable...</h2>
      <button className="btn-luxury-outline mt-md" onClick={() => navigate('menu')}>Retour à La Carte</button>
    </div>
  );

  const handleAddToCart = async (productId) => {
    setIsAdding(true);
    setSuccess(false);
    try {
      const response = await axios.post(
        `${WC_CONFIG.baseUrl}/wp-json/cocart/v2/cart/add-item`,
        { id: productId.toString(), quantity: "1" },
        { withCredentials: true }
      );

      const cartKey = response.data.cart_key;
      localStorage.setItem('cocart_key', cartKey);
      
      await refreshCart(); 
      setSuccess(true);
      
      // Petit délai pour montrer le succès avant de potentiellement naviguer
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Erreur d'ajout:", error.response?.data);
    } finally {
      setIsAdding(false);
    }
  };

  const formattedPrice = new Intl.NumberFormat('fr-DZ').format(selectedProduct.price);

  return (
    <div className="luxury-detail-wrapper page-fade">
      <div className="container py-lg">
        <button className="back-link-premium" onClick={() => navigate('menu')}>
          <ArrowLeft size={16} /> Retour à La Carte Signature
        </button>

        <div className="detail-premium-grid">
          {/* Section Image avec Cadre Or */}
          <div className="detail-visual-frame">
            <div className="frame-border">
              <img 
                src={selectedProduct?.images?.[0]?.src || 'https://via.placeholder.com/600'} 
                alt={selectedProduct.name} 
                className="main-detail-img"
              />
            </div>
            <div className="luxury-badge-corner">
              <Award size={18} />
              <span>Excellence</span>
            </div>
          </div>

          {/* Section Informations */}
          <div className="detail-content-premium">
            <header className="detail-header">
              <span className="premium-tag">{selectedProduct.categories?.[0]?.name || 'Tradition'}</span>
              <h1 className="luxury-product-title">{selectedProduct.name}</h1>
              
              <div className="rating-luxury-row">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.floor(selectedProduct.average_rating || 5) ? "var(--gold-primary)" : "none"} color="var(--gold-primary)" />
                  ))}
                </div>
                <span>Note d'Excellence ({selectedProduct.average_rating || '5.0'})</span>
              </div>
            </header>

            <div className="detail-divider"></div>

            <div className="composition-box">
              <h3>Composition & Saveurs</h3>
              <div className="luxury-description">
                {parse(selectedProduct.description || 'Une création culinaire unique préparée avec passion.')}
              </div>
            </div>

            <div className="purchase-area">
              <div className="price-display-premium">
                <span className="price-label">Prix de Dégustation</span>
                <span className="price-amount">{formattedPrice} <small>DA</small></span>
              </div>
              
              <button 
                className={`btn-luxury-action ${isAdding ? 'loading' : ''} ${success ? 'success' : ''}`}
                onClick={() => handleAddToCart(selectedProduct.id)}
                disabled={isAdding}
              >
                {isAdding ? (
                  <Loader2 className="animate-spin" size={22} />
                ) : success ? (
                  <>
                    <CheckCircle size={22} />
                    Ajouté au Panier
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    Déguster ce Mets
                  </>
                )}
              </button>
              
              <p className="delivery-promise">Préparation artisanale à la commande • Service Premium</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}