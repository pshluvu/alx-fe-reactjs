import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please enter at least 2 ingredients.";

    if (!steps.trim()) newErrors.steps = "Steps are required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Clear form and errors
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully! (Check console)");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-md md:max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <Link to="/" className="text-blue-600 font-semibold mb-4 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* TITLE */}
          <div>
            <label className="block font-semibold mb-1">Recipe Title</label>
            <input
              type="text"
              className={`w-full border rounded p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.title ? "border-red-500" : ""
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* INGREDIENTS */}
          <div>
            <label className="block font-semibold mb-1">
              Ingredients (comma-separated)
            </label>
            <textarea
              className={`w-full border rounded p-2 md:p-3 h-24 md:h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.ingredients ? "border-red-500" : ""
              }`}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g. Chicken, Salt, Pepper"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* STEPS */}
          <div>
            <label className="block font-semibold mb-1">
              Preparation Steps (one per line)
            </label>
            <textarea
              className={`w-full border rounded p-2 md:p-3 h-28 md:h-36 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.steps ? "border-red-500" : ""
              }`}
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Step 1: ...&#10;Step 2: ..."
            ></textarea>
            {errors.steps && (
              <p className="text-red-600 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
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



