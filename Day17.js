// https://www.codewars.com/kata/59ca8246d751df55cc00014c
// Level: 8 kyu

// Instructions:
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// Function:
function hero(bullets, dragons){
    var bulletsToDefeatDragon = dragons * 2;
    if (bullets < bulletsToDefeatDragon) {
        return false;
    } else {
        return true;
    }
}
    