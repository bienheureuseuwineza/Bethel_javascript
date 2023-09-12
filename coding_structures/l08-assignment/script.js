//creating variables to be used
var button = document.getElementById("btn");
var nameInput = document.getElementById("fullName");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");
var postFullNameField = document.getElementById("postFullName");
var postEmailField = document.getElementById("postEmail");
var postMessageField = document.getElementById("postMessage");

//adding the event listener
button.addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the default form submission

  // Get the values entered in the input fields
  var fullName = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

  // Post the values to the contact card
  postFullNameField.innerHTML = fullName;
  postEmailField.innerHTML = email;
  postMessageField.innerHTML = message;
});
