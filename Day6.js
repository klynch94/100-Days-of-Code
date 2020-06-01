// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
// Level: 8kyu

// Instructions: 
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

// Function: 
function expressionMatter(a, b, c) {
    var max = a + b + c
    if (max < a * b * c) {
        max = a * b * c;
    }
    if (max < a * (b + c)) {
        max = a * (b + c);
    }
    if (max < a + b * c) {
        max = a + b * c;
    }
    if (max < (a + b) * c) {
        max = (a + b) * c;
    }
    if (max < (a * b) + c) {
        max = (a * b) + c;
    }
    if (max < a + (b * c)) {
        max = a + (b * c);
    }

    return max;
  }