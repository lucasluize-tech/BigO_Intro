function longestFall(arr) {
  let longest = 0;
  let count = 1;
  if (arr.length === 1) return 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      longest = count > longest ? (longest = count) : longest;
      count = 1;
    }

    if (arr[i + 1] > arr[i]) {
      longest = count > longest ? (longest = count) : longest;
      count = 1;
    }
    if (arr[i] > arr[i + 1]) {
      count++;
    }
    longest = count > longest ? (longest = count) : longest;
  }
  return longest;
}

module.exports = longestFall;
