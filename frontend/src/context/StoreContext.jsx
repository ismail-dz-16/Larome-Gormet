import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { MOCK_PLATTS, usePlats } from './Data';
import { WC_CONFIG } from './Data';
import axios from 'axios';

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartContent, setCartContent] = useState(0);
  const [cartItems, setCartItems] = useState([]); // <--- ADD THIS

  const { plats, loading: platsLoading ,categoriesHandle} = usePlats();
  const products = plats.length > 0 ? plats : MOCK_PLATTS;
  const categories = categoriesHandle.length > 0 ? categoriesHandle : [];
  const refreshCart = useCallback(async () => {
    const savedKey = localStorage.getItem('cocart_key');
    const cartUrl = savedKey 
      ? `${WC_CONFIG.baseUrl}/wp-json/cocart/v2/cart?cart_key=${savedKey}`
      : `${WC_CONFIG.baseUrl}/wp-json/cocart/v2/cart`;

    try {
      const res = await axios.get(cartUrl, { withCredentials: true });
      
      // CoCart returns items in an array
      const items = res.data.items || [];
      setCartItems(items); // <--- UPDATE THE ITEMS STATE
      
      const total = items.reduce((sum, item) => sum + parseInt(item.quantity.value), 0);
      setCartContent(total);
    } catch (err) {
      console.error("Cart refresh error:", err);
      setCartItems([]); // Reset to empty array on error to prevent crashes
    }
  }, []);

  const removeItem = async (itemKey) => {
    const savedKey = localStorage.getItem('cocart_key');
    const url = `${WC_CONFIG.baseUrl}/wp-json/cocart/v2/cart/item/${itemKey}?cart_key=${savedKey}`;
    
    try {
      await axios.delete(url, { withCredentials: true });
      await refreshCart(); 
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const navigate = (page, data = null) => {
    if (data) setSelectedProduct(data);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const appSettings = {
    name: "L'Arôme Gourmet",
    address: "said hamdin",
    phone: "+33 1 23 45 67 89",
    hours: "11:00 AM - 11:00 PM"
  };

  return (
    <StoreContext.Provider value={{ 
      currentPage, 
      navigate, 
      selectedProduct, 
      products, 
      appSettings, 
      loading: platsLoading, 
      cartContent, 
      cartItems,
      refreshCart,
      removeItem, 
      categories
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);