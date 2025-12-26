"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;
  //check payload
  if (!email || !password) return null;

  //check user
  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) return null;

  //crate user

  const newUser = {
    provider: "credentials",
    role: "user",
    createdAt: new Date(),
    name,
    email,
    password: await bcrypt.hash(password, 14),
  };
  //insert user

  const result = await dbConnect(collections.USERS).insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};
