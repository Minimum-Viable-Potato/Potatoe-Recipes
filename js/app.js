'use strict'

//loop to grab all the ingredients from objects
for (var i=0; i <allRecipes.length; i++){
    for (var j=0; j<allRecipes[i].ingredients.length; j++){
        ingredientList.push(allRecipes[i].ingredients[j])
        // console.log(allRecipes[i].ingredients[j])
    } 
}

//converts ingredientList into a set and removes duplicates to get a unique set of Ingredients
var uniqIngredList = [...new Set(ingredientList)]
console.log(uniqIngredList)

//render dropdown
var dropDown = document.getElementById('ingredients_box');

function renderDropDown() {
  for (var k = 0; k < uniqIngredList.length; k++) {
    var option = document.createElement('option');
    option.textContent = uniqIngredList[k];
    dropDown.appendChild(option);
  }
}


renderDropDown();

var selectedIngArr = [];

function listQ(){
  selectedIngArr.push(this.value);
  console.log(selectedIngArr);
}
document.getElementById("ingredients_box").onchange = listQ;

