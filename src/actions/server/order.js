"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";

const { dbConnect, collections } = require("@/lib/dbConnect");

const orderCollection = dbConnect(collections.ORDER);

export const createOrder = async (payload, totalPrice) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  const cart = await getCart();
  if (cart.length == 0) {
    return { success: false };
  }
  const newOrder = {
    createdAt: new Date(),
    items: cart,
    ...payload,
    totalPrice,
  };
  const result = await orderCollection.insertOne(newOrder);
  if (Boolean(result.insertedId)) {
    await clearCart();
  }
  return {
    success: true,
  };
};
