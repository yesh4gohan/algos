function hourglassSum(arr) {
  let sum = Number.MIN_VALUE;
  for (let i = 0; i < 4; i++){
      for (let j = 0; j < 4; j++){
        let localsum = 0;
        let counter = 0;
          for (let k = i; k < i + 3; k++){
              
              for (let l = j; l < j + 3; l++){
                counter++;
                if(counter === 4 || counter === 6){
                  continue;
                }
                  localsum += arr[k][l];
                  
              }
              
          }
          if (localsum > sum) {
            sum = localsum;
        }
      }
  }
  return sum;
}

console.log(hourglassSum([[ 1, 1, 1, 0, 0, 0 ],
                          [ 0, 1, 0, 0, 0, 0 ],
                          [ 1, 1, 1, 0, 0, 0 ],
                          [ 0, 0, 2, 4, 4, 0 ],
                          [ 0, 0, 0, 2, 0, 0 ],
                          [ 0, 0, 1, 2, 4, 0 ] ]));