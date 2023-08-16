function RecipeCard({ recipe }) {

    const redirectToUrl = () => {
        window.open(recipe.url, "_blank");
    }

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-4" onClick={redirectToUrl}>
        <img className="w-full max-h-60" src={recipe.image} alt={recipe.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipe.name}</div>
          <p className="text-gray-700 text-base">{recipe.description}</p>
        </div>
        <div className="px-6 py-4">
          {recipe.tags.map(tag => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  export default RecipeCard;
