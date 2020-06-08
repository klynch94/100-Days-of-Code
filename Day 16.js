// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
// Level: 8kyu

// Instructions:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Function:
function digitize(n) {
    var numToString = n.toString();
    var array = Array.from(numToString);
    var newArray = [];
    for (var i = 0; i<array.length; i++) {
        newArray.push(partInt(array[i]));
    }
    return newArray.reverse();
}
