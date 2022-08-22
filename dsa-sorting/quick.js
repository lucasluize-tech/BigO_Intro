/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[start];
  let pivotIndex = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

  return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  //base case
  if (left >= right) return arr;
  //normal case
  let pivotIndex = pivot(arr, left, right);
  quickSort(arr, left, pivotIndex);
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

module.exports = { quickSort, pivot };
