// Assignment code here

// Function for a random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Function for a random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Function for a random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Function for a random symbol
function getRandomSymbol() {
  var symbols = "!@#$%^&*()<>?,./[]{}-=_+;:"
  return symbols[Math.floor(Math.random() * symbols.length)];
}














// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = confirm("Confirm if you want your password to contain lowercase letters.");
  var upper = confirm("Confirm if you want your password to contain uppercase letters.");
  var number = confirm("Confirm if you want your password to contain numbers.");
  var symbol = confirm("Confirm if you want your password to contain special symbols.");
  var length = window.prompt("Enter a number between 8-128 for your password length.");
  if (length > 8 || length < 128) {
    
  } else {
    window.alert("You need to choose a number between 8 and 128!");
  };
  



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
