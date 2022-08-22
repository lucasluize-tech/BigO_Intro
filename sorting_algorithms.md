# Sorting Algorithms

Comparison of items, to sort in some order. Numbers smallest to largest, sorting names
alphabetically, sorting movies by title or release year or revenue.. etc.

## Runtimes

Quadradic **O(n<sup>2</sup>)** , and at best **O(n log n )**.

- **Quadradic O(n<sup>2</sup>)**, are simple algorithms :

  - **BubbleSort** : slowly largest values move to the end of the dataset.

    ```js
    function bubbleSort(array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
      return array;
    }
    ```

  - **SelectionSort** : grab the min value from array , put first, compare next min , put
    second...and so on.
    ```js
    function selectionSort(array) {
      for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let idx;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < min) {
            min = array[j];
            idx = j;
          }
        }
        if (idx) {
          [array[idx], array[i]] = [array[i], array[idx]];
        }
      }
      return array;
    }
    ```
  - **insertionSort** : grab the next value compare with previous, if smaller move left
    until bigger than previous.
    ```js
    function insertionSort(array) {
      for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j > -1 && current < array[j]) {
          array[j + 1] = array[j];
          j--;
        }
        array[j + 1] = current;
      }
      return array;
    }
    ```

- **Intermediate** sorting **O(n logN)**
  n because we touch at least once, and log n to divide and conquer method.

  - **mergeSort**: we'll divide de array in half to get an array with 1 element, then
    we merge the new arrays, sorted.

    ```js
    // merge two sorted arrays. ( won't work without sorted arrays.)
    function merge(arr1, arr2) {
      let result = [];
      let a = 0;
      let b = 0;
      while (a < arr1.length && b < arr2.length) {
        if (arr1[a] <= arr2[b]) {
          result.push(arr1[a]);
          a++;
        } else {
          result.push(arr2[b]);
          b++;
        }
      }
      while (a < arr1.length) {
        result.push(arr1[a]);
        a++;
      }
      while (b < arr2.length) {
        result.push(arr2[b]);
        a++;
      }
      return result;
    }

    // merge([1,3,5,5,7,7,9],[2,4,4,6,8,8]) --> [1,2,3,4,4,5,5,6,7,7,8,8,9]

    //Now split array and rearrange.
    function mergeSort(array) {
      // divide the array into smaller arrays.
      if (array.length <= 1) return array; // base case
      const mid = Math.floor(array.length / 2);
      const left = mergeSort(array.slice(0, mid));
      const right = mergeSort(array.slice(mid));
      return merge(left, right);
    }
    ```

## JavaScript sort method

can be used in arrays and objects.

_Array.sort((a,b) => a - b)_  
// returns sorted from a to b. b-a returns sorted from b to a.

_Object.sort((a,b => {  
if (a.name < b.name) return -1;  
if (a.name > b.name) return 1;  
return 0;  
}_  
// for sorting objects by a property.
