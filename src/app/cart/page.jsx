import { getCart } from "@/actions/server/cart";
import CartClient from "@/components/clientComponents/CartClient";
import React from "react";

const cartPage = async () => {
  const cartItems = await getCart();
  const formattedItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}

      <CartClient cartItem={formattedItems}></CartClient>
    </section>
  );
};

export default cartPage;
