import { useEffect, useState } from 'react';
import { supabase, Product } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    }

    loadProducts();
  }, []);

  return (
    <div className="shop-page">
      <div className="container">
        <div className="shop-header">
          <h1 className="page-title">Collection</h1>
          <p className="page-subtitle">
            Handcrafted rugs from the medina of Marrakech
          </p>
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
