
function binarySearch(arr,target){
    if(arr.length < 1){
      return 'empty array'
    }
    let a= arr.sort((a,b)=>a-b);
    let left = 0;
    let right = arr.length - 1;
      
    while(left <= right){
        let mid = Math.floor((left+right)/2);
      if(arr[mid] === target){
        return mid+' is the index of target '+target 
      }else if(arr[mid] < target){
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    //return -1;
  }
  
  let array = [8,4,2,7,1,22,44,55,25,78,56,34,88,16];
  let target =88;
  console.log(binarySearch(array,target))