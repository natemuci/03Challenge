function generatePassword() {
  // defines usable characters
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var characters = [];
// asks for password length
  numberChoice = window.prompt("number of charaters");
  if (numberChoice < 8 || numberChoice > 128){
    return "please choose a number between 8-129" 
  
  }
  // checks for desired characters using boolean
  confirmLower = window.confirm("Click OK to confirm including lowercase charcters?")
  confirmUpper = window.confirm("Click OK to confirm including uppercase charcters?")
  confirmSpecial = window.confirm("Click OK to confirm including special characters")
  confirmNumber = window.confirm("Click OK to confirm including numbers?")
  // ensures at least one option is chosen
  if (!confirmLower && !confirmUpper && !confirmSpecial && !confirmNumber) {
    return "Please select at least one option."
  }
  // group characters with true booleans
  if (confirmLower) {
    characters = characters.concat(lowercase);
  }
  if (confirmUpper) {
    characters = characters.concat(uppercase);
  }
  if (confirmNumber) {
    characters = characters.concat(numbers);
  }
  if (confirmSpecial) {
    characters = characters.concat(special);
  }
// randomize and create final password
  var newPass = ""
  for (var index = 0; index < numberChoice; index++) {
   var i = [Math.floor(Math.random() * characters.length)];
   
    newPass = newPass + characters[i];
  }
  // returns info from function
  return newPass
}  

// Assignment Code
  var generateBtn = document.querySelector("#generate");
// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

   


 // Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


