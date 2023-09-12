// Global variables
var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");
// toppings array
var toppings = [];
// event listener
var formButton = document.getElementById("btn");
formButton.addEventListener("click", function (event) {
  //prevent default action
  event.preventDefault();
  //creating topping variables
  var topping1 = document.getElementById("topping1");
  var topping2 = document.getElementById("topping2");
  var topping3 = document.getElementById("topping3");
  //pushing the topping variables in the topping array
  toppings.push(topping1, topping2, topping3);
  //calling the calculate total and pass the toppings as a parameter
  calculateTotal(toppings);
});

function calculateTotal(toppingArray) {
  let total = 0;
  let toppingCost = 2.5;
  let baseCost = 5.5; // cost of crust and sauce
  let orderString = crust.value + " pizza with " + sauce.value;
  // order string concatenation

  let toppingString = "Toppings: ";

  // For Loop
  for (var i = 0; i < toppingArray.length; i++) {
    //if condition checking if the topping is not empty before adding another
    if (toppingArray[i] != "") {
      total += toppingCost;
      toppingString = toppingString + toppingArray[i].value + " ";
    }
  }
  // total = baseCost + cost of all toppings
  total += baseCost;

  // set DOM total += total
  var totalDOM = document.getElementById("total");
  totalDOM.innerHTML += total;
  // use DOM: = orderString
  var orderStringDOM = document.getElementById("pizzaOrder");
  orderStringDOM.innerHTML = orderString;
  // use DOM: = toppingString
  var toppingStringDOM = document.getElementById("toppings");
  toppingStringDOM.innerHTML = toppingString;
}
