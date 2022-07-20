# Big O Notation

**An algorithm is O(f(n)) if number of simple operations is evetually less than a constant times f(n), as (n) increases**

Measure the Speed* of the Functions/Algorithms

*Timing can be different always, same of diff machines*



- If we have always a fixed number of operations:
  
  > O(1) or constant .
  > 
  > ```js
  > function addUp(n){
  >     return n * (n+1)/ 2
  > }
  > ```

- if operations scale as inputs scale linearly (n):
  
  > O(n) .
  > 
  > ```js
  > function addUp2 (n){
  >     total = 0;
  >     for (let i =1; i <= n; i++){
  >         total+= i;
  >     }
  > }
  > ```

- if operations scale quadratically with (n<sup>2</sup>):
  
  > O(n<sup>2</sup>)
  > 
  > ```js
  > function printPairs(n){
  >     for (var i = 0; i < n; i++ {
  >         for (var j = 0; j < n; j++) {
  >         //do stuff with i and j
  >         }
  >     }
  > }
  > ```



**There are a bunch of different functions , being constant time the best and Quadratic or more worst.**



A good way to tell if it's linear is checking if the function has a **loop.**

**conditionals** will make linear faster by excluding inputs, so we don't need to count those. *we will always count the general trend worst case scenario*



## Rules for Big O expressions



- **Constants do not matter. ( 25n + 30n => O(n) )**

- **Between n and n<sup>2</sup> the only one that matters is the biggest (O(n<sup>2</sup>)**

- **Arithmetics are constant**

- **Variable assignment is constant**

- **Getting object from an index or by a key wil be constant**

- **Loops: length of the loop times complexity of whatever happens in loop**



## Common Runtimes

O(n Log n), O(n), O(log n), O(1) - Good runtimes.

O(n!), O(2<sup>n</sup>), O(n<sup>2</sup>) - Bad runtimes.



### Remembering Log

The Log of a number is roughly the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

### Must knows for now

- A loop does not mean it’s O(n)!
- A loop in a loop does not mean it’s O(n<sup>2</sup>)!
- Best runtime for sorting is O(n × log n)
- It is *not* same as log n



## Space Complexity !

how will memory usage scale as size of inputs increase.



#### Rules in Js

- Primitives ( bool, num, undefined, null) constant

- Strings O(n) string Length

- Arrays, Objects O(n) where n is the items in the Array or Object.




