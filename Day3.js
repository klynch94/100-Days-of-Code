// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
// Level: 8kyu

// Instructions: 
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// Function: 
function arrayPlusArray(arr1, arr2) {
    var sum1 = 0;
    var sum2 = 0;
    for (var i=0; i<arr1.length; i++) {
        sum1 += arr1[i];
    }
    for (var x=0; x<arr2.length; x++) {
        sum2 += arr2[x];
    }
    return sum1 + sum2;
  }