# Problem Solving

## 1 - Understand the problem

- Can I restate the problem in my own words?
- What are the inputs? what types allowed?
- What are the outputs that should come from the solution to the problem?
- Do I have enough information?
- How Should I label the important pieces of data that are a part of the problem
- ASK QUESTIONS , HAVE A DIALOG ABOUT THE PROBLEM. DON'T BE QUIET.

## 2 - Explore Concrete Examples

// write a function which takes in a string and returns counts of each character in the
string.

- Start with simple examples :
  `charChount('hello') => {'h':1, 'e':1, "l":2, "o":1}`
- Progress to more complex examples ;
  `charCount('My phone number is (333)-222-3344')`

- Explore examples with empty inputs.
- Explore examples with invalid inputs.

## 3 - Break it Down

- Explicitly write out steps you need to take.
- You can type this as pseudocode or write it on a whiteboard
- this forces you to think about the code you'll wirte before you write it
- this helps you catch any lingering conceptual issue or misunderstandings
- Dont write code.

// write a function which takes in a string and returns counts of each character in the
string. ( lowercase numbers and letters)

```js
function charChout(str) {
  // create the object to hold the charcount
  //loop over each char in str
  // if char is letter or number
  // if char is in object , add 1 to count
  // else , add to object and set count to 1
  // return object with character counts
}
```

## 4 - Solve a simpler Problem.

"if there is a problem you can't solve, then there is an easier problem you can solve:
find it." - Geroge Polya

- Find the core difficulty in what you're trying to do.
- Temporarily ignore that difficulty
- write a simplified solution
- then incorporate the difficulty back in

// write a function which takes in a string and returns counts of each character in the
string. ( lowercase numbers and letters)

`// if char is letter or number` => hardest part of the problem. Write the other parts of the problem and then find the solution.

## 5 - Use Tools Strategically

- Use your debugging tools.
- Don't guess and check.
- Scientific approach: formulate hypothesis, test, conclude, repeat.

## 6 - Look back and refactor

- Does the result match your expected output?
- Can you improve the performance of the solution? identify the problems
- What other ideas could you have pursued?

# Some Patterns to Problem Solving

### Frequency Counters

this pattern uses objects, maps, or sets to collect values/frequencies of values.
this can often avoid the need for nested loops o(n2).

Example : Function Squares, second array must have the same frequency of the values ,
squred. [1,2,3] => [1,4,9] // true , [1,2,3] => [1,4,4,9] // false

```js
function squares(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freq1 = {};
  let freq2 = {};
  arr1.forEach((val) => (freq1[val] = freq1[val] + 1 || 1));
  arr2.forEach((val) => (freq2[val] = freq2[val] + 1 || 1));
  for (let item in freq1) {
    if (!freq2[item ** 2]) return false;
    if (freq1[item] !== freq2[item ** 2]) return false;
  }
  return true;
}
```

in this solution we use the frequency counter to avoid nested looping and now we get o(n)
instead.

example : // validAnagram

```js
function frequencyLetters(str) {
  let result = {};
  str = str.split("");
  str.forEach((val) => (result[val] = result[val] + 1 || 1));
  return result;
}

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let str1freq = frequencyLetters(str1);
  let str2freq = frequencyLetters(str2);
  for (let key in str1freq) {
    if (str1freq[key] !== str2freq[key]) return false;
  }
  return true;
}
```