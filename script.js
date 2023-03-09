// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // promp user for password length
  var length = prompt("How many characters would you like your password to be? Length must be between 8 and 128 characters");
  console.log(length);
  // confirm for lowercase, uppercase, numbers, and special characters, either true or false
  var includelowercase = confirm("Do you want to include lowercase letters?");
  console.log(includelowercase);
  var includeuppercase = confirm("Do you want to include uppercase letters?");
  console.log(includeuppercase);
  var includenumbers = confirm("Do you want to include numbers?");
  console.log(includenumbers);
  var includespecialcharacters = confirm("Do you want to include special characters?");
  console.log(includespecialcharacters);
// stored variables of arrays for lowercase, uppercase, numbers, and special characters
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialcharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  // created var includedcharacters for an empty string to store included characters
  var includedcharacters = "";
  // if statement to add included character for lowercase to the empty string
  if (includelowercase === true) {
    includedcharacters += lowercase;
  }
  // if statement to add included character for uppercase to the empty string
  if (includeuppercase === true) {
    includedcharacters += uppercase;
  }
  // if statement to add included character for numbers to the empty string
  if (includenumbers === true) {
    includedcharacters += numbers;
  }
  // if statement to add included character for special characters to the empty string
  if (includespecialcharacters === true) {
    includedcharacters += specialcharacters;
  }
  // if statement to alert user if no character types are selected and make the function stop
  if (includelowercase === false && includeuppercase === false && includenumbers === false && includespecialcharacters === false) {
    alert("You must select at least one character type to generate a password");
    return "";  
  }
  // if statement to make sure the length is between 8 and 128 characters, using var i to generate random characters from the included characters from using math.random and math.floor
  if (length >  8 || length < 128) {  
    var password = "";
    for (var i = 0; i < length; i++) {
      password += includedcharacters.charAt(Math.floor(Math.random() * includedcharacters.length));
    }
    return password;
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
