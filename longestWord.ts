// Write a function that takes a string of CSV values and returns the longest word in the list.

const csvString = 'apple,banana,watermelon,pear';
// Expected output: 'watermelon'

let array = csvString.split(',')
let longW = ''

for(word of array){
  if(word.length > longW.length){
    longW = word
  }
}

console.log(longW)