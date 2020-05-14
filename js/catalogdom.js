'use strict'

//TODO: render each recipe link and image on all_recipes page
var recipeDisplay = document.getElementById('displayAllRecipes');
// loop through the allreceipes array
function recipeOptions(){
    for (var i = 0; i < allRecipes.length; i++){
    // render each image and link at index i to the DOM
    var recipeImg = document.createElement('img');
    var recipeLink = document.createElement('a');
    recipeImg.src = allRecipes[i].picpage;
    recipeLink.href = allRecipes[i].webpage;
    recipeLink.textContent = allRecipes[i].name;
    recipeDisplay.appendChild(recipeImg);
    recipeDisplay.appendChild(recipeLink);
    }
}
recipeOptions();

