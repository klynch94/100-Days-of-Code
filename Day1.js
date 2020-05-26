// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
// Level 8kyu


// Instructions:
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

//   sumStr("4", "5")    // should output "9"
//   sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero.


// Function:
function sumStr(a,b) {
  if (a === "") {
      a = 0;
  } 
  else {
      a = parseInt(a);
  }

  if (b === "") {
      b = 0;
  }
  else {
      b = parseInt(b);
  }

  var sum = (a+b);
  return sum.toString();  
}
