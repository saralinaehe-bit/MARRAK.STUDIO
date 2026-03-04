import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  collection_id: string | null;
  name: string;
  slug: string;
  description: string;
  price: number;
  dimensions: string;
  material: string;
  origin: string;
  image_url: string;
  gallery_images: string[];
  featured: boolean;
  in_stock: boolean;
  created_at: string;
};

export type Collection = {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
};
