function palindrome(str) {
//standardize the input
//Remove non-alphanumeric characters including spaces
let inputStr = str.replace(/\W/g, '');
inputStr = str.replace(/[^a-zA-Z0-9]/g, '');

//make sure it's lowercase
inputStr = inputStr.toLowerCase();

//Reverse the input string
let inputReverse = inputStr.split('').reverse().join('');

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
}
  
palindrome("race car");