// src/components/RecipeCard.tsx
type Recipe = {
    id: number;
    title: string;
    description: string;
  };
  
  interface RecipeCardProps {
    recipe: Recipe; // Single recipe object passed as a prop
  }
  
  export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
      <div className="border p-4 rounded shadow">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-700">{recipe.description}</p>
      </div>
    );
  }
  