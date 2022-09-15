// o(n)

function countPairs(arr, sum) {
  // sort first
  arr = arr.sort((a, b) => a - b);
  let count = 0; // keep count
  // make pointers
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // if sum
    if (arr[start] + arr[end] === sum) {
      count++;
      start++;
      end--;
      continue;
    }
    // if more than sum
    if (arr[start] + arr[end] > sum) {
      end--;
    }
    // if less than sum
    if (arr[start] + arr[end] < sum) {
      start++;
    }
  }

  return count;
}

module.exports = countPairs;
