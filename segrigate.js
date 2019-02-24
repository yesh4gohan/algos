/*
Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
*/

const bifurcate  = (arr,condArr) => {
  let trueArr = [];
  let falseArr = [];
  arr.map((ele,index) => {
    condArr[index] ? trueArr.push(ele) : falseArr.push(ele)
  })
  return {
    trueArr,
    falseArr
  }
}

console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
