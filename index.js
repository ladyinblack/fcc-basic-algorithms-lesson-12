// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Slice and Splice</h1>`;

/** TODO:
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index `n` of the second array.
 * Return the resulting array.  The input should remain the same after the function runs.
 
 function frankenSplice(arr1, arr2, n) {
   return arr2;
 }
 
 frankenSplice([1, 2, 3], [4, 5, 6], 1);
 */

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  // console.log("Console: ", newArr);
  for (const arr of arr1) {
    newArr.splice(n, 0, arr);
    // console.log('Console: ', newArr);
    n++;
    //   console.log(arr);
    //   newArr1.push(arr);
  }
  // newArr1.slice(newArr1.length, arr2.slice());
  // console.log(newArr1);
  // console.log("Original:", arr1, arr2);
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ['a', 'b'], 1));
console.log(
  frankenSplice(
    ['claw', 'tentacle'],
    ['head', 'shoulders', 'knees', 'shoulders', 'toes'],
    2
  )
);
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
