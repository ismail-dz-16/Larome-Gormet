import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const ck = 'ck_e23909842a8f9e3e167da3ae89e5a9a6eebbdeef'; //key
    // const cs = 'cs_568a07c9f4197b7c9df954510b0d78180cada3e8'; //secret
    const user = 'ck_e23909842a8f9e3e167da3ae89e5a9a6eebbdeef'; 
    const pass = 'cs_568a07c9f4197b7c9df954510b0d78180cada3e8'; 

    const token = btoa(`${user}:${pass}`);  

        // Notice we use wp_user and wp_password (supported by the Basic Auth plugin)
    const url = `http://127.0.0.1/wordpress/wp-json/wc/v3/products?user_login=${user}&password=${pass}`;

    axios.get(url)
    .then(res => {
        console.log("FINALLY!", res.data);
        setProducts(res.data);
    })
    .catch(err => console.log("Still failing:", err.response.data));

  }, []);

  if (loading) return <h2 style={{ textAlign: 'center' }}>Loading your shop...</h2>;

  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>My Ubuntu Store 🚀</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {products.map(item => (
          <div key={item.id} style={{ 
            backgroundColor: '#fff', 
            padding: '15px', 
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <img 
              src={item.images[0]?.src || 'https://via.placeholder.com/150'} 
              alt={item.name} 
              style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }} 
            />
            <h3 style={{ margin: '15px 0 10px' }}>{item.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#2ecc71', fontSize: '1.2rem' }}>
              ${item.price || '0.00'}
            </p>
            <button style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;