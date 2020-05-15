'use strict'

//DONE: render each recipe link and image on all_recipes page
var recipeDisplay = document.getElementById('displayAllRecipes');
var sectIngr = document.getElementById("ingredientsAllRecipes")

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


function renderRecipeDetails(img){
    for (var i=0; i<allRecipes.length; i++){
        if (img === allRecipes[i].picpage){
            var aEl = document.createElement('a');
            console.log(allRecipes[i].webpage);
            aEl.href = allRecipes[i].webpage;
            aEl.textContent = allRecipes[i].name;
            console.log(aEl.webpage);
            console.log(aEl.href);
            sectIngr.appendChild(aEl); 
            
            for (var j=0; j<allRecipes[i].ingredients.length; j++){
                var liEl = document.createElement('li');
                liEl.textContent = allRecipes[i].ingredients[j];
                console.log(liEl)
                sectIngr.appendChild(liEl);   
            }
                            
        }
    }

     
}

function clearIngredients(){
    var count = sectIngr.childElementCount;
    for(var i=0; i<count; i++){
        sectIngr.removeChild(sectIngr.childNodes[0]);
    }
}

function handleClick(event){
    var clickedRecipe= event.target.currentSrc;
    console.log(clickedRecipe)
    clearIngredients();
    renderRecipeDetails(clickedRecipe); 
}


recipeOptions();
recipeDisplay.addEventListener('click', handleClick);
