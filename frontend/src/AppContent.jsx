import { useStore } from "./context/StoreContext";
import Home from "./components/Home";
import MenuPage from './components/MenuPage';
import About from './components/About';
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';

export default function AppContent() {
  const { currentPage } = useStore();

  // Logique de rendu avec "Smooth Scroll" automatique lors du changement de page
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'menu': return <MenuPage />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'detail': return <ProductDetail />;
      case 'cart': return <Cart />;
      default: return <Home />;
    }
  };

  return (
    <div className={`app-wrapper page-${currentPage}`}>
      {/* Navbar reste fixe pour la navigation fluide */}
      <Navbar />
      
      {/* Le conteneur "page-transition-wrapper" permet d'appliquer 
         des animations CSS luxueuses (fade-in/gold-shimmer) 
      */}
      <main className="main-content premium-gradient">
        <div className="content-inner">
          {renderPage()}
        </div>
      </main>

      <Footer />
      
      {/* Overlay de décoration typique algérien (discret) */}
      <div className="zellige-overlay"></div>
    </div>
  );
}