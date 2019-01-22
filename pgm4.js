const leader = (arr) => {
  let leaderArray = [];
  for(let i = 0;i<arr.length-1;i++){
    let lead = arr[i];
    for(j = i;j<arr.length;j++){
      if(arr[j]>lead){
        lead = arr[j];
      }
    }
    if(lead === arr[i]){
      leaderArray.push(lead);
    }
  }
  leaderArray.push(arr[arr.length-1]);

  return leaderArray;
}

console.log(leader([7, 4, 5, 7, 3]))