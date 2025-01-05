// Write a function that takes a string of CSV values and returns an array of words sorted alphabetically.

const csvString = 'banana,apple,grape,orange';
// Expected output: ['apple', 'banana', 'grape', 'orange']

let array:[] = csvString.split(',');
let sort:[] = array.sort();
console.log(sort)