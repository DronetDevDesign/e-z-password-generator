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
  window.confirm("Click OK is you're ready to start the process!");

  var userCharNumber = window.prompt("How many characters would you like your password to contain?");
  if (userCharNumber >= 8 && userCharNumber <= 128) {
    console.log(userCharNumber);
  } else {
    window.alert("Password must be AT LEAST 8 characters and NO MORE THAN 128 characters in length");
  };

  var specialCharArray = window.confirm("Click OK to confirm inlcuding special characters");
    specialCharArray = ["!", "#", "$", "%", "&", "()", "*", "+", "-", "<", "=", ">", "?", "@"];
    specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
    console.log(specialCharArray);

  var numericCharArray = window.confirm("Click OK to confirm including numeric characters");
    numericCharArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numericCharArray[Math.floor(Math.random() * numericCharArray.length)];
    console.log(numericCharArray);

  var charArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];;

  var lowerCaseChars = window.confirm("Click OK to confirm lowercase characters");
    lowerCaseChars = charArray.toString().toLowerCase();
    console.log(lowerCaseChars);

  var upperCaseChars = window.confirm("Click OK to confirm uppercase characters");
    upperCaseChars = charArray.toString().toUpperCase();
    console.log(upperCaseChars);

    // if (!specialCharArray && !numericCharArray && !lowerCaseChars && !upperCaseChars) {
    //   window.alert("You must select at least one character type!");
    // };
  };
  
  generatePassword();

// *-------- all code goes above this comment --------*

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
