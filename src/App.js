import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

import { CartProvider } from './contexts/CartContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
