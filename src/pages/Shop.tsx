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
      <div className="shop-container">
        <div className="shop-header">
          <h1 className="collection-title">Rug Collection</h1>
          <p className="collection-subtitle">
            Handwoven heritage from the Atlas Mountains
          </p>
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="luxury-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
