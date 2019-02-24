// Write a JavaScript program to filter out the non-unique values in an array.

const filter_Non_Unique = arr => {
  const obj = {};
  arr.map(e=>{
    obj[e] ? obj[e]+=1 : obj[e] = 1;
  })
  return Object.keys(obj).filter(e=>obj[e] === 1).map(e=>parseInt(e))
};
console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));
