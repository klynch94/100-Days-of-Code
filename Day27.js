// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
// Level: 7kyu

// Instructions:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// Function:
function largestPairSum(numbers) {
    // sory array highest to lowest
    var highToLow = numbers.sort((a,b)=>b-a);
    var answer = highToLow[0] + highToLow[1];
    return answer;
}
