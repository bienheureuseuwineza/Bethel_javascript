var groceryList = ["Bananas", "Milk", "Eggs", "Bacon"];
var message = "Please pick up the following from the store: ";

//loop through the items of the grocerylist
for (var i = 0; i < groceryList.length; i++) {
  //when i is not zero add a comma in front of the message
  if (i != 0) {
    message += ",";
  }
  //add a item from the grocery list to the message
  message += groceryList[i];
}
//print the final message
console.log(message);
