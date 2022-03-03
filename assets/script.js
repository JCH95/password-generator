// Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*(){}[]<>?,./;:-=_+"
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = confirm("Confirm if you want your password to contain lowercase letters.");
  var upper = confirm("Confirm if you want your password to contain uppercase letters.");
  var number = confirm("Confirm if you want your password to contain numbers.");
  var symbol = confirm("Confirm if you want your password to contain special symbols.");
  var length = parseInt(window.prompt("Enter a number between 8-128 for your password length."));

  if (length < 8 || length > 128) {
    window.alert("You need to pick a number between 8 and 128!");
    
  };



  // Check if all were false.
  if (lower && upper && number && symbol == false) {
    window.prompt("You must confirm at least one choice for the password!");
  }
  // Check if letters were entered in number prompt.





  // Return variable here
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
