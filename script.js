// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // promp user for password length
  var response = prompt("How many characters would you like your password to be?");
  console.log(response);
  var response = prompt("Do you want to include lowercase letters?");
  console.log(response);
  var response = prompt("Do you want to include uppercase letters?");
  console.log(response);
}
  // check if password length is between 8 and 128 characters
  // if (passwordLength < 8 || passwordLength > 128) {
  //  alert("Password length must be between 8 and 128 characters");
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
