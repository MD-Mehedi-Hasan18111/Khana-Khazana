import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeCard = ({ recipeDetails }) => {
  const { id, name, image, thumbnail, author, rating } = recipeDetails;

  return (
    <Link href={`/recipe-details/${id}`}>
      <div className="card">
        <Image
          src={thumbnail}
          className="rounded-md h-[300] w-[300]"
          alt={`${name}_image`}
          height={300}
          width={300}
        />
        <h4 className="my-2">{name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {rating.toFixed(1)}</span>
          <span>By: {author}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
