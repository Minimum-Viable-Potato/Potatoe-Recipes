'use strict'

//code to create recipe objects

//test

var ingredientSelected = [];

function IngredientSelected(id, name){
    this.name = name;
    this.id = id;

}

new IngredientSelected (1, 'bacon' );
new IngredientSelected (2, 'basil' );
new IngredientSelected (3, 'bay leaf' );
new IngredientSelected (4, 'beer' );
new IngredientSelected (5, 'black beans' );
new IngredientSelected (6, 'black pepper' );
new IngredientSelected (7, 'blue cheese' );
new IngredientSelected (8, 'bread crumbs' );
new IngredientSelected (9, 'butter' );
new IngredientSelected (10, 'caraway seeds' );
new IngredientSelected (11, 'carrot' );
new IngredientSelected (12, 'celery' );
new IngredientSelected (13, 'celery salt' );
new IngredientSelected (14, 'celery seed' );
new IngredientSelected (15, 'cheddar cheese' );
new IngredientSelected (16, 'chicken broth' );
new IngredientSelected (17, 'chives' );
new IngredientSelected (18, 'chorizo' );
new IngredientSelected (19, 'cilantro' );
new IngredientSelected (20, 'cooking spray' );
new IngredientSelected (21, 'coriander' );
new IngredientSelected (22, 'corn tortillas' );
new IngredientSelected (23, 'cream cheese' );
new IngredientSelected (24, 'cream of chicken' );
new IngredientSelected (25, 'crème fraich' );
new IngredientSelected (26, 'cumin' );
new IngredientSelected (27, 'dijon mustard' );
new IngredientSelected (28, 'dill' );
new IngredientSelected (29, 'eggs' );
new IngredientSelected (30, 'fennel' );
new IngredientSelected (31, 'feta' );
new IngredientSelected (32, 'flour' );
new IngredientSelected (33, 'fresh herbs' );
new IngredientSelected (34, 'garlic' );
new IngredientSelected (35, 'garlic powder' );
new IngredientSelected (36, 'ginger' );
new IngredientSelected (37, 'green chillies' );
new IngredientSelected (38, 'green onion' );
new IngredientSelected (39, 'Ground beef' );
new IngredientSelected (40, 'Heavy Cream' );
new IngredientSelected (41, 'honey' );
new IngredientSelected (42, 'hot sauce' );
new IngredientSelected (43, 'jalapeno' );
new IngredientSelected (44, 'leeks' );
new IngredientSelected (45, 'lemon juice' );
new IngredientSelected (46, 'lime' );
new IngredientSelected (47, 'masala' );
new IngredientSelected (48, 'Matzo meal' );
new IngredientSelected (49, 'mayonnaise' );
new IngredientSelected (50, 'milk' );
new IngredientSelected (51, 'mixed vegetables' );
new IngredientSelected (52, 'monterrey jack cheese' );
new IngredientSelected (53, 'mozzarella' );
new IngredientSelected (54, 'mustard' );
new IngredientSelected (55, 'mustard seeds' );
new IngredientSelected (56, 'nutmeg' );
new IngredientSelected (57, 'olive oil' );
new IngredientSelected (58, 'onion' );
new IngredientSelected (59, 'onion powder' );
new IngredientSelected (60, 'oregano' );
new IngredientSelected (61, 'paprika' );
new IngredientSelected (62, 'Parmesan Cheese' );
new IngredientSelected (63, 'parsley' );
new IngredientSelected (64, 'peppercorns' );
new IngredientSelected (65, 'pico de gallo' );
new IngredientSelected (66, 'pumpkin seeds' );
new IngredientSelected (67, 'red pepper flakes' );
new IngredientSelected (68, 'red peppers' );
new IngredientSelected (69, 'redd cabbage' );
new IngredientSelected (70, 'romano cheese' );
new IngredientSelected (71, 'rosemary' );
new IngredientSelected (72, 'salsa' );
new IngredientSelected (73, 'salt' );
new IngredientSelected (74, 'scallions' );
new IngredientSelected (75, 'shallot' );
new IngredientSelected (76, 'sour cream' );
new IngredientSelected (77, 'sugar' );
new IngredientSelected (78, 'tater tots' );
new IngredientSelected (79, 'thyme' );
new IngredientSelected (80, 'tomato' );
new IngredientSelected (81, 'turmeric' );
new IngredientSelected (82, 'vegetable/canola oil' );
new IngredientSelected (83, 'Velveeta Cheese' );
new IngredientSelected (84, 'vinegar' );
new IngredientSelected (85, 'watercress' );
new IngredientSelected (86, 'white cheddar' );
new IngredientSelected (87, 'white vinegar' );
new IngredientSelected (88, 'worcestershire sauce' );


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