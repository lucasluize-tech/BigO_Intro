Below are tables for Array methods in both JavaScript and Python.

### JavaScript Array Methods ( Object.hasOwnPropertyNames(Array.prototype))

| Method        | Parameters                  | Example                                                          | Time Complexity | Space Complexity |
| ------------- | --------------------------- | ---------------------------------------------------------------- | --------------- | ---------------- |
| `push`        | `element1, ..., elementN`   | `arr.push(1) // Adds 1 to end`                                   | O(1)            | O(1)             |
| `pop`         | `-`                         | `arr.pop() // Removes last element`                              | O(1)            | O(1)             |
| `shift`       | `-`                         | `arr.shift() // Removes first element`                           | O(n)            | O(1)             |
| `unshift`     | `element1, ..., elementN`   | `arr.unshift(1) // Adds 1 to start`                              | O(n)            | O(1)             |
| `splice`      | `start, deleteCount, items` | `arr.splice(2, 1, 'new') // Replaces at index 2`                 | O(n)            | O(n)             |
| `slice`       | `begin, end`                | `arr.slice(1, 3) // Returns sub-array`                           | O(n)            | O(n)             |
| `indexOf`     | `searchElement, fromIndex`  | `arr.indexOf('item') // Finds 'item' index`                      | O(n)            | O(1)             |
| `sort`        | `compareFunction`           | `arr.sort() // Sorts array`                                      | O(n log n)      | O(1)             |
| `reverse`     | `-`                         | `arr.reverse() // Reverses array`                                | O(n)            | O(1)             |
| `map`         | `callback`                  | `arr.map(x => x * 2) // Doubles elements`                        | O(n)            | O(n)             |
| `filter`      | `callback`                  | `arr.filter(x => x > 2) // Filters elements`                     | O(n)            | O(n)             |
| `reduce`      | `callback, initialValue`    | `arr.reduce((a, b) => a + b, 0) // Sums elements`                | O(n)            | O(1)             |
| `some`        | `callback`                  | `arr.some(x => x > 2) // Returns True if any`                    | O(n)            | O(1)             |
| `every`       | `callback`                  | `arr.every(x => x > 2) // Returns True if all`                   | O(n)            | O(1)             |
| `join`        | `separator`                 | `arr.join(', ') // Joins elements`                               | O(n)            | O(n)             |
| `concat`      | `value1, ..., valueN`       | `arr.concat([1, 2]) // Adds elements`                            | O(n)            | O(n)             |
| `fill`        | `value, start, end`         | `arr.fill(0, 1, 3) // Fills with 0 from 1 to 3`                  | O(n)            | O(1)             |
| `find`        | `callback`                  | `arr.find(x => x > 2) // Finds first`                            | O(n)            | O(1)             |
| `findIndex`   | `callback`                  | `arr.findIndex(x => x > 2) // Finds first index`                 | O(n)            | O(1)             |
| `includes`    | `value, fromIndex`          | `arr.includes('item') // Returns True if any`                    | O(n)            | O(1)             |
| `reduceRight` | `callback, initialValue`    | `arr.reduceRight((a, b) => a + b, 0) // Sums from right to left` | O(n)            | O(1)             |
| `copyWithin`  | `target, start, end`        | `arr.copyWithin(0, 1, 3) // Copies from 1 to 3 to 0`             | O(n)            | O(1)             |
| `entries`     | `-`                         | `arr.entries() // Returns iterator`                              | O(1)            | O(1)             |

### Python List Methods (dir(list))

| Method      | Parameters          | Example                                      | Time Complexity | Space Complexity |
| ----------- | ------------------- | -------------------------------------------- | --------------- | ---------------- |
| `append`    | `object`            | `arr.append(1) // Adds 1 to end`             | O(1)            | O(1)             |
| `pop`       | `index`             | `arr.pop() // Removes last element`          | O(n)            | O(1)             |
| `insert`    | `index, object`     | `arr.insert(1, 'new') // Inserts at index 1` | O(n)            | O(1)             |
| `remove`    | `value`             | `arr.remove('item') // Removes 'item'`       | O(n)            | O(1)             |
| `sort`      | `-`                 | `arr.sort() // Sorts list`                   | O(n log n)      | O(1)             |
| `reverse`   | `-`                 | `arr.reverse() // Reverses list`             | O(n)            | O(1)             |
| `index`     | `value, start, end` | `arr.index('item') // Finds 'item' index`    | O(n)            | O(1)             |
| `count`     | `value`             | `arr.count('item') // Counts 'item'`         | O(n)            | O(1)             |
| `map`       | `callback`          | `map(lambda x: x * 2, arr) // Doubles list`  | O(n)            | O(n)             |
| `filter`    | `callback`          | `filter(lambda x: x > 2, arr) // Filters`    | O(n)            | O(n)             |
| `reduce`    | `callback`          | `reduce(lambda a, b: a + b, arr) // Sums`    | O(n)            | O(1)             |
| `slice`     | `start, end`        | `arr[1:3] // Returns sub-list`               | O(n)            | O(n)             |
| `extend`    | `iterable`          | `arr.extend([1, 2]) // Adds elements`        | O(n)            | O(1)             |
| `clear`     | `-`                 | `arr.clear() // Removes all elements`        | O(n)            | O(1)             |
| `copy`      | `-`                 | `arr.copy() // Returns shallow copy`         | O(n)            | O(n)             |
| `len`       | `-`                 | `len(arr) // Returns length`                 | O(1)            | O(1)             |
| `max`       | `-`                 | `max(arr) // Returns max`                    | O(n)            | O(1)             |
| `min`       | `-`                 | `min(arr) // Returns min`                    | O(n)            | O(1)             |
| `sum`       | `-`                 | `sum(arr) // Returns sum`                    | O(n)            | O(1)             |
| `any`       | `-`                 | `any(arr) // Returns True if any`            | O(n)            | O(1)             |
| `all`       | `-`                 | `all(arr) // Returns True if all`            | O(n)            | O(1)             |
| `enumerate` | `-`                 | `enumerate(arr) // Returns (index, value)`   | O(n)            | O(1)             |
| `zip`       | `-`                 | `zip(arr1, arr2) // Returns [(a, b), ...]`   | O(n)            | O(1)             |
| `reversed`  | `-`                 | `reversed(arr) // Returns reversed iterator` | O(n)            | O(1)             |
