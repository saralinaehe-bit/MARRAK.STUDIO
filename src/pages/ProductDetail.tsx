import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase, Product } from '../lib/supabase';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    async function loadProduct() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (!error && data) {
        setProduct(data);
        setSelectedImage(data.image_url);
      }
      setLoading(false);
    }

    loadProduct();
  }, [slug]);

  if (loading) {
    return <div className="loading-page">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product not found</h1>
        <Link to="/shop">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-layout">
        <div className="product-images">
          <div className="main-image">
            <img src={selectedImage} alt={product.name} />
          </div>
          {product.gallery_images.length > 0 && (
            <div className="image-gallery">
              <button
                className={`gallery-thumb ${selectedImage === product.image_url ? 'active' : ''}`}
                onClick={() => setSelectedImage(product.image_url)}
              >
                <img src={product.image_url} alt={product.name} />
              </button>
              {product.gallery_images.map((img, index) => (
                <button
                  key={index}
                  className={`gallery-thumb ${selectedImage === img ? 'active' : ''}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`${product.name} ${index + 2}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-details">
          <div className="product-header-section">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-subtitle">Atlas Mountains, Morocco</p>
          </div>

          <div className="product-specs">
            <div className="spec-row">
              <span className="spec-label">Size</span>
              <span className="spec-value">{product.dimensions}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Material</span>
              <span className="spec-value">{product.material}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Origin</span>
              <span className="spec-value">{product.origin}</span>
            </div>
          </div>

          <div className="product-story">
            <p className="story-text">{product.description}</p>
            <p className="story-text">
              Handwoven by master artisans in the heart of Morocco, this piece carries the heritage of generations.
              Each knot and pattern tells a story of tradition, craftsmanship, and the timeless beauty of Amazigh culture.
            </p>
          </div>

          <div className="product-actions">
            <div className="product-price-line">
              <span className="price-label">Price</span>
              <span className="price-value">${product.price.toLocaleString()}</span>
            </div>
            <button className="btn-inquire" disabled={!product.in_stock}>
              {product.in_stock ? 'Inquire About This Piece' : 'Sold'}
            </button>
            <p className="inquiry-note">
              Each rug is a unique work of art. Contact us for additional imagery, detailed measurements, and shipping arrangements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
