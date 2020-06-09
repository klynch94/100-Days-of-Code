// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Level: 8 kyu

// Instructions:
// Get the number n (n>0) to return the reversed sequence from n to 1.
// Example : n=5 >> [5,4,3,2,1]


// Function:
const reverseSeq = n => {
    var newArr = [];
    for (var i = n; i > 0; i--) {
        newArr.push(i);
    }
    return newArr;
};
