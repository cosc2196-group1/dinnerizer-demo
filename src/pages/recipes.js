import RecipeCard from "../components/RecipeCard";

const recipes = [  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A delicious spaghetti dish...",
    image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg?w=1280&q=75.jpg",
    tags: ["pasta", "italian", "spaghetti"],
    url: "https://cooking.nytimes.com/recipes/12965-spaghetti-carbonara"
  },
  {
    id: 2,
    name: "Chicken Piccata",
    description: "Lemony, caper topped and buttery...",
    image: "https://assets.bonappetit.com/photos/5cad19a73733c07592c4a9cd/1:1/w_2240,c_limit/chicken-picatta.jpg",
    tags: ["butter", "lemon", "chicken"],
    url: "https://www.bonappetit.com/recipe/chicken-piccata-2"
  },
  {
    id: 3,
    name: "Pan-Fried Sesame Garlic Tofu",
    description: "Lemony, caper topped and buttery...",
    image: "https://www.tablefortwoblog.com/wp-content/uploads/2018/09/pan-fried-spicy-garlic-tofu-recipe-photos-tablefortwoblog-1.jpg.webp",
    tags: ["tofu", "vegetarian", "sesame", "garlic"],
    url: "https://www.tablefortwoblog.com/pan-fried-sesame-garlic-tofu/"
  },
];

export default function RecipePage() {
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}
