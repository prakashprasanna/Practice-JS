// Write a function that takes a CSV string and a letter, returning an array of all words starting with that letter.

const csvString = 'apple,banana,avocado,grape,apricot';
const letter = 'a';
// Expected output: ['apple', 'avocado', 'apricot']

let arr:[] = csvString.split(',');
let output = [];

for(let word of arr){
  if(word.slice(0,1) === letter){
    output.push(word);
  }
}

console.log(output)