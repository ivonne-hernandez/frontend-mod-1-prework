/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 3;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

The if statement between the lines 14 through 18 is checking to see if a condition evaluates to true. On line 14 it is checking to see if doorChoice is strictly equal to 1, since it is, given that doorChoice = 1, then the statement in the subsequent code block is executed. Which means that bearClothing was assigned a value of hat. If doorChoice was not strictly equal to 1 then it would not run the subsequent code block but instead execute the code block inside of the else statement.

2. What variable has a new value assigned to it after the first if statement executes?

The bearClothing variable has a new value assigned to it after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The value of bearClothing would be scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

The if statement between the lines 27 and 35 is checking to see if a condition evaluates to true. On line 27 it is checking to see if bearChoice is strictly equal to 1, since it is, given that bearChoice = 1, then the statement in the subsequent code block (line 28) is executed and prints out the statement “You offer the bear your ”  + bearClothing + “ and the bear shows you a secret passage out.” If bearChoice was not strictly equal to 1, then it would not run the subsequent code block but instead check to see if the second condition on line 29 (bearChoice == 2) was true. If the first condition is false and the second condition is true, then it will run the subsequent code block on line 30. Otherwise, it would not run the subsequent code block but instead check to see if the third condition on line 31 (bearChoice == 3) was true. If the first and second condition are false and the third is true, then it will run the subsequent code block on line 32. Otherwise, it would not run the subsequent code block but instead run the code block on line 34.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

“You run as fast as you can into the next room” will be the final outcome.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

“You tell the bear the hat is too small and it starts to cry!” will be the final outcome.

7. What is your favorite ending?

My favorite ending occurs when the bearChoice is assigned to 1 because it has a happy ending no matter what the doorChoice is.
*/
