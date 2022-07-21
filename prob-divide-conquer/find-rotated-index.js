// Constraint : Complexity O(log n)

function findRotatedIndex(arr, val) {
  start = 0;
  end = arr.length - 1;

  while (start <= end) {
    // find middle index
    let mid = Math.floor((start + end) / 2);
    let left = mid - 1;
    let right = mid + 1;

    if (arr[mid] === val) return mid;
    if (arr[left] === val) return left;
    if (arr[right] === val) return right;

    // compare mid to end point
    if (arr[mid] > val) {
      if (val > arr[end]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    //compare mid to start point
    if (arr[mid] < val) {
      if (val > arr[start]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
