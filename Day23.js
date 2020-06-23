// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
// Level: 8 kyu

// Instructions:
// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Function:
function twoSort(s) {
    var newArr = s.sort();
    var firstName = newArr[0];
    var answer = firstName.split('');
    return answer.join("***");
}