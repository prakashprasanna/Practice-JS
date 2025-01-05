// // CSV Words Starting and Ending with Same Letter
// // Write a function that takes a CSV string and returns an array of words that start and end with the same letter.

const csvString = 'apple,banana,grape,gag,madam';
// Expected output: ['gag', 'madam']

let arr = csvString.split(',');

let output = []

for(let word of arr){
  if(word.charAt(0) === word.charAt(word.length - 1)){
    output.push(word)
  }
}

console.log(output)