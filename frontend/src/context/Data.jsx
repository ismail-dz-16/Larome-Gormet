/**
 * 1. CONFIGURATION & MOCK DATA
 */
import { useEffect, useState } from "react";
import axios from "axios";

export const WC_CONFIG = {
  baseUrl : proccess.env.REACT_APP_WC_URL,
  user : proccess.env.REACT_APP_WC_KEY ,
  pass : proccess.enc.REACT_APP_WC_SECRET ,
}

export function usePlats() {
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartContent,setCartCount] = useState(0);
  const [categoriesHandle,setCategories] = useState([]);

  useEffect(() => {
    const productsUrl = `${WC_CONFIG.baseUrl}/wp-json/wc/v3/products?user_login=${WC_CONFIG.user}&password=${WC_CONFIG.pass}`;
    const cartUrl = `${WC_CONFIG.baseUrl}/wp-json/cocart/v2/cart`;
    const categoriesUrl = `${WC_CONFIG.baseUrl}/wp-json/wc/v3/products/categories?user_login=${WC_CONFIG.user}&password=${WC_CONFIG.pass}`;
    function getProducts(){
      axios
        .get(productsUrl)
        .then((res) => {setPlats(res.data)})
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
    function getCartContent(){
      axios
        .get(cartUrl, { withCredentials: true })
        .then((res) => {
          // CoCart v2 returns an array in res.data.items
          // CoCart v1 returns an object where keys are item hashes
          const items = res.data.items || res.data; 
          const count = Object.keys(items).length; // Count how many items
          setCartCount(count); 
        })
        .catch((err) => console.log("Cart fetch error:", err));
    }
    function getCategories(){
      axios
       .get(categoriesUrl)
       .then((res) => {
        const categories = res.data ;
        setCategories(categories);
       })
       .catch((err) => console.log('Error fetching categories:',err));
    }
    getProducts();
    getCartContent();
    getCategories();
  }, []);

  return { plats, loading, error , cartContent,categoriesHandle };
}

// Mock data for initial view (as requested)
export const MOCK_PLATTS = [
  { id: 1, name: "Grilled Salmon", price: "24.99", category: "Main Course", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80", description: "Fresh Atlantic salmon with seasonal vegetables.", rating: 4.8 },
  { id: 2, name: "Truffle Pasta", price: "18.50", category: "Pasta", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80", description: "Creamy tagliatelle with black truffle oil and parmesan.", rating: 4.9 },
  { id: 3, name: "Caesar Salad", price: "12.00", category: "Starters", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80", description: "Classic caesar with house-made dressing and croutons.", rating: 4.5 },
  { id: 4, name: "Chocolate Lava Cake", price: "9.50", category: "Desserts", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80", description: "Warm chocolate cake with a melting heart and vanilla ice cream.", rating: 5.0 },
];
