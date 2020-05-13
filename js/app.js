'use strict';

var ingredientList = [];

//loop to grab all the ingredients from objects
for (var i=0; i <allRecipes.length; i++){
  for (var j=0; j<allRecipes[i].ingredients.length; j++){
    ingredientList.push(allRecipes[i].ingredients[j]);
    console.log(allRecipes[i].ingredients[j]);
  }
}

//converts ingredientList into a set and removes duplicates to get a unique set of Ingredients

var uniqIngredList = [...new Set(ingredientList)];
console.log(uniqIngredList);

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

//checkbox renderer
// var button = document.getElementById('catalog');
// button.addEventListener('submit', handleSubmit);

//TODO:user selects an item from dropdown and it is added to an array
var selectedIngArr = [];

function listQ(){
  selectedIngArr.push(this.value);
  console.log(selectedIngArr);
  renderCheck();
}
document.getElementById('ingredients_box').onchange = listQ;


//Todo: render selectedIngArr as checked boxes underneath dropmenu
var check = document.getElementById('checkbox');
function renderCheck() {
// for (var i = 0; i < selectedIngArr.length; i++) {
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = selectedIngArr[selectedIngArr.length-1];
  checkbox.value = selectedIngArr[selectedIngArr.length-1];
  checkbox.id = selectedIngArr[selectedIngArr.length-1];
  var label = document.createElement('label');
  label.htmlFor = 'id';
  label.appendChild(document.createTextNode(selectedIngArr[selectedIngArr.length-1]));
  check.appendChild(checkbox);
  check.appendChild(label);
}


//TODO:create button that removes all checked items from selectedItems array

//TODO:render pics of recipes based on selectedItems




//event listener for click
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


