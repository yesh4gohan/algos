const binarySearch = (arr,term) => {
  arr.sort();
  let start = 0;
  let end = arr.length -1;
  let mid = Math.floor(start+end/2);

  while(start <= end){
    if(term  === arr[mid]){
      return mid;
    }
    if(term > arr[mid]){
      start = mid+1;
    }
    else{
      end = mid-1;
    }
    mid = Math.floor(start+end/2);
  }
}

console.log(binarySearch([4,2,5,3,1],4));