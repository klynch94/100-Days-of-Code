// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// Level 8kyu

// Instructions:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Function:
var countSheep = function (num) {
    var string = "";
    for (var i = 1; i<=num; i++) {
        string += i + " sheep...";
    }
    return string;
}