

var itemsArr = ['potato', 'testing', 'potato2'];


//checkbox renderer

var check = document.getElementById('checkbox');
function renderCheck() {
  for (var i = 0; i < itemsArr.length; i++) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = itemsArr[i];
    checkbox.value = itemsArr[i];
    checkbox.id = itemsArr[i];

    var label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(itemsArr[i]));

    check.appendChild(checkbox);
    check.appendChild(label);
  }
}
renderCheck();

var button = document.getElementById('catalog');
button.addEventListener('submit', handleSubmit);


//dropdown render and event listener

function handleSubmit(event){
    event.preventDefault();
    var product = event.target.items.value;
    var howMuch = event.target.quantity.value;
    console.log(product, howMuch);
  }

var dropDown = document.getElementById('items');
function renderDropDown() {
  for (var i = 0; i < itemsArr.length; i++) {
    var option = document.createElement('option');
    option.textContent = itemsArr[i];
    dropDown.appendChild(option);
  }
}
renderDropDown();
var button = document.getElementById('catalog2');
button.addEventListener('submit', handleSubmit);