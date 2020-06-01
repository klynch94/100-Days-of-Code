// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// Level: 8kyu

// Instructions: 
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// Function:
function abbrevName(name){
    var initials = name.toUpperCase().split(" ");
    return initials[0].charAt(0) + "." + initials[1].charAt(0);
}