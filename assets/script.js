// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = confirm("Confirm if you want your password to contain lowercase letters.");
  var upper = confirm("Confirm if you want your password to contain uppercase letters.");
  var number = confirm("Confirm if you want your password to contain numbers.");
  var symbol = confirm("Confirm if you want your password to contain special symbols.");
  var length = parseInt(window.prompt("Enter a number between 8-128 for your password length."));
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" ,"y", "z"];
  var uppercase = ["A", "B", "C", "D" , "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "-", "+", "{", "}", "[", "]", "?", "/", ";", ":", ",", "."];

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
