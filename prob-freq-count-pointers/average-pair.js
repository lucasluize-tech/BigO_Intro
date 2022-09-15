function averagePair(arr, avg) {
  // check for a pair in the Array that has the avg.
  let start = 0;
  let end = arr.length - 1;
  if (arr.length === 0) return false;
  // create pointers to check
  while (start < end) {
    let target = avg * 2;
    if (arr[start] + arr[end] === target) return true;
    if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[start] + arr[end] < target) {
      start++;
    }
  }
  return false;
}

module.exports = averagePair;
