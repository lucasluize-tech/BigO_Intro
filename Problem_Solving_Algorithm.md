# Problem Solving Algorithm

## Divide and Conquer strategy

Example : Search Algorithm. Find an item in a Array.

```js
function linearSearch(arr, target){
    for (let i=0; i < arr.length; i++){
        if (arr[i) === target) return i;
    }
    return -1;
}
```

this would be a O(n) search algorithm.

let's try a Binary Search , which will need a sorted array.

- look at the middle value , is it bigger , smaller or equal to target?

- eliminate values to the right if its bigger

- eliminate values to the left if its smaller

- repeat process until found.

```js
function binarySearchIterative(arr, target){
    let start = 0;
    let end = arr.length -1;
    while (start <= end){
        let mp = Math.floor((start + end)/2);
        if (arr[mp] === target) return true;
        if (arr[mp] < target){
            start = mp + 1;
        } else {
            end = mp - 1;
        }
    }
    return false;
}

// OR WE COULD DO THIS RECURSEVELY!


function binarySearchRecursively(arr, target, start, end){
    if (start > end ) return false;
    let mp = Math.floor((start + end)/2);
    if (arr[mp]=== target) return true;
    if (arr[mp] < target){
        return binarySearchRecursively(arr, target, mp+1, end)
    } else {
        return binarySearchRecursively(arr, target, start, mp-1)
    }
}
```

That's it! watch out for small errors like the operators or the + and - pointers.
