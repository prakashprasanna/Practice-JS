// Transform CSV to Title Case Write a function that takes a CSV string of words and returns a CSV string where each word is transformed to title case.
const csvString = 'hello,world,this,is,typescript';
// Expected output: 'Hello,World,This,Is,Typescript'

function TitleCase(csv){
  
  let arr = csv.split(',');
  
  return arr.map(a=>a.charAt(0).toUpperCase()+a.slice(1))
  
}

console.log(TitleCase(csvString).join(','))