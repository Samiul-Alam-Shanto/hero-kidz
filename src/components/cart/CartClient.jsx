"use client";
import { useState } from "react";
import CartCard from "../cards/CartCard";

const CartClient = ({ cartItem }) => {
  const [items, setItems] = useState(cartItem);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id != id));
  };
  const updateQuantity = (id, quantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: quantity } : item
      )
    );
  };
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">My Cart</h1>
        <p className="text-gray-500 text-sm">
          {items.length} item{items.length !== 1 && "s"} in your cart
        </p>
      </div>
      {items.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          Your cart is empty 🛒
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {items.map((item) => (
              <CartCard
                key={item._id}
                item={{ ...item, _id: item._id.toString() }}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit sticky top-24">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <hr className="mb-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>৳{subtotal}</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartClient;
