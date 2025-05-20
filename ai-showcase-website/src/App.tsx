import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/homepage/HeroSection';
import ProductShowcase from './components/homepage/ProductShowcase';
import ProductDetailPage from './components/product/ProductDetailPage';
import AboutPage from './components/staticpages/AboutPage';
import ContactPage from './components/staticpages/ContactPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
    </>
  );
}

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
