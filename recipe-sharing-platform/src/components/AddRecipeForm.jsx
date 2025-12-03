import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ VALIDATION
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());

    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    // ✅ If validation passes
    setError("");

    const newRecipe = {
      title,
      ingredients: ingredientList,
      instructions: instructions.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // ✅ Clear the form after submit
    setTitle("");
    setIngredients("");
    setInstructions("");

    alert("Recipe submitted successfully! (Check console)");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <Link to="/" className="text-blue-600 font-semibold mb-4 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-center">
          Add New Recipe
        </h1>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 mb-4 rounded">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* TITLE */}
          <div>
            <label className="block font-semibold mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
          </div>

          {/* INGREDIENTS */}
          <div>
            <label className="block font-semibold mb-1">
              Ingredients (comma-separated)
            </label>
            <textarea
              className="w-full border rounded p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g. Chicken, Salt, Pepper"
            ></textarea>
          </div>

          {/* INSTRUCTIONS */}
          <div>
            <label className="block font-semibold mb-1">
              Preparation Steps (one per line)
            </label>
            <textarea
              className="w-full border rounded p-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Step 1: ...&#10;Step 2: ..."
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
