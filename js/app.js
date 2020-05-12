'use strict'

//code to create recipe objects

//test

var ingredientSelected = [];

function IngredientSelected(id, name){
    this.name = name;
    this.id = id;

}




//event listener for click
function handleClick(event) {
    // increment our property 'clicks', and generate two new images
    var clickedItem = event.target.title;
    console.log(clickedItem);
    for(var i = 0; i < itemsArr.length; i++){
        if(clickedItem === itemsArr[i].name){
            itemsArr[i].clicked++;
        }
    }
    clickTracker--;
    if(clickTracker <= 0){
        stopClicking();
        renderChart();
        renderList();
        saveLocalStorage();
        //add render list
    }
    imageGenerator();
};
//divEl.addEventListener('click', handleClick);