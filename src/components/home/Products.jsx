import { getProducts } from "@/actions/server/product";
import React from "react";
import ProductCard from "../cards/ProductCard";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4  gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
