
// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
// Write password to the #password input

// Prompt should ask the user how many characters they want.. must be more than 8 less than 128
alert
function generatePassword() {
  var minLength = 21;
  var maxLength = 128;

  var randomCharacters = "abcdefgh123456!@#$*&%_-+EFGHIJ";
  let retValue = "";

  for (var i = 0; i < minLength; i++) {
    retValue += randomCharacters.charAt(Math.floor(Math.random() * (21)));
  }

  return retValue;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// console.log(passwordText)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);