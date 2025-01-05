// Longest Word Starting with a Specific Letter Write a function that takes a CSV string and a letter, returning the longest word that starts with the given letter.
const csvString = 'apple,banana,avocado,apricot,grape';
const letter = 'a';
// Expected output: 'avocado'

function LongestWord(csv){
  
  let arr = csv.split(',')
  let output = arr.filter(a=>a.slice(0,1) === letter && a)
  
  let o =   output.reduce((l,c)=>{
      return l.length < c.length ? c : l
  })
  
  return o

}

console.log(LongestWord(csvString))