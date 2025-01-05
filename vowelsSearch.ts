// Count Vowels in Each Word Write a function that takes a CSV string and returns an object where each word is a key, and the value is the number of vowels in that word.

const csvString = 'apple,banana,grape,kiwi';
// Expected output: { apple: 2, banana: 3, grape: 2, kiwi: 2 }

function Vowels(csv){
  
  let arr = csv.split(',');
  let v = 'aeiouAEIOU';
  let output = {};
  
  arr.map(a=>{
    let c = a.split('').filter(c=>v.includes(c)).length
    
    output[a] = c
  })
  
  return output
  
}

console.log(Vowels(csvString))