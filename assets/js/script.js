// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// *-------- all code goes below this comment --------*

function generatePassword() {
  // var passwordLength = parseInt(userInput);
// input for number of characters

  var userInput = function() {
    // window.prompt("How many characters would you like your password to contain?");
    var passwordLength = window.prompt("How many characters would you like your password to contain?");
    for (i = 8; i <= passwordLength.length; i++) {
      if (passwordLenght) {
        parseInt(passwordLength);
      } else {window.alert("Password must be AT LEAST 8 characters and NO MORE THAN 128 characters in length");
        generatePassword();
     };
    };
  }

// confirm for special characters
  var confirmSpecialCharacters = window.confirm("Click OK to confirm inlcuding special characters");

  if (specialCharArray = ["!", "#", "$", "%", "&", "()", "*", "+", "-", "<", "=", ">", "?", "@"]) {
      confirmSpecialCharacters = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
      console.log(confirmSpecialCharacters);
  } else {
    null;
  }

// confirm for numeric characters
  var numericChar = window.confirm("Click OK to confirm including numeric characters");
  numericCharArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numericChar = numericCharArray[Math.floor(Math.random() * numericCharArray.length)];
  console.log(numericChar);

// array for alphabets
  var charArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// confirm for lowercase characters
  var lowerCaseChars = window.confirm("Click OK to confirm lowercase characters");
  lowerCaseChars = charArray;
  var lowerChar = lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
  lowerChar = lowerChar.toLowerCase();
  console.log(lowerChar);

// confirm for uppercase characters
  var upperCaseChars = window.confirm("Click OK to confirm uppercase characters");
  upperCaseChars = charArray;
  // console.log(upperCaseChars);
  var upperChar = upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
  upperChar = upperChar.toUpperCase();
  console.log(upperChar);

  if (!specialCharArray && !numericCharArray && !lowerCaseChars && !upperCaseChars) {
    window.alert("You must select at least one character type!");
  };

  return (confirmSpecialCharacters + numericChar + lowerChar + upperChar);
}
// generatePassword();

// *-------- all code goes above this comment --------*

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
