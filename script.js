// 
//I need a new, secure password wHEN I click the button to generate a password
//I am presented with a series of prompts for password criteria WHEN prompted for password criteria
//I select which criteria to include in the password WHEN prompted for the length of the password
//I choose a length of at least 8 characters and no more than 128 characters WHEN asked for character types to include in the password
//I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters WHEN I answer each prompt
//my input should be validated and at least one character type should be selected WHEN all prompts are answered
//a password is generated that matches the selected criteria WHEN the password is generated
//the password is either displayed in an alert or written to the page
 
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var numberOne = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



function generatePassword(){
  //TODO: your code goes here
  var length = prompt("Password entered must be at least 8 characters Long. Please enter your password length here");
            while(length<8 || length>128 || isNaN(length)) 
            {length = prompt("Password entered must be at least 8 characters Long. Please enter your password length here");


            }






  var lowerCase = confirm("password must include lowercase characters.");

  var upperCase = confirm("password must include uppercase characters.");

  var specialCharacter = confirm("password must include special characters.");

  var numbers = confirm("password must include numbers.");

  var display = [];

  if (lowerCase) { 
    display = display.concat(lower);
  }

  if (upperCase) { 
    display = display.concat(upper);
  }

  if (specialCharacter) { 
    display = display.concat(special.split(""));
  }

  if (numbers) { 
    display = display.concat(numberOne);
  }

  console.log (display)
  var pass = ""


  for (var i = 0; i < length; i++) {
    pass += display[Math.floor(Math.random() * display.length)]; 
  }





  return pass



}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
