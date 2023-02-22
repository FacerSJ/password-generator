
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// // Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// // Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Function to prompt user for password options

 // 1. promt user to write the length of the password they want.

function generatePassword() {
  confirmPasswordLength = prompt ('How many character would you like your password to contain?', 'Choose a number between 10 and 64');

var confirmPasswordLength = parseInt(confirmPasswordLength);


// 2. If the number is less than 10 or more than 64, alert that the number needs to be more than 10 or less than 64.

  if (confirmPasswordLength > 64) {
    alert('Password length must be less than 64')
    return generatePassword();
  
  }

  else if (confirmPasswordLength < 10) {
  alert('Password length must be more than 10')
  return generatePassword();
    
  };


// 3a. prompt to give user option to choose which characters they want to be included in their password.

  var confirmSpecialCharacter = confirm ('Click OK to confirm including special characters');
  var confirmNumericCharacter = confirm ('Click OK to confirm including numeric characters');
  var confirmLowerCase = confirm ('Click OK to confirm including lowercase characters');
  var confirmUpperCase = confirm ('Click OK to confirm including uppercase characters');

// 3b. If none of the characters are chosen, alert that at least one character type must be selected.

if (!(confirmSpecialCharacter || confirmNumericCharacter || confirmLowerCase || confirmUpperCase)) {
  // if (confirmSpecialCharacter && confirmNumericCharacter && confirmUpperCase && confirmLowerCase === false)
  alert('Please select at least one character type');
  return generatePassword();
};



// 4. Random Gernerator

// defining passwords as a blank value that can be filled
var password = "";

while (password.length < confirmPasswordLength) {
  if (confirmUpperCase) {
    // concat together (non-array concat)
    password += getRandomUpper();
    // once it reaches the number entered it breaks the cycle
    if (password.length === confirmPasswordLength) break;
  }

  if (confirmLowerCase) {
    password += getRandomLower();
    if (password.length === confirmPasswordLength) break;
  }

  if (confirmNumericCharacter) {
    password += getRandomNumber();
    if (password.length === confirmPasswordLength) break;
  }

  if (confirmSpecialCharacter) {
    password += getRandomSymbol();
    if (password.length === confirmPasswordLength) break;
  }
}

// turns string into an (emtpy?) array to shuffle (.split = splitting the characters into one of each)
password = password.split("");
// Empty array to be filled based on for loop selecting random characters from the array
for (var i = 0; i < password; i++) {
  randomPassword = password[Math.floor(Math.random() * password.length)]; 
}
// returns array into string
return password.join("");
};



// I found writing the code with string.fromCharCode and the relevant numbers easier than using the characters that have been written out at the top.

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
