// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
// Level 8: kyu

// Instructions:
// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// Function:
function bmi(weight, height) {
    var denominator = Math.pow(height, 2);
    var bmiCalc = weight/denominator;
    if (bmiCalc <= 18.5) {
        return "Underweight";
    } else if (bmiCalc <= 25.0) {
        return "Normal";
    } else if (bmiCalc <= 30.0) {
        return "Overweight";
    } else if (bmiCalc > 30) {
        return "Obese";
    }
}
