// https://www.codewars.com/kata/55eca815d0d20962e1000106
// Level: 8 kyu

// Instructions:
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)


// Function:
function generateRange(min, max, step){
    newArry = [];
    for (var i = min; i <= max; i = i+step) {
        newArry.push(i);
    }
    return newArry;
}