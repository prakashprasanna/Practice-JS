// CSV Word Frequency in Descending Order Write a function that takes a CSV string and returns an array of words sorted by their frequency in descending order. If two words have the same frequency, sort them alphabetically.
const csvString = 'apple,banana,apple,orange,banana,grape,banana';
// Expected output: ['banana', 'apple', 'grape', 'orange']

function UniqueDescending(csv){
  
  let arr = csv.split(',');
  
  let r = arr.reverse();
  
  console.log(r)
  
  let u = [...new Set(r)];
  
  console.log(u)
}

console.log(UniqueDescending(csvString))