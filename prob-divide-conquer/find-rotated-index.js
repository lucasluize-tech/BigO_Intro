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

console.log(findRotatedIndex([3, 4, 1, 2], 4));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));
module.exports = findRotatedIndex;
