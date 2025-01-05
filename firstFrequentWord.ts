// Find the First Repeated Word
// Write a function that takes a CSV string and returns the first word that appears more than once.

const csvString = 'apple,banana,grape,banana,apple';
// Expected output: 'banana' (since it's the first repeated word)

function output(c){
  let arr = c.split(',');
  let output = [];
  
  for(let word of arr){
    if(output.includes(word)){
      return word;
    }else{
      output.push(word)
    }
  }
}

console.log(output(csvString))