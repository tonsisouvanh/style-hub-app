import React, { useEffect } from "react";
import ProductCard from "../Card/ProductCard";
import { Product } from "../../types";
interface ProductGridProps {
  products: Product[]; // Pass the array of products as a prop
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (!products) {
    return <h1>No products</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
