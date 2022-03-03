// Assignment code here
// Variables for each password parameter
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*(){}[]<>?,./;:-=_+";

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

function generatePassword() {
  // Add empty strings for the password parameters to fill
  var characters = "";
  var finalPassword = "";

  // Prompt for the length of the password
  var lengthPrompt = parseInt(prompt("Enter a number between 8-128 for your password length."));
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("You need to pick a number between 8 and 128!");
    // Start prompts over again until proper conditions are met
    return generatePassword();
  }
  // Check if letters were entered in number prompt
  var letters = /^[a-zA-Z]+$/;
  if (letters.test(lengthPrompt)) {
    alert("Please enter numeric values only!");
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

  // Check if all were false
  if (!lowerPrompt && !upperPrompt && !numberPrompt && !symbolPrompt) {
    alert("You must confirm at least one choice for the password!");
    // Start prompts over agin until at least 1 is included
    return generatePassword();
  }

  // For loop to generate the password based on it's length, and randomizes each option at each point of the password.
  for (let i = 0; i < lengthPrompt; i++) {
    finalPassword = finalPassword + characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Return variable here
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
