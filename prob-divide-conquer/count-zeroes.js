function countZeroes(arr) {
  let end = arr.length - 1;
  let count = 0;

  while (arr[end] === 0) {
    count++;
    end -= 1;
  }
  return count;
}

countZeroes([1, 1, 1, 1, 0, 0]);
countZeroes([1, 0, 0, 0, 0]);
countZeroes([0, 0, 0]);
countZeroes([1, 1, 1, 1]);

module.exports = countZeroes;
