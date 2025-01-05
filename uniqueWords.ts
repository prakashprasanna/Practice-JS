// Write a function that takes a string of CSV values and returns an array of unique words in the list.
const csvString = 'apple,banana,apple,orange,banana,grape';
// Expected output: ['apple', 'banana', 'orange', 'grape']

let array:[] = csvString.split(',');
console.log(array)
let unique = [];

for(word of array){
  console.log(word)
  if(!unique.includes(word)){
    unique.push(word)
  }
}
console.log(unique)