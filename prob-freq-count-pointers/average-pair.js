function averagePair(arr, avg) {
  // check for a pair in the Array that has the avg.
  let start = 0;
  if (arr.length === 0) return false;
  // create pointers to check
  while (arr.length > start) {
    if (arr.includes(avg * 2 - start)) return true;
    start++;
  }
  return false;
}

module.exports = averagePair;
