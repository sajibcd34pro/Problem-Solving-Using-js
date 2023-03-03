// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
/**
 a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
 */

var fruits = ['Apple', 'Banana', 'Orange'];
// solution of a
var indexOfBanana = fruits.indexOf('Banana')
// check the result 
// console.log(indexOfBanana) /1 

// solution of b:
fruits.pop()

var newFruits = fruits.push('Watermelon')
console.log(fruits)