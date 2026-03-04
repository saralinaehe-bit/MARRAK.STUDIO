import { Link } from 'react-router-dom';
import { Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.slug}`} className="product-card">
      <div className="product-image">
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-dimensions">{product.dimensions}</p>
        <p className="product-price">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
