import { useState } from 'react';

interface RecipeFormProps {
  onSubmit: (recipe: { title: string; description: string }) => void;
}

export default function RecipeForm({ onSubmit }: RecipeFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Prevents the default form submission behavior
    onSubmit({ title, description }); // Sends the recipe data to the parent component
    setTitle(''); // Resets the title input field
    setDescription(''); // Resets the description input field
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title Input */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Updates the title state
          className="border p-2 w-full rounded"
          placeholder="Enter recipe title"
          required
        />
      </div>

      {/* Description Input */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Updates the description state
          className="border p-2 w-full rounded"
          placeholder="Enter recipe description"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
}
