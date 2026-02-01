const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipesContainer = document.getElementById("recipesContainer");
const loader = document.getElementById("loader")
const documentFragment = new DocumentFragment();



try {
  const data1 = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`,
  );
  const data2 = await data1.json();
  data2.recipes.forEach((recipe) => {createRecipes(recipe)});
  loader.classList.add("hidden")
  recipesContainer.appendChild(documentFragment)
} catch (error) {

  loader.className = "text-center"
  loader.innerHTML = "<p>Sorry, something went wronng </p> <button class='bg-slate-800 rounded-lg px-8 py-3 text-slate-100 font-semibold my-3'>Retry</button>"
}


function createRecipes(recipe) {
  const li = document.createElement("li");
  li.classList =
    "flex items-center shadow-slate-300 shadow-md gap-x-4 rounded-xl overflow-hidden";
  const img = document.createElement("img");
  img.src = recipe.image;
  img.className = "size-40";
  const name = document.createElement("h1");
  name.textContent = recipe.title;
  name.className = "w-lg text-2xl font-bold";
  const ingredients = document.createElement("p");
  ingredients.textContent = `Ingredients: ${recipe.extendedIngredients.map((ingredient) => ingredient.aisle).join(", ")}`;
  ingredients.className = "text-slate-600";
  const link = document.createElement("a");
  link.href = recipe.sourceUrl;
  link.innerText = "VIEW RECIPE";
  link.className = "text-nowrap px-6 py-3 bg-slate-800 text-slate-100";
  li.append(img, name, ingredients, link);
  documentFragment.appendChild(li);
}
