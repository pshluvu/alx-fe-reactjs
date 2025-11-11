import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 && <p>No favorites yet.</p>}
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
