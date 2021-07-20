/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {

}

var clifford = new Dog();
var beethoven = new Dog();
console.log(clifford);
console.log(beethoven);

// Prompt 2: Snack
class Snack {

}

var twix = new Snack();
var chips = new Snack();
console.log(twix);
console.log(chips);

// Prompt 3: Shirt
class Shirt {

}

var dressShirt = new Shirt();
var tShirt = new Shirt();
console.log(dressShirt);
console.log(tShirt);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class DogWithProperties {
  constructor() {
    this.age = 12;
    this.weight = "185 lbs";
    this.breed = "St. Bernard";
  }
}

var clifford = new DogWithProperties();
console.log(clifford);

// Prompt 2: Snack
class SnackWithProperties {
  constructor() {
    this.calories = 180;
    this.weight = "210 grams";
    this.color = "brown";
  }
}

var twix = new SnackWithProperties();
console.log(twix);

// Prompt 3: Shirt
class ShirtWithProperties {
  constructor() {
    this.color = "black";
    this.size = "small";
    this.material = "cotton";
  }
}

var dressShirt = new ShirtWithProperties();
console.log(dressShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DogDynamic {
  constructor(age, weight, breed) {
    this.age = age;
    this.weight = weight;
    this.breed = breed;
  }
}

var balto = new DogDynamic(14, "35 lbs", "Siberian Husky");
console.log(balto);

// Prompt 2: Snack
class SnackDynamic {
  constructor(calories, weightInGrams, snackColor) {
    this.calories = calories;
    this.weight = weightInGrams;
    this.color = snackColor;
  }
}

var poptart = new SnackDynamic(200, "48 grams", "brown");
console.log(poptart);

// Prompt 3: Shirt
class ShirtDynamic {
  constructor(color, size, material) {
    this.color = color;
    this.size = size;
    this.material = material;
  }
}

var threeDaysGrace = new ShirtDynamic("white", "small", "cotton");
console.log(threeDaysGrace);
