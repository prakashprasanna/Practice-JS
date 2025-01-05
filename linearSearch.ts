function linearSearch(arr,target){
    let n = arr.length;
      for(let i = 0; i < n; i++){
        if(arr[i] === target){
          return i
        }
      }
  }
  
  const array = [64, 34, 25, 12, 22, 11, 90,1];
  let target = 1;
  console.log(linearSearch(array,target));