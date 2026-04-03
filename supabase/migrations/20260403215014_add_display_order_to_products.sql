/*
  # Add display order column to products

  1. Changes
    - Add `display_order` column to `products` table with integer type
    - Set default value to 999 for existing products
    - Create index on display_order for efficient sorting

  2. Notes
    - Existing products will get display_order = 999
    - Lower numbers appear first in the collection
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'display_order'
  ) THEN
    ALTER TABLE products ADD COLUMN display_order integer DEFAULT 999;
    CREATE INDEX IF NOT EXISTS idx_products_display_order ON products(display_order);
  END IF;
END $$;
