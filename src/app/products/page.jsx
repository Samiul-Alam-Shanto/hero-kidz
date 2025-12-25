import Products from "@/components/home/Products";
import React from "react";

export const metadata = {
  title: "All Products",
  description:
    "Browse all Hero Kidz products including educational toys, learning kits, and fun kids accessories.",

  openGraph: {
    title: "All Products | Hero Kidz",
    description:
      "Explore all kids toys and educational products available at Hero Kidz.",
    images: [
      {
        url: "https://i.ibb.co.com/Z1Y5Qknv/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://i.ibb.co.com/Z1Y5Qknv/image.png"],
  },
};

const ProductsPage = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default ProductsPage;
