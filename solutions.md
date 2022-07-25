## SOLUTIONS

### Alternate Solution 1
```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
```
### Code Explanation
- Our goal is to take all of the elements from `arr1` and insert them into `arr2` starting with index position `n`.  At the same time we must ensure that neither `arr1` or `arr2` have been mutated.
- Using the `slice()` function we can create an exact replica of `arr2` and assign the result of the operation to a variable, `localArray`.
- Now that we have an array that we can mutate on, we can iterate through every item in the first array.  First each item in the first array we can use the `splice()` function to insert the item into index `n` of `localArray`.
- We increment the index `n` by one.  This will ensure that every item from the `arr1` is inserted into `localArray` in the proper index position.
- Finally, we return the `localArray` and end the function.


### Alternate Solution 2
```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
```
### Code Explanation
- Since our goal is to return the new array without altering `arr1` or `arr2` we create a `localArr` and add all the items from `arr2` usingthe `slice()` function.
- Since the `splice()` function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of `arr1` into `localArr`.  `n` is the starting position where our content will be inserted.  We won't be deleting any elements so the next argument is `0`.  Then we add the entire contents of `arr1` using spread syntax `...`.
- `localArr` is returned and the function is complete.


### Alternate Solution 3
```js
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
```
### Code Explanation 
- Use spread operators with slice to return an array.
- First spread operator uses the slice method to only give the portion of `arr2` from index `0` to `n`.
- Second spread operator passes all elements from `arr1`.
- Third spread operator uses the slice method to return all elements starting at index `n` to the end of the array.


