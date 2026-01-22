import StoreProvider from './context/StoreContext'
import AppContent from './AppContent'
import Test from './context/Test'

import './index.css'
export default function App() {
  return (
    // <Test/>
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}