const maxSubArraySum = (arr,sub) => {
  let maxsum=0;
  let tempsum=0;
  for(i=0;i<sub;i++){
    maxsum+=arr[i];
  }
  tempsum=maxsum;
  for(let j = sub;j<arr.length;j++){
    tempsum=tempsum+arr[j]-arr[j-sub];
    maxsum=Math.max(tempsum,maxsum);
  }
  return maxsum;
}
console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3],3))