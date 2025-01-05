// Filter Out Words with Specific Character(s)
// Write a function that takes a CSV string and a character, returning a CSV string of words that do not contain that character.

const csvString = 'apple,banana,pear,grape,kiwi';
const char = 'a';
// Expected output: 'pear,kiwi' (removes words containing 'a')
function a(s,c){
let arr:[] = s.split(',');

let output = arr.filter(a => !a.includes(c));
  
  return output
  
}

console.log(a(csvString,char))