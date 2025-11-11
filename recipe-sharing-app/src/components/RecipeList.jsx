import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes.length 
    ? state.filteredRecipes 
    : state.recipes
  );

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

