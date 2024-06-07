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

// //the Farm
// let animal = "cow";

// const moo = (a) => {
//   return a.toLowerCase === "cow" ? "mooooo" : "hey, that's not a cow";
// };

// console.log(moo(animal));

// //Driver's Ed
// //Make a variable that holds a person's age; be semantic
// let driverAge = 17;
// //Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
// const permit = (age) => {
//   return age >= 16 ? "Here are the keys!" : "Sorry, you're too young.";
// };
// //console.log(permit(driverAge));

// //LOOPS
// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// //The Basics
// //Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let index = 0; index <= 10; index++) {
//   console.log(index);
// }

// //Write a loop that will print out all the numbers from 10 up to and including 400
// for (let index = 10; index <= 400; index++) {
//   console.log(index);
// }

// //Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let index = 12 - 3; index <= 4000; index++) {
//   console.log(index + 3);
// }

//Get Even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let index = 1; index < 100; index++) {
//   console.log(index % 2 == 0 ? index + " <-- is an even number" : index);
// }

//Give Me 5
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for (let index = 0; index <= 100; index++) {
//   if (index % 3 == 0 && index % 5 == 0) {
//     console.log("I found a " + index + ". Three is a crowd. High five!");
//   } else if (index % 3 == 0) {
//     console.log("I found a " + index + ". Three is a crowd");
//   } else if (index % 5 == 0) {
//     console.log("I found a " + index + ". High five!");
//   }
// }

//Savings Account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bank_account = 0;
// for (let index = 1; index <= 10; index++) {
//   bank_account += index;
// }
// console.log(bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// bank_account = 0;
// for (let index = 1; index <= 100; index++) {
//   bank_account += index * 2;
// }
// console.log(bank_account);

//ARRAYS & CONTROL FLOW

//OBJECTS

// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)
