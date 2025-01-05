// Convert CSV String to JSON Array
// Write a function that takes a CSV string of words and returns a JSON array of objects where each word is stored with a unique id.

const csvString = 'apple,banana,pear';
// Expected output: [{ id: 1, word: 'apple' }, { id: 2, word: 'banana' }, { id: 3, word: 'pear' }]

let arr = csvString.split(',');
let o=[]
let count = 1

let output = arr.map((a)=>{
  o.push({id:count, word:a})
  count++
})

console.log(o)