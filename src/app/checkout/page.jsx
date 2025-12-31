import { getCart } from "@/actions/server/cart";
import CheckoutClient from "@/components/clientComponents/CheckoutClient";
import React from "react";

const Checkout = async () => {
  const cartItems = await getCart();
  const formattedItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return (
    <div>
      <div>
        <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">
          Check Out
        </h2>
      </div>
      <CheckoutClient cartItems={formattedItems}></CheckoutClient>
    </div>
  );
};

export default Checkout;
