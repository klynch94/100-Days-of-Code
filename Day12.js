// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript 
// Level: 8kyu

// Instructions:
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// Function:
function tripleTrouble(one, two, three){
    // first I create a new variable to hold my new string
    var newString = []
    // I need a for loop to run through each input and grab the first letter in each.
    for (var i = 0; i<one.length; i++) {
        newString.push(one[i]);
        newString.push(two[i]);
        newString.push(three[i]);
    }
    return newString.join("");
}