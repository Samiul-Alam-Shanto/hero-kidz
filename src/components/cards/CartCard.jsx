"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import {
  decreaseItemDb,
  deleteItemsFromCart,
  increaseItemDb,
} from "@/actions/server/cart";

const CartCard = ({ item, removeItem, updateQuantity }) => {
  const { _id, title, image, price, quantity } = item;

  const handleRemove = (id) => {
    deleteItemsFromCart(id);

    alert("removed");
    removeItem(id);
  };
  const onIncrease = async () => {
    const result = await increaseItemDb(_id, quantity);
    if (result.success) {
      alert("quantity increased");
      updateQuantity(_id, quantity + 1);
    }
  };

  const onDecrease = async () => {
    const result = await decreaseItemDb(_id, quantity);
    if (result.success) {
      alert("quantity decreased");
      updateQuantity(_id, quantity - 1);
    }
  };

  return (
    <div className="flex gap-4 bg-white rounded-xl shadow-sm p-4">
      {/* Image */}
      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h2 className="font-medium leading-snug">{title}</h2>
        <p className="text-sm text-gray-500">৳{price} per item</p>

        <div className="flex items-center justify-between mt-4">
          {/* Quantity (UI only – backend later) */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={onDecrease}
              className="px-3 py-1 hover:bg-gray-100"
            >
              −
            </button>
            <span className="px-4 text-sm">{quantity}</span>
            <button
              onClick={onIncrease}
              className="px-3 py-1 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={() => handleRemove(_id)}
            className="text-red-500 cursor-pointer hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Item Total */}
      <div className="font-semibold">৳{price * quantity}</div>
    </div>
  );
};

export default CartCard;
