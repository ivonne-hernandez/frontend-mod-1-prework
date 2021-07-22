// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Create a buildABear function with the following parameters: name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  //create a greeting variable and use interpolation to add the name parameter to your greeting
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //create a demographics variable whose array contains name and age elements
  var demographics = [name, age];
  //create a powerSaying variable and use concatenation to add the specialPower parameter to your saying
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // create a builtBear object with the following key-value pairs:
  // basicInfo = demographics, clothes = clothes, exterior = fur, cost = 49.99, sayings array with the following elements: greeting, powerSaying, "Goodnight my friend", isCuddly = true.
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
  // return the builtBear
  return builtBear
}
// call the buildABear function and pass it the following arguments
console.log(buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'));

// call the buildABear function and pass it the following arguments
console.log(buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'));



//FizzBuzz
// create a fizzBuzz function with 3 parameters: num1, num2 and range
function fizzBuzz(num1, num2, range) {
  //create a for loop whose counter is less than or equal to the range
  for (var i = 0; i <= range; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    } else if (i % num1 === 0) { //otherwise, if
      console.log('fizz');
    } else if (i % num2 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
//if i modulo num1 and i modulo num2 are strictly equal to 0, then console log 'fizzbuzz'
//else if i modulo num1 is strictly equal to 0, then console log 'fizz'
//else if i modulo num2 is strictly equal to 0, then console log 'buzz'
//else console log the counter

//call the fizzBuzz function with the following arguments
fizzBuzz(3, 5, 10);
//call the fizzBuzz function with the following arguments
fizzBuzz(5, 8, 10);
