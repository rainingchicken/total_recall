// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e == 'Kevin');
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');

//the Farm
let animal = "cow";

const moo = (a) => {
  return a.toLowerCase === "cow" ? "mooooo" : "hey, that's not a cow";
};

console.log(moo(animal));

//Driver's Ed
//Make a variable that holds a person's age; be semantic
let driverAge = 17;
//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
const permit = (age) => {
  return age >= 16 ? "Here are the keys!" : "Sorry, you're too young.";
};
console.log(permit(driverAge));

//LOOPS
for (let i = 0; i < 100; i++) {
  console.log(i);
}

//The Basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let index = 0; index <= 10; index++) {
  console.log(index);
}

//Write a loop that will print out all the numbers from 10 up to and including 400
for (let index = 10; index <= 400; index++) {
  console.log(index);
}

//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let index = 12 - 3; index <= 4000; index++) {
  console.log(index + 3);
}

//Get Even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let index = 1; index < 100; index++) {
  console.log(index % 2 == 0 ? index + " <-- is an even number" : index);
}

//Give Me 5
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let index = 0; index <= 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log("I found a " + index + ". Three is a crowd. High five!");
  } else if (index % 3 == 0) {
    console.log("I found a " + index + ". Three is a crowd");
  } else if (index % 5 == 0) {
    console.log("I found a " + index + ". High five!");
  }
}

//Savings Account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0;
for (let index = 1; index <= 10; index++) {
  bank_account += index;
}
console.log(bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0;
for (let index = 1; index <= 100; index++) {
  bank_account += index * 2;
}
console.log(bank_account);

//ARRAYS & CONTROL FLOW
//1. What are the things in an array called?
//elements
//2.Do Arrays guarantee those things will be in order?
//yes?
//What real-life thing could you model with an array?
//names of employees or something

//Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["bruh", "yo", "noice"];

//Accessing elements
const randomThings = [1, 10, "Hello", true];
//How do you access the 1st element in the array?
randomThings[0];
//Change the value of "Hello"to "World"
randomThings[2] = "World";
//Check the value of the array to make sure it updated the array. How? Why, yes!
console.log(randomThings);

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//What would you write to access the 3rd element of the array?
ourClass[2];
//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

const myArray = [5, 10, 500, 20];
//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
//Remove the 5from the beginning of the array.
myArray.shift();
//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
//Remove the string of your choice from the end of the array.
myArray.pop();
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse(); //reverses the order of elements
console.log(myArray);

//console.log()s "little number" if the number is entered is less than 100
let n = 10;
if (n < 100) {
  console.log("little number");
}
//console.log()s big numberif the number is greater than or equal to 100.
if (n >= 100) {
  console.log("big number");
}

//console.log()little numberif the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".
let num = 10;
if (num < 5) {
  console.log("little number");
} else if (num > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0];
console.log(thomsCloset[0][0]);

//In the same way, access one item from Thom's pants array.
thomsCloset[1][0];
console.log(thomsCloset[1][0]);

//Access one item from Thom's accessories array.
thomsCloset[2][0];
console.log(thomsCloset[2][0]);

//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  "Thom is looking fierce wearing " +
    thomsCloset[0][2] +
    " and " +
    thomsCloset[2][2]
);
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[2][2] = "Footie Pajamas";
console.log(thomsCloset[2][2]);

//Functions

//Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
const printGreeting = (name) => {
  return "Hello there, " + name + "!";
};
console.log(printGreeting("Slimer"));

//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
const printCool = (name) => {
  return name + " is cool";
};
console.log(printCool("Captain Reynolds"));

//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
const calculateCube = (number) => {
  return number ** 3;
};
console.log(calculateCube(5));

//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
const isVowel = (character) => {
  return (
    character == "a" ||
    character == "e" ||
    character == "i" ||
    character == "o" ||
    character == "u"
  );
};

console.log(isVowel("a"));

//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (string1, string2) => {
  let arr = [];
  arr.push(string1.length);
  arr.push(string2.length);
  return arr;
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (arr) => {
  let result = [];
  for (const i in arr) {
    result.push(arr[i].length);
  }
  return result;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
const maxOfThree = (num1, num2, num3) => {
  let largest = num1;
  if (num2 >= num1) {
    largest = num2;
  }
  if (num3 >= num2) {
    largest = num3;
  }
  return largest;
};
console.log(maxOfThree(6, 9, 1));

//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (arrInput) => {
  //get array of element lengths
  let arr = [];
  for (const i in arrInput) {
    arr.push(arrInput[i].length);
  }
  //bubble sort!!
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //find string that equals the largest length and return it
  for (const index in arrInput) {
    if (arrInput[index].length == arr[arr.length - 1]) {
      return arrInput[index];
    }
  }
};

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

//OBJECTS

//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
let user = { name: "Wee Woo", email: "helpme@email.com", age: 30 };
console.log(user);

//Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
//Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++;
console.log(user);

//You have decided to add your user's location to the data that you want to collect.

//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "in-the-middle-of-nowhere";
console.log(user);

//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased = [];
user.purchased.push("carbohydrates");

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs");

// Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[2]);

//When we console.log user, we would see the friendobject added to our user object.
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "Dr. Doctor",
  age: 60,
  location: "pretty-far-away",
  purchased: [],
};

// Console.log just the friend's name
console.log(user.friend.name);

// Console.log just the friend's location
console.log(user.friend.location);

// CHANGE the friend's age to 55
user.friend.age = 55;
console.log(user.friend.age);

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");

// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);

//Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (const values in user.purchased) {
  console.log(user.purchased[values]);
}

//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (const values in user.friend.purchased) {
  console.log(user.friend.purchased[values]);
}

//Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
const updateUser = () => {
  user.age++;
  user.name.toUpperCase();
};
updateUser();
console.log(user);
// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
const oldAndLoud = (person) => {
  person.age++;
  person.name.toUpperCase();
};
oldAndLoud(user);
console.log(user);
// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)
