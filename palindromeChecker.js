function palindrome(str) {
//?standardize the input
//remove non-alphanumeric characters
let inputStr = str.replace(/\W/g, '');
inputStr = str.replace(/[^a-zA-Z0-9]/g, '');
console.log(inputStr);

//make sure it's lowercase
inputStr = inputStr.toLowerCase();
console.log(inputStr);

//Reverse the input string
//let inputReverse = inputStr.split('').reverse().join('');
let inputReverse = inputStr.split('');
console.log(inputReverse);
inputReverse = inputReverse.reverse();
console.log(inputReverse);
inputReverse = inputReverse.join('');
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
  
palindrome("race car");