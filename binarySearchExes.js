/**
  Usually when you're given a sorted data structure, you can use binary search to find values in it.
  Set up: 
  - Define the output required, if its a target value, target index or something else entirely.
  - Initialize all necessary pointers, start, end, counter, etc.
  - if using recursion, pointers will be passed as arguments, provide base case
  - if using iteration, pointers will be initialized in the function
  - Loop through the data structure until the start and end pointers cross each other.
  
  ps: Recursion is usually more elegant and easier to read, but iteration is usually more efficient.

 */

// Iterative Binary Search

console.log("------------countZeroes------------");
/**
    countZeroes([1, 1, 1, 1, 0, 0]); // 2
    countZeroes([1, 0, 0, 0, 0]); // 4
    countZeroes([0, 0, 0]); // 3
    countZeroes([1, 1, 1, 1]); // 0
 */

const countZeroes = (arr) => {
  let count = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === 0) {
      count += end - mid + 1;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return count;
};

const countZeroesRecursive = (
  arr,
  start = 0,
  end = arr.length - 1,
  count = 0
) => {
  const mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] === 0) {
      count += end - mid + 1;
      return countZeroesRecursive(arr, start, mid - 1, count);
    } else {
      return countZeroesRecursive(arr, mid + 1, end, count);
    }
  }
  return console.log(count);
};

console.log("------------sortedFrequency------------");
/**
   sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
   sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
   sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
 */

const sortedFrequency = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      let left = mid - 1;
      let right = mid + 1;
      count++;
      while (arr[left] === val) {
        count++;
        left--;
      }
      while (arr[right] === val) {
        count++;
        right++;
      }
      return count;
    } else {
      arr[mid] > val ? (end = mid - 1) : (start = mid + 1);
    }
  }

  return count;
};

const sortedFrequencyRecursive = (
  arr,
  val,
  start = 0,
  end = arr.length - 1
) => {
  if (start > end) return console.log(0);
  const mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] === val) {
      count = 1;
      let left = mid - 1;
      let right = mid + 1;
      while (arr[left] === val) {
        count++;
        left--;
      }
      while (arr[right] === val) {
        count++;
        right++;
      }
      return console.log(count);
    } else {
      return arr[mid] > val
        ? sortedFrequencyRecursive(arr, val, start, mid - 1)
        : sortedFrequencyRecursive(arr, val, mid + 1, end);
    }
  }
  return console.log(count);
};

console.log("------------findRotatedIndex------------");
/** 
  findRotatedIndex([3, 4, 1, 2], 4); // 1
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
  findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
 */

// recursive solution
const findRotatedIndex = (arr, val, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) return mid;
  if (arr[start] === val) return start;
  if (arr[end] === val) return end;

  while (start <= end) {
    if (arr[mid] > val) {
      return arr[start] > val
        ? findRotatedIndex(arr, val, mid + 1, end)
        : findRotatedIndex(arr, val, start, mid - 1);
    } else {
      return arr[end] < val
        ? findRotatedIndex(arr, val, start, mid - 1)
        : findRotatedIndex(arr, val, mid + 1, end);
    }
  }
  return -1;
};

// iterative solution
const findRotatedIndexIterative = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) return mid;

    if (arr[start] <= arr[mid]) {
      num >= arr[start] && num < arr[mid] ? (end = mid - 1) : (start = mid + 1);
    } else {
      num > arr[mid] && num <= arr[end] ? (start = mid + 1) : (end = mid - 1);
    }
  }
  return -1;
};

console.log("------------findRotationCount------------");
/**
    basically find the index of the smallest value in the array
    findRotationCount([15, 18, 2, 3, 6, 12]); // 2
    findRotationCount([7, 9, 11, 12, 5]); // 4
    findRotationCount([7, 9, 11, 12, 15]); // 0
 */

// recursive solution
const findRotationCount = (arr, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] < arr[mid - 1]) return mid;
  if (arr[mid] > arr[mid + 1]) return mid + 1;

  while (start <= end) {
    return arr[mid] < arr[end]
      ? findRotationCount(arr, start, mid - 1)
      : findRotationCount(arr, mid + 1, end);
  }
  return 0;
};

// iterative solution
const findRotationCountIterative = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) return mid + 1;
    if (arr[mid - 1] > arr[mid]) return mid;

    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return 0; // The array has not been rotated
};

console.log("------------findFloor------------");
/**
    findFloor([1, 2, 8, 10, 10, 12, 19], 5); // 2
    findFloor([1, 2, 8, 10, 10, 12, 19], 20); // 19
    findFloor([1, 2, 8, 10, 10, 12, 19], 0); // -1
 */

const findFloor = (arr, val, start = 0, end = arr.length - 1) => {
  let floor = -1; // output
  const mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] === val) {
      floor = arr[mid - 1] ? arr[mid - 1] : -1;
      return floor;
    }
    if (arr[mid] > val) {
      if (!arr[mid - 1] || arr[mid - 1] < val) {
        floor = arr[mid - 1] ? arr[mid - 1] : -1;
        return floor;
      } else {
        return findFloor(arr, val, start, mid - 1);
      }
    }
    if (arr[mid] < val) {
      if (!arr[mid + 1] || arr[mid + 1] > val) {
        floor = arr[mid];
        return floor;
      } else {
        return findFloor(arr, val, mid + 1, end);
      }
    }
  }
};

const findFloorIterative = (arr, val) => {
  let floor = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      floor = arr[mid - 1] === undefined ? -1 : arr[mid - 1];
      return floor;
    }
    if (arr[mid] > val) {
      if (arr[mid - 1] === undefined || arr[mid - 1] < val) {
        floor = arr[mid - 1];
        return floor;
      } else {
        end = mid - 1;
      }
    }
    if (arr[mid] < val) {
      if (arr[mid + 1] === undefined || arr[mid + 1] > val) {
        floor = arr[mid];
        return floor;
      } else {
        start = mid + 1;
      }
    }
  }
};
