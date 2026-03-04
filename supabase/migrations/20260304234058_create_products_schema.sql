/*
  # E-commerce Schema for Marrakech Rugs

  1. New Tables
    - `collections`
      - `id` (uuid, primary key)
      - `name` (text) - Collection name
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Collection description
      - `created_at` (timestamptz)
    
    - `products`
      - `id` (uuid, primary key)
      - `collection_id` (uuid, foreign key) - References collections
      - `name` (text) - Product name
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Product description
      - `price` (numeric) - Product price
      - `dimensions` (text) - Rug dimensions
      - `material` (text) - Materials used
      - `origin` (text) - Origin/region
      - `image_url` (text) - Primary product image
      - `gallery_images` (text[]) - Additional images
      - `featured` (boolean) - Show on homepage
      - `in_stock` (boolean) - Availability status
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (no auth required for browsing)
    - Products are publicly viewable for e-commerce
*/

-- Create collections table
CREATE TABLE IF NOT EXISTS collections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id uuid REFERENCES collections(id) ON DELETE SET NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  price numeric NOT NULL,
  dimensions text DEFAULT '',
  material text DEFAULT '',
  origin text DEFAULT 'Marrakech, Morocco',
  image_url text NOT NULL,
  gallery_images text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public read access for collections (e-commerce site)
CREATE POLICY "Anyone can view collections"
  ON collections FOR SELECT
  TO anon
  USING (true);

-- Public read access for products (e-commerce site)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_collection_id ON products(collection_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_collections_slug ON collections(slug);
