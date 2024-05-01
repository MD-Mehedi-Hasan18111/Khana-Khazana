"use client";

import { useParams } from "next/navigation";
import React from "react";

const NotFoundRecipe = () => {
  const { recipeId } = useParams();

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h2 className="text-center text-xl text-[#eb4a36]">
        Sorry! The recipe could not found with this ID:{" "}
        <span className="text-[#282828] font-[600]">{recipeId}</span>
      </h2>
    </div>
  );
};

export default NotFoundRecipe;
