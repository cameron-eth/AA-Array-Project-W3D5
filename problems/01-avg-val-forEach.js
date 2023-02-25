/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

*/
let arr1 =[3, 7, 2, 1, 2];
let avgVal = function(arr) {
    let total = 0;
    arr.forEach(element => {
      total += element ;
    },0);
  if(total <= 0){
    return null;
  }
    return total /arr.length;
};
console.log(avgVal(arr1));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}