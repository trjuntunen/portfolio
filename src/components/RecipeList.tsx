import RecipeCard from './RecipeCard';

type Recipe = {
  id: number;
  title: string;
  description: string;
};

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recipe List</h2>
      <div className="space-y-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}