// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = > 8 && < 128;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

function generatePassword() {
  // promp user for password length
  var response = prompt("How many characters would you like your password to be?");
  console.log(response);
  var response = confirm("Do you want to include lowercase letters?");
  console.log(response);
  var response = confirm("Do you want to include uppercase letters?");
  console.log(response);
  var response = confirm("Do you want to include numbers?");
  console.log(response);
  var response = confirm("Do you want to include special characters?");
  console.log(response);
}
  //check if password length is between 8 and 128 characters
  //if (passwordLength < 8 || passwordLength > 128) {
   //alert("Password length must be between 8 and 128 characters");
  
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
