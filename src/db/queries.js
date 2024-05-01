import { Recipe } from "@/models/recipes";
import { User } from "@/models/users";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";
import mongoose from "mongoose";

async function createUser(user) {
  const isExistUser = await User.find({ email: user.email });
  if (!isExistUser) {
    return await User.create(user);
  } else {
    throw new Error("User already registered.");
  }
}

async function findUserByCredentials(credentials) {
  const user = await User.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function getAllRecipes() {
  try {
    const allRecipes = await Recipe.find().lean();
    return replaceMongoIdInArray(allRecipes);
  } catch (error) {
    throw error;
  }
}

async function getRecipesByCategory(categoryName) {
  try {
    const allRecipes = await Recipe.find({ category: categoryName }).lean();
    return replaceMongoIdInArray(allRecipes);
  } catch (error) {
    throw error;
  }
}

async function getRecipeById(recipeId) {
  try {
    const recipe = await Recipe.findById(recipeId).lean();
    if (recipe) {
      return replaceMongoIdInObject(recipe);
    }
  } catch (error) {
    return null;
  }
}

async function updateUserFavourites(recipeId, authUser) {
  try {
    const user = await User.findById(authUser.id);

    if (user) {
      const foundRecipe = user.favourites.find(
        (id) => id.toString() === recipeId
      );

      if (foundRecipe) {
        user.favourites.pull(new mongoose.Types.ObjectId(recipeId));
      } else {
        user.favourites.push(new mongoose.Types.ObjectId(recipeId));
      }

      const res = await user.save();
      return res;
    }
  } catch (error) {
    throw error;
  }
}

export {
  createUser,
  findUserByCredentials,
  getAllRecipes,
  getRecipesByCategory,
  getRecipeById,
  updateUserFavourites,
};
