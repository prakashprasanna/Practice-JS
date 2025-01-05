// Count Occurrences of Each Word
// Write a function that takes a CSV string and returns an object where keys are words and values are the number of occurrences of each word.

const csvString = 'apple,banana,apple,orange,banana,grape,banana,banana';
// Expected output: { apple: 2, banana: 2, orange: 1, grape: 1 }

let arr:[] = csvString.split(',');
let count = {[key:string]:number}; 
for(let word of arr){
  if(count[word]){
    count[word] += 1
  }else{
    count[word] = 1
  }
}
console.log(count)
let maxCount = 0
let output = null

for (let w in count){
  if(count[w] > maxCount){
    maxCount = count[w];
    output = w
  }
}

console.log(output)