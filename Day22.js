// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
// Level: 8 kyu

// Instructions:
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// Function:
function drawStairs(n) {
    var steps = "";
    for (var i = 0; i < n; i++) {
      var j = 0;
      while (j < i && i != 0) {
        j++;
        steps += " ";
      }
      if (n === 1 || i === (n-1)) {
        steps += "I";
      } else {
        steps += "I\n";
      }
    }
    return steps;
  }
