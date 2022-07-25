# Problem Solving - Divide and Conquer

In this exercise, you’ll utilize problem solving patterns to solve the following code challenges:

## countZeroes

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

**Constraints**:

Time Complexity: O(log N)

Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

**My solution:**

```js
function countZeroes(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // if array starts with zero , than qty = array.length
    if (arr[start] === 0) return arr.length - start;

    if (arr[mid] !== 0) {
      start = mid + 1;
    }
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      start = mid;
    }
    if (arr[mid] === 0 && arr[mid - 1] === 0) {
      start = mid - 1;
    }
  }
  return 0;
}
```

## sortedFrequency

Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

**Constraints**:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1

**My solution:**

```js
function sortedFrequency(arr, val) {
  let count = 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    //find the mid index
    let mid = Math.floor((start + end) / 2);

    // if mid equals to value
    if (arr[mid] === val) {
      // pointers
      let left = mid - 1;
      let right = mid + 1;
      count++;
      while (arr[left] === val) {
        count++;
        left -= 1;
      }
      while (arr[right] === val) {
        count++;
        right += 1;
      }
      return count;
    }

    // if mid less than value
    if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
```



## findRotatedIndex

Write a function called findRotatedIndex which accepts a
 rotated array of sorted numbers and an integer. The function should 
return the index of num in the array. If the value is not found, return 
-1.

**Constraints**:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

**My solution:**

```js
function findRotatedIndex(arr, val) {
  start = 0;
  end = arr.length - 1;

  while (start <= end) {
    // find middle index
    let mid = Math.floor((start + end) / 2);
    let left = mid - 1;
    let right = mid + 1;

    if (arr[mid] === val) return mid;
    if (arr[left] === val) return left;
    if (arr[right] === val) return right;

    // compare mid to end point
    if (arr[mid] > val) {
      if (val > arr[end]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    //compare mid to start point
    if (arr[mid] < val) {
      if (val > arr[start]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}
```



## findRotationCount

Write a function called findRotationCount which accepts 
an array of distinct numbers sorted in increasing order. The array has 
been rotated counter-clockwise n number of times. Given such an array, 
find the value of n.

**Constraints**:

Time Complexity: O(log N)

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0



**My solution:**

```js
function findRotationCount(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // pivot point index is the awnser.
    if (arr[mid] < arr[mid - 1]) return mid;

    start = mid + 1;
  }
  return 0;
}
```

## findFloor

Write a function called findFloor which accepts a sorted
 array and a value x, and returns the floor of x in the array. The floor
 of x in an array is the largest element in the array which is smaller 
than or equal to x. If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1

**Constraints**

Time Complexity: O(log N)



**My solution:**

```js
function findFloor(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (start === end) return arr[start];
    let mid = Math.floor((start + end) / 2);

    // if value more than array values.
    if (val > arr[end]) return arr[end];
    // if floor does not exist.
    if (val < arr[start]) return -1;

    // first compare mid more val.
    if (arr[mid] > val) {
      end = mid - 1;
    }
    if (arr[mid] < val) {
      start = mid + 1;
    }
  }
}
```

## Further Study

[Divide and Conquer - LeetCode](https://leetcode.com/tag/divide-and-conquer/)
