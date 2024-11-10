import PropTypes from 'prop-types';
const Recipe = ({ recipe, handleCooking }) => {
    const { recipe_image, recipe_id, recipe_name, short_description, ingredients, calories, preparing_time } = recipe;
    return (
        <div>
            <div key={recipe_id} className="border p-4 rounded shadow-md">
                <img
                    src={recipe_image}
                    alt={recipe_name}
                    className="w-full h-80 object-cover mb-4 rounded"
                />
                <h2 className="text-2xl font-semibold">{recipe_name}</h2>
                <p className="text-gray-600 mb-4">{short_description}</p>
                <hr />

                <ul className="mt-3 mb-3">
                    <h3 className="font-semibold">Ingredients:{ingredients.length}</h3>
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-600 text-sm">-{ingredient}</li>

                    ))}

                </ul>
                <hr />
                <div className='flex ml-4 p-2'>
                    <p className="text-sm font-medium text-gray-600">Prep Time: {preparing_time}</p>
                    <p className="text-sm font-medium text-gray-600 ml-4">Calories: {calories}</p>
                </div>
                <button onClick={() => handleCooking(recipe)} className='border-solid bg-green-400 ml-4 px-2 py-2 rounded-full font-bold'>Want to Cook</button>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCooking: PropTypes.func
}
export default Recipe;