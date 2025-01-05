// Count Words of a Specific Length
// Write a function that takes a CSV string and a number n, and returns the count of words with exactly n letters.

const csvString = 'apple,banana,pear,kiwi,grape';
const n = 5;
// Expected output: 2 (apple and grape are all 5 letters)

let arr:[] = csvString.split(',');
let output = [];

for(let word of arr){
  if(word.length === n){
    output.push(word)
  }
}

console.log(output)