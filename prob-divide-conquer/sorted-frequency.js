function sortedFrequency(arr, val) {
  let count = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    //find the mid index
    let mid = Math.floor((start + end) / 2);

    // if mid equals to value
    if (arr[mid] === val) {
      // pointers
      let left = mid - 1;
      let right = mid + 1;
      count++;
      while (arr[left] === val) {
        count++;
        left -= 1;
      }
      while (arr[right] === val) {
        count++;
        right += 1;
      }
      return count;
    }

    // if mid diff than value
    if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
