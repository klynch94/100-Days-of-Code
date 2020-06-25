https://www.codewars.com/kata/59cfc000aeb2844d16000075
// Level: 7 kyu

// Instructions:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Function:
function capitalize(s){
    // need an array to hold my answers
    var answer = [];
    var even = "";
    var odd = "";
    // for loop with if statement to uppercase and lowercase depending on even/odd
    for(var x=0; x<s.length; x++) {
        if(x%2 === 0) {
            even += s[x].toUpperCase();
            odd += s[x];
        } else {
            even += s[x];
            odd += s[x].toUpperCase();
        }
    }
    answer.push(even);
    answer.push(odd);
    return answer;
};