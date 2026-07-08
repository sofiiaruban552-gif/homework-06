import ProductCard from "./ProductCard";

import type { Product } from "@/types/product";

interface ProductListProps {
  products?: Product[];
}

const ProductList = ({ products = [] }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
