'use strict'

var allRecipes = [];

function Recipe(name,webpage,picpage,ingredients){
    this.name = name;
    this.webpage = webpage;
    this.picpage = picpage;
    this.ingredients = ingredients;

    allRecipes.push(this);

}

//placeholder for instantiating objects

new Recipe ('Baked Potato', 'https://www.bonappetit.com/recipe/perfect-baked-potato','https://www.bonappetit.com/recipe/perfect-baked-potato')
new Recipe ('Boiled Potato', 'https://www.foodnetwork.com/recipes/food-network-kitchen/boiled-potatoes-with-butter-recipe-1944015','https://www.foodnetwork.com/recipes/food-network-kitchen/boiled-potatoes-with-butter-recipe-1944015')
new Recipe ('french fries', 'https://www.allrecipes.com/recipe/219634/chef-johns-french-fries/','https://www.allrecipes.com/recipe/219634/chef-johns-french-fries/')
new Recipe ('cheesy mashed potatoes', 'https://www.tasteofhome.com/recipes/cheesy-mashed-potatoes/','https://www.tasteofhome.com/recipes/cheesy-mashed-potatoes/')
new Recipe ('hashbrowns', 'https://cookieandkate.com/crispy-hash-browns-recipe/','https://cookieandkate.com/crispy-hash-browns-recipe/')
new Recipe ('grilled potatoes', 'https://www.delish.com/cooking/recipe-ideas/a20164811/best-grilled-potatoes-recipe/','https://www.delish.com/cooking/recipe-ideas/a20164811/best-grilled-potatoes-recipe/')
new Recipe ('hasselback potatoes', 'https://www.goodhousekeeping.com/food-recipes/easy/a36268/cheesy-hasselbacks/','https://www.goodhousekeeping.com/food-recipes/easy/a36268/cheesy-hasselbacks/')
new Recipe ('potato cakes', 'https://www.allrecipes.com/recipe/223597/old-fashioned-potato-cakes/','https://www.allrecipes.com/recipe/223597/old-fashioned-potato-cakes/')
new Recipe ('potato chips', 'https://www.tasteofhome.com/recipes/homemade-potato-chips/','https://www.tasteofhome.com/recipes/homemade-potato-chips/')
new Recipe ('potato salad', 'https://www.goodhousekeeping.com/food-recipes/a45219/creamy-potato-salad-recipe/','https://www.goodhousekeeping.com/food-recipes/a45219/creamy-potato-salad-recipe/')
new Recipe ('potato skins', 'https://www.goodhousekeeping.com/food-recipes/a10462/potato-skins-recipe-ghk1010/','https://www.goodhousekeeping.com/food-recipes/a10462/potato-skins-recipe-ghk1010/')
new Recipe ('potato soup', 'https://www.tasteofhome.com/recipes/best-ever-potato-soup/','https://www.tasteofhome.com/recipes/best-ever-potato-soup/')
new Recipe ('potatoes au gratin', 'https://www.onceuponachef.com/recipes/potatoes-au-gratin.html','https://www.onceuponachef.com/recipes/potatoes-au-gratin.html')
new Recipe ('roasted potatoes', 'https://www.delish.com/cooking/recipe-ideas/a22865719/herb-roasted-potatoes-recipe/','https://www.delish.com/cooking/recipe-ideas/a22865719/herb-roasted-potatoes-recipe/')
new Recipe ('scalloped potatoes', 'https://www.spendwithpennies.com/scalloped-potatoes-recipe/','https://www.spendwithpennies.com/scalloped-potatoes-recipe/')
new Recipe ('sweet potato fries', 'https://www.foodnetwork.com/recipes/paula-deen/baked-sweet-potato-fries-recipe-2013040','https://www.foodnetwork.com/recipes/paula-deen/baked-sweet-potato-fries-recipe-2013040')
new Recipe ('sweet potato chips', 'https://www.marthastewart.com/317420/baked-sweet-potato-chips','https://www.marthastewart.com/317420/baked-sweet-potato-chips')
new Recipe ('tater tots', 'https://damndelicious.net/2015/04/10/homemade-tater-tots/','https://damndelicious.net/2015/04/10/homemade-tater-tots/')
new Recipe ('twice baked potato', 'https://allrecipes.com/recipe/24332/ultimate-twice-baked-potatoes/','https://allrecipes.com/recipe/24332/ultimate-twice-baked-potatoes/')
new Recipe (' Tater tot caserole', 'https://www.bunsinmyoven.com/tater-tot-casserole/','https://www.bunsinmyoven.com/tater-tot-casserole/')
new Recipe ('baked mashed potato', 'https://www.allrecipes.com/recipe/24291/baked-mashed-potatoes/','https://www.allrecipes.com/recipe/24291/baked-mashed-potatoes/')
new Recipe ('bombay potatoes', 'https://www.bbcgoodfood.com/recipes/bombay-potatoes','https://www.bbcgoodfood.com/recipes/bombay-potatoes')
new Recipe ('gnocchi', 'https://www.allrecipes.com/recipe/18465/gnocchi-i/','https://www.allrecipes.com/recipe/18465/gnocchi-i/')
new Recipe ('fried mashed potato balls', 'https://www.delish.com/cooking/recipe-ideas/a22566735/fried-mashed-potato-balls-recipe/','https://www.delish.com/cooking/recipe-ideas/a22566735/fried-mashed-potato-balls-recipe/')
new Recipe ('sweet mashed potatoes', 'https://cookieandkate.com/savory-mashed-sweet-potatoes/','https://cookieandkate.com/savory-mashed-sweet-potatoes/')
new Recipe ('Charred sweet potatotes with hot honey butter and lime', 'https://www.bonappetit.com/recipe/charred-sweet-potatoes-with-hot-honey-butter-and-lime','https://www.bonappetit.com/recipe/charred-sweet-potatoes-with-hot-honey-butter-and-lime')
new Recipe ('garlic butter potatoes', 'https://www.delish.com/cooking/recipe-ideas/recipes/a55051/garlic-butter-potatoes-recipe/','https://www.delish.com/cooking/recipe-ideas/recipes/a55051/garlic-butter-potatoes-recipe/')
new Recipe ('garlic roasted potatoes', 'https://www.foodnetwork.com/recipes/ina-garten/garlic-roasted-potatoes-recipe-1913067','https://www.foodnetwork.com/recipes/ina-garten/garlic-roasted-potatoes-recipe-1913067')
new Recipe ('crispy ginger Scallion Latkes', 'https://www.goodhousekeeping.com/food-recipes/a35790/crispy-ginger-scallion-latkes/','https://www.goodhousekeeping.com/food-recipes/a35790/crispy-ginger-scallion-latkes/')
new Recipe ('Herbed mashed potatoes', 'https://www.goodhousekeeping.com/food-recipes/a14963/garlicky-herb-mashed-potatoes-recipe-ghk0313/','https://www.goodhousekeeping.com/food-recipes/a14963/garlicky-herb-mashed-potatoes-recipe-ghk0313/')
new Recipe ('Potato Leek Soup', 'https://www.goodhousekeeping.com/food-recipes/easy/a29428925/potato-leek-soup-recipe/','https://www.goodhousekeeping.com/food-recipes/easy/a29428925/potato-leek-soup-recipe/')
new Recipe ('Potato Tacos', 'https://leitesculinaria.com/274538/recipes-crispy-mashed-potato-tacos.html','https://leitesculinaria.com/274538/recipes-crispy-mashed-potato-tacos.html')
new Recipe ('Sour Cream Mashed potatoes', 'https://www.goodhousekeeping.com/food-recipes/a46617/sour-cream-mashed-potatoes-recipe/','https://www.goodhousekeeping.com/food-recipes/a46617/sour-cream-mashed-potatoes-recipe/')
new Recipe ('Creamy Basil Potato Salad', 'https://www.goodhousekeeping.com/food-recipes/a21753032/creamy-basil-potato-salad-recipe/','https://www.goodhousekeeping.com/food-recipes/a21753032/creamy-basil-potato-salad-recipe/')
new Recipe ('Creamy one-pot Garlic Mashed potatoes', 'https://www.goodhousekeeping.com/food-recipes/a46616/creamy-one-pot-garlic-mashed-potatoes-recipe/','https://www.goodhousekeeping.com/food-recipes/a46616/creamy-one-pot-garlic-mashed-potatoes-recipe/')
new Recipe ('Chorizo Potato Skins', 'https://www.goodhousekeeping.com/food-recipes/a47660/chorizo-queso-potato-skins-recipe/','https://www.goodhousekeeping.com/food-recipes/a47660/chorizo-queso-potato-skins-recipe/')
new Recipe ('Easy Potato Latkes', 'https://www.goodhousekeeping.com/food-recipes/easy/a46929/easy-potato-latkes-recipe/','https://www.goodhousekeeping.com/food-recipes/easy/a46929/easy-potato-latkes-recipe/')
new Recipe ('German Potato Salad', 'https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=25','https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=25')
new Recipe ('Loaded Sweet potatoes', 'https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=31','https://www.goodhousekeeping.com/food-recipes/g1633/potato-recipes/?slide=31')
new Recipe ('Grilled potato salad with blue cheese vinaigrette', 'https://www.goodhousekeeping.com/food-recipes/a13638/grilled-potato-salad-blue-cheese-vinaigrette-recipe-ghk0712/','https://www.goodhousekeeping.com/food-recipes/a13638/grilled-potato-salad-blue-cheese-vinaigrette-recipe-ghk0712/')
new Recipe ('Stuffed parmesan potatoes', 'https://www.goodhousekeeping.com/food-recipes/a15129/stuffed-parmesan-potatoes-recipe-ghk1212/','https://www.goodhousekeeping.com/food-recipes/a15129/stuffed-parmesan-potatoes-recipe-ghk1212/')
new Recipe ('Accordion potatoes', 'https://www.goodhousekeeping.com/food-recipes/a6976/accordion-potatoes-ghk1207/','https://www.goodhousekeeping.com/food-recipes/a6976/accordion-potatoes-ghk1207/')
new Recipe ('Loaded slowcooked potatoes', 'https://www.delish.com/cooking/recipe-ideas/recipes/a50007/slow-cooker-loaded-potatoes/','https://www.delish.com/cooking/recipe-ideas/recipes/a50007/slow-cooker-loaded-potatoes/')
new Recipe ('Potato skin burgers', 'https://www.delish.com/cooking/recipe-ideas/recipes/a53815/potato-skin-burgers-recipe/','https://www.delish.com/cooking/recipe-ideas/recipes/a53815/potato-skin-burgers-recipe/')
new Recipe ('Lemon and Parsley Skillet-Roasted Fingerling Potatoes', 'https://www.bonappetit.com/recipe/lemon-and-parsley-skillet-roasted-fingerling-potatoes','https://www.bonappetit.com/recipe/lemon-and-parsley-skillet-roasted-fingerling-potatoes')


//creating elements in the html
function createElement(element, content, parent){
    var newElement = document.createElement(element);
    newElement.textContent = content;
    parent.appendChild(newElement);
    return newElement;
}
