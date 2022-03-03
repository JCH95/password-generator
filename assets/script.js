// Assignment code here
// Variables for each password parameter
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*(){}[]<>?,./;:-=_+"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Add empty strings for the password parameters to fill
  var characters = "";
  var finalPassword = "";

  // Prompt for the length of the password
  var lengthPrompt = prompt("Enter a number between 8-128 for your password length.");
  if (length < 8 || length > 128) {
    window.alert("You need to pick a number between 8 and 128!");
    return generatePassword();
  }

  // Prompt for if the password will/will not include lowercase letters
  var lowerPrompt = confirm("Confirm if you want your password to contain lowercase letters.");
  if (lowerPrompt === true) {
    characters = characters + lower;
  }

  // Prompt for if the password will/will not include uppercase letters
  var upperPrompt = confirm("Confirm if you want your password to contain uppercase letters.");
  if (upperPrompt === true) {
    characters = characters + upper;
  }

  // Prompt for if the password will/will not include numbers
  var numberPrompt = confirm("Confirm if you want your password to contain numbers.");
  if (numberPrompt === true) {
    characters = characters + number;
  }

  // Prompt for if the password will/will not include symbols
  var symbolPrompt = confirm("Confirm if you want your password to contain special symbols.");
  if (symbolPrompt === true) {
    characters = characters + symbol;
  }

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
