// Constraint : Complexity O(log n)

function findFloor(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (start === end) return arr[start];
    let mid = Math.floor((start + end) / 2);

    // if value more than array values.
    if (val > arr[end]) return arr[end];
    // if floor does not exist.
    if (val < arr[start]) return -1;

    // first compare mid more val.
    if (arr[mid] > val) {
      end = mid - 1;
    }
    if (arr[mid] < val) {
      start = mid + 1;
    }
  }
}

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5));

module.exports = findFloor;
