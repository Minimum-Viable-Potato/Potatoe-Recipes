'use strict';

var ingredientList = [];

//loop to grab all the ingredients from objects
for (var i=0; i <allRecipes.length; i++){
  for (var j=0; j<allRecipes[i].ingredients.length; j++){
    ingredientList.push(allRecipes[i].ingredients[j]);
    
  }
}
console.log(ingredientList);

//converts ingredientList into a set and removes duplicates to get a unique set of Ingredients

var uniqIngredList = [...new Set(ingredientList)];
// console.log(uniqIngredList);

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

//DONE:user selects an item from dropdown and it is added to an array
var selectedIngArr = [];

function listQ(){
  if (localStorage.getItem('selected potatoes')){
    selectedIngArr = loadLocalStorage();
  }

  selectedIngArr.push(this.value);
  saveLocalStorage();
  console.log(`added to selectedIngrArr ${selectedIngArr}`);
  firstTime++;
  renderCheck();
  renderPics();
  
}


document.getElementById('ingredients_box').onchange = listQ;
// document.getElementById('ingredients_box').onchange = saveLocalStorage();


//DONE: render selectedIngArr as checked boxes underneath dropmenu
var check = document.getElementById('checkbox');


function renderCheck() {
  if (localStorage.getItem('selected potatoes') && (firstTime === 1)){
    selectedIngArr = loadLocalStorage();
    
    for (var i = 0; i<selectedIngArr.length; i++){
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = selectedIngArr[i];
      checkbox.value = selectedIngArr[i];
      checkbox.id = selectedIngArr[i];
      var label = document.createElement('label');
      label.htmlFor = 'id';
      label.appendChild(document.createTextNode(selectedIngArr[i]));
      check.appendChild(checkbox);
      check.appendChild(label);
    }
  }else{

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
}


//TODO:create button that removes all checked items from selectedItems array


//TODO: add selected items to local storage

function saveLocalStorage(){
  localStorage.clear();
  var convertedItems = JSON.stringify(selectedIngArr);
  localStorage.setItem('selected potatoes', convertedItems);
  console.log(convertedItems);
}

function loadLocalStorage(){
  var localStorageItems = JSON.parse(localStorage.getItem('selected potatoes'))
  return localStorageItems
}


var El = document.getElementById('displayRecipes');

function renderPics(){
  
  if (localStorage.getItem('selected potatoes')){
    console.log(`local storage exists in render pic function`)
    selectedIngArr = loadLocalStorage();
  }

  var count = El.childElementCount
  for (var i =0; i<count; i++){
    El.removeChild(El.childNodes[0]);
    // console.log(count)
    // console.log(i)
  }

  for (var i=0; i<allRecipes.length; i++){
  //TODO: James provide source attribute for below logic
    if (selectedIngArr.every(function(val) { return allRecipes[i].ingredients.indexOf(val) >= 0; })){
      var imgEl = document.createElement('img');
      var aEl = document.createElement('a');
      imgEl.src = allRecipes[i].picpage;
      aEl.href = allRecipes[i].webpage;
      aEl.textContent = allRecipes[i].name;
      El.appendChild(imgEl);
      El.appendChild(aEl);
    }else{
      if(El.childElementCount===0){
      var pEl= document.createElement("p");
      pEl.textContent = "Sorry...No Recipes with those Ingredient Found"
      El.appendChild(pEl);
      }
    }
  }
}

function removebutton(event){
  localStorage.clear()
  console.log("remove button logic was applied")
}

document.getElementById('removeBtn').addEventListener('click', removebutton);

var firstTime=0;
//load page with localStorage information, if applicable
if (localStorage.getItem('selected potatoes')){
  selectedIngArr = loadLocalStorage();

  console.log(`initial load from local storage: ${selectedIngArr}`);
  firstTime = 1;
  renderCheck();
  console.log(`initial renderCheck from local storage`);
  renderPics();
  
}