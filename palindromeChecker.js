function palindrome(str) {
//?standardize the input
//remove non-alphanumeric characters
let inputStr = str.replace(/\W/g, '');

//make sure it's lowercase
inputStr = inputStr.toLowerCase();

//Reverse the input string
let inputReverse = inputStr.split('').reverse().join("");
console.log(inputReverse);

//Compare the original and reversed strings
return console.log(inputStr === inputReverse);
    
  }
  
palindrome("eye");