/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the toppings have been changed.

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  changeProtein(protein) {
    this.protein = protein;
  }

  addTopping(topping) {
    this.toppings.push(topping); //this.toppings is an array which means that I can use the push method in order to add an element to it
  }
};

var steak = new Burrito("steak", "flour tortilla",["cheese", "sour cream", "guacamole"]);
var breakfast = new Burrito("eggs", "flour tortilla",["cheese", "beans", "salsa"]);
var chicken = new Burrito("chicken", "whole wheat tortilla", ["cheese", "rice", "beans"]);

steak.changeProtein("chicken");
console.log(steak);

steak.addTopping("bell peppers");
console.log(steak);

breakfast.addTopping("potatoes");
console.log(breakfast);
