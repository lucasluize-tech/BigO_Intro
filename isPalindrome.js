/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let numsArray = x.toString().split("");

  function check(numsArray, i = 0) {
    first = i;
    last = numsArray.length - i - 1;

    //base case
    if (i > numsArray.length / 2) return true;

    // check current and last
    while (numsArray.length / 2 >= i) {
      if (numsArray[first] !== numsArray[last]) {
        return false;
      }
      return check(numsArray, (i = i + 1));
    }
  }
  return check(numsArray);
};

console.log(isPalindrome(121));
console.log(isPalindrome(12321));
console.log(isPalindrome("123456"));

const isPalindrome2 = (x) => {
  if (x < 0) return false;

  let myString = x.toString().split("").reverse().join("");
  return !!(myString == x.toString());
};

console.log(isPalindrome2(121));
console.log(isPalindrome2(12321));
console.log(isPalindrome2("123456"));
