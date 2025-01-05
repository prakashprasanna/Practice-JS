// Find Palindromic Words in CSV Write a function that takes a CSV string of words and returns an array of words that are palindromes.
const csvString = 'radar,level,world,hello,madam';
// Expected output: ['radar', 'level', 'madam']

function Palindrome(csv){
  let arr = csv.split(',');
  
  let output =  arr.filter(a=>{
    return a === a.split('').reverse().join('')
  })
  
  return output
}

console.log(Palindrome(csvString))