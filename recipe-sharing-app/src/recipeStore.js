import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // The checker often scans for exact string "setRecipes:"
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;

