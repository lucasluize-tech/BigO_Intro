function separatePositive(arr) {
  arr = arr.sort((a, b) => a - b);
  // lets create some pointers;
  let start = 0;
  let count = arr.length;
  console.log(arr);
  while (count !== 0) {
    // let's work with the negatives first
    if (arr[start] < 0) {
      arr.push(arr[start]);
      arr.shift();
      count--;
    }

    if (arr[start] > 0) {
      count--;
    }
  }

  return arr;
}

module.exports = separatePositive;
