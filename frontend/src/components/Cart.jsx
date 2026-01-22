import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { WC_CONFIG } from '../context/Data'; 
import axios from 'axios';
import { 
  Trash2, ShoppingBag, ArrowLeft, CreditCard, 
  ShieldCheck, Loader2, XCircle, Clock, PackageCheck 
} from 'lucide-react';

export default function Cart() {
  const { cartItems = [], cartContent, navigate, removeItem } = useStore();

  // States
  const [phone, setPhone] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeOrders, setActiveOrders] = useState([]); // Tracks orders made in this session

  // 1. Create Order Logic
  async function handleOrderSubmit(e) {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setLoading(true);
    const itemToOrder = cartItems[0]; // Assuming one item logic

    const orderData = {
      payment_method: "cod",
      billing: { first_name: customerName, address_1: address, phone: phone, country: "DZ" },
      line_items: [{ product_id: itemToOrder.id, quantity: itemToOrder.quantity.value }]
    };

    try {
      const response = await axios.post(
        `${WC_CONFIG.baseUrl}/wp-json/wc/v3/orders`, 
        orderData, 
        { params: { consumer_key: WC_CONFIG.key, consumer_secret: WC_CONFIG.secret } }
      );

      if (response.status === 201) {
        // A. Add to local active orders list
        setActiveOrders(prev => [response.data, ...prev]);
        
        // B. Logic: Remove from cart so user can add another item
        removeItem(itemToOrder.item_key);
        
        // C. Clean form if you want, or keep for next order
        setLoading(false);
      }
    } catch (err) {
      console.error("Order Failed", err);
      setLoading(false);
      alert("Erreur lors de la commande.");
    }
  }

  // 2. Cancel Order Logic (PUT request to Backend)
  async function cancelOrder(orderId) {
    const confirmCancel = window.confirm("Voulez-vous vraiment annuler cette commande ?");
    if (!confirmCancel) return;

    try {
      const response = await axios.put(
        `${WC_CONFIG.baseUrl}/wp-json/wc/v3/orders/${orderId}`,
        { status: 'cancelled' },
        { params: { consumer_key: WC_CONFIG.key, consumer_secret: WC_CONFIG.secret } }
      );

      if (response.status === 200) {
        // Update local state to show 'cancelled'
        setActiveOrders(prev => prev.map(o => o.id === orderId ? response.data : o));
      }
    } catch (err) {
      console.error("Cancel Failed", err);
    }
  }

  // Helper: Status Badge Component
  const StatusBadge = ({ status }) => {
    const styles = {
      pending: { color: '#f39c12', icon: <Clock size={14}/>, label: 'En attente' },
      processing: { color: '#3498db', icon: <Loader2 size={14} className="spin"/>, label: 'Préparation' },
      completed: { color: '#27ae60', icon: <PackageCheck size={14}/>, label: 'Livré' },
      cancelled: { color: '#e74c3c', icon: <XCircle size={14}/>, label: 'Annulé' }
    };
    const s = styles[status] || styles.pending;
    return (
      <span className="status-pill" style={{ color: s.color, border: `1px solid ${s.color}` }}>
        {s.icon} {s.label}
      </span>
    );
  };

  return (
    <div className="luxury-cart-container py-lg">
      <div className="container">
        <header className="cart-header-luxury">
          <button className="back-link-premium" onClick={() => navigate('menu')}>
            <ArrowLeft size={16} /> Retour au Menu
          </button>
          <h1 className="luxury-page-title">Gestion des Commandes</h1>
        </header>

        <div className="luxury-cart-grid">
          
          {/* LEFT SIDE: Current Cart Item OR Active Orders List */}
          <section className="luxury-main-col">
            
            {/* 1. Show Current Cart Item (if exists) */}
            {cartItems.length > 0 ? (
              <div className="current-item-section mb-xl">
                <h3 className="section-label-gold">Article en attente de commande</h3>
                {cartItems.map((item) => (
                  <div key={item.item_key} className="luxury-item-card active-card">
                    <img src={item.featured_image} alt={item.name} className="item-thumb" />
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p className="use-gold-text">{item.price / 100} DA</p>
                    </div>
                    <button className="remove-btn" onClick={() => removeItem(item.item_key)}><Trash2 size={18}/></button>
                  </div>
                ))}
              </div>
            ) : activeOrders.length === 0 && (
              <div className="empty-msg">Votre panier est vide.</div>
            )}

            {/* 2. Show Active Orders History (The ones just made) */}
            {activeOrders.length > 0 && (
              <div className="orders-history-section mt-lg">
                <h3 className="section-label-gold">Suivi de vos commandes récentes</h3>
                {activeOrders.map((order) => (
                  <div key={order.id} className="order-status-card">
                    <div className="order-info-row">
                      <span className="order-number">Commande #{order.id}</span>
                      <StatusBadge status={order.status} />
                    </div>
                    <div className="order-items-summary">
                      {order.line_items.map(li => <p key={li.id}>{li.quantity}x {li.name}</p>)}
                    </div>
                    
                    {order.status !== 'cancelled' && order.status !== 'completed' && (
                      <button className="btn-cancel-light" onClick={() => cancelOrder(order.id)}>
                        Annuler la commande
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* RIGHT SIDE: Checkout Form (Only if something is in cart) */}
          <aside className="luxury-sidebar">
            {cartItems.length > 0 ? (
              <div className="premium-summary-card">
                <h4 className="form-heading">Finaliser la commande</h4>
                <form className="luxury-checkout-form" onSubmit={handleOrderSubmit}>
                  <div className="luxury-input-group">
                    <label>Nom</label>
                    <input type="text" required value={customerName} onChange={(e)=>setCustomerName(e.target.value)} />
                  </div>
                  <div className="luxury-input-group">
                    <label>Téléphone</label>
                    <input type="tel" required value={phone} onChange={(e)=>setPhone(e.target.value)} />
                  </div>
                  <div className="luxury-input-group">
                    <label>Adresse</label>
                    <textarea required value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                  </div>
                  <button type="submit" className="btn-luxury-action full-width" disabled={loading}>
                    {loading ? <Loader2 className="spin" /> : 'Confirmer & Commander'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="info-box-gold">
                <p>Ajoutez un article depuis le menu pour passer une nouvelle commande.</p>
                <button className="btn-luxury-gold full-width mt-md" onClick={()=>navigate('menu')}>Menu</button>
              </div>
            )}
          </aside>

        </div>
      </div>
    </div>
  );
}