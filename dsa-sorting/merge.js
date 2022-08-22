function merge(arr1, arr2) {
  // output array, pointer a, pointer b.
  let result = [];
  let a = 0;
  let b = 0;
  // compare and move pointers
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] <= arr2[b]) {
      result.push(arr1[a]);
      a++;
    } else {
      result.push(arr2[b]);
      b++;
    }
  }
  // add last elements to output array
  while (a < arr1.length) {
    result.push(arr1[a]);
    a++;
  }
  while (b < arr2.length) {
    result.push(arr2[b]);
    b++;
  }
  return result;
}

// recursively
function mergeSort(array) {
  // divide the array into smaller arrays.
  if (array.length <= 1) return array; // base case
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
