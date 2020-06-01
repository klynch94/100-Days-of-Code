// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
// Level: 8kyu


// Instructions:
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// Function: 
function getGrade (s1, s2, s3) {
    // first I need to get the mean of the inputs
    var mean = (s1 + s2 + s3)/3;
    // now I need to check where the mean falls within the grading scale
    if (90 <= mean) {
        return "A";
    } else if (80 <= mean) {
        return "B";
    } else if (70 <= mean) {
        return "C";
    } else if (60 <= mean) {
        return "D";
    } else if (0 <= mean) {
        return "F"
    }
}