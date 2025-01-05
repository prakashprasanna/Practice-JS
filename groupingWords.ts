// Group Words by Initial Letter Write a function that takes a CSV string and returns an object grouping words by their initial letter.
const csvString = 'apple,banana,avocado,grape,apricot,kiwi';
// Expected output: { a: ['apple', 'avocado', 'apricot'], b: ['banana'], g: ['grape'], k: ['kiwi'] }
const output = []
function GroupWords(csv){
  
  let arr = csv.split(',');
  
  let group = arr.map(a=>a.slice(0,1));
  let g = [...new Set(group)]
  let d = []
  for(let e of g){
  d.push({[e]:arr.filter(a=>a.slice(0,1) === e && a)}) 
  }  

  return d.reduce((o,b)=>({...o,...b}))
}

console.log(GroupWords(csvString))