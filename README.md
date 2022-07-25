# js-mqnp4s

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-mqnp4s)

###[Slice and Splice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice)

## PROBLEM EXPLANATION
We need to copy each element from the first array into the second array starting at the index `n`.  We've also got to ensure that the original arrays are not mutated.  That is, we cannot make any changes to the original arrays.

## HINTS
### Hint 1
Create a copy of the second array inside of the function.  This will ensure that the original array is not mutated.  This can be done by using the slice operation on the second array, and assign it to a variable.
### Hint 2
Loop through all of the items in the first array.  For each item in the first array splice it into the copied array in the index given as argument.
### Hint 3
Increment the index after performing the splice.

### REFERENCE LINKS
- [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [`Array.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
