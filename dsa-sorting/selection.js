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
module.exports = selectionSort;
