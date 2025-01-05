// Write a function that takes a string of CSV values and returns the shortest word in the list.

const csvString = 'banana,apple,kiwi,pear';
// Expected output: 'kiwi'

let arr:[] = csvString.split(',');

let shortest = arr.reduce((shortest,current)=>{
    return current.length < shortest.length ? current : shortest
})

console.log(shortest)