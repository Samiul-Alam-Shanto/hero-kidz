import { getCart } from "@/actions/server/cart";
import CartCard from "@/components/cards/CartCard";
import React from "react";

const cartPage = async () => {
  const cartItems = await getCart();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">My Cart</h1>
        <p className="text-gray-500 text-sm">
          {cartItems.length} item{cartItems.length !== 1 && "s"} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          Your cart is empty 🛒
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item) => (
              <CartCard
                key={item._id}
                item={{ ...item, _id: item._id.toString() }}
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
    </section>
  );
};

export default cartPage;
