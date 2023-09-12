// Event listener for the decreaseBtn
document.getElementById("decreaseBtn").addEventListener("click", function () {
  var rectangle = document.getElementById("rectangle");
  var currentWidth = parseInt(rectangle.style.width);
  var myWidth = currentWidth - 10;
  rectangle.style.width = myWidth + "px";
});

// Event listener for the increaseBtn
document.getElementById("increaseBtn").addEventListener("click", function () {
  var rectangle = document.getElementById("rectangle");
  var currentWidth = parseInt(rectangle.style.width);
  var myWidth = currentWidth + 10;
  rectangle.style.width = myWidth + "px";
});
