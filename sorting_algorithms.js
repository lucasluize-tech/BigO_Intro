function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let idx;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        idx = j;
      }
    }
    if (idx) {
      [array[idx], array[i]] = [array[i], array[idx]];
    }
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

// helper function to mergeSort
function merge(arr1, arr2) {
  let result = [];
  let a = 0;
  let b = 0;
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] <= arr2[b]) {
      result.push(arr1[a]);
      a++;
    } else {
      result.push(arr2[b]);
      b++;
    }
  }
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

// merge([1,3,5,5,7,7,9],[2,4,4,6,8,8]) --> [1,2,3,4,4,5,5,6,7,7,8,8,9]

//Now split array and rearrange.
function mergeSort(array) {
  // divide the array into smaller arrays.
  if (array.length <= 1) return array; // base case
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

module.exports = { bubbleSort, mergeSort, merge, insertionSort, selectionSort };
