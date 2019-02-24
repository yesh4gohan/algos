//Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.



const xProd = (arr1, arr2) => arr1.reduce((accumilator, currentArr1value) => 
accumilator
.concat
(arr2
.map(arr2Ele => [currentArr1value, arr2Ele])), []);
console.log(xProd([1, 2], ["a", "b"]));
