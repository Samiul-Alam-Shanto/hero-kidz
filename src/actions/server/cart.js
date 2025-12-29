"use server";

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const { dbConnect, collections } = require("@/lib/dbConnect");

const cartCollection = dbConnect(collections.CART);

export const handleCart = async ({ product, inc = true }) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  //get cart item-->user email and product id

  const query = { email: user?.email, productId: product?._id };
  const isAdded = await cartCollection.findOne(query);

  //if exist: update the cart
  if (isAdded) {
    const updatedData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };
    const result = await cartCollection.updateOne(query, updatedData);
    return { success: Boolean(result.modifiedCount) };
  }
  // not exist: insert to cart
  else {
    const newData = {
      productId: product._id,
      email: user.email,
      quantity: 1,
      title: product.title,
      image: product.image,
      price: Math.round(
        product.price - (product.price * (product.discount ?? 0)) / 100
      ),
      username: user?.name,
    };
    const result = await cartCollection.insertOne(newData);
    return { success: Boolean(result.acknowledged) };
  }

  //   return { success: true };
};

export const getCart = cache(async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return [];

  const query = { email: user?.email };
  const result = await cartCollection.find(query).toArray();
  return result;
});

export const deleteItemsFromCart = async (id) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  if (!ObjectId.isValid(id)) {
    return { success: false };
  }
  const query = {
    _id: new ObjectId(id),
  };
  const result = await cartCollection.deleteOne(query);
  if (Boolean(result.deletedCount)) {
    revalidatePath("/cart");
  }
  return { success: Boolean(result.deletedCount) };
};
