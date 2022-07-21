// Constraint : Complexity O(log n)

function countZeroes(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // if array starts with zero , than qty = array.length
    if (arr[start] === 0) return arr.length - start;

    if (arr[mid] !== 0) {
      start = mid + 1;
    }
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      start = mid;
    }
    if (arr[mid] === 0 && arr[mid - 1] === 0) {
      start = mid - 1;
    }
  }
  return 0;
}

module.exports = countZeroes;
