"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find().toArray();
  return products;
};

export const getSingleProduct = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const query = { _id: new ObjectId(id) };
  const product = await dbConnect(collections.PRODUCTS).findOne(query);
  return product || {};
};
