"use client";

import { createOrder } from "@/actions/server/order";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CheckoutClient = ({ cartItems }) => {
  // 1. Calculate Totals based on cartItems prop
  // console.log(cartItems);
  const router = useRouter();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCost = 50; // You can make this dynamic based on logic
  const taxRate = 0.05; // 5% Tax
  const taxAmount = subtotal * taxRate;
  const grandTotal = subtotal + shippingCost + taxAmount;

  // Form State
  const [formData, setFormData] = useState({
    name: cartItems[0]?.username || "",
    email: cartItems[0]?.email || "", // Pre-fill from cart if available
    address: "",
    city: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // Now safe — we allow default first, then prevent if needed

    const form = e.target.form; // or document.getElementById('checkout-form')

    if (!form.checkValidity()) {
      form.reportValidity(); // Shows native browser validation messages
      return;
    }

    // console.log("Form is valid:", formData);
    const result = await createOrder(formData, grandTotal);
    if (result.success) {
      alert("Order completed");
      router.push("/");
    } else {
      alert("something went wrong");
    }
    // console.log("Order Placed", { formData, cartItems, grandTotal });
    // alert(`Order placed successfully! Total: $${grandTotal.toFixed(2)}`);
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10 font-sans">
      {/* Top Header / Breadcrumbs */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <ul className="steps steps-vertical lg:steps-horizontal w-full max-w-lg mx-auto">
          <li className="step step-primary">Cart</li>
          <li className="step step-primary">Shipping</li>
          <li className="step">Payment</li>
          <li className="step">Confirmation</li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: Shipping Form */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Shipping Information</h2>

              <form
                id="checkout-form"
                onSubmit={handlePlaceOrder}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/*  Name */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={formData.name}
                    className="input input-bordered w-full focus:input-primary"
                    onChange={handleInputChange}
                    required
                    readOnly
                  />
                </div>

                {/* Email */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={formData.email}
                    className="input input-bordered w-full focus:input-primary"
                    readOnly
                  />
                </div>

                {/* Address */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text">Street Address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Main St, Apt 4B"
                    className="input input-bordered w-full focus:input-primary"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* City */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="New York"
                    className="input input-bordered w-full focus:input-primary"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Postal Code */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ZIP / Postal Code</span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    placeholder="10001"
                    className="input input-bordered w-full focus:input-primary"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Payment Method Placeholder (Modern Radio Selection) */}
          <div className="card bg-base-100 shadow-xl mt-6 border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">Payment Method</h2>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:border-primary transition bg-base-100">
                  <input
                    type="radio"
                    name="payment"
                    className="radio radio-primary"
                    defaultChecked
                  />
                  <span className="font-medium">Credit Card</span>
                  <div className="ml-auto flex gap-2">
                    <span className="badge badge-outline">Visa</span>
                    <span className="badge badge-outline">Mastercard</span>
                  </div>
                </label>
                <label className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:border-primary transition bg-base-100">
                  <input
                    type="radio"
                    name="payment"
                    className="radio radio-primary"
                  />
                  <span className="font-medium">PayPal</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Order Summary (Sticky) */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl sticky top-10 border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">Order Summary</h2>

              {/* Cart Items List */}
              <div className="flex flex-col gap-4 max-h-80 overflow-y-auto mb-4 pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex gap-3 items-center">
                    <div className="avatar">
                      <div className="w-16 h-16 rounded-xl border border-base-300">
                        {/* Using standard img for simplicity, use Next/Image for optimization */}
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="divider my-0"></div>

              {/* Calculations */}
              <div className="space-y-2 py-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">${shippingCost}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Estimated Tax</span>
                  <span className="font-medium">${taxAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="divider my-0"></div>

              <div className="flex justify-between items-center py-4">
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-extrabold text-primary">
                  $
                  {grandTotal.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <button
                onClick={handlePlaceOrder}
                form="checkout-form"
                type="submit"
                className="btn btn-primary btn-block text-lg shadow-lg hover:shadow-primary/50 transition-all"
              >
                Pay ${grandTotal.toFixed(2)}
              </button>

              <p className="text-xs text-center text-gray-400 mt-4">
                Secure 256-bit SSL encrypted payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutClient;
