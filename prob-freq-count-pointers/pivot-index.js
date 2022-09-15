function pivotIndex(arr) {
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  let leftSum = 0;
  let idx = 0;

  while (idx < arr.length) {
    if (sum - leftSum - arr[idx] === leftSum) return idx;
    leftSum += arr[idx];
    idx++;
    console.log(leftSum);
  }
  return -1;
}

module.exports = pivotIndex;
