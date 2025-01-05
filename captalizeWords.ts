// CSV to Capitalized Words
// Write a function that takes a CSV string and returns a CSV string with each word capitalized.

const csvString = 'apple,banana,pear,grape';
// Expected output: 'Apple,Banana,Pear,Grape'

function a(c){
let arr = csvString.split(',')

let output =  arr.map(a=>a.charAt(0).toUpperCase()+a.slice(1))
return output;
}

console.log(a(csvString).join(','))