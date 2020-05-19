'use strict';

//DONE: render each recipe link and image on all_recipes page
var recipeDisplay = document.getElementById('displayAllRecipes');
var sectIngr = document.getElementById('ingredientsAllRecipes');

//DONE:loop through the allreceipes array and generate pictures and name of recipe
function recipeOptions(){
  for (var i = 0; i < allRecipes.length; i++){
    // render each image and link at index i to the DOM
    var recipeImg = document.createElement('img');
    var recipeName = document.createElement('li');
    recipeImg.src = allRecipes[i].picpage;
    recipeName.textContent = allRecipes[i].name;
    recipeDisplay.appendChild(recipeImg);
    recipeDisplay.appendChild(recipeName);
  }
}

//renders the recipe details of the recipe selected (ingredients and link)
function renderRecipeDetails(img){
  for (var i=0; i<allRecipes.length; i++){
    if (img === allRecipes[i].picpage){
      var aEl = document.createElement('a');
      aEl.href = allRecipes[i].webpage;
      aEl.textContent = allRecipes[i].name;
      sectIngr.appendChild(aEl);
      for (var j=0; j<allRecipes[i].ingredients.length; j++){
        var liEl = document.createElement('li');
        liEl.textContent = allRecipes[i].ingredients[j];
        sectIngr.appendChild(liEl);
      }
    }
  }
}

//clears ingredient display based on clicked items
function clearIngredients(){
  var count = sectIngr.childElementCount;
  for(var i=0; i<count; i++){
    sectIngr.removeChild(sectIngr.childNodes[0]);
  }
}
//displays the link to the recipe link, clears local storage and reloads local storage based on recipe clicked and renders it
function handleClick(event){
  var clickedRecipe= event.target.currentSrc;
  localStorage.removeItem('Recipe Details');
  var convertedItems = JSON.stringify(clickedRecipe);
  localStorage.setItem('Recipe Details', convertedItems);
  clearIngredients();
  renderRecipeDetails(clickedRecipe);
}
recipeOptions();
recipeDisplay.addEventListener('click', handleClick);

var firstTime_allRecipes=0;
//load page with localStorage information, will determine if user has accessed this page.
if (localStorage.getItem('Recipe Details')){
  var localStorageRecipeDetails = JSON.parse(localStorage.getItem('Recipe Details'));
  var selectedRecipeDetails = localStorageRecipeDetails;
  firstTime_allRecipes = 1;
  renderRecipeDetails(selectedRecipeDetails);
}
