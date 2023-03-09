// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // promp user for password length
  var length = prompt("How many characters would you like your password to be? Length must be between 8 and 128 characters");
  console.log(length);
  
  var includelowercase = confirm("Do you want to include lowercase letters?");
  console.log(includelowercase);
  var includeuppercase = confirm("Do you want to include uppercase letters?");
  console.log(includeuppercase);
  var includenumbers = confirm("Do you want to include numbers?");
  console.log(includenumbers);
  var includespecialcharacters = confirm("Do you want to include special characters?");
  console.log(includespecialcharacters);

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialcharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
