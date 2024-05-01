import React from "react";
import RecipeCard from "../RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        {recipes?.slice(0, 9)?.map((recipe) => (
          <RecipeCard key={recipe?.id} recipeDetails={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
