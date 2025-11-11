
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Ensure filteredRecipes is initialized
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
