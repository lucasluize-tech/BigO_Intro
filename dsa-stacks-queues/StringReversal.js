const Stack = require("./stack");

function reverseString(string) {
  let reversed = new Stack();
  const size = reversed.size;
  let result = "";

  for (let str of string) {
    reversed.push(str);
  }
  for (let i = 0; i < size; i++) {
    result += reversed.pop();
  }
  return result;
}

// time complexity O(n)?

module.exports = reverseString;
