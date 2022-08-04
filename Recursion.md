# Recursion

Having a function call itself. Very powerful technique and Popular interview question.

## looping vs Recursion

Any loop can be wirtten instead with recursion and vice-versa.

```JS
function count(){
  let count
  for (let i = 0; i < 3; i++){
    count += i;
  }
  return count
}
```

Recursevely

```JS
function count(n=1){
  if (n>3) return;
  console.log(n)
  count(n+1)
}
```

## Base Case

Every recursive function needs a base case, which is when to stop.

```JS
function concat(arr){
  // base case
  if (arr.length === 0) return "";
  // normal case
  return arr[0] + concat(arr.slice(1))
}

function doubler(nums){ // nums = [1,2,[3,4,5,[6,7,8],9],10,11]
  for (let n of nums){
    if (Array.isArray(n)){
      doubler(n)
    }else {
      console.log(n*2)
    }
  }
} // => 2 4 6 8 10 12 14 16 18 20 22
```

## When to use Recursion?

Nested Data is good to use recursion.

## Runtime

concat example function is O(n^2) because we are creating new arrays(n) , n times.
but we could instead :

```js
function sum(nums, i = 0) {
  if (i === nums.length) return 0;
  return nums[i] + sum(nums, i + 1);
  // now it's o(n), because we are not creating new arrays, just looping over nums
}
```
