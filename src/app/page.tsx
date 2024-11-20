'use client'; // Enable client-side rendering

import { useState, useEffect } from 'react';
import RecipeForm from '@/components/RecipeForm';
import RecipeList from '@/components/RecipeList';

type Recipe = {
  id: number;
  title: string;
  description: string;
};

export default function Page() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // Fetch recipes from the API
  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch('/api/recipes'); // Fetch data from the API
      const data = await res.json();
      setRecipes(data.recipes); // Update the state with fetched recipes
    }

    fetchRecipes();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Add a new recipe and update the state
  async function addRecipe(recipe: { title: string; description: string }) {
    const res = await fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });

    const data = await res.json();
    setRecipes((prev) => [...prev, data.recipe]); // Append the new recipe to the list
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recipe Manager</h1>
        <RecipeForm onSubmit={addRecipe} />
        <div className="mt-12">
          <RecipeList recipes={recipes} />
        </div>
      </div>
    </main>
  );
}
