// const insertionSort = (arr) => {
//   for(let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i];
//     let j;
//     for(j = i-1;j>=0 && arr[j]>currentValue;j--){
//       arr[j+1] = arr[j];
//     }
//     arr[j+1] = currentValue;
//   }
//   return arr;
// }

// 

// insertion sort means to insert just remember this you will get the logic

const insertionSort = ( arr) => {
  for(let i = 1;i<arr.length;i++){
    let currentValue = arr[i];
    let j;
    for(j = i-1;j>=0 && arr[j] > currentValue;j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }
 
  return arr;
}

console.log(insertionSort([2,1,4,3,5]));
