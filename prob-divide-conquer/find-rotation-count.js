// Constraint : Complexity O(log n)

function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // pivot point index is the awnser.
    if (arr[mid] < arr[mid - 1]) return mid;

    start = mid + 1;
  }
  return 0;
}

module.exports = findRotationCount;
