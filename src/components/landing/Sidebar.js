import { extractUniqueCategories } from "@/utils";
import Link from "next/link";
import React from "react";

const Sidebar = ({ recipes }) => {
  const categories = extractUniqueCategories(recipes);

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {categories?.map((category) => (
          <li key={category}>
            <Link href={`/recipes/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
