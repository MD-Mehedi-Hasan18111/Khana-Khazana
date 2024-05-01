"use server";

import {
  createUser,
  findUserByCredentials,
  updateUserFavourites,
} from "@/db/queries";
import { replaceMongoIdInObject } from "@/utils";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

async function loginUser(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredentials(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

async function addFavourite(recipeId, auth) {
  try {
    const res = await updateUserFavourites(recipeId, auth);
    return replaceMongoIdInObject(res?._doc);
  } catch (error) {
    throw error;
  }
}

export { registerUser, loginUser, addFavourite };
