const lefShift = (arr, times) => {
  for (let j = 0; j < times; j++) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i-1] = arr[i];     
    }
    arr[arr.length-1] = temp;
  }
  
};
lefShift([1,2,3,4],4);