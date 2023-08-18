Sure! Here are tables for Number methods in both JavaScript and Python.

### JavaScript Number Methods

| Method          | Parameters       | Example                              | Time Complexity | Space Complexity |
| --------------- | ---------------- | ------------------------------------ | --------------- | ---------------- |
| `toFixed`       | `digits`         | `(10.5).toFixed(0) // "10"`          | O(1)            | O(n)             |
| `toExponential` | `fractionDigits` | `(10).toExponential(2) // "1.00e+1"` | O(1)            | O(n)             |
| `toPrecision`   | `precision`      | `(10.5).toPrecision(2) // "11"`      | O(1)            | O(n)             |
| `toString`      | `radix`          | `(10).toString(2) // "1010"`         | O(log n)        | O(log n)         |
| `valueOf`       | `-`              | `(10).valueOf() // 10`               | O(1)            | O(1)             |

### Python Number Methods

In Python, numbers (integers and floats) are basic data types, and they don't have methods like strings or lists. However, you can use functions from the math library or other built-in functions to manipulate numbers.

Here are some common examples:

| Function | Parameters          | Example                   | Time Complexity | Space Complexity |
| -------- | ------------------- | ------------------------- | --------------- | ---------------- |
| `abs`    | `x`                 | `abs(-10) // 10`          | O(1)            | O(1)             |
| `round`  | `number[, ndigits]` | `round(10.5, 0) // 11`    | O(1)            | O(1)             |
| `divmod` | `x, y`              | `divmod(10, 3) // (3, 1)` | O(1)            | O(1)             |
| `float`  | `x`                 | `float(10) // 10.0`       | O(1)            | O(1)             |
| `int`    | `x`                 | `int(10.5) // 10`         | O(1)            | O(1)             |

Please note that the time complexity of the `toString` method in JavaScript is related to the conversion of a number to a string representation in a given radix, and space complexity reflects the size of the resultant string.
