function palindrome(str) {
//?standardize the input
//remove non-alphanumeric characters
let inputStr = str.replace(/\W/g, '');
inputStr = str.replace(/[^0-9a-zA-Z_]/g, '');
console.log(inputStr);

//make sure it's lowercase
inputStr = inputStr.toLowerCase();

//Reverse the input string
let inputReverse = inputStr.split('').reverse().join('');
console.log(inputReverse);

//Compare the original and reversed strings
let check = "";
if (inputStr === inputReverse)
{
    check = true;
} else {
    check = false;
}
console.log(check);
return check;


//return console.log(inputStr === inputReverse);

    
  }
  
palindrome("_eye");