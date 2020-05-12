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


// //event listener for click
// function handleClick(event) {
//     // increment our property 'clicks', and generate two new images
//     var clickedItem = event.target.title;
//     console.log(clickedItem);
//     for(var i = 0; i < itemsArr.length; i++){
//         if(clickedItem === itemsArr[i].name){
//             itemsArr[i].clicked++;
//         }
//     }
//     clickTracker--;
//     if(clickTracker <= 0){
//         stopClicking();
//         renderChart();
//         renderList();
//         saveLocalStorage();
//         //add render list
//     }
//     imageGenerator();
// }
// //divEl.addEventListener('click', handleClick);

