/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  if (words.length === i) return 0;
  let biggest = longest(words, i + 1);
  if (words[i].length >= biggest) {
    return words[i].length;
  } else {
    return biggest;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (str.length === i) return "";
  let result = "";
  if (i % 2 === 0) {
    result += str[i] + everyOther(str, i + 1);
  } else {
    return everyOther(str, i + 1);
  }
  return result;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (Math.ceil(str.length / 2) < i) return true;
  let last = str.length - 1;
  if (str[i] === str[last - i]) {
    isPalindrome(str, i + 1);
  } else {
    return false;
  }
  return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return -1;
  return arr[i] === val ? i : findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
  if (i < 0) return "";
  let result = "";
  result += str[i] + revString(str, i - 1);
  return result;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      gatherStrings(obj[key]).forEach((item) => result.push(item));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) return mid;
  if (val > arr[mid]) {
    start = mid + 1;
    return binarySearch(arr, val, start, end);
  } else {
    end = mid - 1;
    return binarySearch(arr, val, start, end);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
