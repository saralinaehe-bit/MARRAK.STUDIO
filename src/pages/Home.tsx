import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase, Product } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeaturedProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .order('display_order', { ascending: true })
        .limit(6);

      if (!error && data) {
        setFeaturedProducts(data);
      }
      setLoading(false);
    }

    loadFeaturedProducts();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">WOVEN HERITAGE, ELEVATED.</h1>
          <p className="hero-subtitle">FROM THE ATLAS MOUNTAINS TO THE WORLD</p>
          <Link to="/shop" className="hero-btn">SHOP RUGS</Link>
        </div>
      </section>

      <section className="featured-collection">
        <div className="container">
          <h2 className="section-title">Featured Collection</h2>
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="product-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="about-preview">
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Marrakech studio"
            />
          </div>
          <div className="about-text">
            <h2>Crafted in Marrakech</h2>
            <p>
              Each rug is handwoven by master artisans in the medina of Marrakech,
              using techniques passed down through generations. We work directly with
              Berber cooperatives to create contemporary pieces that honor traditional
              craftsmanship.
            </p>
            <p>
              Our approach is minimal and refined, focusing on natural materials,
              neutral palettes, and architectural forms that complement modern interiors.
            </p>
            <Link to="/about" className="link-arrow">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Explore the Collection</h2>
          <Link to="/shop" className="btn-primary">
            View All Rugs
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-social">
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Pinterest</a>
          </div>
          <div className="footer-email">
            <a href="mailto:hello@marrakechrugs.com" className="footer-link">
              hello@marrakechrugs.com
            </a>
          </div>
          <div className="footer-copy">
            <p>&copy; 2026 MARRAK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
