// Calculate Total Length of Words Write a function that takes a CSV string and returns the sum of the lengths of all the words.
const csvString = 'apple,banana,pear,kiwi';
// Expected output: 19 (5 + 6 + 4 + 4)

function CalculateTotal(csv){
  
  let arr = csv.split(',')
  let total = 0;
  let output = []
      
      arr.map(a=>{
        total+=a.length
        output.push(a.length)
      })
  console.log(`${total} (${output.join(' + ')})`)
}

console.log(CalculateTotal(csvString))