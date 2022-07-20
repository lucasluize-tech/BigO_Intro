let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let counter = 1;

function binarySearchRecursively(arr, target, start, end) {
  if (start > end) return console.log("not found");

  // get middle value.
  let middlePoint = Math.floor((start + end) / 2);

  console.log(
    middlePoint,
    `is the middlePoint Index and it's value is ${arr[middlePoint]}`
  );

  // compare to target.
  if (arr[middlePoint] === target)
    return console.log(`found in ${counter} tries`);

  if (arr[middlePoint] < target) {
    counter++;
    return binarySearchRecursively(arr, target, middlePoint + 1, end);
  } else {
    counter++;
    return binarySearchRecursively(arr, target, start, middlePoint - 1);
  }
}

binarySearchRecursively(array, 14, 0, array.length - 1);

function binarySearchIterative(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let count = 1;

  while (start <= end) {
    let middlePoint = Math.floor((start + end) / 2);
    if (arr[middlePoint] === target)
      return console.log(`found in ${count} tries`);
    if (arr[middlePoint] < target) {
      start = middlePoint + 1;
      count++;
    } else {
      end = middlePoint - 1;
      count++;
    }
  }
  return false;
}

binarySearchIterative(array, 14);
