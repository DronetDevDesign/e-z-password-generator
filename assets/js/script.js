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

  var userInputNumber = window.prompt("How many characters would you like your password to contain?");
    console.log(userInputNumber);
  var specialCharacterArray = ["!", "#", "$", "%", "&", "()", "*", "+", "-", "<", "=", ">", "?", "@"];
   console.log(specialCharacterArray);
  var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(numberArray);
  var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    console.log(alphabetArray);

  var totalInput = userInputNumber;
  if (totalInput >= 8 && totalInput <= 128) {
     totalInput;
    } else {window.alert("Password must be AT LEAST 8 characters and NO MORE THAN 128 characters in length");
    generatePassword();
    };
    console.log(totalInput);

      var useSpecialCharacters = confirm("Click OK to confirm inlcuding special characters");
          useSpecialCharacters = specialCharacterArray.splice(Math.floor(Math.random() * specialCharacterArray.length), totalInput);
          useSpecialCharacters = useSpecialCharacters.join('').toString();
      if (useSpecialCharacters) {
        useSpecialCharacters;
      } else {
        useSpecialCharacters === false;
      }
        console.log(useSpecialCharacters);
        
      var useNumbers = confirm("Click OK to confirm including numeric characters");
          useNumbers = numberArray.splice(Math.floor(Math.random() * numberArray.length), totalInput);
          useNumbers =useNumbers.join('').toString();
      if (useNumbers) {
        useNumbers;
      } else {
        useNumbers === null;
      }
      console.log(useNumbers);

      var lowerCaseAlphabets = confirm("Click OK to confirm lowercase characters");
          lowerCaseAlphabets = alphabetArray;
          smallLetters = lowerCaseAlphabets.splice(Math.floor(Math.random() * lowerCaseAlphabets.length), totalInput);
          smallLetters = smallLetters.join('').toString().toLowerCase();
      if (smallLetters) {
        smallLetters;
      } else {
        smallLetters === false;
      }
      console.log(smallLetters);

      var upperCaseAlphabets = confirm("Click OK to confirm uppercase characters");
          upperCaseAlphabets = alphabetArray;
          bigLetters = upperCaseAlphabets.splice(Math.floor(Math.random() * upperCaseAlphabets.length), totalInput);
          bigLetters = bigLetters.join('').toString().toUpperCase();
      if (bigLetters) {
        bigLetters;
      } else {
        bigLetters === false;
      }
      console.log(bigLetters);

      if (!useSpecialCharacters && !useNumbers && !smallLetters && !bigLetters) {
        alert("You must select at least one character type!");
      }

      var userChoices = [useSpecialCharacters, useNumbers, smallLetters, bigLetters];
      var usersNumberChoice = totalInput;
      var userPassword = userChoices.join('').slice(0, usersNumberChoice);
      return userPassword;
}
// *-------- all code goes above this comment --------*

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


