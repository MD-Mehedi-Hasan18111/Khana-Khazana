import RecipeCard from "@/components/RecipeCard";
import { getRecipesByCategory } from "@/db/queries";
import { notFound } from "next/navigation";
import React from "react";

const CategorizedRecipes = async ({ params: { categoryName } }) => {
  // const encodedCategory = encodeURIComponent(categoryName);
  const decodedCategoryName = decodeURIComponent(categoryName);

  const recipes = await getRecipesByCategory(decodedCategoryName);

  if (recipes?.length === 0) {
    notFound();
  }

  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">{decodedCategoryName}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {recipes?.map((recipe) => (
            <RecipeCard key={recipe?.id} recipeDetails={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorizedRecipes;
