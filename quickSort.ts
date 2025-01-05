
function QuickSort(arr){
    if(arr.length < 1){
      return arr
    }
    let pivot = arr[Math.floor(arr.length/2)]
    let left = arr.filter(l=>l<pivot);
    let middle = arr.filter(m=>m===pivot);
    let right = arr.filter(r=>r>pivot);
    
    return [...QuickSort(left),...middle,...QuickSort(right)]
  }
  
  let array = [8,4,2,7,1,22,44,55,25,78,56,34,88,16]
  console.log(QuickSort(array))