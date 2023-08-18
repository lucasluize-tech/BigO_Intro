/**
 * @param {Number} n
 * @return {Number}
 */

const fibRecursive = (n) => {
  if (n <= 1) return n;

  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

const fibIterative = (n) => {
  if (n <= 1) return n;
  let first = 0,
    second = 1,
    temp;

  while (n > 1) {
    temp = first + second;
    first = second;
    second = temp;
    n--;
  }
  return temp;
};

const fibMemoized = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  return memo[n];
};

let startTime = new Date().getTime();
console.log(
  fibRecursive(40),
  `Time: ${(new Date().getTime() - startTime) * 1000}s`
);
startTime = new Date().getTime();
console.log(
  fibIterative(40),
  `Time: ${(new Date().getTime() - startTime) * 1000}s`
);
startTime = new Date().getTime();
console.log(
  fibMemoized(40),
  `Time: ${(new Date().getTime() - startTime) * 1000}s`
);
