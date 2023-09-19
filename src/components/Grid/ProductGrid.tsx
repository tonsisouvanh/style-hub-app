import React from "react";
import ProductCard from "../Card/ProductCard";
import { Product } from "../../types";
interface ProductGridProps {
  products: Product[];
  handleAddCartModal: (value: boolean, proId: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  handleAddCartModal,
}) => {
  if (!products) {
    return <h1>No products</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            handleAddCartModal={handleAddCartModal}
            product={product}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
