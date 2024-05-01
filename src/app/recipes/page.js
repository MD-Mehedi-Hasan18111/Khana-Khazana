import RecipeCard from "@/components/RecipeCard";
import { getAllRecipes } from "@/db/queries";
import React from "react";

const Recipes = async () => {
  const recipes = await getAllRecipes();

  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">Recipes</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {recipes?.map((recipe) => (
            <RecipeCard key={recipe?.id} recipeDetails={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
