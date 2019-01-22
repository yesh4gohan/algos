// const bubbleSort = arr => {
//   let count = 0;
//   for (let i = arr.length - 1; i > 0; i--) {
//     //start with entire loop
//     let swaps = false;//to check if there are any active swaos in current iterations
//     //loop till i and check to swap
//     for(j = 0; j < i; j++){
//       count++;
//       if(arr[j]>arr[j+1]){
//         swaps = true;
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//     if(!swaps){
//       break;//if nothing changes in current iteration then no need to check further 
//     }
//   }
//   console.log(count);
//   return arr;
// };

// console.log(bubbleSort([3, 7, 4, 2]));

// //3 7 4 2
// //3 4 7 2
// //3 4 2 7
// //3 4 2 7
// //3 2 4 7
// //2 3 4 7

const Bubble = (arr) => {
  for(let i = arr.length -1;i >=0;i--){
    let swap = false;
    for(let j = 0;j<i;j++){
      if(arr[j]>arr[j+1]){
        swap = true;
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    if(!swap){
      break;
    }
  }
  return arr;
}

console.log(Bubble([3, 7, 4, 2]));