import Loading from "@/components/Loading";
import Header from "@/components/landing/Header";
import RecipeList from "@/components/landing/RecipeList";
import Sidebar from "@/components/landing/Sidebar";
import { getAllRecipes } from "@/db/queries";
import React, { Suspense } from "react";

export default async function Home() {
  const recipes = await getAllRecipes();

  return (
    <div className="container">
      <Header />
      <section className="py-8">
        <div className="grid grid-cols-12 py-4">
          <Sidebar recipes={recipes} />
          <Suspense fallback={<Loading />}>
            <RecipeList recipes={recipes} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
