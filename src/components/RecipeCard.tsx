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
      <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
        <p className="text-gray-600 mt-2">{recipe.description}</p>
      </div>
    );
  }
  
  