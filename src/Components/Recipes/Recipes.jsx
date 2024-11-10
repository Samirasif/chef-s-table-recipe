import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";


const Recipes = ({ handleCooking }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))  // Access the 'recipes' array in JSON
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="md:w-3/5 ml-10">
            <h1 className="text-4xl">Recipe Items: {recipes.length}</h1>

            <div className="grid grid-cols-2 gap-2 ">
                {
                    recipes.map(recipe => <Recipe
                        handleCooking={handleCooking}
                        key={recipe.recipe_id}
                        recipe={recipe}>

                    </Recipe>)


                /* {
                recipes.map(recipe => (
                    <div key={recipe.recipe_id} className="border p-4 rounded shadow-md">
                        <img
                            src={recipe.recipe_image}
                            alt={recipe.recipe_name}
                            className="w-full h-80 object-cover mb-4 rounded"
                        />
                        <h2 className="text-2xl font-semibold">{recipe.recipe_name}</h2>
                        <p className="text-gray-700 mb-2">{recipe.short_description}</p>
                        <p className="text-sm font-medium text-gray-600">Prep Time: {recipe.preparing_time}</p>
                        <p className="text-sm font-medium text-gray-600">Calories: {recipe.calories}</p>
                        <ul className="mt-3">
                            <h3 className="font-semibold">Ingredients:</h3>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-700 text-sm">- {ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))} */}

            </div>

        </div>
    );
};

Recipes.propTypes = {
    handleCooking: PropTypes.func
}
export default Recipes;
